---
authors: [raymyers]
slug: we-can-beat-devin
title: "We Can Beat Devin"
# image: /img/DALL-E-FireAGI.png
tags:
  - assistants
  - agents
  - devin
  - software engineering
  - swe-bench
---

On March 12th, AI startup Cognition Labs came out of stealth mode with $21M Series A round, a state of the art SWE-bench score, and a [demo](https://www.cognition-labs.com/introducing-devin) that has captured the imagination of the AI coding space, even calling into question (for some) the very future of the Software Engineering [profession](https://jolt.law.harvard.edu/assets/articlePDFs/v33/33HarvJLTech557.pdf).

"*Can we beat Devin?*" was the question soon posed by a [Discord server](https://discord.gg/eq8fVvYY) of that name, gathering 1,000 users within days of Devin's announcement!

In the spirit of friendly competition, Mender.AI answers that rallying cry.

<iframe width="560" height="315" src="https://www.youtube.com/embed/IM5oi2ycNIY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## What is Devin?

Cognition Labs advertises Devin as "the first AI Software Engineer." Considering the climate of grandiose AI claims, this marketing decision is understandable, but *not even on April Fool's Day* do we abide by that terminology.

Still, it does seem they have created something impressive and important. We ought to call it something. We suggest the following distinction:

**Coding Assistants** operate as editor plugins offering auto-complete style suggestions during development. [Examples](/docs/tools/ai/assistants) include GitHub Copilot, Cursor, and the Open Source Continue.dev.

**Autonomous Coders** (perhaps AutoCoder for short?) have greater independence. When a user assigns them a higher level task, they are capable of breaking down subtasks and overcoming obstacles. These may be an early entry into the broader category **Autonomous DevTools**.

Devin, then, is an Autonomous Coder. Another term that has been in play is "[Coding Agents](/docs/tools/ai/agents)." There have been several Open Source agents in active development, though none as polished as Devin's demo videos.

### Why not "AI Software Engineer"

**Software Engineer** was a term introduced by Margaret Hamilton for the Apollo Moon landing project in order to secure professional respect for her colleagues and to emphasize the disciplined practices they were developing. By consensus, the term's use in most of the industry remains somewhat aspirational, but with the world now running on software we have good reason to use it carefully.

Cognition Labs has not stated their definition, if they [reach out](https://www.linkedin.com/in/cadrlife) with one we'll be happy to provide it here. For discussion's sake, let's consider some basic necessary, though not sufficient conditions. We might all agree that a **Software Engineer**:

* Is a *[professional](https://jolt.law.harvard.edu/assets/articlePDFs/v33/33HarvJLTech557.pdf)*, having an obligation to uphold a standard of care
  * Therefore, has *legal and moral agency* typically associated with *personhood* 
* Is capable not only of solving small predefined tasks in a codebase, but also
  * Creating and maintaining a codebase of significant size over a period of time
  * Partnering to define the requirements to be done

Without the supervision of a human programmer, every autonomous coding tool to date would fail each one of these minimal prerequisites. That's before any consideration of the actual engineering discipline as currently understood, see Dave Farley's recent book [Modern Software Engineering](https://www.davefarley.net/?p=352) for a nice formulation. 

Again, this does not discount the usefulness of tools like Devin. They can help us. We will buy them and we will build them.

## What does it mean to beat Devin?

Beating Devin could refer to at least 3 ideas. 

### 1. The relevance of human programmers

Can we as humans compete with this automation of our role?

Yes. That's not even close to a question today. The world’s increased dependence on complex poorly-understood software makes one worry about many things, but not about the employability of software engineers.

For more, see my video "[Will AI Democratize Programming?](https://www.youtube.com/watch?v=7YxD8R9Q_Bo)" from 11 months ago.

### 2. Reproducing the demo

Can the Open Source community produce a self-hostable interactive experience similar to the Devin demo?

Yes, perhaps in 2-4 months. For instance, the OpenDevin project has produced a rudimentary demo already. More effort is required and there is plenty of prior work that can be leveraged.

#### The shiny stuff

The Devin demos show users directing tasks over a remote dev environment in a unified browser-based UX. A viable reproduction would probably include most of the same features:

* Chat
* Task planner
* Code editor
* Terminal
* Remote-controlled browser (snapshots)

### 3. SWE-bench or bust

Can the Open Source community beat 14% on the [SWE-bench](https://www.swebench.com/) AI coding benchmark?

This is an important question because Devin represents a huge leap over previous scores. Nonetheless, the video [preview](https://www.youtube.com/watch?v=IM5oi2ycNIY) of this article (March 23rd) predicted an Open Source agent would beat it in a similar timeline of a few months.

Even that may turn out to be conservative because just this morning [SWE-agent](https://swe-agent.com) was announced by the same Princeton NLP Group that created SWE-bench! This Open Source agent (using GPT-4) is now just 2 percentage points away from beating Devin in this criteria. It's possible that incorporating Anthropic's Claude 3 Opus model ([released](https://www.anthropic.com/news/claude-3-family) March 3rd) could push it over the edge.

The significance of SWE-bench is that it requires solving realistic tasks in the context of a full codebase. Currently, the bottleneck is not the LLMs themselves but our orchestration and tool support. SWE-bench's examples only cover Python and there will also be other approaches, but generally this move towards gauging performance in a practical context is promising.

### What about models?

The above assumes that an Open Source reproduction would rely on 3rd party proprietary models from the likes of OpenAI, Google, and Anthropic. We assume (but don't know) that Devin also relies on 3rd party models, see the March 12th Bloomberg [article](https://www.bloomberg.com/news/articles/2024-03-12/cognition-ai-is-a-peter-thiel-backed-coding-assistant):

> Cognition AI has declined to say to what extent it does or does not rely on existing LLMs from other companies, making it hard to tell how it stacks up against the work being done by Magic AI.

An Open Source reproduction that included the LLMs themselves would be a much more daunting task due to the expertise and compute required to train them. Open Weight models are becoming usable if not competitive for dev assistants and agents. We have no specific "catch-up" predictions, see [r/LocalLLaMA](https://www.reddit.com/r/LocalLLaMA/) for the latest news. 

Again, we must be careful of the terminology: Most Open Weight models are not Open Source because weights are not [source](https://web.archive.org/web/20240323130419/https://opensource.org/osd), the training data and process are the source.


## Who are the players?
Here are some of the projects in the conversation right now.
* [SWE-agent](https://swe-agent.com) - The benchmark leader
* [OpenDevin](https://github.com/OpenDevin/OpenDevin) - The de facto leader for Open Source Devin-like UX
* [Mirko.AI](https://github.com/markokraemer/mirko.ai) - An Open Source re-write of the Softgen.AI demo by Marko Kraemer
* [OpenAgents](https://github.com/OpenAgentsInc/openagents)
* [Aider](https://github.com/paul-gauthier/aider)
* [GPT Pilot](https://github.com/Pythagora-io/gpt-pilot)
* [GPT Engineer](https://github.com/gpt-engineer-org/gpt-engineer)

See [Coding Agents](/docs/tools/ai/agents) for more...

Following SWE-bench and OpenDevin's example, we recommend defaulting to MIT license for these efforts so we can share with minimum friction.

While most efforts have focused on expanding agent capabilities to better meet the work-as-done, it's also possible to constrain the problem scope by coevolving the app framework with the assistant. Examples are [NextPy](https://nextpy.org/) and Sublayer's [Blueprints](https://www.sublayer.com/blog/posts/introducing-blueprints-a-new-approach-to-ai-assisted-coding). While changing the problem makes it hard to objectively compare performance, it seems like a very practical approach in the long term.

Are you building an AI Coding Assistant, Autonomous Coder, or related tool? Reach out on [LinkedIn](https://www.linkedin.com/in/cadrlife) or submit a [Pull Request](https://github.com/craftvscruft/mender.ai/tree/main/docs/tools/ai) to add to our list!


## Harnessing the constituency
What does this sea of potential competitors mean for AI startups like Cognition? DevTool growth expert [Ana Hevesi](https://www.uploop.dev) had [these](https://www.linkedin.com/posts/anahevesi_if-what-youre-doing-matters-you-have-an-activity-7179161521460019200-s_TC?utm_source=share&utm_medium=member_desktop) words of wisdom:

> Contributors are hungry for the transparency and self-determination an open source implementation would provide. A combination of love of the game—and perhaps some concern for job security—has spurred a spectacular show of collaboration. 

> So: how would it improve Cognition AI's position if they sought ways to engage and harness the energy of this extended constituency? Despite the fact that this reaction wasn’t in anyone’s plan, this group could surely be incredibly engaged testers. It’s also easy to imagine this group helping the Cognition team find new applications and customer profiles, and even red team the product.

> Extended constituencies have minds of their own, which can be inconvenient if you didn’t plan with them in mind. But long term, they can multiply your success—if you harness their energy and reward their efforts.

And as of press time, Lao Tzu said:

> With patience the most tangled cord may be undone.
---
*Can we write to you from time to time? [Get updates](/#get-updates).*

