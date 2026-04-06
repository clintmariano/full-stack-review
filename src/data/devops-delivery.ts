import { Category } from "./types";

export const devopsDeliveryCategory: Category = {
  id: "devops-delivery",
  name: "DevOps / Delivery Architecture",
  subtitle: "Interview Questions",
  icon: "devops",
  color: "#6366f1",
  sections: [
    {
      title: "DevOps / Delivery Architecture Questions for Freshers and Intermediate Levels",
      questions: [
        {
          id: 1,
          question: "What is DevOps?",
          answer: `**DevOps** is a way of working that brings development and operations closer together to improve software delivery and system reliability.

Common goals:
- faster delivery
- better collaboration
- more automation
- more reliable releases
- faster incident response`
        },
        {
          id: 2,
          question: "Why is DevOps important?",
          answer: `DevOps is important because modern software needs to be delivered and operated continuously.

It helps teams:
- release changes faster
- reduce manual work
- improve deployment consistency
- respond to failures more effectively`
        },
        {
          id: 3,
          question: "What is delivery architecture?",
          answer: `**Delivery architecture** is the set of processes, tools, pipelines, and deployment patterns used to move software safely from source code to production.

It covers:
- build
- test
- packaging
- deployment
- rollback
- release controls`
        },
        {
          id: 4,
          question: "What is CI/CD?",
          answer: `**CI/CD** stands for:
- **Continuous Integration (CI)**: frequently merging and validating code changes
- **Continuous Delivery/Deployment (CD)**: automating the release path to environments and production

CI/CD reduces manual release effort and improves feedback speed.`
        },
        {
          id: 5,
          question: "What is Continuous Integration?",
          answer: `**Continuous Integration** is the practice of merging small code changes regularly and validating them automatically.

Typical CI activities:
- build
- unit tests
- linting
- security checks

The goal is to catch problems early.`
        },
        {
          id: 6,
          question: "What is Continuous Delivery?",
          answer: `**Continuous Delivery** means software is kept in a releasable state through automation.

Changes can be deployed to production quickly, but there may still be a manual approval before the final production step.`
        },
        {
          id: 7,
          question: "What is Continuous Deployment?",
          answer: `**Continuous Deployment** means changes that pass all automated checks are deployed to production automatically.

It requires:
- strong test automation
- reliable deployment pipelines
- good observability
- confidence in rollback or mitigation`
        },
        {
          id: 8,
          question: "What is a build pipeline?",
          answer: `A **build pipeline** is the automated sequence that turns source code into a validated deployable artifact.

It often includes:
- dependency installation
- compilation
- testing
- packaging
- publishing artifacts`
        },
        {
          id: 9,
          question: "What is a deployment pipeline?",
          answer: `A **deployment pipeline** automates how software is promoted through environments such as dev, test, staging, and production.

It helps make releases:
- repeatable
- auditable
- safer
- faster`
        },
        {
          id: 10,
          question: "What is a deployment artifact?",
          answer: `A **deployment artifact** is the package produced by the build process and deployed to an environment.

Examples:
- JAR file
- Docker image
- compiled frontend bundle

Artifacts should be versioned and reproducible.`
        },
        {
          id: 11,
          question: "Why is automation important in software delivery?",
          answer: `Automation is important because manual delivery steps are often:
- slow
- error-prone
- inconsistent
- hard to audit

Automation improves repeatability and reduces operational risk.`
        },
        {
          id: 12,
          question: "What is Infrastructure as Code (IaC)?",
          answer: `**Infrastructure as Code (IaC)** means defining infrastructure using code or declarative configuration.

Benefits:
- repeatable environments
- version control
- reduced manual drift
- easier review and automation`
        },
        {
          id: 13,
          question: "What is configuration management?",
          answer: `**Configuration management** is the practice of controlling how systems and applications are configured across environments.

It helps teams keep environments:
- consistent
- trackable
- reproducible`
        },
        {
          id: 14,
          question: "What is an environment in delivery architecture?",
          answer: `An **environment** is a place where software runs for a specific purpose.

Common environments:
- local
- development
- test
- staging
- production

Different environments support different validation and release needs.`
        },
        {
          id: 15,
          question: "Why do teams use staging environments?",
          answer: `A **staging environment** is used to validate software in a production-like setup before releasing to real users.

It helps catch:
- integration problems
- configuration issues
- deployment mistakes`
        },
        {
          id: 16,
          question: "What is version control and why does it matter in DevOps?",
          answer: `**Version control** tracks changes to code and often infrastructure definitions too.

It matters because it supports:
- collaboration
- rollback
- review
- traceability

Git-based workflows are a foundation of most DevOps practices.`
        },
        {
          id: 17,
          question: "What is a rollback?",
          answer: `A **rollback** is the process of returning to a previous known-good version after a failed deployment or serious issue.

Rollback reduces recovery time when releases go wrong.`
        },
        {
          id: 18,
          question: "What is a hotfix?",
          answer: `A **hotfix** is an urgent production change made to fix a critical issue.

Hotfixes need speed, but they still benefit from controlled pipelines and traceability.`
        },
        {
          id: 19,
          question: "What is a deployment strategy?",
          answer: `A **deployment strategy** is the approach used to release a new version of software.

Common strategies:
- rolling deployment
- blue-green deployment
- canary deployment
- recreate deployment

The choice affects risk, cost, and release speed.`
        },
        {
          id: 20,
          question: "What is a rolling deployment?",
          answer: `A **rolling deployment** gradually replaces old instances with new ones.

Benefits:
- reduced downtime
- gradual rollout

Risk:
- old and new versions may run together temporarily`
        },
        {
          id: 21,
          question: "What is blue-green deployment?",
          answer: `**Blue-green deployment** uses two production-like environments.

One serves live traffic while the new version is deployed to the other.
Traffic switches after validation.

It supports safer releases and easier rollback.`
        },
        {
          id: 22,
          question: "What is canary deployment?",
          answer: `A **canary deployment** releases a new version to a small subset of users or traffic first.

Benefits:
- reduced blast radius
- real production validation
- easier detection of regressions before full rollout`
        },
        {
          id: 23,
          question: "What is monitoring in DevOps?",
          answer: `Monitoring in DevOps means tracking the health and behavior of applications, infrastructure, and delivery systems.

It helps teams detect:
- failed deployments
- performance problems
- resource issues
- abnormal behavior`
        },
        {
          id: 24,
          question: "Why are logs and metrics important in delivery systems?",
          answer: `Logs and metrics help teams understand what happened during:
- builds
- tests
- deployments
- runtime incidents

They are important for troubleshooting failed releases and validating healthy ones.`
        },
        {
          id: 25,
          question: "What is a runbook?",
          answer: `A **runbook** is a documented set of steps for handling a known operational task or incident.

Examples:
- rollback procedure
- service restart
- failed deployment response

Runbooks improve consistency during pressure.`
        },
        {
          id: 26,
          question: "What is an incident response process in operations?",
          answer: `An **incident response process** is the structured way a team detects, responds to, communicates about, and resolves operational problems.

It helps reduce confusion and recovery time during outages.`
        },
        {
          id: 27,
          question: "What is containerization in delivery architecture?",
          answer: `**Containerization** packages an application and its dependencies into a consistent unit for running across environments.

It helps reduce environment differences and simplifies deployment.`
        },
        {
          id: 28,
          question: "What is orchestration?",
          answer: `**Orchestration** is the automated management of deployed workloads, often including:
- scheduling
- scaling
- service discovery
- restarts
- rolling updates

Container platforms often provide orchestration features.`
        },
        {
          id: 29,
          question: "What is GitOps?",
          answer: `**GitOps** is an operational model where the desired system state is defined in Git and applied automatically to environments.

Benefits:
- versioned changes
- auditability
- repeatable deployments

It is especially common in Kubernetes-based delivery setups.`
        },
        {
          id: 30,
          question: "What is the main goal of good delivery architecture?",
          answer: `The main goal is to deliver changes **quickly, safely, and repeatedly**.

A good delivery architecture reduces manual risk while improving release speed, consistency, and recovery capability.`
        }
      ]
    },
    {
      title: "DevOps / Delivery Architecture Questions for Experienced Levels",
      questions: [
        {
          id: 1,
          question: "How do you design a delivery pipeline for a production system?",
          answer: `A strong delivery pipeline usually includes:
- build and test automation
- artifact versioning
- security and quality checks
- environment promotion
- deployment controls
- rollback capability
- observability during rollout

The design should optimize both speed and safety.`
        },
        {
          id: 2,
          question: "What makes a CI/CD pipeline reliable at scale?",
          answer: `A reliable pipeline at scale usually has:
- fast feedback
- deterministic builds
- isolated test execution
- stable artifact storage
- controlled concurrency
- clear failure visibility

If the pipeline is slow or flaky, teams stop trusting it.`
        },
        {
          id: 3,
          question: "How do you balance deployment speed and release safety?",
          answer: `The balance comes from combining:
- strong automation
- small changes
- progressive rollout
- feature flags
- rollback readiness
- observability

The goal is not choosing speed or safety. It is building systems that support both.`
        },
        {
          id: 4,
          question: "What are the key differences between deployment and release?",
          answer: `**Deployment** means moving code to an environment.
**Release** means exposing functionality to users.

These can be separated using:
- feature flags
- config-based activation
- gradual traffic shifting

Separating deployment from release reduces risk and improves control.`
        },
        {
          id: 5,
          question: "Why are small, frequent deployments often safer than large, infrequent ones?",
          answer: `Small deployments usually:
- contain fewer changes
- are easier to understand
- reduce blast radius
- simplify rollback
- improve root-cause isolation

Large batch releases tend to increase uncertainty and recovery difficulty.`
        },
        {
          id: 6,
          question: "How do you design rollback and roll-forward strategies?",
          answer: `Both strategies should be planned before release.

**Rollback** is useful when reverting is fast and safe.
**Roll-forward** is useful when data changes or version compatibility make rollback risky.

Strong delivery systems support both, depending on the failure mode.`
        },
        {
          id: 7,
          question: "What are the tradeoffs of blue-green, canary, and rolling deployments?",
          answer: `**Blue-green**
- safer cutover
- easier rollback
- higher temporary cost

**Canary**
- lower blast radius
- strong real-traffic validation
- more rollout control complexity

**Rolling**
- efficient resource use
- simpler than blue-green in many cases
- mixed-version risk during rollout`
        },
        {
          id: 8,
          question: "How do feature flags improve delivery architecture?",
          answer: `Feature flags help by:
- decoupling deployment from release
- enabling gradual rollout
- supporting fast disablement of risky features
- making experiments safer

They improve control, but unmanaged flags can become technical debt.`
        },
        {
          id: 9,
          question: "What is progressive delivery?",
          answer: `**Progressive delivery** means releasing changes gradually based on traffic segments, environment stages, or feature controls.

Examples:
- internal users first
- 5% of traffic, then 25%, then 100%
- region-by-region rollout

It reduces risk by learning from small exposure before full release.`
        },
        {
          id: 10,
          question: "How do you think about database changes in delivery pipelines?",
          answer: `Database delivery needs special care because data is persistent and shared.

Common practices:
- backward-compatible schema changes
- expand-and-contract migrations
- versioned migrations
- rollout sequencing between code and schema

Schema changes are often the hardest part of safe delivery.`
        },
        {
          id: 11,
          question: "What is an expand-and-contract migration?",
          answer: `An **expand-and-contract** migration changes a schema in stages.

Typical flow:
- add new structure first
- support both old and new paths temporarily
- migrate data if needed
- remove old structure later

This reduces deployment risk across version transitions.`
        },
        {
          id: 12,
          question: "Why are immutable artifacts important?",
          answer: `Immutable artifacts ensure the exact same built package is promoted across environments.

Benefits:
- consistency
- traceability
- easier debugging
- reduced "works in staging but not production" problems`
        },
        {
          id: 13,
          question: "What is supply-chain security in CI/CD?",
          answer: `In CI/CD, supply-chain security means protecting:
- source control
- build systems
- dependencies
- artifacts
- deployment credentials

Compromise anywhere in that chain can affect production software.`
        },
        {
          id: 14,
          question: "How do you secure a CI/CD pipeline?",
          answer: `Common controls include:
- least-privilege credentials
- secret management
- artifact signing
- dependency scanning
- isolated runners or agents
- audit logging
- branch protection and review

Pipelines are high-value targets because they can reach production.`
        },
        {
          id: 15,
          question: "What is drift in infrastructure or configuration, and why is it risky?",
          answer: `**Drift** means the real deployed state no longer matches the intended declared state.

Risks:
- inconsistent environments
- security gaps
- deployment surprises
- hard-to-reproduce incidents

IaC and reconciliation-based tooling help control drift.`
        },
        {
          id: 16,
          question: "How does GitOps change deployment architecture?",
          answer: `GitOps makes Git the source of truth for desired environment state.

Benefits:
- auditability
- easier review
- declarative operations
- clearer rollback history

It works best when the environment can be reconciled reliably from declared state.`
        },
        {
          id: 17,
          question: "How do you manage secrets in delivery pipelines?",
          answer: `Strong secret handling usually includes:
- dedicated secret stores
- short-lived credentials where possible
- minimal scope access
- no hard-coded secrets in repos
- careful masking in logs

Pipeline secret exposure is a serious production risk.`
        },
        {
          id: 18,
          question: "How do you design environments without creating environment drift and complexity?",
          answer: `Common approaches:
- keep environments as similar as practical
- use IaC and reusable modules
- avoid manual fixes
- promote the same artifact
- automate config differences explicitly

Too many unique environment rules make delivery fragile.`
        },
        {
          id: 19,
          question: "What is trunk-based development, and why does it matter for delivery?",
          answer: `**Trunk-based development** means integrating to the main branch frequently with short-lived branches.

It supports:
- faster integration
- smaller merge conflicts
- better CI feedback
- easier continuous delivery

It pairs well with feature flags when incomplete work must stay hidden.`
        },
        {
          id: 20,
          question: "How do test strategy and delivery architecture interact?",
          answer: `Delivery speed depends heavily on the test pyramid and execution design.

A strong strategy usually balances:
- unit tests for fast feedback
- integration tests for realistic behavior
- targeted end-to-end tests for critical flows

Too many slow, flaky tests make delivery pipelines hard to trust.`
        },
        {
          id: 21,
          question: "What causes flaky pipelines, and how do you reduce flakiness?",
          answer: `Common causes:
- nondeterministic tests
- shared mutable environments
- timing assumptions
- unstable external dependencies
- race conditions

Reducing flakiness requires engineering discipline, because teams quickly stop trusting unreliable automation.`
        },
        {
          id: 22,
          question: "How do you observe and validate a deployment in production?",
          answer: `Useful checks include:
- error rate
- latency
- resource usage
- business KPIs
- logs and traces
- synthetic checks

Deployment success should be validated by system behavior, not only by the pipeline finishing.`
        },
        {
          id: 23,
          question: "How do SLOs influence release decisions?",
          answer: `SLOs help decide:
- whether a system is healthy enough to accept more change
- whether rollout should pause
- when reliability work should block feature release

They provide an objective signal instead of relying only on gut feeling.`
        },
        {
          id: 24,
          question: "What is deployment freeze, and when is it useful?",
          answer: `A **deployment freeze** is a temporary pause on production changes.

It can be useful during:
- major incidents
- high-risk business periods
- infrastructure instability

It should be used deliberately, not as a substitute for reliable delivery practices.`
        },
        {
          id: 25,
          question: "How do platform engineering and DevOps relate?",
          answer: `Platform engineering often provides reusable internal tooling and paved paths that support DevOps outcomes at scale.

Examples:
- standard deployment templates
- internal developer platforms
- shared observability and security controls

It helps teams move faster without each team rebuilding the same operational basics.`
        },
        {
          id: 26,
          question: "How do you think about build time versus feedback quality?",
          answer: `Fast feedback is critical, but speed alone is not enough.

You want:
- fast early checks
- deeper later-stage validation
- clear failure signals

The best pipeline is usually layered: cheap checks first, expensive checks later.`
        },
        {
          id: 27,
          question: "What is the role of observability in delivery architecture?",
          answer: `Observability is essential for:
- validating releases
- detecting regressions
- supporting rollback decisions
- understanding deployment impact

Without observability, delivery automation can move quickly in the wrong direction.`
        },
        {
          id: 28,
          question: "How do you design delivery for microservices without creating release chaos?",
          answer: `Useful practices include:
- clear service ownership
- backward-compatible contracts
- version discipline
- automated contract or integration checks
- standardized pipeline patterns

Independent deployability is valuable only if teams can release safely without breaking each other.`
        },
        {
          id: 29,
          question: "What distinguishes a strong senior answer about DevOps and delivery architecture?",
          answer: `A strong senior answer usually:
- connects release speed with safety
- explains tradeoffs in deployment patterns
- covers rollback, observability, and security
- considers database and environment complexity
- treats pipelines as production systems, not just scripts

Interviewers usually want practical delivery judgment, not only tool names.`
        },
        {
          id: 30,
          question: "What is the most common delivery architecture mistake teams make?",
          answer: `A common mistake is automating an unsafe or unclear release process instead of improving the process itself.

Other frequent problems:
- flaky pipelines
- weak rollback plans
- environment drift
- poor secret handling
- releasing without observability

Good delivery architecture is not just automation. It is safe, repeatable change management.`
        }
      ]
    }
  ]
};
