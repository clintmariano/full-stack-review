import { Category } from "./types";

export const microservicesCategory: Category = {
  id: "microservices",
  name: "Microservices",
  subtitle: "Interview Questions",
  icon: "microservices",
  color: "#ff6b6b",
  sections: [
    {
      title: "Microservices Questions for Freshers and Intermediate Levels",
      questions: [
        {
          id: 1,
          question: "What are microservices and how do they differ from monolithic architecture?",
          answer: `**Microservices** is an architecture where an application is split into small, independently deployable services.

**Compared to monoliths:**
- each service has a focused responsibility
- services can be deployed independently
- teams can scale and release separately
- failures can be isolated better

**Tradeoff:** microservices improve flexibility, but add distributed-system complexity.`
        },
        {
          id: 2,
          question: "What are the main characteristics of microservices?",
          answer: `Common characteristics:
- small, business-focused services
- independent deployment
- decentralized data ownership
- API-based communication
- team autonomy
- fault isolation

A good microservice is usually aligned to a business capability, not just a technical layer.`
        },
        {
          id: 3,
          question: "What is the single responsibility principle in microservices?",
          answer: `In microservices, it means each service should own one business capability clearly.

Examples:
- User Service
- Order Service
- Payment Service

If a service handles too many unrelated responsibilities, it becomes a mini-monolith.`
        },
        {
          id: 4,
          question: "What is the difference between synchronous and asynchronous communication in microservices?",
          answer: `**Synchronous communication**
- request/response
- caller waits for reply
- examples: REST, gRPC

**Asynchronous communication**
- message/event-driven
- caller does not wait immediately
- examples: Kafka, RabbitMQ

Synchronous is simpler to reason about. Asynchronous is often better for decoupling and resilience.`
        },
        {
          id: 5,
          question: "What are common communication protocols used in microservices?",
          answer: `Common protocols include:
- REST over HTTP
- gRPC
- messaging with Kafka, RabbitMQ, SQS

**REST** is common and simple.
**gRPC** is efficient for internal service-to-service calls.
**Messaging** is useful for asynchronous workflows and event-driven systems.`
        },
        {
          id: 6,
          question: "What is an API Gateway in microservices?",
          answer: `An **API Gateway** is the entry point for client requests into a microservices system.

It can handle:
- routing
- authentication
- rate limiting
- aggregation
- logging

It hides internal service topology from clients and centralizes cross-cutting concerns.`
        },
        {
          id: 7,
          question: "What is service discovery?",
          answer: `**Service discovery** allows services to find each other dynamically without hardcoding network locations.

Approaches:
- client-side discovery
- server-side discovery

Examples:
- Eureka
- Consul
- Kubernetes service discovery

This is important because instances can scale up or down dynamically.`
        },
        {
          id: 8,
          question: "What is the difference between orchestration and choreography in microservices?",
          answer: `**Orchestration**
- one central component coordinates the workflow

**Choreography**
- services react to events without a central coordinator

Orchestration is easier to understand centrally.
Choreography reduces central coupling but can become harder to trace as systems grow.`
        },
        {
          id: 9,
          question: "What is eventual consistency?",
          answer: `**Eventual consistency** means data across services may not be immediately consistent, but it becomes consistent over time.

This is common in distributed systems where each service owns its own database.

Interview point: microservices often trade immediate consistency for availability and decoupling.`
        },
        {
          id: 10,
          question: "Why does each microservice usually own its own database?",
          answer: `Each service owning its database helps enforce loose coupling and clear boundaries.

Benefits:
- independent schema evolution
- independent deployment
- better ownership

Sharing one database across services usually creates hidden coupling and makes autonomy weaker.`
        },
        {
          id: 11,
          question: "What is bounded context and why is it important in microservices?",
          answer: `A **bounded context** comes from Domain-Driven Design and defines a clear boundary where a domain model is valid.

It helps identify service boundaries.

Example:
- "Customer" in billing may differ from "Customer" in support

Good microservice boundaries often align with bounded contexts.`
        },
        {
          id: 12,
          question: "What are the advantages of microservices?",
          answer: `Advantages include:
- independent deployment
- team autonomy
- better scalability per service
- technology flexibility
- fault isolation

These benefits matter most in larger systems and teams.`
        },
        {
          id: 13,
          question: "What are the disadvantages of microservices?",
          answer: `Disadvantages include:
- distributed complexity
- network latency
- harder debugging
- data consistency challenges
- more DevOps and observability requirements

Microservices are not automatically better than monoliths.`
        },
        {
          id: 14,
          question: "What is fault tolerance in microservices?",
          answer: `**Fault tolerance** means the system can continue functioning even when some services or infrastructure components fail.

Typical techniques:
- retries
- circuit breakers
- timeouts
- fallbacks
- bulkheads

These patterns are crucial because network calls fail in real distributed systems.`
        },
        {
          id: 15,
          question: "What is load balancing in microservices?",
          answer: `Load balancing distributes traffic across multiple instances of a service.

Benefits:
- better throughput
- improved availability
- avoids overloading one instance

It can happen at the gateway, platform level, or client side.`
        },
        {
          id: 16,
          question: "What is horizontal scaling in microservices?",
          answer: `**Horizontal scaling** means adding more service instances instead of making one instance bigger.

Microservices are well-suited for this because each service can scale independently based on its own load profile.`
        },
        {
          id: 17,
          question: "What is a stateless service and why is it preferred?",
          answer: `A **stateless service** does not store client session state in memory between requests.

Why preferred:
- easier scaling
- easier failover
- simpler load balancing

State is usually stored in databases, caches, or external session stores instead.`
        },
        {
          id: 18,
          question: "What is a message broker and why is it used in microservices?",
          answer: `A **message broker** helps services communicate asynchronously.

Examples:
- Kafka
- RabbitMQ
- ActiveMQ

It is used for:
- decoupling producers and consumers
- event-driven architecture
- buffering spikes
- background processing`
        },
        {
          id: 19,
          question: "What is event-driven architecture in microservices?",
          answer: `In **event-driven architecture**, services publish events when something happens, and other services react to them.

Example:
- Order Service publishes \`OrderCreated\`
- Payment Service and Inventory Service consume it

This reduces direct coupling between services.`
        },
        {
          id: 20,
          question: "What is idempotency and why is it important in microservices?",
          answer: `An operation is **idempotent** if repeating it has the same effect as doing it once.

This is important because retries, duplicate messages, and network failures are common in distributed systems.

Examples:
- safely retrying payment status update
- processing the same event only once logically`
        },
        {
          id: 21,
          question: "What is a health check in microservices?",
          answer: `A **health check** endpoint tells whether a service is alive and ready to serve traffic.

Typical checks:
- liveness
- readiness
- dependency checks

These are commonly used by platforms like Kubernetes to manage service instances.`
        },
        {
          id: 22,
          question: "What is centralized logging in microservices?",
          answer: `Because logs are spread across many services and instances, teams usually collect them centrally.

Benefits:
- easier debugging
- searchable logs
- correlation across services

Common stacks include ELK/OpenSearch and cloud logging platforms.`
        },
        {
          id: 23,
          question: "What is distributed tracing?",
          answer: `**Distributed tracing** follows a request across multiple services.

It helps answer:
- where latency happened
- which service failed
- how one request moved through the system

Common concepts:
- trace ID
- span ID`
        },
        {
          id: 24,
          question: "What is the role of Docker in microservices?",
          answer: `Docker packages a service and its dependencies into a container.

Benefits:
- consistent environments
- easier deployment
- portability across systems

Containers are very common in microservices deployments.`
        },
        {
          id: 25,
          question: "What is the role of Kubernetes in microservices?",
          answer: `Kubernetes helps run and manage containers at scale.

It provides:
- deployment automation
- service discovery
- load balancing
- self-healing
- scaling

It is often used as the platform layer for microservices.`
        },
        {
          id: 26,
          question: "What is configuration management in microservices?",
          answer: `Configuration management means handling environment-specific settings outside application code.

Examples:
- database URLs
- feature flags
- credentials
- timeouts

Good configuration management keeps services portable and safer across environments.`
        },
        {
          id: 27,
          question: "What is a sidecar pattern in microservices?",
          answer: `A **sidecar** is a helper container or process deployed alongside a service.

It can handle concerns like:
- logging
- proxying
- mTLS
- metrics

This pattern is common in service mesh setups.`
        },
        {
          id: 28,
          question: "What is blue-green deployment in microservices?",
          answer: `In **blue-green deployment**, you keep two environments:
- blue = current live version
- green = new version

Traffic switches to the new version once it is verified.

This reduces deployment risk and makes rollback easier.`
        },
        {
          id: 29,
          question: "What is canary deployment in microservices?",
          answer: `A **canary deployment** releases a new version to a small subset of traffic first.

If metrics look healthy, traffic is increased gradually.

This helps detect problems early before a full rollout.`
        },
        {
          id: 30,
          question: "When should you choose microservices over a monolith?",
          answer: `Microservices make sense when:
- the domain is large and clearly separable
- many teams need to deploy independently
- different services need different scaling profiles
- the organization can handle operational complexity

A monolith is often better for small teams, early products, or simpler domains.`
        }
      ]
    },
    {
      title: "Microservices Questions for Experienced Levels",
      questions: [
        {
          id: 1,
          question: "How do you handle distributed transactions in microservices?",
          answer: `Traditional ACID transactions do not work well across service boundaries.

Common patterns:
- Saga pattern
- Outbox pattern
- compensating transactions

Strong answers also mention eventual consistency and idempotency.`
        },
        {
          id: 2,
          question: "What is the Saga pattern?",
          answer: `A **Saga** is a sequence of local transactions across services.

If one step fails, compensating actions are triggered to undo prior steps logically.

Approaches:
- choreography-based saga
- orchestration-based saga

It is one of the most common experienced microservices interview topics.`
        },
        {
          id: 3,
          question: "What is the Outbox pattern and why is it useful?",
          answer: `The **Outbox pattern** solves the problem of updating a database and publishing an event reliably.

Typical idea:
1. save business data
2. save event in an outbox table in the same local transaction
3. separate process publishes the event

This avoids losing events between DB commit and message publish.`
        },
        {
          id: 4,
          question: "What is the Circuit Breaker pattern and where should it belong?",
          answer: `The **Circuit Breaker pattern** stops repeated calls to a failing remote service for a period of time.

States:
- closed
- open
- half-open

It belongs naturally under **microservices resilience** because it protects service-to-service communication.

Even though it is also a design pattern, interviewers usually ask it in the context of microservices reliability.`
        },
        {
          id: 5,
          question: "How do retries work in microservices communication and what are the risks?",
          answer: `Retries can help recover from temporary failures like transient network issues or brief dependency spikes.

Best practices:
- retry only transient failures
- use capped exponential backoff
- add jitter
- combine with timeouts and circuit breakers
- ensure idempotency

**Risks:**
- retry storms
- duplicate side effects
- increased downstream load

Retries are common, but careless retries can make outages worse.`
        },
        {
          id: 6,
          question: "Why are timeouts critical in microservices?",
          answer: `Without timeouts, one slow dependency can block threads, exhaust connection pools, and cascade failures.

Every remote call should have clear timeout settings:
- connect timeout
- read timeout
- overall request deadline

Experienced candidates should treat missing timeouts as a production risk.`
        },
        {
          id: 7,
          question: "What is a bulkhead pattern in microservices?",
          answer: `The **bulkhead pattern** isolates resources so one failing dependency or workload does not consume everything.

Examples:
- separate thread pools
- separate connection pools
- isolated queues

It limits blast radius when parts of the system misbehave.`
        },
        {
          id: 8,
          question: "How do you prevent cascading failures in microservices?",
          answer: `Common techniques:
- timeouts
- retries with backoff and jitter
- circuit breakers
- bulkheads
- queue-based decoupling
- load shedding

This is a classic senior-level microservices reliability question.`
        },
        {
          id: 9,
          question: "What is service mesh and when would you use it?",
          answer: `A **service mesh** adds an infrastructure layer for service-to-service communication, usually through sidecar proxies.

It can provide:
- mTLS
- retries
- traffic shaping
- observability
- policy enforcement

Examples include Istio and Linkerd.

It is useful when the platform needs consistent networking and security controls across many services.`
        },
        {
          id: 10,
          question: "How do you secure service-to-service communication in microservices?",
          answer: `Common controls:
- mutual TLS
- service identity
- OAuth2 or token propagation where appropriate
- network policies
- secret management

Security between internal services should not be treated as trusted by default just because traffic stays inside the cluster.`
        },
        {
          id: 11,
          question: "How do you design microservice boundaries correctly?",
          answer: `Good boundaries are usually based on business capabilities and bounded contexts, not just database tables or technical layers.

Bad boundaries often lead to:
- chatty communication
- shared data ownership
- tight coupling

Boundary mistakes are expensive because they affect teams, deployment, and data flow.`
        },
        {
          id: 12,
          question: "What are the signs that a microservice boundary is wrong?",
          answer: `Common signs:
- too many cross-service calls for one request
- one business change requires edits in many services
- services share the same database heavily
- duplicated business rules everywhere
- no team can deploy independently

This question tests architectural judgment more than definitions.`
        },
        {
          id: 13,
          question: "How do you handle data consistency across microservices?",
          answer: `Common techniques:
- eventual consistency
- sagas
- outbox pattern
- idempotent consumers
- compensating actions

The key is to design workflows that tolerate asynchronous coordination instead of expecting a single global transaction.`
        },
        {
          id: 14,
          question: "What is CQRS and when is it useful in microservices?",
          answer: `**CQRS** separates command operations from read operations.

It can be useful when:
- write and read models differ significantly
- read scaling needs are very different
- event-driven architectures benefit from specialized views

It adds complexity, so it should be used only where the benefit is clear.`
        },
        {
          id: 15,
          question: "What is event sourcing and when would you avoid it?",
          answer: `In **event sourcing**, state is derived from a sequence of immutable events rather than only the latest row values.

Benefits:
- auditability
- replay capability
- natural event history

Avoid it when:
- the domain does not need it
- team expertise is limited
- operational complexity is not justified`
        },
        {
          id: 16,
          question: "How do you make event consumers idempotent?",
          answer: `Common approaches:
- store processed message IDs
- use unique constraints
- design updates to be naturally idempotent
- use deduplication at the consumer side

This matters because at-least-once delivery can produce duplicate messages.`
        },
        {
          id: 17,
          question: "What delivery guarantees do message brokers provide and why does that matter?",
          answer: `Common guarantees:
- at most once
- at least once
- effectively once or exactly-once in constrained contexts

This matters because delivery semantics affect:
- duplicates
- ordering assumptions
- idempotency requirements
- business correctness`
        },
        {
          id: 18,
          question: "How do you handle message ordering in microservices?",
          answer: `Ordering is hard in distributed systems.

Common strategies:
- partition by key
- process serially for a given entity
- design logic that tolerates out-of-order events
- version events and reject stale updates

A strong answer avoids assuming global ordering.`
        },
        {
          id: 19,
          question: "How do you observe and debug a production microservices system?",
          answer: `A practical answer includes:
- centralized logging
- metrics
- distributed tracing
- dashboards and alerts
- correlation IDs
- health checks

Without observability, distributed debugging becomes guesswork.`
        },
        {
          id: 20,
          question: "How do correlation IDs help in microservices?",
          answer: `A **correlation ID** is attached to a request and propagated across service boundaries.

It helps connect logs, traces, and events for one end-to-end flow.

This is a common and practical senior interview topic because it directly improves incident debugging.`
        },
        {
          id: 21,
          question: "How do you version APIs in a microservices system?",
          answer: `Common strategies:
- URI versioning
- header versioning
- contract evolution with backward compatibility

In microservices, the bigger concern is often safe evolution of service contracts without breaking consumers.`
        },
        {
          id: 22,
          question: "What is backward compatibility and why is it important between services?",
          answer: `Backward compatibility means new service versions continue to work with older clients or consumers.

This matters because services are deployed independently. Not every caller upgrades at the same time.

Breaking contracts casually can create production incidents during rollout.`
        },
        {
          id: 23,
          question: "How do you test microservices effectively?",
          answer: `A balanced strategy usually includes:
- unit tests
- integration tests
- contract tests
- end-to-end tests for critical flows

Senior answers usually mention avoiding over-reliance on slow, brittle end-to-end suites.`
        },
        {
          id: 24,
          question: "What is consumer-driven contract testing?",
          answer: `**Consumer-driven contract testing** verifies that a provider service satisfies the expectations of its consumers.

It helps catch breaking API changes earlier than full integration environments.

It is especially useful when many services evolve independently.`
        },
        {
          id: 25,
          question: "How do you deploy microservices safely?",
          answer: `Common techniques:
- blue-green deployment
- canary deployment
- feature flags
- health-based rollout
- quick rollback

A strong answer combines deployment strategy with monitoring and automated checks.`
        },
        {
          id: 26,
          question: "How do you manage configuration and secrets across microservices?",
          answer: `Good practices include:
- externalized configuration
- secret managers
- least privilege access
- environment separation
- auditability of secret rotation

Hardcoding secrets or keeping them in images is a clear anti-pattern.`
        },
        {
          id: 27,
          question: "How do you manage database migrations across many microservices?",
          answer: `Each service should usually own and migrate its own schema independently.

Good practices:
- backward-compatible schema changes first
- application rollout in stages
- avoid shared database migrations across services
- automate migrations in delivery pipelines`
        },
        {
          id: 28,
          question: "What are the biggest anti-patterns in microservices?",
          answer: `Common anti-patterns:
- distributed monolith
- shared database everywhere
- chatty synchronous calls
- missing observability
- no ownership boundaries
- over-splitting services too early

This is a very common experienced interview question.`
        },
        {
          id: 29,
          question: "What is a distributed monolith?",
          answer: `A **distributed monolith** looks like microservices physically, but services are still tightly coupled operationally and logically.

Symptoms:
- synchronized deployments
- many cross-service dependencies
- one change breaks many services
- shared database or shared business rules

It keeps the pain of distribution without the benefits of autonomy.`
        },
        {
          id: 30,
          question: "What production metrics matter most in microservices communication?",
          answer: `Important metrics include:
- latency
- error rate
- request volume
- saturation
- retry rate
- timeout rate
- circuit breaker open rate
- queue lag for async systems

These metrics help detect whether communication issues are isolated or cascading through the system.`
        }
      ]
    }
  ]
};
