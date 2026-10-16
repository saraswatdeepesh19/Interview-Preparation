---
layout: default
title: Java Interview Questions and Answers - Complete 700+ Prep Portal
description: 700+ Java interview questions and answers for Junior, Middle, and Senior developers. Master Spring Boot, Hibernate, SQL, Kafka, Concurrency, Docker, and System Architecture.
lang: en
image: /assets/social-preview/github-social-preview.png
alternates:
  - lang: en
    url: /
  - lang: x-default
    url: /
---

<section class="hero-section">
  <div class="hero-badge"><span class="hero-badge-dot" aria-hidden="true"></span>Free &amp; open source · Junior to Senior</div>
  <h1 class="hero-title">Ace your <span class="hero-highlight">Java backend</span> interview.</h1>
  <p class="hero-subtitle"><!-- gen:question-count-rounded -->800+<!-- /gen:question-count-rounded --> real interview questions across <!-- gen:topic-count -->38<!-- /gen:topic-count --> topics. Every answer is written in three layers, so you can go from the basics to senior-level depth on one page.</p>
  <div class="hero-search-box">
    <input type="text" class="hero-search-input" id="hero-search-input" placeholder="Search all questions…" readonly>
    <svg class="hero-search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
    <kbd class="hero-search-kbd">Ctrl K</kbd>
  </div>
  <dl class="stats-strip">
    <div class="stat-item"><dt>Questions</dt><dd><!-- gen:question-count -->896<!-- /gen:question-count --></dd></div>
    <div class="stat-item"><dt>Topics</dt><dd><!-- gen:topic-count -->38<!-- /gen:topic-count --></dd></div>
    <div class="stat-item"><dt>Depth levels</dt><dd>3</dd></div>
    <div class="stat-item"><dt>Price</dt><dd>Free</dd></div>
  </dl>
</section>

<section class="levels-strip" aria-label="How every answer is structured">
  <div class="level-card level-card-junior">
    <span class="level-card-tag">🟢 Junior</span>
    <p>Plain-language definition, an analogy, and a first code example.</p>
  </div>
  <div class="level-card level-card-middle">
    <span class="level-card-tag">🟡 Middle</span>
    <p>How it works inside, common mistakes, and the trade-offs.</p>
  </div>
  <div class="level-card level-card-senior">
    <span class="level-card-tag">🔴 Senior</span>
    <p>Production scenarios, JVM-level detail, and edge cases.</p>
  </div>
  <div class="level-card level-card-cheat">
    <span class="level-card-tag">🎯 Cheat sheet</span>
    <p>What to say, follow-up questions, and red flags to avoid.</p>
  </div>
</section>

<div class="section-heading-wrap">
  <h2 class="section-main-title">Pick a track, then a topic</h2>
  <p class="section-main-subtitle">Topics are grouped by the area of the stack they cover. Filter by track or type to narrow down.</p>
</div>

