---
title: "LOD, LOQ and CV: Reading a Quantitative Test's Real Specs"
slug: "lod-loq-cv-reading-quantitative-specs"
description: "A 'sensitive' test is a claim; LOD, LOQ and CV are the numbers that prove it. Here is how to read a spec sheet without being fooled."
pubDate: "2026-09-05"
author: "Dr. Tang"
dateModified: "2026-09-05"
category: "blog"
faq: [{"q": "What is the limit of detection (LOD)?", "a": "The LOD is the lowest concentration of analyte the test can reliably distinguish from zero — it tells you whether something is present at all. A lower LOD means the test can detect fainter amounts, but LOD says nothing about how accurately it can quantify that faint amount."}, {"q": "What is the limit of quantitation (LOQ)?", "a": "The LOQ is the lowest concentration the test can measure with acceptable accuracy and precision. It is always higher than the LOD. The gap between them matters: a test may be able to detect an analyte at the LOD but only reliably quantify it at the LOQ — and it is the LOQ that you need for clinical decisions."}, {"q": "What is the coefficient of variation (CV)?", "a": "CV is a measure of precision — how reproducible the result is when you run the same sample repeatedly. It is expressed as a percentage, and a lower CV means tighter repeatability. A CV under about 10% is the common expectation for a good quantitative point-of-care test."}, {"q": "Why do LOD, LOQ and CV matter together?", "a": "Because they answer different questions. LOD answers 'can it detect it?', LOQ answers 'can it quantify it accurately?', and CV answers 'will the answer be the same next time?'. A test needs all three to be trustworthy — a low LOD with a poor CV is still an unreliable test."}, {"q": "Is 'sensitivity' the same as a low LOD?", "a": "No — this is a common confusion. Analytical sensitivity relates to the LOD (how faint a signal it can detect), while diagnostic sensitivity is the percentage of true cases the test correctly identifies. They are different concepts, and a low LOD does not automatically mean a high diagnostic sensitivity."}, {"q": "What should I actually check on a spec sheet?", "a": "Four things: the LOD and LOQ (are they low enough for the clinical range you need?), the CV (is it under about 10%?), the linear range (the concentration span where the result is proportional to the amount), and the reference interval. The combination, not any single number, is what makes a test usable."}]
---

> **TL;DR** — A spec sheet's real value is in three numbers: the **LOD** (limit of detection — the faintest amount it can see), the **LOQ** (limit of quantitation — the faintest it can measure *accurately*), and the **CV** (coefficient of variation — how repeatable the result is, usually as a percentage). The traps are two: LOD and LOQ are not the same thing (detecting is easier than quantifying), and "sensitivity" is used to mean two different things — analytical sensitivity (≈ LOD) and diagnostic sensitivity (the % of true cases caught). A useful rule of thumb: a good quantitative point-of-care test keeps its CV under about **10%** and its LOQ comfortably below the clinical decision range. Check all three together — a low LOD with a poor CV is still an unreliable test.

---

## In Plain Terms

A test's accuracy is not one number; it is three. "Can it see the thing at all?" (LOD), "Can it measure the thing accurately once it sees it?" (LOQ), and "Will it give the same answer twice?" (CV). A spec sheet that only quotes one of these is selling you a partial story.

---

## The Three Numbers, Defined

| Metric | Question it answers | What you want |
|---|---|---|
| **LOD** (limit of detection) | Can it detect it? | Low enough to catch the faintest clinically relevant amount |
| **LOQ** (limit of quantitation) | Can it quantify it accurately? | Comfortably below the clinical decision range |
| **CV** (coefficient of variation) | Is it reproducible? | Under ~**10%** for a good POCT |

The LOD is the lower bound of *detection*; the LOQ is the lower bound of *accurate measurement*; the CV is the *precision* across repeats. A test needs all three.

---

## The LOD vs LOQ Trap

Here is the confusion that spec-sheet marketing leans on: **LOD and LOQ are not the same number.** The LOD is always lower — a test can often *detect* an analyte faintly long before it can *quantify* it reliably.

Why this matters clinically: you make decisions on numbers, not on "present vs absent." A test whose LOQ sits *above* your decision threshold is worse than useless — it will detect the analyte but cannot give you a number you can act on. When you read a spec sheet, find the LOQ, not just the LOD, and check that it sits below the clinical range you care about.

---

## The CV: Precision Is Not Optional

CV measures reproducibility — run the same sample ten times, and CV tells you how much the answers scatter, as a percentage. A CV of **10%** means the result is good to within about 10% of its value.

