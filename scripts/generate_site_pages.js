import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, '..');
const DOCS_DIR = path.join(REPO_ROOT, 'docs');
const REPOSITORY_URL = 'https://github.com/saraswatdeepesh19/Interview-Preparation';

const SECTION_ICONS = {
  1: '🗄️',
  2: '🧩',
  3: '🧠',
  4: '📦',
  5: '🍃',
  6: '🌐',
  7: '⚡',
  8: '🌊',
  9: '🧵',
  10: '🔑',
  11: '💳',
  12: '🔤',
  13: '🔒',
  14: '🐳',
  15: '📨',
  16: '💾',
  17: '🏗️',
  18: '📐',
  19: '⏱️',
  20: '📋',
  21: '🚀',
  22: '🧪',
  23: '🛡️',
  24: '🔄',
  25: '☁️',
  26: '⚡',
  27: '🍃',
  28: '📬',
  29: '🧮',
  30: '🏛️',
  31: '📈',
  32: '🔧',
  33: '🌩️',
  34: '🔌',
  35: '🖥️',
  36: '🛢️',
  37: '🧭',
  38: '🤝',
};

// Landing-page card copy. Sections without an entry still get a card, using the
// folder label and their first few question titles as the description.
const SECTION_CARDS = {
  1: { title: 'Databases SQL PostgreSQL', desc: 'Indexes, B-Trees, MVCC, VACUUM, JOINs, window functions, and query optimization.' },
  2: { title: 'Design Patterns', desc: 'GoF patterns in Java: Singleton, Factory, Strategy, Observer, Decorator, and Proxies.' },
  3: { title: 'Memory & Garbage Collection', desc: 'JVM Heap, Stack, Metaspace, G1, ZGC, memory leaks, OutOfMemoryError, and profiling.' },
  4: { title: 'Collections Framework', desc: 'ArrayList, LinkedList, TreeSet, ConcurrentHashMap, fail-fast vs fail-safe iterators.' },
  5: { title: 'Spring & Spring Boot', desc: 'IoC, DI, Bean Lifecycle, BeanPostProcessor, auto-configuration, actuators, and proxies.' },
  6: { title: 'REST & HTTP', desc: 'HTTP methods, idempotency, status codes, REST maturity model, and API design principles.' },
  7: { title: 'Exceptions Handling', desc: 'Checked vs Unchecked, try-with-resources, AutoCloseable, suppressed exceptions, best practices.' },
  8: { title: 'Stream API', desc: 'Intermediate & terminal operations, collectors, parallel streams, reduce, Spliterator.' },
  9: { title: 'Multithreading & Concurrency', desc: 'JMM, synchronized, volatile, CAS, Atomic classes, ThreadPools, Virtual Threads, and Deadlocks.' },
  10: { title: 'HashMap, equals & hashCode', desc: 'Internal bucket hashing, treeification (Red-Black trees), collision handling, and contracts.' },
  11: { title: 'Transactions', desc: 'ACID properties, isolation levels, propagation types in Spring `@Transactional`, and 2PC.' },
  12: { title: 'String Internals', desc: 'String Constant Pool, Compact Strings, StringBuilder vs StringBuffer, immutability benefits.' },
  13: { title: 'Immutability', desc: 'Defensive copying, unmodifiable wrappers, Java Records, thread safety through immutability.' },
  14: { title: 'Docker & Kubernetes', desc: 'Containerization, multi-stage builds, Pods, Services, Deployments, ConfigMaps, and Probes.' },
  15: { title: 'Apache Kafka', desc: 'Topics, partitions, consumer groups, delivery semantics, offsets, idempotence, and rebalances.' },
  16: { title: 'Hibernate & JPA', desc: 'Entity lifecycle, N+1 query problem, fetch strategies, L1/L2 caches, and optimistic locking.' },
  17: { title: 'Microservices Architecture', desc: 'Service Discovery, API Gateway, Circuit Breaker, Saga Pattern, Distributed Tracing, CQRS.' },
  18: { title: 'OOP & SOLID Principles', desc: 'Encapsulation, Polymorphism, Inheritance vs Composition, Single Responsibility, LSP, DIP.' },
  19: { title: 'CompletableFuture & Async', desc: 'Asynchronous composition, exception handling, allOf / anyOf, thread pool management.' },
  20: { title: 'Records & Generics', desc: 'Java Records, Type Erasure, Wildcards `? extends / super`, PECS rule, Bridge methods.' },
  21: { title: 'Java Language Evolution', desc: 'Lambdas, method references, Optional, var, text blocks, switch expressions, modules, and sealed types.' },
  22: { title: 'Testing', desc: 'Test pyramid, JUnit 5, AssertJ, Mockito, test doubles, TDD, and Spring Boot test slices.' },
  23: { title: 'Spring Security & Auth', desc: 'Filter chain, SecurityContext, password encoding, JWT, OAuth 2.0, OIDC, method security, and CSRF.' },
  24: { title: 'Reactive Programming', desc: 'Reactive Streams, Mono vs Flux, operators, backpressure, schedulers, and WebFlux vs MVC.' },
  25: { title: 'Spring Cloud & Resilience', desc: 'Service discovery, Gateway, Config, Feign, circuit breakers, retries, bulkheads, and rate limiting.' },
  26: { title: 'Caching & Redis', desc: 'Caching strategies, eviction policies, Spring Cache, Caffeine, Redis data structures, persistence, and Cluster.' },
  27: { title: 'NoSQL & Data Stores', desc: 'CAP and PACELC, consistency models, MongoDB, Elasticsearch, and Cassandra internals.' },
  28: { title: 'Messaging Beyond Kafka', desc: 'JMS, RabbitMQ and AMQP, acknowledgements, DLQs, delivery guarantees, idempotent consumers, ordering.' },
  29: { title: 'Data Structures & Algorithms', desc: 'Big-O, two pointers, sliding window, hashing, linked lists, stacks, backtracking, binary search, sorting.' },
  30: { title: 'System Design', desc: 'Requirements, estimation, scaling, load balancing, sharding, consistent hashing, caching, CQRS, event sourcing.' },
  31: { title: 'Performance & Observability', desc: 'Latency percentiles, JFR, async-profiler, JMH, JIT, thread and heap dumps, GC tuning, connection pools.' },
  32: { title: 'Build, CI/CD & DevOps', desc: 'Maven vs Gradle, lifecycle, dependency management, multi-module builds, Git workflows, and code review.' },
  33: { title: 'Cloud & AWS', desc: 'IaaS/PaaS/SaaS, shared responsibility, IAM, EC2 and Auto Scaling, ALB, VPC, S3, RDS and Aurora.' },
  34: { title: 'API Design & Integration', desc: 'API-first, OpenAPI and springdoc, resource modeling, versioning, pagination, filtering and sorting.' },
  35: { title: 'Frontend for Full Stack', desc: 'Semantic HTML, CSS box model, Flexbox and Grid, closures, prototypes, ES6+, event loop, async/await, DOM.' },
  36: { title: 'DB Migrations & Advanced SQL', desc: 'Flyway, Liquibase, zero-downtime migrations, large-table changes, rollbacks, window functions, and CTEs.' },
  37: { title: 'Architecture & Tech Leadership', desc: 'Clean code, refactoring, DDD, hexagonal and clean architecture, modular monoliths, strangler fig, ADRs and C4.' },
  38: { title: 'Behavioral & Agile', desc: 'Self-introduction, STAR method, achievements, conflict handling, code review feedback, Scrum and Kanban.' },
};

