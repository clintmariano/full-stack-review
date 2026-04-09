import { Category } from "./types";

export const webservicesCategory: Category = {
  id: "webservices",
  name: "Web Services",
  subtitle: "Interview Questions",
  icon: "webservices",
  color: "#0f766e",
  sections: [
    {
      title: "Web Services Interview Questions for Freshers and Intermediate Levels",
      questions: [
        {
          id: 1,
          question: "What is a web service?",
          answer: `A **web service** is a software interface that allows different applications or systems to communicate over a network.

Web services are commonly used for:
- data exchange between systems
- integration between applications
- exposing business capabilities over HTTP

Common styles include:
- REST
- SOAP`
        },
        {
          id: 2,
          question: "What is the difference between REST and SOAP?",
          answer: `**REST** is an architectural style, while **SOAP** is a protocol.

**REST**
- usually uses HTTP directly
- commonly exchanges JSON
- simpler and more lightweight

**SOAP**
- has a strict XML-based message format
- supports formal standards like WS-Security
- is often used in enterprise integrations with strict contracts

REST is more common for modern public and internal APIs, while SOAP still appears in legacy and enterprise systems.`
        },
        {
          id: 3,
          question: "What is a RESTful API?",
          answer: `A **RESTful API** is an API designed around REST principles such as resource-based URLs, stateless communication, and standard HTTP methods.

Example resource-oriented endpoints:
- \`GET /users\`
- \`GET /users/42\`
- \`POST /users\`
- \`PUT /users/42\`
- \`DELETE /users/42\`

The main idea is to model the API around resources and use HTTP semantics correctly.`
        },
        {
          id: 4,
          question: "How do you design RESTful APIs?",
          answer: `Good REST API design starts with clear resources, predictable behavior, and correct use of HTTP.

**Common design principles:**
- use nouns for resource names, not verbs
- keep URLs consistent and hierarchical
- use the right HTTP methods
- return meaningful HTTP status codes
- keep the API stateless
- design request and response bodies clearly
- support filtering, sorting, and pagination where needed

\`\`\`
GET    /orders
GET    /orders/123
POST   /orders
PUT    /orders/123
DELETE /orders/123
\`\`\`

**Interview point:** A REST API is not just JSON over HTTP. Good design also includes idempotency, error handling, validation, and versioning.`
        },
        {
          id: 5,
          question: "What HTTP methods are commonly used in API development?",
          answer: `Common HTTP methods are:

- \`GET\`: retrieve data
- \`POST\`: create a new resource or trigger a non-idempotent action
- \`PUT\`: replace a resource
- \`PATCH\`: partially update a resource
- \`DELETE\`: remove a resource

Choosing the right method helps API clients understand expected behavior and retry safety.`
        },
        {
          id: 6,
          question: "What are common HTTP status codes used in REST APIs?",
          answer: `Common status codes include:

- \`200 OK\`: successful request
- \`201 Created\`: resource created successfully
- \`204 No Content\`: successful request with no response body
- \`400 Bad Request\`: invalid client input
- \`401 Unauthorized\`: authentication required or invalid
- \`403 Forbidden\`: authenticated but not allowed
- \`404 Not Found\`: resource does not exist
- \`409 Conflict\`: request conflicts with current state
- \`500 Internal Server Error\`: unexpected server failure

Correct status codes make APIs easier to consume and debug.`
        },
        {
          id: 7,
          question: "What is statelessness in REST?",
          answer: `**Statelessness** means each request contains all the information needed to process it.

The server should not depend on client session state stored between requests.

This improves:
- scalability
- reliability
- simplicity of horizontal scaling`
        },
        {
          id: 8,
          question: "What is idempotency in APIs?",
          answer: `An operation is **idempotent** if repeating it has the same effect as performing it once.

Examples:
- \`GET\` is typically idempotent
- \`PUT\` is typically idempotent
- \`DELETE\` is usually idempotent
- \`POST\` is usually not idempotent unless designed carefully

Idempotency matters because retries are common in distributed systems and client-server communication.`
        },
        {
          id: 9,
          question: "How do you handle errors in API development?",
          answer: `Good API error handling should be consistent and easy for clients to interpret.

A common approach is to return:
- an appropriate HTTP status code
- a stable error code
- a human-readable message
- optional validation details or correlation ID

\`\`\`json
{
  "code": "VALIDATION_ERROR",
  "message": "Email is invalid",
  "field": "email"
}
\`\`\`

Avoid leaking stack traces or internal implementation details in production responses.`
        },
        {
          id: 10,
          question: "What is API versioning and why is it needed?",
          answer: `**API versioning** helps you evolve APIs without breaking existing clients immediately.

Common approaches:
- URI versioning: \`/api/v1/users\`
- header versioning
- media type versioning

Versioning is needed when response shape, semantics, or behavior changes in a way that existing consumers may not handle safely.`
        },
        {
          id: 11,
          question: "How do you support pagination, filtering, and sorting in REST APIs?",
          answer: `These features help clients retrieve data efficiently without loading everything at once.

Common examples:
- \`GET /users?page=2&size=20\`
- \`GET /users?status=active\`
- \`GET /users?sort=name,asc\`

Good APIs should define these parameters consistently and document defaults and limits clearly.`
        },
        {
          id: 12,
          question: "What tools are commonly used in API development and testing?",
          answer: `Common API development and testing tools include:
- Postman
- Swagger / OpenAPI
- curl
- Insomnia
- automated integration tests

These help with:
- request testing
- contract documentation
- collaboration between frontend and backend teams
- regression checking`
        }
      ]
    },
    {
      title: "Web Services Interview Questions for Experienced Levels",
      questions: [
        {
          id: 1,
          question: "How do you approach API development for a new service?",
          answer: `I would start with the business use cases and consumers, then design resources, contracts, and error behavior before implementation details.

Typical steps:
- identify consumers and access patterns
- define resources and operations
- choose request and response models
- define validation and error contracts
- address security, idempotency, pagination, and versioning
- document the API with OpenAPI or similar tools
- implement tests at unit, integration, and contract levels

Strong API development is as much about contract design as it is about code.`
        },
        {
          id: 2,
          question: "What makes an API contract good?",
          answer: `A good API contract is clear, stable, predictable, and easy to consume.

Important qualities:
- consistent naming
- explicit request and response schemas
- clear validation rules
- stable error format
- backward compatibility awareness
- accurate documentation

A weak contract creates confusion even if the backend implementation is correct.`
        },
        {
          id: 3,
          question: "How do you secure REST APIs?",
          answer: `REST APIs should be secured in layers.

Common measures:
- authentication such as OAuth2, JWT, or API keys where appropriate
- authorization checks at the resource or action level
- input validation
- output sanitization where relevant
- rate limiting and throttling
- HTTPS everywhere
- secret management and key rotation
- audit logging for sensitive operations

Security should be part of API design from the start, not added only after incidents.`
        },
        {
          id: 4,
          question: "How do you design APIs for backward compatibility?",
          answer: `Backward-compatible API design reduces client breakage during change.

Typical practices:
- add fields instead of renaming or removing them abruptly
- avoid changing semantics silently
- version breaking changes explicitly
- deprecate features with clear timelines
- keep tolerant readers in mind for clients

Compatibility is not only about syntax. Behavioral changes can break clients too.`
        },
        {
          id: 5,
          question: "How do you document APIs effectively?",
          answer: `Good API documentation should help consumers understand what to send, what to expect, and how failures behave.

Useful documentation includes:
- endpoint purpose
- request and response examples
- field definitions
- validation rules
- authentication requirements
- status codes and error formats
- pagination, filtering, and rate-limit behavior

OpenAPI is commonly used because it supports both machine-readable contracts and human-friendly documentation.`
        },
        {
          id: 6,
          question: "How do you test APIs in production-like environments?",
          answer: `API testing should go beyond unit tests.

Important layers include:
- integration tests against real persistence and dependencies where possible
- contract tests between producers and consumers
- performance and load tests for critical endpoints
- security testing for authentication, authorization, and input validation
- smoke tests in staging or production-like environments

Experienced teams also validate observability: logs, metrics, tracing, and alerting around important endpoints.`
        },
        {
          id: 7,
          question: "How do you handle rate limiting and throttling in APIs?",
          answer: `Rate limiting protects services from abuse, overload, and noisy clients.

Common strategies:
- fixed window
- sliding window
- token bucket
- leaky bucket

Good API design also defines:
- what limit is applied
- how clients learn they are throttled
- retry guidance, such as \`429 Too Many Requests\` with backoff advice`
        },
        {
          id: 8,
          question: "How do you make APIs observable and easier to debug?",
          answer: `Operational visibility matters for API reliability.

Useful practices:
- structured logs
- request IDs or correlation IDs
- latency and error metrics
- distributed tracing
- clear audit trails for important actions

Without observability, debugging API failures becomes slow and guess-driven.`
        },
        {
          id: 9,
          question: "When would you choose SOAP over REST?",
          answer: `SOAP may still be the better choice when:
- the integration requires strict XML contracts
- WS-Security or related enterprise standards are mandatory
- the partner system already depends on SOAP infrastructure

REST is usually preferred for simpler, modern API development, but SOAP remains relevant in some enterprise environments.`
        },
        {
          id: 10,
          question: "What are common mistakes in REST API design?",
          answer: `Common mistakes include:
- using verbs in URLs instead of resources
- returning inconsistent error formats
- misusing HTTP methods and status codes
- exposing internal database structure directly
- ignoring pagination for large collections
- not planning for versioning or backward compatibility
- weak validation and security controls

These issues make APIs harder to consume, evolve, and operate safely.`
        }
      ]
    }
  ]
};
