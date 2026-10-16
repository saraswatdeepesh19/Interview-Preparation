---
layout: default
title: Java Performance and Observability Interview Questions and Answers
description: Java performance interview questions and answers on latency percentiles, profiling with JFR and async-profiler, JMH, JIT, thread and heap dumps, GC tuning, connection pools, and thread pools.
lang: en
image: /assets/social-preview/github-social-preview.png
---

<section class="hero">
  <span class="eyebrow">Topic Page</span>
  <h1>Java performance and observability interview questions and answers.</h1>
  <p class="lede">Performance questions test whether you can find a real bottleneck under pressure instead of guessing. This page covers measurement, profiling, and JVM diagnostics the way senior interviews approach them.</p>
  <div class="hero-actions">
    <a class="button button-primary" href="{{ '/questions/31-performance-and-observability/' | relative_url }}">Browse performance answers</a>
    <a class="button" href="{{ '/' | relative_url }}">Back to home</a>
  </div>
</section>

<section class="section">
  <h2>What this performance section includes</h2>
  <p>The section begins with vocabulary and measurement: performance versus scalability, latency versus throughput, why p95 and p99 matter more than averages, and a methodical troubleshooting approach.</p>
  <p>It then goes into tooling and the JVM: profiling with JFR and async-profiler, JMH microbenchmarks, JIT and tiered compilation, thread dumps for deadlocks and high CPU, heap dumps and MAT for leaks, GC log analysis, and sizing connection and thread pools. It also covers N+1 queries and slow SQL.</p>
</section>

<section class="section">
  <h2>Representative performance interview questions</h2>
  <ol class="topic-list">
    <li>What is the difference between latency and throughput?</li>
    <li>Why are percentiles better than averages?</li>
    <li>How do you troubleshoot a slow Java service step by step?</li>
    <li>How do you profile with JFR or async-profiler?</li>
    <li>Why are naive microbenchmarks misleading, and how does JMH help?</li>
    <li>How does tiered JIT compilation work?</li>
    <li>How do you diagnose a deadlock or a CPU spike with thread dumps?</li>
    <li>How do you find a memory leak with a heap dump?</li>
    <li>How do you size a HikariCP connection pool?</li>
    <li>How do you size a thread pool?</li>
  </ol>
</section>

<section class="section">
  <h2>Related pages</h2>
  <div class="card-grid">
    <article class="card">
      <h3 class="card-title"><a href="{{ '/topics/memory-garbage-collection-interview-questions/' | relative_url }}">Memory and garbage collection interview questions</a></h3>
      <p>GC tuning and leak hunting depend on understanding the JVM memory model.</p>
    </article>
    <article class="card">
      <h3 class="card-title"><a href="{{ '/topics/java-concurrency-interview-questions/' | relative_url }}">Java concurrency interview questions</a></h3>
      <p>Thread dumps and pool sizing build on concurrency fundamentals.</p>
    </article>
    <article class="card">
      <h3 class="card-title"><a href="{{ '/topics/hibernate-jpa-interview-questions/' | relative_url }}">Hibernate and JPA interview questions</a></h3>
      <p>The N+1 problem is the most common database performance issue in Java apps.</p>
    </article>
  </div>
</section>
