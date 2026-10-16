---
layout: default
title: Build, CI/CD, and DevOps Interview Questions and Answers
description: Build and DevOps interview questions and answers on Maven vs Gradle, lifecycles, dependency management, multi-module builds, build caching, Git workflows, and code review.
lang: en
image: /assets/social-preview/github-social-preview.png
---

<section class="hero">
  <span class="eyebrow">Topic Page</span>
  <h1>Build, CI/CD, and DevOps interview questions and answers.</h1>
  <p class="lede">Every engineer depends on the build and on version control, but few can explain how they work. These questions check that you can keep a team's build fast and its history clean.</p>
  <div class="hero-actions">
    <a class="button button-primary" href="{{ '/questions/32-build-ci-cd-and-devops/' | relative_url }}">Browse build and DevOps answers</a>
    <a class="button" href="{{ '/' | relative_url }}">Back to home</a>
  </div>
</section>

<section class="section">
  <h2>What this build and DevOps section includes</h2>
  <p>The build half compares Maven and Gradle, explains Maven's lifecycle phases and goals, dependency mediation and scopes, multi-module layouts, and how Gradle's incremental builds and build cache save time.</p>
  <p>The Git half covers branching strategies, merge versus rebase and conflict resolution, recovering work with reset, revert, cherry-pick, and reflog, and the team practices of code review and semantic versioning.</p>
</section>

<section class="section">
  <h2>Representative build and DevOps interview questions</h2>
  <ol class="topic-list">
    <li>What is the difference between Maven and Gradle?</li>
    <li>What are Maven lifecycle phases and goals?</li>
    <li>How does Maven resolve dependency version conflicts?</li>
    <li>How should a multi-module build be organized?</li>
    <li>How does the Gradle build cache work?</li>
    <li>Which Git branching strategy fits continuous delivery?</li>
    <li>When should you rebase instead of merge?</li>
    <li>How do you undo a commit that is already pushed?</li>
    <li>What does semantic versioning promise?</li>
  </ol>
</section>

<section class="section">
  <h2>Related pages</h2>
  <div class="card-grid">
    <article class="card">
      <h3 class="card-title"><a href="{{ '/topics/docker-kubernetes-interview-questions/' | relative_url }}">Docker and Kubernetes interview questions</a></h3>
      <p>The next stage of the pipeline after the build produces an artifact.</p>
    </article>
    <article class="card">
      <h3 class="card-title"><a href="{{ '/topics/java-testing-interview-questions/' | relative_url }}">Java testing interview questions</a></h3>
      <p>Tests are what make continuous integration trustworthy.</p>
    </article>
    <article class="card">
      <h3 class="card-title"><a href="{{ '/topics/aws-cloud-interview-questions/' | relative_url }}">Cloud and AWS interview questions</a></h3>
      <p>Where most pipelines ultimately deploy.</p>
    </article>
  </div>
</section>
