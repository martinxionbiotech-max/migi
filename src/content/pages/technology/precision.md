---
title: "Precision in Veterinary POCT: What CV Actually Tells You"
slug: "technology/precision"
description: "Repeatability and intermediate precision on the FICT platform: how precision is measured, why CV at low concentration decides clinical usefulness, and how to distinguish a real change from assay noise."
faq:
  - q: "What is the difference between repeatability and intermediate precision?"
    a: "Repeatability is variation within a single run, with one operator, one reagent lot and one day. Intermediate precision adds operators, days and lots, and therefore reflects what a clinic will actually experience. The gap between the two numbers tells you how much of the observed variation belongs to the assay and how much belongs to the environment it is used in."
  - q: "Why is CV at low concentration more important than CV at high concentration?"
    a: "Relative imprecision is usually largest at low concentration, and low concentration is where the clinically decisive question is asked: is this mildly elevated, or is this normal? A CV quoted only at a high concentration describes the part of the measuring interval where decisions are least sensitive to error."
  - q: "How does precision affect monitoring a patient over time?"
    a: "A change between two results can only be interpreted as clinical if it exceeds the combined analytical and biological variation, expressed as a reference change value. Without precision data at the relevant concentration, a clinician cannot separate improvement from assay noise."
---

# Precision: What CV Tells You and What It Hides

**Quick Answer** — Precision describes how closely repeated measurements of the same sample agree. It is reported in two levels: repeatability (within one run, one operator, one lot) and intermediate precision (across days, operators and lots). For a monitoring assay, the number that matters is the coefficient of variation at the concentration where clinical decisions are made — usually the low end of the measuring interval, where relative imprecision is largest.

## Quick Answer

Precision is not a single number. A platform can hold CV below 5% at midrange and CV above 15% near the limit of quantification, and both statements can be true and correctly measured. Vendors that publish one figure are usually publishing the most favourable one.

## The two levels, and why the gap matters

**Repeatability** answers: if I run the same sample five times in a row, how much do the results vary? This is a statement about the assay chemistry and the cartridge.

**Intermediate precision** answers: if I run the same sample five times across five days, with two operators and two lots, how much do the results vary? This is a statement about the system as a clinic will experience it.

The difference between the two is the interesting quantity. A platform with 3% repeatability and 8% intermediate precision is telling you that the assay is tight but the environment is not — sample handling, temperature, calibration state, or lot variation are contributing five percentage points. That is actionable information for a clinic: it tells them to control those variables. A platform reporting only the 3% figure has removed the part of the story the buyer needs.

## How precision studies are designed

The standard design (CLSI EP05) uses nested runs: multiple replicates per run, multiple runs per day, multiple days, more than one lot. The output is variance components — within-run, between-run, between-day, between-lot — combined into repeatability and intermediate precision.

> **Data pending.** This section reports measured values from internal validation studies. They are published once the supporting study is complete; the current report is available from technical support on request.

Three details that change the meaning of the number:

1. **How many concentration levels.** Precision must be characterised at low, mid and high — typically near LoQ, mid-interval, and near the upper limit. Three levels, minimum.
2. **Whether samples were native or spiked.** Spiked samples reduce matrix effects and typically flatter the result. Native patient samples are the honest design.
3. **Whether the lot was constant.** Between-lot variation included or excluded must be stated; it is the difference between a lab study and a field claim.

## Reading a precision table

> **Data pending.** This section reports measured values from internal validation studies. They are published once the supporting study is complete; the current report is available from technical support on request.

| Analyte | Level | Mean | Within-run CV | Intermediate CV | Design | Data on file |
|---|---|---|---|---|---|---|
| Pending | Low (near LoQ) | Pending | Pending | Pending | Pending | Pending |
| Pending | Mid | Pending | Pending | Pending | Pending | Pending |
| Pending | High | Pending | Pending | Pending | Pending | Pending |

**Editorial note:** a table with three levels per analyte and a visible design column is more defensible than a single headline CV, because a reviewer can check whether the design matches the claim.

## Why the low-concentration CV decides usefulness

Consider a dog treated for pancreatitis, measured on admission and again at 48 hours. The result falls from one value to a lower one — a fall of about 17%. Is that improvement?

It depends entirely on imprecision at those concentrations. If intermediate precision near 70 is CV = 8%, the combined analytical variation around each result is wide enough that a 17% apparent drop is inside the noise band. If precision there is CV = 3%, the same drop is real. Same numbers, opposite clinical conclusions, and only the vendor can supply the information that resolves it.

This is also why a single pooled CV across the whole measuring interval is misleading: it averages the tight midrange with the loose ends and reports a number that describes no actual decision point.

## Precision is half of the monitoring equation

Even perfect analytical precision does not tell a clinician whether a change is meaningful, because biology varies within an individual too. The combination is expressed as a reference change value:

```
RCV = 1.96 × √2 × √(CVa² + CVi²)
```

`CVa` comes from the precision study at the relevant concentration; `CVi` is within-subject biological variation for the analyte and species, taken from literature. Publishing RCV per analyte converts precision data into a clinical instruction: changes larger than X are real.

> **Data pending.** This section reports measured values from internal validation studies. They are published once the supporting study is complete; the current report is available from technical support on request.

## Six errors in how precision is reported and used

1. **A single CV for the whole interval.** Hides the low-end behaviour that matters most.
2. **Repeatability quoted as if it were total precision.** Overstates field performance.
3. **Spiked samples only.** Understates matrix effects.
4. **Averaging across analytes.** A platform-level CV is a marketing number, not a performance statement.
5. **Using CV to judge a single patient change without CVi.** Analytical variation alone is an incomplete criterion.
6. **Comparisons across time without a control after a lot change.** Precision excludes a shift that has already occurred.

## The Author's Take

**Position.** Precision should be published as a matrix — analyte × concentration level × design — not as a headline number, and the low-concentration row should be the most prominent one on the page.

**Reasoning.** Headline CVs are chosen for how they read, not for what they describe. Every vendor in this category quotes a favourable figure, so the figure has stopped carrying information; a matrix does, because it forces the vendor to show where the assay is weak. That is also a commercial argument: a clinic that knows the assay is tight at midrange and looser near LoQ will use it correctly — trending markers at midrange, confirming borderline values by repeat — and will therefore blame the assay less often, not more. Vendors hide weak rows because they expect criticism; in practice, a stated weak row accompanied by a usage rule prevents the very misapplication that generates complaints.

**Disclosure.** Methodology per CLSI EP05; no new experimental data reported. Figures marked are placeholders for Migibio's internal studies and must not be published unreplaced.

## Sources

1. CLSI EP05 — Evaluation of precision of quantitative measurement procedures (nested design, repeatability and intermediate precision, variance components).
2. CLSI EP28-A3c — reference interval methodology (used alongside precision for interpretation limits).
3. ASVCP quality assurance guidelines — total allowable error conventions in veterinary clinical pathology.
4. Evaluation of a novel quantitative canine species-specific point-of-care assay for C-reactive protein. *BMC Veterinary Research* 2018. https://doi.org/10.1186/s12917-018-1415-2 — reported intra- and inter-assay CVs across concentration bands in a veterinary POCT setting.

<!-- DATA REQUIRED before publication:
1. Design statement (samples, replicates/run, runs/day, days, lots)
2. Three concentration levels per analyte with mean and CVs
3. Between-lot component
4. Native vs spiked sample design
5. CVi sources per analyte/species for RCV
6. Study identifiers for reviewer requests
-->
