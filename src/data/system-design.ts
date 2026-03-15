import { Category } from "./types";

export const systemDesignCategory: Category = {
  id: "system-design",
  name: "System Design",
  subtitle: "Interview Questions",
  icon: "system",
  color: "#3b82f6",
  sections: [
    {
      title: "System Design Questions for Freshers and Intermediate Levels",
      questions: [
        {
          id: 1,
          question: "What is system design?",
          answer: `**System design** is the process of defining the architecture, components, data flow, and tradeoffs needed to build a scalable and reliable system.

Interviewers typically expect you to think about:
- requirements
- scale
- storage
- APIs
- reliability
- tradeoffs`
        },
        {
          id: 2,
          question: "What is scalability?",
          answer: `**Scalability** is the ability of a system to handle growing traffic, data, or workload.

Two common types:
- **Vertical scaling**: bigger machine
- **Horizontal scaling**: more machines`
        },
        {
          id: 3,
          question: "What is the difference between vertical and horizontal scaling?",
          answer: `**Vertical scaling**
- scale up one machine
- simpler initially
- has hardware limits

**Horizontal scaling**
- add more machines
- better for large systems
- requires distributed-system thinking`
        },
        {
          id: 4,
          question: "What is load balancing and what are different load balancing algorithms?",
          answer: `A **load balancer** distributes requests across servers so no single server becomes overloaded.

Common algorithms:
- round robin
- weighted round robin
- least connections
- least response time
- IP hash

Load balancers improve availability and scale.`
        },
        {
          id: 5,
          question: "What is caching and why is it important?",
          answer: `**Caching** stores frequently accessed data closer to where it is needed.

Benefits:
- lower latency
- reduced database load
- improved throughput

Common layers:
- browser cache
- CDN
- application cache
- database cache`
        },
        {
          id: 6,
          question: "What is a CDN?",
          answer: `A **CDN (Content Delivery Network)** caches static or edge-deliverable content in multiple geographic locations.

It helps with:
- faster asset delivery
- lower origin load
- better global performance`
        },
        {
          id: 7,
          question: "What is a reverse proxy?",
          answer: `A **reverse proxy** sits in front of backend servers and forwards client requests.

It can provide:
- load balancing
- TLS termination
- caching
- routing
- security filtering`
        },
        {
          id: 8,
          question: "What is high availability?",
          answer: `**High availability** means a system stays operational even when some components fail.

Typical techniques:
- redundancy
- failover
- health checks
- multiple instances across zones or regions`
        },
        {
          id: 9,
          question: "What is redundancy in system design?",
          answer: `**Redundancy** means having extra components so the system can continue operating if one fails.

Examples:
- multiple app servers
- replicated databases
- backup network paths`
        },
        {
          id: 10,
          question: "What is failover?",
          answer: `**Failover** is the process of switching to a backup component when the primary one fails.

Example:
- primary database becomes unavailable
- replica takes over`
        },
        {
          id: 11,
          question: "What is sharding?",
          answer: `**Sharding** splits data across multiple database instances based on a shard key.

It helps when a single database can no longer handle total data or traffic.`
        },
        {
          id: 12,
          question: "What is replication?",
          answer: `**Replication** means keeping copies of data on multiple nodes.

Benefits:
- higher availability
- read scaling
- backup and resilience`
        },
        {
          id: 13,
          question: "What is partitioning in databases?",
          answer: `**Partitioning** divides large tables into smaller logical pieces while keeping them queryable as one dataset.

It helps with:
- large data management
- faster maintenance
- better query performance for partition-friendly access patterns`
        },
        {
          id: 14,
          question: "What is CAP theorem in distributed systems?",
          answer: `CAP says that during a network partition, a distributed system must choose between:
- **Consistency**
- **Availability**

while **Partition tolerance** is required in real distributed systems.`
        },
        {
          id: 15,
          question: "What is eventual consistency?",
          answer: `**Eventual consistency** means all replicas converge over time, but some reads may temporarily return stale data.

It is common in distributed systems that prioritize availability and scale.`
        },
        {
          id: 16,
          question: "What is message queue and why is it used?",
          answer: `A **message queue** helps services communicate asynchronously.

Benefits:
- decoupling
- buffering spikes
- background processing
- improved resilience`
        },
        {
          id: 17,
          question: "What is asynchronous processing?",
          answer: `**Asynchronous processing** means work is done later or in parallel instead of blocking the user request.

Examples:
- sending emails
- image processing
- analytics ingestion`
        },
        {
          id: 18,
          question: "What is rate limiting?",
          answer: `**Rate limiting** restricts how many requests a client can make in a time period.

It helps with:
- abuse prevention
- fair usage
- protecting downstream systems`
        },
        {
          id: 19,
          question: "What is a bottleneck in a system?",
          answer: `A **bottleneck** is the component that limits overall throughput or performance.

Examples:
- database CPU
- network bandwidth
- single-threaded service
- slow external dependency`
        },
        {
          id: 20,
          question: "What is statelessness and why is it useful?",
          answer: `A **stateless** service does not keep client session state in local memory between requests.

Benefits:
- easier horizontal scaling
- easier failover
- simpler load balancing`
        },
        {
          id: 21,
          question: "What is stateful service?",
          answer: `A **stateful** service keeps state across requests.

This can be useful in some systems, but it makes scaling and failover more complex.`
        },
        {
          id: 22,
          question: "What is database indexing in system design context?",
          answer: `Indexes improve lookup speed, but they also increase write cost and storage.

In system design, interviewers care that you understand the tradeoff, not just the definition.`
        },
        {
          id: 23,
          question: "What is denormalization in system design?",
          answer: `**Denormalization** means storing redundant data to improve read performance and reduce expensive joins.

It is common in read-heavy systems and NoSQL-style modeling.`
        },
        {
          id: 24,
          question: "What is a health check endpoint?",
          answer: `A **health check** endpoint tells whether a service is alive and/or ready to receive traffic.

Examples:
- liveness
- readiness`
        },
        {
          id: 25,
          question: "What is monitoring in system design?",
          answer: `**Monitoring** tracks the health and performance of a system.

Common signals:
- latency
- traffic
- errors
- saturation
- disk, CPU, memory`
        },
        {
          id: 26,
          question: "What is logging in distributed systems?",
          answer: `Logging records events and errors so systems can be debugged later.

In distributed systems, logs usually need:
- centralization
- timestamps
- correlation IDs`
        },
        {
          id: 27,
          question: "What is distributed tracing?",
          answer: `**Distributed tracing** follows a request across multiple services.

It helps identify:
- where latency happened
- which service failed
- how one request flowed end-to-end`
        },
        {
          id: 28,
          question: "What is the difference between throughput and latency?",
          answer: `**Latency**
- how long one request takes

**Throughput**
- how many requests a system handles per unit time

A system can have high throughput and still have bad latency if poorly tuned.`
        },
        {
          id: 29,
          question: "What is data durability?",
          answer: `**Durability** means once data is committed, it should survive crashes and failures.

This usually depends on:
- disk persistence
- replication
- transaction logs`
        },
        {
          id: 30,
          question: "How should you start a system design interview answer?",
          answer: `A strong structure:
1. clarify functional requirements
2. clarify non-functional requirements
3. estimate scale roughly
4. propose a high-level architecture
5. discuss bottlenecks and tradeoffs

This is one of the most useful habits for design interviews.`
        }
      ]
    },
    {
      title: "System Design Questions for Experienced Levels",
      questions: [
        {
          id: 1,
          question: "Design a URL shortening service like bit.ly",
          answer: `**Sample interview answer:**

"I would start by clarifying that the core requirements are: create short links, redirect quickly, support very high read traffic, and record click analytics. This is usually a read-heavy system because redirects happen far more often than new URLs are created.

At a high level, I would have a write API that accepts a long URL and returns a short code, and a redirect API that takes the short code and returns an HTTP redirect. For storage, I would keep the source-of-truth mapping in a relational or key-value store with a unique index on the short code. To generate short codes, I would prefer a base62 encoding of an internal numeric ID or a distributed ID generator. That is simpler and safer than relying only on hashes, because hashes introduce collision handling complexity.

Since redirects are the hot path, I would put Redis in front of the database and cache popular short-code-to-long-URL mappings. On a cache hit, the service can return the redirect immediately. On a miss, it reads from the database, populates the cache, and redirects. For analytics, I would not write every click synchronously into the main database because that would slow down redirects. Instead, I would publish click events to a queue or stream and process them asynchronously for reporting.

The key tradeoffs are around ID generation, caching, and analytics accuracy. Generated IDs are operationally simple, but custom aliases require validation and conflict checks. Caching improves redirect speed, but cache misses and invalidation have to be handled carefully. Analytics done asynchronously improves latency, but reporting becomes eventually consistent. So the final design is: load balancer -> stateless redirect/write services -> Redis cache -> primary URL store, with a separate async analytics pipeline. That keeps the read path fast while preserving a clean source of truth."`
        },
        {
          id: 2,
          question: "How would you design a chat application like WhatsApp or Slack?",
          answer: `**Sample interview answer:**

"I would treat chat as a real-time messaging system with a persistent history layer. The main user-facing requirements are low-latency message delivery, online presence, support for offline users, and message history sync across devices.

I would keep long-lived client connections through WebSockets so the server can push messages in real time. Behind that, I would have a messaging service responsible for validating messages, assigning message IDs, persisting them, and fan-out to recipients. Messages should be stored durably in a database optimized for conversation history, usually partitioned by conversation or channel ID. If the recipient is online, the message is pushed immediately through the gateway. If not, it is stored and later delivered when the user reconnects, and mobile push notifications can be sent through a notification service.

For scale, I would decouple ingestion from delivery using a queue or log. That helps absorb spikes and keeps the system resilient. Presence should usually be treated as ephemeral state and stored separately in something like Redis rather than the primary message database. The main tradeoffs are ordering, fan-out cost, and consistency. Strict global ordering is expensive, so I would aim for per-conversation ordering. Group chats also create fan-out pressure, so very large channels may need special handling. The high-level design is: WebSocket gateway -> messaging service -> durable message store + async delivery pipeline + presence store + push notification system."`
        },
        {
          id: 3,
          question: "How would you design a notification system?",
          answer: `**Sample interview answer:**

"I would design notifications as an event-driven system because sending notifications is usually asynchronous and channel-specific. The system should support email, SMS, push, and in-app delivery, while respecting user preferences and rate limits.

At a high level, producers such as order services or marketing tools would send notification requests into a notification API or publish events into a queue. A notification orchestration layer would read those requests, validate user preferences, choose the right channel, and fan out work to channel-specific workers. Each worker would know how to talk to its external provider, for example an SMTP provider for email or an SMS gateway for text messages.

I would keep retries and dead-letter queues because external providers fail often and transient failures are common. I would also make notifications idempotent so retries do not send duplicates. User preferences, templates, and delivery history should be stored separately from the delivery workers. The tradeoff here is between flexibility and complexity: a unified notification platform is powerful, but it becomes an important shared service, so reliability, observability, and rate limiting matter a lot."`
        },
        {
          id: 4,
          question: "How would you design a rate limiter?",
          answer: `**Sample interview answer:**

"I would usually place a rate limiter at the API gateway or middleware layer so abusive traffic is stopped before it reaches core services. The exact algorithm depends on the product requirement. If the system needs to allow short bursts but enforce an average rate, token bucket is often a strong choice. If simpler limits are acceptable, a sliding window or fixed window approach can work.

In a distributed environment, I would store counters in Redis because multiple app instances need a shared view of usage. The limiter key is usually something like user ID, API key, or IP address, depending on the use case. Each request checks and updates the bucket or counter atomically. If the limit is exceeded, the gateway returns a 429 response.

The tradeoffs are strictness, cost, and operational simplicity. A very accurate limiter can be more expensive to run. A cheaper limiter may allow small bursts or approximation errors. So I would pick the simplest algorithm that satisfies the business requirement instead of chasing perfect mathematical precision."`
        },
        {
          id: 5,
          question: "How would you design a file upload and storage system?",
          answer: `**Sample interview answer:**

"For file uploads, I would avoid routing large files through the application servers whenever possible. Instead, the backend would authenticate the user and issue a pre-signed upload URL for object storage. The client uploads the file directly to storage, which reduces pressure on the app tier and scales much better for large files.

The backend still needs to store metadata such as file owner, original filename, content type, size, and storage key in a database. After upload, an asynchronous processing pipeline can handle virus scanning, thumbnail generation, transcoding, or other media workflows. Downloads can be served through object storage plus a CDN for scale and low latency.

The tradeoffs are around simplicity, security, and consistency. Direct-to-storage upload is scalable, but the application must still validate what was uploaded and handle incomplete uploads carefully. Async processing improves throughput, but it means derived artifacts like thumbnails may not be available immediately."`
        },
        {
          id: 6,
          question: "How would you design a news feed system?",
          answer: `**Sample interview answer:**

"A news feed design starts with one big decision: do I fan out posts to followers at write time, or compute feeds at read time? Fan-out on write gives faster reads because each user's feed is precomputed, but it is expensive when someone with millions of followers posts. Fan-out on read is easier for celebrity accounts because you avoid huge write amplification, but feed reads become more expensive.

In practice, I would usually use a hybrid approach. For normal users, I would precompute feed entries on write and store them in a feed store for fast reads. For celebrity or very high-fanout users, I would fetch their posts dynamically at read time. Ranking logic can then mix recency, engagement, and personalization signals.

The supporting components would include a post service, graph or follow service, feed generation workers, caching, and a feed storage layer optimized for ordered retrieval. The key tradeoff is write complexity versus read latency. The right answer depends heavily on follower distribution and personalization requirements."`
        },
        {
          id: 7,
          question: "How would you design a search autocomplete system?",
          answer: `**Sample interview answer:**

"Autocomplete is mainly a low-latency prefix search problem. The input string is usually short, and users expect suggestions in tens of milliseconds. I would keep a prefix-oriented index, either with a trie-like structure, a dedicated search engine, or a specialized in-memory suggestion store depending on scale.

The system should rank suggestions by a combination of popularity, recency, and maybe personalization. Popular prefixes should be cached aggressively because many users type the same prefixes. If typo tolerance is needed, I would usually rely on a search engine or precomputed suggestion logic rather than building approximate matching from scratch.

The main tradeoffs are memory cost versus latency and freshness versus preprocessing cost. Very fast autocomplete usually means storing more precomputed data in memory."`
        },
        {
          id: 8,
          question: "How would you design a ride-booking system like Uber?",
          answer: `**Sample interview answer:**

"A ride-booking system has two very different workloads: high-frequency real-time location updates and transactional trip lifecycle changes. I would separate those concerns. Driver location updates should go to a location service optimized for geospatial indexing and frequent writes. Matching logic can query nearby available drivers based on the rider's pickup location.

Once a rider requests a trip, a trip service manages state transitions like requested, accepted, started, and completed. Pricing and payment are usually separate services because they have different business rules and reliability needs. Since location data is noisy and real-time, eventual consistency is acceptable there. Trip state and payments need stronger guarantees.

The hard parts are matching latency, surge pricing, and race conditions when multiple drivers or riders are involved. So I would emphasize geospatial indexing, idempotent trip commands, and clear state transitions rather than trying to make every part strongly consistent."`
        },
        {
          id: 9,
          question: "How would you design a video streaming platform?",
          answer: `**Sample interview answer:**

"I would separate the system into two major flows: content ingestion and content delivery. In ingestion, creators upload source videos, which go into object storage. An asynchronous transcoding pipeline generates multiple resolutions and bitrates for adaptive streaming. Metadata such as title, duration, creator, and access rights is stored in a database.

For playback, the most important components are CDN delivery and adaptive bitrate streaming. Clients should fetch content from edge locations rather than directly from origin storage. Recommendation, search, and analytics can be independent subsystems because they are important, but not on the critical playback path.

The biggest tradeoffs are storage cost, transcoding cost, latency, and global delivery. Supporting multiple qualities improves user experience, but increases storage and processing significantly."`
        },
        {
          id: 10,
          question: "How would you design an API gateway for multiple backend services?",
          answer: `**Sample interview answer:**

"An API gateway should be the entry point for clients into a multi-service system. I would use it for cross-cutting concerns that should not be reimplemented in every service, such as authentication, routing, rate limiting, request logging, and possibly lightweight aggregation.

The gateway receives the request, authenticates it, routes it to the correct backend service, and may combine responses if the client would otherwise need multiple calls. It is also a good place for metrics, tracing headers, and request throttling. However, I would be careful not to put too much business logic in the gateway, because then it becomes a bottleneck and a hard-to-maintain central dependency.

So the tradeoff is centralization versus overloading one layer. A good gateway is thin, policy-focused, and operationally robust."`
        },
        {
          id: 11,
          question: "How would you design a distributed cache?",
          answer: `**Sample interview answer:**

"A distributed cache is mainly about fast access plus safe failure behavior. I would partition keys across nodes using consistent hashing or a similar scheme so load is spread evenly. Replication can be added for availability, depending on the cost and consistency needs.

The cache should support TTL-based expiration and an eviction policy like LRU or LFU. I would also decide early whether this is a cache-aside system, write-through cache, or something more specialized. In most application systems, cache-aside is the simplest: read cache first, fall back to the database on miss, then populate the cache.

The major tradeoffs are consistency and complexity. A cache that is always perfectly in sync with the database is expensive to maintain. In many systems, slight staleness is acceptable if it keeps reads fast and the source of truth remains the database."`
        },
        {
          id: 12,
          question: "How would you design a job scheduling system?",
          answer: `**Sample interview answer:**

"A scheduling system usually needs to support delayed jobs, recurring jobs, retries, and safe execution across multiple workers. I would have a scheduler component that stores jobs and their next execution time in a persistent store. When jobs become due, the scheduler pushes them into a queue, and workers consume from that queue and execute them.

The workers should be stateless, and job execution must be idempotent because retries are inevitable. I would also track job state such as scheduled, running, completed, failed, and retrying. For recurring jobs, the scheduler recalculates the next execution time after each successful run.

The hard parts are duplicate execution, retry storms, distributed locking, and visibility into stuck jobs. So a strong design includes persistence, retries with limits, monitoring, and idempotent job handlers."`
        },
        {
          id: 13,
          question: "How would you design an analytics event pipeline?",
          answer: `**Sample interview answer:**

"An analytics pipeline is usually a write-heavy append system. Clients or backend services emit events into an ingestion endpoint or directly into a stream. From there, I would use a queue or log such as Kafka to absorb traffic spikes and decouple producers from downstream consumers.

One set of consumers can process events in near real time for dashboards or alerts, while another path writes raw events to long-term storage for historical analysis. I would separate hot analytical storage from cold archival storage because those workloads are very different. Schema evolution also matters, so events should be versioned and validated.

The main tradeoffs are throughput, cost, and delivery guarantees. Exactly-once processing is attractive, but often expensive and unnecessary. In many analytics systems, at-least-once plus deduplication is the more practical choice."`
        },
        {
          id: 14,
          question: "How do you estimate system capacity in an interview?",
          answer: `A practical way:
1. estimate QPS
2. estimate storage growth
3. estimate bandwidth
4. estimate cache size
5. identify the hottest path

Interviewers often care more about reasonable assumptions than perfect math.`
        },
        {
          id: 15,
          question: "What is the difference between consistency and availability tradeoffs in large systems?",
          answer: `Strong consistency can increase latency or reduce availability during partitions.

Higher availability may require accepting stale reads or eventual consistency.

This tradeoff appears in databases, caches, and distributed coordination systems.`
        },
        {
          id: 16,
          question: "How do you design for fault tolerance?",
          answer: `Common techniques:
- retries with backoff
- timeouts
- circuit breakers
- redundancy
- failover
- bulkheads
- health checks

The key is containing failures instead of assuming components never fail.`
        },
        {
          id: 17,
          question: "What is backpressure and why does it matter?",
          answer: `**Backpressure** is a mechanism to slow producers or shed load when consumers cannot keep up.

Without it, queues grow indefinitely and latency or failures spread through the system.`
        },
        {
          id: 18,
          question: "How do you design idempotent APIs?",
          answer: `Approaches include:
- idempotency keys
- unique request IDs
- deduplication
- safe retry semantics

This matters in payments, order creation, and distributed retries.`
        },
        {
          id: 19,
          question: "How do you handle data consistency across services?",
          answer: `Common tools:
- event-driven workflows
- sagas
- idempotent consumers
- outbox pattern
- compensating actions

Strong answers avoid assuming one global transaction for everything.`
        },
        {
          id: 20,
          question: "How do you choose between SQL and NoSQL in a system design interview?",
          answer: `Choose based on:
- data relationships
- transaction requirements
- consistency needs
- scale profile
- query patterns

**SQL** fits relational, transactional systems.
**NoSQL** fits flexible schemas, extreme scale, or access-pattern-driven models.

The best answer is often a reasoned tradeoff, not a blanket preference.`
        },
        {
          id: 21,
          question: "What are common database bottlenecks in system design?",
          answer: `Common bottlenecks:
- hot rows or hot partitions
- missing indexes
- too many reads on primary
- expensive joins or scans
- slow replication
- lock contention`
        },
        {
          id: 22,
          question: "How do you scale reads and writes differently?",
          answer: `For reads:
- caching
- read replicas
- denormalization
- search indexes

For writes:
- partitioning
- batching
- append-only logs
- asynchronous processing`
        },
        {
          id: 23,
          question: "How do you design observability into a system from the start?",
          answer: `A good design includes:
- structured logs
- metrics
- distributed tracing
- dashboards
- alerts
- correlation IDs

Observability should be built in, not added only after incidents.`
        },
        {
          id: 24,
          question: "How do you design multi-tenant systems?",
          answer: `Common tenancy models:
- shared database, shared schema
- shared database, separate schema
- separate database per tenant

Tradeoffs:
- isolation
- cost
- operational complexity`
        },
        {
          id: 25,
          question: "How do you design a system for high write throughput?",
          answer: `Common techniques:
- append-heavy writes
- partitioning
- batching
- async queues
- write-optimized storage
- reducing cross-node coordination`
        },
        {
          id: 26,
          question: "How do you design a system for low latency?",
          answer: `Common techniques:
- caching
- CDN usage
- minimizing remote calls
- colocating compute and data
- reducing serialization and payload size
- avoiding unnecessary synchronization`
        },
        {
          id: 27,
          question: "Scenario: Design an interview review platform for 1 million users where questions are grouped by category, users can bookmark items, search fast, and traffic spikes during evenings. How would you design it?",
          answer: `**Sample interview answer:**

"I would start by clarifying that this is a read-heavy system. Users mainly browse categories, open question detail pages, search by keyword, and bookmark questions. Admins add or edit content occasionally. Since traffic spikes in the evening, I want the read path to be cheap and horizontally scalable.

At a high level, I would use a client app talking to an API layer behind a load balancer. The API layer would call two main services: a **content service** for categories, questions, and answers, and a **user activity service** for bookmarks and maybe progress tracking later. For storage, I would use **SQL** as the primary database because categories, questions, users, and bookmarks are relational and need straightforward consistency. I would keep tables like \`categories\`, \`questions\`, \`users\`, and \`bookmarks(user_id, question_id)\`, with indexes on category slug, question slug, and the bookmark composite key.

For fast search, I would not rely only on SQL LIKE queries once the dataset grows. I would add **Elasticsearch or OpenSearch** and index question titles, answers, tags, and category names there. Search results can return question IDs, and then the content service can hydrate details if needed. For the main read path, I would place **Redis** in front of the content service to cache popular category pages, question detail payloads, and maybe the homepage category list. Since content changes are relatively rare, cache invalidation is manageable when admins update questions.

To handle the evening spikes, the app servers should stay stateless so they can autoscale horizontally. Static assets can go through a **CDN**, and if question pages are mostly public, I would cache as much as possible at the edge or in Redis. For bookmarks, I would keep writes in SQL because users expect that action to be correct immediately. Bookmark reads can still be optimized with indexes or a small user-specific cache if needed. I would also separate analytics from the critical path by sending click and search events to a queue, then processing them asynchronously so traffic spikes do not slow down user-facing requests.

The main bottlenecks I would watch are search latency, database read pressure, and cache miss storms during peak traffic. If the SQL database becomes read-heavy, I can add read replicas for content queries. If search traffic grows independently, I can scale the search cluster separately. The key tradeoff here is that **SQL is the right source of truth for bookmarks and content relationships**, while **search belongs in a specialized search engine**. I would keep analytics eventually consistent, but not bookmarks or admin content updates.

So the final design is: load balancer -> stateless API layer -> content service + bookmark service -> SQL as source of truth, Redis for hot reads, search engine for fast keyword lookup, and async analytics for non-critical events. That gives good performance, clean data ownership, and a path to scale without making the system unnecessarily complex too early."`
        },
        {
          id: 28,
          question: "How do you answer open-ended system design scenarios well in interviews?",
          answer: `A strong structure:
1. clarify requirements
2. estimate scale
3. propose a simple baseline
4. identify bottlenecks
5. evolve the design
6. discuss tradeoffs

The goal is not to jump to complexity too early.`
        },
        {
          id: 29,
          question: "What are common mistakes candidates make in system design interviews?",
          answer: `Common mistakes:
- skipping requirements clarification
- not discussing tradeoffs
- adding too much complexity too early
- ignoring bottlenecks
- forgetting observability and failure handling
- choosing databases without explaining why`
        },
        {
          id: 30,
          question: "How do you know when your system design answer is strong enough?",
          answer: `A strong answer usually has:
- clear requirements
- a coherent high-level architecture
- reasonable scaling assumptions
- identified bottlenecks
- tradeoff discussion
- awareness of failure modes

Interviewers are usually evaluating reasoning quality more than perfect completeness.`
        }
      ]
    }
  ]
};
