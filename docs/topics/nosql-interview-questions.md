---
layout: default
title: NoSQL Interview Questions and Answers
description: NoSQL interview questions and answers on SQL vs NoSQL, CAP and PACELC, consistency models, MongoDB, Elasticsearch, and Cassandra internals.
lang: en
image: /assets/social-preview/github-social-preview.png
---

<section class="hero">
  <span class="eyebrow">Topic Page</span>
  <h1>NoSQL interview questions and answers.</h1>
  <p class="lede">NoSQL questions test whether you can choose a data store for a workload instead of by habit. This page covers the theory interviewers expect, plus the MongoDB, Elasticsearch, and Cassandra details that come up in practice.</p>
  <div class="hero-actions">
    <a class="button button-primary" href="{{ '/questions/27-nosql-and-data-stores/' | relative_url }}">Browse NoSQL answers</a>
    <a class="button" href="{{ '/' | relative_url }}">Back to home</a>
  </div>
</section>

<section class="section">
  <h2>What this NoSQL section includes</h2>
  <p>The section opens with the trade-offs that apply to every distributed store: SQL versus NoSQL, the main NoSQL families, CAP and PACELC, BASE versus ACID, and the spectrum from eventual to strong consistency.</p>
  <p>It then goes store by store: MongoDB modeling, indexes, aggregation, replica sets, and sharding; Elasticsearch mappings and queries and when search belongs outside the database; and Cassandra's data model, LSM-tree write path, and tunable consistency.</p>
</section>

<section class="section">
  <h2>Representative NoSQL interview questions</h2>
  <ol class="topic-list">
    <li>How do you choose between SQL and NoSQL?</li>
    <li>What does the CAP theorem actually say, and what does PACELC add?</li>
    <li>What is the difference between BASE and ACID?</li>
    <li>What is eventual consistency?</li>
    <li>When should you embed versus reference documents in MongoDB?</li>
    <li>How does the MongoDB aggregation pipeline work?</li>
    <li>How does MongoDB sharding work?</li>
    <li>When should search live in Elasticsearch rather than the database?</li>
    <li>How does the Cassandra write path work?</li>
    <li>What is tunable consistency in Cassandra?</li>
  </ol>
</section>

<section class="section">
  <h2>Related pages</h2>
  <div class="card-grid">
    <article class="card">
      <h3 class="card-title"><a href="{{ '/topics/sql-postgresql-interview-questions/' | relative_url }}">SQL and PostgreSQL interview questions</a></h3>
      <p>The relational baseline every NoSQL choice is compared against.</p>
    </article>
    <article class="card">
      <h3 class="card-title"><a href="{{ '/topics/system-design-interview-questions/' | relative_url }}">System design interview questions</a></h3>
      <p>Storage choice is one of the first decisions in any system design.</p>
    </article>
    <article class="card">
      <h3 class="card-title"><a href="{{ '/topics/caching-redis-interview-questions/' | relative_url }}">Caching and Redis interview questions</a></h3>
      <p>Redis is the most common key-value store in Java backends.</p>
    </article>
  </div>
</section>
