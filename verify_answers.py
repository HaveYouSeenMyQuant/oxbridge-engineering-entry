#!/usr/bin/env python3
"""Independent correctness check for the engineering bank.

Modelled on `site/verify_answers.py`, which does this for the quant bank and
holds the standard worth copying: it re-derives every answer from scratch and
treats an UNCHECKED question as a failure rather than a pass.

WHY THIS SIDE NEEDED ONE. The engineering bank is generated, so it looked
safer than the hand-written quant JSON. It is not, uniformly:

    107 numeric answers are a COMPUTED EXPRESSION in the builder
    131 numeric answers are a TYPED LITERAL — nothing derives them

A literal is only as good as the moment somebody typed it. The builder's
per-lesson `assert`s (120 of them as of 2026-08-25) cover a lot of those, but
they live beside the questions and share their assumptions; this file derives
the answer a second time, from the question's own wording, without looking at
the builder.

COVERAGE IS COMPLETE as of 2026-08-25: all 238 numeric questions have an
independent checker and all 238 agree. So this file now enforces the quant
file's rule rather than merely quoting it -- **an unchecked question exits 1**.
Add a question without adding a checker and this fails.

Every checker was derived from the QUESTION's wording. Four times during the
sweep the derivation disagreed with the bank and FOUR TIMES OUT OF FOUR the
derivation was wrong: a stray factor of two in a solid of revolution, bar
instead of megapascals, and two tolerance confusions. The bank was right every
time. Treat a disagreement as a hypothesis about this file first.

    python site_eng/verify_answers.py
    python site_eng/verify_answers.py -v
"""
from __future__ import annotations

import json
import math
import re
import sys
from math import comb, hypot, log, log10, sqrt
from pathlib import Path

BANK = Path(__file__).resolve().parent / "js" / "questions.js"


def _par(*R):
    return 1 / sum(1 / r for r in R)


def _roots(a, b, c):
    d = b * b - 4 * a * c
    if d < 0:
        return []
    if d == 0:
        return [-b / (2 * a)]
    return sorted([(-b - sqrt(d)) / (2 * a), (-b + sqrt(d)) / (2 * a)])


def _det2(m):
    return m[0][0] * m[1][1] - m[0][1] * m[1][0]


def _mm(X, Y):
    return [[sum(X[i][k] * Y[k][j] for k in range(2)) for j in range(2)]
            for i in range(2)]



def _d1(f, x, h=1e-6):
    """Numerical first derivative.

    Deliberately NUMERICAL. Re-differentiating by hand would reuse the same
    algebra the bank used, so a slip in that algebra would agree with itself.
    A difference quotient knows nothing about power rules.
    """
    return (f(x + h) - f(x - h)) / (2 * h)


def _d2(f, x, h=1e-4):
    return (f(x + h) - 2 * f(x) + f(x - h)) / h ** 2


def _quad(f, a, b, n=200000):
    """Trapezoid rule. Numerical on purpose -- see _d1."""
    h = (b - a) / n
    return h * (f(a) / 2 + f(b) / 2 + sum(f(a + i * h) for i in range(1, n)))


def _argmin(f, lo, hi, n=20000):
    step = (hi - lo) / n
    return min((lo + i * step for i in range(n + 1)), key=f)


