---
title: "Reference Intervals for Quantitative Veterinary POCT: Why They Cannot Be Borrowed"
slug: "technology/reference-intervals"
description: "Reference intervals are valid only for the analyser, reagent and method that produced them: why platform-specific intervals matter, how they are established, and how reference change values enable monitoring."
faq:
  - q: "Why can't I use a reference interval from another laboratory or textbook?"
    a: "Reference intervals depend on the analyzer, reagent and method that produced them. Published comparisons of in-house veterinary analysers found that most manufacturer-supplied limits did not fall within locally calculated confidence intervals, and cross-platform comparisons show proportional bias. An interval is only valid for the platform that generated it."
  - q: "What is a reference change value (RCV) and why publish it?"
    a: "RCV is the smallest change between two results that exceeds normal analytical and biological variation, calculated from the assay's coefficient of variation and the within-subject biological variation. Publishing it allows clinicians to distinguish real improvement or deterioration from assay noise when monitoring a patient."
  - q: "How many reference individuals are needed to establish an interval?"
    a: "CLSI EP28 recommends a minimum of 120 reference individuals for a de novo non-parametric interval, and about 20 for validating an interval transferred from a donor laboratory. When fewer samples are used, the sample size and the statistical method must be stated so the limitation is visible."
---

# Reference Intervals for Quantitative Veterinary POCT: Why They Cannot Be Borrowed

## Quick Answer

A reference interval is only valid for the analyzer, reagent, and method that produced it. Published comparisons between in-house veterinary analysers and reference laboratories have found that most manufacturer-supplied limits do not survive local verification, and direct comparisons across platforms routinely show proportional bias. For a quantitative point-of-care platform, the defensible position is to establish and publish your own intervals with a stated sample size and statistical method — and to tell clinicians that a value from another platform is not comparable.

---

## The problem with everything you have read elsewhere

Most veterinary reference intervals in circulation come from one of three places: a textbook, a reagent insert, or another laboratory's website. Each is legitimate in its own context, and each is wrong for a different platform.

The mechanism is not subtle. Immunoassays differ in antibody pairs, calibration material, matrix handling, and signal interpretation. Two assays measuring the same analyte in the same species can differ by a proportional bias large enough to move a decision across a clinical threshold. In the canine C-reactive protein point-of-care literature, reported biases against reference methods commonly sit in the 10–30% range, and the same studies recommend that follow-up samples be run on the same analyzer — precisely because the bias is systematic, not random.

The reference interval problem compounds this. A 2015 study comparing feline plasma biochemistry on three in-house analysers and a commercial laboratory calculated intervals from 53 clinically normal cats and then checked the manufacturer-provided limits against them: **of 102 manufacturer-provided reference limits, 29 (28%) fell within the 90% confidence intervals of the calculated limits.** In other words, roughly seven out of ten borrowed limits did not match the population on the instrument in front of the clinician.

Textbooks do not escape this either. Cornell's diagnostic laboratory states the position plainly: intervals are established in their laboratory from healthy animals on their own equipment, and because results are analyzer-, method- and reagent-dependent, those intervals are valid only for results from that laboratory.

---

## What a defensible reference interval requires

The methodology is standardised; the discipline is what most vendors skip.

**1. Define the reference population before collecting samples.** Species, breed considerations, age band, sex, and health criteria must be fixed in advance, not adjusted after the data arrive. "Healthy" needs an operational definition: history, physical examination, and where relevant, screening tests.

**2. Sample size.** The guideline-recommended approach is a minimum of 120 reference individuals for a de novo non-parametric interval; 20 or more is the floor for *validating* an interval transferred from a donor laboratory. Below that, an interval can still be published, but the uncertainty must be stated.

**3. Partition only where justified.** Age is the partition that matters most for veterinary POCT and the one most often ignored: puppies and kittens are not small adults, and several analytes shift measurably in the first year. Partitioning by sex or breed without a demonstrated difference just fragments the data.

**4. Choose the statistical method to match the distribution.** Non-parametric (with 90% confidence intervals on each limit) is the default under CLSI EP28 for n ≥ 120. Parametric methods require a demonstrated Gaussian distribution after transformation. Robust methods exist for smaller n but must be named.

**5. Report n, method, and confidence intervals.** An interval without a sample size is an assertion, not a measurement.

**6. Verify, then re-verify.** Reference intervals drift with reagent lot changes, calibration shifts, and population changes. A stated review date is part of the interval, not an afterthought.

---

## Validation vs transference: the cheaper path most labs could take

Establishing intervals de novo is expensive. CLSI EP28 describes a lower-cost route: adopt intervals from a donor laboratory and **validate** them by testing a small set of reference individuals (commonly 20) and checking that no more than a defined small proportion fall outside the donor limits.

The catch is important and is documented in the veterinary literature: transference validation consistently fails when pre-analytical and analytical conditions differ meaningfully between donor and receiving laboratory. Validation of a preexisting interval is an option; establishing your own is the more durable answer — particularly for a manufacturer publishing to the field, where the audience cannot run the validation themselves.

---

## The reference change value (RCV): the number that makes monitoring possible

A reference interval answers "is this abnormal for a healthy population." It does not answer the question clinicians actually ask on a recheck: **"is this change real?"**

That is a different calculation, and it requires the assay's own imprecision:

