---
layout: default
title: Caching and Redis Interview Questions and Answers
description: Caching and Redis interview questions and answers on caching strategies, eviction policies, Spring Cache, Caffeine, Redis data structures, persistence, replication, and Cluster.
lang: en
image: /assets/social-preview/github-social-preview.png
---

<section class="hero">
  <span class="eyebrow">Topic Page</span>
  <h1>Caching and Redis interview questions and answers.</h1>
  <p class="lede">Caching is the first tool engineers reach for when a system is slow, and the source of many subtle consistency bugs. This page covers how interviewers test caching judgment and Redis internals.</p>
  <div class="hero-actions">
    <a class="button button-primary" href="{{ '/questions/26-caching-and-redis/' | relative_url }}">Browse caching answers</a>
    <a class="button" href="{{ '/' | relative_url }}">Back to home</a>
  </div>
</section>

<section class="section">
  <h2>What this caching section includes</h2>
  <p>The section starts with the decision itself: when caching helps, when it hurts, and how to measure hit ratio. It then compares cache-aside, read-through, write-through, write-behind, and refresh-ahead, along with LRU, LFU, and TTL eviction.</p>
  <p>The rest covers implementation: Spring's cache abstraction, local caches such as Caffeine versus distributed caches, and Redis data structures, persistence, its single-threaded model, replication, Sentinel, and Cluster.</p>
</section>

<section class="section">
  <h2>Representative caching and Redis interview questions</h2>
  <ol class="topic-list">
    <li>When should you not add a cache?</li>
    <li>How do you measure and size a cache?</li>
    <li>What is the difference between cache-aside and write-through?</li>
    <li>How do LRU and LFU eviction differ?</li>
    <li>How does <code>@Cacheable</code> work in Spring?</li>
    <li>When should you use a local cache instead of Redis?</li>
    <li>Which Redis data structures exist and when do you use each?</li>
    <li>What is the difference between RDB and AOF persistence?</li>
    <li>Why is Redis fast despite being single-threaded?</li>
    <li>How do Redis Sentinel and Redis Cluster differ?</li>
  </ol>
</section>

<section class="section">
  <h2>Related pages</h2>
  <div class="card-grid">
    <article class="card">
      <h3 class="card-title"><a href="{{ '/topics/system-design-interview-questions/' | relative_url }}">System design interview questions</a></h3>
      <p>Caching layers and CDNs appear in almost every system design answer.</p>
    </article>
    <article class="card">
      <h3 class="card-title"><a href="{{ '/topics/nosql-interview-questions/' | relative_url }}">NoSQL interview questions</a></h3>
      <p>Redis is also a NoSQL store, and shares the same consistency trade-offs.</p>
    </article>
    <article class="card">
      <h3 class="card-title"><a href="{{ '/topics/hibernate-jpa-interview-questions/' | relative_url }}">Hibernate and JPA interview questions</a></h3>
      <p>Hibernate's first- and second-level caches follow the same principles.</p>
    </article>
  </div>
</section>
