---
title: 'Phase Two: Design'
description: 'Getting into the specifics of Raudio itself.'
author: 'Raudio'
date: 2022-02-03
---

## Related Works
Our reference/default client implementation is a Discord bot for voice channels, which we believe differentiates itself a lot from [MPD](https://musicpd.org/) and [Icecast](https://icecast.org/).
Specifically creating a Discord bot also means that we can use this as a response to [Rythm bot's](https://rythm.fm/) recent death.
Raudio is also more extensible, being that you can play audio from any file that you have, and are not limited to sources like YouTube or Soundcloud as you were with Rythm.
Finally, Raudio is once again, completely open source, whereas Rythm Bot was a subscription-based service.

## Identified Subprojects
<ul>
  <li>Primary audio server application</li>
  <li>Client Library (For versatile client use)</li>
  <li>Client Application (Pycord Discord Bot)</li>
  <li>Website development, blog posts (meta moment)</li>
  <li>Documentation (tentatively using GitHub Wiki)</li>
  <li>Remote server & management</li>
</ul>

## Technology Stack
### Frameworks 
<ul>
  <li>GStreamer - Backend server for audio streaming</li>
  <li>gst-python - Python Language Bindings</li>
  <li>rtpbin - GStreamer plugin for RTP</li>
</ul>

### Library
For creating our Discord bot client, we will be using [Pycord](https://github.com/Pycord-Development/pycord), 
which is a perfect alternative to [Discord.py](https://github.com/Rapptz/discord.py) which had been archived by its maintainer.
As a direct fork of Discord.py with many of its contributors maintaining this new Python wrapper, it is surely a solid option.

## Architecture
For the purposes of demonstration/MVP, our audio server and Discord client will both run on remote machines, though in our overall architecture, this isn't a requirement.
Discord users will have options to interact with the Discord client to request songs and basic other audio functions, like play, pause, etc.
The audio server streams music files to the client, which in this case is redirected to the Discord API through Pycord to be streamed over voice chat.

### MVP Specifics
Our main focus for the project is creating the audio server, and an open API + library for creation of clients. We want to make it as easy as possible to interact
with the server so that users will be able to create their own clients for their own needs with minimum effort. Some ideas for how we can ease interacting with the server
included having a web client, TUI/Curses app, or GUI app. Therefore, by developing our Discord bot, it will act as a default client as proof of concept which uses
our API (which will be further documented).

## Slide Deck
<center><iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRfWwow_f-LQBsYxeyHG9M3VJN0zyXuKMevlWNRGEdgH-eQvSToewh2pTZpnEwDaRrTViIOTdabs4eo/embed?start=false&loop=false&delayms=3000" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe></center>
