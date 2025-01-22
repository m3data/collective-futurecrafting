---
layout: default
title: "Craft - The Art of Collective Futurecrafting"
description: "Explore the principles, patterns and practices that make Collective Futurecrafting work"
permalink: /craft/
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
    <p>All of what we share in this moment is merely a guiding reference for the emergence and evolution of the craft itself.</p>
  </div>
  {% include quote-callout.html 
    quote="Collective Futurecrafting is designed to be a living practice, a way of being, a way of seeing, a way of doing that is always in flux, always in dialogue with the world around us. So play with these principles, patterns and practices as you wish. Embody them, adapt them and share learnings with the communities you are part of along the way."
    attribution="Origin Steward - Mathew Mytka"
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
      </div>
    </div>
  </section>
{% capture parallax_content %}
<h2>Craft with us</h2>
<p>
  We are just beginning on this intergenerational journey of Collective Futurecrafting, and we need your voice, your wisdom, your heart, your dreams.
</p>
<a href="{{ '/get-involved' | relative_url }}" class='button button--primary'>Get involved →</a>
{% endcapture %}

{% include parallax-section.html
  background="/assets/images/seed-of-life-hero-rough.svg"
  theme="sky-terra"
  align="center"
  height="full"
  padding="medium"
  content=parallax_content
%}