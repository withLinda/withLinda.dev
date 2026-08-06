---
layout: ../layouts/BlogPost.astro
title: "About"
description: "Indie developer in Indonesia building Mac and iPhone apps. I take scattered things and make the shape of them visible. Creator of FinishTrax."
pubDate: "2024-03-21"
---

Hi, I'm Linda. I'm an indie developer in Indonesia. I build apps for Mac and iPhone, and nearly all of them start in the same place: something is scattered, and I want to see the shape of it.

Fascination is what moves me, not roadmaps. I follow the thing that's interesting — which is why there are so many projects, and why the ones I finish are the ones that stayed interesting all the way down.

I start everything and finish some. I'm working on the second half of that. The first thing I carried all the way to the App Store is called FinishTrax, which is either funny or exactly right.

## FinishTrax

[FinishTrax](https://finishtrax.app/) is a task app for people who start everything and finish nothing. A nested outliner where progress rolls up on its own, a focus mode that hides every branch except the one you're standing in, and a Pomodoro timer inside the task itself.

No streaks. No guilt notifications. No gamification. Just honest data about what you actually did.

It's on the App Store as a paid app, with a lifetime option for early supporters. A Mac version is in progress and shares the same purchase.

## What I'm building

Some of these live in private repos while they're still moving. Several already ship as signed, notarized downloads.

**Jotrove** — a local-first library for snippets and Markdown notes. The Mac app is at 1.10; the iPhone and iPad version syncs privately over iCloud. For people who keep a lot of text and want it to stay theirs.

**MacSnip** — a macOS screenshot tool. Control-Command-A from anywhere, drag an area or click a window, annotate, done. Universal binary, signed and notarized.

**StoreShots** — a native Mac app for building App Store and Google Play marketing screenshots. I made it because I needed it for FinishTrax, and then it turned into its own thing.

**ContextDistiller** — a pipeline that turns messy PDFs into clean Markdown, HTML, PDF, and EPUB. It cuts redundancy without ever dropping a number, a citation, or a URL. The purest version of the thing I keep doing. Still finding its shape.

## How I work

Swift and SwiftUI for anything native. TypeScript when it belongs in a browser. Python or Rust when the problem asks for it.

Every project gets an XcodeGen spec, a Makefile, and a test suite, because I'd rather build from the command line than click through a UI. Mac apps go out signed and notarized as universal binaries. Anything holding your data keeps it local first and syncs only through your own iCloud, where I never see it.

I care about color more than is strictly reasonable. I've built a CIELAB contrast tool, an Everforest colorizer, and a palette viewer, mostly so my own themes would survive being measured. FinishTrax ships six accessibility-tested themes for the same reason. Beauty that falls apart under a contrast checker was never beauty.

## Open source

Around thirty public repos. Most of them take something trapped inside a web app and turn it into Markdown:

- **[claude-JSONL-browser](https://github.com/withLinda/claude-JSONL-browser)** — Claude Code conversation logs into something readable
- **Exporters** for ChatGPT, Claude projects, YouTube captions, Udemy captions, VTT, and JSON

The rest is at [github.com/withLinda](https://github.com/withLinda).

## Elsewhere

- [GitHub](https://github.com/withLinda)
- [Twitter/X](https://x.com/withLinda13) — DMs are open
- [Tumblr](https://www.tumblr.com/withlinda13)

When I'm not building something, I'm usually in Fallout 76 or being supervised by my two cats.

## This blog

Astro and Everforest, all of it open: [github.com/withLinda/withLinda.dev](https://github.com/withLinda/withLinda.dev)
