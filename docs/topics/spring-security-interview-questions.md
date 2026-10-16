---
layout: default
title: Spring Security Interview Questions and Answers
description: Spring Security interview questions and answers on the filter chain, SecurityContext, password encoding, JWT, OAuth 2.0, OpenID Connect, method security, and CSRF.
lang: en
image: /assets/social-preview/github-social-preview.png
---

<section class="hero">
  <span class="eyebrow">Topic Page</span>
  <h1>Spring Security interview questions and answers.</h1>
  <p class="lede">Security questions separate engineers who have configured Spring Security by copy-paste from those who understand what happens on every request. This page covers authentication, authorization, tokens, and OAuth 2.0 as interviewers usually probe them.</p>
  <div class="hero-actions">
    <a class="button button-primary" href="{{ '/questions/23-spring-security-and-authentication/' | relative_url }}">Browse Spring Security answers</a>
    <a class="button" href="{{ '/' | relative_url }}">Back to home</a>
  </div>
</section>

<section class="section">
  <h2>What this Spring Security section includes</h2>
  <p>The section explains the security model first: authentication versus authorization, roles versus authorities, and how the filter chain, <code>SecurityContextHolder</code>, <code>UserDetailsService</code>, and <code>PasswordEncoder</code> fit together.</p>
  <p>It then covers stateless APIs: session versus token authentication, JWT structure and pitfalls, refresh and revocation, OAuth 2.0 flows including PKCE and client credentials, OpenID Connect, resource servers, method security, and CSRF.</p>
</section>

<section class="section">
  <h2>Representative Spring Security interview questions</h2>
  <ol class="topic-list">
    <li>What is the difference between authentication and authorization?</li>
    <li>How does the Spring Security filter chain work?</li>
    <li>How does SecurityContextHolder store the current user?</li>
    <li>How should passwords be stored?</li>
    <li>When should you choose sessions over tokens?</li>
    <li>What are the common JWT pitfalls?</li>
    <li>How do you revoke a JWT before it expires?</li>
    <li>Which OAuth 2.0 flow should a single-page app use?</li>
    <li>What does OpenID Connect add on top of OAuth 2.0?</li>
    <li>When do you need CSRF protection?</li>
  </ol>
</section>

<section class="section">
  <h2>Related pages</h2>
  <div class="card-grid">
    <article class="card">
      <h3 class="card-title"><a href="{{ '/topics/spring-boot-interview-questions/' | relative_url }}">Spring Boot interview questions</a></h3>
      <p>Security filters and proxies build on the same container and AOP mechanics.</p>
    </article>
    <article class="card">
      <h3 class="card-title"><a href="{{ '/topics/rest-http-interview-questions/' | relative_url }}">REST and HTTP interview questions</a></h3>
      <p>Headers, cookies, and status codes are the transport for every security mechanism.</p>
    </article>
    <article class="card">
      <h3 class="card-title"><a href="{{ '/topics/microservices-interview-questions/' | relative_url }}">Microservices interview questions</a></h3>
      <p>Token propagation and gateway authentication matter most in distributed systems.</p>
    </article>
  </div>
</section>
