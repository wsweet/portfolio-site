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
layout: base.njk
---

<h1 class="text-4xl font-bold mb-4">{{ title }}</h1>

<div class="text-gray-600 mb-4">{{ summary }}</div>

<div class="flex flex-wrap gap-2 mb-6">
  {% for tool in tools %}
    <span class="px-2 py-1 bg-gray-200 rounded text-xs">{{ tool }}</span>
  {% endfor %}
</div>

<img src="{{ image }}" alt="Screenshot of the F1 stats replay tool showing its console output." class="rounded-lg shadow-md mb-6" />
### Why I built this

I wanted to build a backend tool that could demonstrate a full data workflow, from API integration to data processing and structured output, all within a clean and usable command-line interface. The challenge was to create a tool that was both technically robust and intuitive to use, without relying on a graphical front-end.

### How I made it

I started with the `FastF1` API as the data source, as it provides rich telemetry data for all Grand Prix races. The data was then processed using the `pandas` library to perform calculations and structure the output. Finally, I used the `argparse` library to create the command-line interface, making the tool easy to navigate. The entire project was built in Python.

### Stack & tools

* **Python:** The core language for the entire project.
* **FastF1 API:** For sourcing all the race data.
* **Pandas:** For data manipulation and analysis.
* **Argparse:** For building the command-line interface.