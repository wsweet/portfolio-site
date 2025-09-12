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
layout: layouts/project.njk
---

<div class="content">

  <p class="subtitle is-6 has-text-grey-darker">{{ summary }}</p>

  <div class="tags is-flex is-flex-wrap-wrap mb-4">
    {% for tool in tools %}
      <p><strong>{{ tool }}</strong>&nbsp;&nbsp;&nbsp;</p>
    {% endfor %}
  </div>

  <img src="{{ image }}" alt="Portfolio Screenshot" class="mb-4" />

  <h2 class="title is-4">Why I built this</h2>
  <p>I wanted to build a portfolio website from scratch that’s fast, easy to maintain, and… possible for a novice.</p>

  <h2 class="title is-4">How I made it</h2>
  <p>I started with a blank Eleventy site and a few stubborn ideas: simple folder structure, reusable partials, and styling that feels clean but flexible. I wrestled with layouts, path bugs, and CMS rabbit holes — and I used ChatGPT throughout to sanity-check everything when I got stuck or indecisive.</p>

  <h2 class="title is-4">Stack & tools</h2>
  <ul>
    <li>Eleventy - for the static site magic</li>
    <li>Tailwind CSS - (CDN) for utility-first styling with zero build friction</li>
    <li>Custom gradients - for some fun buttons</li>
    <li>Netlify - for dead-simple deploys</li>
    <li>Git & GitHub - for version control</li>
    <li>ChatGPT - for pair programming my overthinking brain!</li>
  </ul>
</div>