---
title: "Glossary: Measurement, Markers and Reporting Terms"
slug: "glossary"
description: "Forty working definitions for veterinary point-of-care testing — limits of detection and quantification, precision, method comparison, reference intervals, predictive values, and the markers themselves — each with the clinical mistake it is most often attached to."
faq:
  - q: "What is the difference between a reference interval and a decision limit?"
    a: "A reference interval describes the central 95% of values in a healthy population. A decision limit is a threshold chosen to drive a clinical action, and it is derived from outcome data rather than from a healthy population. Using one as the other is a common and consequential error."
  - q: "What does LoQ mean in practice?"
    a: "The lowest concentration that can be reported with acceptable total error at a stated CV target. Below the LoQ an assay can still detect the analyte, but the number is not reliable enough to trend or to compare visits."
  - q: "Why does the same analyte give different numbers on different platforms?"
    a: "Because assays use different antibodies, calibrators and signal systems, producing proportional bias. The difference is systematic, not random, which is why reference intervals and decision limits do not transfer between platforms."
---

# Glossary: Measurement, Markers and Reporting Terms

Working definitions, written for clinical use rather than for a textbook. Each entry ends with the mistake the term is most often attached to, because that is the part which changes behaviour.

## Analytical performance

**Limit of blank (LoB).** The highest result expected from a sample containing no analyte, at a stated probability (usually 95%). It describes the assay's noise floor. *Trap:* treating LoB as a detection claim.

**Limit of detection (LoD).** The lowest concentration expected to be detected above blank at a stated probability. A detection claim, not a measurement claim. *Trap:* reporting a value at LoD as if it were a concentration.

**Limit of quantification (LoQ).** The lowest concentration reportable with acceptable total error, defined by a precision goal chosen in advance (often CV ≤ 20%). This is where an assay stops being a detector and starts being a measurement. *Trap:* quoting "sensitivity" without saying whether LoD or LoQ is meant.

**Measuring interval (reportable range).** The span from LoQ to the upper limit of linearity within which values are reported without dilution. *Trap:* reporting a value above the interval as a maximum rather than diluting.

**Linearity.** Whether the signal-to-concentration relationship remains proportional across the range, verified by dilution rather than asserted. *Trap:* assuming linearity from a single calibration point.

**Precision (repeatability).** Agreement between replicate measurements in one run, one operator, one lot, one day. *Trap:* quoting repeatability as if it were field performance.

**Precision (intermediate).** Agreement across days, operators and lots — what a clinic actually experiences. *Trap:* ignoring the gap between repeatability and intermediate precision, which shows how much of the variation is the clinic rather than the cartridge.

**Coefficient of variation (CV).** Standard deviation divided by the mean, expressed as a percentage. Relative imprecision is largest at low concentrations. *Trap:* quoting a single CV for the whole measuring interval.

**Total allowable error (TEa).** The largest error considered clinically acceptable for an analyte, used as the acceptance criterion in method comparisons and QC. *Trap:* comparing methods without a TEa reference.

**Calibration.** Establishing the signal-to-concentration relationship for a specific reagent lot. *Trap:* confusing calibration (establishes) with QC (verifies).

**Traceability.** The unbroken chain of comparisons linking a reported value to a defined reference. For many veterinary analytes the chain ends at a manufacturer's master lot. *Trap:* claiming international traceability without naming the standard.

**Matrix.** The biological material being measured — serum, plasma, whole blood, urine, faeces. *Trap:* assuming serum and plasma are interchangeable.

**Interference.** A non-specific substance in the sample distorting the measurement (hemoglobin, lipids, bilirubin, biotin, heterophile antibodies). *Trap:* publishing "no interference" without concentrations.

**Cross-reactivity.** A structurally related molecule binding the antibody and being reported as the intended analyte. *Trap:* conflating cross-reactivity with interference — they are tested differently.

**Hook effect (antigen excess).** In sandwich assays, very high concentrations saturate both antibodies and reduce signal, producing a falsely low or negative result. *Trap:* reporting a borderline negative in a severely affected animal without a dilution check.

**Passing-Bablok regression.** A non-parametric method comparison regression tolerant of outliers and assuming error in both methods. *Trap:* using ordinary least squares, which assumes the reference method is error-free.

**Deming regression.** A parametric method comparison regression accounting for error in both methods. *Trap:* applying it without an estimate of the error ratio.

**Bland-Altman plot.** Difference against mean, showing bias and limits of agreement. *Trap:* reporting a correlation coefficient instead, which measures association rather than agreement.

**Reference interval.** The central 95% of values from a defined healthy population, with stated n and method. *Trap:* borrowing an interval from another platform, or treating it as a diagnostic threshold.

**Decision limit.** A threshold chosen to trigger a clinical action, derived from outcome data. *Trap:* using a reference limit as a decision limit.