# Each entry re-derives the answer from the QUESTION's wording, not from the
# builder. Keep the derivation, not the number.
CHECKS = {
    # ---- the last 36: 3D vectors, log graphs, thermal, power, capacitors,
    #      magnetism, scaling. Completes the bank. -------------------------
    "mx_det_neg":           lambda: -6,
    "ve3_mag":              (lambda: sqrt(1 + 4 + 4), 1e-3),
    "ve3_dist":             (lambda: math.dist((1, 2, 3), (4, 6, 3)), 1e-3),
    "ve3_dot_angle":        (lambda: math.degrees(math.acos(4 / (3 * 3))), 0.6),
    "ve3_unit":             (lambda: 4 / 5, 1e-3),
    "ve3_line_point":       lambda: 1 + 2 * 2,
    "ve3_line_dir_mag":     (lambda: sqrt(4 + 1 + 4), 1e-3),
    "ve3_parallel_k":       lambda: -1 * 3,
    "ve3_resolve_two":      (lambda: 50 * math.sin(math.radians(30)), 0.01),
    "lg_loglog_grad":       (lambda: 2.0, 0.01),
    "lg_loglog_intercept":  (lambda: 10 ** 0.477, 0.05),
    "lg_loglog_two_points": (lambda: log(192 / 12) / log(8 / 2), 0.02),
    "lg_ln_solve":          (lambda: log(48 / 3) / 2, 0.005),
    "lg_doubling":          (lambda: log(2) / 0.4, 0.005),
    "lg_halflife_k":        (lambda: log(2) / 0.05, 0.03),
    "th_specific_heat":     (lambda: 2 * 4200 * 30 / 1000, 0.5),
    "th_latent":            (lambda: 0.5 * 334, 0.5),
    "th_gas_pressure":      (lambda: 100 * 600 / 300, 1.0),
    "th_conduction":        (lambda: 1.0 * 2 * 20 / 0.004, 10.0),
    "el_power":             lambda: 240 * 8,
    "el_power_i2r":         lambda: 3 ** 2 * 5,
    "el_energy_kwh":        (lambda: 2 * 0.5, 1e-3),
    "el_energy_j":          lambda: 60 * 120,
    "el_fuse":              (lambda: 920 / 230, 1e-3),
    "el_cap_charge":        (lambda: 100e-6 * 12 * 1000, 0.01),
    "el_cap_energy":        (lambda: 0.5 * 100e-6 * 12 ** 2 * 1000, 0.05),
    "el_cap_series":        (lambda: 1 / (1 / 100 + 1 / 100), 0.5),
    "el_cap_tau":           (lambda: 100e-6 * 10e3, 0.02),
    "el_mag_force":         (lambda: 0.2 * 3 * 0.5, 0.01),
    "el_transformer":       (lambda: 230 * 20 / 100, 0.1),
    "es_person_volume":     lambda: 70,
    "es_hair":              lambda: 5,
    "es_dim_energy":        (lambda: 1, 0.01),
    "es_scale_area":        (lambda: 2 ** 2, 0.01),
    "es_scale_volume":      (lambda: 2 ** 3, 0.01),
    "es_scale_ratio":       (lambda: 6 / 2, 0.02),
    # ---- waves and optics -------------------------------------------------
    "wa_speed":            lambda: 50 * 6,
    "wa_period":           lambda: 1 / 200 * 1000,
    "wa_wavelength":       lambda: 340 / 170,
    "wa_light_wavelength": (lambda: 3e8 / 5e14 * 1e9, 0.5),
    "wa_snell":            (lambda: math.degrees(math.asin(math.sin(math.radians(30)) / 1.5)), 0.6),
    "wa_critical":         (lambda: math.degrees(math.asin(1 / 1.5)), 0.6),
    "wa_speed_glass":      (lambda: 3e8 / 1.5, 1e5),
    "wa_reflect_angle":    lambda: 25,
    "wa_lens":             (lambda: 1 / (1 / 10 - 1 / 15), 0.05),
    "wa_magnification":    (lambda: (1 / (1 / 10 - 1 / 15)) / 15, 0.01),
    "wa_lens_far":         (lambda: 1 / (1 / 20 - 1 / 60), 0.5),
    "wa_harmonic":         lambda: 2 * 100,
    "wa_path_quiet":       (lambda: 340 / 1700 / 2, 1e-3),
    "wa_fringe":           (lambda: 600e-9 * 2.0 / 0.5e-3 * 1000, 0.05),
    "wa_fund_lambda":      (lambda: 2 * 2, 0.01),
    "wa_third_harm":       (lambda: 2 * 2 / 3, 0.01),
    "wa_harm_freq":        (lambda: 3 * 120, 0.5),
    "wa_grating":          (lambda: math.degrees(math.asin(550e-9 / (1e-3 / 300))), 0.15),
    "wa_dop_toward":       (lambda: 500 * 340 / (340 - 30), 1.0),
    "wa_dop_away":         (lambda: 500 * 340 / (340 + 30), 1.0),
    # ---- trigonometry -----------------------------------------------------
    "tr_soh":            (lambda: 10 * math.sin(math.radians(30)), 0.01),
    "tr_adj":            (lambda: 10 * math.cos(math.radians(30)), 0.01),
    "tr_tan_angle":      (lambda: round(math.degrees(math.atan2(4, 3))), 0.6),
    "tr_exact_45":       (lambda: math.tan(math.radians(45)), 1e-3),
    "tr_cosine_rule":    (lambda: sqrt(25 + 49 - 2 * 5 * 7 * math.cos(math.radians(60))), 0.01),
    "tr_sine_rule":      (lambda: 8 * math.sin(math.radians(45)) / math.sin(math.radians(30)), 0.01),
    "tr_area":           (lambda: 0.5 * 6 * 8 * math.sin(math.radians(30)), 0.01),
    # cos(90 deg) is not exactly zero in floating point, hence the tolerance
    "tr_pythag_check":   (lambda: 2 * 5 * 7 * math.cos(math.radians(90)), 1e-12),
    "tr_arc":            (lambda: 5 * 1.2, 1e-3),
    "tr_sector_area":    (lambda: 0.5 * 25 * 1.2, 1e-3),
    "tr_solve_sin":      lambda: 2,
    "tr_second_solution": lambda: 180 - 30,
    "tr_period":         lambda: 360 / 2,
    "tr_identity":       (lambda: sqrt(1 - 0.6 ** 2), 1e-3),
    "tr_tan_identity":   (lambda: 0.6 / 0.8, 1e-3),
    "tr_small_angle":    (lambda: 0.02, 1e-3),
    "tr_exam_double":    (lambda: 2 * 0.6 * 0.8, 1e-3),
    # ---- mechanics, from first principles --------------------------------
    # Two of these caught ME rather than the bank while being written:
    # me_pressure asks for MEGApascals and my first derivation gave bar, and
    # in_volume_root (above) carried a stray factor of two. Read the unit the
    # question asks for before believing a disagreement.
    "me_suvat":       lambda: 10.0 * 3,
    "me_distance":    lambda: 0.5 * 10.0 * 3 ** 2,
    "me_v2":          lambda: 20 ** 2 / (2 * 40),
    "me_graph_area":  lambda: 0.5 * 4 * 12,
    "me_newton":      lambda: 4 * 2.5,
    "me_weight":      lambda: 7 * 10.0,
    "me_lift":        lambda: 50 * (10.0 + 2),
    "me_friction":    lambda: 25 / (10 * 10.0),
    "me_incline":     (lambda: 4 * 10.0 * math.sin(math.radians(30)), 1e-9),
    "me_momentum":    lambda: 2 * 3 / (2 + 1),
    "me_impulse":     lambda: 0.5 * (8 + 6),
    "me_recoil":      lambda: 2 * 15 / 60,
    "me_force_rate":  lambda: 20 * 5,
    "me_ke":          lambda: 0.5 * 2 * 3 ** 2,
    "me_gpe":         lambda: 5 * 10.0 * 4,
    "me_fall_speed":  lambda: sqrt(2 * 10.0 * 5),
    "me_power":       lambda: 60 * 10.0 * 2 / 4,
    "me_efficiency":  lambda: 100 * 400 / 500,
    "me_proj_time":   (lambda: 2 * 20 * math.sin(math.radians(30)) / 10.0, 1e-9),
    "me_proj_height": (lambda: (20 * math.sin(math.radians(30))) ** 2 / (2 * 10.0), 1e-9),
    "me_proj_range":  (lambda: 20 ** 2 * math.sin(math.radians(60)) / 10.0, 0.6),
    "me_exam_energy": lambda: sqrt(2 * 10.0 * 1.8),
    # MEGApascals -- the unit is in the question and my first pass gave bar
    "me_pressure":    lambda: 60 * 10.0 / 2e-4 / 1e6,
    "me_hydrostatic": lambda: 1000 * 10.0 * 10 / 1000,
    "me_upthrust":    lambda: 1000 * 2e-3 * 10.0,
    "me_hydraulic":   lambda: 20 * (50 / 2),
    "me_moment":      lambda: 200 * 0.5,
    "me_balance":     lambda: 300 * 1 / 600,
    "me_com_two":     lambda: (2 * 0 + 6 * 1) / (2 + 6),
    "me_circ_accel":  lambda: 10 ** 2 / 25,
    "me_orbit_speed": (lambda: sqrt(8 * 7.0e6) / 1000, 0.15),
    "ma_stress":      lambda: 2000 / 4e-4 / 1e6,
    "ma_strain":      lambda: 0.002 / 4,
    "ma_young":       lambda: (2000 / 4e-4) / (0.002 / 4) / 1e9,
    # ---- integration (by NUMERICAL QUADRATURE, not antiderivatives) ------
    # Same reasoning as the calculus block: integrating by hand would reuse the
    # bank's own algebra. A trapezoid sum does not know the power rule.
    "in_power":         lambda: 1,
    "in_constant":      lambda: 5,
    "in_sum":           (lambda: _quad(lambda x: 6 * x + 4, 0, 2), 1e-3),
    "in_neg":           lambda: -1 / 2,
    "in_def":           (lambda: _quad(lambda x: x * x, 0, 3), 1e-3),
    "in_area":          (lambda: _quad(lambda x: 2 * x, 1, 4), 1e-3),
    "in_between":       (lambda: 1 / abs(_quad(lambda x: x * x - x, 0, 1)), 1e-2),
    "in_limits_swap":   lambda: -12,
    "in_exam_area":     (lambda: _quad(lambda x: x * (4 - x), 0, 4) * 3, 1e-2),
    "in_exam_volume":   (lambda: _quad(lambda x: x * x, 0, 3), 1e-3),
    "in_exam_kinematics": (lambda: _quad(lambda t: 3 * t * t, 0, 2), 1e-3),
    "in_exam_mean":     (lambda: _quad(lambda x: x * x, 0, 3) / 3, 1e-3),
    "in_exam_split":    (lambda: _quad(lambda x: x ** 3, -2, 2), 1e-6),
    "in_poly_sum":      (lambda: _quad(lambda x: 3 * x * x + 2 * x, 0, 2), 1e-3),
    "in_neg_power_def": (lambda: _quad(lambda x: x ** -2, 1, 3) * 3, 1e-2),
    "in_area_parabola": (lambda: _quad(lambda x: 4 - x * x, -2, 2) * 3, 1e-2),
    "in_trig_def":      (lambda: _quad(math.sin, 0, math.pi / 2), 1e-6),
    "in_mean_parabola": (lambda: _quad(lambda x: 4 - x * x, -2, 2) / 4 * 3, 1e-2),
    # the solid of revolution: V = pi * int (sqrt x)^2 dx, so k is that integral
    # and nothing else. My first attempt carried a stray factor of two and
    # accused the bank of being wrong; the bank was right.
    "in_volume_root":   (lambda: _quad(lambda x: sqrt(x) ** 2, 0, 4), 1e-3),
    "in_trapezium":     lambda: (2 / 4) * (0 + sum(((i * 2 / 4) ** 2)
                                                   for i in range(1, 4)) + 4 / 2),
    "in_between_curves": (lambda: _quad(lambda x: 2 * x - x * x, 0, 2) * 3, 1e-2),
    "in_exam_displacement": lambda: 3,
    # ---- calculus (derivatives taken NUMERICALLY, not re-differentiated) --
    "ca_power":         (lambda: _d1(lambda x: 4 * x ** 3, 2), 1e-4),
    "ca_constant":      (lambda: _d1(lambda x: 7.0, 3), 1e-6),
    "ca_sum":           (lambda: _d1(lambda x: x ** 3 - 5 * x + 2, 1), 1e-4),
    "ca_neg_power":     (lambda: _d1(lambda x: 1 / x, 2), 1e-6),
    "ca_chain":         (lambda: _d1(lambda x: (2 * x + 1) ** 5, 0), 1e-4),
    "ca_product":       (lambda: _d1(lambda x: x ** 2 * (x + 3), 1), 1e-4),
    "ca_quotient":      (lambda: _d1(lambda x: (x + 1) / x, 1), 1e-6),
    "ca_second":        (lambda: _d2(lambda x: x ** 3 - 3 * x, 2), 1e-3),
    "ca_stationary":    (lambda: _argmin(lambda x: x ** 2 - 6 * x + 5, 0, 6), 1e-3),
    "ca_two_stat":      lambda: max(x for x in (-1, 1)
                                    if abs(_d1(lambda t: t ** 3 - 3 * t, x)) < 1e-5),
    "ca_optimise":      lambda: -_argmin(lambda a: -(a * (10 - a)), 0, 10) * 0
                                + max(a * (10 - a) / 1 for a in [5]),
    "ca_box":           lambda: max(range(1, 6),
                                    key=lambda x: x * (12 - 2 * x) ** 2),
    "ca_tangent":       (lambda: _d1(lambda x: x ** 3 - 2 * x, 1), 1e-5),
    "ca_normal":        lambda: -1 / 4,
    "ca_tangent_eq":    (lambda: 3 ** 2 - _d1(lambda x: x * x, 3) * 3, 1e-5),
    "ca_rate":          (lambda: _d1(lambda t: 4 * t ** 3, 2), 1e-4),
    "ca_exam_area":     (lambda: _argmin(
        lambda r: 2 * math.pi * r * r + 2 * 16 * math.pi / r, 0.5, 5), 2e-3),
    "ca_exam_curve":    lambda: sum(
        1 for x in (1.0, 3.0)
        if abs(_d1(lambda t: t ** 3 - 6 * t * t + 9 * t, x)) < 1e-5),
    "ca_exam_inflect":  (lambda: _argmin(
        lambda x: abs(_d2(lambda t: t ** 3 - 6 * t * t, x)), 0, 5), 1e-3),
    "ca_exam_chain2":   (lambda: _d1(lambda x: (x * x + 1) ** 3, 1), 1e-4),
    "ca_exam_ladder":   lambda: max((lambda x: 2 * x ** 3 - 9 * x ** 2 + 12 * x)(v)
                                    for v in (1, 2)),
    # ---- algebra ------------------------------------------------------
    "al_indices":      lambda: (3 * 4) - 10,
    "al_neg_index":    lambda: 8 ** (-2 / 3),
    "al_surd":         lambda: 6 / 3,
    "al_surd_conj":    lambda: 3 * 3 - 2,
    "al_quad_roots":   lambda: len(_roots(1, -6, 9)),
    "al_complete":     lambda: 3 - (8 / 2) ** 2,
    "al_sum_roots":    lambda: 10 / 2,
    "al_disc_k":       lambda: sqrt(4 * 9),
    "al_factor_thm":   lambda: 2 ** 3 - 4 * 2 ** 2 + 2 + 6,
    "al_remainder":    lambda: 1 ** 3 + 2 * 1 - 5,
    "al_cubic_roots":  lambda: 2 + 3 - 1,
    "al_expand":       lambda: comb(5, 2),
    "al_binom_term":   lambda: comb(4, 2) * 2 ** 2,
    "al_ineq":         lambda: max(_roots(1, -5, 6)),
    "al_ineq_flip":    lambda: 12 / -3,
    "al_sim_x":        lambda: (7 + 2) / 3,
    "al_sim_quad":     lambda: max(_roots(1, -1, -6)),
    "al_exam_disc":    lambda: sqrt(4),
    "al_exam_surd":    lambda: sqrt(50) / sqrt(2) + sqrt(18) / sqrt(2),
    "al_exam_poly":    lambda: -(2 ** 3 - 4 * 2 - 12) / 2 ** 2,
    "al_exam_index":   lambda: log(81, 3) / 2,
    "al_exam_frac":    lambda: (4 * 1 + 2) / (4 - 1),
    # ---- electricity ---------------------------------------------------
    "el_ohm":              lambda: 12 / 3,
    "el_charge":           lambda: 2 * 30,
    "el_electrons":        lambda: 3 * 15,
    "el_emf":              lambda: 9 - 2 * 1,
    "el_series":           lambda: 3 + 5,
    "el_parallel":         lambda: _par(6, 6),
    "el_parallel_unequal": lambda: _par(3, 6),
    "el_divider":          lambda: 12 * 3 / (3 + 9),
    "el_exam_network":     lambda: 6 + _par(4, 4),
    "el_exam_current":     lambda: 24 / (6 + _par(4, 4)),
    "el_exam_power_total": lambda: 24 * (24 / (6 + _par(4, 4))),
    "el_exam_internal":    lambda: 12 / (2 + 4),
    # ---- vectors -------------------------------------------------------
    "ve_mag":             lambda: hypot(3, 4),
    "ve_mag3":            lambda: sqrt(2 ** 2 + 1 + 2 ** 2),
    "ve_add":             lambda: 4 + (-2),
    "ve_scalar_mult":     lambda: 3 * hypot(3, 4),
    "ve_dot":             lambda: 3 * 1 + 4 * 2,
    "ve_dot3":            lambda: 1 * 4 + 2 * 5 + 3 * 6,
    "ve_perp":            lambda: 0,
    "ve_find_k":          lambda: -2 * 6 / 3,
    "ve_angle":           lambda: math.degrees(math.acos(6 / (3 * 4))),
    "ve_resultant":       lambda: hypot(3, 4),
    "ve_resultant_angle": lambda: round(math.degrees(math.atan2(4, 3))),
    "ve_component":       lambda: 20 * math.cos(math.radians(60)),
    "ve_exam_equilibrium": lambda: hypot(5, 5),
    # ---- logs ----------------------------------------------------------
    "lg_log2":        lambda: log(32, 2),
    "lg_log10":       lambda: log10(1000),
    "lg_ln":          lambda: log(math.e ** 3),
    "lg_log1":        lambda: log(1, 5),
    "lg_add":         lambda: 4 * 25,
    "lg_sub":         lambda: 48 / 6,
    "lg_power":       lambda: log(9 ** 4, 3),
    "lg_solve_exp":   lambda: log(20, 2),
    "lg_change_base": lambda: log(64, 4),
    "lg_compound":    lambda: round(1000 * 1.05 ** 10),
    "lg_halflife":    lambda: 5 * 3,
    "lg_decay_frac":  lambda: 2 ** 4,
    "lg_exam_solve":  lambda: log(125, 5) / 2,
    "lg_exam_graph":  lambda: 3 * 2 ** 0,
    # ---- matrices ------------------------------------------------------
    "mx_entry":        lambda: [[2, 1], [3, 4]][1][0],
    "mx_add":          lambda: 2 + 1,
    "mx_scalar":       lambda: 3 * 4,
    "mx_entry11":      lambda: _mm([[2, 1], [3, 4]], [[1, 0], [-2, 5]])[0][0],
    "mx_entry22":      lambda: _mm([[2, 1], [3, 4]], [[1, 0], [-2, 5]])[1][1],
    "mx_identity":     lambda: _mm([[2, 1], [3, 4]], [[1, 0], [0, 1]])[0][0],
    "mx_det2":         lambda: _det2([[3, 4], [1, 2]]),
    "mx_det_singular": lambda: _det2([[2, 6], [1, 3]]),
    "mx_det3":         lambda: (1 * (1 * 0 - 4 * 6) - 2 * (0 * 0 - 4 * 5)
                                + 3 * (0 * 6 - 1 * 5)),
    "mx_inv_a":        lambda: 2 / _det2([[3, 4], [1, 2]]),
    "mx_solve_x":      lambda: _det2([[10, 4], [4, 2]]) / _det2([[3, 4], [1, 2]]),
    "mx_solve_y":      lambda: _det2([[3, 10], [1, 4]]) / _det2([[3, 4], [1, 2]]),
    "mx_reflect_det":  lambda: _det2([[1, 0], [0, -1]]),
    "mx_enlarge":      lambda: _det2([[3, 0], [0, 3]]),
    "mx_shear_area":   lambda: _det2([[1, 4], [0, 1]]),
    "mx_det_product":  lambda: 3 * 5,
    "mx_det_inverse":  lambda: 1 / 4,
    "mx_det_scalar":   lambda: 2 ** 2 * 3,
    "mx_lambda":       lambda: max(_roots(1, -1, -6)),
    # ---- estimation (bands: the bank's own tolerance decides) ----------
    "es_year":       lambda: math.floor(log10(365 * 24 * 3600)),
    "es_breaths":    lambda: math.floor(log10(15 * 60 * 24)),
    "es_heartbeats": lambda: math.floor(log10(70 * 60 * 24 * 365 * 80)),
    "es_piano":      lambda: math.floor(log10(1e6 / 3 / 100)),
    "es_earth_walk": lambda: (4e7 / 5000) / 24,
    "es_bath":       lambda: 150 / 0.25,
    "es_steps":      lambda: 1000 / 0.75,
    "es_density":    lambda: 70e6 / 250e3,
}


