---
authors: [raymyers]
slug: llms-cant-code
title: LLMs Can't Code
image: /img/toaster-fire.png
tags:
  - chatgpt
  - reasoning
  - limitations
---

> So, I ask an LLM 'hey, generate me code for doing X and Y'. It spits out something that looks like it could work, but it doesn't as some of the methods used do not exist at all.
> 
> How do I continue to give it a chance, in this particular instance? Any suggestions? - [Slobodan Tanasić](https://www.linkedin.com/in/stanasic)

This is very common issue right now, and seems somewhat inevitable. Maybe this'll help.

## A Practical Answer

I think of it like using Stack Overflow. There is a category of isolated problems that I've learned Stack Overflow will help me more more than waste my time, and it's awesome at those. It helps even though we can't trust that copying the answer directly into the context. It might not be correct, even compile, or be licensed to allow use.

But we understand the provenance of the solution is dubious and it still helps us reach a solution faster, getting past stumbling blocks. When I've used LLMs (Large Language Models) like ChatGPT successfully during coding, it's a similar process.

Our friend Nicolas Carlo has some more detailed articles on usage scenarios.

* [Can AI help me refactor legacy code?](https://understandlegacycode.com/blog/can-ai-refactor-legacy-code)
* [Can AI help me write tests on legacy code?](https://understandlegacycode.com/blog/can-ai-write-tests-on-legacy-code)

The [Cursor](https://www.cursor.sh) editor has also made progress creating a more ergonomic integration than other assistants.

## The Deeper Problem

This is controversial, I actually believe **LLMs can't code**.

Coding is not a single task. It's a big bag of different types of cognitive tasks. Some parts are, we might say, language-oriented and map very well to an LLM's strengths.



### LLM-Easy

Language models suggest pretty good variable names. They can identify code smells. They can lookup many (mostly real) libraries that relate semantically to our questions. These are examples of well-trodden NLP (Natural Language Processing) tasks that we could label "LLM-Easy".

* Summarization
* Classification
* Semantic Search
* ...

### LLM-Hard

Then you have tasks that require precise reasoning. Even though we've come to expect computers to excel at those, LLMs are weak in this department. Some would say they [don't reason at all](https://x.com/Grady_Booch/status/1673797840605433856), I'll just say that at minimum they are very inefficient and unreliable at it.

For instance, GPT-4 cannot multiply two 3 digit numbers together. Not only that, it returns wrong answers indiscriminately. 

If you can spend $100 Million training a model, run it on special GPU hardware optimized for number-crunching, and still get something that can't multiply numbers, we are justified in saying that it is the wrong tool for certain kinds of reasoning. Fortunately, there are [many](https://en.wikipedia.org/wiki/Knowledge_representation_and_reasoning) other tools.

Forgive a little handwaving here, because we do not have a full account of every kind of cognitive task that goes into coding. But if you suspect that *any* part is LLM-Hard then you might agree that the all-in-one approaches that ask an LLM to produce raw source code are naive:

* Putting an unknown number of LLM-Easy and Hard tasks into a blender
* Expecting an LLM to identify which is which or solve them all simultaneously
* Accepting the unrestricted text response as a valid update to your production code

This will hit a wall. More hardware and better prompts won't fix it. We need to partition the tasks, using components that are suited for each rather that treating one component as a panacea.

In short, that's how we teach machines to code.

*Can we write to you from time to time? [Get updates](/#get-updates).*