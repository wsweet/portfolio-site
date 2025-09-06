---
title: "F1 Stats Replay (CLI Tool)"
description: "A Python command-line interface for analysing and replaying historical Formula 1 race data."
date: 2025-09-06
tags: ["projetcs"]
---

### Project Overview

This programme is a Python-based command-line tool that allows you to quickly access and analyse Formula 1 data. It is a fantastic showcase of back-end data engineering and building a functional tool outside of a web browser.

![A screenshot of the F1 stats replay tool showing its console output.](/assets/images/F1_stats_replay_screenshot.jpg)

### The Data & Engineering

At its core, the project uses the **FastF1** API to fetch real-time and historical race data. The data, which includes lap times, driver positions, and session results, is processed using the **pandas** library. This highlights the ability to handle, manipulate, and prepare raw data for analysis. The final output is a clean, readable summary printed directly to the terminal, making the data instantly accessible.

### The Command-Line Interface

The tool is designed to be simple and intuitive. Using the **argparse** library, users can specify a race and a year to get the results or to trigger the "replay" function. This focus on a robust CLI shows an understanding of user-centric application design beyond a typical web interface.

### What I Learned

This project was a deep dive into building a functional and useful application for the command line. It solidified skills in consuming third-party APIs and managing complex data structures. It was a great exercise in designing a clean user experience in a text-based environment and highlights a different facet of data-focused development.

[View the complete source code on GitHub](https://github.com/wsweet/F1-stats-replay)