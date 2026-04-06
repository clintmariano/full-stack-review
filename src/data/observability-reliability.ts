import { Category } from "./types";

export const observabilityReliabilityCategory: Category = {
  id: "observability-reliability",
  name: "Observability & Reliability",
  subtitle: "Interview Questions",
  icon: "observability",
  color: "#f59e0b",
  sections: [
    {
      title: "Observability & Reliability Questions for Freshers and Intermediate Levels",
      questions: [
        {
          id: 1,
          question: "What is observability?",
          answer: `**Observability** is the ability to understand what is happening inside a system by using its outputs.

Common signals:
- logs
- metrics
- traces

Observability helps teams detect, investigate, and explain system behavior.`
        },
        {
          id: 2,
          question: "Why is observability important?",
          answer: `Observability is important because modern systems are distributed and complex.

It helps teams:
- detect failures quickly
- debug incidents
- understand performance
- monitor production behavior
- make better architecture decisions`
        },
        {
          id: 3,
          question: "What is reliability?",
          answer: `**Reliability** means a system performs correctly and consistently over time.

A reliable system:
- gives correct results
- handles failures well
- stays available when expected
- recovers predictably`
        },
        {
          id: 4,
          question: "What is the difference between observability and monitoring?",
          answer: `**Monitoring** usually means watching known metrics and alerts.
**Observability** is broader and helps investigate unknown problems too.

\`\`\`
Monitoring = detect known issues
Observability = understand known and unknown issues
\`\`\`

Both are important, but observability gives deeper diagnostic ability.`
        },
        {
          id: 5,
          question: "What are logs?",
          answer: `**Logs** are timestamped records of events that happen inside a system.

Examples:
- request received
- user login failed
- database connection error

Logs are useful for debugging and auditing.`
        },
        {
          id: 6,
          question: "What are metrics?",
          answer: `**Metrics** are numeric measurements collected over time.

Examples:
- CPU usage
- memory usage
- request count
- error rate
- response time

Metrics are useful for dashboards, alerts, and trend analysis.`
        },
        {
          id: 7,
          question: "What are traces?",
          answer: `**Traces** show how a request travels through multiple services or components.

They help answer:
- where time was spent
- which service failed
- how one call led to another

Traces are especially useful in microservices systems.`
        },
        {
          id: 8,
          question: "What is a distributed trace?",
          answer: `A **distributed trace** connects related operations across services into one end-to-end request view.

It helps teams understand:
- latency across services
- call dependencies
- failure points in a request path`
        },
        {
          id: 9,
          question: "What is a dashboard?",
          answer: `A **dashboard** is a visual view of key system metrics and health signals.

It can show:
- request volume
- latency
- error rate
- infrastructure health

Dashboards help teams monitor systems in real time.`
        },
        {
          id: 10,
          question: "What is an alert?",
          answer: `An **alert** is a notification triggered when a metric or condition crosses a threshold or pattern.

Examples:
- high error rate
- low disk space
- service unavailable

Alerts help teams respond quickly to operational problems.`
        },
        {
          id: 11,
          question: "What is an incident?",
          answer: `An **incident** is an event that disrupts or degrades a service.

Examples:
- outage
- elevated latency
- payment failures
- data processing delays

Incidents are the practical situations where observability and reliability matter most.`
        },
        {
          id: 12,
          question: "What is uptime?",
          answer: `**Uptime** is the amount of time a system is available and working.

It is often expressed as a percentage such as:
- 99%
- 99.9%
- 99.99%

Higher uptime targets usually require more engineering effort and redundancy.`
        },
        {
          id: 13,
          question: "What is downtime?",
          answer: `**Downtime** is the time when a system is unavailable or not functioning properly.

Downtime can be caused by:
- crashes
- dependency failures
- bad deployments
- network issues
- infrastructure problems`
        },
        {
          id: 14,
          question: "What is redundancy in reliability engineering?",
          answer: `**Redundancy** means having extra components so a system can continue working if one fails.

Examples:
- multiple app servers
- replicated databases
- multi-zone deployment

Redundancy improves availability and resilience.`
        },
        {
          id: 15,
          question: "What is failover?",
          answer: `**Failover** is switching to a backup component when the primary one fails.

Example:
- one service instance becomes unhealthy
- traffic shifts to healthy instances

Failover is a common reliability mechanism.`
        },
        {
          id: 16,
          question: "What is a health check?",
          answer: `A **health check** is a signal used to determine whether a service or component is working correctly.

Examples:
- liveness check
- readiness check
- database connectivity check

Health checks are often used for restarts and traffic routing decisions.`
        },
        {
          id: 17,
          question: "What is a heartbeat in distributed systems?",
          answer: `A **heartbeat** is a periodic signal sent by a service or node to show that it is still alive.

If heartbeats stop, the system may assume the node has failed.`
        },
        {
          id: 18,
          question: "What is mean time to recovery (MTTR)?",
          answer: `**MTTR** is the average time needed to restore service after an incident.

Lower MTTR usually means:
- faster detection
- easier diagnosis
- faster rollback or repair

Improving MTTR is a major reliability goal.`
        },
        {
          id: 19,
          question: "What is root cause analysis (RCA)?",
          answer: `**Root cause analysis (RCA)** is the process of finding the underlying reason an incident happened.

The goal is not only to fix the immediate issue, but also to prevent it from happening again.`
        },
        {
          id: 20,
          question: "What is a postmortem?",
          answer: `A **postmortem** is a structured review after an incident.

It usually covers:
- what happened
- impact
- timeline
- root causes
- follow-up actions

Good postmortems focus on learning and prevention, not blame.`
        },
        {
          id: 21,
          question: "What is an error rate?",
          answer: `**Error rate** is the percentage or count of requests that fail.

Examples:
- HTTP 5xx responses
- failed jobs
- timeout count

Error rate is a key reliability metric.`
        },
        {
          id: 22,
          question: "What is latency from an observability perspective?",
          answer: `From an observability perspective, **latency** is a measured signal showing how long requests or operations take.

Teams watch latency because it affects:
- user experience
- system health
- overload detection
- performance regressions`
        },
        {
          id: 23,
          question: "What is structured logging?",
          answer: `**Structured logging** records log data in a consistent machine-readable format.

Benefits:
- easier searching
- easier filtering
- better correlation
- improved automation

JSON logs are a common example.`
        },
        {
          id: 24,
          question: "What is a correlation ID?",
          answer: `A **correlation ID** is an identifier attached to related events and requests so they can be traced across services.

It helps connect:
- logs
- traces
- service calls

Correlation IDs make debugging distributed systems much easier.`
        },
        {
          id: 25,
          question: "What is sampling in observability?",
          answer: `**Sampling** means collecting only some telemetry data instead of everything.

It is often used for:
- traces
- high-volume logs

Sampling helps control storage and cost, but too much sampling can hide useful signals.`
        },
        {
          id: 26,
          question: "Why should systems avoid alert fatigue?",
          answer: `**Alert fatigue** happens when teams receive too many low-value alerts and start ignoring them.

This is dangerous because real incidents may then be missed.

Good alerts should be actionable and meaningful.`
        },
        {
          id: 27,
          question: "What is graceful degradation?",
          answer: `**Graceful degradation** means the system still provides partial value when some parts fail.

Example:
- recommendations fail, but checkout still works

This improves reliability from the user's point of view.`
        },
        {
          id: 28,
          question: "What is backup and restore in reliability engineering?",
          answer: `**Backup and restore** means saving data and being able to recover it later after loss or corruption.

Backups only help if restore procedures are tested and reliable.`
        },
        {
          id: 29,
          question: "What is capacity planning?",
          answer: `**Capacity planning** means estimating what resources a system needs to handle expected load safely.

It helps prevent outages caused by:
- traffic growth
- underprovisioning
- resource exhaustion`
        },
        {
          id: 30,
          question: "What is the first step in improving reliability or observability?",
          answer: `A practical first step is to **measure the current system clearly**.

That usually means:
- collecting useful metrics
- improving logs
- adding health checks
- defining basic alerts

Without visibility, reliability work becomes guesswork.`
        }
      ]
    },
    {
      title: "Observability & Reliability Questions for Experienced Levels",
      questions: [
        {
          id: 1,
          question: "What are the three pillars of observability, and why are they not always enough by themselves?",
          answer: `The classic three pillars are:
- logs
- metrics
- traces

They are foundational, but strong observability also needs:
- good instrumentation
- correlation
- context-rich dashboards
- alert design
- service ownership

Telemetry without usable interpretation still leaves teams blind.`
        },
        {
          id: 2,
          question: "What is the difference between SLI, SLO, and SLA?",
          answer: `**SLI**: a measured indicator such as latency or error rate
**SLO**: the reliability target for that indicator
**SLA**: the external commitment tied to business or contractual consequences

Strong reliability programs use SLOs to guide engineering priorities before SLAs are violated.`
        },
        {
          id: 3,
          question: "How do you choose meaningful SLIs?",
          answer: `Good SLIs measure user-relevant behavior rather than only internal component activity.

Examples:
- successful checkout rate
- API request latency
- message processing success rate

A metric is useful as an SLI only if it reflects real service quality.`
        },
        {
          id: 4,
          question: "What is an error budget?",
          answer: `An **error budget** is the amount of unreliability allowed by an SLO.

Example:
- 99.9% availability target allows about 0.1% failure over the measurement window

Error budgets help teams balance reliability work against feature delivery.`
        },
        {
          id: 5,
          question: "How do SLOs influence engineering decisions?",
          answer: `SLOs help teams decide:
- when reliability work should take priority
- whether changes are too risky
- how much operational overhead is acceptable
- where to focus improvement effort

They turn reliability from opinion into an explicit target.`
        },
        {
          id: 6,
          question: "What is toil in site reliability engineering?",
          answer: `**Toil** is repetitive, manual, operational work that adds little long-term value.

Examples:
- repetitive restarts
- manual environment fixes
- repeated log chasing for known issues

Reducing toil improves both reliability and engineering efficiency.`
        },
        {
          id: 7,
          question: "How do you design effective alerts?",
          answer: `Effective alerts should be:
- actionable
- tied to user or system impact
- low-noise
- routed to the right owners

Good alerts tell someone to do something useful. Bad alerts just create background stress.`
        },
        {
          id: 8,
          question: "What is the difference between symptom-based and cause-based alerting?",
          answer: `**Symptom-based alerts** fire on user-visible impact such as high latency or failed requests.
**Cause-based alerts** fire on potential underlying causes such as disk nearing full or replica lag.

Symptom-based alerts are often better for paging.
Cause-based alerts are useful for context and early warning.`
        },
        {
          id: 9,
          question: "Why is paging on every failure a bad idea?",
          answer: `Not every failure needs an immediate human wake-up.

Paging should be reserved for issues that are:
- urgent
- user-impacting
- actionable right now

Paging on low-value signals leads to alert fatigue and slower real response over time.`
        },
        {
          id: 10,
          question: "How do you reduce alert fatigue in a production environment?",
          answer: `Common approaches:
- remove noisy alerts
- tune thresholds
- aggregate duplicate pages
- use better routing and severity levels
- page only on actionable issues

Alert quality is usually more valuable than alert quantity.`
        },
        {
          id: 11,
          question: "What is cardinality in metrics, and why does it matter?",
          answer: `**Cardinality** refers to how many unique label combinations a metric can produce.

High-cardinality metrics can become expensive and hard to manage.

Examples of risky labels:
- user ID
- request ID
- highly variable paths

Metric design needs discipline to stay scalable.`
        },
        {
          id: 12,
          question: "How do you think about high-cardinality telemetry?",
          answer: `High-cardinality data is often more suitable for:
- logs
- traces
- targeted debugging tools

Metrics should usually stay aggregated and stable.

Choosing the wrong signal type can make observability systems costly and noisy.`
        },
        {
          id: 13,
          question: "What is white-box monitoring versus black-box monitoring?",
          answer: `**White-box monitoring** uses internal knowledge such as app metrics and component states.
**Black-box monitoring** tests the system from the outside, like a real client.

Both matter:
- white-box explains internal behavior
- black-box shows real user experience`
        },
        {
          id: 14,
          question: "What is synthetic monitoring?",
          answer: `**Synthetic monitoring** uses automated checks that simulate user actions or API calls.

It helps with:
- early outage detection
- endpoint validation
- uptime checks from different locations

It is useful even when no real users are active.`
        },
        {
          id: 15,
          question: "How do you instrument a system for tracing effectively?",
          answer: `Effective tracing usually includes:
- consistent trace propagation
- spans around meaningful operations
- useful attributes such as service, endpoint, and error status
- correlation with logs and metrics

Tracing is most valuable when it reflects real workflow boundaries rather than every tiny implementation detail.`
        },
        {
          id: 16,
          question: "Why is context propagation important in distributed systems?",
          answer: `Context propagation carries identifiers and metadata across service boundaries.

It helps preserve:
- trace continuity
- request identity
- tenant or user context where appropriate

Without context propagation, debugging multi-service issues becomes fragmented and slow.`
        },
        {
          id: 17,
          question: "How do you approach incident response technically?",
          answer: `A strong technical response usually includes:
- detect and confirm impact
- stabilize or mitigate
- communicate status
- investigate using telemetry
- recover safely
- document follow-up actions

Fast recovery is usually more important during the incident than perfect diagnosis in the first minutes.`
        },
        {
          id: 18,
          question: "What makes a good incident timeline?",
          answer: `A good timeline clearly records:
- when the issue started
- when it was detected
- what actions were taken
- what changed the situation
- when recovery happened

Good timelines improve learning and reduce confusion in postmortems.`
        },
        {
          id: 19,
          question: "Why are blameless postmortems important?",
          answer: `Blameless postmortems encourage honest analysis of system weaknesses instead of hiding mistakes.

They focus on:
- contributing factors
- missing safeguards
- unclear processes
- follow-up improvements

Reliability improves faster when teams can speak openly about failure.`
        },
        {
          id: 20,
          question: "How do you design systems for graceful degradation?",
          answer: `Common techniques:
- fallback responses
- cached data
- optional feature shedding
- queueing non-critical work
- prioritizing core user flows

The goal is to preserve the most important value even during partial failure.`
        },
        {
          id: 21,
          question: "What is a circuit breaker, and how does it improve reliability?",
          answer: `A **circuit breaker** stops repeated calls to a failing dependency for a period of time.

Benefits:
- reduces wasted work
- protects resources
- avoids cascading failure
- gives dependencies time to recover

It is often combined with timeouts and retries.`
        },
        {
          id: 22,
          question: "How do retries help reliability but also create risk?",
          answer: `Retries can recover transient failures, but excessive retries can:
- amplify load
- increase latency
- overload dependencies
- hide deeper problems

Retries should use limits, backoff, jitter, and idempotent operations where possible.`
        },
        {
          id: 23,
          question: "What is chaos engineering?",
          answer: `**Chaos engineering** is the practice of deliberately introducing failures to test how systems behave.

Examples:
- killing instances
- adding latency
- dropping network traffic

It helps validate resilience assumptions before real incidents do.`
        },
        {
          id: 24,
          question: "How do you validate backup and restore reliability?",
          answer: `Backups are not enough by themselves.

You should validate:
- restore speed
- restore correctness
- access procedures
- dependency recovery
- whether recovered data actually supports the application

A backup strategy is incomplete until restore has been exercised.`
        },
        {
          id: 25,
          question: "What is a runbook?",
          answer: `A **runbook** is a documented set of steps for handling a known operational situation.

Examples:
- service restart procedure
- failover steps
- dependency outage response

Good runbooks reduce MTTR and help responders act consistently under stress.`
        },
        {
          id: 26,
          question: "How do release practices affect reliability?",
          answer: `Release practices strongly influence reliability.

Safer practices include:
- canary deployments
- blue-green deployments
- feature flags
- rollback readiness
- observability during rollout

Many outages are caused by change, so delivery discipline matters.`
        },
        {
          id: 27,
          question: "How do you think about reliability in dependencies you do not control?",
          answer: `For external dependencies, strong design includes:
- timeouts
- retries with limits
- fallback behavior
- circuit breakers
- clear observability around the dependency

You cannot control the dependency, but you can control how much it damages your system when it fails.`
        },
        {
          id: 28,
          question: "What is the difference between resilience and reliability?",
          answer: `**Reliability** is consistent correct service over time.
**Resilience** is the ability to recover from or withstand failure.

Resilience is one of the ways reliability is achieved, especially in failure-prone distributed systems.`
        },
        {
          id: 29,
          question: "What distinguishes a strong senior answer about observability and reliability?",
          answer: `A strong senior answer usually:
- connects telemetry to user impact
- uses SLO thinking
- understands alert quality
- thinks about failure modes and recovery
- values postmortems, automation, and operational learning

Interviewers usually want practical operating judgment, not just monitoring vocabulary.`
        },
        {
          id: 30,
          question: "What is the most common observability or reliability mistake teams make?",
          answer: `A common mistake is collecting a lot of telemetry without making it actionable.

Other frequent problems:
- weak ownership
- noisy alerts
- missing trace correlation
- untested recovery procedures
- focusing only on dashboards instead of user impact

Observability and reliability improve when systems are measurable, operable, and exercised under real conditions.`
        }
      ]
    }
  ]
};
