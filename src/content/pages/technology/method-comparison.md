---
title: "Method Comparison: Why Correlation Is Not Agreement"
slug: "technology/method-comparison"
description: "How to read a Passing-Bablok regression, a Bland-Altman plot and a total allowable error comparison — and why a correlation coefficient is the least informative number in a method comparison study."
faq:
  - q: "Why is a high correlation coefficient not evidence of agreement?"
    a: "Correlation measures whether two methods move together, and it is inflated by a wide spread of samples. Two methods can correlate at r = 0.98 while one reads systematically 20% higher than the other. Agreement requires bias and limits of agreement, which correlation does not describe."
  - q: "What is Passing-Bablok regression used for?"
    a: "It is a non-parametric regression that estimates slope and intercept between two methods while tolerating outliers and assuming measurement error in both. A slope significantly different from 1 or an intercept different from 0 indicates systematic difference rather than random scatter."
  - q: "How many samples are needed for a credible method comparison?"
    a: "In veterinary practice a minimum of about 40 samples is commonly used, but the sample distribution matters more than the count: samples must span the measuring interval and include clinically relevant low values. Narrow-range samples produce impressive correlations that mean very little."
---

# Method Comparison: Why Correlation Is Not Agreement

**Quick Answer** — A method comparison study answers a narrower question than most published comparisons suggest: *if I switch methods, will the numbers mean the same thing at the concentrations where I make decisions?* Answering it requires bias and agreement analysis (Passing-Bablok or Deming regression, Bland-Altman limits), not a correlation coefficient. A correlation of 0.98 with a 20% proportional bias describes two methods that disagree systematically.

## Quick Answer

Correlation answers "do they move together." Agreement answers "do they give the same number." In diagnostics, only the second question matters, and the first can be high while the second fails.

## The three analyses, and what each one contributes

| Analysis | What it estimates | What it cannot tell you |
|---|---|---|
| Correlation (r, r²) | Strength of linear association | Bias, agreement, clinical acceptability |
| Passing-Bablok / Deming regression | Slope and intercept between methods, accommodating error in both | Whether the disagreement matters clinically |
| Bland-Altman | Mean bias and limits of agreement across the range | Direction of the error at a specific value |

A complete comparison reports all three, and then answers a fourth question no statistic can answer: **is the disagreement larger than the total allowable error for this analyte?**

## Why least-squares regression is the wrong tool here

Ordinary least-squares regression assumes the reference method is error-free and the test method carries all the error. That is never true in a comparison where both are measured assays. It also gives outlier observations disproportionate influence, and immunoassay data contain outliers.

Passing-Bablok handles both problems: it is non-parametric, resistant to outliers, and assumes measurement error in both methods. Deming regression makes the same assumption parametrically, and requires an estimate of the error ratio. Either is defensible; ordinary least squares is not, and its use is the most common methodological error in vendor comparison documents.

## Reading the outputs

**Slope.** A slope of `[[ 1.08 ]]` with a confidence interval excluding 1.0 indicates proportional difference: the test method reads about 8% higher across the range. Proportional bias is the most consequential kind for monitoring, because it shifts every value and therefore every trend.

**Intercept.** A non-zero intercept indicates constant difference, which dominates at low concentrations — exactly where borderline clinical decisions are made.

**Bland-Altman.** Plot the difference against the mean. A fan-shaped pattern indicates proportional bias; a shifted band indicates constant bias. The limits of agreement state the range within which 95% of differences fall, and a clinician can read them directly: *if these two methods differ by up to X, is that acceptable for this decision?*

**Acceptance against total allowable error.** The comparison is only concluded when the observed difference is judged against a clinical tolerance. In veterinary clinical pathology, ASVCP-derived total allowable error goals are the conventional reference. `[[ State which TEa source and value applies per analyte. ]]`

## Study design requirements that decide credibility

1. **Sample count** — commonly 40 or more, but the distribution matters more: samples must span the measuring interval and include values near decision points.
2. **Sample type matching** — both methods must use the same specimen type, or the comparison measures sample handling rather than assay agreement.
3. **Native samples, not spiked.** Spiked pools flatten matrix effects and inflate agreement.
4. **Fresh samples within stability limits.** A stored sample compared fresh measures degradation.
5. **Range of clinical relevance.** A comparison built on healthy animals only says nothing about the high values that trigger treatment decisions.

`[[ State n, sample types, concentration range, the reference method, and whether samples were native, fresh, and from clinical cases. ]]`

## A worked reading

`[[ Insert the platform's actual comparison for one analyte. The structure below shows the required fields and the interpretation logic; no values may be published until measured. ]]`

| Field | Value |
|---|---|
| Analyte / species | `[[ ]]` |
| n | `[[ ]]` |
| Range covered | `[[ ]]` |
| Reference method | `[[ ]]` |
| Passing-Bablok slope (95% CI) | `[[ ]]` |
| Intercept (95% CI) | `[[ ]]` |
| Bland-Altman mean bias (95% LoA) | `[[ ]]` |
| TEa applied | `[[ ]]` |
| Conclusion | `[[ within / outside TEa ]]` |

## Five traps

1. **Quoting r without bias.** The most common reporting failure in this category.
2. **Narrow-range samples.** Inflates correlation and hides proportional bias.
3. **Comparing to an inappropriate reference.** If the comparator is a semi-quantitative strip, the study measures two approximations.
4. **Ignoring low-end behaviour.** Intercept effects live there and matter most.
5. **Switching methods mid-monitoring.** A published bias of 10–30% (as reported for canine CRP POCT evaluations) means a patient's trend can reverse without any biological change.

## The Author's Take

**Position.** Publishing a Bland-Altman plot and a bias figure is worth more than publishing a correlation coefficient, even when the bias figure is unflattering.

**Reasoning.** Every vendor in this category can show r > 0.9; the number has been normalised into meaninglessness. Bias is different: it is the number a laboratory director uses to decide whether existing reference intervals and historical patient data remain usable after a switch. A vendor that states its bias, and states which interval applies with it, is effectively helping the buyer migrate — and migration anxiety is one of the strongest barriers to switching platforms. Hiding the bias does not remove it; it just guarantees the buyer discovers it in the first month of use, which is the worst possible time.

**Disclosure.** Methodology per Passing-Bablok, Deming and Bland-Altman conventions; no new experimental data. Figures marked `[[ ]]` are placeholders for Migibio's studies.

## Sources

1. Passing H, Bablok W. A new biometrical procedure for testing the equality of measurements from two different analytical methods. *J Clin Chem Clin Biochem* 1983 — non-parametric regression for method comparison.
2. Bland JM, Altman DG. Statistical methods for assessing agreement between two methods of clinical measurement. *Lancet* 1986 — bias and limits of agreement.
3. CLSI EP09 — Measurement procedure comparison and bias estimation using patient samples.
4. ASVCP quality assurance guidelines — total allowable error in veterinary clinical pathology.
5. Evaluation of a novel quantitative canine species-specific point-of-care assay for C-reactive protein. *BMC Veterinary Research* 2018. https://doi.org/10.1186/s12917-018-1415-2 — reported proportional bias of 10–30% between POCT and reference methods, and the same-analyzer follow-up recommendation.

<!-- DATA REQUIRED before publication:
1. n, sample type, concentration range, clinical vs healthy distribution
2. Reference method identity and its own uncertainty
3. Passing-Bablok slope/intercept with 95% CI
4. Bland-Altman mean bias and 95% limits of agreement
5. TEa source and value per analyte
6. Statement on native vs spiked samples and sample freshness
-->