Why precision matters: a test with a poor CV cannot be used for *monitoring*, because you cannot tell a real change from random scatter. If your CV is 20% and the patient's value moved 15%, you do not know whether the disease is progressing or the test is just noisy. The **<10% CV** bar is what makes a quantitative test a *monitoring* tool, not a one-off guess.

---

## The Two Meanings of "Sensitivity"

This is the single most common misunderstanding in diagnostic specs:

- **Analytical sensitivity** — how faint a signal the test can detect. This is essentially the LOD.
- **Diagnostic sensitivity** — the percentage of *true cases* the test correctly identifies. This is about accuracy against reality, not about faintness.

A test can have an excellent analytical sensitivity (very low LOD) yet mediocre diagnostic sensitivity if it is cross-reacting or noisy. The two are different concepts, and a spec sheet that uses "sensitivity" without saying which one it means is blurring them — sometimes deliberately.

---

## What to Actually Check

When you evaluate a quantitative test, look for four things:

1. **LOD and LOQ** — both, and confirm the LOQ sits below your clinical decision range.
2. **CV** — under ~**10%** is the working bar for POCT.
3. **Linear range** — the span of concentrations where the result is proportional to the amount; it must cover the clinical range, not just the middle of it.
4. **Reference interval** — the normal range the test was validated against, so you know what "high" and "low" mean.

The combination is what makes a test usable. No single number on the sheet carries the decision alone.

---

## How the Test Runs

1. Check the spec sheet for LOD, LOQ, CV, linear range and reference interval.
2. Confirm the LOQ sits below the clinical decision range you need.
3. Confirm the CV is under ~10% so the test can be used for serial monitoring.
4. Use the reference interval to interpret the numeric result in context.

**Related products:** [FIA680 Analyzer](/equipment/FIA680) · [FIA880 Analyzer](/equipment/FIA880)

---

## FAQ

### What is LOD?

The lowest concentration a test can distinguish from zero — "can it detect it?" A lower LOD means fainter detection, but not accurate quantification (the LOQ, typically 2–3× higher, does that).

### What is LOQ?

The lowest concentration measurable with acceptable accuracy — always higher than LOD (typically 2–3× the LOD). It is the LOQ you need for decisions.

### What is CV?

Precision as a percentage — reproducibility across repeats. Under ~**10%** is the working bar for a good POCT.

### Why do all three matter?

LOD = detect, LOQ = quantify, CV = repeat — 3 questions. A low LOD with a poor CV (>10%) is still unreliable.

### Is "sensitivity" the same as low LOD?

No — analytical sensitivity ≈ LOD, diagnostic sensitivity = % of true cases caught. 2 different concepts.

### What to check on a spec sheet?

LOD + LOQ (below clinical range), CV (under ~10%), linear range, and reference interval — the combination, not one number.

---

## Key Takeaways

1. **3 numbers, 3 questions** — LOD (detect), LOQ (quantify), CV (repeat). A spec sheet quoting only 1 is telling a partial story.
2. **LOD ≠ LOQ** — detecting is easier than quantifying, and you decide on the LOQ, not the LOD (the LOQ typically sits 2–3× higher).
3. **CV under ~10% is the monitoring bar** — a test with poor precision cannot tell a real change from random scatter.
4. **"Sensitivity" has 2 meanings** — analytical (≈ LOD) vs diagnostic (% of true cases). Blurring them is a classic spec-sheet trick.
5. **Check 4 things together** — LOD/LOQ, CV, linear range, and reference interval. No single number carries the decision.

---

## References

- Armbruster DA, Pry T. Limit of blank, limit of detection and limit of quantitation. *Clin Biochem Rev.* 2008.
- Westgard JO. Basic method validation. Westgard QC.
- Linnet K, Kondratovich M. Defining the limits of quantitation.

---

*This content is for educational and product-selection purposes only. Always confirm a test's LOD, LOQ, CV, linear range and reference interval with the manufacturer before clinical use. Product specifications are as published by Migibio (Guangzhou Magic Biotech Co., Ltd.) and may change.*

- [Westgard QC — Method Validation](https://www.westgard.com/)
- [PubMed — Limit of Detection and Quantitation](https://pubmed.ncbi.nlm.nih.gov/)

## Continue exploring

- [Fluorescence Immunoassay (FIA): Why a Number Beats a Line](/blog/quantitative-fluorescence-immunoassay-veterinary-guide)
- [Fluorescence Immunoassay vs Chemiluminescence (CLIA)](/blog/fluorescence-immunoassay-vs-chemiluminescence)
- [Veterinary Laboratory Quality Control: Two Pillars](/blog/veterinary-laboratory-quality-control)
- [How to Read Quantitative Veterinary Test Results](/blog/reading-quantitative-test-results)
