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
// Create story nodes object 
const storyNodes = {
  {% for node in site.story_nodes %}
    "{{ node.id | split: '/' | last }}": {
      text: {{ node.content | jsonify }},
      choices: [
        {% for choice in node.next_nodes %}
        {
          text: "{{ choice.text }}",
          next: "{{ choice.next }}"
        }{% unless forloop.last %},{% endunless %}
        {% endfor %}
      ]
    }{% unless forloop.last %},{% endunless %}
  {% endfor %}
};

// Debug output
console.log("Processed story nodes:", storyNodes);
</script>