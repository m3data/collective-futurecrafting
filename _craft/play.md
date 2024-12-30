---
layout: default
title: "Play - A Mythic Journey into Collective Futurecrafting"
permalink: /craft/play/
---

<div class="story-weaver">
  <div class="story-container" id="storyContainer">
    <!-- Story content will be dynamically inserted here -->
  </div>
</div>

<script>
// Create story nodes object and attach to window
window.storyNodes = {
  {% for node in site.story_nodes %}
    {% assign node_id = node.path | split: '/' | last | split: '.' | first %}
    "{{ node_id }}": {
      id: "{{ node_id }}",
      title: "{{ node.title }}",
      text: {{ node.content | jsonify }},
      choices: {{ node.next_nodes | jsonify }},
      theme: "{{ node.theme }}",
      background_image: "{{ node.background_image }}"
    }{% unless forloop.last %},{% endunless %}
  {% endfor %}
};

// Debug output
console.log("Processed story nodes:", window.storyNodes);
</script>