<!-- gen:topic-cards -->
<div class="topic-explorer" id="topic-explorer">
<div class="explorer-bar">
  <div class="track-chips" role="toolbar" aria-label="Filter topics by track">
    <button type="button" class="track-chip is-active" data-track="all" aria-pressed="true">All topics<span class="track-chip-count">38</span></button>
    <button type="button" class="track-chip" data-track="core" aria-pressed="false" style="--track: #f59e0b"><span class="track-dot" aria-hidden="true"></span>Core Java<span class="track-chip-count">8</span></button>
    <button type="button" class="track-chip" data-track="jvm" aria-pressed="false" style="--track: #f43f5e"><span class="track-dot" aria-hidden="true"></span>JVM &amp; Concurrency<span class="track-chip-count">5</span></button>
    <button type="button" class="track-chip" data-track="spring" aria-pressed="false" style="--track: #22c55e"><span class="track-dot" aria-hidden="true"></span>Spring &amp; Testing<span class="track-chip-count">5</span></button>
    <button type="button" class="track-chip" data-track="data" aria-pressed="false" style="--track: #0ea5e9"><span class="track-dot" aria-hidden="true"></span>Data &amp; Storage<span class="track-chip-count">5</span></button>
    <button type="button" class="track-chip" data-track="web" aria-pressed="false" style="--track: #8b5cf6"><span class="track-dot" aria-hidden="true"></span>APIs, Messaging &amp; Web<span class="track-chip-count">5</span></button>
    <button type="button" class="track-chip" data-track="delivery" aria-pressed="false" style="--track: #06b6d4"><span class="track-dot" aria-hidden="true"></span>Cloud &amp; Delivery<span class="track-chip-count">3</span></button>
    <button type="button" class="track-chip" data-track="architecture" aria-pressed="false" style="--track: #6366f1"><span class="track-dot" aria-hidden="true"></span>Architecture &amp; Design<span class="track-chip-count">5</span></button>
    <button type="button" class="track-chip" data-track="skills" aria-pressed="false" style="--track: #ec4899"><span class="track-dot" aria-hidden="true"></span>Interview Skills<span class="track-chip-count">2</span></button>
  </div>
  <label class="topic-filter">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
    <input type="search" id="topic-filter-input" placeholder="Filter 38 topics…" autocomplete="off" aria-label="Filter topics">
  </label>
</div>
<section class="track-group" data-track="core" style="--track: #f59e0b">
  <header class="track-header">
    <h3 class="track-title"><span class="track-dot" aria-hidden="true"></span>Core Java</h3>
    <p class="track-blurb">The language itself: collections, strings, streams, and modern Java features.</p>
    <span class="track-meta">8 topics · 213 questions</span>
  </header>
  <div class="topics-grid">
  <a class="topic-card" href="{{ '/questions/04-collections/' | relative_url }}" data-search="4 collections framework collections arraylist, linkedlist, treeset, concurrenthashmap, fail-fast vs fail-safe iterators.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">📦</span>
      <span class="topic-count">30 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">04</span>Collections Framework</h3>
    <p class="topic-desc">ArrayList, LinkedList, TreeSet, ConcurrentHashMap, fail-fast vs fail-safe iterators.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  <a class="topic-card" href="{{ '/questions/10-hashmap-equals-hashcode/' | relative_url }}" data-search="10 hashmap, equals &amp; hashcode hashmap equals hashcode internal bucket hashing, treeification (red-black trees), collision handling, and contracts.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">🔑</span>
      <span class="topic-count">29 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">10</span>HashMap, equals &amp; hashCode</h3>
    <p class="topic-desc">Internal bucket hashing, treeification (Red-Black trees), collision handling, and contracts.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  <a class="topic-card" href="{{ '/questions/12-string/' | relative_url }}" data-search="12 string internals string string constant pool, compact strings, stringbuilder vs stringbuffer, immutability benefits.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">🔤</span>
      <span class="topic-count">23 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">12</span>String Internals</h3>
    <p class="topic-desc">String Constant Pool, Compact Strings, StringBuilder vs StringBuffer, immutability benefits.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  <a class="topic-card" href="{{ '/questions/07-exceptions/' | relative_url }}" data-search="7 exceptions handling exceptions checked vs unchecked, try-with-resources, autocloseable, suppressed exceptions, best practices.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">⚡</span>
      <span class="topic-count">29 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">07</span>Exceptions Handling</h3>
    <p class="topic-desc">Checked vs Unchecked, try-with-resources, AutoCloseable, suppressed exceptions, best practices.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  <a class="topic-card" href="{{ '/questions/08-stream-api/' | relative_url }}" data-search="8 stream api stream api intermediate &amp; terminal operations, collectors, parallel streams, reduce, spliterator.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">🌊</span>
      <span class="topic-count">29 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">08</span>Stream API</h3>
    <p class="topic-desc">Intermediate &amp; terminal operations, collectors, parallel streams, reduce, Spliterator.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  <a class="topic-card" href="{{ '/questions/13-immutability/' | relative_url }}" data-search="13 immutability immutability defensive copying, unmodifiable wrappers, java records, thread safety through immutability.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">🔒</span>
      <span class="topic-count">29 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">13</span>Immutability</h3>
    <p class="topic-desc">Defensive copying, unmodifiable wrappers, Java Records, thread safety through immutability.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  <a class="topic-card" href="{{ '/questions/20-records-and-generics/' | relative_url }}" data-search="20 records &amp; generics records and generics java records, type erasure, wildcards ? extends / super, pecs rule, bridge methods.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">📋</span>
      <span class="topic-count">27 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">20</span>Records &amp; Generics</h3>
    <p class="topic-desc">Java Records, Type Erasure, Wildcards <code>? extends / super</code>, PECS rule, Bridge methods.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  <a class="topic-card" href="{{ '/questions/21-java-language-evolution/' | relative_url }}" data-search="21 java language evolution java language evolution lambdas, method references, optional, var, text blocks, switch expressions, modules, and sealed types.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">🚀</span>
      <span class="topic-count">17 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">21</span>Java Language Evolution</h3>
    <p class="topic-desc">Lambdas, method references, Optional, var, text blocks, switch expressions, modules, and sealed types.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  </div>
