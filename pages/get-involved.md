---
layout: page
title: "Get Involved"
description: "Join the Collective Futurecrafting community and help craft preferable futures together"
nav_order: 4
---

<!-- Content Section Start -->
<div class="container">
  <div class="section-heading">
    <h2>Craft with us</h2>
    <p>Collective Futurecrafting is a seedling just beginning to emerge. This is an invitation to help nuruture and cultivate this living practice.</p>
  </div>

  {% include content-pod.html
    theme="terra-sky"
    width="full"
    align="left"
    content="
    <h2>Current opportunities</h2>
    <div class='protocol-section'>
      <div class='protocol-subsection'>
        <h3>Early circle crafters</h3>
        <p>We're looking for individuals and small groups interested in piloting the first Futurecrafting Circles. As an early crafter, you'll:</p>
        <ul class='protocol-list'>
          <li>Help shape and refine the circle practices</li>
          <li>Contribute to the craft itself</li>
          <li>Connect and learn with other crafters and stewards</li>
        </ul>
      </div>
    </div>"
  %}

  {% include content-pod.html
    theme="sky-terra"
    width="full"
    align="left"
    content="
    <h2>Ways to engage</h2>
    <div class='protocol-section'>
      <div class='protocol-subsection'>
        <h3>Stay connected</h3>
        <ul class='protocol-list'>
          <li>Sign up for updates on <a href='https://collectivefuturecrafting.substack.com/' target='_blank'>Substack</a></li>
          <li>Share your thoughts and feedback</li>
        </ul>
      </div>
      <div class='protocol-subsection'>
        <h3>Share your wisdom</h3>
        <ul class='protocol-list'>
          <li>Tell us about your lived experiences with collective action and community building</li>
          <li>Share stories of transformation and change from your context</li>
          <li>Contribute ideas for making Collective Futurecrafting more inclusive and effective</li>
        </ul>
      </div>
    </div>"
  %}

  {% include content-pod.html
    theme="olive-gold"
    width="full"
    align="left"
    content="
    <h2>Emerging soon</h2>
    <div class='protocol-section'>
      <div class='protocol-subsection'>
        <h3>In germination</h3>
        <ul class='protocol-list'>
          <li>Futurecrafting Playground</li>
          <li>Place-based Playbook</li>
          <li>WISDOM Protocol</li>
          <li>Local Perpetual Pilots</li>
        </ul>
        <p class='protocol-note'>Want to be notified when these launch or contribute to their evolution? Drop us a note below.</p>
      </div>
    </div>"
  %}
</div>
<!-- Content Section End -->
<!-- Contact Form Start -->
<div class="container" id="contact">
  <div class="section-heading">
    <h2>Get in touch</h2>
    <p>Have a question, suggestion, or just want to say hello? Drop us a line and we'll get back to you as soon as we can.</p>
  </div>
    <div class="form-container">
        <iframe data-tally-src="https://tally.so/embed/mZvP45?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" loading="lazy" width="100%" height="447" frameborder="0" marginheight="0" marginwidth="0" title="Welcome"></iframe>
        <script>var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}</script>
    </div>
</div>
<!-- Contact Form End -->
{% capture parallax_content %}
<h2>Remember...</h2>
<p> Collective Futurecrafting is a living practice. We invite you to join us in shaping this practice, sharing your wisdom, and helping to craft preferable futures together.</p>
{% endcapture %}

{% include parallax-section.html
  background="/assets/images/seed-of-life-hero-rough.svg"
  theme="sky-terra"
  align="center"
  height="full"
  padding="medium"
  content=parallax_content
%}