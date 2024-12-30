---
layout: default
title: "Craft - The Art of Collective Futurecrafting"
description: "Explore the principles, patterns and practices that make Collective Futurecrafting work"
---

{% include page-hero.html
  title="The Art of Collective Futurecrafting"
  description="Principles, patterns and practices that guide the art and craft"
  theme="charcoal-pink-sky"
  size="large"
  align="center"
  image="/assets/images/hero_gumbark.jpg"
%}

<div class="container">
  <div class="section-heading">
    <h2>Emergence of the craft</h2>
    <p>All of what we share is merely a guiding reference for the emergence of crafting in the circles you are part of.</p>
  </div>
  {% include quote-callout.html 
    quote="Collective Futurecrafting is designed to be a living practice, a way of being, a way of seeing, a way of doing that is always in flux, always in dialogue with the world around us. So play with these references as you wish and share with the community as you learn together along the way."
    attribution="Origin Steward"
    theme="terra-sky"
    size="large"
    align="left"
  %}
</div>
<!-- Card Content Grid -->
  <section class="content-grid">
    <div class="container">
      <div class="grid">
        <!-- Principles -->
        <div class="card card--terracotta">
          <h2>Principles</h2>
          <p>Learn about the seven principles that guide Collective Futurecrafting.</p>
          <a href="{{ '/craft/principles' | relative_url }}" class="button button--primary">Learn</a>
        </div>
        <!-- Patterns -->
        <div class="card card--olive-green">
          <h2>Patterns</h2>
          <p>Understand the foundational patterns of Collective Futurecrafting.</p>
          <a href="{{ '/craft/patterns' | relative_url }}" class="button button--primary">Understand</a>
        </div>
        <!-- Practices -->
        <div class="card card--sun-gold">
          <h2>Practices</h2>
          <p>Explore the practices that bring Collective Futurecfating to life. </p>
          <a href="{{ '/craft/practices' | relative_url }}" class="button button--primary">Explore</a>
        </div>
        <!-- Play -->
        <div class="card card--sky-blue">
          <h2>Play</h2>
          <p>Explore serious play and the game of with Collective Futurecrafting.</p>
          <a href="{{ '/craft/play' | relative_url }}" class="button button--primary">Play</a>
        </div>
      </div>
    </div>
  </section>
{% capture parallax_content %}
<h2>Begin with us</h2>
<p>
  We are just beginning on this intergenerational journey of Collective Futurecrafting, and we need your voice, your wisdom, your heart, your dreams.
</p>
<a href="#" class='button button--primary'>Become a futurecrafter →</a>
{% endcapture %}

{% include parallax-section.html
  background="/assets/images/seed-of-life-hero-rough.svg"
  theme="sky-terra"
  align="center"
  height="full"
  padding="medium"
  content=parallax_content
%}