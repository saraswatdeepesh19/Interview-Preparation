---
layout: default
title: Database Migrations and Advanced SQL Interview Questions
description: Database migration and advanced SQL interview questions and answers on Flyway, Liquibase, zero-downtime migrations, large-table changes, rollbacks, window functions, and CTEs.
lang: en
image: /assets/social-preview/github-social-preview.png
---

<section class="hero">
  <span class="eyebrow">Topic Page</span>
  <h1>Database migrations and advanced SQL interview questions.</h1>
  <p class="lede">Changing a schema that serves live traffic is one of the riskiest routine tasks in backend work. These questions test whether you can evolve a production database safely and write the SQL that reporting features need.</p>
  <div class="hero-actions">
    <a class="button button-primary" href="{{ '/questions/36-database-migrations-and-advanced-sql/' | relative_url }}">Browse migration answers</a>
    <a class="button" href="{{ '/' | relative_url }}">Back to home</a>
  </div>
</section>

<section class="section">
  <h2>What this migrations section includes</h2>
  <p>The section explains why schema migrations belong in version control, how Flyway's versioned and repeatable migrations work, and how Liquibase compares.</p>
  <p>It then covers production safety: zero-downtime changes with expand-and-contract, migrating large tables without long locks, and realistic rollback strategies. It finishes with window functions and recursive CTEs.</p>
</section>

<section class="section">
  <h2>Representative migration and SQL interview questions</h2>
  <ol class="topic-list">
    <li>Why do you need schema migration tooling?</li>
    <li>How do Flyway versioned and repeatable migrations differ?</li>
    <li>How does Liquibase compare with Flyway?</li>
    <li>How do you rename a column without downtime?</li>
    <li>How do you add an index or backfill data on a very large table?</li>
    <li>Can database migrations really be rolled back?</li>
    <li>How do window functions differ from GROUP BY?</li>
    <li>What is a recursive CTE used for?</li>
  </ol>
</section>

<section class="section">
  <h2>Related pages</h2>
  <div class="card-grid">
    <article class="card">
      <h3 class="card-title"><a href="{{ '/topics/sql-postgresql-interview-questions/' | relative_url }}">SQL and PostgreSQL interview questions</a></h3>
      <p>Indexes, locking, and MVCC determine how risky each migration is.</p>
    </article>
    <article class="card">
      <h3 class="card-title"><a href="{{ '/topics/transactions-interview-questions/' | relative_url }}">Transactions interview questions</a></h3>
      <p>DDL inside transactions behaves differently across databases.</p>
    </article>
    <article class="card">
      <h3 class="card-title"><a href="{{ '/topics/hibernate-jpa-interview-questions/' | relative_url }}">Hibernate and JPA interview questions</a></h3>
      <p>Entity mappings must stay in sync with the migrated schema.</p>
    </article>
  </div>
</section>
