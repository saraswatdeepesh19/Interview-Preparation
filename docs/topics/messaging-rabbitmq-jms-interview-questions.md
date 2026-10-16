---
layout: default
title: RabbitMQ and JMS Messaging Interview Questions and Answers
description: Messaging interview questions and answers on JMS, RabbitMQ and AMQP, acknowledgements, durability, dead letter queues, delivery guarantees, idempotent consumers, and ordering.
lang: en
image: /assets/social-preview/github-social-preview.png
---

<section class="hero">
  <span class="eyebrow">Topic Page</span>
  <h1>RabbitMQ and JMS messaging interview questions and answers.</h1>
  <p class="lede">Not every system uses Kafka. Classic message brokers such as RabbitMQ and ActiveMQ still run a large share of enterprise integrations, and interviewers use them to test your understanding of delivery guarantees and failure handling.</p>
  <div class="hero-actions">
    <a class="button button-primary" href="{{ '/questions/28-messaging-beyond-kafka/' | relative_url }}">Browse messaging answers</a>
    <a class="button" href="{{ '/' | relative_url }}">Back to home</a>
  </div>
</section>

<section class="section">
  <h2>What this messaging section includes</h2>
  <p>The section covers the fundamentals of synchronous versus asynchronous communication and queues versus topics, then the JMS API with ActiveMQ and Artemis, and AMQP's model of exchanges, queues, and bindings in RabbitMQ.</p>
  <p>The rest is about reliability: acknowledgements and prefetch, durable messages, dead letter queues and poison messages, why exactly-once delivery is mostly a myth, idempotent consumers with the inbox pattern, and how ordering interacts with competing consumers.</p>
</section>

<section class="section">
  <h2>Representative messaging interview questions</h2>
  <ol class="topic-list">
    <li>What is the difference between a queue and a topic?</li>
    <li>What does the JMS API standardize?</li>
    <li>How do RabbitMQ exchanges route messages?</li>
    <li>How do acknowledgements and prefetch work?</li>
    <li>How do you make messages survive a broker restart?</li>
    <li>What is a dead letter queue and how do you handle poison messages?</li>
    <li>Why is exactly-once delivery so hard?</li>
    <li>How do you build an idempotent consumer?</li>
    <li>How do you keep message ordering with multiple consumers?</li>
  </ol>
</section>

<section class="section">
  <h2>Related pages</h2>
  <div class="card-grid">
    <article class="card">
      <h3 class="card-title"><a href="{{ '/topics/kafka-interview-questions/' | relative_url }}">Kafka interview questions</a></h3>
      <p>The log-based alternative, with a very different model of consumption and retention.</p>
    </article>
    <article class="card">
      <h3 class="card-title"><a href="{{ '/topics/microservices-interview-questions/' | relative_url }}">Microservices interview questions</a></h3>
      <p>Asynchronous messaging is the backbone of loosely coupled services.</p>
    </article>
    <article class="card">
      <h3 class="card-title"><a href="{{ '/topics/transactions-interview-questions/' | relative_url }}">Transactions interview questions</a></h3>
      <p>Combining database writes with message publishing raises the same consistency questions.</p>
    </article>
  </div>
</section>
