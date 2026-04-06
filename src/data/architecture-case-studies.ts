import { Category } from "./types";

export const architectureCaseStudiesCategory: Category = {
  id: "architecture-case-studies",
  name: "Architecture Case Studies",
  subtitle: "Interview Questions",
  icon: "casestudies",
  color: "#ec4899",
  sections: [
    {
      title: "Architecture Case Studies Questions for Freshers and Intermediate Levels",
      questions: [
        {
          id: 1,
          question: "How would you design a URL shortener at a high level?",
          answer: `A simple URL shortener needs:
- API to create short links
- database to map short code to original URL
- redirect service
- unique key generation
- basic analytics if needed

Key concerns:
- short code uniqueness
- redirect speed
- abuse prevention
- simple scaling path`
        },
        {
          id: 2,
          question: "What are the main components of a chat application architecture?",
          answer: `A chat application usually includes:
- client apps
- real-time connection layer such as WebSocket
- message service
- message storage
- presence tracking
- notification service

Important concerns include low latency, ordering, and offline delivery.`
        },
        {
          id: 3,
          question: "How would you think about designing an e-commerce platform?",
          answer: `A basic e-commerce architecture usually includes:
- product catalog
- search
- cart
- checkout
- payment integration
- order management
- inventory

Important concerns:
- data consistency for orders
- payment reliability
- inventory accuracy
- peak traffic handling`
        },
        {
          id: 4,
          question: "What are the key components of a video streaming platform?",
          answer: `A video platform often needs:
- content upload
- object storage
- transcoding pipeline
- metadata service
- CDN delivery
- user access control

Important tradeoffs include storage cost, transcoding cost, and global delivery performance.`
        },
        {
          id: 5,
          question: "How would you design a notification system?",
          answer: `A notification system usually includes:
- event source
- queue or stream
- template management
- user preferences
- delivery workers
- provider integrations for email, SMS, or push

Key concerns:
- retries
- idempotency
- rate limiting
- delivery tracking`
        },
        {
          id: 6,
          question: "What are the major building blocks of a ride-sharing system?",
          answer: `A ride-sharing system often includes:
- rider app
- driver app
- location tracking
- matching service
- trip management
- pricing
- payments

Real-time location updates and matching latency are major concerns.`
        },
        {
          id: 7,
          question: "How would you design a file upload system?",
          answer: `A file upload system commonly includes:
- upload API
- object storage
- metadata storage
- access control
- background processing for thumbnails or scanning

Common concerns:
- large file handling
- resumable uploads
- malware scanning
- storage cost`
        },
        {
          id: 8,
          question: "What is important when designing a social media feed?",
          answer: `A feed system usually needs:
- post creation
- timeline generation
- storage for posts and media
- ranking logic
- caching

Key architecture questions:
- push model vs pull model
- fan-out cost
- freshness vs ranking quality`
        },
        {
          id: 9,
          question: "How would you design a rate limiter service?",
          answer: `A rate limiter needs:
- request identity
- limit rules
- fast counter storage
- enforcement decision path

Common approaches:
- token bucket
- leaky bucket
- fixed window
- sliding window

It is often implemented close to the API gateway or service edge.`
        },
        {
          id: 10,
          question: "What are the core parts of a search system?",
          answer: `A search system usually includes:
- document ingestion
- indexing pipeline
- search index
- query service
- ranking or relevance logic

Important concerns:
- indexing delay
- query latency
- relevance quality
- update frequency`
        },
        {
          id: 11,
          question: "How would you design a payment processing workflow?",
          answer: `A payment workflow often includes:
- checkout service
- payment gateway integration
- order service
- ledger or transaction records
- idempotency protection
- webhook handling

Key concerns:
- duplicate charge prevention
- failure recovery
- auditing
- consistency of payment status`
        },
        {
          id: 12,
          question: "What are the main concerns in designing a booking system?",
          answer: `A booking system usually needs:
- availability lookup
- reservation holding
- payment or confirmation
- final booking record

Major concern:
- preventing double booking under concurrency

This usually requires careful locking, transactional design, or short-lived reservation holds.`
        },
        {
          id: 13,
          question: "How would you design a basic analytics ingestion system?",
          answer: `A simple analytics pipeline often includes:
- event producers
- ingestion API or broker
- durable event storage
- processing jobs
- reporting or dashboard storage

Important concerns:
- high write throughput
- late or duplicate events
- cost-efficient storage`
        },
        {
          id: 14,
          question: "What is important in designing a caching-heavy system?",
          answer: `Important concerns include:
- what to cache
- cache invalidation
- hit rate
- consistency expectations
- fallback behavior on cache miss

Caching improves performance, but poor invalidation can create correctness problems.`
        },
        {
          id: 15,
          question: "How would you approach designing a login system?",
          answer: `A login system usually includes:
- identity store
- password or federated auth flow
- MFA support
- session or token management
- brute-force protection

Security is the main concern, but reliability and usability matter too.`
        },
        {
          id: 16,
          question: "What are the key parts of a recommendation system at a high level?",
          answer: `A recommendation system often needs:
- user behavior data
- candidate generation
- ranking logic
- serving API
- feedback loop

Key tradeoffs:
- relevance vs latency
- freshness vs compute cost`
        },
        {
          id: 17,
          question: "How would you design a background job processing system?",
          answer: `A background job system usually includes:
- job producer
- queue
- workers
- retry logic
- dead-letter handling
- monitoring

Key concerns:
- idempotency
- retry storms
- workload spikes`
        },
        {
          id: 18,
          question: "What is important when designing a content moderation system?",
          answer: `A content moderation system may include:
- upload or content ingestion
- policy checks
- automated classifiers
- manual review workflow
- audit records

Important concerns:
- false positives vs false negatives
- review latency
- policy traceability`
        },
        {
          id: 19,
          question: "How would you think about designing a leaderboard system?",
          answer: `A leaderboard system usually needs:
- score updates
- sorted ranking storage
- read API for top results and neighbors

Important concerns:
- update frequency
- ranking accuracy
- seasonal resets
- anti-cheat protections`
        },
        {
          id: 20,
          question: "What are the main design concerns for a ticketing system?",
          answer: `A ticketing system often needs:
- inventory management
- search and selection
- seat reservation
- payment
- confirmation

Major concern:
- preventing overselling during high demand

Concurrency and fairness become very important.`
        },
        {
          id: 21,
          question: "How would you design a URL redirect service with analytics?",
          answer: `The system would likely include:
- redirect endpoint
- mapping database
- analytics event collection
- reporting storage

The redirect path should stay fast and lightweight, while analytics can often be processed asynchronously.`
        },
        {
          id: 22,
          question: "What is important in designing an email delivery platform?",
          answer: `An email platform often needs:
- template service
- recipient list management
- delivery workers
- provider integration
- bounce and complaint handling

Important concerns:
- rate limits
- retries
- reputation management
- unsubscribe compliance`
        },
        {
          id: 23,
          question: "How would you design a metrics collection system?",
          answer: `A metrics system usually includes:
- instrumented services
- metric collection agents or endpoints
- time-series storage
- query layer
- dashboards and alerts

Important concerns:
- cardinality
- storage cost
- ingestion rate
- query performance`
        },
        {
          id: 24,
          question: "How would you think about a shared document collaboration system?",
          answer: `A collaborative document system often needs:
- document storage
- real-time sync
- edit conflict handling
- version history
- access control

Important concerns:
- low-latency updates
- conflict resolution
- consistency across clients`
        },
        {
          id: 25,
          question: "What is important when designing an API gateway layer?",
          answer: `An API gateway often handles:
- routing
- authentication
- rate limiting
- logging
- request aggregation

Important concerns:
- avoiding a bottleneck
- high availability
- consistent policy enforcement`
        },
        {
          id: 26,
          question: "How would you design a polling-based notification checker and when would you avoid it?",
          answer: `A polling-based design is simple:
- client asks for new updates periodically
- server returns any new items since last check

It is easy to implement, but less efficient than push-based approaches for real-time systems because it creates repeated empty requests.`
        },
        {
          id: 27,
          question: "What are the main concerns in a fraud detection architecture?",
          answer: `A fraud system often needs:
- event collection
- rules engine
- risk scoring
- review workflow
- audit history

Important tradeoffs:
- false positives vs fraud prevention
- real-time decision speed vs model complexity`
        },
        {
          id: 28,
          question: "How would you design a simple webhook delivery platform?",
          answer: `A webhook platform usually includes:
- event source
- delivery queue
- HTTP delivery workers
- retry logic
- signature verification
- delivery logs

Key concerns:
- retries
- backoff
- idempotency
- handling slow endpoints`
        },
        {
          id: 29,
          question: "How should you answer case-study architecture questions in interviews?",
          answer: `A good answer usually:
- clarifies requirements
- estimates scale
- identifies key constraints
- proposes a high-level design
- explains tradeoffs
- discusses bottlenecks and failure modes

Interviewers usually value reasoning more than a perfect diagram.`
        },
        {
          id: 30,
          question: "What is the most common mistake in architecture case-study answers?",
          answer: `A common mistake is jumping into components without first clarifying:
- requirements
- scale
- constraints
- priorities

Architecture answers are stronger when they are driven by problem context rather than generic patterns.`
        }
      ]
    },
    {
      title: "Architecture Case Studies Questions for Experienced Levels",
      questions: [
        {
          id: 1,
          question: "How would you redesign a monolith that is failing under scale?",
          answer: `Start by identifying the real bottlenecks:
- database pressure
- hot code paths
- deployment pain
- team coordination issues

Often the first steps are:
- modularize internally
- improve observability
- isolate hot paths
- extract only where boundaries are clear

A full rewrite is rarely the best first move.`
        },
        {
          id: 2,
          question: "How would you design a multi-tenant SaaS platform?",
          answer: `A multi-tenant design must consider:
- tenant isolation
- identity and access control
- data partitioning strategy
- customization model
- noisy-neighbor protection

Key tradeoff:
- shared infrastructure efficiency vs stronger tenant isolation`
        },
        {
          id: 3,
          question: "How would you handle a flash-sale ticketing architecture?",
          answer: `A flash-sale system needs:
- fast inventory checks
- strong concurrency control
- queueing or virtual waiting room
- reservation holds
- payment timeout handling

The main challenge is preventing oversell while surviving extreme bursts of traffic.`
        },
        {
          id: 4,
          question: "How would you design a global feed system for millions of users?",
          answer: `Important decisions include:
- fan-out on write vs fan-out on read
- ranking strategy
- caching model
- media delivery
- read latency targets

The right design depends on follower distribution, post frequency, and freshness requirements.`
        },
        {
          id: 5,
          question: "How would you design a large-scale chat system with offline delivery?",
          answer: `The system usually needs:
- persistent message storage
- real-time delivery path
- per-conversation ordering strategy
- unread state tracking
- push notifications for offline users

Important tradeoffs:
- latency vs durability
- strict ordering vs scalability
- fan-out cost for large groups`
        },
        {
          id: 6,
          question: "How would you architect a payments platform that must be auditable and resilient?",
          answer: `Key design concerns:
- idempotent payment initiation
- ledger-quality transaction records
- reconciliation workflows
- webhook reliability
- auditability
- secure secret handling

The architecture must prioritize correctness and traceability over pure throughput.`
        },
        {
          id: 7,
          question: "How would you approach a migration from on-premises to cloud for a critical system?",
          answer: `A safe migration often includes:
- dependency mapping
- data migration planning
- environment parity where possible
- phased cutover
- rollback planning
- performance and cost validation

The architecture plan must include not only target design, but also migration risk management.`
        },
        {
          id: 8,
          question: "How would you modernize a legacy batch system into event-driven workflows?",
          answer: `The first step is understanding:
- current business flow
- timing requirements
- data dependencies
- failure handling

Then you can introduce:
- event publication
- asynchronous consumers
- idempotent processing
- replay or recovery design

The challenge is usually operational and consistency complexity, not just code changes.`
        },
        {
          id: 9,
          question: "How would you design an image or video processing pipeline at scale?",
          answer: `A strong design often includes:
- object storage for originals and outputs
- event-driven ingestion
- job queue
- worker fleet
- retry and dead-letter handling
- metadata tracking

Important concerns:
- large file size
- bursty traffic
- processing cost
- idempotent reprocessing`
        },
        {
          id: 10,
          question: "How would you handle cross-service consistency in an order workflow?",
          answer: `A typical order workflow may span:
- cart
- inventory
- payment
- order confirmation
- notification

Strong answers usually discuss:
- local transactions per service
- saga or orchestration patterns
- compensating actions
- idempotency

Global distributed transactions are often avoided in practice.`
        },
        {
          id: 11,
          question: "How would you design a search platform that supports frequent updates and low-latency queries?",
          answer: `The architecture often separates:
- write path for ingestion and indexing
- read path for querying

Important concerns:
- indexing lag
- query latency
- relevance tuning
- shard sizing
- reindex strategy

This is a case where write and read optimization often differ significantly.`
        },
        {
          id: 12,
          question: "How would you architect a recommendation system that needs both online and offline processing?",
          answer: `A common design separates:
- offline pipelines for training or feature generation
- online serving for low-latency recommendations

Important tradeoffs:
- freshness vs compute cost
- online complexity vs offline batch accuracy
- candidate generation vs ranking latency`
        },
        {
          id: 13,
          question: "How would you design a resilient webhook platform for third-party integrations?",
          answer: `Important elements:
- durable event queue
- signed payloads
- retry with backoff
- idempotency support
- endpoint health visibility
- dead-letter queue

Third-party endpoints are unreliable, so delivery resilience is the core challenge.`
        },
        {
          id: 14,
          question: "How would you design a real-time location tracking system?",
          answer: `The system may need:
- frequent location updates
- geospatial indexing
- current-state store
- event stream for downstream consumers
- retention strategy for historical data

Tradeoffs:
- update frequency vs battery/network cost
- freshness vs storage volume`
        },
        {
          id: 15,
          question: "How would you approach architecture for a regulated healthcare or fintech platform?",
          answer: `Strong answers usually include:
- access control
- encryption
- audit trails
- data retention policy
- incident response
- compliance-aware infrastructure choices

The design must satisfy both product needs and regulatory obligations.`
        },
        {
          id: 16,
          question: "How would you design an internal platform used by many engineering teams?",
          answer: `An internal platform should focus on:
- standardized workflows
- self-service capabilities
- guardrails
- observability
- documentation
- multi-team reliability

The goal is to reduce repeated effort without becoming a bottleneck.`
        },
        {
          id: 17,
          question: "How would you redesign a system suffering from database bottlenecks?",
          answer: `Start by measuring the exact issue:
- slow queries
- lock contention
- connection pool exhaustion
- poor indexing
- data model mismatch

Potential architectural responses:
- caching
- read replicas
- query redesign
- partitioning
- asynchronous workflows

Do not jump to sharding before confirming simpler fixes are insufficient.`
        },
        {
          id: 18,
          question: "How would you think about architecture for an API platform exposed to external customers?",
          answer: `Important concerns:
- authentication and authorization
- versioning
- rate limiting
- tenant isolation
- observability
- backward compatibility
- developer experience

External APIs are products, not only technical interfaces.`
        },
        {
          id: 19,
          question: "How would you design a system that must survive a regional outage?",
          answer: `A regional-outage-tolerant system often needs:
- multi-region deployment
- replicated data strategy
- failover routing
- clear consistency model
- tested disaster recovery procedures

This architecture is expensive and complex, so it should be justified by real recovery requirements.`
        },
        {
          id: 20,
          question: "How would you approach a system with strict low-latency requirements and expensive downstream calls?",
          answer: `Common strategies:
- caching
- precomputation
- reducing fan-out
- request hedging only when appropriate
- asynchronous non-critical work
- data locality improvements

The design must focus on tail latency, not only average latency.`
        },
        {
          id: 21,
          question: "How would you redesign a brittle microservices system with too much operational complexity?",
          answer: `A strong answer may include:
- reducing unnecessary service boundaries
- standardizing platform concerns
- simplifying synchronous call chains
- improving ownership and observability
- reconsidering whether some services should merge

Not every distributed design deserves to stay distributed.`
        },
        {
          id: 22,
          question: "How would you design a data archival and retention strategy for a growing platform?",
          answer: `Important considerations:
- hot vs cold data
- compliance retention rules
- restore requirements
- storage cost
- query needs on older data

The right strategy often includes lifecycle policies, archive storage, and clear restore expectations.`
        },
        {
          id: 23,
          question: "How would you design an observability platform for many services across teams?",
          answer: `A shared observability platform often needs:
- standardized telemetry collection
- centralized logs, metrics, and traces
- correlation support
- team ownership boundaries
- alerting policy
- cost controls for telemetry volume

The challenge is making observability both usable and governable at scale.`
        },
        {
          id: 24,
          question: "How would you think about an architecture review for a system proposal?",
          answer: `A good review looks at:
- requirements and assumptions
- failure modes
- scaling path
- security and compliance
- observability
- operational burden
- tradeoffs and alternatives

The goal is not only to criticize, but to expose hidden risks early.`
        },
        {
          id: 25,
          question: "How would you design a platform for scheduled jobs used across many teams?",
          answer: `The platform may need:
- job definition model
- scheduler
- worker execution
- retries
- access control
- observability
- idempotency guidance

The hard part is often multi-tenant fairness and safe operational controls, not just cron syntax.`
        },
        {
          id: 26,
          question: "How would you handle a case study where requirements are ambiguous?",
          answer: `A strong approach is to:
- state assumptions clearly
- ask clarifying questions
- propose a baseline design
- explain how the design would change under different assumptions

Ambiguity is normal in architecture work. The key is making uncertainty explicit.`
        },
        {
          id: 27,
          question: "How would you think about architecture for a platform team serving both speed and governance?",
          answer: `The platform should provide:
- self-service paths
- secure defaults
- standard templates
- observability and policy guardrails
- room for exceptions with review

The core tradeoff is freedom for product teams versus consistency and risk control.`
        },
        {
          id: 28,
          question: "How do strong candidates compare multiple architecture options in case studies?",
          answer: `Strong candidates usually compare options by:
- complexity
- cost
- scalability
- reliability
- team fit
- migration feasibility

The comparison is stronger when tied directly to the stated requirements and constraints.`
        },
        {
          id: 29,
          question: "What distinguishes a strong senior architecture case-study answer?",
          answer: `A strong answer usually:
- drives from requirements
- makes assumptions explicit
- identifies key tradeoffs
- considers failure and operations
- chooses a practical path, not just an idealized one

Interviewers usually look for judgment, prioritization, and clarity under ambiguity.`
        },
        {
          id: 30,
          question: "What is the biggest mistake in senior-level case-study architecture answers?",
          answer: `A common mistake is proposing an impressive but unjustified architecture.

Senior answers are stronger when they:
- avoid overengineering
- justify complexity
- respect migration reality
- discuss tradeoffs honestly

The best answer is usually the simplest one that fits the real constraints.`
        }
      ]
    }
  ]
};
