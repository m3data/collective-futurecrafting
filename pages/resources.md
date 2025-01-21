---
layout: default
title: "Resources"
description: "Explore our curated collection of resources for deepening your understanding of Collective Futurecrafting."
permalink: /resources/
---

{% include page-hero.html 
  title=page.title
  description=page.description
  theme="nature"
  align="center"
%}

<div class="resources-container">
  <!-- Filter Controls -->
  <div class="resources-filters">
    <button class="filter-button active" data-filter="all">All</button>
    <button class="filter-button" data-filter="book">Books</button>
    <button class="filter-button" data-filter="article">Articles</button>
    <button class="filter-button" data-filter="video">Videos</button>
    <button class="filter-button" data-filter="podcast">Podcasts</button>
  </div>

  <!-- Featured Resources -->
  {% assign featured_resources = site.resources | where: "featured", true %}
  {% if featured_resources.size > 0 %}
    <section class="featured-resources">
      <h2>Featured Resources</h2>
      <div class="resources-grid">
        {% for resource in featured_resources %}
          {% include resource-card.html resource=resource %}
        {% endfor %}
      </div>
    </section>
  {% endif %}

  <!-- All Resources -->
  <section class="all-resources">
    <h2>All Resources</h2>
    <div class="resources-grid">
      {% assign resources = site.resources | sort: "published_date" | reverse %}
      {% for resource in resources %}
        {% include resource-card.html resource=resource %}
      {% endfor %}
    </div>
  </section>
</div>