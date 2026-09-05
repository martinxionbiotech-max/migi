---
title: "POCT Quality Control: The SOP Every Clinic Needs"
slug: "poct-quality-control-sop-clinic"
description: "A control chart and Westgard rules catch analyzer drift before a wrong result ships. Here is the practical QC protocol for a point-of-care analyzer."
pubDate: "2026-09-05"
author: "Dr. Tang"
dateModified: "2026-09-05"
category: "blog"
faq: [{"q": "Why does a point-of-care analyzer need quality control?", "a": "Because a quantitative analyzer can drift silently — results stay plausible while slowly moving off-target. Daily QC is the only thing that compares the analyzer against a known answer and catches the drift before a wrong result reaches a patient. Skipping QC means trusting a machine that can fail without announcing it."}, {"q": "What is a Levey-Jennings control chart?", "a": "It is a simple run chart where you plot each day's control result against the expected mean and its ±2 SD and ±3 SD limits. The chart turns a single number into a trend, so you can see at a glance whether the analyzer is stable, drifting, or failing. It is the core tool of internal quality control."}, {"q": "What are the Westgard rules?", "a": "They are a set of decision rules for interpreting a control chart — for example, a single point beyond 3 SD, two consecutive points beyond 2 SD on the same side, or a run of points all on one side of the mean. Each rule flags a specific kind of error (random vs systematic), which is why using several rules together is more reliable than one."}, {"q": "How often should I run QC?", "a": "Daily at minimum — run a control at the start of each testing day, or per the manufacturer's schedule. More frequent QC is warranted on days with high patient volume, after any recalibration, or when a new reagent lot is opened. The daily cadence is what catches drift between calibrations."}, {"q": "What do I do when QC fails?", "a": "Stop patient testing, investigate, and do not report results until the problem is resolved. Common steps: repeat the control to rule out a single bad run, check reagent storage and expiry, re-read the QC, and recalibrate if needed. Only resume once a fresh control passes and the cause is understood."}, {"q": "What are the most common QC mistakes?", "a": "Four: running QC too rarely (or not at all), ignoring in-range drift (a run of points all on one side of the mean is a warning even when nothing is 'out of range'), treating a failed QC as a one-off instead of investigating, and not documenting. QC that is not plotted and documented is QC that did not happen."}]
---