</section>
<section class="track-group" data-track="jvm" style="--track: #f43f5e">
  <header class="track-header">
    <h3 class="track-title"><span class="track-dot" aria-hidden="true"></span>JVM &amp; Concurrency</h3>
    <p class="track-blurb">Memory, garbage collection, threads, async composition, and performance.</p>
    <span class="track-meta">5 topics · 125 questions</span>
  </header>
  <div class="topics-grid">
  <a class="topic-card" href="{{ '/questions/03-memory-and-garbage-collection/' | relative_url }}" data-search="3 memory &amp; garbage collection memory and garbage collection jvm heap, stack, metaspace, g1, zgc, memory leaks, outofmemoryerror, and profiling.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">🧠</span>
      <span class="topic-count">28 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">03</span>Memory &amp; Garbage Collection</h3>
    <p class="topic-desc">JVM Heap, Stack, Metaspace, G1, ZGC, memory leaks, OutOfMemoryError, and profiling.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  <a class="topic-card" href="{{ '/questions/09-multithreading/' | relative_url }}" data-search="9 multithreading &amp; concurrency multithreading jmm, synchronized, volatile, cas, atomic classes, threadpools, virtual threads, and deadlocks.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">🧵</span>
      <span class="topic-count">27 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">09</span>Multithreading &amp; Concurrency</h3>
    <p class="topic-desc">JMM, synchronized, volatile, CAS, Atomic classes, ThreadPools, Virtual Threads, and Deadlocks.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  <a class="topic-card" href="{{ '/questions/19-completablefuture-and-asynchrony/' | relative_url }}" data-search="19 completablefuture &amp; async completablefuture and asynchrony asynchronous composition, exception handling, allof / anyof, thread pool management.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">⏱️</span>
      <span class="topic-count">28 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">19</span>CompletableFuture &amp; Async</h3>
    <p class="topic-desc">Asynchronous composition, exception handling, allOf / anyOf, thread pool management.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  <a class="topic-card" href="{{ '/questions/24-reactive-programming/' | relative_url }}" data-search="24 reactive programming reactive programming reactive streams, mono vs flux, operators, backpressure, schedulers, and webflux vs mvc.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">🔄</span>
      <span class="topic-count">21 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">24</span>Reactive Programming</h3>
    <p class="topic-desc">Reactive Streams, Mono vs Flux, operators, backpressure, schedulers, and WebFlux vs MVC.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  <a class="topic-card" href="{{ '/questions/31-performance-and-observability/' | relative_url }}" data-search="31 performance &amp; observability performance and observability latency percentiles, jfr, async-profiler, jmh, jit, thread and heap dumps, gc tuning, connection pools.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">📈</span>
      <span class="topic-count">21 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">31</span>Performance &amp; Observability</h3>
    <p class="topic-desc">Latency percentiles, JFR, async-profiler, JMH, JIT, thread and heap dumps, GC tuning, connection pools.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  </div>
