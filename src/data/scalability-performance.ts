import { Category } from "./types";

export const scalabilityPerformanceCategory: Category = {
  id: "scalability-performance",
  name: "Scalability & Performance",
  subtitle: "Interview Questions",
  icon: "scalability",
  color: "#10b981",
  sections: [
    {
      title: "Scalability & Performance Questions for Freshers and Intermediate Levels",
      questions: [
        {
          id: 1,
          question: "What is scalability?",
          answer: `**Scalability** is the ability of a system to handle increasing traffic, users, or data without failing or degrading badly.

Two common forms:
- vertical scaling
- horizontal scaling

It is a core requirement for systems expected to grow over time.`
        },
        {
          id: 2,
          question: "What is performance in software systems?",
          answer: `**Performance** describes how efficiently a system responds and processes work.

It often includes:
- response time
- throughput
- resource usage
- latency under load

A system can be functional but still fail users if its performance is poor.`
        },
        {
          id: 3,
          question: "What is the difference between scalability and performance?",
          answer: `**Performance** is how well a system works at a given load.
**Scalability** is how well it continues to work as load increases.

\`\`\`
Performance = speed and efficiency now
Scalability = ability to handle growth later
\`\`\`

A fast system is not always scalable, and a scalable design still needs good performance tuning.`
        },
        {
          id: 4,
          question: "What is latency?",
          answer: `**Latency** is the time it takes for a request or operation to complete.

Examples:
- API response time
- database query duration
- message delivery delay

Lower latency usually improves user experience.`
        },
        {
          id: 5,
          question: "What is throughput?",
          answer: `**Throughput** is the amount of work a system can process in a period of time.

Examples:
- requests per second
- transactions per minute
- messages processed per hour

High throughput is important for busy systems, but it should not come at unacceptable latency.`
        },
        {
          id: 6,
          question: "What is response time?",
          answer: `**Response time** is the total time from when a user or client sends a request until they receive a result.

It can include:
- network time
- application processing
- database calls
- downstream service calls`
        },
        {
          id: 7,
          question: "What is the difference between latency and throughput?",
          answer: `**Latency** measures how long one operation takes.
**Throughput** measures how much work the system handles over time.

Example:
- low latency means one request is fast
- high throughput means many requests can be handled efficiently

Systems often need to balance both.`
        },
        {
          id: 8,
          question: "What is vertical scaling?",
          answer: `**Vertical scaling** means adding more CPU, memory, or storage to a single machine.

Benefits:
- simple to implement
- fewer distributed-system concerns

Limits:
- hardware ceiling
- can become expensive
- one machine can still remain a single point of failure`
        },
        {
          id: 9,
          question: "What is horizontal scaling?",
          answer: `**Horizontal scaling** means adding more machines or service instances to handle more load.

Benefits:
- supports larger growth
- improves availability when combined with redundancy

Requirements:
- load balancing
- statelessness or shared state handling
- distributed coordination`
        },
        {
          id: 10,
          question: "What is load balancing?",
          answer: `A **load balancer** distributes traffic across multiple servers or instances.

Benefits:
- better resource usage
- improved availability
- easier horizontal scale

Common algorithms:
- round robin
- weighted round robin
- least connections`
        },
        {
          id: 11,
          question: "What is caching?",
          answer: `**Caching** stores frequently accessed data closer to where it is needed so it can be returned faster.

Benefits:
- lower latency
- less database load
- improved throughput

Common cache layers:
- browser
- CDN
- application
- database`
        },
        {
          id: 12,
          question: "Why is caching important for performance?",
          answer: `Caching improves performance by avoiding repeated expensive work.

Examples:
- reusing computed results
- serving common data from memory
- reducing repeated database reads

The main benefit is faster responses with lower backend pressure.`
        },
        {
          id: 13,
          question: "What is a cache hit and a cache miss?",
          answer: `A **cache hit** means the requested data is found in the cache.
A **cache miss** means it is not found, so the system must fetch it from the original source.

Higher hit rates usually improve performance, assuming the cached data is useful and valid.`
        },
        {
          id: 14,
          question: "What is CDN and how does it help performance?",
          answer: `A **CDN (Content Delivery Network)** serves static or cacheable content from locations closer to users.

It helps by:
- reducing latency
- offloading the origin server
- improving global performance

It is especially useful for images, scripts, stylesheets, and downloadable assets.`
        },
        {
          id: 15,
          question: "What is database indexing?",
          answer: `A **database index** is a data structure that helps the database find rows faster.

Without a good index, the database may scan many rows unnecessarily.

Indexes improve read performance, but too many indexes can slow writes and increase storage usage.`
        },
        {
          id: 16,
          question: "How can slow database queries affect application performance?",
          answer: `Slow queries can become a major bottleneck because many requests depend on the database.

Effects:
- high response times
- thread or connection blocking
- poor throughput
- cascading slowdown across services`
        },
        {
          id: 17,
          question: "What is a bottleneck in a system?",
          answer: `A **bottleneck** is the component that limits the overall capacity or speed of the system.

Examples:
- slow database
- overloaded CPU
- network bandwidth limit
- external API delay

Improving non-bottleneck parts often gives little benefit.`
        },
        {
          id: 18,
          question: "What is asynchronous processing?",
          answer: `**Asynchronous processing** means work is handled later or separately instead of making the user wait for completion immediately.

Examples:
- email sending
- image resizing
- report generation

It helps responsiveness and smooths traffic spikes.`
        },
        {
          id: 19,
          question: "How do queues help scalability?",
          answer: `Queues help scalability by buffering work between producers and consumers.

Benefits:
- absorb spikes
- decouple components
- allow background processing
- improve resilience under bursty traffic`
        },
        {
          id: 20,
          question: "What is rate limiting?",
          answer: `**Rate limiting** controls how many requests a client can make in a given time.

It helps with:
- protecting backend systems
- preventing abuse
- maintaining fair usage
- avoiding overload during traffic spikes`
        },
        {
          id: 21,
          question: "What is autoscaling?",
          answer: `**Autoscaling** automatically adds or removes resources based on load or metrics.

Examples:
- adding service instances when CPU is high
- reducing instances when traffic falls

It improves elasticity and can control cost if configured well.`
        },
        {
          id: 22,
          question: "What is sharding?",
          answer: `**Sharding** splits data across multiple database instances using a shard key.

It is used when one database can no longer handle total data size or traffic.

Sharding improves scale, but it adds operational and query complexity.`
        },
        {
          id: 23,
          question: "What is replication?",
          answer: `**Replication** means keeping copies of data on multiple nodes.

Benefits:
- higher availability
- read scaling
- resilience

It is common in distributed databases and read-heavy systems.`
        },
        {
          id: 24,
          question: "What is connection pooling?",
          answer: `**Connection pooling** reuses existing connections instead of creating a new one for every request.

It is common for:
- database connections
- HTTP client connections

Pooling reduces overhead and improves throughput, but poorly sized pools can also cause contention.`
        },
        {
          id: 25,
          question: "What is compression and how can it improve performance?",
          answer: `**Compression** reduces the size of data sent over the network.

Benefits:
- lower bandwidth usage
- faster transfer for large responses

Tradeoff:
- CPU is used to compress and decompress data

It is often helpful for text-heavy API or web responses.`
        },
        {
          id: 26,
          question: "What is lazy loading?",
          answer: `**Lazy loading** means loading data or resources only when they are actually needed.

Examples:
- loading images when they enter the viewport
- fetching related records only when accessed

It can improve startup or initial response time, but too much lazy loading can also create extra round trips.`
        },
        {
          id: 27,
          question: "What is preloading or eager loading?",
          answer: `**Preloading** or **eager loading** means fetching data or resources in advance.

It can reduce later wait time, but if overused it wastes memory, bandwidth, or processing.

Good performance work chooses the right loading strategy for the use case.`
        },
        {
          id: 28,
          question: "Why are metrics important for scalability and performance?",
          answer: `Metrics help teams understand how the system behaves under real load.

Common metrics:
- latency
- throughput
- error rate
- CPU
- memory
- queue depth

Without metrics, performance tuning becomes guesswork.`
        },
        {
          id: 29,
          question: "What is stress testing?",
          answer: `**Stress testing** checks how a system behaves under extreme load beyond normal operating levels.

It helps identify:
- failure points
- bottlenecks
- recovery behavior
- overload risks`
        },
        {
          id: 30,
          question: "What is the first step when trying to improve performance?",
          answer: `The first step is usually to **measure and identify the real bottleneck**.

A practical approach:
1. collect metrics
2. profile or trace the slow path
3. confirm where time or resources are actually spent
4. optimize the highest-impact issue first

Blind optimization is a common mistake.`
        }
      ]
    },
    {
      title: "Scalability & Performance Questions for Experienced Levels",
      questions: [
        {
          id: 1,
          question: "How do you approach scalability planning for a growing system?",
          answer: `A strong approach starts with:
- traffic estimates
- growth assumptions
- usage patterns
- latency targets
- failure scenarios

Then you identify likely bottlenecks in:
- compute
- storage
- network
- downstream dependencies

Capacity planning should be based on evidence and business expectations, not only rough intuition.`
        },
        {
          id: 2,
          question: "What is the difference between p50, p95, and p99 latency?",
          answer: `These are latency percentiles.

- **p50**: median request latency
- **p95**: 95% of requests are faster than this
- **p99**: 99% of requests are faster than this

Senior engineers care about tail latencies like p95 and p99 because bad user experiences often hide there even when average latency looks acceptable.`
        },
        {
          id: 3,
          question: "Why is average latency often misleading?",
          answer: `Average latency can hide outliers.

Example:
- many requests are fast
- a smaller set is extremely slow

The average may still look fine, while real users experience serious delays.

That is why percentile-based metrics are usually more useful in production.`
        },
        {
          id: 4,
          question: "How do you identify a real bottleneck in production?",
          answer: `Use evidence from:
- metrics
- distributed traces
- profiles
- query analysis
- queue depth
- resource saturation signals

A bottleneck often shows up as one constrained resource or dependency causing the rest of the system to wait. The goal is to confirm it before optimizing.`
        },
        {
          id: 5,
          question: "What is Little's Law and why is it useful?",
          answer: `**Little's Law** is commonly expressed as:

\`\`\`
L = lambda * W
\`\`\`

Where:
- \`L\` = average number of items in the system
- \`lambda\` = arrival rate
- \`W\` = average time in system

It helps reason about concurrency, queue sizes, and response times under load.`
        },
        {
          id: 6,
          question: "How do you reason about capacity planning?",
          answer: `Capacity planning means estimating what resources are needed to meet expected demand with safe headroom.

You usually consider:
- peak requests per second
- concurrency
- payload size
- CPU and memory cost per request
- storage growth
- dependency limits

Good planning includes both normal traffic and abnormal spikes.`
        },
        {
          id: 7,
          question: "What is backpressure and how do you implement it?",
          answer: `**Backpressure** slows producers when consumers cannot keep up.

Implementation examples:
- bounded queues
- rate limits
- rejecting excess work
- consumer lag monitoring
- adaptive throttling

Without backpressure, overload often turns into cascading failure.`
        },
        {
          id: 8,
          question: "What causes cascading failures in distributed systems?",
          answer: `Cascading failures happen when one overloaded or failed component causes pressure on others.

Common causes:
- missing timeouts
- retries without limits
- shared dependency overload
- thread pool exhaustion
- unbounded queues

Good resilience patterns are as important as raw performance tuning.`
        },
        {
          id: 9,
          question: "How do retries improve reliability but also hurt performance?",
          answer: `Retries can recover from transient failures, but they can also amplify load during incidents.

Risks:
- duplicate traffic
- longer queues
- more contention
- downstream collapse

Retries should usually include:
- timeouts
- backoff
- jitter
- retry limits
- idempotency awareness`
        },
        {
          id: 10,
          question: "What is the thundering herd problem?",
          answer: `The **thundering herd** problem happens when many clients or workers act at the same time against the same resource.

Examples:
- cache expires and many requests hit the database
- all clients retry simultaneously

Mitigations:
- jitter
- request coalescing
- staggered refresh
- cache warming`
        },
        {
          id: 11,
          question: "What is cache stampede and how do you avoid it?",
          answer: `A **cache stampede** happens when popular cached data expires and many requests try to rebuild it at once.

Mitigations:
- soft TTL
- request collapsing
- background refresh
- locking around recomputation
- randomized expiration`
        },
        {
          id: 12,
          question: "How do you choose what to cache?",
          answer: `Cache data that is:
- expensive to compute or fetch
- read frequently
- relatively stable
- acceptable to serve slightly stale when appropriate

Do not cache blindly. Consider invalidation, memory cost, freshness requirements, and failure behavior.`
        },
        {
          id: 13,
          question: "What are common cache invalidation strategies?",
          answer: `Common strategies include:
- time-based expiration (TTL)
- write-through
- write-behind
- explicit eviction on update
- versioned keys

Cache invalidation is hard because stale or inconsistent data can create correctness issues even when performance improves.`
        },
        {
          id: 14,
          question: "What is the difference between read-through, write-through, and write-behind caching?",
          answer: `**Read-through**
- cache loads data on read miss

**Write-through**
- writes go to cache and backing store together

**Write-behind**
- cache accepts the write first and persists later

Write-behind can improve throughput, but it increases durability and consistency risks.`
        },
        {
          id: 15,
          question: "How do you optimize database performance at the architecture level?",
          answer: `Common approaches:
- add the right indexes
- remove N+1 patterns
- reduce unnecessary queries
- partition or shard when needed
- use replicas for read-heavy traffic
- choose the right data model
- cache strategically

Database performance problems are often architectural, not just SQL syntax issues.`
        },
        {
          id: 16,
          question: "What is the N+1 query problem and why is it dangerous at scale?",
          answer: `The **N+1 query problem** happens when one query loads parent records and then additional queries are issued for each related item.

At scale, it is dangerous because:
- latency grows quickly
- database load spikes
- throughput drops

It often appears in ORMs and lazy-loading-heavy code paths.`
        },
        {
          id: 17,
          question: "How do read replicas help performance, and what are their tradeoffs?",
          answer: `Read replicas help by offloading read traffic from the primary database.

Benefits:
- improved read scale
- reduced pressure on primary

Tradeoffs:
- replication lag
- stale reads
- more routing complexity

Architects must decide which reads can tolerate delay.`
        },
        {
          id: 18,
          question: "When is sharding appropriate, and what problems does it create?",
          answer: `Sharding is appropriate when one database instance cannot handle the size or traffic of the workload.

Problems it creates:
- cross-shard queries
- rebalancing complexity
- harder transactions
- uneven shard distribution
- operational overhead

It is powerful, but usually not the first scaling step.`
        },
        {
          id: 19,
          question: "How do queues improve throughput but sometimes increase latency?",
          answer: `Queues can improve throughput by smoothing spikes and letting workers process jobs steadily.

However, if backlog grows:
- wait time increases
- end-to-end latency rises
- users may experience delayed outcomes

This is a classic throughput vs latency tradeoff.`
        },
        {
          id: 20,
          question: "How do you choose between synchronous and asynchronous processing for performance-sensitive systems?",
          answer: `Use synchronous processing when:
- immediate result is required
- user flow depends on the output

Use asynchronous processing when:
- work can be deferred
- traffic spikes need buffering
- downstream work is expensive

The right choice depends on user expectations, correctness requirements, and failure handling.`
        },
        {
          id: 21,
          question: "What is connection pool exhaustion?",
          answer: `**Connection pool exhaustion** happens when all available connections are busy and new requests must wait or fail.

Common causes:
- slow queries
- connection leaks
- too much concurrency
- downstream slowness

It is a frequent production bottleneck in database-heavy systems.`
        },
        {
          id: 22,
          question: "How do thread pools affect performance and scalability?",
          answer: `Thread pools control concurrency for background work or request handling.

If too small:
- work waits too long

If too large:
- context switching rises
- memory use grows
- downstream resources can get overwhelmed

Pool sizing should reflect workload characteristics and dependency limits.`
        },
        {
          id: 23,
          question: "What is head-of-line blocking?",
          answer: `**Head-of-line blocking** happens when one slow task delays others behind it.

Examples:
- one slow request occupying a shared queue
- one large response blocking smaller ones on the same path

It hurts tail latency and fairness under load.`
        },
        {
          id: 24,
          question: "How do you think about tail latency in distributed systems?",
          answer: `Tail latency is the slow end of the latency distribution, often measured by p95 or p99.

It matters because one user request may depend on many internal calls. Even if most calls are fast, a few slow ones can dominate the total.

Architects reduce tail latency with:
- timeouts
- reducing fan-out
- avoiding contention
- isolating noisy neighbors`
        },
        {
          id: 25,
          question: "What is fan-out and why can it hurt performance?",
          answer: `**Fan-out** means one request triggers calls to many downstream services or resources.

Problems:
- higher total latency risk
- more partial failure points
- amplified load
- harder debugging

Too much fan-out often makes systems fragile and unpredictable under load.`
        },
        {
          id: 26,
          question: "How do you use load testing effectively?",
          answer: `Effective load testing should:
- match realistic traffic patterns
- include peak and burst scenarios
- measure latency percentiles, errors, and saturation
- test critical user flows
- validate recovery behavior

The goal is learning where the system bends and breaks before production does it for you.`
        },
        {
          id: 27,
          question: "What are common anti-patterns in performance tuning?",
          answer: `Common anti-patterns:
- optimizing before measuring
- focusing only on average latency
- ignoring downstream dependencies
- over-caching everything
- adding hardware without fixing inefficient design
- increasing retries during overload

Good performance work is targeted, measured, and validated.`
        },
        {
          id: 28,
          question: "How do you balance cost and performance in architecture decisions?",
          answer: `The goal is not maximum performance at any price.

You usually balance:
- user experience targets
- business value
- infrastructure cost
- engineering complexity
- operational risk

The right solution is often the cheapest design that reliably meets the actual requirement.`
        },
        {
          id: 29,
          question: "How do observability and performance engineering connect?",
          answer: `Performance engineering depends on observability.

You need:
- metrics for latency, throughput, errors, and saturation
- traces for slow request paths
- logs for context
- dashboards and alerts for regressions

Without observability, performance problems are hard to detect, explain, and fix.`
        },
        {
          id: 30,
          question: "What distinguishes a strong senior answer about scalability and performance?",
          answer: `A strong senior answer usually:
- defines the workload clearly
- uses metrics instead of guesses
- identifies bottlenecks precisely
- explains tradeoffs
- considers failure modes under load
- balances latency, throughput, cost, and complexity

Interviewers usually want practical judgment, not just vocabulary.`
        }
      ]
    }
  ]
};
