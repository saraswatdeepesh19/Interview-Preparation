---
layout: default
title: System Design Interview Questions and Answers
description: System design interview questions and answers on requirements, capacity estimation, scaling, load balancing, sharding, consistent hashing, caching, queues, CQRS, and event sourcing.
lang: en
image: /assets/social-preview/github-social-preview.png
---

<section class="hero">
  <span class="eyebrow">Topic Page</span>
  <h1>System design interview questions and answers.</h1>
  <p class="lede">System design rounds decide most senior-level offers. This page covers the framework for running the conversation and the building blocks you are expected to combine and justify.</p>
  <div class="hero-actions">
    <a class="button button-primary" href="{{ '/questions/30-system-design/' | relative_url }}">Browse system design answers</a>
    <a class="button" href="{{ '/' | relative_url }}">Back to home</a>
  </div>
</section>

<section class="section">
  <h2>What this system design section includes</h2>
  <p>The section starts with how to run the interview: clarifying functional and non-functional requirements, and back-of-the-envelope estimation for capacity planning. It then covers scaling fundamentals such as stateless services, vertical versus horizontal scaling, and L4 versus L7 load balancing.</p>
  <p>The deeper questions deal with data: replication, sharding, partitioning, consistent hashing, and CAP trade-offs. The section ends with caching layers and CDNs, message queues for decoupling, CQRS, and event sourcing.</p>
</section>

<section class="section">
  <h2>Representative system design interview questions</h2>
  <ol class="topic-list">
    <li>How should you structure a system design interview?</li>
    <li>What is the difference between functional and non-functional requirements?</li>
    <li>How do you estimate storage and throughput?</li>
    <li>Why should services be stateless?</li>
    <li>What is the difference between L4 and L7 load balancing?</li>
    <li>How do replication and sharding differ?</li>
    <li>What is consistent hashing and why is it useful?</li>
    <li>Where do caches and CDNs belong in a design?</li>
    <li>When does CQRS pay off?</li>
    <li>What are the trade-offs of event sourcing?</li>
  </ol>
</section>

<section class="section">
  <h2>Related pages</h2>
  <div class="card-grid">
    <article class="card">
      <h3 class="card-title"><a href="{{ '/topics/microservices-interview-questions/' | relative_url }}">Microservices interview questions</a></h3>
      <p>Service boundaries and communication patterns feed directly into design rounds.</p>
    </article>
    <article class="card">
      <h3 class="card-title"><a href="{{ '/topics/caching-redis-interview-questions/' | relative_url }}">Caching and Redis interview questions</a></h3>
      <p>Caching is the most common lever for meeting latency requirements.</p>
    </article>
    <article class="card">
      <h3 class="card-title"><a href="{{ '/topics/nosql-interview-questions/' | relative_url }}">NoSQL interview questions</a></h3>
      <p>Choosing the right store for each access pattern.</p>
    </article>
    <article class="card">
      <h3 class="card-title"><a href="{{ '/topics/software-architecture-interview-questions/' | relative_url }}">Architecture and technical leadership interview questions</a></h3>
      <p>How to structure the code inside each box on the diagram.</p>
    </article>
  </div>
</section>