</section>
<section class="track-group" data-track="spring" style="--track: #22c55e">
  <header class="track-header">
    <h3 class="track-title"><span class="track-dot" aria-hidden="true"></span>Spring &amp; Testing</h3>
    <p class="track-blurb">Spring Boot, persistence, security, cloud patterns, and how to test it all.</p>
    <span class="track-meta">5 topics · 127 questions</span>
  </header>
  <div class="topics-grid">
  <a class="topic-card" href="{{ '/questions/05-spring-spring-boot/' | relative_url }}" data-search="5 spring &amp; spring boot spring spring boot ioc, di, bean lifecycle, beanpostprocessor, auto-configuration, actuators, and proxies.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">🍃</span>
      <span class="topic-count">29 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">05</span>Spring &amp; Spring Boot</h3>
    <p class="topic-desc">IoC, DI, Bean Lifecycle, BeanPostProcessor, auto-configuration, actuators, and proxies.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  <a class="topic-card" href="{{ '/questions/16-hibernate-jpa/' | relative_url }}" data-search="16 hibernate &amp; jpa hibernate jpa entity lifecycle, n+1 query problem, fetch strategies, l1/l2 caches, and optimistic locking.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">💾</span>
      <span class="topic-count">30 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">16</span>Hibernate &amp; JPA</h3>
    <p class="topic-desc">Entity lifecycle, N+1 query problem, fetch strategies, L1/L2 caches, and optimistic locking.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  <a class="topic-card" href="{{ '/questions/23-spring-security-and-authentication/' | relative_url }}" data-search="23 spring security &amp; auth spring security and authentication filter chain, securitycontext, password encoding, jwt, oauth 2.0, oidc, method security, and csrf.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">🛡️</span>
      <span class="topic-count">23 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">23</span>Spring Security &amp; Auth</h3>
    <p class="topic-desc">Filter chain, SecurityContext, password encoding, JWT, OAuth 2.0, OIDC, method security, and CSRF.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  <a class="topic-card" href="{{ '/questions/25-spring-cloud-and-resilience/' | relative_url }}" data-search="25 spring cloud &amp; resilience spring cloud and resilience service discovery, gateway, config, feign, circuit breakers, retries, bulkheads, and rate limiting.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">☁️</span>
      <span class="topic-count">22 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">25</span>Spring Cloud &amp; Resilience</h3>
    <p class="topic-desc">Service discovery, Gateway, Config, Feign, circuit breakers, retries, bulkheads, and rate limiting.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  <a class="topic-card" href="{{ '/questions/22-testing/' | relative_url }}" data-search="22 testing testing test pyramid, junit 5, assertj, mockito, test doubles, tdd, and spring boot test slices.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">🧪</span>
      <span class="topic-count">23 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">22</span>Testing</h3>
    <p class="topic-desc">Test pyramid, JUnit 5, AssertJ, Mockito, test doubles, TDD, and Spring Boot test slices.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  </div>
