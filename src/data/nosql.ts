import { Category } from "./types";

export const nosqlCategory: Category = {
  id: "nosql",
  name: "NoSQL",
  subtitle: "Interview Questions",
  icon: "nosql",
  color: "#4db33d",
  sections: [
    {
      title: "NoSQL Interview Questions for Freshers and Intermediate Levels",
      questions: [
        {
          id: 1,
          question: "What is NoSQL?",
          answer: `**NoSQL** refers to non-relational databases designed for flexible schemas, horizontal scaling, and distributed workloads.

NoSQL systems are often used when:
- schema changes frequently
- very large scale is needed
- data is not naturally relational
- very high write or read throughput is required`
        },
        {
          id: 2,
          question: "What are the different types of NoSQL databases?",
          answer: `The main NoSQL types are:

- **Document databases**: MongoDB, CouchDB
- **Key-value stores**: Redis, DynamoDB
- **Column-family stores**: Cassandra, HBase
- **Graph databases**: Neo4j, Neptune

Each type is optimized for different access patterns and data models.`
        },
        {
          id: 3,
          question: "What is a document database?",
          answer: `A **document database** stores data as JSON-like documents.

Example use cases:
- user profiles
- product catalogs
- content management

It is useful when records have flexible structure or nested data.`
        },
        {
          id: 4,
          question: "What is a key-value store?",
          answer: `A **key-value store** stores data as simple key and value pairs.

Examples:
- Redis
- DynamoDB

Common use cases:
- caching
- sessions
- feature flags
- counters`
        },
        {
          id: 5,
          question: "What is a column-family database?",
          answer: `A **column-family database** stores data in column families rather than traditional rows for query optimization across large distributed systems.

Examples:
- Cassandra
- HBase

It is often used for:
- time-series data
- analytics
- high write throughput workloads`
        },
        {
          id: 6,
          question: "What is a graph database?",
          answer: `A **graph database** stores nodes and relationships directly.

Examples:
- Neo4j
- Amazon Neptune

It is strong for:
- recommendation systems
- fraud detection
- social networks
- dependency graphs`
        },
        {
          id: 7,
          question: "How is NoSQL different from SQL databases?",
          answer: `Common differences:

**SQL**
- relational
- fixed schema
- strong joins
- strong ACID support

**NoSQL**
- flexible schema
- often horizontally scalable
- optimized for specific data access patterns
- different consistency tradeoffs depending on system`
        },
        {
          id: 8,
          question: "When should you choose SQL over NoSQL?",
          answer: `Choose **SQL** when:
- data is strongly relational
- joins are important
- ACID transactions are critical
- schema is stable
- consistency matters more than flexible scaling

Examples:
- banking
- order management with strong integrity rules
- accounting
- systems with complex reporting joins

This is a very common interview comparison question.`
        },
        {
          id: 9,
          question: "When should you choose NoSQL over SQL?",
          answer: `Choose **NoSQL** when:
- schema changes frequently
- data is semi-structured or unstructured
- huge scale or distributed writes matter
- strict joins are not central
- you want data to align with access patterns

Examples:
- event logs
- session stores
- product catalogs
- user activity feeds`
        },
        {
          id: 10,
          question: "What is a schema-less database?",
          answer: `A **schema-less** database does not require every record to have the same fixed structure.

It does not mean “no structure at all.” It means the structure is more flexible and often enforced by the application rather than a rigid table definition.`
        },
        {
          id: 11,
          question: "What is horizontal scaling in NoSQL databases?",
          answer: `**Horizontal scaling** means adding more machines or nodes instead of just making one machine bigger.

Many NoSQL systems are designed to scale this way more naturally than traditional single-node relational setups.`
        },
        {
          id: 12,
          question: "What is replication in NoSQL databases?",
          answer: `**Replication** means copying data across multiple nodes.

Benefits:
- higher availability
- better fault tolerance
- sometimes better read scalability`
        },
        {
          id: 13,
          question: "What is sharding in NoSQL?",
          answer: `**Sharding** splits data across multiple nodes based on a shard key.

It helps distribute:
- storage
- reads
- writes

A poor shard key can cause hotspots and uneven load.`
        },
        {
          id: 14,
          question: "What is eventual consistency?",
          answer: `**Eventual consistency** means all replicas will become consistent over time, but reads may temporarily return older data.

This is common in distributed NoSQL systems designed for high availability and partition tolerance.`
        },
        {
          id: 15,
          question: "What is strong consistency?",
          answer: `**Strong consistency** means a read returns the latest committed write.

It is easier for correctness-sensitive systems, but can reduce availability or increase latency in distributed environments.`
        },
        {
          id: 16,
          question: "What is denormalization in NoSQL and why is it common?",
          answer: `Denormalization means storing duplicated or embedded data to optimize reads.

It is common in NoSQL because:
- joins may be weak or absent
- data is often modeled around query patterns
- fast reads are frequently prioritized`
        },
        {
          id: 17,
          question: "What is embedding versus referencing in document databases?",
          answer: `**Embedding**
- stores related data inside one document
- good for one-to-few and read-heavy access

**Referencing**
- stores relationships by ID
- good when related data is large, shared, or updated independently`
        },
        {
          id: 18,
          question: "What are common use cases for Redis?",
          answer: `Common Redis use cases:
- caching
- sessions
- pub/sub
- rate limiting
- leaderboards
- distributed locks
- counters`
        },
        {
          id: 19,
          question: "What are common use cases for MongoDB?",
          answer: `Common MongoDB use cases:
- content management
- user profile storage
- product catalogs
- applications with evolving document structure

It is often chosen for flexible document-oriented applications.`
        },
        {
          id: 20,
          question: "What are common use cases for Cassandra?",
          answer: `Common Cassandra use cases:
- write-heavy systems
- time-series data
- logs
- IoT events
- global-scale distributed applications

It is often chosen when availability and write scalability are priorities.`
        },
        {
          id: 21,
          question: "What are common use cases for graph databases?",
          answer: `Graph databases are strong for:
- recommendation engines
- fraud detection
- social graph queries
- shortest-path and relationship traversal problems`
        },
        {
          id: 22,
          question: "What is the difference between consistency and availability in distributed systems?",
          answer: `**Consistency**
- all clients see the same latest data

**Availability**
- every request gets a response, even during failures

Distributed database design often involves tradeoffs between them under partitions.`
        },
        {
          id: 23,
          question: "What is a partition key or shard key?",
          answer: `A **partition key** decides where data is stored in a distributed database.

A good key:
- distributes load evenly
- matches access patterns
- avoids hotspots`
        },
        {
          id: 24,
          question: "What is a hotspot in NoSQL systems?",
          answer: `A **hotspot** happens when too much traffic goes to a small subset of partitions or nodes.

This can happen because of:
- poor shard key choice
- skewed access patterns
- monotonic keys like timestamps without enough distribution`
        },
        {
          id: 25,
          question: "What is a TTL in NoSQL databases?",
          answer: `**TTL (time to live)** automatically expires data after a specified time.

It is common for:
- sessions
- cache entries
- temporary tokens
- ephemeral events`
        },
        {
          id: 26,
          question: "What is polyglot persistence?",
          answer: `**Polyglot persistence** means using different database types for different needs in the same system.

Example:
- PostgreSQL for transactional data
- Redis for caching
- Elasticsearch for search
- MongoDB for flexible documents`
        },
        {
          id: 27,
          question: "What is the difference between ACID and BASE?",
          answer: `**ACID**
- strong transactional guarantees

**BASE**
- Basically Available
- Soft state
- Eventual consistency

BASE is often associated with distributed NoSQL tradeoffs.`
        },
        {
          id: 28,
          question: "What are the disadvantages of NoSQL databases?",
          answer: `Common disadvantages:
- weaker joins
- potential consistency tradeoffs
- harder ad hoc querying in some systems
- more application-side modeling responsibility
- database-specific operational complexity`
        },
        {
          id: 29,
          question: "Can NoSQL databases support transactions?",
          answer: `Yes, some NoSQL databases support transactions, but scope and guarantees vary by system.

Interview point:
- do not assume “NoSQL means no transactions”
- instead explain that support differs by product and use case`
        },
        {
          id: 30,
          question: "What are the most important factors when choosing a NoSQL database?",
          answer: `Key factors:
- data model
- access patterns
- consistency needs
- scaling needs
- latency requirements
- operational complexity
- ecosystem and team expertise`
        }
      ]
    },
    {
      title: "NoSQL Interview Questions for Experienced Levels",
      questions: [
        {
          id: 1,
          question: "Explain the CAP theorem and its implications for NoSQL databases.",
          answer: `CAP says that under a network partition, a distributed system must choose between:
- **Consistency**
- **Availability**
- while **Partition tolerance** is required

Practical implication:
- real systems tune tradeoffs
- the important question is what happens during partitions`
        },
        {
          id: 2,
          question: "What is the difference between CP and AP systems?",
          answer: `**CP**
- prioritizes consistency during partitions
- may reject or delay requests

**AP**
- prioritizes availability during partitions
- may return stale data

Strong answers note that these are simplified labels, not the full story for every database.`
        },
        {
          id: 3,
          question: "How do you model data in NoSQL databases?",
          answer: `NoSQL modeling is usually query-first rather than normalization-first.

Good design starts with:
- access patterns
- read/write distribution
- partition key choice
- consistency requirements

This is one of the most important experienced NoSQL interview topics.`
        },
        {
          id: 4,
          question: "How do you choose between embedding and referencing in MongoDB?",
          answer: `Use **embedding** when:
- related data is usually read together
- relationship is one-to-few
- updates happen together

Use **referencing** when:
- data is large
- data is shared across many documents
- relationships are many-to-many
- related data changes independently`
        },
        {
          id: 5,
          question: "What is the role of partition keys in distributed NoSQL systems?",
          answer: `Partition keys determine data placement and often affect both performance and scalability.

A bad key can cause:
- hotspots
- uneven storage
- uneven traffic
- poor query efficiency

This is a high-signal design question in NoSQL interviews.`
        },
        {
          id: 6,
          question: "How do you avoid hot partitions in NoSQL databases?",
          answer: `Common approaches:
- choose high-cardinality partition keys
- avoid monotonically increasing keys when possible
- add bucketing or hashing
- model around traffic distribution

A bad partition strategy can ruin performance even when the database itself scales well.`
        },
        {
          id: 7,
          question: "What is tunable consistency?",
          answer: `Some distributed NoSQL systems let you choose consistency level per operation.

For example:
- ONE
- QUORUM
- ALL

This lets teams trade off latency, consistency, and availability depending on the request.`
        },
        {
          id: 8,
          question: "How do quorum reads and writes work?",
          answer: `In a replicated system, quorum means a majority of replicas participate.

Common idea:
- write quorum = W
- read quorum = R
- replication factor = N

If \`R + W > N\`, you can improve the chance of reading the latest value.`
        },
        {
          id: 9,
          question: "What is read repair and anti-entropy in NoSQL systems?",
          answer: `**Read repair**
- fixes stale replicas during reads

**Anti-entropy**
- background synchronization between replicas

These mechanisms help replicas converge over time in eventually consistent systems.`
        },
        {
          id: 10,
          question: "How do NoSQL databases handle transactions differently from relational databases?",
          answer: `Relational databases often provide broad ACID transaction support across multiple rows and tables.

NoSQL databases may:
- support transactions only within one partition or document
- support transactions with different tradeoffs
- encourage data models that reduce the need for cross-entity transactions`
        },
        {
          id: 11,
          question: "When should you still choose SQL even in a large-scale system?",
          answer: `Choose SQL when:
- strong consistency matters
- joins are central
- reporting is relational
- transaction correctness is critical
- schema discipline is beneficial

Scale alone does not automatically mean NoSQL is the right choice.`
        },
        {
          id: 12,
          question: "How do secondary indexes work in NoSQL databases and what are the tradeoffs?",
          answer: `Secondary indexes allow queries beyond the primary key, but tradeoffs may include:
- additional write cost
- eventual consistency depending on system
- storage overhead
- uneven performance characteristics

Index behavior varies significantly across products.`
        },
        {
          id: 13,
          question: "What is eventual consistency from an application-design perspective?",
          answer: `It means the application must tolerate temporary stale reads or delayed convergence.

This often affects:
- UX expectations
- retries
- conflict handling
- workflow design

Strong answers explain the business impact, not just the definition.`
        },
        {
          id: 14,
          question: "How do you handle conflicting writes in distributed NoSQL systems?",
          answer: `Strategies include:
- last-write-wins
- version checks
- vector clocks in some systems
- application-level merge logic
- idempotent updates

Conflict resolution is often a data-model and product-specific concern.`
        },
        {
          id: 15,
          question: "What is a wide-column store and how is it different from a relational table?",
          answer: `A **wide-column store** like Cassandra stores rows with flexible columns grouped into column families.

It differs from relational tables because:
- schema flexibility is higher
- modeling is access-pattern driven
- joins are limited
- distribution is a core design concern`
        },
        {
          id: 16,
          question: "Why are joins often discouraged or limited in NoSQL systems?",
          answer: `Distributed joins can be expensive and conflict with the scaling model of many NoSQL databases.

Instead, NoSQL systems often favor:
- denormalization
- embedding
- precomputed views
- query-specific modeling`
        },
        {
          id: 17,
          question: "How do you model time-series data in NoSQL databases?",
          answer: `Typical considerations:
- partition by time bucket plus entity
- handle TTL or data retention
- optimize for append-heavy writes
- plan for range queries

Time-series workloads are a common reason teams choose NoSQL or specialized databases.`
        },
        {
          id: 18,
          question: "What is write amplification in NoSQL systems?",
          answer: `**Write amplification** means one logical write causes multiple internal writes due to indexing, replication, compaction, or storage mechanics.

It matters because it affects throughput, latency, and hardware wear.`
        },
        {
          id: 19,
          question: "What is compaction in LSM-tree based NoSQL databases?",
          answer: `In LSM-tree systems, data is written in immutable segments and later merged through **compaction**.

Compaction helps:
- reclaim space
- remove obsolete entries
- improve read efficiency

But it can also create background I/O load.`
        },
        {
          id: 20,
          question: "What is the difference between MongoDB and Cassandra in design philosophy?",
          answer: `**MongoDB**
- document-oriented
- flexible documents
- richer ad hoc querying

**Cassandra**
- wide-column distributed store
- optimized for high availability and write-heavy scale
- heavily query-model driven

They solve different classes of problems well.`
        },
        {
          id: 21,
          question: "How do you design a cache-aside pattern with Redis?",
          answer: `Common flow:
1. read from cache
2. if miss, read from DB
3. populate cache
4. on update, invalidate or refresh cache

This is a very common practical NoSQL interview question.`
        },
        {
          id: 22,
          question: "What are the risks of using Redis as your primary data store?",
          answer: `Risks depend on the workload and durability setup, but commonly include:
- memory cost
- persistence tradeoffs
- eviction behavior
- operational misuse as a general database

Redis is excellent for some use cases, but not automatically the right primary system for all data.`
        },
        {
          id: 23,
          question: "How do you decide between using Elasticsearch and a traditional database?",
          answer: `Use Elasticsearch when:
- full-text search is central
- ranking and search relevance matter
- search features exceed simple LIKE queries

Use a traditional database when:
- primary transactional correctness matters
- search is secondary

Often both are used together.`
        },
        {
          id: 24,
          question: "What is eventual consistency versus strong consistency in user experience terms?",
          answer: `**Strong consistency**
- user sees latest committed state immediately

**Eventual consistency**
- user may briefly see stale state

A senior answer should explain how that affects product behavior, not just database theory.`
        },
        {
          id: 25,
          question: "What is a good answer to when not to use NoSQL?",
          answer: `Do not use NoSQL just because it sounds scalable.

Avoid it when:
- relational joins dominate
- strict transactional integrity is central
- data model is strongly relational
- team expertise is limited
- simpler SQL tooling would solve the problem well`
        },
        {
          id: 26,
          question: "How does indexing in MongoDB affect write performance?",
          answer: `Indexes make reads faster, but every additional index can slow writes because inserts and updates must maintain index structures too.

This is similar to SQL in concept, but still a common practical MongoDB interview topic.`
        },
        {
          id: 27,
          question: "How do you migrate from SQL to NoSQL safely?",
          answer: `A practical migration often includes:
- clarifying why migration is needed
- modeling based on access patterns
- dual writes or change capture carefully
- phased rollout
- validation and backfill
- rollback planning

Senior interviewers often want the migration thinking, not just data-model theory.`
        },
        {
          id: 28,
          question: "What are common NoSQL anti-patterns?",
          answer: `Common anti-patterns:
- choosing NoSQL without a clear reason
- poor partition key design
- overusing flexible schema with no validation
- trying to force relational joins
- ignoring consistency implications
- storing unbounded hot keys`
        },
        {
          id: 29,
          question: "How do you compare DynamoDB, MongoDB, Redis, and Cassandra at a high level?",
          answer: `High-level view:
- **DynamoDB**: managed key-value/document store with strong scalability
- **MongoDB**: document store with flexible schema and rich queries
- **Redis**: in-memory key-value store used heavily for cache and fast data structures
- **Cassandra**: wide-column store optimized for highly available distributed writes

Interviewers usually want the tradeoffs, not vendor marketing.`
        },
        {
          id: 30,
          question: "How do you choose the right NoSQL database for a system design interview?",
          answer: `A strong answer maps the workload to the database type:
- caching/session -> Redis
- flexible document data -> MongoDB
- high-scale write-heavy distributed workload -> Cassandra
- relationship-heavy traversal -> graph DB

Then explain:
- access patterns
- consistency needs
- scaling model
- operational tradeoffs`
        }
      ]
    }
  ]
};
