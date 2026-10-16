---
layout: default
title: Modern Java Features Interview Questions and Answers
description: Modern Java interview questions and answers on lambdas, method references, Optional, var, text blocks, switch expressions, modules, and sealed classes.
lang: en
image: /assets/social-preview/github-social-preview.png
---

<section class="hero">
  <span class="eyebrow">Topic Page</span>
  <h1>Modern Java features interview questions and answers.</h1>
  <p class="lede">Interviewers use language-evolution questions to check whether you write Java the way it is written today, not the way it was written in 2010. This page covers the Java 8 to Java 21 features that come up most often.</p>
  <div class="hero-actions">
    <a class="button button-primary" href="{{ '/questions/21-java-language-evolution/' | relative_url }}">Browse modern Java answers</a>
    <a class="button" href="{{ '/' | relative_url }}">Back to home</a>
  </div>
</section>

<section class="section">
  <h2>What this modern Java section includes</h2>
  <p>The section starts with the functional core introduced in Java 8: lambdas, functional interfaces, method references, default methods, and Optional. It then moves through the syntax improvements that removed a lot of boilerplate, such as <code>var</code>, text blocks, and switch expressions.</p>
  <p>The senior end of the section covers the platform and type-system changes: the module system and sealed classes. Strong answers explain not only the syntax but the design problem each feature solves and where it is the wrong tool.</p>
</section>

<section class="section">
  <h2>Representative modern Java interview questions</h2>
  <ol class="topic-list">
    <li>What are lambda expressions and functional interfaces?</li>
    <li>What kinds of method references exist?</li>
    <li>Why were default and static methods added to interfaces?</li>
    <li>How should Optional be used, and where should it not be used?</li>
    <li>What does the Java 8 Date-Time API fix compared to java.util.Date?</li>
    <li>What is <code>var</code> and what are its limits?</li>
    <li>What are text blocks?</li>
    <li>How do switch expressions differ from switch statements?</li>
    <li>What is the Java Platform Module System?</li>
    <li>What are sealed classes and interfaces?</li>
  </ol>
</section>

<section class="section">
  <h2>Related pages</h2>
  <div class="card-grid">
    <article class="card">
      <h3 class="card-title"><a href="{{ '/topics/stream-api-interview-questions/' | relative_url }}">Stream API interview questions</a></h3>
      <p>Streams are the main consumer of lambdas and method references, so the two topics are usually asked together.</p>
    </article>
    <article class="card">
      <h3 class="card-title"><a href="{{ '/topics/records-generics-interview-questions/' | relative_url }}">Records and generics interview questions</a></h3>
      <p>Records and sealed types work together to model data in modern Java.</p>
    </article>
    <article class="card">
      <h3 class="card-title"><a href="{{ '/topics/oop-solid-interview-questions/' | relative_url }}">OOP and SOLID interview questions</a></h3>
      <p>Default methods and sealed hierarchies change how you apply classic object-oriented design.</p>
    </article>
  </div>
</section>