</section>
<section class="track-group" data-track="data" style="--track: #0ea5e9">
  <header class="track-header">
    <h3 class="track-title"><span class="track-dot" aria-hidden="true"></span>Data &amp; Storage</h3>
    <p class="track-blurb">SQL, transactions, caching, NoSQL stores, and safe schema changes.</p>
    <span class="track-meta">5 topics · 100 questions</span>
  </header>
  <div class="topics-grid">
  <a class="topic-card" href="{{ '/questions/01-databases-sql-postgresql/' | relative_url }}" data-search="1 databases sql postgresql databases sql postgresql indexes, b-trees, mvcc, vacuum, joins, window functions, and query optimization.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">🗄️</span>
      <span class="topic-count">21 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">01</span>Databases SQL PostgreSQL</h3>
    <p class="topic-desc">Indexes, B-Trees, MVCC, VACUUM, JOINs, window functions, and query optimization.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  <a class="topic-card" href="{{ '/questions/11-transactions/' | relative_url }}" data-search="11 transactions transactions acid properties, isolation levels, propagation types in spring @transactional, and 2pc.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">💳</span>
      <span class="topic-count">22 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">11</span>Transactions</h3>
    <p class="topic-desc">ACID properties, isolation levels, propagation types in Spring <code>@Transactional</code>, and 2PC.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  <a class="topic-card" href="{{ '/questions/26-caching-and-redis/' | relative_url }}" data-search="26 caching &amp; redis caching and redis caching strategies, eviction policies, spring cache, caffeine, redis data structures, persistence, and cluster.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">⚡</span>
      <span class="topic-count">17 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">26</span>Caching &amp; Redis</h3>
    <p class="topic-desc">Caching strategies, eviction policies, Spring Cache, Caffeine, Redis data structures, persistence, and Cluster.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  <a class="topic-card" href="{{ '/questions/27-nosql-and-data-stores/' | relative_url }}" data-search="27 nosql &amp; data stores nosql and data stores cap and pacelc, consistency models, mongodb, elasticsearch, and cassandra internals.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">🍃</span>
      <span class="topic-count">22 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">27</span>NoSQL &amp; Data Stores</h3>
    <p class="topic-desc">CAP and PACELC, consistency models, MongoDB, Elasticsearch, and Cassandra internals.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  <a class="topic-card" href="{{ '/questions/36-database-migrations-and-advanced-sql/' | relative_url }}" data-search="36 db migrations &amp; advanced sql database migrations and advanced sql flyway, liquibase, zero-downtime migrations, large-table changes, rollbacks, window functions, and ctes.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">🛢️</span>
      <span class="topic-count">18 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">36</span>DB Migrations &amp; Advanced SQL</h3>
    <p class="topic-desc">Flyway, Liquibase, zero-downtime migrations, large-table changes, rollbacks, window functions, and CTEs.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  </div>
</section>
<section class="track-group" data-track="web" style="--track: #8b5cf6">
  <header class="track-header">
    <h3 class="track-title"><span class="track-dot" aria-hidden="true"></span>APIs, Messaging &amp; Web</h3>
    <p class="track-blurb">HTTP and API design, event streaming, message brokers, and the frontend.</p>
    <span class="track-meta">5 topics · 102 questions</span>
  </header>
  <div class="topics-grid">
  <a class="topic-card" href="{{ '/questions/06-rest-http/' | relative_url }}" data-search="6 rest &amp; http rest http http methods, idempotency, status codes, rest maturity model, and api design principles.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">🌐</span>
      <span class="topic-count">17 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">06</span>REST &amp; HTTP</h3>
    <p class="topic-desc">HTTP methods, idempotency, status codes, REST maturity model, and API design principles.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  <a class="topic-card" href="{{ '/questions/34-api-design-and-integration/' | relative_url }}" data-search="34 api design &amp; integration api design and integration api-first, openapi and springdoc, resource modeling, versioning, pagination, filtering and sorting.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">🔌</span>
      <span class="topic-count">15 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">34</span>API Design &amp; Integration</h3>
    <p class="topic-desc">API-first, OpenAPI and springdoc, resource modeling, versioning, pagination, filtering and sorting.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  <a class="topic-card" href="{{ '/questions/15-kafka/' | relative_url }}" data-search="15 apache kafka kafka topics, partitions, consumer groups, delivery semantics, offsets, idempotence, and rebalances.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">📨</span>
      <span class="topic-count">30 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">15</span>Apache Kafka</h3>
    <p class="topic-desc">Topics, partitions, consumer groups, delivery semantics, offsets, idempotence, and rebalances.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  <a class="topic-card" href="{{ '/questions/28-messaging-beyond-kafka/' | relative_url }}" data-search="28 messaging beyond kafka messaging beyond kafka jms, rabbitmq and amqp, acknowledgements, dlqs, delivery guarantees, idempotent consumers, ordering.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">📬</span>
      <span class="topic-count">20 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">28</span>Messaging Beyond Kafka</h3>
    <p class="topic-desc">JMS, RabbitMQ and AMQP, acknowledgements, DLQs, delivery guarantees, idempotent consumers, ordering.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  <a class="topic-card" href="{{ '/questions/35-frontend-for-full-stack-developers/' | relative_url }}" data-search="35 frontend for full stack frontend for full stack developers semantic html, css box model, flexbox and grid, closures, prototypes, es6+, event loop, async/await, dom.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">🖥️</span>
      <span class="topic-count">20 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">35</span>Frontend for Full Stack</h3>
    <p class="topic-desc">Semantic HTML, CSS box model, Flexbox and Grid, closures, prototypes, ES6+, event loop, async/await, DOM.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  </div>
