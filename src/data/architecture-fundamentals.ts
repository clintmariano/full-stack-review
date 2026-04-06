import { Category } from "./types";

export const architectureFundamentalsCategory: Category = {
  id: "architecture-fundamentals",
  name: "Architecture Fundamentals",
  subtitle: "Interview Questions",
  icon: "architecture",
  color: "#8b5cf6",
  sections: [
    {
      title: "Architecture Fundamentals Questions for Freshers and Intermediate Levels",
      questions: [
        {
          id: 1,
          question: "What is software architecture?",
          answer: `**Software architecture** is the high-level structure of a system.

It defines:
- major components
- how they interact
- data flow
- key technical decisions
- important tradeoffs

Architecture is about the system shape, not just individual classes or functions.`
        },
        {
          id: 2,
          question: "Why is software architecture important?",
          answer: `Architecture matters because it affects how easy the system is to build, change, scale, secure, and operate.

Good architecture helps with:
- maintainability
- scalability
- reliability
- team productivity
- lower long-term cost`
        },
        {
          id: 3,
          question: "What is the difference between architecture and design?",
          answer: `**Architecture** focuses on high-level structure and major system decisions.
**Design** focuses on lower-level implementation details inside that structure.

\`\`\`
Architecture = services, layers, databases, communication style
Design = classes, methods, patterns, algorithms
\`\`\`

Both matter, but architecture sets the broader direction.`
        },
        {
          id: 4,
          question: "What are functional requirements and non-functional requirements?",
          answer: `**Functional requirements** describe what the system should do.
Example: "Users can place orders."

**Non-functional requirements** describe how well the system should work.
Examples:
- performance
- scalability
- availability
- security
- maintainability

Strong architecture decisions are often driven by non-functional requirements.`
        },
        {
          id: 5,
          question: "What are the key quality attributes in architecture?",
          answer: `Common **quality attributes** include:
- scalability
- availability
- reliability
- performance
- security
- maintainability
- testability
- modifiability

Architects usually make tradeoffs between these rather than maximizing all of them at once.`
        },
        {
          id: 6,
          question: "What is a monolithic architecture?",
          answer: `A **monolithic architecture** is an application built and deployed as one unit.

Advantages:
- simple to start
- easier local development
- simpler deployment early on

Disadvantages:
- harder to scale parts independently
- tighter coupling over time
- slower deployments in large systems`
        },
        {
          id: 7,
          question: "What is microservices architecture?",
          answer: `**Microservices** is an architecture where an application is split into smaller, independently deployable services.

Each service usually owns:
- a business capability
- its own logic
- often its own data store

It improves independent deployment and team autonomy, but adds distributed-system complexity.`
        },
        {
          id: 8,
          question: "What is the difference between monolith and microservices?",
          answer: `**Monolith**
- one deployable unit
- simpler operations at first
- easier cross-module calls

**Microservices**
- many deployable units
- better independent scaling and releases
- more network, monitoring, and consistency challenges

Microservices are not automatically better. They are useful when system and team complexity justify them.`
        },
        {
          id: 9,
          question: "What is layered architecture?",
          answer: `**Layered architecture** organizes code into layers with clear responsibilities.

Common layers:
- presentation
- business/service
- data access
- database

It is popular because it is easy to understand and works well for many business applications.`
        },
        {
          id: 10,
          question: "What is separation of concerns?",
          answer: `**Separation of concerns** means different parts of the system should handle different responsibilities.

Example:
- controller handles HTTP
- service handles business rules
- repository handles persistence

This improves readability, maintainability, and testability.`
        },
        {
          id: 11,
          question: "What is loose coupling?",
          answer: `**Loose coupling** means components depend on each other as little as possible.

Benefits:
- easier changes
- easier testing
- better reuse
- fewer side effects

Interfaces, events, and dependency injection are common ways to reduce coupling.`
        },
        {
          id: 12,
          question: "What is high cohesion?",
          answer: `**High cohesion** means related responsibilities stay together in the same component.

A cohesive module does one thing well.

Example:
- a payment service should focus on payment logic
- it should not also handle unrelated reporting or email formatting`
        },
        {
          id: 13,
          question: "What is stateless architecture?",
          answer: `A **stateless** component does not store client-specific session state in memory between requests.

Benefits:
- easier horizontal scaling
- simpler failover
- predictable behavior

Stateless services are common in modern web and cloud architectures.`
        },
        {
          id: 14,
          question: "What is stateful architecture?",
          answer: `A **stateful** component keeps session or workflow state across requests.

Examples:
- in-memory user sessions
- long-lived connection state

Stateful systems can be useful, but they are harder to scale and recover than stateless ones.`
        },
        {
          id: 15,
          question: "What is scalability in architecture?",
          answer: `**Scalability** is the ability of a system to handle growth in traffic, users, or data without failing or degrading badly.

Common approaches:
- vertical scaling
- horizontal scaling
- caching
- partitioning
- asynchronous processing`
        },
        {
          id: 16,
          question: "What is the difference between vertical and horizontal scaling?",
          answer: `**Vertical scaling**
- increase resources on one machine
- simpler initially
- limited by hardware

**Horizontal scaling**
- add more machines or instances
- supports larger growth
- needs load balancing and distributed coordination`
        },
        {
          id: 17,
          question: "What is availability?",
          answer: `**Availability** is the percentage of time a system is operational and accessible.

It is improved by:
- redundancy
- failover
- health checks
- multiple instances
- resilient infrastructure`
        },
        {
          id: 18,
          question: "What is reliability?",
          answer: `**Reliability** means a system behaves correctly and consistently over time.

A reliable system:
- produces correct results
- handles failures gracefully
- avoids data corruption
- recovers predictably`
        },
        {
          id: 19,
          question: "What is fault tolerance?",
          answer: `**Fault tolerance** is the ability of a system to continue working even when some components fail.

Examples:
- retrying temporary failures
- using redundant nodes
- failing over to a replica
- isolating failures so they do not spread`
        },
        {
          id: 20,
          question: "What is a single point of failure?",
          answer: `A **single point of failure (SPOF)** is a component whose failure can bring down the whole system.

Examples:
- one database server
- one load balancer
- one shared credential service

Architectures should identify and reduce SPOFs in critical paths.`
        },
        {
          id: 21,
          question: "What is redundancy in architecture?",
          answer: `**Redundancy** means having extra components so the system can continue operating when one fails.

Examples:
- multiple app instances
- replicated databases
- multi-zone deployment

Redundancy improves availability, but it increases cost and coordination complexity.`
        },
        {
          id: 22,
          question: "What is caching and why is it used?",
          answer: `**Caching** stores frequently used data closer to where it is needed.

Benefits:
- lower latency
- reduced backend load
- better throughput

Common cache locations:
- browser
- CDN
- application
- database`
        },
        {
          id: 23,
          question: "What is load balancing?",
          answer: `A **load balancer** distributes incoming requests across multiple servers.

It helps with:
- better resource usage
- high availability
- horizontal scaling
- improved resilience

Common algorithms include round robin and least connections.`
        },
        {
          id: 24,
          question: "What is asynchronous communication?",
          answer: `**Asynchronous communication** means the sender does not wait for the receiver to finish processing immediately.

Examples:
- message queues
- event streaming
- background jobs

It improves decoupling and resilience, especially during traffic spikes.`
        },
        {
          id: 25,
          question: "What is synchronous communication?",
          answer: `**Synchronous communication** means one component waits for another component to respond before continuing.

Example:
- a service calls another service over HTTP and waits for the result

It is simple to reason about, but it can increase latency and coupling.`
        },
        {
          id: 26,
          question: "What is an API gateway?",
          answer: `An **API gateway** is a single entry point for clients calling backend services.

It can handle:
- routing
- authentication
- rate limiting
- request aggregation
- logging

It is common in microservices-based systems.`
        },
        {
          id: 27,
          question: "What is a database in system architecture responsible for?",
          answer: `A **database** stores and manages application data.

Architecturally, it is responsible for:
- persistence
- querying
- consistency rules
- transactions
- recovery

Choosing the right data model and access pattern is a key architecture decision.`
        },
        {
          id: 28,
          question: "What is the difference between SQL and NoSQL from an architecture perspective?",
          answer: `**SQL databases**
- structured relational model
- strong querying capabilities
- strong consistency patterns

**NoSQL databases**
- flexible data models
- often easier horizontal scale for certain workloads
- optimized for specific access patterns

The right choice depends on data shape, consistency needs, and scaling requirements.`
        },
        {
          id: 29,
          question: "What is an architectural tradeoff?",
          answer: `An **architectural tradeoff** means improving one quality often makes another area worse or more expensive.

Examples:
- stronger consistency vs lower availability
- better security vs more complexity
- faster delivery vs cleaner long-term design

Good architecture is about making conscious tradeoffs, not avoiding them.`
        },
        {
          id: 30,
          question: "What does a software architect typically do?",
          answer: `A **software architect** helps shape important system decisions.

Typical responsibilities:
- understand requirements
- choose architectural style
- define major components and boundaries
- guide technical tradeoffs
- address quality attributes
- align teams on technical direction

A strong architect balances business goals with engineering realities.`
        }
      ]
    },
    {
      title: "Architecture Fundamentals Questions for Experienced Levels",
      questions: [
        {
          id: 1,
          question: "How do you evaluate whether a system needs a monolith, modular monolith, or microservices?",
          answer: `The choice depends on:
- domain complexity
- team size and structure
- deployment independence needs
- scaling characteristics
- operational maturity

**Monolith** works well early when speed and simplicity matter.
**Modular monolith** is often a strong middle ground.
**Microservices** make sense when bounded contexts and independent release cycles are genuinely important.`
        },
        {
          id: 2,
          question: "What is a modular monolith and why is it important?",
          answer: `A **modular monolith** is a single deployable application with strong internal module boundaries.

Benefits:
- simpler deployment than microservices
- less network complexity
- easier local development
- better path to future extraction if needed

It is important because many systems need better boundaries, not more distributed complexity.`
        },
        {
          id: 3,
          question: "What are bounded contexts in architecture?",
          answer: `A **bounded context** is a domain-driven design concept that defines a clear boundary where a specific model and vocabulary apply.

It helps with:
- reducing ambiguity
- setting service boundaries
- aligning teams with business domains

Poorly chosen boundaries create coupling and constant cross-team friction.`
        },
        {
          id: 4,
          question: "How do you identify good service boundaries?",
          answer: `Good service boundaries usually align with:
- business capabilities
- ownership boundaries
- change patterns
- data ownership
- transactional consistency needs

Bad boundaries often come from splitting by technical layer rather than business behavior.`
        },
        {
          id: 5,
          question: "What does data ownership mean in distributed architecture?",
          answer: `**Data ownership** means one service is the source of truth for a specific dataset or business capability.

This reduces:
- shared-database coupling
- unclear write responsibility
- cross-service schema breakage

Other services should usually integrate through APIs, events, or replicated read models instead of writing directly into that data store.`
        },
        {
          id: 6,
          question: "Why is a shared database across services often considered an anti-pattern?",
          answer: `A shared database across services creates tight coupling through schema, queries, and release timing.

Typical problems:
- one team breaks another team
- hidden cross-service dependencies
- difficult ownership
- blocked independent deployments

It may be acceptable temporarily, but it weakens service autonomy.`
        },
        {
          id: 7,
          question: "How do you manage consistency in distributed systems?",
          answer: `Distributed consistency is managed by choosing the right model for each workflow.

Common approaches:
- strong consistency inside a local transaction
- eventual consistency across services
- idempotent consumers
- compensating actions
- clear ownership of writes

The architecture should match the business tolerance for temporary inconsistency.`
        },
        {
          id: 8,
          question: "What is eventual consistency and when is it acceptable?",
          answer: `**Eventual consistency** means replicas or dependent systems may be temporarily out of sync, but they converge over time.

It is acceptable when:
- short-lived staleness is okay
- business workflows tolerate delay
- availability matters more than immediate global consistency

It is risky for flows like critical financial balances unless carefully controlled.`
        },
        {
          id: 9,
          question: "What is the CAP theorem and how should architects use it?",
          answer: `CAP says that during a network partition, a distributed system must choose between:
- consistency
- availability

while partition tolerance is unavoidable in distributed systems.

Architects should use CAP to reason about failure behavior, not as a slogan for choosing databases. The real question is what the system should do when communication breaks.`
        },
        {
          id: 10,
          question: "What is the difference between consistency and availability tradeoffs in real systems?",
          answer: `If you prefer **consistency**, some operations may fail or block during partitions.
If you prefer **availability**, some reads or writes may return stale or divergent results temporarily.

Real architecture work is deciding:
- which operations need stronger guarantees
- which ones can tolerate delay
- what failure mode is safer for the business`
        },
        {
          id: 11,
          question: "What is a saga pattern?",
          answer: `A **saga** coordinates a business transaction across multiple services using a sequence of local transactions.

If one step fails, compensating actions are used instead of a global distributed rollback.

Sagas are useful when:
- services own separate databases
- workflows span multiple domains
- two-phase commit is too costly or impractical`
        },
        {
          id: 12,
          question: "What is idempotency and why is it critical in distributed systems?",
          answer: `**Idempotency** means repeating the same operation does not produce unintended extra side effects.

It is critical because distributed systems often have:
- retries
- duplicate messages
- timeout uncertainty

Examples:
- idempotency keys for payments
- deduplication for event processing`
        },
        {
          id: 13,
          question: "How do you design for failure in a distributed system?",
          answer: `Designing for failure means assuming components will fail and containing the impact.

Common techniques:
- timeouts
- retries with backoff
- circuit breakers
- bulkheads
- fallback behavior
- health checks
- graceful degradation

The goal is controlled failure, not perfect uptime.`
        },
        {
          id: 14,
          question: "What is graceful degradation?",
          answer: `**Graceful degradation** means the system keeps delivering partial value when some dependencies fail.

Examples:
- show cached data if a recommendation service is down
- disable a non-critical feature while checkout still works

This is often better than full outage for user experience and business continuity.`
        },
        {
          id: 15,
          question: "What is backpressure and why does it matter?",
          answer: `**Backpressure** is a mechanism for slowing producers when consumers cannot keep up.

It matters because without it, systems can fail through:
- queue buildup
- memory pressure
- thread exhaustion
- cascading latency

Architects need to think about flow control, not just peak throughput.`
        },
        {
          id: 16,
          question: "How do you choose between synchronous APIs and event-driven communication?",
          answer: `Use **synchronous APIs** when:
- immediate response is required
- the caller needs a direct result
- workflows are simple

Use **events or async messaging** when:
- decoupling matters
- workflows can be delayed
- spikes need buffering
- multiple consumers react independently

Many strong systems use both, depending on the interaction.`
        },
        {
          id: 17,
          question: "What is CQRS and when is it useful?",
          answer: `**CQRS (Command Query Responsibility Segregation)** separates write models from read models.

It is useful when:
- read and write workloads differ significantly
- complex reporting needs different shapes than transactional writes
- scaling patterns differ

It adds complexity, so it should be used for clear benefits rather than as default architecture.`
        },
        {
          id: 18,
          question: "What is event sourcing and what are its tradeoffs?",
          answer: `**Event sourcing** stores state changes as a sequence of events instead of only storing the latest state.

Benefits:
- complete audit history
- temporal reconstruction
- natural fit with some domain models

Tradeoffs:
- more complex debugging
- schema evolution challenges
- replay and projection complexity

It is powerful, but not a universal default.`
        },
        {
          id: 19,
          question: "How do you approach scalability bottlenecks architecturally?",
          answer: `Start by identifying the real bottleneck using measurement, then choose the narrowest effective fix.

Possible actions:
- add caching
- partition data
- remove chatty calls
- queue expensive work
- scale stateless services horizontally
- optimize slow queries

Architecture should follow evidence, not intuition alone.`
        },
        {
          id: 20,
          question: "How do architects think about latency vs throughput?",
          answer: `**Latency** is how long one request takes.
**Throughput** is how much total work the system handles over time.

Improving one does not always improve the other.

Examples:
- batching can improve throughput but hurt latency
- strong consistency can increase latency
- queues can protect throughput during spikes but delay completion`
        },
        {
          id: 21,
          question: "What is the difference between scalability and elasticity?",
          answer: `**Scalability** is the ability to handle growth.
**Elasticity** is the ability to add or remove resources dynamically as demand changes.

Cloud-native architectures often aim for both:
- scalable under sustained growth
- elastic under fluctuating load`
        },
        {
          id: 22,
          question: "How do you design for observability?",
          answer: `Designing for observability means making system behavior diagnosable from the outside.

Key pillars:
- logs
- metrics
- traces

Important practices:
- correlation IDs
- structured logging
- meaningful SLIs and alerts
- instrumentation around critical flows

If a system cannot be understood in production, the architecture is incomplete.`
        },
        {
          id: 23,
          question: "What is an SLI, SLO, and SLA?",
          answer: `**SLI**: a measured indicator such as latency or error rate
**SLO**: the target for that indicator
**SLA**: the contractual or business commitment tied to it

Example:
- SLI: request success rate
- SLO: 99.9% monthly success
- SLA: customer remedy if target is not met`
        },
        {
          id: 24,
          question: "How do you handle security as an architectural concern?",
          answer: `Security should be built into the architecture, not added at the end.

Key areas:
- authentication and authorization
- encryption in transit and at rest
- secret management
- network boundaries
- least privilege
- auditability
- threat modeling

Strong architecture treats security as a system property.`
        },
        {
          id: 25,
          question: "What is zero trust in architectural terms?",
          answer: `**Zero trust** means no actor or network location is trusted automatically.

Architectural implications:
- strong identity verification
- least-privilege access
- explicit authorization
- service-to-service authentication
- continuous validation

It is especially relevant in cloud and distributed environments.`
        },
        {
          id: 26,
          question: "How do you make architecture decisions explicit and reviewable?",
          answer: `A common approach is using **Architecture Decision Records (ADRs)**.

An ADR usually captures:
- context
- decision
- alternatives considered
- consequences

This helps teams understand why a decision was made and when it should be revisited.`
        },
        {
          id: 27,
          question: "What is technical debt from an architectural perspective?",
          answer: `**Technical debt** is the future cost created by choosing a quicker or weaker solution today.

Architectural debt often appears as:
- poor boundaries
- duplicated integration logic
- fragile deployments
- tight coupling
- missing observability

Not all debt is bad, but unmanaged debt slows the whole organization.`
        },
        {
          id: 28,
          question: "How do you evolve architecture safely over time?",
          answer: `Safe evolution usually means incremental change rather than large rewrites.

Common techniques:
- strangler pattern
- parallel run and cutover
- feature flags
- contract testing
- backward-compatible schema changes
- observability during migration

The best architecture plan is one the organization can actually execute.`
        },
        {
          id: 29,
          question: "What is the strangler pattern?",
          answer: `The **strangler pattern** replaces parts of an old system gradually by routing selected functionality to new components over time.

Benefits:
- lower migration risk
- incremental delivery
- easier rollback on small slices

It is commonly used to modernize legacy monoliths.`
        },
        {
          id: 30,
          question: "What distinguishes a strong senior-level architecture answer in interviews?",
          answer: `A strong senior answer usually:
- starts from requirements and constraints
- names tradeoffs clearly
- considers failure modes
- explains operational impact
- addresses security and observability
- avoids overengineering
- chooses the simplest architecture that meets the real needs

Interviewers usually look for judgment, not just terminology.`
        }
      ]
    }
  ]
};