```
RCV = 1.96 × √2 × √(CVa² + CVi²)
```

where `CVa` is the analytical coefficient of variation at the relevant concentration (from your precision study) and `CVi` is the within-subject biological variation for the analyte and species. A change smaller than the RCV cannot be distinguished from normal variation.

This is the single most useful thing a POCT manufacturer can publish after the reference interval itself, because it converts the device from a snapshot instrument into a monitoring instrument. For any analyte used to follow treatment — CRP, SAA, SDMA, NT-proBNP, progesterone — the monitoring use case is where the commercial value sits.

> **Data pending.** This section reports measured values from internal validation studies. They are published once the supporting study is complete; the current report is available from technical support on request.

---

## Reference intervals on the Migibio platform

> **Data pending.** This section reports measured values from internal validation studies. They are published once the supporting study is complete; the current report is available from technical support on request.

| Analyte | Species | Age band | n | LL (90% CI) | UL (90% CI) | Unit | Method | Study date |
|---|---|---|---|---|---|---|---|---|
| cCRP | Canine | Adult 1–7 y | Pending | Pending | Pending | mg/L | Pending | Pending |
| cCRP | Canine | < 1 y | Pending | Pending | Pending | mg/L | Pending | Pending |
| fSAA | Feline | Adult | Pending | Pending | Pending | mg/L | Pending | Pending |
| SDMA | Canine / Feline | Adult | Pending | Pending | Pending | µg/dL | Pending | Pending |
| cPL | Canine | Adult | Pending | Pending | Pending | µg/L | Pending | Pending |

> **Data pending.** This section reports measured values from internal validation studies. They are published once the supporting study is complete; the current report is available from technical support on request.

---

## How clinicians should use these numbers

1. **Use our interval only with our platform.** A value from a reference laboratory, another POCT device, or a different Migibio generation is not transferable.
2. **Prefer serial change over absolute values** for any monitoring decision, and compare the delta against the RCV published here.
3. **Treat the interval as a population statement.** An individual animal — a greyhound, a heavily muscled working dog, a neonate — can sit outside the population interval while being entirely normal.
4. **Never use a reference interval as a diagnostic cut-off** unless a clinical decision limit has been separately established for that purpose. The two are different statistics derived from different populations.

---

## Six errors we see in the field

1. **Importing a cut-off from a conference slide.** Decision limits are assay-specific even more than reference intervals.
2. **Partitioning by breed without evidence.** Except where a breed effect is documented, partitioning simply shrinks n.
3. **Using a 95% interval as a disease threshold.** By construction, 5% of healthy animals fall outside it.
4. **Ignoring age.** The most common cause of a "falsely abnormal" paediatric result.
5. **Comparing across a lot change without a control.** A reagent shift can look like a clinical trend.
6. **Publishing an interval without n.** It cannot be challenged, verified, or improved.

---

## The Author's Take

**Position.** For a manufacturer in this category, publishing platform-specific reference intervals — with sample size, statistical method, and review date — is the highest-return content investment available, and the hesitation around it is misplaced.

**Reasoning.** The instinct against publishing is understandable: an interval can be criticised, and a critic can compare it with published values from other platforms and conclude something is wrong. But the alternative — publishing nothing and telling clinicians to "interpret against the kit IFU and your own validation" — transfers the entire burden to the buyer, who cannot discharge it. Clinics do not run reference interval studies. What they do is search for a number, find one from a different platform, and use it. That outcome is worse than being criticised, because it is silent.

There is also a defensive argument that is rarely made: a published interval with a documented method is evidence of a functioning quality system. The veterinary literature's finding that 28% of supplied limits failed verification is not an argument against publishing — it is an argument that most vendors are publishing *unverified* numbers, and that a vendor which verifies has something to say.

**Disclosure.** This page cites published methodology and literature; it does not report new experimental data. Figures marked are placeholders for Migibio's own studies and must not be published unreplaced.

---

## Sources

1. CLSI EP28-A3c — Defining, establishing, and verifying reference intervals in the clinical laboratory (reference population definition, minimum sample sizes, non-parametric method, transference validation).
2. Baral RM, Dhand NK, Krockenberger MB, Govendir M. Assessments of feline plasma biochemistry reference intervals for three in-house analysers and a commercial laboratory analyser. *J Feline Med Surg* 2015;17(8):667–679. doi:10.1177/1098612X14544346 — 28% of manufacturer limits within calculated 90% CIs; call for practice-specific intervals.
3. Cornell University College of Veterinary Medicine, Animal Health Diagnostic Center — Reference Intervals methodology statement (intervals valid only for the originating laboratory's equipment and reagents; minimum 50 adult healthy animals; age limitation).
4. Geffré A, Concordet D, Trumel C, Braun JP. Validation of preexisting reference intervals: can the procedure be applied to canine hemostasis? *J Vet Diagn Invest* 2011;23(2):343–347 — transference validation fails when pre-analytical and analytical conditions differ.
5. Evaluation of a novel quantitative canine species-specific point-of-care assay for C-reactive protein. *BMC Veterinary Research* 2018. https://doi.org/10.1186/s12917-018-1415-2 — 10–30% proportional bias between POCT and reference method; same-analyzer follow-up recommendation.
6. ASVCP reference interval guidelines for veterinary species (partitioning and statistical practice).

---
