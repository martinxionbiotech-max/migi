---
title: "Interference and Cross-Reactivity in Immunoassays: What to Test and What to Report"
slug: "technology/interference"
description: "Hemolysis, lipemia, icterus, biotin, heterophile antibodies and cross-reacting analytes — how interference is tested, how it should be reported, and why 'no interference observed' needs a concentration."
faq:
  - q: "What is the difference between interference and cross-reactivity?"
    a: "Interference is a substance in the sample that distorts the measurement of the intended analyte without being structurally related to it — hemolysis, lipemia, drugs, biotin. Cross-reactivity is a structurally similar molecule binding the antibody and producing a signal attributed to the intended analyte. Both produce a wrong number; they are tested differently and reported separately."
  - q: "Does 'no interference observed' mean anything without a concentration?"
    a: "No. Interference is a dose-dependent phenomenon: a statement without the tested concentration tells the reader neither what was tested nor up to what level the conclusion holds. A useful claim reads 'no significant interference at hemoglobin up to X g/L', and the design behind it should be stated."
  - q: "Why does biotin matter in immunoassays?"
    a: "Streptavidin-biotin systems amplify signal, and high-dose biotin from supplements can saturate the binding sites and produce falsely low or falsely high results depending on assay architecture. The effect is architecture-specific, so the compatibility statement must be per assay rather than per platform."
---

# Interference and Cross-Reactivity: What to Test and What to Report

**Quick Answer** — Interference testing asks whether substances commonly present in sick animals — free hemoglobin, triglycerides, bilirubin, drugs, biotin, heterophile antibodies — distort the result. Cross-reactivity testing asks whether structurally similar molecules bind the antibody and are reported as the intended analyte. Both must be reported with the concentration tested, because interference is dose-dependent, and a claim without a concentration cannot be evaluated.

## Quick Answer

A vendor statement that reads "no interference" is not a result; it is a summary of a study that the reader cannot check. The publishable form is a threshold per interferent per analyte, with the testing design stated.

## Interference versus cross-reactivity

| | Interference | Cross-reactivity |
|---|---|---|
| Mechanism | Non-specific distortion of the measurement | Structurally related molecule binds the antibody |
| Typical sources | Hemolysis, lipemia, icterus, drugs, biotin, heterophile antibodies | Related hormones, metabolites, species variants |
| Tested by | Spiking at defined concentrations, recovery measurement | Purified analogues across a dilution series |
| Clinical effect | Wrong value with correct identity | Wrong analyte reported as the intended one |

The distinction matters because the mitigation differs. Interference is managed by sample quality control and reporting flags; cross-reactivity is managed by assay design and by interpreting results in species and clinical context.

## The interferences that actually occur in veterinary samples

1. **Hemolysis.** Free hemoglobin absorbs light and releases intracellular contents. Its direction of effect varies by assay architecture; it is never safe to assume one direction.
2. **Lipemia.** Turbidity scatters light; the effect depends on detection mode and on the lipid concentration, which in a sick animal can be extreme.
3. **Icterus.** Bilirubin absorbs in overlapping wavelengths; relevant in hepatobiliary disease where several of these assays are ordered.
4. **Biotin.** Common in supplements; the effect is architecture-specific and can be large.
5. **Heterophile antibodies and rheumatoid factor.** Patient antibodies that bridge reagent antibodies, producing false positives that repeat consistently and therefore look real.
6. **Drugs and treatment effects.** Some therapies alter the analyte itself rather than the measurement — which is clinical information, not interference, and must not be conflated with it.

## What a defensible interference study contains

- **Spike-and-recovery design** at multiple concentrations of the interferent, across at least two analyte levels (low and high).
- **Acceptance criterion stated in advance** — commonly a percentage change relative to the unspiked sample.
- **Native sample base**, not buffer, so that matrix effects are represented.
- **Direction of effect reported**, not only magnitude.
- **Species relevance** — a study on human plasma does not transfer to canine or feline samples.

> **Data pending.** This section reports measured values from internal validation studies. They are published once the supporting study is complete; the current report is available from technical support on request.

## Reporting structure

| Analyte | Interferent | Tested concentration | Effect | Acceptable up to |
|---|---|---|---|---|
| Pending | Hemoglobin | Pending | Pending | Pending |
| Pending | Triglycerides | Pending | Pending | Pending |
| Pending | Bilirubin | Pending | Pending | Pending |
| Pending | Biotin | Pending | Pending | Pending |

**Cross-reactivity:**

| Analyte | Cross-reactant | Concentration tested | Apparent result |
|---|---|---|---|
| Pending | Pending | Pending | Pending |

## What to do when interference is suspected in practice

1. **Repeat on a fresh sample** rather than correcting arithmetically.
2. **Check linearity by dilution.** A result that does not dilute proportionally is suspicious — of interference, or of antigen excess (see the hook effect page).
3. **Compare against clinical plausibility.** A normal result in a critically ill animal is a reason to re-test, not a reason to relax.
4. **Record the flag in the patient record.** The next clinician needs to know the result carried a caveat.
5. **Do not average two discordant results.** Averaging hides the disagreement that is the diagnostic information.

## Five traps

1. **Quoting "no interference" without concentrations.** Unfalsifiable.
2. **Testing only at midrange.** Interference is proportionally largest at low analyte concentrations.
3. **Using spiked buffer instead of native matrix.** Understates matrix effects.
4. **Ignoring direction.** A negative bias on a monitoring assay looks like improvement.
5. **Treating drug effects as interference.** Therapy altering an analyte is clinical data; mislabelling it as assay failure leads to repeat testing and delay.

## The Author's Take

**Position.** Interference data is the least glamorous and most practically useful table on a POCT technical page — more useful, in day-to-day clinic operation, than a headline LoD.

**Reasoning.** A clinic will rarely operate near the limit of detection, but it will regularly run samples from hemolysed, lipemic, jaundiced animals, because those are the animals that are sick. The practical question a clinician faces is "this sample is visibly hemolysed — can I trust this number?", and only this table answers it. Vendors deprioritise interference studies because they do not appear in head-to-head brochures, which is exactly why publishing them creates differentiation at low cost: the study is not expensive compared with a clinical validation trial, and almost no competitor publishes thresholds in a usable form.

**Disclosure.** Written from CLSI interference-testing conventions and general immunoassay practice; no new experimental data. Values marked are placeholders for Migibio's validation studies.

## Sources

1. CLSI EP07 — Interference testing in clinical chemistry (spike-and-recovery design, acceptance criteria, reporting).
2. CLSI EP17 — detection capability (interaction of interference with LoD claims).
3. Reference to be added.
4. ASVCP quality assurance guidelines — interference and sample quality in veterinary testing.

<!-- DATA REQUIRED before publication:
1. Per-analyte interference studies (hemoglobin, triglycerides, bilirubin) with concentrations and effect direction
2. Biotin compatibility statement per assay architecture
3. Heterophile antibody / RF risk statement and mitigation
4. Cross-reactivity panels for structurally related analytes
5. Acceptance criteria used, and study identifiers
-->
