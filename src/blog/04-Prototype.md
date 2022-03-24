---
title: 'Prototype'
description: 'The initial MVP.'
author: 'Raudio'
date: 2022-03-03
---

## Server
A [minimal server](https://github.com/raudio-project/raudio-server/tree/legacy-rtp) was first written that could stream an audio file via the command line (one file, one client).
Adding onto this functionality, we are excited to share that our initial prototype is a server that streams an audio file on a loop to clients that receive the stream via GET requests.
To manually test the functionality of the server, we are able to use `mpv` or go to the IP address and listen. Through our API, we support the control to pause and resume
the audio file via PUT requests, so that client streams will pause and resume where it was left off. As of now, several users can connect and the serfver is able to control the playback.

## Process
As for our next steps, we have our list of subprojects to keep an eye on as listed in [blog 3](https://raudio-project.github.io/blog/03-Design/). 
We plan to continue using a feedback loop involving discerning next tasks, how to implement them, executing them, and pushing the updates to the GitHub organization.

## Switch from RTP to HLS
The minimal server used RTP via GStreamer, which worked for its scale, but we later ran into problems involving UDP while developing this prototype. 
We are using Momo, a machine on campus, to run our server, though the University of Notre Dame's firework apparently blocks some UDP traffic. Because of this,
we realized that in general, clients with their own firewall would need to open a port to allow incoming stream packets. 
Since UDP is connectionless, we instead swapped to HLS via a Python wrapper for [FFmpeg](https://ffmpeg.org/) which offers benefits greater than using RTP.

![Updated architecture diagram](https://yld.moe/raw/fFs.png)

# In Action
The server is currently running on Momo, which is a machine (belonging to the Notre Dame Linux Users Group) running in the CSE Commons of the Fitzpatrick Hall of Engineering on the University of Notre Dame's campus.
The stream is accessible to anyone on the eduroam network when visiting [this link](http://momo.campus.nd.edu:5000/stream) on a client that can handle an HLS stream.
Currently, we are still considering to use a VPS service instead of this university machine to avoid potential firewall issues again.

![Server in action](https://yld.moe/raw/iId.png)

## Slide Deck
<center><iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQzYWOAEL6m9dkU4YWI5FnGDw_91ev8GMCuX4ykV7sRT6gYao0Qtc6SrYiiBskCARpuxaSCQB8ytQQb/embed?start=false&loop=false&delayms=3000" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe></center>
