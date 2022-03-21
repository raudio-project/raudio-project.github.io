---
title: 'First Steps: Infrastructure'
description: 'Decisions regarding how we should form our organization, how to manage our workflows, and what license to use.'
author: 'Raudio'
date: 2022-01-20
---

## Organization
### Name
Our name comes from the combination of "radio" and "audio." Absolutely groundbreaking, we know! We named our GitHub organization `raudio-project` because Raudio was unfortunately taken. 

### Web Presence
We already planned to host our code (organization) on GitHub, so we figured it would be best choice to also host our website using GitHub Pages. 
We considered using static site generators, because all we planned the website to have was a landing page and blog posts such as these.
After brief discussion about which static site generator to use, we had choices between 11ty, Hugo, and Jekyll, and ultimately went with 11ty because it was JavaScript based and had good reviews.

### Repository Workflow
As we set up our GitHub organization where we are hosting our code base, 
we decided to have a workflow of creating branches for certain features and having at least another pair of eyes look at a commit before merging.
We each have "Owner" access to the repository, which makes this double-layered process versatile and consistent.
Lastly, we plan to create some sort of checklist and maybe an automated test suite if it's something realistic later on in development.

### Communal
We created a Discord server to communicate to each other about anything related to the project.
The server acts as a great communication point for both the contributors and future potential community members.
We have separate channels dedicated for issues and development, and the main channel is also bridged to IRC for ease of use for those who prefer to use IRC.
On top of using our Discord server for communicating with users, we will also be making use of the conveniently-placed issues tab found under every repository.
We also considered using GitHub Projects or a Trello Board for more organization purposes, but found that with the magnitude of our project and our current tools, it wouldn't be necessary.

### License
We decided on `GPL v3.0` because the prospect of someone using our work and making a profit off of it was unattractive. 
In addition, planning to use [GStreamer](https://gstreamer.freedesktop.org/), some of the libraries used are under GPL, so we followed that it would be the safest option to also go GPL.

## Slide Deck
<center><iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSr3ESLM0zI8-LQpiZdQWHm1iVK2GraO_VomO516oNVJzA65JEVch8A_De8yfR25wSOtQ9N2ibpDXhO/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe></center>