</section>
<section class="track-group" data-track="delivery" style="--track: #06b6d4">
  <header class="track-header">
    <h3 class="track-title"><span class="track-dot" aria-hidden="true"></span>Cloud &amp; Delivery</h3>
    <p class="track-blurb">Containers, Kubernetes, build pipelines, and AWS.</p>
    <span class="track-meta">3 topics · 61 questions</span>
  </header>
  <div class="topics-grid">
  <a class="topic-card" href="{{ '/questions/14-docker-kubernetes/' | relative_url }}" data-search="14 docker &amp; kubernetes docker kubernetes containerization, multi-stage builds, pods, services, deployments, configmaps, and probes.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">🐳</span>
      <span class="topic-count">24 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">14</span>Docker &amp; Kubernetes</h3>
    <p class="topic-desc">Containerization, multi-stage builds, Pods, Services, Deployments, ConfigMaps, and Probes.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  <a class="topic-card" href="{{ '/questions/32-build-ci-cd-and-devops/' | relative_url }}" data-search="32 build, ci/cd &amp; devops build ci cd and devops maven vs gradle, lifecycle, dependency management, multi-module builds, git workflows, and code review.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">🔧</span>
      <span class="topic-count">18 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">32</span>Build, CI/CD &amp; DevOps</h3>
    <p class="topic-desc">Maven vs Gradle, lifecycle, dependency management, multi-module builds, Git workflows, and code review.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  <a class="topic-card" href="{{ '/questions/33-cloud-and-aws/' | relative_url }}" data-search="33 cloud &amp; aws cloud and aws iaas/paas/saas, shared responsibility, iam, ec2 and auto scaling, alb, vpc, s3, rds and aurora.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">🌩️</span>
      <span class="topic-count">19 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">33</span>Cloud &amp; AWS</h3>
    <p class="topic-desc">IaaS/PaaS/SaaS, shared responsibility, IAM, EC2 and Auto Scaling, ALB, VPC, S3, RDS and Aurora.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  </div>