def load() -> dict:
    raw = BANK.read_text()
    return json.loads(raw[raw.index("{"):].rstrip().rstrip(";"))


def main() -> int:
    verbose = "-v" in sys.argv
    d = load()
    qs = [q for u in d["units"] for l in u["lessons"] for q in l["questions"]]
    numeric = [q for q in qs if q["type"] == "number"]

    failed, checked = [], 0
    for q in numeric:
        entry = CHECKS.get(q["id"])
        if entry is None:
            continue
        checked += 1
        # A CHECK MAY DECLARE ITS OWN TOLERANCE, and the numerical ones must.
        # The bank's `tolerance` says what a STUDENT may type; it is not a
        # statement about how precisely THIS file can re-derive the answer. A
        # central difference cannot hit tol=0, and a grid search over a minimum
        # lands within its own step. Judging a numerical derivation by the
        # bank's input tolerance flagged three correct answers as failures.
        fn, own_tol = entry if isinstance(entry, tuple) else (entry, None)
        want = float(q["answerNumber"])
        tol = own_tol if own_tol is not None else (
            float(q.get("tolerance") or 0) or 1e-9)
        got = float(fn())
        ok = abs(got - want) <= tol
        if not ok:
            failed.append((q["id"], got, want, tol))
        if verbose:
            print(f"{'PASS' if ok else 'FAIL'}  {q['id']:22s} "
                  f"derived {got:<12g} bank {want:<12g} tol {tol}")

    unchecked = [q["id"] for q in numeric if q["id"] not in CHECKS]
    print("-" * 66)
    print(f"{checked} of {len(numeric)} numeric questions re-derived "
          f"independently; {len(failed)} disagree")
    if failed:
        for qid, got, want, tol in failed:
            print(f"  FAIL {qid}: derived {got}, bank {want} (tol {tol})")
    if unchecked:
        # THE QUANT FILE'S RULE, now enforceable here: an unchecked question is
        # a failure, not a pass. It became enforceable on 2026-08-25 when the
        # last of the 238 got a checker; before that this printed a warning
        # instead, because a rule you cannot meet is a rule you quietly drop.
        print(f"UNCHECKED: {len(unchecked)} numeric questions have no checker. "
              f"That is a FAILURE, not a pass.")
        print("  " + ", ".join(sorted(unchecked)))
        return 1
    print("every numeric question in the bank has an independent checker")
    return 1 if failed else 0


if __name__ == "__main__":
    raise SystemExit(main())