const LANDING_PAGE = path.join(DOCS_DIR, 'index.md');

const LANGUAGES = {
  eng: {
    lang_code: 'en',
    site_prefix: '',
    output_dir: path.join(DOCS_DIR, 'questions'),
    source_dir: path.join(REPO_ROOT, 'eng'),
    label: 'English',
    flag: '🇬🇧',
    library_title: 'Java Interview Questions and Answers Library',
    library_description: 'Browse 500+ Java interview answers directly on the site across Spring Boot, SQL, Hibernate, Kafka, Concurrency, and other backend topics.',
    home_url: '/',
    search_file: 'search-index-en.json',
  },
};

const LOCALIZED_TEXT = {
  eng: {
    library_intro: 'Browse the full answer library directly on the site in English. Every section and question page is generated from the source Markdown files in the repository, so the site and GitHub content stay in sync.',
    library_use_heading: 'How to use this library',
    library_steps: [
      'Pick one topic cluster that matches the role you are targeting.',
      'Open the section page to see the full question sequence.',
      'Read the answer page directly on the site, then switch languages or jump to the next question.',
    ],
    library_sections_heading: 'All sections',
    table_topic: 'Topic',
    table_questions: 'Questions',
    section_questions_heading: 'Questions in this section',
    section_navigator_heading: 'Study navigator',
    section_description: '{count} interview questions and answers in the {label} section.',
    badge_junior: 'Junior',
    badge_middle: 'Middle',
    badge_senior: 'Senior',
  },
};