> **TL;DR** — A quantitative point-of-care analyzer fails silently: it drifts, results stay plausible, and you ship wrong answers until someone notices. The only defence is a daily QC discipline built on two tools: the **Levey-Jennings control chart** (plot each day's control against its mean and ±2/±3 SD limits) and the **Westgard rules** (decision rules that flag a single point beyond 3 SD, two consecutive beyond 2 SD, or a run of points all on one side). The practical SOP is simple — run a control daily, plot it, investigate any violation, and stop testing until it resolves. The most common mistake is not running QC at all; the second is ignoring **in-range drift**, which is the earliest, subtlest sign of a failing analyzer.

---

## In Plain Terms

Your analyzer is a machine, and machines drift. The only way to know whether today's result is right is to ask the machine a question you already know the answer to — run a control sample with a known concentration, and see whether the machine gets it right. Do that every day, write the answer on a chart, and the chart will tell you the moment the machine starts to lie.

---

## The Two Tools

### The Levey-Jennings chart

A run chart of daily control results. You plot each value against:

- The **mean** (the expected value).
- The **±2 SD** and **±3 SD** limits (the acceptable spread).

A stable analyzer produces points scattered randomly around the mean, inside ±2 SD. Anything else — a point outside 3 SD, two in a row beyond 2 SD, or a run of points all on one side — is a signal.

### The Westgard rules

A set of decision rules that interpret the chart. The most useful:

| Rule | What it flags |
|---|---|
| **1-3s** | One point beyond ±3 SD — a random error |
| **2-2s** | Two consecutive beyond ±2 SD (same side) — systematic drift |
| **R-4s** | One point +2 SD, the next −2 SD — wild scatter |
| **4-1s** | Four consecutive beyond +1 SD — early systematic shift |
| **10x** | Ten consecutive on one side of the mean — slow drift |

Using several rules together catches both random errors and systematic drift — which is why a multi-rule approach beats a single "is it out of range?" check.

---

## The Daily SOP

A practical protocol for a clinic:

1. **Daily** — run a control sample at the start of the testing day.
2. **Plot** the result on the Levey-Jennings chart.
3. **Check** against the Westgard rules.
4. **If a rule is violated** — stop patient testing, investigate, and resolve before reporting.
5. **Document** every control result. Unplotted QC is QC that did not happen.

The discipline is the point. A chart you actually plot, every day, is the difference between catching drift in one day and catching it in one month of wrong results.

---

## The Two Mistakes That Undo It

1. **Running QC too rarely.** A quarterly QC is almost useless — by the time it runs, a drifted analyzer may have shipped a month of wrong results. QC must be daily, because drift is daily.

2. **Ignoring in-range drift.** This is the subtler failure. A run of points all trending to one side of the mean — even if every single one is technically "in range" — is an early warning of systematic drift. The Westgard "10x" and "4-1s" rules exist precisely to catch this. Treating "in range" as "fine" misses the earliest, most actionable signal.

---

## What to Do When QC Fails

1. **Stop** patient testing — do not report results from an unverified analyzer.
2. **Repeat** the control — rule out a single bad run or a reagent error.
3. **Check** reagent storage, expiry, and lot.
4. **Recalibrate** if indicated.
5. **Resume** only after a fresh control passes and the cause is understood.

The instinct to shrug off a failed QC as "probably a fluke" is exactly how wrong results reach patients. A failed QC is an investigation trigger, not an inconvenience.

---

## How the Test Runs

1. Set up a Levey-Jennings chart with the control's mean and SD limits.
2. Run a daily control and plot the value.
3. Apply the Westgard rules to the chart.
4. Investigate any violation before resuming patient testing.

**Related products:** [FIA680 Analyzer](/equipment/FIA680) · [FIA880 Analyzer](/equipment/FIA880)

---

## FAQ

### Why does a POCT analyzer need QC?

Because it drifts **silently** — results stay plausible while moving off-target. Daily QC (1 control/day) catches it before a wrong result ships.

### What is a Levey-Jennings chart?

A run chart plotting daily controls against the mean and **±2/±3 SD** limits — turning a single number into a visible trend.

### What are the Westgard rules?

Decision rules: **1-3s** (point beyond 3 SD), **2-2s** (two beyond 2 SD), **R-4s** (scatter), **4-1s** and **10x** (drift). Multi-rule catches both random and systematic error.

### How often to run QC?

**Daily** at minimum (1 control/day), plus more on high-volume days, after recalibration, or with a new reagent lot.

### What when QC fails?

Stop testing, repeat the control, check storage/expiry, recalibrate if needed, resume only after a fresh control passes (±2 SD).

### Most common QC mistakes?

Running it too rarely, ignoring **in-range drift** (e.g. a 10x run), treating failure as a one-off, and not documenting.

---

## Key Takeaways

1. **The analyzer fails silently** — daily QC (1 control/day) is the only comparison against a known answer that catches drift before a wrong result ships.
2. **2 tools, 1 discipline** — a Levey-Jennings chart (plot daily) plus Westgard rules (interpret the pattern).
3. **In-range drift is the subtle killer** — a run of points all on one side (e.g. a 10x run) warns of systematic drift even when nothing is "out of range."
4. **Daily, not quarterly** — drift is daily, so QC must be; a quarterly check is nearly useless (90+ days blind).
5. **A failed QC is an investigation trigger** — stop, repeat, check, recalibrate, resume. Never shrug it off as a fluke (1-3s rule).

---

## References

- Westgard JO. Basic QC practices and the Westgard multirule. Westgard QC.
- CLSI C24. Statistical quality control for quantitative measurement procedures.
- Levey S, Jennings ER. The use of control charts in the clinical laboratory.

---

*This content is for educational purposes only and is not a substitute for a laboratory-quality program or the manufacturer's specific QC instructions. Follow your analyzer's QC schedule and the applicable laboratory standards. Product specifications are as published by Migibio (Guangzhou Magic Biotech Co., Ltd.) and may change.*

- [Westgard QC](https://www.westgard.com/)
- [CLSI](https://clsi.org/)

## Continue exploring

- [Veterinary Laboratory Quality Control: Two Pillars](/blog/veterinary-laboratory-quality-control)
- [Analyzer Maintenance & Calibration: The SOP](/blog/immunofluorescence-analyzer-maintenance-calibration)
- [LOD, LOQ and CV: Reading a Quantitative Test's Specs](/blog/lod-loq-cv-reading-quantitative-specs)
- [How to Read Quantitative Veterinary Test Results](/blog/reading-quantitative-test-results)
