---
layout: default
title: "Collective Futurecrafting Playground"
description: "Play with art and craft of collective futurecrafting."
permalink: /craft/play/
---

{% include page-hero.html
  title="Coming soon: Playground"
  description="Play with art and craft of collective futurecrafting."
  theme="charcoal-pink-sky"
  size="large"
  align="center"
  image="/assets/images/hero_gumbark.jpg"
%}

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