const SECTION_RE = /^(\d+)\.\s+(.+)$/;
const QUESTION_RE = /^(\d+)\.\s+(.+)\.md$/;
const FRONT_MATTER_RE = /^---\s*\n[\s\S]*?\n---\s*\n/;

function slugify(text) {
  const asciiReplacements = {
    '@': ' at ',
    '&': ' and ',
    '+': ' plus ',
    '/': ' ',
    '_': ' ',
    "'": '',
  };
  let normalized = text.toLowerCase();
  for (const [src, tgt] of Object.entries(asciiReplacements)) {
    normalized = normalized.split(src).join(tgt);
  }
  normalized = normalized.replace(/[^a-z0-9]+/g, '-');
  normalized = normalized.replace(/-{2,}/g, '-').replace(/^-|-$/g, '');
  return normalized || 'item';
}

function yamlQuote(value) {
  if (value === null || value === undefined) return '""';
  const escaped = String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  return `"${escaped}"`;
}

function renderFrontMatter(data) {
  const lines = ['---'];
  for (const [key, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      lines.push(`${key}:`);
      for (const item of value) {
        if (typeof item === 'object' && item !== null) {
          lines.push('  -');
          for (const [k, v] of Object.entries(item)) {
            if (Array.isArray(v)) {
              lines.push(`    ${k}:`);
              for (const sub of v) {
                if (typeof sub === 'object') {
                  lines.push('      -');
                  for (const [sk, sv] of Object.entries(sub)) {
                    if (typeof sv === 'number' || typeof sv === 'boolean') {
                      lines.push(`        ${sk}: ${sv}`);
                    } else {
                      lines.push(`        ${sk}: ${yamlQuote(sv)}`);
                    }
                  }
                } else {
                  lines.push(`      - ${yamlQuote(sub)}`);
                }
              }
            } else if (typeof v === 'number' || typeof v === 'boolean') {
              lines.push(`    ${k}: ${v}`);
            } else {
              lines.push(`    ${k}: ${yamlQuote(v)}`);
            }
          }
        } else {
          lines.push(`  - ${yamlQuote(item)}`);
        }
      }
    } else if (typeof value === 'number' || typeof value === 'boolean') {
      lines.push(`${key}: ${value}`);
    } else {
      lines.push(`${key}: ${yamlQuote(value)}`);
    }
  }
  lines.push('---');
  return lines.join('\n');
}