**Reference change value (RCV).** The smallest change between two results that exceeds analytical and biological variation, calculated from analytical CV and within-subject biological variation. *Trap:* acting on a change smaller than the RCV.

**Diagnostic sensitivity.** Proportion of diseased animals that test positive, in a defined population. *Trap:* applying a study figure from a severe-case population to a screening setting.

**Diagnostic specificity.** Proportion of healthy animals that test negative. *Trap:* ignoring that spectrum and comparator choice change it.

**Positive predictive value (PPV).** Probability that a positive result is a true positive; depends on prevalence. *Trap:* reading PPV as a property of the assay rather than of the testing situation.

**Negative predictive value (NPV).** Probability that a negative result is a true negative; likewise prevalence-dependent. *Trap:* using a high NPV from one setting to reassure in another.

**Prevalence.** Proportion of the tested population with the condition. *Trap:* assuming a cattery or outbreak figure applies to an individual household.

## Markers

**C-reactive protein (CRP).** Major acute-phase protein in dogs; rises within hours, falls quickly. A weak responder in cats. *Trap:* using CRP as the feline inflammatory marker.

**Serum amyloid A (SAA).** The dominant feline acute-phase protein; rises and falls faster than immunoglobulins. *Trap:* interpreting feline SAA with canine reference intervals.

**SDMA (symmetric dimethylarginine).** Filtration marker less influenced by muscle mass than creatinine. *Trap:* treating it as a replacement for creatinine or as a marker of kidney damage.

**Cystatin C.** Low-molecular-weight filtration marker, largely muscle-mass independent, with a thinner veterinary evidence base than SDMA. *Trap:* presenting it as superior rather than orthogonal.

**NT-proBNP.** Stable fragment released with ventricular wall stress; useful for ruling out heart failure in dyspnoeic patients. *Trap:* using it to screen asymptomatic animals.

**Pancreatic lipase immunoreactivity (cPL / fPL).** Pancreas-specific lipase measurement. *Trap:* importing decision thresholds from another commercial assay.

**Total T4.** Sum of bound and free thyroxine. *Trap:* diagnosing hypothyroidism from a low T4 alone, ignoring euthyroid-sick syndrome and drugs.

**Free T4.** The unbound fraction; better sensitivity in early feline hyperthyroidism, worse specificity in sick cats. *Trap:* using it as a general screen.

**TSH.** Pituitary feedback hormone; the pairing partner that turns a T4 result into a diagnosis. *Trap:* interpreting T4 without it.

**Cortisol.** Adrenal end product; a single value cannot diagnose Cushing's. *Trap:* treating a resting cortisol as diagnostic in either direction, apart from a high value making Addison's unlikely.

**Progesterone.** Luteal hormone; the practical way to time ovulation. *Trap:* reading an elevated value as pregnancy — it confirms ovulation only.

**Relaxin.** Placental hormone; confirms pregnancy after implantation. *Trap:* using it to time breeding, which is a category error.

**Tu/ml (test units).** An assay-defined unit, valid only with a published definition and conversion status. *Trap:* leaving it undefined, which makes values incomparable with literature and across platforms.

## Reporting

**Below LoQ.** Reported as "< [LoQ]" with the limit stated. *Trap:* reporting zero, which implies a measurement that was not made.

**Above measuring interval.** Flagged for dilution. *Trap:* truncating to a maximum value.

**Method labelling.** Stating which platform produced a result. *Trap:* mixing two methods under one analyte name in the same record.

## The Author's Take

**Position.** A glossary is the cheapest page on a technical site to write and the most expensive one to get wrong, because it is what an AI system or a new clinician will quote without context.

**Reasoning.** Definitions propagate. If a glossary entry says "reference range", a hundred downstream documents will use the wrong term; if it says "reference interval, established on this platform with n and method", the downstream documents inherit the discipline. That is why every entry above ends with a trap rather than a synonym — the value is not in knowing what LoD stands for, it is in knowing that quoting it as sensitivity is a misrepresentation. On a site whose entire argument is that numbers must be interpretable, the glossary is where that argument is either kept or broken.

**Disclosure.** Definitions summarise CLSI conventions and standard veterinary usage; no new data. Where a definition depends on platform-specific values, the relevant page is linked.

## Related pages

- [Analytical performance](/technology/analytical-performance/) · [Precision](/technology/precision/) · [Method comparison](/technology/method-comparison/)
- [Reference intervals](/technology/reference-intervals/) · [Clinical performance](/technology/clinical-performance/)
- [Units and reporting](/technology/units-and-reporting/) · [Interference](/technology/interference/) · [Hook effect](/technology/hook-effect/)

## Sources

1. CLSI EP05 / EP06 / EP07 / EP09 / EP17 / EP28 — precision, linearity, interference, method comparison, detection capability, reference intervals.
2. ASVCP quality assurance guidelines — total allowable error and veterinary practice.
3. Reference to be added.
