---
layout: default
title: Java Testing Interview Questions and Answers
description: Java testing interview questions and answers on the test pyramid, JUnit 5, AssertJ, Mockito, test doubles, TDD, and Spring Boot test slices.
lang: en
image: /assets/social-preview/github-social-preview.png
---

<section class="hero">
  <span class="eyebrow">Topic Page</span>
  <h1>Java testing interview questions and answers.</h1>
  <p class="lede">Testing questions reveal how a candidate thinks about correctness and maintainability. This page covers the JUnit, Mockito, and Spring Boot testing concepts interviewers expect a working backend engineer to know.</p>
  <div class="hero-actions">
    <a class="button button-primary" href="{{ '/questions/22-testing/' | relative_url }}">Browse testing answers</a>
    <a class="button" href="{{ '/' | relative_url }}">Back to home</a>
  </div>
</section>

<section class="section">
  <h2>What this testing section includes</h2>
  <p>The section starts with strategy: the test pyramid, what separates unit, integration, and end-to-end tests, and what makes a test worth keeping. It then covers the everyday tooling: JUnit 5 lifecycle, parameterized and nested tests, extensions, and AssertJ assertions.</p>
  <p>The second half focuses on isolation and Spring. It explains mocks, stubs, and fakes, Mockito from basics to argument captors and static mocking, test data builders, TDD, and how to choose between Spring Boot test slices and a full <code>@SpringBootTest</code>.</p>
</section>

<section class="section">
  <h2>Representative testing interview questions</h2>
  <ol class="topic-list">
    <li>What is the test pyramid?</li>
    <li>What makes a good unit test?</li>
    <li>How does the JUnit 5 lifecycle work?</li>
    <li>What is the difference between a mock, a stub, and a fake?</li>
    <li>When should you use a Mockito spy?</li>
    <li>How do parameterized tests and extensions work in JUnit 5?</li>
    <li>What are test data builders and object mothers?</li>
    <li>What is the red-green-refactor cycle in TDD?</li>
    <li>When should you use <code>@WebMvcTest</code> or <code>@DataJpaTest</code>?</li>
    <li>What is the difference between <code>@MockBean</code> and <code>@MockitoBean</code>?</li>
  </ol>
</section>

<section class="section">
  <h2>Related pages</h2>
  <div class="card-grid">
    <article class="card">
      <h3 class="card-title"><a href="{{ '/topics/spring-boot-interview-questions/' | relative_url }}">Spring Boot interview questions</a></h3>
      <p>Test slices only make sense once you understand how Spring Boot builds its application context.</p>
    </article>
    <article class="card">
      <h3 class="card-title"><a href="{{ '/topics/oop-solid-interview-questions/' | relative_url }}">OOP and SOLID interview questions</a></h3>
      <p>Code that follows dependency inversion is far easier to test in isolation.</p>
    </article>
    <article class="card">
      <h3 class="card-title"><a href="{{ '/topics/build-ci-cd-devops-interview-questions/' | relative_url }}">Build, CI/CD, and DevOps interview questions</a></h3>
      <p>Tests deliver value when they run on every build and gate every merge.</p>
    </article>
  </div>
</section>