</section>
<section class="track-group" data-track="architecture" style="--track: #6366f1">
  <header class="track-header">
    <h3 class="track-title"><span class="track-dot" aria-hidden="true"></span>Architecture &amp; Design</h3>
    <p class="track-blurb">Patterns, SOLID, microservices, system design, and technical leadership.</p>
    <span class="track-meta">5 topics · 129 questions</span>
  </header>
  <div class="topics-grid">
  <a class="topic-card" href="{{ '/questions/02-design-patterns/' | relative_url }}" data-search="2 design patterns design patterns gof patterns in java: singleton, factory, strategy, observer, decorator, and proxies.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">🧩</span>
      <span class="topic-count">38 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">02</span>Design Patterns</h3>
    <p class="topic-desc">GoF patterns in Java: Singleton, Factory, Strategy, Observer, Decorator, and Proxies.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  <a class="topic-card" href="{{ '/questions/18-oop-and-solid/' | relative_url }}" data-search="18 oop &amp; solid principles oop and solid encapsulation, polymorphism, inheritance vs composition, single responsibility, lsp, dip.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">📐</span>
      <span class="topic-count">22 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">18</span>OOP &amp; SOLID Principles</h3>
    <p class="topic-desc">Encapsulation, Polymorphism, Inheritance vs Composition, Single Responsibility, LSP, DIP.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  <a class="topic-card" href="{{ '/questions/17-microservices/' | relative_url }}" data-search="17 microservices architecture microservices service discovery, api gateway, circuit breaker, saga pattern, distributed tracing, cqrs.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">🏗️</span>
      <span class="topic-count">26 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">17</span>Microservices Architecture</h3>
    <p class="topic-desc">Service Discovery, API Gateway, Circuit Breaker, Saga Pattern, Distributed Tracing, CQRS.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  <a class="topic-card" href="{{ '/questions/30-system-design/' | relative_url }}" data-search="30 system design system design requirements, estimation, scaling, load balancing, sharding, consistent hashing, caching, cqrs, event sourcing.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">🏛️</span>
      <span class="topic-count">20 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">30</span>System Design</h3>
    <p class="topic-desc">Requirements, estimation, scaling, load balancing, sharding, consistent hashing, caching, CQRS, event sourcing.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  <a class="topic-card" href="{{ '/questions/37-architecture-and-technical-leadership/' | relative_url }}" data-search="37 architecture &amp; tech leadership architecture and technical leadership clean code, refactoring, ddd, hexagonal and clean architecture, modular monoliths, strangler fig, adrs and c4.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">🧭</span>
      <span class="topic-count">23 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">37</span>Architecture &amp; Tech Leadership</h3>
    <p class="topic-desc">Clean code, refactoring, DDD, hexagonal and clean architecture, modular monoliths, strangler fig, ADRs and C4.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  </div>
</section>
<section class="track-group" data-track="skills" style="--track: #ec4899">
  <header class="track-header">
    <h3 class="track-title"><span class="track-dot" aria-hidden="true"></span>Interview Skills</h3>
    <p class="track-blurb">Coding rounds and the behavioral conversation.</p>
    <span class="track-meta">2 topics · 39 questions</span>
  </header>
  <div class="topics-grid">
  <a class="topic-card" href="{{ '/questions/29-data-structures-and-algorithms/' | relative_url }}" data-search="29 data structures &amp; algorithms data structures and algorithms big-o, two pointers, sliding window, hashing, linked lists, stacks, backtracking, binary search, sorting.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">🧮</span>
      <span class="topic-count">21 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">29</span>Data Structures &amp; Algorithms</h3>
    <p class="topic-desc">Big-O, two pointers, sliding window, hashing, linked lists, stacks, backtracking, binary search, sorting.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  <a class="topic-card" href="{{ '/questions/38-behavioral-and-agile/' | relative_url }}" data-search="38 behavioral &amp; agile behavioral and agile self-introduction, star method, achievements, conflict handling, code review feedback, scrum and kanban.">
    <div class="topic-card-top">
      <span class="topic-icon" aria-hidden="true">🤝</span>
      <span class="topic-count">18 questions</span>
    </div>
    <h3 class="topic-title"><span class="topic-num">38</span>Behavioral &amp; Agile</h3>
    <p class="topic-desc">Self-introduction, STAR method, achievements, conflict handling, code review feedback, Scrum and Kanban.</p>
    <span class="topic-footer">Start learning <span class="topic-arrow" aria-hidden="true">→</span></span>
  </a>
  </div>
</section>
<p class="topic-empty" id="topic-empty" hidden>No topics match your filter. Try the search above to look inside every answer.</p>
</div>
<!-- /gen:topic-cards -->
