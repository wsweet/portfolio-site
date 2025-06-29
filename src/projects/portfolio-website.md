---
title: "Personal Portfolio Website"
date: "2025-06-29"
tags: ["projects"]
summary: "A fast, modern portfolio site built with Eleventy, Tailwind, and Netlify."
image: "/assets/images/portfolio-screenshot.png"
tools:
  - Eleventy
  - TailwindCSS
  - Netlify
  - Git & GitHub
layout: base.njk
---

<!-- HERO BLOCK START -->
<h1 class="text-4xl font-bold mb-4">{{ title }}</h1>

<div class="text-gray-600 mb-4">{{ summary }}</div>

<div class="flex flex-wrap gap-2 mb-6">
  {% for tool in tools %}
    <span class="px-2 py-1 bg-gray-200 rounded text-xs">{{ tool }}</span>
  {% endfor %}
</div>

<img src="/assets/images/portfolio-screenshot.png" alt="Portfolio Screenshot" class="rounded-lg shadow-md mb-6" />
<!-- HERO BLOCK END -->

**Why I built this**  

I wanted build a portfolio website from scratch that’s fast, easy to maintain, and... possible for novice. 

<br>

**How I made it**  

I started with a blank Eleventy site and a few stubborn ideas: simple folder structure, reusable partials, and styling that feels clean but flexible. I wrestled with layouts, path bugs, and CMS rabbit holes — and I used ChatGPT throughout to sanity-check everything when I got stuck or indecisive.

<br>

**Stack & tools**

Eleventy - for the static site magic
Tailwind CSS - (CDN) for utility-first styling with zero build friction
Custom gradients - for some fun buttons
Netlify - for dead-simple deploys
Git & GitHub - for version control
ChatGPT - for pair programming my overthinking brain!