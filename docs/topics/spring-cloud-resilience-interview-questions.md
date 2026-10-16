---
layout: default
title: Spring Cloud and Resilience Interview Questions and Answers
description: Spring Cloud and resilience interview questions and answers on service discovery, Gateway, Config, Feign, circuit breakers, retries, timeouts, bulkheads, and rate limiting.
lang: en
image: /assets/social-preview/github-social-preview.png
---

<section class="hero">
  <span class="eyebrow">Topic Page</span>
  <h1>Spring Cloud and resilience interview questions and answers.</h1>
  <p class="lede">Once services call each other over the network, failure becomes normal. These questions test whether you know the Spring Cloud building blocks and, more importantly, how to stop one slow dependency from taking down the whole system.</p>
  <div class="hero-actions">
    <a class="button button-primary" href="{{ '/questions/25-spring-cloud-and-resilience/' | relative_url }}">Browse Spring Cloud answers</a>
    <a class="button" href="{{ '/' | relative_url }}">Back to home</a>
  </div>
</section>

<section class="section">
  <h2>What this Spring Cloud section includes</h2>
  <p>The first part covers infrastructure: what Spring Cloud provides, service discovery, client-side versus server-side load balancing, Spring Cloud Gateway, centralized configuration, and declarative HTTP clients.</p>
  <p>The second part is about resilience with Resilience4j: circuit breakers, retries with backoff and jitter, timeouts, bulkheads, rate limiters, fallbacks, and how retry storms turn a small incident into a cascading failure.</p>
</section>

<section class="section">
  <h2>Representative Spring Cloud and resilience interview questions</h2>
  <ol class="topic-list">
    <li>What does Spring Cloud provide on top of Spring Boot?</li>
    <li>How does service discovery work?</li>
    <li>What is the difference between client-side and server-side load balancing?</li>
    <li>What does Spring Cloud Gateway do?</li>
    <li>How does the circuit breaker pattern work?</li>
    <li>Why should retries use exponential backoff with jitter?</li>
    <li>How do you choose timeouts for distributed calls?</li>
    <li>What is the bulkhead pattern?</li>
    <li>What makes a good fallback?</li>
    <li>What causes cascading failures and retry storms?</li>
  </ol>
</section>

<section class="section">
  <h2>Related pages</h2>
  <div class="card-grid">
    <article class="card">
      <h3 class="card-title"><a href="{{ '/topics/microservices-interview-questions/' | relative_url }}">Microservices interview questions</a></h3>
      <p>The architectural context that makes these patterns necessary.</p>
    </article>
    <article class="card">
      <h3 class="card-title"><a href="{{ '/topics/system-design-interview-questions/' | relative_url }}">System design interview questions</a></h3>
      <p>Resilience patterns are a standard part of any distributed design discussion.</p>
    </article>
    <article class="card">
      <h3 class="card-title"><a href="{{ '/topics/java-performance-observability-interview-questions/' | relative_url }}">Performance and observability interview questions</a></h3>
      <p>You cannot tune timeouts and breakers without good latency metrics.</p>
    </article>
  </div>
</section>
