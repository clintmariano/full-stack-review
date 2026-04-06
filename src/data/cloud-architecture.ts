import { Category } from "./types";

export const cloudArchitectureCategory: Category = {
  id: "cloud-architecture",
  name: "Cloud Architecture",
  subtitle: "Interview Questions",
  icon: "cloud",
  color: "#0ea5e9",
  sections: [
    {
      title: "Cloud Architecture Questions for Freshers and Intermediate Levels",
      questions: [
        {
          id: 1,
          question: "What is cloud computing?",
          answer: `**Cloud computing** is the delivery of computing resources such as servers, storage, networking, and software over the internet.

It allows organizations to:
- provision resources on demand
- pay based on usage
- scale more easily
- avoid managing all physical infrastructure directly`
        },
        {
          id: 2,
          question: "What is cloud architecture?",
          answer: `**Cloud architecture** is the design of systems that run on cloud infrastructure and managed services.

It includes decisions about:
- compute
- storage
- networking
- security
- scaling
- reliability

The goal is to build systems that are flexible, resilient, and cost-aware.`
        },
        {
          id: 3,
          question: "What are the main cloud service models: IaaS, PaaS, and SaaS?",
          answer: `**IaaS**
- infrastructure like virtual machines and networks

**PaaS**
- managed platforms for deploying applications

**SaaS**
- complete software delivered to end users

\`\`\`
IaaS = more control
PaaS = less infrastructure management
SaaS = finished product for users
\`\`\``
        },
        {
          id: 4,
          question: "What is the difference between public, private, and hybrid cloud?",
          answer: `**Public cloud**
- shared provider infrastructure

**Private cloud**
- dedicated environment for one organization

**Hybrid cloud**
- combination of on-premises or private systems with public cloud

The right choice depends on compliance, control, cost, and integration needs.`
        },
        {
          id: 5,
          question: "What are the main benefits of cloud architecture?",
          answer: `Common benefits:
- elastic scaling
- faster provisioning
- global reach
- managed services
- reduced hardware management
- pay-as-you-go pricing

These benefits can improve delivery speed and operational flexibility.`
        },
        {
          id: 6,
          question: "What is elasticity in cloud systems?",
          answer: `**Elasticity** is the ability to automatically add or remove resources as demand changes.

Example:
- scale out during traffic spikes
- scale in during low usage

Elasticity is one of the biggest advantages of cloud platforms.`
        },
        {
          id: 7,
          question: "What is scalability in cloud architecture?",
          answer: `**Scalability** is the ability of a cloud system to handle increasing demand without major performance loss.

Common cloud scaling strategies:
- autoscaling compute
- load balancing
- caching
- read replicas
- message queues`
        },
        {
          id: 8,
          question: "What is a virtual machine in cloud computing?",
          answer: `A **virtual machine (VM)** is a software-based computer running on shared physical hardware.

It provides:
- isolated operating system environment
- configurable CPU, memory, and storage
- flexibility for many workloads

VMs are common in IaaS environments.`
        },
        {
          id: 9,
          question: "What are containers in cloud architecture?",
          answer: `**Containers** package an application and its dependencies into a lightweight, portable unit.

Benefits:
- faster startup than many VMs
- consistent deployment
- better resource efficiency

Containers are widely used for microservices and cloud-native applications.`
        },
        {
          id: 10,
          question: "What is the difference between VMs and containers?",
          answer: `**VMs**
- include a full guest OS
- heavier isolation
- more overhead

**Containers**
- share the host OS kernel
- lighter and faster to start
- often higher density

Containers are usually more efficient, while VMs can provide stronger isolation boundaries.`
        },
        {
          id: 11,
          question: "What is serverless computing?",
          answer: `**Serverless computing** lets you run code without managing servers directly.

Common characteristics:
- event-driven execution
- automatic scaling
- pay per execution or usage

It is useful for many variable or bursty workloads, though it still runs on servers managed by the provider.`
        },
        {
          id: 12,
          question: "What are common use cases for serverless?",
          answer: `Common use cases include:
- APIs
- background jobs
- file processing
- scheduled tasks
- event-driven workflows

Serverless is especially attractive when workload patterns are uneven or operational simplicity is important.`
        },
        {
          id: 13,
          question: "What is object storage?",
          answer: `**Object storage** stores data as objects rather than traditional file blocks.

It is commonly used for:
- images
- videos
- backups
- logs
- documents

It is durable, scalable, and widely used in cloud systems.`
        },
        {
          id: 14,
          question: "What is block storage?",
          answer: `**Block storage** stores data in fixed-size blocks and is typically attached to compute instances like disks.

It is commonly used for:
- VM volumes
- databases
- operating system disks

It is suitable for low-level read/write access.`
        },
        {
          id: 15,
          question: "What is managed database service in the cloud?",
          answer: `A **managed database service** is a cloud database offering where the provider handles much of the operational work.

Examples of managed tasks:
- backups
- patching
- replication
- failover
- monitoring

It reduces operational burden compared with self-managed databases.`
        },
        {
          id: 16,
          question: "What is a load balancer in cloud environments?",
          answer: `A **cloud load balancer** distributes traffic across multiple instances or services.

It helps with:
- high availability
- horizontal scaling
- health checking
- TLS termination

It is often a core entry point for cloud applications.`
        },
        {
          id: 17,
          question: "What is auto scaling in the cloud?",
          answer: `**Auto scaling** automatically adjusts the number of running resources based on demand or metrics.

Examples:
- add instances when CPU is high
- scale workers based on queue length

It helps meet demand while controlling cost.`
        },
        {
          id: 18,
          question: "What is a region and an availability zone?",
          answer: `A **region** is a geographic area containing cloud infrastructure.
An **availability zone** is an isolated location within a region.

Using multiple zones can improve availability because failures in one zone do not necessarily affect others.`
        },
        {
          id: 19,
          question: "Why are multiple availability zones important?",
          answer: `Multiple availability zones improve resilience by reducing dependence on a single failure domain.

Benefits:
- better availability
- failover options
- safer maintenance

Critical production systems are often designed to survive the loss of one zone.`
        },
        {
          id: 20,
          question: "What is a CDN in cloud architecture?",
          answer: `A **CDN (Content Delivery Network)** caches and serves content from locations closer to users.

It helps with:
- lower latency
- reduced origin load
- better global performance

It is especially useful for static assets and downloadable content.`
        },
        {
          id: 21,
          question: "What is Infrastructure as Code (IaC)?",
          answer: `**Infrastructure as Code (IaC)** means managing infrastructure using code or declarative configuration instead of manual setup.

Benefits:
- repeatability
- version control
- automation
- reduced configuration drift

It is a major practice in modern cloud engineering.`
        },
        {
          id: 22,
          question: "Why is Infrastructure as Code important?",
          answer: `IaC is important because manual infrastructure changes are:
- harder to track
- harder to reproduce
- more error-prone

IaC helps teams build environments consistently across dev, test, and production.`
        },
        {
          id: 23,
          question: "What is cloud monitoring?",
          answer: `**Cloud monitoring** means collecting and observing metrics, logs, traces, and health information about cloud resources and applications.

It helps teams:
- detect problems
- understand performance
- troubleshoot incidents
- plan capacity`
        },
        {
          id: 24,
          question: "What is cloud security?",
          answer: `**Cloud security** is the practice of protecting cloud-hosted systems, data, identities, and services.

It includes:
- IAM
- network controls
- encryption
- logging
- secret management
- secure configuration`
        },
        {
          id: 25,
          question: "What is IAM in cloud platforms?",
          answer: `**IAM (Identity and Access Management)** controls who or what can access cloud resources.

It manages:
- users
- roles
- permissions
- service identities

Strong IAM design is central to cloud security.`
        },
        {
          id: 26,
          question: "What is the shared responsibility model in cloud computing?",
          answer: `The **shared responsibility model** means the cloud provider secures some parts of the stack, while the customer secures others.

Typically:
- provider secures underlying cloud infrastructure
- customer secures application configuration, data, identities, and access

Many cloud security mistakes come from misunderstanding this model.`
        },
        {
          id: 27,
          question: "What is cloud cost optimization?",
          answer: `**Cloud cost optimization** is the practice of controlling and reducing unnecessary cloud spending.

Common approaches:
- right-sizing resources
- shutting down unused environments
- choosing appropriate storage classes
- autoscaling
- using managed services wisely`
        },
        {
          id: 28,
          question: "What is high availability in cloud systems?",
          answer: `**High availability** means the system stays operational even when some components fail.

In the cloud, this often involves:
- multiple instances
- load balancing
- multi-zone deployment
- redundant storage
- health-based failover`
        },
        {
          id: 29,
          question: "What is disaster recovery in cloud architecture?",
          answer: `**Disaster recovery** is the plan for restoring systems and data after major failures such as region outages, corruption, or accidental deletion.

It usually includes:
- backups
- replication
- recovery procedures
- recovery time targets`
        },
        {
          id: 30,
          question: "What is a cloud-native application?",
          answer: `A **cloud-native application** is designed to take advantage of cloud environments.

Common characteristics:
- containerized or serverless deployment
- automation
- resilience
- observability
- elastic scaling

Cloud-native design is usually more than just moving an old app onto a VM.`
        }
      ]
    },
    {
      title: "Cloud Architecture Questions for Experienced Levels",
      questions: [
        {
          id: 1,
          question: "How do you decide whether a workload should run on VMs, containers, or serverless?",
          answer: `The decision depends on:
- control requirements
- startup time needs
- operational maturity
- workload duration
- scaling pattern
- cost model

**VMs** fit workloads needing OS-level control.
**Containers** fit portable service-oriented workloads.
**Serverless** fits event-driven or bursty workloads with minimal infrastructure management.`
        },
        {
          id: 2,
          question: "What are the tradeoffs of serverless architecture?",
          answer: `Benefits:
- low operational overhead
- automatic scaling
- pay-per-use pricing

Tradeoffs:
- cold starts
- execution limits
- vendor-specific patterns
- harder local debugging for some workflows

Serverless is powerful, but not ideal for every workload.`
        },
        {
          id: 3,
          question: "How do you design a highly available cloud application?",
          answer: `A highly available cloud design usually includes:
- multiple instances
- load balancing
- deployment across availability zones
- stateless application tiers
- redundant data strategies
- health checks and failover

The design should remove single points of failure from critical paths.`
        },
        {
          id: 4,
          question: "How do you think about multi-region architecture?",
          answer: `Multi-region architecture is used when a system needs stronger resilience, lower global latency, or geographic data placement.

Benefits:
- region-level disaster tolerance
- improved user proximity

Tradeoffs:
- more cost
- harder data consistency
- more operational complexity

It should be justified by clear requirements, not used automatically.`
        },
        {
          id: 5,
          question: "What are RTO and RPO in disaster recovery?",
          answer: `**RTO (Recovery Time Objective)** is the target time to restore service.
**RPO (Recovery Point Objective)** is the acceptable amount of data loss measured in time.

Example:
- RTO of 1 hour
- RPO of 5 minutes

These metrics drive backup, replication, and failover design.`
        },
        {
          id: 6,
          question: "How do you design for fault tolerance in cloud systems?",
          answer: `Typical approaches:
- multi-zone deployment
- redundant instances
- retries with backoff
- circuit breakers
- durable queues
- data replication
- graceful degradation

Fault tolerance means failures are expected and contained, not treated as rare surprises.`
        },
        {
          id: 7,
          question: "What is the difference between scalability and elasticity in cloud systems?",
          answer: `**Scalability** is the ability to handle more demand.
**Elasticity** is the ability to automatically adjust resources as demand changes.

Cloud platforms often make elasticity easier, but the application still needs an architecture that scales sensibly.`
        },
        {
          id: 8,
          question: "How do you approach cloud cost versus performance tradeoffs?",
          answer: `You balance:
- latency targets
- throughput needs
- resilience requirements
- engineering effort
- infrastructure cost

Examples:
- more replicas improve availability but increase cost
- larger instances may simplify operations but waste capacity
- caching can reduce cost if it meaningfully lowers backend load`
        },
        {
          id: 9,
          question: "What is right-sizing in cloud cost management?",
          answer: `**Right-sizing** means choosing resource sizes that match actual workload needs.

Examples:
- reducing oversized VMs
- adjusting database tiers
- tuning storage performance levels

It is a basic but high-impact cloud optimization practice.`
        },
        {
          id: 10,
          question: "How do you choose between managed services and self-managed infrastructure?",
          answer: `Managed services reduce operational burden, but they may introduce:
- less low-level control
- platform-specific limits
- different pricing structures

Self-managed infrastructure gives more control, but the team owns more reliability, patching, scaling, and maintenance work.

The right choice depends on team focus and business needs.`
        },
        {
          id: 11,
          question: "What are common cloud networking concerns in architecture?",
          answer: `Important concerns include:
- network segmentation
- routing
- latency between components
- ingress and egress paths
- private versus public exposure
- firewall or security group policy

Networking mistakes can create both security and performance problems.`
        },
        {
          id: 12,
          question: "How do VPCs or virtual networks help cloud architecture?",
          answer: `A **VPC** or virtual network gives isolated network space inside the cloud for your resources.

It helps with:
- traffic segmentation
- private service communication
- controlled exposure
- routing policy

It is a foundational building block in many cloud environments.`
        },
        {
          id: 13,
          question: "How do you secure identities in cloud platforms?",
          answer: `Strong cloud identity security usually includes:
- least privilege
- role-based access
- short-lived credentials where possible
- MFA for human users
- separation of duties
- regular access review

Identity is often the real security perimeter in the cloud.`
        },
        {
          id: 14,
          question: "Why are long-lived cloud credentials risky?",
          answer: `Long-lived credentials increase exposure if they are:
- leaked in code
- stolen from endpoints
- copied into logs or build systems

Short-lived, rotated credentials reduce blast radius and improve incident response options.`
        },
        {
          id: 15,
          question: "How do you think about data residency and compliance in cloud architecture?",
          answer: `Cloud design sometimes must satisfy requirements about:
- where data is stored
- where it is processed
- how it is encrypted
- who can access it

These constraints may affect:
- region choice
- backup design
- logging strategy
- vendor selection`
        },
        {
          id: 16,
          question: "How do you design observability in cloud-native systems?",
          answer: `A strong observability design includes:
- infrastructure and application metrics
- centralized logs
- distributed tracing
- correlation IDs
- alerting tied to service objectives

Cloud systems are distributed and dynamic, so observability has to be intentional rather than optional.`
        },
        {
          id: 17,
          question: "What is immutable infrastructure?",
          answer: `**Immutable infrastructure** means infrastructure is replaced rather than modified in place.

Benefits:
- more predictable deployments
- less configuration drift
- easier rollback patterns

It works well with automation, images, and declarative provisioning.`
        },
        {
          id: 18,
          question: "What is configuration drift and why is it dangerous?",
          answer: `**Configuration drift** happens when real environments slowly diverge from their intended configuration.

It is dangerous because it creates:
- inconsistent behavior
- hard-to-debug issues
- deployment surprises
- security gaps

IaC and immutable patterns help reduce drift.`
        },
        {
          id: 19,
          question: "How do you handle state in cloud-native applications?",
          answer: `A common principle is to keep compute tiers as stateless as possible and move state to durable external systems.

Examples:
- databases
- object storage
- distributed caches
- message queues

Stateless compute is easier to scale and replace.`
        },
        {
          id: 20,
          question: "What is blue-green deployment in cloud environments?",
          answer: `**Blue-green deployment** uses two production-like environments.

Flow:
- current version runs in one environment
- new version is deployed to the other
- traffic switches after validation

It supports safer releases and easier rollback, but it may increase cost temporarily.`
        },
        {
          id: 21,
          question: "What is canary deployment?",
          answer: `A **canary deployment** rolls out a new version to a small subset of traffic first.

Benefits:
- reduced rollout risk
- real production validation
- safer monitoring of regressions

It works best when combined with strong observability and rollback controls.`
        },
        {
          id: 22,
          question: "How do queues and event-driven patterns help cloud architecture?",
          answer: `They help by:
- decoupling components
- smoothing traffic spikes
- enabling background processing
- improving resilience to temporary failures

They are especially useful in cloud systems where workloads can be bursty and distributed.`
        },
        {
          id: 23,
          question: "What is cloud egress cost and why does it matter?",
          answer: `**Egress cost** is the charge for data leaving a cloud service or region.

It matters because:
- data transfer can become a major hidden cost
- architecture choices may increase cross-region or internet traffic
- some designs become expensive at scale even if compute looks cheap`
        },
        {
          id: 24,
          question: "How do you think about vendor lock-in in cloud architecture?",
          answer: `Vendor lock-in is the cost or difficulty of moving away from a provider-specific service or design.

It is not always bad. Managed services often provide speed and reliability advantages.

The real question is whether the business value of provider-specific features justifies the reduced portability.`
        },
        {
          id: 25,
          question: "How do you approach resilience testing in cloud systems?",
          answer: `Useful resilience testing includes:
- instance failure simulation
- zone failure drills
- dependency slowdown tests
- backup restore validation
- failover practice

Resilience claims are much stronger when they have been exercised, not just documented.`
        },
        {
          id: 26,
          question: "How do you choose storage types in cloud architecture?",
          answer: `Choose based on access pattern, latency, durability, and cost.

Examples:
- object storage for files and backups
- block storage for VM disks and databases
- managed databases for structured transactional data
- caches for hot temporary data

Using the wrong storage type can hurt both performance and cost.`
        },
        {
          id: 27,
          question: "What is a landing zone in cloud architecture?",
          answer: `A **landing zone** is a standardized cloud foundation for accounts, networking, identity, logging, and policy controls.

It helps organizations create new environments with:
- consistent security
- governance
- connectivity
- baseline observability

It becomes more important as cloud usage grows across teams.`
        },
        {
          id: 28,
          question: "How do you think about governance in cloud environments?",
          answer: `Cloud governance means defining how resources are created, secured, tagged, monitored, and paid for.

Examples:
- naming standards
- access policy
- cost allocation tags
- required logging
- approved regions and services

Without governance, cloud speed often turns into sprawl and risk.`
        },
        {
          id: 29,
          question: "What distinguishes a strong senior cloud architecture answer in interviews?",
          answer: `A strong answer usually:
- starts from workload needs and constraints
- names tradeoffs clearly
- addresses cost, resilience, and security together
- considers operations and observability
- avoids blindly recommending the newest managed service

Interviewers usually want practical architectural judgment, not provider buzzwords.`
        },
        {
          id: 30,
          question: "What is the most common cloud architecture mistake teams make?",
          answer: `A common mistake is copying on-premises patterns into the cloud without rethinking elasticity, managed services, cost, and failure domains.

Other frequent mistakes:
- weak IAM
- poor observability
- underestimating egress cost
- ignoring multi-zone resilience
- overengineering too early

Cloud architecture works best when it is designed for the cloud, not merely hosted there.`
        }
      ]
    }
  ]
};