function splitHeading(markdown, fallbackTitle) {
  const text = markdown.replace(FRONT_MATTER_RE, '');
  const lines = text.split('\n');
  if (lines.length > 0 && lines[0].startsWith('# ')) {
    const title = lines[0].substring(2).trim();
    const body = lines.slice(1).join('\n').replace(/^\n+/, '');
    return { title, body };
  }
  return { title: fallbackTitle, body: text.trim() };
}

function extractSummary(body) {
  const paragraphs = [];
  let insideCode = false;
  for (const rawLine of body.split('\n')) {
    const line = rawLine.trim();
    if (line.startsWith('```')) {
      insideCode = !insideCode;
      continue;
    }
    if (insideCode || !line) {
      if (paragraphs.length > 0) break;
      continue;
    }
    if (/^(#|-|\*|\||>|\d+\.)/.test(line)) continue;
    paragraphs.push(line);
  }
  let summary = paragraphs.length ? paragraphs.join(' ') : 'Structured Java interview answer with Junior, Middle, and Senior level explanations.';
  summary = summary.replace(/`([^`]*)`/g, '$1');
  summary = summary.replace(/\[(.*?)\]\((.*?)\)/g, '$1');
  summary = summary.replace(/(\*\*|__|\*|_)/g, '');
  summary = summary.replace(/\s+/g, ' ').trim();
  return summary.length <= 180 ? summary : summary.slice(0, 177).trim() + '...';
}

function siteUrl(langKey, ...parts) {
  const prefix = LANGUAGES[langKey].site_prefix;
  const cleanParts = parts.filter(Boolean).map(p => p.replace(/^\/+|\/+$/g, ''));
  if (prefix) {
    return '/' + [prefix, ...cleanParts].join('/') + '/';
  }
  return cleanParts.length ? '/' + cleanParts.join('/') + '/' : '/';
}

function rewriteNavigatorLinks(navigatorBody, section) {
  let rewritten = navigatorBody;
  for (const question of section.questions) {
    const replacement = `./${question.slug}/`;
    const candidates = [
      question.file_name,
      encodeURIComponent(question.file_name),
      question.file_name.replace(/ /g, '%20'),
    ];
    for (const c of candidates) {
      rewritten = rewritten.split(`](${c})`).join(`](${replacement})`);
    }
  }
  return rewritten;
}

function parseLanguage(langKey) {
  const sourceDir = LANGUAGES[langKey].source_dir;
  const sections = {};

  const entries = fs.readdirSync(sourceDir).sort();
  for (const entryName of entries) {
    const entryPath = path.join(sourceDir, entryName);
    if (!fs.statSync(entryPath).isDirectory() || entryName.startsWith('.')) continue;

    const match = entryName.match(SECTION_RE);
    if (!match) continue;
    const number = parseInt(match[1], 10);
    const label = match[2];

    const files = fs.readdirSync(entryPath).sort();
    const navFile = files.find(f => f.startsWith('00.'));
    // A missing navigator must not take the whole site down: the section page
    // still lists every question, it just has no curated study navigator.
    let navTitle = label;
    let navBody = '';
    if (navFile) {
      const navRaw = fs.readFileSync(path.join(entryPath, navFile), 'utf-8');
      ({ title: navTitle, body: navBody } = splitHeading(navRaw, label));
    } else {
      console.warn(`⚠️  No "00." navigator in ${entryName}; section page will list questions only.`);
    }

    const questions = [];
    for (const f of files) {
      if (f.startsWith('00.') || f.startsWith('_') || !f.endsWith('.md')) continue;
      const qMatch = f.match(QUESTION_RE);
      if (!qMatch) continue;
      const qNum = parseInt(qMatch[1], 10);
      const qFallback = qMatch[2];
      const qPath = path.join(entryPath, f);
      const raw = fs.readFileSync(qPath, 'utf-8');
      const { title, body } = splitHeading(raw, qFallback);
      const relPath = path.relative(REPO_ROOT, qPath).replace(/\\/g, '/');

      questions.push({
        number: qNum,
        title,
        file_name: f,
        source_path: qPath,
        source_relative_path: relPath,
        body: body.trim(),
        summary: extractSummary(body),
        position: 0,
        slug: '',
        url: '',
        prev_title: '',
        prev_url: '',
        next_title: '',
        next_url: '',
      });
    }

    questions.sort((a, b) => a.number - b.number);
    questions.forEach((q, idx) => { q.position = idx + 1; });

    sections[number] = {
      number,
      label,
      dir_name: entryName,
      source_dir: entryPath,
      navigator_path: navFile ? path.join(entryPath, navFile) : null,
      navigator_body: navBody.trim(),
      navigator_title: navTitle,
      icon: SECTION_ICONS[number] || '📚',
      slug: '',
      url: '',
      questions,
    };
  }

  return sections;
}

function assignSharedSlugs(allSections) {
  const engSections = allSections.eng;
  for (const sNum of Object.keys(engSections).map(Number).sort((a, b) => a - b)) {
    const sec = engSections[sNum];
    sec.slug = `${String(sec.number).padStart(2, '0')}-${slugify(sec.label)}`;
    sec.url = siteUrl('eng', 'questions', sec.slug);
    for (const q of sec.questions) {
      q.slug = `${String(q.position).padStart(2, '0')}-${slugify(q.title)}`;
      q.url = siteUrl('eng', 'questions', sec.slug, q.slug);
    }
  }

  for (const [langKey, sections] of Object.entries(allSections)) {
    if (langKey === 'eng') continue;
    for (const sNum of Object.keys(sections).map(Number).sort((a, b) => a - b)) {
      const sec = sections[sNum];
      const engSec = engSections[sNum];
      sec.slug = engSec.slug;
      sec.url = siteUrl(langKey, 'questions', sec.slug);
      for (let i = 0; i < sec.questions.length; i++) {
        const q = sec.questions[i];
        if (i < engSec.questions.length) {
          const eq = engSec.questions[i];
          q.position = eq.position;
          q.slug = eq.slug;
        } else {
          q.position = i + 1;
          q.slug = `${String(q.position).padStart(2, '0')}-${slugify(q.title)}`;
        }
        q.url = siteUrl(langKey, 'questions', sec.slug, q.slug);
      }
    }
  }
}

function assignPrevNext(section) {
  for (let i = 0; i < section.questions.length; i++) {
    const q = section.questions[i];
    if (i > 0) {
      const pq = section.questions[i - 1];
      q.prev_title = pq.title;
      q.prev_url = pq.url;
    }
    if (i + 1 < section.questions.length) {
      const nq = section.questions[i + 1];
      q.next_title = nq.title;
      q.next_url = nq.url;
    }
  }
}

function buildAlternates(allSections, sectionNumber, questionPosition = null) {
  const alternates = [];
  let defaultUrl = allSections.eng[sectionNumber].url;

  for (const [langKey, langConfig] of Object.entries(LANGUAGES)) {
    const sec = allSections[langKey][sectionNumber];
    let url = sec.url;
    if (questionPosition !== null) {
      const qMap = new Map(sec.questions.map(q => [q.position, q]));
      if (!qMap.has(questionPosition)) continue;
      url = qMap.get(questionPosition).url;
      if (langKey === 'eng') defaultUrl = url;
    } else if (langKey === 'eng') {
      defaultUrl = url;
    }
    alternates.push({ lang: langConfig.lang_code, label: langConfig.label, flag: langConfig.flag, url });
  }
  alternates.push({ lang: 'x-default', label: 'Default', flag: '🌐', url: defaultUrl });
  return alternates;
}

function buildSidebarData(sections, currentSectionNumber = null, currentQuestionPosition = null) {
  return sections.map(s => ({
    number: s.number,
    label: s.label,
    icon: s.icon,
    slug: s.slug,
    url: s.url,
    count: s.questions.length,
    is_current: s.number === currentSectionNumber,
    questions: s.questions.map(q => ({
      position: q.position,
      title: q.title,
      slug: q.slug,
      url: q.url,
      is_current: s.number === currentSectionNumber && q.position === currentQuestionPosition,
    })),
  }));
}

function buildLibraryContent(langKey, sections) {
  const lang = LANGUAGES[langKey];
  const text = LOCALIZED_TEXT[langKey];
  const lines = [
    `# ${lang.library_title}`,
    '',
    text.library_intro,
    '',
    `## ${text.library_use_heading}`,
    '',
  ];
  for (const step of text.library_steps) {
    lines.push(`- ${step}`);
  }
  lines.push('', `## ${text.library_sections_heading}`, '');
  lines.push(`| # | | ${text.table_topic} | ${text.table_questions} |`);
  lines.push('| --- |:---:| --- |:---:|');
  for (const s of sections) {
    lines.push(`| ${s.number} | ${s.icon} | [${s.label}](./${s.slug}/) | ${s.questions.length} |`);
  }
  return lines.join('\n') + '\n';
}

