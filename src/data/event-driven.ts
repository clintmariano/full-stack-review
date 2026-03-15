import { Category } from "./types";

export const eventDrivenCategory: Category = {
  id: "event-driven",
  name: "Event-Driven Architecture",
  subtitle: "Interview Questions",
  icon: "events",
  color: "#f97316",
  sections: [
    {
      title: "Event-Driven Architecture Questions for Freshers and Intermediate Levels",
      questions: [
        {
          id: 1,
          question: "What is event-driven architecture?",
          answer: `**Event-driven architecture (EDA)** is a style where systems communicate by producing and reacting to events.

An event describes something that already happened, such as:
- \`OrderCreated\`
- \`PaymentCompleted\`
- \`UserRegistered\``
        },
        {
          id: 2,
          question: "What is an event in software systems?",
          answer: `An **event** is a record of something that happened in the system.

It usually contains:
- event type
- timestamp
- entity or aggregate ID
- payload with business data`
        },
        {
          id: 3,
          question: "What is the difference between an event and a command?",
          answer: `**Command**
- asks a system to do something

**Event**
- states that something already happened

Example:
- Command: \`CreateOrder\`
- Event: \`OrderCreated\``
        },
        {
          id: 4,
          question: "What is a producer in event-driven architecture?",
          answer: `A **producer** publishes events when business actions occur.

Example:
- Order service publishes \`OrderCreated\` after saving an order`
        },
        {
          id: 5,
          question: "What is a consumer in event-driven architecture?",
          answer: `A **consumer** subscribes to and processes events.

Example:
- Inventory service consumes \`OrderCreated\` and reserves stock`
        },
        {
          id: 6,
          question: "What is the difference between pub/sub and queue-based messaging?",
          answer: `**Pub/sub**
- multiple subscribers can receive the same event

**Queue**
- work is usually consumed by one worker or one competing consumer

Pub/sub is common for business events. Queues are common for work distribution.`
        },
        {
          id: 7,
          question: "What is Kafka?",
          answer: `**Apache Kafka** is a distributed event streaming platform used for:
- publishing events
- storing event streams
- consuming events at scale

It is widely used in event-driven and microservices architectures.`
        },
        {
          id: 8,
          question: "What is a Kafka topic?",
          answer: `A **topic** is a named stream of events in Kafka.

Examples:
- \`orders.created\`
- \`payments.completed\`
- \`users.registered\``
        },
        {
          id: 9,
          question: "What is a Kafka partition?",
          answer: `A **partition** is a subdivision of a Kafka topic.

Partitions allow:
- parallel consumption
- scalability
- ordering within one partition`
        },
        {
          id: 10,
          question: "What is a Kafka consumer group?",
          answer: `A **consumer group** lets multiple consumers share work for the same topic.

Within one group:
- each partition is consumed by one consumer instance at a time

Across different groups:
- the same event can be consumed independently by multiple systems`
        },
        {
          id: 11,
          question: "What is the role of offsets in Kafka?",
          answer: `An **offset** is the position of an event inside a partition.

Consumers track offsets to know:
- what was already processed
- where to resume after restart`
        },
        {
          id: 12,
          question: "What is the difference between at-most-once, at-least-once, and exactly-once delivery?",
          answer: `**At-most-once**
- may lose messages
- no duplicates

**At-least-once**
- may deliver duplicates
- safer than losing messages

**Exactly-once**
- strongest guarantee
- harder and more expensive to achieve`
        },
        {
          id: 13,
          question: "What is event ordering and why does it matter?",
          answer: `Event order matters when processing depends on sequence, such as:
- account balance updates
- shipment state transitions

Kafka preserves order within a partition, not across all partitions globally.`
        },
        {
          id: 14,
          question: "What is eventual consistency in event-driven systems?",
          answer: `In event-driven systems, services often update independently after receiving events.

That means different services may be temporarily out of sync, but converge over time.`
        },
        {
          id: 15,
          question: "What are the benefits of event-driven architecture?",
          answer: `Benefits include:
- loose coupling
- better scalability
- asynchronous communication
- easier integration between services
- more resilient workflows`
        },
        {
          id: 16,
          question: "What are the challenges of event-driven architecture?",
          answer: `Challenges include:
- harder debugging
- eventual consistency
- duplicate handling
- ordering issues
- schema evolution
- operational complexity`
        },
        {
          id: 17,
          question: "What is an event schema?",
          answer: `An **event schema** defines the structure of an event payload.

It helps ensure producers and consumers agree on fields and types.`
        },
        {
          id: 18,
          question: "What is schema evolution in event-driven systems?",
          answer: `**Schema evolution** means changing event structure over time while keeping consumers working.

Best practice:
- add fields in backward-compatible ways
- avoid breaking existing consumers abruptly`
        },
        {
          id: 19,
          question: "What is a dead-letter queue or dead-letter topic?",
          answer: `A **dead-letter queue/topic** stores events that could not be processed successfully after retries.

It helps with:
- debugging bad messages
- isolating poison events
- preventing endless retries`
        },
        {
          id: 20,
          question: "What is retry logic in event-driven systems?",
          answer: `Retries help recover from temporary failures.

Best practices:
- retry only transient failures
- use backoff
- avoid infinite retry loops
- combine with dead-letter handling`
        },
        {
          id: 21,
          question: "What is idempotency in event consumers?",
          answer: `A consumer is **idempotent** if processing the same event more than once does not corrupt data.

This is important because duplicates are common in distributed messaging systems.`
        },
        {
          id: 22,
          question: "How do microservices use event-driven architecture?",
          answer: `Microservices often publish domain events after local state changes.

Other services subscribe and react independently.

Example:
- Order service publishes \`OrderCreated\`
- Payment service charges payment
- Inventory service reserves stock`
        },
        {
          id: 23,
          question: "When should you use event-driven architecture?",
          answer: `EDA is a good fit when:
- services should be loosely coupled
- workflows are asynchronous
- integration between many systems is needed
- high throughput matters`
        },
        {
          id: 24,
          question: "When should you avoid event-driven architecture?",
          answer: `Avoid it when:
- the domain is simple
- strong synchronous consistency is required everywhere
- team operational maturity is low
- debugging complexity is unacceptable`
        },
        {
          id: 25,
          question: "What is the role of Kafka in microservices?",
          answer: `Kafka can act as the event backbone between microservices.

It helps with:
- decoupling services
- buffering spikes
- replaying events
- scaling event processing independently`
        },
        {
          id: 26,
          question: "How do you name Kafka topics well?",
          answer: `Good topic names are:
- clear
- domain-oriented
- version-aware if needed

Examples:
- \`orders.created.v1\`
- \`payments.completed.v1\``
        },
        {
          id: 27,
          question: "What is a broker in Kafka?",
          answer: `A **broker** is a Kafka server that stores data and serves producers and consumers.

A Kafka cluster usually has multiple brokers for scale and fault tolerance.`
        },
        {
          id: 28,
          question: "What is retention in Kafka?",
          answer: `**Retention** defines how long Kafka keeps events in a topic.

Kafka can keep data for a configured time or size limit, even after consumers read it.`
        },
        {
          id: 29,
          question: "Why is Kafka useful for replaying events?",
          answer: `Because Kafka retains events for a period of time, consumers can re-read old events by resetting offsets.

This is useful for:
- backfills
- recovery
- rebuilding downstream state`
        },
        {
          id: 30,
          question: "What are the main interview topics in event-driven architecture?",
          answer: `Common event-driven interview topics include:
- producer/consumer design
- Kafka topics and partitions
- ordering
- delivery guarantees
- retries and dead-letter topics
- idempotency
- schema evolution
- eventual consistency`
        }
      ]
    },
    {
      title: "Event-Driven Architecture Questions for Experienced Levels",
      questions: [
        {
          id: 1,
          question: "How do you design event-driven microservices with Kafka?",
          answer: `A common design is:
1. each microservice owns its own database
2. after a business change, it publishes a domain event
3. other services consume the event and update their own state

Kafka sits between services as the event backbone.

Strong answers also mention:
- outbox pattern
- idempotent consumers
- schema evolution
- observability`
        },
        {
          id: 2,
          question: "How do you configure Spring Boot microservices to publish Kafka events?",
          answer: `A common Spring Boot producer setup looks like this:

\`\`\`properties
spring.kafka.bootstrap-servers=localhost:9092
spring.kafka.producer.key-serializer=org.apache.kafka.common.serialization.StringSerializer
spring.kafka.producer.value-serializer=org.springframework.kafka.support.serializer.JsonSerializer
\`\`\`

\`\`\`java
@Service
public class OrderEventPublisher {
    private final KafkaTemplate<String, OrderCreatedEvent> kafkaTemplate;

    public OrderEventPublisher(KafkaTemplate<String, OrderCreatedEvent> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public void publish(OrderCreatedEvent event) {
        kafkaTemplate.send("orders.created.v1", event.orderId(), event);
    }
}
\`\`\`

The event key is often the aggregate ID so related events stay in the same partition.`
        },
        {
          id: 3,
          question: "How do you configure Spring Boot microservices to consume Kafka events?",
          answer: `A common consumer setup:

\`\`\`properties
spring.kafka.bootstrap-servers=localhost:9092
spring.kafka.consumer.group-id=inventory-service
spring.kafka.consumer.auto-offset-reset=earliest
spring.kafka.consumer.key-deserializer=org.apache.kafka.common.serialization.StringDeserializer
spring.kafka.consumer.value-deserializer=org.springframework.kafka.support.serializer.JsonDeserializer
spring.kafka.consumer.properties.spring.json.trusted.packages=*
\`\`\`

\`\`\`java
@Component
public class OrderCreatedListener {
    @KafkaListener(topics = "orders.created.v1", groupId = "inventory-service")
    public void handle(OrderCreatedEvent event) {
        // reserve inventory
    }
}
\`\`\`

In production, teams usually add retry handling, validation, logging, and idempotency checks.`
        },
        {
          id: 4,
          question: "How should microservices be configured to use Kafka safely in production?",
          answer: `Key production concerns:
- topic naming conventions
- partition strategy
- consumer group design
- retry topics and dead-letter topics
- schema governance
- idempotency
- monitoring lag and failures

Kafka integration is not just a code annotation problem; it is also an operational design problem.`
        },
        {
          id: 5,
          question: "What is the Outbox pattern and why is it important with Kafka?",
          answer: `The **Outbox pattern** avoids the problem of updating a database and publishing an event as two separate unreliable steps.

Typical flow:
1. save business data
2. save an outbox record in the same DB transaction
3. a relay publishes outbox rows to Kafka

This prevents lost events between DB commit and Kafka publish.`
        },
        {
          id: 6,
          question: "What is the difference between event notification and event-carried state transfer?",
          answer: `**Event notification**
- small event says something happened
- consumers fetch more data if needed

**Event-carried state transfer**
- event contains enough data for consumers to act without additional synchronous calls

Tradeoff:
- smaller events vs reduced coupling to synchronous lookups`
        },
        {
          id: 7,
          question: "How do you handle duplicate event processing?",
          answer: `Common approaches:
- store processed event IDs
- use unique constraints
- design updates to be idempotent
- deduplicate by aggregate ID and event version when appropriate

This is a standard Kafka and EDA interview question.`
        },
        {
          id: 8,
          question: "How do you guarantee event ordering with Kafka?",
          answer: `Kafka guarantees order only within a partition.

To preserve ordering for one entity:
- use a stable key like \`orderId\`
- publish all events for that entity with the same key

Global ordering across partitions is not guaranteed and is usually not scalable.`
        },
        {
          id: 9,
          question: "How do Kafka partitions affect scaling and ordering tradeoffs?",
          answer: `More partitions usually mean:
- better parallelism
- higher throughput

But also:
- more operational overhead
- ordering only within each partition
- more complex rebalancing behavior

This tradeoff is important in real Kafka system design.`
        },
        {
          id: 10,
          question: "What is schema registry and why is it used with Kafka?",
          answer: `A **schema registry** manages event schemas and compatibility rules.

It helps teams:
- version schemas
- validate compatibility
- avoid breaking consumers

It is common with Avro, Protobuf, or JSON schema workflows.`
        },
        {
          id: 11,
          question: "How do you evolve Kafka event schemas safely?",
          answer: `Best practices:
- prefer additive changes
- avoid removing required fields abruptly
- version events carefully
- enforce compatibility checks
- keep old consumers in mind during rollout`
        },
        {
          id: 12,
          question: "What is consumer lag and why does it matter?",
          answer: `**Consumer lag** is how far behind a consumer group is from the latest produced offset.

High lag can indicate:
- slow consumers
- not enough consumers
- downstream failures
- bad partitioning or capacity planning`
        },
        {
          id: 13,
          question: "How do retries and dead-letter topics work with Kafka consumers?",
          answer: `A common approach:
- retry transient failures a few times
- use backoff
- move poison messages to a dead-letter topic

This prevents one bad event from blocking the whole pipeline.`
        },
        {
          id: 14,
          question: "How do you handle poison messages in event-driven systems?",
          answer: `A **poison message** is an event that repeatedly fails processing.

Typical handling:
- log with context
- send to dead-letter topic
- alert operators
- inspect and replay after fix if needed`
        },
        {
          id: 15,
          question: "How do you make Kafka consumers idempotent in microservices?",
          answer: `A practical answer usually includes:
- a processed-event table
- unique business keys
- conditional updates
- careful retry handling

The goal is that consuming the same event twice does not corrupt downstream state.`
        },
        {
          id: 16,
          question: "What is exactly-once semantics in Kafka and what are its limits?",
          answer: `Kafka supports exactly-once features in certain flows, especially producer and stream-processing scenarios.

But interviewers expect you to know:
- it is not “magic” for every external side effect
- databases, emails, and third-party calls still need idempotent handling

A strong answer explains the limits clearly.`
        },
        {
          id: 17,
          question: "How do you design event-driven systems for observability?",
          answer: `Key practices:
- correlation IDs
- event IDs
- structured logs
- tracing between producer and consumer flows
- lag and retry metrics
- dead-letter topic monitoring`
        },
        {
          id: 18,
          question: "How do you debug event-driven microservices when a workflow fails?",
          answer: `A practical debugging flow:
1. find the correlation or event ID
2. trace which services published and consumed the event
3. inspect lag, retries, and dead-letter topics
4. verify schema compatibility
5. replay if safe after fixing the issue`
        },
        {
          id: 19,
          question: "What is event sourcing and how is it different from event-driven architecture?",
          answer: `**Event sourcing**
- stores state as a sequence of events

**Event-driven architecture**
- uses events for communication between components

They are related but not the same. A system can be event-driven without using event sourcing.`
        },
        {
          id: 20,
          question: "What is CQRS and how does it fit with event-driven systems?",
          answer: `**CQRS** separates writes from reads.

In event-driven systems, write-side changes can emit events that update read models asynchronously.

This is powerful, but adds:
- eventual consistency
- more moving parts
- higher operational complexity`
        },
        {
          id: 21,
          question: "How do you design a Saga using Kafka events?",
          answer: `A Kafka-based saga often works like this:
- Order service publishes \`OrderCreated\`
- Payment service handles it and publishes success/failure
- Inventory service reacts
- compensating events handle rollback-like behavior

This is common in microservices interviews.`
        },
        {
          id: 22,
          question: "How do Kafka consumer rebalances affect microservices?",
          answer: `Rebalances can temporarily pause consumption and move partitions between instances.

This matters because:
- throughput can dip
- duplicate processing must be tolerated
- long-running consumers can behave poorly if not designed well`
        },
        {
          id: 23,
          question: "What is backpressure in event-driven systems?",
          answer: `Backpressure is how the system reacts when producers are faster than consumers.

Without backpressure:
- lag grows
- queues grow
- latency rises
- failures spread

Teams need strategies like scaling consumers, throttling producers, and load shedding.`
        },
        {
          id: 24,
          question: "How do you choose partition keys for Kafka topics?",
          answer: `Choose keys based on:
- ordering needs
- traffic distribution
- entity ownership

Bad keys can cause hotspots. Good keys balance load while preserving needed ordering per entity.`
        },
        {
          id: 25,
          question: "How do you secure Kafka in microservices environments?",
          answer: `Common controls:
- TLS encryption
- SASL authentication
- ACLs
- secret management
- topic-level authorization

Security should be part of the Kafka design from the start, not an afterthought.`
        },
        {
          id: 26,
          question: "How do you test event-driven microservices?",
          answer: `A balanced strategy usually includes:
- unit tests for handlers
- contract tests for event schemas
- integration tests with Kafka
- replay or fixture-based tests for workflows

Testing should cover duplicates, ordering assumptions, and failure handling.`
        },
        {
          id: 27,
          question: "How do you migrate a synchronous microservice workflow to Kafka-based eventing?",
          answer: `A safe migration usually includes:
- identifying which synchronous calls can become async
- introducing event publishing gradually
- keeping contracts versioned
- running both paths temporarily when needed
- measuring impact on consistency and latency`
        },
        {
          id: 28,
          question: "What are common anti-patterns in event-driven architecture?",
          answer: `Common anti-patterns:
- unclear event ownership
- breaking schema changes
- no idempotency
- no dead-letter handling
- too many chatty low-value events
- using events to hide poor service boundaries`
        },
        {
          id: 29,
          question: "How do you explain Kafka versus RabbitMQ in interviews?",
          answer: `A high-level distinction:
- Kafka is a distributed event log and streaming platform
- RabbitMQ is traditionally queue-oriented messaging

Kafka is strong for event streams, replay, and high throughput.
RabbitMQ is strong for routing patterns and work queues.

The right answer depends on workload and semantics.`
        },
        {
          id: 30,
          question: "Scenario: How would you design microservices for orders, payments, and inventory using Kafka?",
          answer: `**Sample answer:**

"I would give each service its own database and use Kafka for cross-service communication. The Order service would create the order in its own DB, then publish an \`OrderCreated\` event. The Payment service would consume that event, attempt payment, and then publish either \`PaymentCompleted\` or \`PaymentFailed\`. The Inventory service would consume the relevant event and reserve or release stock accordingly.

To avoid losing events, I would use the outbox pattern in each service. To avoid duplicate side effects, I would make consumers idempotent. I would also use the aggregate ID, such as \`orderId\`, as the Kafka key so related events stay ordered within a partition. Retry topics and dead-letter topics would handle transient and poison-message failures.

In Spring Boot, each service would have Kafka producer and consumer configuration in \`application.properties\`, plus \`KafkaTemplate\` for publishing and \`@KafkaListener\` for consuming. Operationally, I would monitor lag, dead-letter volume, and schema compatibility. That gives a decoupled, scalable workflow with clear event ownership and manageable failure handling."`
        }
      ]
    }
  ]
};
