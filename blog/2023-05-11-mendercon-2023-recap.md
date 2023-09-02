---
authors: [raymyers]
slug: mendercon-2023-recap
title: MenderCon 2023 Recap
tags:
  - community
  - corgibytes
  - openspace
---
![MenderCon](/img/mendercon-2023.jpg)

Yesterday was the 4th ever [MenderCon](https://mendercon.com/), an annual conference by CorgiBytes (creators of the [Legacy Code Rocks Podcast](https://legacycode.rocks/)). This was my second and I've found these to be incredibly valuable due to the quality of the community and the emphasis on live interaction. Thus far they are free and I highly recommend tuning in to the next if you can.

This event SOLD OUT at a record 200 attendees, congrats to the organizers on that.

Similar to last year, the format had one track of scheduled talks along-side multiple tracks of spontaneus [Open Space](https://en.wikipedia.org/wiki/Open_Space_Technology) sessions pitched by attendees. The feel of a physical conference was simulated remotely using an app called [Gather](https://www.gather.town), which feels sort of like playing Zelda while on a Zoom call with the nearby charactors. I found Gather enjoyable after a learning curve. Open space sessions and notes were managed in the more familiar collaboration tool [Miro](https://miro.com), the reigning champ of virtual post-it notes.

I prefer to catch scheduled talks later on their YouTube release so I can focus on the Open Space sessions. All of them are listed later, these were the 3 I attended:

* Tech Debt Metrics for Execs w/ Jay Bazuzi
* Mending with AI w/ Wendy Closson
* Code Generation Won't Save Us - Mender.AI

I almost withdrew my submission for a session since there were two other related topics, but I decided to put it in the last time slot and see if the was still interest. As it turned out, 20 people showed up and we had a vibrant hour long discussion!

My three personal highlights from the day:

* **Andrea Goulet**'s perspective on communicating with leadership. If you're not familiar with her work, try this talk on [Empathy-Driven Development](https://www.youtube.com/watch?v=nNMxLbuKZcc)
* **Wendy Closson** suggesting the Mechanized Mending Manifesto, which abbreviates to MMM, is the WWW from World Wide Web flipped upside-down. Her second session topic on the difficulty of "selling the mend" is also something I'd like to get further into, maybe as a sequel to the Craft vs Cruft [Tech Debt and Trust](https://www.youtube.com/watch?v=EtTfG-JMTY4) episode.
* **Emma**'s well-defended warning that we should never use GPT for anything. This may seem like an odd pick because I created this entire site to discuss the usefulness of generative AI in software development, but I also created it to urge caution around the limitations. With so much reckless optimism floating around, we also need splash of cold water. I hope to host a healthy dose of AI-skepticism on this site, for now try out [Will A.I. Become the New McKinsey?](https://www.newyorker.com/science/annals-of-artificial-intelligence/will-ai-become-the-new-mckinsey) by Ted Chiang and [A.I. is B.S.](https://www.youtube.com/watch?v=ro130m-f_yk) by Adam Conover.

## Talks

The scheduled talks will be available soon on [YouTube](https://www.youtube.com/channel/UClRqBBLLGmS_lavhuo5r6Rw), past years are already up!

### Keynote: How a 40-year-old software company keeps its code fresh and maintainable

* **Haim Cohen**, Software Engineering Team Leader, Bloomberg | [LinkedIn](https://www.linkedin.com/in/haimcohen/)
* **Lainey Hall**, Software Engineer, Bloomberg | [LinkedIn](https://www.linkedin.com/in/lainey-hall-47178915b/)

How many of you have encountered the following problems working with a mature codebase:

You don’t know what it does

You don’t know how to build it

The deployment process is based on various scripts and word of mouth

New developers take weeks to get up to speed

We've all been there. Join this talk to discover how a 40-year-old software company keeps its code fresh and maintainable. Through this talk, we will share some helpful techniques and principles that you can immediately start to use to improve time to market, code quality, and developers' work satisfaction.


### Clean Code - Strategies & Principles

* **Abhishek Jain**,
Lead Software Dev at Cornerstone OnDemand, Author, YouTuber at Coach4Dev, Blogger, Stand Up Comedian | [LinkedIn](https://www.linkedin.com/in/coach4dev/)

In this presentation, we will talk about how to write clean code - common pitfalls and strategies on how to enforce better code standards for your organization. We will see some sample code bases on how bad code looks like, why developers tend to go that route and the mindset change required to improve the code quality at your organization.


### Decommissioning a legacy module progressively, using AST traversal

* **Adrien Joly**, Tech Coach at SHODO | [LinkedIn](https://www.linkedin.com/in/adrienjoly/) | [Twitter](https://twitter.com/adrienjoly)

Somewhere, deeply hidden in an old codebase, a module has become so buggy and nasty that no developer dares making any change to it. Actually, developers want to get rid of it, but a big part of the codebase is indirectly relying on it...

Can this story resolve to a happy ending? How to prevent the situation from getting worse, while developers keep adding features in the codebase?

What if AST (Abstract Syntax Tree) traversal was the key? Let's see how it can help us keep an eye on these dependencies, and prune them one by one, until the module is gone for good! 😌

### Unifying UIs with a Design System

* **John Athayde** Owner at Meticulous | [LinkedIn](https://www.linkedin.com/in/johnathayde/) | [Twitter](https://www.twitter.com/johnathayde)

Starting a design system can be daunting, especially on a long running, extensive app or family of applications. How do you start, and then how do you implement the plan? What are the pitfalls of common approaches and off-the-shelf setups? We'll dive into how to start your team on the path of bringing a design system to your organization. We'll identify steps you can take today to move the ball forward, and finally, we'll discuss some of the pitfalls and concerns to watch for as you move towards a unified experience.

## Open Space Sessions

These notes were gathered from the live Miro board, if someone else who attended would like to add more context or links, you are welcome to submit a [Pull Request](https://github.com/craftvscruft/mender.ai/blob/main/blog/2023-05-11-mendercon-2023-recap.md).

* **Tech Debt Metrics for Execs** (Jay Bazuzi)
  * Start from business goals:
    * acquire customers
    * mitigate risk
    * increasing revenue
    * decreasing operational cost
  * Opportunity Cost
  * When business says "we don't care about [some dev detail]", make them say what they do care about.
  * "debt" is a confusing metaphor, because for business people this is a useful tool but for most software people it's a serious problem that must be fixed
  * Call it health? Measure by component - changing this component will be harder
  * [The Toil Scorecard](https://jay.bazuzi.com/Toil-Scorecard/)
  * [Book: Proving the value of soft skills](https://www.amazon.com/Proving-Value-Soft-Skills-Calculating/dp/1950496635)
  * [Theory of Constraints](https://en.wikipedia.org/wiki/Theory_of_constraints)
  * [Book: Principles of product development flow](https://www.amazon.com/Principles-Product-Development-Flow-Generation/dp/1935401009)
* **Ask me, or someone else, anything** (Chris C)
* **Experiences in applying the strangler fig pattern in the wild** (Miriam Retka)
  * [Shopify engineering article on Stranger Fig](https://shopify.engineering/refactoring-legacy-code-strangler-fig-pattern)
* **Behavior change for a better mender culture** (radhika)
  * "Have the right management" / Authority may be needed
  * Pair programming example (possibly a top-down initiative)
  * "Behavior change is hard"
  * "Hard to work with" tech = low morale/motivation = resignations
  * Celebrate modernization and code deletion with demos
  * Mob programming example 2: external collaborators adjust to internal norms; start with small commitments
  * Mob programming example: attitudes a barrier; advocates set the norms
  * "Keychain awards" example: encourage behaviors like cross-team collab with "tour of duty award"
  * Appreciation framework applications (e.g. Motivosity); spot bonuses
  * Team dinners tied to some achievement
  * Hire external consultants to expand capability and bypass fixed norms/culture
  * Clear specific deliverables (and behaviors to get there?)
  * Hackathon example: upgrade security-lagging code
  * "December merry month of maintenance" example
  * Do It Together = more motivation to do less interesting maintenance
  * Enhance group capabilities with shared language, book clubs, exposure/training with new practices
  * Books:
    * [Sidney Dekker](https://sidneydekker.com/books/) (Not sure which)
    * Software Design X-Rays (Adam Tornhill)
    * Tiny Habits (BJ Fogg)
    * Fearless Change: Patterns for Introducing New Ideas
    * Chris Hartjes: Building Test Driven Developers
* **Test-Driven Development Basics** (Sharon DeCaro)
  * [What is TDD?](https://testdriven.io/test-driven-development/)
  * how to use in early-stage start-ups?
    * never too early to start! each feature is behavior that the application doesn't already do
  * how does it apply to applications that already exist that may be untested?
    * use it for new changes, whether feature or bug
    * for initial test coverage, end-to-end can be more beneficial to validate existing behavior
  * unit/integration tests ==> in-memory/IO tests
    * anything running in-memory should be able to run quickly
    * run tests with external calls/dependency as needed
  * tools: Visual Studio Enterprise Live Testing, NCrunch,  Wallaby.js
  * [I'm Done with Unit and Integration Tests](https://ted.dev/articles/2023/04/02/i-m-done-with-unit-and-integration-tests/)
  * [Print-and-Play version of JitterTed's TDD Game v1.1](https://jitterted.podia.com/print-and-play-version-of-jitterted-s-tdd-game)
  * [If you can't TDD, your code needs TLC](https://jay.bazuzi.com/TDDs-legacy-cousins/)
* **How will the technical nature of mending software change as OOP wanes as general "AI" becomes more prominent?** (Andrea Goulet)
  * [Will A.I. Become the New McKinsey?](https://www.newyorker.com/science/annals-of-artificial-intelligence/will-ai-become-the-new-mckinsey) - New Yorker
  * Moving from OOP to Machine Learning as a paradigm change — what will be the technical implications for menders?
    1. Skepticism as a superpower will become more important.
    2. Systems thinking & modeling becomes an essential skill (ex: [Cynefin](https://en.wikipedia.org/wiki/Cynefin_framework), [Domain-Driven Design](https://en.wikipedia.org/wiki/Domain-driven_design), [Thinking in Systems](https://www.amazon.com/dp/B005VSRFEA?ref_=cm_sw_r_cp_ud_dp_Y8SXF3GAX5RC73WT0103_1), etc.)
    3. Increasing need for ethics at the IC level. Also, philosophical discussion about whose responsibility it is to monitor the system working as planned. Who is accountable? (resources: [Algorithmic Justice League](https://www.ajl.org/), [Atlas of AI](https://www.amazon.com/dp/B08WKQ1MTM?ref_=cm_sw_r_cp_ud_dp_PMF9RHH96KHWWGYS3S23), etc.)
* **We bought a SASS product using Kubernetes. It only runs in production and has no tests.** (Chad)
* **Defining the "senior" in senior engineer** (Chuck)
  * What makes a Senior Engineer
    * taking responsibility / ownership
    * capable to work independently but also help others
    * engage in business concerns (not just ticket-takers)
    * have transferrable skills rather than domain-specific skills (including soft-skills)
    * having the right mindset (growth)
    * delivers value
    * can break down (decompose) work
    * systems thinking
    * that undefinable je ne sais quoi
  * [Shuhari](https://en.wikipedia.org/wiki/Shuhari) - stages of learning to mastery
  * [Dreyfus model of skill acquisition](https://en.wikipedia.org/wiki/Dreyfus_model_of_skill_acquisition)
  * Should teams be all seniors? What benefits are there for having juniors?
    * Mentoring
    * Senior developers have to come from somewhere
  * Things that seem to not be good indicators:
    * years on resume
    * how long they've been coding
    * what the level / progression track at your company says
* **Practical steps in setting up a CI/CD pipeline** (Mike Kienenberger)
  * [Build-and-test](https://build-and-test.com)
  * Start by getting something to process, even something trivial
  * Have the pipeline call commands that can trivially be run locally
  * Use a linter  (even with all of the rules disabled) to get started when you have no tests
  * Some validation happens before merge, some validation happens after.  All of the pre-merge checks should be green almost all the time, but the post-tests rarely are.
* **Mending with AI** (Wendy Closson)
  * ChatGPT vs. Github Copilot:
    * Copilot = Next Generation Auto-complete
    * ChatGPT = Next Generation Stack Overflow
  * [TabNine](https://www.tabnine.com/pro) - Can host LLM models on-prem to avoid sharing code outside the company
* **Cross-company architecture guild / simulations** (Allan Stewart)
  * [Architectural Katas](https://architecturalkatas.com/)
  * The "architect" role is different in so many companies (and no one even agrees what it means to be one)
  * Spectrum between 1:1 coaching and writing a book
* **How can 1099s make $** (Chris May)
* **Selling the Mend. Why is it so hard to get the buy in?** (Wendy Closson)
* **Code Generation Won't Save Us - Mender.AI** (Ray Myers)
  * [Mechanized Mending Manifesto](https://mender.ai/docs/intro/)
  * [Generating Documentation with GPT](https://www.youtube.com/watch?v=DJ2-Xfd95YM) - video
* Moving from mender IC developer to manager (Miriam Retka)

*Can we write to you from time to time? [Get updates](/#get-updates).*