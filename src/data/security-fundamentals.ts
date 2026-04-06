import { Category } from "./types";

export const securityFundamentalsCategory: Category = {
  id: "security-fundamentals",
  name: "Security Fundamentals",
  subtitle: "Interview Questions",
  icon: "security",
  color: "#ef4444",
  sections: [
    {
      title: "Security Fundamentals Questions for Freshers and Intermediate Levels",
      questions: [
        {
          id: 1,
          question: "What is application security?",
          answer: `**Application security** is the practice of protecting software and its data from threats, misuse, and unauthorized access.

It includes:
- secure design
- secure coding
- authentication
- authorization
- validation
- monitoring

Security is not one feature. It is a property of the whole system.`
        },
        {
          id: 2,
          question: "Why is security important in software systems?",
          answer: `Security is important because software systems often handle:
- user data
- money
- business operations
- internal systems

Poor security can lead to:
- data breaches
- downtime
- fraud
- legal issues
- loss of trust`
        },
        {
          id: 3,
          question: "What is the CIA triad in security?",
          answer: `The **CIA triad** stands for:
- **Confidentiality**: only authorized users can access data
- **Integrity**: data remains correct and unaltered
- **Availability**: systems and data stay accessible when needed

These are core goals of information security.`
        },
        {
          id: 4,
          question: "What is the difference between authentication and authorization?",
          answer: `**Authentication** answers: "Who are you?"
**Authorization** answers: "What are you allowed to do?"

Example:
- login with username and password = authentication
- permission to delete a record = authorization`
        },
        {
          id: 5,
          question: "What is identity in security systems?",
          answer: `**Identity** is the representation of a user, service, or system in a security context.

Examples:
- user account
- service account
- machine identity

Authentication usually proves that an identity is genuine.`
        },
        {
          id: 6,
          question: "What is least privilege?",
          answer: `**Least privilege** means giving a user or system only the minimum access needed to perform its job.

Benefits:
- reduces blast radius
- limits accidental damage
- makes abuse harder

It is one of the most important security principles.`
        },
        {
          id: 7,
          question: "What is defense in depth?",
          answer: `**Defense in depth** means using multiple layers of protection instead of relying on one control.

Examples:
- input validation
- authentication
- authorization
- network controls
- logging and monitoring

If one layer fails, others still provide protection.`
        },
        {
          id: 8,
          question: "What is encryption?",
          answer: `**Encryption** transforms readable data into unreadable data using a key.

It is used to protect:
- data in transit
- data at rest

Encryption helps confidentiality, but keys must also be protected properly.`
        },
        {
          id: 9,
          question: "What is the difference between data at rest and data in transit?",
          answer: `**Data at rest** is stored data, such as files or database records.
**Data in transit** is data moving across networks or between services.

Both need protection:
- at rest with storage encryption
- in transit with protocols like TLS`
        },
        {
          id: 10,
          question: "What is hashing?",
          answer: `**Hashing** converts input data into a fixed-length value.

Important properties:
- deterministic
- hard to reverse
- small input changes produce very different output

Hashing is commonly used for integrity checks and password storage with specialized algorithms.`
        },
        {
          id: 11,
          question: "What is the difference between hashing and encryption?",
          answer: `**Encryption** is reversible with the right key.
**Hashing** is designed to be one-way.

Use:
- encryption for protecting readable data
- hashing for integrity checks or password verification`
        },
        {
          id: 12,
          question: "Why should passwords be hashed instead of encrypted?",
          answer: `Passwords should usually be **hashed** because the system does not need to recover the original password.

Best practice is to use a password hashing algorithm such as:
- bcrypt
- scrypt
- Argon2

These are designed to be slow and resist brute-force attacks better than general-purpose hashing.`
        },
        {
          id: 13,
          question: "What is salting in password security?",
          answer: `A **salt** is a random value added to a password before hashing.

It helps by:
- making identical passwords hash differently
- reducing effectiveness of rainbow tables

Salts should be unique per password.`
        },
        {
          id: 14,
          question: "What is multi-factor authentication (MFA)?",
          answer: `**Multi-factor authentication (MFA)** requires more than one form of verification.

Common factors:
- something you know, like a password
- something you have, like an authenticator app
- something you are, like a fingerprint

MFA significantly improves account security.`
        },
        {
          id: 15,
          question: "What is HTTPS and why is it important?",
          answer: `**HTTPS** is HTTP over TLS.

It helps with:
- encrypting traffic
- protecting against eavesdropping
- reducing tampering risk
- verifying server identity

Sensitive applications should use HTTPS everywhere, not only on login pages.`
        },
        {
          id: 16,
          question: "What is TLS?",
          answer: `**TLS (Transport Layer Security)** is the protocol used to secure communication over a network.

It provides:
- encryption
- integrity
- server authentication

It is the foundation behind secure web traffic with HTTPS.`
        },
        {
          id: 17,
          question: "What is SQL injection?",
          answer: `**SQL injection** happens when untrusted input is treated as part of a SQL query.

Risk:
- attackers can read, modify, or delete data

Typical prevention:
- parameterized queries
- prepared statements
- input validation
- least-privilege database accounts`
        },
        {
          id: 18,
          question: "What is cross-site scripting (XSS)?",
          answer: `**Cross-site scripting (XSS)** happens when untrusted content is executed as script in a user's browser.

Common impact:
- session theft
- malicious actions in the user context
- page defacement

Typical defenses:
- output encoding
- input validation
- content security policy`
        },
        {
          id: 19,
          question: "What is cross-site request forgery (CSRF)?",
          answer: `**CSRF** tricks an authenticated user's browser into making an unwanted request to another site.

It is especially relevant when authentication relies on browser-sent cookies.

Common defenses:
- CSRF tokens
- SameSite cookies
- proper origin checks`
        },
        {
          id: 20,
          question: "What is input validation and why is it important?",
          answer: `**Input validation** checks whether incoming data matches expected format, type, range, and rules.

It is important because it helps prevent:
- malformed data
- injection attacks
- unexpected application behavior

Validation should happen on the server even if the client also validates.`
        },
        {
          id: 21,
          question: "What is output encoding?",
          answer: `**Output encoding** makes untrusted data safe for a specific output context.

Example:
- HTML encoding for web pages
- JavaScript context encoding when needed

This is a key defense against XSS because different output contexts need different encoding rules.`
        },
        {
          id: 22,
          question: "What is session management?",
          answer: `**Session management** is how an application keeps track of an authenticated user across requests.

It involves:
- session identifiers
- expiration
- secure cookie settings
- invalidation on logout

Weak session handling can lead to account takeover.`
        },
        {
          id: 23,
          question: "What is a secure cookie?",
          answer: `A **secure cookie** is configured to reduce client-side security risks.

Important flags:
- \`Secure\`: only sent over HTTPS
- \`HttpOnly\`: not accessible to JavaScript
- \`SameSite\`: helps reduce CSRF risk

Cookie settings are a basic but important web security control.`
        },
        {
          id: 24,
          question: "What is a security vulnerability?",
          answer: `A **security vulnerability** is a weakness that can be exploited to break confidentiality, integrity, or availability.

Examples:
- broken access control
- outdated dependencies
- insecure defaults
- injection flaws`
        },
        {
          id: 25,
          question: "What is patching and why is it important?",
          answer: `**Patching** means updating software to fix bugs and security issues.

It is important because attackers often exploit known vulnerabilities after fixes are publicly available.

Fast patching reduces exposure time.`
        },
        {
          id: 26,
          question: "What is logging in a security context?",
          answer: `Security-related logging records important events for detection, investigation, and auditing.

Examples:
- login attempts
- permission changes
- suspicious requests
- access to sensitive data

Logs should be useful, but they should not leak secrets or sensitive personal data.`
        },
        {
          id: 27,
          question: "What is auditing?",
          answer: `**Auditing** is the ability to track who did what, when, and sometimes from where.

It is useful for:
- compliance
- incident investigation
- accountability

Audit trails are especially important in systems handling sensitive or regulated data.`
        },
        {
          id: 28,
          question: "What is a secret in software systems?",
          answer: `A **secret** is confidential information used by systems or users.

Examples:
- passwords
- API keys
- database credentials
- signing keys

Secrets should not be hard-coded or exposed in logs or source control.`
        },
        {
          id: 29,
          question: "What is secure coding?",
          answer: `**Secure coding** means writing software in a way that reduces vulnerabilities and unsafe behavior.

Examples:
- validate input
- use parameterized queries
- avoid hard-coded secrets
- check authorization properly
- keep dependencies updated

Secure coding is part of daily engineering practice, not a one-time activity.`
        },
        {
          id: 30,
          question: "What is the OWASP Top 10?",
          answer: `The **OWASP Top 10** is a widely known awareness list of common web application security risks.

It helps teams focus on major categories such as:
- broken access control
- injection
- cryptographic failures
- security misconfiguration

It is useful as a starting point, but real security work also requires system-specific threat thinking.`
        }
      ]
    },
    {
      title: "Security Fundamentals Questions for Experienced Levels",
      questions: [
        {
          id: 1,
          question: "How do you perform threat modeling for a system?",
          answer: `Threat modeling means systematically identifying:
- assets
- trust boundaries
- entry points
- likely attackers
- attack paths
- mitigations

The goal is to think about how the system can be abused before it is abused in production.`
        },
        {
          id: 2,
          question: "What is a trust boundary?",
          answer: `A **trust boundary** is a point where data or requests move between components with different trust levels.

Examples:
- browser to backend
- public API to internal service
- application to third-party system

Security controls often become stricter at these boundaries.`
        },
        {
          id: 3,
          question: "How do you design authentication for modern applications?",
          answer: `Authentication design depends on the client and risk level, but strong answers usually include:
- secure password handling or federated identity
- MFA where appropriate
- secure session or token management
- brute-force protections
- account recovery controls

The design should balance usability with attack resistance.`
        },
        {
          id: 4,
          question: "What is the difference between authentication, authorization, and accounting?",
          answer: `This is sometimes described as **AAA**:
- **Authentication**: verify identity
- **Authorization**: decide allowed actions
- **Accounting**: record what happened

Strong security systems need all three, not just login checks.`
        },
        {
          id: 5,
          question: "What are RBAC and ABAC?",
          answer: `**RBAC (Role-Based Access Control)** grants permissions based on roles.
**ABAC (Attribute-Based Access Control)** uses attributes such as department, ownership, region, or risk context.

RBAC is simpler.
ABAC is more flexible but can become harder to reason about if policy design is weak.`
        },
        {
          id: 6,
          question: "What is broken access control and why is it so serious?",
          answer: `**Broken access control** happens when users can access data or actions they should not.

Examples:
- viewing another user's records
- calling admin endpoints without proper checks
- modifying hidden request parameters

It is serious because it often leads directly to data exposure or privilege escalation.`
        },
        {
          id: 7,
          question: "What is the difference between authentication tokens and sessions?",
          answer: `A **session** usually means server-side state identified by a session ID.
A **token** usually carries or references identity claims used across requests.

Sessions can simplify invalidation.
Tokens can support stateless designs more easily.

The security quality depends more on implementation details than on the buzzword.`
        },
        {
          id: 8,
          question: "What are the security tradeoffs of JWT-based authentication?",
          answer: `JWTs can work well for stateless authentication, but they come with tradeoffs.

Benefits:
- easy propagation across services
- no server-side session lookup on every request

Risks:
- token revocation is harder
- large token payloads leak unnecessary claims
- poor key handling can break the whole model

Strong answers mention short expiry, careful claims design, and signing key protection.`
        },
        {
          id: 9,
          question: "How do you manage secrets securely in production systems?",
          answer: `Strong secret management usually includes:
- dedicated secret stores
- least-privilege access
- rotation
- audit logging
- avoiding secrets in code, images, and logs

The problem is not only storing secrets, but also controlling who can retrieve and use them.`
        },
        {
          id: 10,
          question: "What is key rotation and why does it matter?",
          answer: `**Key rotation** means replacing cryptographic keys on a planned basis or after suspicion of compromise.

It matters because:
- long-lived keys increase blast radius
- rotation supports incident response
- compliance often expects it

Systems should be designed to rotate keys without major downtime.`
        },
        {
          id: 11,
          question: "How do you decide what data should be encrypted?",
          answer: `Encrypt data based on sensitivity, exposure risk, and compliance needs.

Typical candidates:
- credentials
- financial data
- personal data
- tokens
- backups

Strong answers also consider whether data appears in caches, logs, analytics pipelines, and replicas.`
        },
        {
          id: 12,
          question: "What is the difference between symmetric and asymmetric encryption?",
          answer: `**Symmetric encryption**
- same key encrypts and decrypts
- usually faster

**Asymmetric encryption**
- public and private key pair
- useful for key exchange, signatures, and identity verification

Many real systems use both together for practical performance and security reasons.`
        },
        {
          id: 13,
          question: "What is digital signing and what problem does it solve?",
          answer: `**Digital signing** proves that data came from a trusted signer and was not modified unexpectedly.

It helps with:
- integrity
- authenticity
- non-repudiation in some contexts

Examples include signed tokens, signed packages, and signed API payloads.`
        },
        {
          id: 14,
          question: "What is zero trust?",
          answer: `**Zero trust** means no user, device, or network location is trusted automatically.

It emphasizes:
- strong identity
- explicit authorization
- least privilege
- continuous verification
- secure service-to-service communication

It is especially relevant in cloud and distributed environments.`
        },
        {
          id: 15,
          question: "How do you secure service-to-service communication?",
          answer: `Common approaches:
- mutual TLS
- short-lived service credentials
- network policy controls
- request signing where needed
- strict authorization between services

The goal is to avoid assuming the internal network is automatically safe.`
        },
        {
          id: 16,
          question: "What is mutual TLS (mTLS)?",
          answer: `**Mutual TLS (mTLS)** means both client and server authenticate each other with certificates.

It provides:
- encrypted transport
- server authentication
- client authentication

It is common in service-to-service security for internal platforms.`
        },
        {
          id: 17,
          question: "How do you defend against brute-force and credential-stuffing attacks?",
          answer: `Typical defenses:
- rate limiting
- MFA
- login throttling
- anomaly detection
- breached-password checks
- IP and device reputation signals

The goal is to make repeated guessing expensive without destroying legitimate user experience.`
        },
        {
          id: 18,
          question: "What is security misconfiguration?",
          answer: `**Security misconfiguration** means insecure settings expose the system unnecessarily.

Examples:
- default passwords
- open admin consoles
- excessive permissions
- verbose error pages
- weak CORS or cookie settings

Many incidents come from misconfiguration rather than exotic exploits.`
        },
        {
          id: 19,
          question: "What is SSRF and why is it dangerous?",
          answer: `**SSRF (Server-Side Request Forgery)** tricks a server into making requests to unintended internal or external destinations.

It is dangerous because it can expose:
- internal services
- cloud metadata endpoints
- restricted networks

Defenses include strict allowlists, URL validation, and network egress controls.`
        },
        {
          id: 20,
          question: "How do you secure file uploads?",
          answer: `Secure file upload handling usually includes:
- file type validation
- size limits
- malware scanning when appropriate
- safe storage location
- randomized names
- avoiding direct execution

It is not enough to trust the file extension provided by the client.`
        },
        {
          id: 21,
          question: "How do you secure APIs beyond simple authentication?",
          answer: `Strong API security also includes:
- object-level authorization
- input validation
- output minimization
- rate limiting
- audit logging
- secure transport
- replay protection where relevant

Authentication alone does not make an API secure.`
        },
        {
          id: 22,
          question: "What is security logging, and what should never be logged?",
          answer: `Security logging records events useful for detection and investigation.

You should avoid logging:
- raw passwords
- tokens
- private keys
- full payment data
- unnecessary personal data

Good logging balances forensic value with privacy and confidentiality.`
        },
        {
          id: 23,
          question: "How do you handle security incidents technically?",
          answer: `A strong technical response usually includes:
- detection
- containment
- credential or key rotation
- forensic evidence preservation
- patching or configuration fixes
- communication support for stakeholders

Preparation matters. Incident response is much weaker if roles, logs, and recovery procedures are undefined.`
        },
        {
          id: 24,
          question: "What is dependency or supply-chain security?",
          answer: `Supply-chain security is about reducing risk from third-party code, packages, build systems, and artifacts.

Common practices:
- dependency scanning
- version pinning where appropriate
- trusted registries
- artifact signing
- patch management

A secure application can still be compromised through insecure dependencies.`
        },
        {
          id: 25,
          question: "What is secure SDLC?",
          answer: `**Secure SDLC** means integrating security into the software delivery lifecycle rather than leaving it only for the end.

Examples:
- threat modeling
- code review
- dependency scanning
- security testing
- deployment hardening
- incident readiness

This usually produces better security than relying only on late-stage audits.`
        },
        {
          id: 26,
          question: "How do you think about compliance versus real security?",
          answer: `Compliance and security overlap, but they are not the same.

**Compliance** proves certain controls or processes exist.
**Security** is whether the system is actually resilient against realistic threats.

A compliant system can still be insecure if the controls are superficial or outdated.`
        },
        {
          id: 27,
          question: "What is defense against insider threats?",
          answer: `Mitigating insider risk often includes:
- least privilege
- separation of duties
- strong auditing
- approval workflows
- access reviews
- sensitive action monitoring

Security should assume risk can come from inside as well as outside.`
        },
        {
          id: 28,
          question: "How do you validate that authorization is correct in a complex system?",
          answer: `Useful approaches include:
- centralized policy design where appropriate
- negative test cases
- integration tests for object ownership rules
- audit reviews
- explicit mapping of roles and permissions

Authorization bugs often hide in edge cases, not only in the happy path.`
        },
        {
          id: 29,
          question: "What makes a strong senior-level security answer in interviews?",
          answer: `A strong senior answer usually:
- starts from assets and threats
- thinks in trust boundaries
- covers prevention and detection
- discusses tradeoffs and usability
- includes operational controls like rotation, logging, and incident response

Interviewers usually want practical security judgment, not just a list of terms.`
        },
        {
          id: 30,
          question: "What is the biggest mistake teams make with security fundamentals?",
          answer: `A common mistake is treating security as a late-stage checklist instead of a system property.

This leads to:
- patchy controls
- weak defaults
- missing observability
- insecure integrations
- slow incident response

Security works better when it is part of design, development, deployment, and operations.`
        }
      ]
    }
  ]
};
