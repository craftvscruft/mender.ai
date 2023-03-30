+++
title = "Mender.AI"
[data]
baseChartOn = 3
colors = ["#627c62", "#11819b", "#ef7f1a", "#4e1154"]
columnTitles = ["Section", "Status", "Author"]
fileLink = "content/projects.csv"
title = "Projects"

+++
{{< block "grid-2" >}}
{{< column >}}

# Mender.AI
Welcome to the premier AI-assisted legacy code strategy guide!

The future of software is synonymous with the future of software maintenance. We believe the emerging power of Large Language Models is too great to be ignored, but incorporating them into a healthy software ecosystem will be a challenge. Get involved by signing the [Mechanized Mending Manifesto](#the-mechanized-mending-manifesto) below.
{{< tip "warning" >}}
*Can AI Rescue App Modernization? Hundreds Of Billions Of Dollars Are At Stake* - [Forbes, Feb 2023](https://www.forbes.com/sites/craigsmith/2023/02/14/can-ai-rescue-app-modernization-hundreds-of-billions-of-dollars-are-at-stake/?sh=2b0d670c5b83)
{{< /tip >}}



<!-- {{< tip >}} -->

<!-- {{< /tip >}} -->

{{< button "./blog" "What's New?" >}}
{{< /column >}}

{{< column >}}
![diy](/images/robot-holding-skull.png)
{{< /column >}}
{{< /block >}}

# The Mechanized Mending Manifesto

In software development, our greatest challenge is not our ability to produce new code, it’s in evolving the systems already in place.

Large Language Models (LLMs) can now generate code in certain contexts. However, their true potential extends beyond this: LLMs can revolutionize the way we maintain and improve code.

We seek to establish a harmony between human judgment, LLMs, and conventional algorithms,  each with their own strengths and weaknesses. For instance:

* Conventional algorithms are tireless and predictable. They are not good at being versatile or goal-directed.
* Humans are goal-directed and versatile. They are not good at being tireless or predictable.
* LLMs are tireless and versatile. They are not good at being predictable or goal-directed.

The future of software maintenance hinges upon novel combinations of these elements. By harnessing the best aspects of each, we will foster a more efficient, reliable, and effective software ecosystem that advances the public good.

### Signatories

{{< signatures >}}
---
## Appendix

### What NOT to do
Many people hear "AI can write code now" and picture a naive workflow such as this:

{{< mermaid >}}
graph LR
    llm(LLM <br/> Generates code) --> prod(fa:fa-ban Recklessly Deploy)
classDef orange fill:#f96,stroke:#333,stroke-width:4px;
class prod orange
{{< /mermaid >}}

Not only is this unsafe due to the unpredictable nature of LLMs, it doesn't address the actual bottlenecks in software development. Developers can already type fast enough. We waste time on re-work, troubleshooting, and confusion to name a few.

* [IEEE 2015: I Know What You Did Last Summer - An Investigation of How Developers Spend Their Time](https://ieeexplore.ieee.org/document/7181430)
* [IEEE 2019: Today was a Good Day:
The Daily Life of Software Developers](https://www.microsoft.com/en-us/research/uploads/prod/2019/04/devtime-preprint-TSE19.pdf)
* [Forbes 2022: Measuring And Managing Technical Debt](https://www.forbes.com/sites/forbestechcouncil/2022/08/10/measuring-and-managing-technical-debt)
### Better Workflows
This is one potential process that leverages the strength of each component for a system that is efficient and safe.
{{< mermaid >}}
graph LR
    llm(LLM <br/> Suggests improvements) --> human(Human <br/> Screens suggestions)
    human --> algo(Algorithm <br/> Applies changes) --> test(Tests) --> prod(Safely Deploy)
classDef green fill:#9f6,stroke:#333,stroke-width:2px;
class prod green
{{< /mermaid >}}

Or suppose we need to modify some untested legacy code. We might bring in the LLM as a pair programming partner to help us quickly backfill the tests.

{{< mermaid >}}
graph LR
    human1(Human <br/> Finds untested code) --> llm(LLM <br/> Writes test cases) 
    llm --> human2(Human <br/> Reviews tests & <br/> Updates tested code) 
    human2 --> test(Tests) --> prod(Safely Deploy)
classDef green fill:#9f6,stroke:#333,stroke-width:2px;
class prod green
{{< /mermaid >}}

### Strengths

These are some of the relevant properties, not the only ones.

| Strength      | Humans      | Algorithms | LLMs        |
| ------------- | ----------- | -----------| ----------- |
| Goal-directed | X           |            |             |
| Versatile     | X           |            | X           |
| Tireless      |             | X          | X           |
| Predictable   |             | X          |             |

**Goal-directed**: Having beliefs and desires, and trying to reach those desires by acting in accordance with those beliefs (one of [many potential definitions](https://www.lesswrong.com/posts/cfXwr6NC9AqZ9kr8g/literature-review-on-goal-directedness)).

**Versatile**: Proficient in a broad range of tasks and able to respond gracefully to the unforeseen.

**Tireless**: Able to perform on demand at any time and in a highly scalable way.

**Predictable**: Able to deterministically respond exactly as expected for a known range of inputs.

### Thank you for reading!
Would you like sign the manifesto or provide feedback? Come see us [on GitHub](https://github.com/craftvscruft/mender.ai).

