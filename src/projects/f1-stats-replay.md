---
title: "F1 Stats Replay (CLI Tool)"
date: "2025-09-06"
tags: ["projects"]
summary: "A Python command-line tool for analysing and replaying historical Formula 1 race data."
image: "/assets/images/F1_stats_replay_screenshot.jpg"
tools:
  - Python
  - FastF1 API
  - Pandas
  - Argparse
layout: layouts/project.njk
---

<div class="content">
  <p class="subtitle is-6 has-text-grey-darker">{{ summary }}</p>

  <div class="tags">
    {% for tool in tools %}
      <p><strong>{{ tool }}</strong>&nbsp;&nbsp;&nbsp;</p>
    {% endfor %}
  </div>

  <img src="{{ image }}" alt="Screenshot of the F1 stats replay tool showing its console output." class="mb-4" />

  <p>The project repository: <a href="https://github.com/wsweet/F1-stats-replay">GitHub Repo</a></p>

  <h2 class="title is-4">Why I built this</h2>
  <p>I wanted to build a backend tool that could demonstrate a full data workflow, from API integration to data processing and structured output, all within a clean and usable command-line interface. The challenge was to create a tool that was both technically robust and intuitive to use, without relying on a graphical front-end.</p>

  <h2 class="title is-4">How I made it</h2>
  <p>I started with the "FastF1" Pythong Library as the data source, as it provides rich telemetry data for all Grand Prix races. The data was then processed using the "pandas" library to perform calculations and structure the output. Finally, I used the "argparse" library to create the command-line interface, making the tool easy to navigate. The entire project was built in Python.</p>

  <h2 class="title is-4">Stack & tools</h2>
  <ul>
    <li><p>Python: The core language for the entire project.</p></li>
    <li><p>FastF1 API: For sourcing all the race data.</p></li>
    <li><p>Pandas: For data manipulation and analysis.</p></li>
    <li><p>Argparse: For building the command-line interface.</p></li>
  </ul>
</div>