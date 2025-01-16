---
layout: page
title: "Origins"
description: "The emergence and evolution of Collective Futurecrafting"
nav_order: 2
---
<!-- Hero Section Start -->
{% include page-hero.html 
  title="Origins of Collective Futurecrafting"
  subtitle="A whisper of ancient wisdom, a spark of social innovation"
  description="Discover the roots of our approach and the journey that led us here."
  image="/assets/images/hero_tree.jpg"
  image_alt="Ancient tree in a forest"
  theme="sky-terra-gold"
  align="center"
  size="large"
  gradient="bottom"
%}
<!-- Hero Section End -->

<!-- Content Section Start -->
{% capture section_content %}
<p>Whispers of ancient patterns and rituals we've long lost. A soft song carried on night breezes, reminding us of times when we knew how to sit in circles, to listen deeply, to weave futures with the threads of shared stories and collective dreams. </p>
<p>But really, it started with questions:</p> 
<p><span class="bold-highlight">What if what we need is already here? Scattered like seeds in the wisdom of the land, in our social bodies, in the quiet knowledge of local communities, and in the dreams we dare to share when we gather together?</span></p>
{% endcapture %}

{% include two-column-section.html
  title="Some say there was a whisper in the wind."
  content=section_content
  image="/assets/images/many-circles.svg"
  image_alt="illustration of people sitting in a circle around a fire in nature"
  image_position="right"
  padding="medium"
%}

{% capture next_section_content %}
<p>In October 2023, four Earthians sat around a virtual tea garden table in the <a href="https://app.gather.town/invite?token=F_z-hVdZR-upu-QQHjYJ">Tethix Archipelago</a>. The government wanted input on Australia's science and research priorities. Big stuff. But instead of getting tangled in BAU, we found ourselves dreaming bigger as the whispering circles wove magic in our minds.</p>

<p>In these gatherings we sketched out something different. Not another top-down framework, but a way to bring together the old and the new.</p> 
<p>To bring back the circles where humans have always done their best thinking - around fires, in gardens, at community gatherings and even around virtual tea garden tables like ours.</p>
{% endcapture %}

{% include two-column-section.html
  title="The whispers grew louder."
  content=next_section_content
  image="/assets/images/people-sitting-around-a-table-in-a-garden.svg"
  image_alt="tapestry of life illustration"
  image_position="left"
  padding="medium"
%}
<!-- Content Section End -->

<!-- Submission Section Start -->
{% include quote-callout.html 
  quote="Australia faces unprecedented challenges, from existential ecological overshoot to social inequities. All of this, the story of where we’ve come from, where we are today and where we are headed, is situated within a rapidly changing environmental, sociopolitical and socioeconomic landscape. We are not, nor can we be, separated. We are part of an interconnected and interdependent whole across human and ecological systems."
  attribution="Origin consultation submission"
  theme="terra-sky"
  size="large"
  align="center"
%}

{% capture submission_content %}
<p>The original submission to the <a href="https://consult.industry.gov.au/sciencepriorities2" target="_blank">Draft National Science and Research Priorities consultation</a> was stark and bold.</p>

<p>Welling from deep knowledge across disciplines and lived experience in systemic change. And drawing on diverse work, from that of the <a href="https://www.futuregenerations.wales/" target="_blank">Future Generations Commissioner</a> for Wales, to <a href="https://www.researchgate.net/publication/376087466_Polycentric_self-governance_and_Indigenous_knowledge" target="_blank">polycentric self-governance and indigenous knowledge</a> and <a href="https://www.challengebasedlearning.org/" target="_blank">Challenge Based Learning</a> and much more.</p>

<a href="https://drive.google.com/file/d/1NcjPlxTO5xRw1aAHo2wu_rjFirrJSjVK/view?usp=sharing" target="_blank" class="button button--primary">Read the original submission →</a>
{% endcapture %}

{% include content-pod.html 
  theme="gold-olive"
  content=submission_content
%}

{% include content-pod.html 
  theme="olive-gold"
  content="<h2>From seed to radicle</h2>
  <p>After that submission, it was crickets from our Government. Which is pretty standard for consultations that are usually nothing more than token gestures to civic engagement. But in the months that followed something deeper shifted. The idea would arise every Futurecrafting Friday in the fertile ground of the Noosphere. Whispers were shared with other Earthians - community leaders, elders, young activists, everyday people who felt the same pull toward a different way of doing things.</p>
  
  <p>And so here we are. Not with all the answers, but with an invitation to remember what we've forgotten and imagine what we might become. To sit in circles again. To listen to the whispers. To craft futures worthy of our children's great great grandchildren.</p>"
%}

<!-- Submission Section End -->
{% capture parallax_content %}
<h2>A living system</h2>
<p>
  Collective Futurecrafting is a provocation emergent from the intersection of <span class="bold-highlight">ancestral wisdom</span> and <span class="bold-highlight">social innovation</span>, creating new possibilities for how we might live, learn, and flourish together.
</p>
<a href="{{ '/craft/' | relative_url }}" class='button button--primary'>Learn more about the emergent craft →</a>
{% endcapture %}

{% include parallax-section.html
  background="/assets/images/seed-of-life-hero-rough.svg"
  theme="olive-gold"
  align="center"
  height="full"
  padding="medium"
  content=parallax_content
%}