function buildSectionContent(langKey, section) {
  const text = LOCALIZED_TEXT[langKey];
  const rewrittenNav = rewriteNavigatorLinks(section.navigator_body, section);
  const lines = [
    `## ${text.section_questions_heading}`,
    '',
  ];
  for (const q of section.questions) {
    lines.push(`${q.position}. [${q.title}](./${q.slug}/)`);
  }
  if (rewrittenNav) {
    lines.push('', `## ${text.section_navigator_heading}`, '', rewrittenNav, '');
  }
  return lines.join('\n');
}

function buildQuestionContent(question) {
  return question.body.trim() + '\n';
}

function ensureCleanOutput() {
  for (const config of Object.values(LANGUAGES)) {
    if (fs.existsSync(config.output_dir)) {
      fs.rmSync(config.output_dir, { recursive: true, force: true });
    }
    fs.mkdirSync(config.output_dir, { recursive: true });
  }
}

function writePage(filePath, frontMatter, content) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const full = renderFrontMatter(frontMatter) + '\n\n' + content.trim() + '\n';
  fs.writeFileSync(filePath, full, 'utf-8');
}

function generateSearchIndexes(allSections) {
  const dataDir = path.join(DOCS_DIR, 'assets', 'data');
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

  for (const [langKey, langConfig] of Object.entries(LANGUAGES)) {
    const items = [];
    const sections = allSections[langKey];
    for (const sec of Object.values(sections)) {
      for (const q of sec.questions) {
        items.push({
          id: `${sec.number}-${q.position}`,
          title: q.title,
          secNumber: sec.number,
          secTitle: sec.label,
          icon: sec.icon,
          pos: q.position,
          url: q.url,
          summary: q.summary,
        });
      }
    }
    const target = path.join(dataDir, langConfig.search_file);
    fs.writeFileSync(target, JSON.stringify(items), 'utf-8');
    console.log(`Generated search index: ${target} (${items.length} items)`);
  }
}

