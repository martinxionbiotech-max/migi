---
title: "Quality Control in a Point-of-Care Clinic: What to Run, How Often, and What to Do When It Fails"
slug: "technology/quality-control"
description: "A tiered quality control plan for veterinary POCT: control materials, monitoring rules, lot-change verification, and the decision rules that separate a real shift from normal variation."
faq:
  - q: "How often should a point-of-care analyzer be quality controlled?"
    a: "Frequency should scale with test volume and with the cost of a wrong result, not with a single fixed rule. Low-volume clinics typically run controls at the start of each testing day and after any lot change; higher-volume or multi-operator sites add controls per shift. The defensible statement is the one written into your SOP with a rationale, not the one copied from another laboratory."
  - q: "What is the difference between calibration and quality control?"
    a: "Calibration establishes the relationship between signal and concentration, and it is performed when the lot changes, after service, or when QC indicates a shift. Quality control verifies that the established relationship still holds on a given day. Running a control does not calibrate the instrument, and calibrating does not verify performance."
  - q: "Which QC rule should a veterinary clinic use?"
    a: "A practical minimum is a mean-and-range chart per control level with a 1-3s rejection rule plus a 2-2s rule to catch systematic shift. More elaborate Westgard combinations are useful at higher volume. What matters more than the rule set is that the rule is written down, applied consistently, and that failures are documented with the action taken."
---

# Quality Control: What to Run, How Often, and What to Do When It Fails

**Quick Answer** — Quality control exists to detect change, not to prove correctness: a control confirms that today's instrument, reagent lot and operator reproduce the value the system produced when it was characterised. In a veterinary point-of-care setting the realistic plan is a tiered one — controls at defined intervals, a written rule set, mandatory verification after lot changes and service, and documented action when a rule fires. A QC programme without a written rejection rule is a record-keeping exercise.

## Quick Answer

Most clinics do not fail QC because they lack controls; they fail because they have no rule that says what a failing control means and what happens next.

## The distinction that prevents most confusion

| Activity | Question answered | When performed |
|---|---|---|
| Calibration | What is the signal-to-concentration relationship for this lot? | Lot change, service, drift confirmed by QC |
| Quality control | Does the relationship still hold today, with this operator, on this instrument? | Per SOP schedule |
| Proficiency testing | Does my laboratory agree with peers on the same material? | Periodically, externally |

Confusing the first two is the most common structural error: a clinic that "calibrates" when a control fails has removed the evidence that something changed.

## What QC can and cannot detect

QC detects **systematic and random change** in the measurement system: reagent degradation, lot-to-lot shift, temperature drift, pipetting deterioration, operator technique differences.

QC does not detect:

- pre-analytical error in the patient sample (wrong tube, hemolysis, delay)
- an assay used outside its validated sample type
- a clinical misinterpretation of a correct number
- a hook effect (see the antigen excess page)

This matters when a clinic blames "the machine" for a discordant result. The machine's own verification may be entirely normal.

## A tiered plan that fits real clinics

| Site profile | Controls | Additional |
|---|---|---|
| Low volume (< 5 tests/day) | One control level at start of testing day; two levels weekly | Verification after every lot change |
| Moderate (5–30/day) | Two levels at start of day, one level per shift | Documented operator sign-off |
| High volume / multi-site | Two levels per shift, rotating third level | Monthly review of charts by a responsible person |

> **Data pending.** This section reports measured values from internal validation studies. They are published once the supporting study is complete; the current report is available from technical support on request.

## The monitoring chart

Plot each control value against its established mean and limits. Two rules cover most real-world failures:

- **1-3s** — one control exceeds ±3 SD: reject the run. Single-point, large deviation: usually a random or gross error.
- **2-2s** — two consecutive controls exceed ±2 SD on the same side: reject and investigate. This is the shift detector, and it is the rule most clinics omit.

> **Data pending.** This section reports measured values from internal validation studies. They are published once the supporting study is complete; the current report is available from technical support on request.

## When a rule fires, in order

1. **Stop reporting patient results.**
2. **Check the obvious** — control storage, expiry, reconstitution, cartridge temperature, sample volume.
3. **Repeat the control in a fresh aliquot.** A single event may be a handling error.
4. **If it repeats: recalibrate or replace the lot**, then re-run controls before resuming.
5. **Record** the failure, the investigation, and the resolution. This record is what turns an incident into quality evidence.
6. **Review retrospectively** — identify which patient results were reported on the failing system and whether they need repeating.

> **Data pending.** This section reports measured values from internal validation studies. They are published once the supporting study is complete; the current report is available from technical support on request.

## Lot change: the highest-risk moment

A new reagent lot is the single most likely cause of an undetected shift, because the instrument, operator and environment are unchanged — only the chemistry moved. The defensible procedure:

1. Run controls on the new lot before using it for patients.
2. Compare the new lot's control values with the previous lot's recorded mean.
3. Where the difference exceeds the established acceptance criterion, investigate before reporting any patient result.
4. Retain the previous lot until the new one is verified.

A monitoring assay is especially exposed: a lot shift looks exactly like a patient improving or deteriorating, and no clinical judgement can distinguish them after the fact.

## Documentation that survives an audit

Minimum record set per testing day: control values, operator, instrument ID, lot numbers, any rule violations, action taken, and the responsible reviewer. Regulatory and distributor audits in this category ask for exactly this, and a clinic that cannot produce it loses the ability to defend any result.

## The Author's Take

**Position.** QC is the cheapest credibility a clinic can buy, and the least glamorous thing a vendor can teach — which is why it is worth doing as a vendor.

**Reasoning.** A quantitative platform shifts the clinic's failure modes: instead of a strip that looks faintly positive, the clinic now reports a number with three significant figures. That precision invites a trust the underlying process may not deserve, and QC is the only mechanism that keeps the two aligned. Vendors who supply a control protocol, a chart template and a one-page rule card are not adding a feature; they are protecting the platform's reputation in the field, because the alternative — a clinic reporting confident numbers from a drifted instrument — eventually gets attributed to the product rather than the process.

**Disclosure.** Written from general laboratory quality practice and CLSI conventions; no new experimental data. Values marked are placeholders for Migibio's control specifications.

## Sources

1. CLSI C24 — Statistical quality control for quantitative measurement procedures (control rules, chart design, error detection).
2. Westgard JO et al. — multirule QC procedures (1-3s, 2-2s, R-4s, 4-1s, 10x).
3. ASVCP quality assurance guidelines — quality control practice in veterinary laboratories.
4. Reference to be added.

<!-- DATA REQUIRED before publication:
1. Recommended control materials and levels per analyte
2. Established means and SDs
3. Acceptance limits and rule set adopted
4. Required action on failure, and escalation path
5. Lot-change verification procedure and acceptance criterion
6. Documentation template fields
-->
