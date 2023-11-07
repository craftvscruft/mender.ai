---
authors: [raymyers, kyleforster]
slug: openai-devday-coding
title: OpenAI DevDay Announcments and Coding
image: /img/toaster-fire.png
tags:
  - chatgpt
  - reasoning
  - limitations
---

Yesterday, OpenAI held their first DevDay with some of their biggest releases since GPT-4 in March. [full announcements](https://openai.com/blog/new-models-and-developer-products-announced-at-devday) and [keynote livestream](https://www.youtube.com/watch?v=U9mJuUkhUzk). In this post we'll give first thoughts on the implications for software development and maintenance.

# GPT-4 Turbo

Some of the biggest limitations of GPT-4 were that it was slow, expensive, couldn't fit enough data in the context window, and had a knowledge cut off of January 2022. All of those have been significantly addressed. Short of eliminating halucinations (which may be intractable), we couldn't have asked for much more in this release.

While this is not "GPT-5", whatever that may look like, this execution on so many key frustrations at once is a huge move. As the [Mechanized Mending Manifesto](https://mender.ai/docs/intro) hints, we have much to learn about taking advantage of Large Language Models as components in a system before our main limitation becomes the sophistication of the model itself.

## Lightning round

Let's give some initial takes on the impact to AI coding workflows for each of these changes.

* 👾👾👾👾👾 = Game changer
* 👾👾👾👾 = Reconsider many usage patterns
* 👾👾👾 = Major quality of life improvement
* 👾👾 = Considerable quality of life improvement
* 👾 = Nice to have
* 🤷 = Not sure!

| Feature          | Impact      | Notes |
| ---------------- | ---------- | ----- |
| 128K context | 👾👾👾👾👾 | Max score of **5 space invadors**! |
| Price drop | 👾👾👾👾 | See below |
| Code Interpreter in API | 👾👾👾 | Code Interpreter's workflow is often better than using GPT-4 codegen directly |
| [JSON mode](https://platform.openai.com/docs/guides/text-generation/json-mode) / [Parallel Function calls](https://platform.openai.com/docs/guides/function-calling/parallel-function-calling)  | 👾👾👾 | Tooling needs this, we had workarounds but structured output was a constant pain |
| Speed            | 👾👾       | This makes GPT-4 more of a contender for interactive coding assistants |
| Assistants API | 👾👾 | Saves a lot of boilerplate for new chatbots |
| Retrieval API | 👾👾 | Again, we could do this ourselves but now it's easy |
| Assistants API | 👾👾 | Saves a lot of boilerplate for new chatbots |
| Updated cutoff date | 👾 | Probably more important outside coding |
| Log probabilities | 👾 | Should help with autocomplete features|

### Uncertain callouts

| Feature          | Impact      | Notes |
| ---------------- | ---------- | ----- |
| Improved instruction following | 🤷 | We need to try it |
| Reproducible outputs | 🤷 | Will reproducibility help if it's generally unpredictable?|
| GPT-4 Fine Tune / Custom Models | 🤷 | I don't have 5 million dollars, do you? |
| GPT Store | 🤷🤷 | Maybe more useful for coding adjacent tools, see Kyle's section below |
| Copyright Shield | 🤷🤷🤷 | Their legal strategy will have... *ramifications* |

# Looking deeper

## **128K** context 👾👾👾👾👾

This gets the maximum score of 5 space invadors.

We'll follow up with more later, but for instance this video from April [Generating Documentation with GPT AI](https://youtu.be/DJ2-Xfd95YM) had as it's main theme the difficulty of getting an LLM agent to reason about a single 8,000 line [source file](https://github.com/videogamepreservation/dukenukem3d/blob/master/SRC/ENGINE.C) from Duke Nukem 3D. That file now fits in a single (expensive) prompt! So do some entire books. The types of inference we can do using the state of the art model has just drastically changed. We look forward to seeing how well the performance holds up in extended context because previous methods in the research have usually had caveats.

## Price drop! 👾👾👾👾

Deciding when to use 3.5-Turbo vs the premium 4 vs a fine-tuned 3.5 has been a juggling act. With this price drop 

* GPT-4 Turbo 128K is 1/3 the cost of GPT-4 8K by input token (1/2 by output)
* GPT-4 Turbo 128K is 1/6 the cost of GPT-4 32K by input token (1/4 by output)
* GPT-3.5 Turbo 16K is also now cheaper than it's 4K version was

## Updated cutoff date

Training now includes data from April 2023 instead of January 2022. This is a potential game changer for general use of ChatGPT, but for coding tasks you should consider controling context more carefully with [Retrieval Augmented Generation (RAG)](https://www.promptingguide.ai/techniques/rag) anyway, as [Cursor](https://cursor.sh) does.

### Whisper v3 and Consistency Decoder

Better speech recognition models will always be good news for speech driven tools like [Cursorless](https://www.cursorless.org) and [Talon](https://talonvoice.com), used by coders with repetitive stress injury. 

### New modalities in the API

These are worth mentioning, but don't seem aimed at coding as we normally understand it. Perhaps for front end and UX design though?

* GPT-4 Turbo vision
* DALL·E 3
* Text-to-speech

# AI Troubleshooting

_For this section we're joined by a leader in AI-assisted troubleshooting: Kyle Forster, CEO of [RunWhen](https://runwhen.com) and former Kubernetes Product Director at Google._

I look to OpenAI's developer announcements as bellwether moments in the modern AI industry. Whether you use their APIs or not, they have access to so many consumers and enterprises that their decisions of what to do and _not_ do are particularly well informed. Below are my take-aways relevant to our domain.

## Models like micro-services, not monolith

OpenAI could focus entirely on driving traffic to their native ChatGPT. Instead, their announcements his week are making it easier to build your own domain-specific GPT and Digital Assistants. We've been in a strong believer in this direction since day 1 where our UX allows users to ask the same troubleshooting question to multiple Digital Assistants. Like individuals on a team, each one has different capabilities, different access rights and come up with different troubleshooting paths and different conclusions.

## Internal-only Enterprise GPT Investments

Enterprise data security with regards to AI is an issue that our industry is only just starting to digest. It is clear that using enterprise data to train models is an absolute "no," but what about a vendor's in-house completion endpoints? A vendor's third party vendors completion endpoints? Masked data? Enterprise-managed models?

We've taken very conservative decisions here out of short term necessity, but our advanced users are thinking about how to take advantage of big public endpoints. The debate reminds me of raging debates in '10-'12 public cloud vs private cloud and the emergence of hybrid cloud research that drove both forward. In this vein, the OpenAI announcements touching on this feel like hybrid cloud investment. I don't know where this work ultimately lands, but I do see numerous inventions - equivalents of Cloud VPCs and Cloud Networking Firewalls that supplemented the early focus on Security Groups - are ahead of us.
