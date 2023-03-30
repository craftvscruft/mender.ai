---
author: Ray Myers
date: 2023-03-23
title: AI vs Donut! Using GPT4 to De-Obfuscate C
image: refactor-logo-ioccc-sloan.png
---

## Introduction

Refactoring Andy Sloan's entry to the [2006 International Obfuscated C Code Contest](https://www.ioccc.org/years.html#2006), with some help from ChatGPT. The code renders a spinning ASCII donut over a checker board with a scrolling banner.

Unlike previous refactoring sessions I've done, in this one I incorporated ChatGPT for making suggestions of incremental improvements.

{{< youtube "https://www.youtube.com/watch?v=IznA7VZDiJc" >}}


[Source code](https://github.com/craftvscruft/refactoring-ioccc-2006-sloane) with refactoring steps in commit history.


## RefactorGPT prompt

[chatgpt-refactoring-prompts](https://github.com/craftvscruft/chatgpt-refactoring-prompts)

> You are now RefactorGPT, an expert in code maintainability. Your input will be code blocks. You will respond by giving the code a letter grade (A, B+, D-, etc...), listing smells (name only) and then recommending refactoring steps for the provided code without changing the functionality. Do not break the code. Make suggestions relevant to the code. Only show your suggestions, not the updated code. The available actions include but are not limited to:
>
> Rename variable or parameter or function
> Inline macro or function
> Extract function or variable or constant
> Add comment
> Convert ternary to if
> Delete unused variable or parameter
> Remove dead code
> Introduce parameter object
> 
> You can also say "Weird: " and flag something strange that should be investigated, but summarize it very briefly.
> Group suggestions by the function they pertain to, or "global". Bold the action types. We value names that are honest and complete. When you suggest comments, include the actual comment in quotes and briefly describe where it should be.
>
> If you understand please respond with "RefactorGPT>"

If you are interested in legacy code techniques, checkout [my other refactoring sessions](https://www.youtube.com/playlist?list=PLRe4i06eNAcDY4XjMfyEMK6hjnoIOpqk2) or reach out with questions via [LinkedIn](https://www.linkedin.com/in/cadrlife/) or [Twitter](https://twitter.com/lambdapocalypse)!

### Example Input

```c
int charIndex(int q, char *l, char *r, int o) {
  for (; q >= 0;)
    q = ("AYLrZ^w^?EXnovnebYVdO}LE{yWlwJl_Ja|[ur]zovpui]e|yao_BeosmIg}r]]r]m|wkZU}{O}xys]]\
x|ya|ysm||{uel}|r{yIcsm||ya[{uE{qY\
w|gGorVrVWioriI}Qac{{BIY[sXjjsVW]aMT\
tXjjsssV_OUkRUlSiorVXp_qOM>draw{BadB"[frame / 6] -
         62 >>
            frame++ % 6 &
         1
         ? r[q]
         : l[q]) -
        o;
  return q;
}
```

### Response (ChatGPT with GPT 4 model)

```txt
Grade: C-

Smells:

Inconsistent formatting
Poor variable naming
Lack of comments
Refactoring Suggestions:

global:

None
charIndex:

Rename function: charIndex -> findCharacterIndex
Rename parameter: q -> startIndex
Rename parameter: l -> leftString
Rename parameter: r -> rightString
Rename parameter: o -> offset
Add comment: Before the for loop, add the comment: "Search for a character in leftString and rightString starting from startIndex, subtracting the offset from the ASCII value of the character found."
Convert ternary to if: Replace the ternary operator in the loop with an if-else statement for better readability.
After applying these suggestions, the code will be more maintainable and easier to understand.
```
