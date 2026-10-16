---
layout: default
title: Reactive Programming Interview Questions and Answers
description: Reactive programming interview questions and answers on Reactive Streams, Project Reactor, Mono and Flux, operators, backpressure, schedulers, and WebFlux.
lang: en
image: /assets/social-preview/github-social-preview.png
---

<section class="hero">
  <span class="eyebrow">Topic Page</span>
  <h1>Reactive programming interview questions and answers.</h1>
  <p class="lede">Reactive questions come up whenever a team uses Spring WebFlux or needs to handle many concurrent I/O-bound requests with few threads. This page covers the Reactor concepts that interviewers use to tell real experience apart from buzzwords.</p>
  <div class="hero-actions">
    <a class="button button-primary" href="{{ '/questions/24-reactive-programming/' | relative_url }}">Browse reactive answers</a>
    <a class="button" href="{{ '/' | relative_url }}">Back to home</a>
  </div>
</section>

<section class="section">
  <h2>What this reactive programming section includes</h2>
  <p>The section begins with the motivation: the Reactive Manifesto, blocking versus non-blocking I/O, and the Reactive Streams contract that <code>java.util.concurrent.Flow</code> standardizes. It then moves to Project Reactor's <code>Mono</code> and <code>Flux</code>, cold versus hot publishers, and the core operators.</p>
  <p>The harder questions cover error handling with retries, backpressure strategies, the difference between <code>publishOn</code> and <code>subscribeOn</code>, and how to decide honestly between WebFlux and Spring MVC.</p>
</section>

<section class="section">
  <h2>Representative reactive programming interview questions</h2>
  <ol class="topic-list">
    <li>What problem does reactive programming solve?</li>
    <li>What is the difference between blocking and non-blocking I/O?</li>
    <li>What does the Reactive Streams specification define?</li>
    <li>What is the difference between Mono and Flux?</li>
    <li>What is the difference between cold and hot publishers?</li>
    <li>When should you use flatMap versus concatMap?</li>
    <li>How do retry and retryWhen differ?</li>
    <li>What is backpressure?</li>
    <li>What is the difference between publishOn and subscribeOn?</li>
    <li>When is WebFlux a better choice than Spring MVC?</li>
  </ol>
</section>

<section class="section">
  <h2>Related pages</h2>
  <div class="card-grid">
    <article class="card">
      <h3 class="card-title"><a href="{{ '/topics/completablefuture-async-interview-questions/' | relative_url }}">CompletableFuture and async interview questions</a></h3>
      <p>The imperative way to compose asynchronous work, and a useful comparison point.</p>
    </article>
    <article class="card">
      <h3 class="card-title"><a href="{{ '/topics/java-concurrency-interview-questions/' | relative_url }}">Java concurrency interview questions</a></h3>
      <p>Schedulers and event loops are thread pools under the hood.</p>
    </article>
    <article class="card">
      <h3 class="card-title"><a href="{{ '/topics/stream-api-interview-questions/' | relative_url }}">Stream API interview questions</a></h3>
      <p>Reactor operators look like stream operations but follow a push-based model.</p>
    </article>
  </div>
</section>
