---
authors: [raymyers]
slug: turbo-refactoring
title: Turbo Refactoring
image: refactor-logo-ioccc-sloan.png
tags:
  - ioccc
  - refactoring
  - chatgpt
  - gpt4
  - tcr
  - tdd
---

If we're going to teach machines to code, let's teach them the safest way we know how.

GeePaw Hill said, "[Many More Much Smaller Steps](https://www.geepawhill.org/2021/09/29/many-more-much-smaller-steps-first-sketch/)". Just as the discipline of small steps helps humans work more effectively, Large Language Models have shown dramatically improved results by breaking down tasks in a technique called [Chain of Thought Prompting](https://learnprompting.org/docs/intermediate/chain_of_thought). Surprisingly, Chain of Thought improves responses even with no feedback. By adding incremental verifications between each step we can do even better.

> Rule: Take small steps and test them

To make these steps as safe as possible, let's take a moment to embrace a brutal design constraint: LLMs **cannot** reliably edit existing code.

- When we ask GPT4 to update code, **it breaks it**
- When we ask GitHub CoPilot to update code, **it breaks it**
- When we ask SourceGraph Cody to update code, **it breaks it**
- When we ask CodeLlama to update code, **it breaks it**

We could wait for bigger shinier models to address this, but possibly LLMs are just architectural incapable of the required kinds of reasoning. For our purposes today, we will treat LLM output as potentially useful but inherently untrustworthy.

> Rule: Treat LLM output as untrustworthy

Where does this leave us? Untrusted output must be filtered through an intermediary, typically a human reviewer or a vetted tool with limited actions. So far, most approaches involve the former - people manually code review and debug the raw LLM output. Are there other options? Can we manipulate code *without directly editing it*? Funny you should ask...
## Return of Refactoring Browser

In the SmallTalk era, a tool called [Refactoring Browser](https://wiki.c2.com/?RefactoringBrowser) innovated syntax-aware automated refactoring. The right-click refactoring in today's IDEs like IntelliJ are descendants, but a unique aspect of Refactoring Browser was that is could *only* refactor, not act as a text editor. In a sense, what it couldn't do was as important as what it could.
### We can rebuild it

Could we build another, more automation-friendly Refactoring Browser today? How many transformations would we need to support?

While Martin Fowler's definitive [Catalog of Refactorings](https://refactoring.com/catalog/) is extensive, we can get very far with surprisingly few of them mastered. [The Core 6 Refactorings](https://arlobelshee.com/the-core-6-refactorings/) identified by Arlo Belshee are Extract (Variable / Method / Parameter / Field), Rename, and Inline. Those basic operations give us control of how concepts are named in the code, and therefore how intent is expressed. Further, all of these can be automated and performed with a high degree of confidence - no hand editing necessary!

Instead of trying to understand an entire large block of code at once, we can take incremental steps capturing one piece of insight in a name before moving on. The practices of Read by Refactoring and [Naming as a Process ](https://www.digdeeproots.com/articles/naming-process/naming-as-a-process/) expand on this. On [Craft vs Cruft](https://www.youtube.com/watch?v=5oAs5Jr5njU&list=PLRe4i06eNAcDY4XjMfyEMK6hjnoIOpqk2&index=4), I tend to call this "Untangling".

### The versatility of a refactoring CLI

With a small handful of core recipes supported per language, we can create a workable command-line refactoring tool(see [Untangler](https://github.com/craftvscruft/untangler) for an early prototype). Liberating this functionality from IDEs allows opens up many possibilities:

- Restricted editing UI's ("Uneditors" like Refactoring Browser)
- Scripted code migrations
- AI-driven refactoring
- Easily give more editors refactoring support (YAY!)


## Insanely small steps
So we started by saying we'd teach machines the safest way we know how to develop. What is that, [Test Driven Development](https://en.wikipedia.org/wiki/Test-driven_development)? Let's go even further. Let's go all the way to [TCR](https://www.infoq.com/articles/test-commit-revert/), which has been called "TDD on steroids"!
### Test && Commit || Revert

In Kent Beck's TCR, you make one single change. If the tests pass, you commit. If they fail, you blow away your change and start over. This is an unorthodox and challenging workflow that encourages preparatory refactoring before making a feature change.

> Make the change easy, then make the easy change - [Kent Beck](https://twitter.com/KentBeck/status/250733358307500032?s=20)

In the 2012 talk, [2 Minutes to Better Code](https://www.youtube.com/watch?v=aWiwDdx_rdo) Woody Zuill and Llewellyn Falco demonstrate rapid commits of incremental refactoring steps supporting an upcoming feature change on a real codebase. Those kinds of steps would fit well into a TCR workflow.

### Full workflow

Here's an example of how this could work end-to-end, other variations are possible/

1. Human enters high level intent: "Clean up the Foo module"
2. Branch from Trunk
3. AI Refactor Loop
	1. Green (tests pass)
	2. AI suggests refactoring action
	3. Refactoring tool applies transformation
	4. Green (tests pass)
	5. Commit
4. Create Pull Request to Trunk
5. Human decides whether to merge the Pull Request


We now have an unprecendented set of safegaurds for LLM-driven changes:

* We only edit code through syntax transformations with known behaviors
* Every edit is built
* Every edit has tests run
* We can perform review at any gradularity due to rapid commits
* The steps are replayable, entirely or a subset


## Can this work?

It already does. While the prototype's capabilities are very limited (it does renames in C), early experiments suggest this is the first AI developer agent that can update code in a bug-free way. It may choose a bad variable name here and there, but it **does not break the code**.

I'll be releasing more pieces into [The Mender Stack](/docs/mender-stack) as I'm able to clean them up and explain them properly. It will take a significant but very tractable amount of work to implement polished support for the core refactorings in several major languages. If you're interested in helping out I'd love to [hear from you](https://www.linkedin.com/in/cadrlife/).


*Can we write to you from time to time? [Get updates](/#get-updates).*