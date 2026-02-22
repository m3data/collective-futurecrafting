---
layout: default
title: "The Weave"
description: "A living directory of kindred organizations and collectives aligned with the spirit of Collective Futurecrafting."
permalink: /craft/weaving/
published: false
---

{% include page-hero.html
  title="The Weave"
  description="A living constellation of regenerative initiatives, co-weaving futures of care, kinship, and possibility."
  theme="terra-sky"
  size="large"
  align="center"
  image="/assets/images/hero_gumbark.jpg"
%}

<div class="container">
  <div class="section-heading">
    <h2>Kin across the weave</h2>
    <p>
      This weave is an invitation to recognise shared purpose across diverse expressions. Each initiative here is part of the living tapestry of thousands of Earthians weaving together, crafting presents and futures worth inhabiting.
    </p>
  </div>

<!-- Filter Buttons -->
<div class="resources-filters">
  <button class="filter-button active" data-filter="all">All</button>
  <button class="filter-button" data-filter="Governance">Governance</button>
  <button class="filter-button" data-filter="Bioregionalism">Bioregionalism</button>
  <button class="filter-button" data-filter="Somatics">Somatics</button>
  <button class="filter-button" data-filter="Tech for Good">Tech for Good</button>
  <button class="filter-button" data-filter="Learning">Learning</button>
  <button class="filter-button" data-filter="Poetic">Poetic</button>
</div>

<!-- The Weave Directory Grid -->
  <div class="content-pod-container">
        {% for org in site.data.the_weave %}
        {% include weave-card.html org=org %}
        {% endfor %}
  </div>
</div>
{% capture parallax_content %}
<h2>Are you weaving too?</h2>
<p>
  If your work belongs in this weave, or you’d like to invite others to the circle, <a href="{{ '/get-involved' | relative_url }}">get in touch</a> or submit a thread.
</p>
<a href="https://airtable.com/your-form-link" class='button button--primary'>Submit your thread →</a>
{% endcapture %}

{% include parallax-section.html
  background="/assets/images/seed-of-life-hero-rough.svg"
  theme="sky-terra"
  align="center"
  height="auto"
  padding="medium"
  content=parallax_content
%}

<script src="{{ '/assets/js/weave-filters.js' | relative_url }}"></script>