function generatePages(allSections) {
  ensureCleanOutput();

  for (const [langKey, langConfig] of Object.entries(LANGUAGES)) {
    const sections = allSections[langKey];
    const orderedSections = Object.keys(sections).map(Number).sort((a, b) => a - b).map(n => sections[n]);

    for (const sec of orderedSections) {
      assignPrevNext(sec);
    }

    const outputDir = langConfig.output_dir;
    const allSectionsMeta = buildSidebarData(orderedSections);

    // 1. Library index page
    writePage(
      path.join(outputDir, 'index.md'),
      {
        layout: 'content-page',
        kind: 'library',
        title: langConfig.library_title,
        description: langConfig.library_description,
        lang: langConfig.lang_code,
        language_label: langConfig.label,
        language_flag: langConfig.flag,
        home_url: langConfig.home_url,
        library_url: siteUrl(langKey, 'questions'),
        alternates: Object.values(LANGUAGES).map(l => ({
          lang: l.lang_code,
          label: l.label,
          flag: l.flag,
          url: siteUrl(Object.keys(LANGUAGES).find(k => LANGUAGES[k] === l), 'questions'),
        })).concat([{ lang: 'x-default', label: 'Default', flag: '🌐', url: siteUrl('eng', 'questions') }]),
        sidebar_sections: allSectionsMeta,
      },
      buildLibraryContent(langKey, orderedSections)
    );

    // 2. Section pages & Question pages
    for (const sec of orderedSections) {
      const secSidebar = buildSidebarData(orderedSections, sec.number);
      const secSourceUrl = sec.navigator_path
        ? `${REPOSITORY_URL}/blob/master/${path.relative(REPO_ROOT, sec.navigator_path).replace(/\\/g, '/')}`
        : `${REPOSITORY_URL}/tree/master/${path.relative(REPO_ROOT, sec.source_dir).replace(/\\/g, '/')}`;

      writePage(
        path.join(outputDir, sec.slug, 'index.md'),
        {
          layout: 'content-page',
          kind: 'section',
          title: sec.label,
          icon: sec.icon,
          description: LOCALIZED_TEXT[langKey].section_description.replace('{count}', sec.questions.length).replace('{label}', sec.label),
          lang: langConfig.lang_code,
          language_label: langConfig.label,
          language_flag: langConfig.flag,
          home_url: langConfig.home_url,
          library_url: siteUrl(langKey, 'questions'),
          section_title: sec.label,
          section_url: sec.url,
          section_number: sec.number,
          question_count: sec.questions.length,
          source_url: secSourceUrl,
          alternates: buildAlternates(allSections, sec.number),
          sidebar_sections: secSidebar,
        },
        buildSectionContent(langKey, sec)
      );

      for (const q of sec.questions) {
        const qSidebar = buildSidebarData(orderedSections, sec.number, q.position);
        writePage(
          path.join(outputDir, sec.slug, q.slug, 'index.md'),
          {
            layout: 'content-page',
            kind: 'question',
            title: q.title,
            icon: sec.icon,
            description: q.summary,
            lang: langConfig.lang_code,
            language_label: langConfig.label,
            language_flag: langConfig.flag,
            home_url: langConfig.home_url,
            library_url: siteUrl(langKey, 'questions'),
            section_title: sec.label,
            section_url: sec.url,
            section_number: sec.number,
            question_number: q.position,
            source_url: `${REPOSITORY_URL}/blob/master/${q.source_relative_path}`,
            prev_title: q.prev_title,
            prev_url: q.prev_url,
            next_title: q.next_title,
            next_url: q.next_url,
            alternates: buildAlternates(allSections, sec.number, q.position),
            sidebar_sections: qSidebar,
          },
          buildQuestionContent(q)
        );
      }
    }
  }

  generateSearchIndexes(allSections);
  generateSitemap(allSections);
  updateLandingPage(allSections);
}

