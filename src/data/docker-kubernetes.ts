import { Category } from "./types";

export const dockerKubernetesCategory: Category = {
  id: "docker-kubernetes",
  name: "Docker / Kubernetes",
  subtitle: "Interview Questions",
  icon: "containers",
  color: "#2563eb",
  sections: [
    {
      title: "Docker / Kubernetes Questions for Freshers and Intermediate Levels",
      questions: [
        {
          id: 1,
          question: "What is Docker?",
          answer: `**Docker** is a platform for packaging an application and its dependencies into a container.

Containers help applications run consistently across environments such as local development, testing, and production.

Common benefits:
- portability
- environment consistency
- easier deployment
- lightweight isolation`
        },
        {
          id: 2,
          question: "What is a container?",
          answer: `A **container** is a lightweight isolated runtime that packages application code, runtime, libraries, and dependencies together.

Compared with traditional virtual machines, containers usually start faster and use fewer resources because they share the host OS kernel.`
        },
        {
          id: 3,
          question: "What is the difference between a container and a virtual machine?",
          answer: `**Virtual machines**
- include a full guest operating system
- provide stronger isolation
- are usually heavier

**Containers**
- share the host kernel
- are lighter and faster to start
- are well suited for modern application packaging

Containers improve efficiency, while VMs can provide stronger isolation boundaries.`
        },
        {
          id: 4,
          question: "What is an image in Docker?",
          answer: `A **Docker image** is a read-only packaged template used to create containers.

It contains:
- application code
- runtime
- libraries
- dependencies
- startup instructions

Containers are running instances of images.`
        },
        {
          id: 5,
          question: "What is the difference between a Docker image and a Docker container?",
          answer: `A **Docker image** is the packaged blueprint.
A **Docker container** is the running instance created from that image.

\`\`\`
Image = template
Container = running instance
\`\`\`

One image can be used to start multiple containers.`
        },
        {
          id: 6,
          question: "What is a Dockerfile?",
          answer: `A **Dockerfile** is a text file that defines how a Docker image is built.

\`\`\`dockerfile
FROM eclipse-temurin:21-jre
COPY app.jar app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]
\`\`\`

It usually includes:
- base image
- copied files
- environment variables
- exposed ports
- startup command`
        },
        {
          id: 7,
          question: "What is Kubernetes?",
          answer: `**Kubernetes** is a container orchestration platform used to deploy, manage, and scale containerized applications.

It provides:
- scheduling
- service discovery
- self-healing
- scaling
- rolling updates`
        },
        {
          id: 8,
          question: "What is a Pod in Kubernetes?",
          answer: `A **Pod** is the smallest deployable unit in Kubernetes.

A Pod usually contains one main container, but it can contain multiple tightly coupled containers that share network and storage context.`
        },
        {
          id: 9,
          question: "What is a Deployment in Kubernetes?",
          answer: `A **Deployment** manages a desired number of Pod replicas and handles rolling updates and replacements.

It helps ensure:
- the right number of instances are running
- failed Pods are replaced
- new versions can be rolled out gradually`
        },
        {
          id: 10,
          question: "What is a Service in Kubernetes?",
          answer: `A **Service** provides stable networking and access to a set of Pods.

Because Pods can be recreated and their IPs can change, Services give clients a stable way to reach them.

Common service types:
- ClusterIP
- NodePort
- LoadBalancer`
        },
        {
          id: 11,
          question: "What is the role of ConfigMap and Secret in Kubernetes?",
          answer: `**ConfigMap** stores non-sensitive configuration.
**Secret** stores sensitive values such as credentials or tokens.

They help keep configuration outside application images and make deployments easier to manage across environments.`
        },
        {
          id: 12,
          question: "What are rolling updates in Kubernetes?",
          answer: `A **rolling update** replaces old Pods with new ones gradually instead of switching everything at once.

This reduces deployment risk and helps keep the application available during release.`
        }
      ]
    },
    {
      title: "Docker / Kubernetes Questions for Experienced Levels",
      questions: [
        {
          id: 1,
          question: "How do you design Docker images for production?",
          answer: `Production images should be small, secure, reproducible, and easy to operate.

Common practices:
- use minimal base images
- avoid unnecessary packages and tools
- use multi-stage builds
- run as a non-root user where possible
- keep configuration external
- pin important dependencies carefully

Good Docker image design improves startup speed, security, and operational consistency.`
        },
        {
          id: 2,
          question: "What is a multi-stage Docker build and why is it useful?",
          answer: `A **multi-stage build** uses multiple build stages in a Dockerfile so you can compile in one stage and copy only the final artifact into a smaller runtime image.

\`\`\`dockerfile
FROM maven:3.9-eclipse-temurin-21 AS build
WORKDIR /app
COPY . .
RUN mvn clean package

FROM eclipse-temurin:21-jre
COPY --from=build /app/target/app.jar /app.jar
ENTRYPOINT ["java", "-jar", "/app.jar"]
\`\`\`

This reduces image size and keeps build tools out of the runtime container.`
        },
        {
          id: 3,
          question: "How do liveness probes and readiness probes differ in Kubernetes?",
          answer: `These probes answer different operational questions.

- **Liveness probe**: should Kubernetes restart this container because it is unhealthy?
- **Readiness probe**: is this container ready to receive traffic?

Using them correctly helps avoid sending traffic to unready instances and helps recover stuck containers automatically.`
        },
        {
          id: 4,
          question: "How do you troubleshoot a Pod that keeps restarting?",
          answer: `I would check the failure reason first instead of guessing.

Typical steps:
- inspect Pod status and recent events
- check container logs
- verify liveness and readiness probe behavior
- confirm resource limits and requests
- look for crash loops caused by config, secrets, startup timing, or missing dependencies

Common causes include:
- bad configuration
- failed health checks
- insufficient memory
- application startup failure
- missing downstream dependency`
        },
        {
          id: 5,
          question: "How do resource requests and limits work in Kubernetes?",
          answer: `**Requests** define the minimum resources a container is expected to need for scheduling.
**Limits** define the maximum resources it can use.

These settings affect:
- scheduling decisions
- cluster utilization
- throttling behavior
- out-of-memory kills

Incorrect values can either waste capacity or cause instability.`
        },
        {
          id: 6,
          question: "How do you handle configuration and secrets safely in containerized systems?",
          answer: `Configuration and secrets should be externalized and managed with least privilege.

Common practices:
- use environment-specific ConfigMaps or secret stores
- avoid baking secrets into images
- rotate sensitive values
- restrict access through RBAC and secret-management policies
- audit secret usage in pipelines and runtime`
        },
        {
          id: 7,
          question: "What is Ingress in Kubernetes?",
          answer: `An **Ingress** manages external HTTP or HTTPS access to services inside the cluster.

It commonly provides:
- routing by host or path
- TLS termination
- central entry point for multiple services

Ingress is usually backed by an Ingress controller such as NGINX or a cloud-specific controller.`
        },
        {
          id: 8,
          question: "What is Helm and why is it used?",
          answer: `**Helm** is a package manager for Kubernetes.

It helps teams:
- templatize Kubernetes manifests
- manage releases
- reuse deployment patterns
- parameterize environments more cleanly

Helm is useful, but teams still need discipline around chart complexity and reviewability.`
        },
        {
          id: 9,
          question: "How do you roll out and roll back applications safely in Kubernetes?",
          answer: `Safe rollout means combining deployment strategy with health signals and observability.

Typical practices:
- use rolling or canary deployments
- verify readiness before shifting traffic
- monitor error rate, latency, and saturation
- keep rollback simple and fast
- avoid coupling schema changes too tightly to one deployment step

Good rollout strategy is operational, not just declarative YAML.`
        },
        {
          id: 10,
          question: "How do Docker and Kubernetes fit together in a modern platform?",
          answer: `Docker is commonly used to package applications as container images.
Kubernetes is used to run and manage those containerized workloads at scale.

\`\`\`
Docker -> package application
Registry -> store image
Kubernetes -> deploy and operate containers
\`\`\`

The important idea is that image build concerns and orchestration concerns are related, but they are not the same responsibility.`
        }
      ]
    }
  ]
};
