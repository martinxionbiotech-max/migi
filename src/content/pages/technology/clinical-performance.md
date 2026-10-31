---
title: "Clinical Performance: Sensitivity, Specificity and Why Prevalence Changes Everything"
slug: "technology/clinical-performance"
description: "How diagnostic sensitivity and specificity are established, why predictive values shift with prevalence, and what a credible clinical performance section must state about population, reference standard and sample size."
faq:
  - q: "What is the difference between sensitivity and positive predictive value?"
    a: "Sensitivity is the proportion of diseased animals that test positive, and it is a property of the assay in a defined population. Positive predictive value is the probability that an animal testing positive actually has the disease, and it depends on how common the disease is in the population being tested. The same assay can have high sensitivity and low predictive value where disease is rare."
  - q: "Why can two clinics get different predictive values from the same test?"
    a: "Because their populations differ. A shelter screening for parvovirus in an outbreak has a high prevalence and therefore a high positive predictive value; a referral hospital screening the same test in a low-prevalence population will see more false positives among its positives. Neither clinic is using the test incorrectly — they are applying one assay to different prior probabilities."
  - q: "What reference standard is needed to establish clinical performance?"
    a: "A standard that is independent of the assay under evaluation and that is as close to truth as available for that condition — a validated PCR, culture, histopathology, or a composite adjudicated diagnosis. Using a comparator assay of similar design as the reference understates disagreement and inflates apparent accuracy."
---

# Clinical Performance: Sensitivity, Specificity and Why Prevalence Changes Everything

**Quick Answer** — Clinical performance describes how often a test agrees with truth in a defined population: sensitivity (positive in disease) and specificity (negative in health), each with a confidence interval, a reference standard and a described population. Those two numbers do not tell a clinician what a result means for the animal in front of them — that requires prevalence. A vendor claim of "99% accuracy" without prevalence, population and reference standard is not a clinical claim; it is a slogan.

## Quick Answer

Analytical performance asks whether the assay can measure. Clinical performance asks whether the result corresponds to disease. They are separate studies with separate failure modes, and conflating them is the most common error in veterinary POCT marketing.

## The four numbers

| Measure | Definition | Depends on |
|---|---|---|
| Sensitivity | TP / (TP + FN) | Assay, disease stage, population spectrum |
| Specificity | TN / (TN + FP) | Assay, population, comparator |
| PPV | TP / (TP + FP) | Sensitivity, specificity **and prevalence** |
| NPV | TN / (TN + FN) | Same, in the opposite direction |

Sensitivity and specificity are properties of the test in a population. PPV and NPV are properties of the *testing situation*. This is the single most consequential distinction in diagnostic interpretation, and it is routinely omitted from product pages.

## The arithmetic, illustrated

Assume a test with 95% sensitivity and 95% specificity — deliberately round numbers, used here as arithmetic illustration, not as a performance claim.

**Low-prevalence setting (10%):**

- 1,000 animals → 100 diseased, 900 healthy
- True positives 95; false negatives 5
- True negatives 855; false positives 45
- **PPV = 95 / (95 + 45) = 68%**
- **NPV = 855 / (855 + 5) = 99%**

**High-prevalence setting (50%):**

- 1,000 animals → 500 diseased, 500 healthy
- True positives 475; false negatives 25
- True negatives 475; false positives 25
- **PPV = 475 / (475 + 25) = 95%**
- **NPV = 475 / (475 + 25) = 95%**

Same assay. Same sensitivity and specificity. The positive predictive value moves from 68% to 95% purely because the population changed. In the low-prevalence setting, roughly one in three positives is a false positive — and no property of the assay can fix that. Only a confirmatory test or a higher prior probability can.

## What a credible clinical performance section states

1. **The population** — species, age, clinical presentation, and how cases and controls were recruited. A study of hospitalised suspects is not transferable to a shelter screening programme.
2. **The reference standard**, and its own imperfection. If the comparator is another immunoassay, the study measures agreement between two approximations.
3. **Case definition** — what counted as diseased, and whether ambiguous cases were adjudicated.
4. **Sample size**, and confidence intervals on sensitivity and specificity. A 100% sensitivity from 12 cases has a lower confidence bound in the seventies.
5. **Spectrum** — disease severity and stage in the case group. A test validated on severe cases will underperform in early or mild disease.
6. **Whether samples were prospective and consecutive**, or selected. Selected samples inflate apparent accuracy.

> **Data pending.** This section reports measured values from internal validation studies. They are published once the supporting study is complete; the current report is available from technical support on request.

| Analyte | n | Population | Reference standard | Sensitivity (95% CI) | Specificity (95% CI) |
|---|---|---|---|---|---|
| Pending | Pending | Pending | Pending | Pending | Pending |

## Spectrum bias, in one paragraph

A test evaluated in severely affected animals and healthy controls will look better than the same test used to distinguish mild disease from other mild disease. The comparison groups differ in ways that make the signal easy to separate. Clinically, the hard cases are the ones in the middle, and they are precisely the cases excluded by a severe-versus-healthy design. When a vendor reports very high sensitivity, the useful follow-up question is: *in what spectrum of disease?*

## What to ask of any claim

1. What was the reference standard, and was it independent?
2. What population, and how were cases recruited?
3. Consecutive or selected?
4. What n, and what are the confidence intervals?
5. What prevalence did the study population represent?
6. Are the samples the same specimen type the clinic will use?

A vendor that answers all six is publishing evidence. A vendor that answers only the first two is publishing a summary.

## The Author's Take

**Position.** Publishing a prevalence-adjusted interpretation table — "in a population like this, a positive means this" — is more useful to a clinician than any headline accuracy figure, and almost nobody in this category does it.

**Reasoning.** Clinicians do not experience sensitivity; they experience the animal in front of them and a result. The practical question is always "how much should I trust this positive?", and the answer is a function of their own prevalence, not of the vendor's study. A vendor that supplies a small table showing PPV across two or three realistic prevalence scenarios — outbreak, symptomatic suspect, routine screening — is effectively handing the clinic the interpretation framework, which is the part clinicians most often get wrong and least often admit. It also protects the vendor: when a clinic in a low-prevalence setting sees false positives, the documented framework already told them to expect it.

**Disclosure.** The arithmetic illustration uses assumed values (95%/95%) chosen for transparency and is not a performance claim for any Migibio product. Figures marked are placeholders for Migibio's clinical studies.

## Sources

1. Reference to be added.
2. CLSI EP12 — qualitative test performance evaluation (case definition, reference standard, disagreement resolution).
3. STARD 2015 reporting guideline for diagnostic accuracy studies — required reporting elements.
4. General diagnostic-accuracy literature on spectrum bias and prevalence-dependent predictive values.

<!-- DATA REQUIRED before publication:
1. Per-analyte clinical studies: n, population, case definition
2. Reference standard used and its independence
3. Sensitivity and specificity with 95% confidence intervals
4. Disease spectrum in the case group
5. Prospective vs selected sampling statement
6. Prevalence scenarios relevant to the target markets (for the interpretation table)
-->