function escapeHtml(text) {
  return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function renderTopicCard(section) {
  const card = SECTION_CARDS[section.number] || {};
  const title = card.title || section.label;
  const desc = card.desc || section.questions.slice(0, 4).map(q => q.title).join(', ') + '.';
  return [
    `  <a class="topic-card" href="{{ '${section.url}' | relative_url }}">`,
    '    <div class="topic-card-top">',
    `      <span class="topic-icon">${section.icon}</span>`,
    `      <span class="topic-count">${section.questions.length} Questions</span>`,
    '    </div>',
    '    <div>',
    `      <h3 class="topic-title">${section.number}. ${escapeHtml(title)}</h3>`,
    `      <p class="topic-desc">${escapeHtml(desc)}</p>`,
    '    </div>',
    '    <div class="topic-footer">Start learning →</div>',
    '  </a>',
  ].join('\n');
}

// Rewrites every `<!-- gen:KEY -->...<!-- /gen:KEY -->` block in the landing page
// so section counts, question counts and topic cards always mirror eng/.
function updateLandingPage(allSections) {
  if (!fs.existsSync(LANDING_PAGE)) return;
  const sections = Object.keys(allSections.eng).map(Number).sort((a, b) => a - b).map(n => allSections.eng[n]);
  const totalQuestions = sections.reduce((acc, s) => acc + s.questions.length, 0);
  const blocks = {
    'topic-count': String(sections.length),
    'question-count': String(totalQuestions),
    'topic-cards': '\n' + sections.map(renderTopicCard).join('\n\n') + '\n',
  };

  let html = fs.readFileSync(LANDING_PAGE, 'utf-8');
  for (const [key, value] of Object.entries(blocks)) {
    const re = new RegExp(`(<!-- gen:${key} -->)[\\s\\S]*?(<!-- /gen:${key} -->)`, 'g');
    html = html.replace(re, (_, open, close) => `${open}${value}${close}`);
  }
  fs.writeFileSync(LANDING_PAGE, html, 'utf-8');
  console.log(`Updated landing page: ${sections.length} topics, ${totalQuestions} questions`);
}

function generateSitemap(allSections) {
  const SITE_URL = 'https://saraswatdeepesh19.github.io/Interview-Preparation';
  const urls = [];

  const homeAlternates = [
    { lang: 'en', url: `${SITE_URL}/` },
    { lang: 'x-default', url: `${SITE_URL}/` },
  ];

  urls.push({ loc: `${SITE_URL}/`, priority: '1.0', alternates: homeAlternates });

  const libAlternates = [
    { lang: 'en', url: `${SITE_URL}/questions/` },
    { lang: 'x-default', url: `${SITE_URL}/questions/` },
  ];

  urls.push({ loc: `${SITE_URL}/questions/`, priority: '0.9', alternates: libAlternates });

  const engSections = allSections.eng;
  for (const [secNum, sec] of Object.entries(engSections)) {
    const secAlternates = [
      { lang: 'en', url: `${SITE_URL}${sec.url}` },
          { lang: 'x-default', url: `${SITE_URL}${sec.url}` },
    ];

    urls.push({ loc: `${SITE_URL}${sec.url}`, priority: '0.8', alternates: secAlternates });

    for (const q of sec.questions) {

      const qAlternates = [
        { lang: 'en', url: `${SITE_URL}${q.url}` },
        { lang: 'x-default', url: `${SITE_URL}${q.url}` },
      ];

      urls.push({ loc: `${SITE_URL}${q.url}`, priority: '0.7', alternates: qAlternates });
    }
  }

  const xmlLines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ];

  for (const item of urls) {
    xmlLines.push('  <url>');
    xmlLines.push(`    <loc>${item.loc}</loc>`);
    for (const alt of item.alternates) {
      xmlLines.push(`    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${alt.url}" />`);
    }
    xmlLines.push('    <changefreq>weekly</changefreq>');
    xmlLines.push(`    <priority>${item.priority}</priority>`);
    xmlLines.push('  </url>');
  }

  xmlLines.push('</urlset>');
  fs.writeFileSync(path.join(DOCS_DIR, 'sitemap.xml'), xmlLines.join('\n'), 'utf-8');
  console.log(`Generated sitemap with ${urls.length} URLs at ${path.join(DOCS_DIR, 'sitemap.xml')}`);
}

function main() {
  console.log('Parsing all language directories...');
  const allSections = {
    eng: parseLanguage('eng'),
  };

  assignSharedSlugs(allSections);
  generatePages(allSections);

  const totalQuestions = Object.values(allSections.eng).reduce((acc, s) => acc + s.questions.length, 0);
  console.log(`✅ Successfully generated ${totalQuestions} question pages per language across ${Object.keys(allSections.eng).length} sections!`);
}

main();
