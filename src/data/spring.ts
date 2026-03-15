import { Category } from "./types";

export const springCategory: Category = {
  id: "spring",
  name: "Spring / Spring Boot",
  subtitle: "Interview Questions",
  icon: "spring",
  color: "#6db33f",
  sections: [
    {
      title: "Spring Interview Questions for Freshers and Intermediate Levels",
      questions: [
        {
          id: 1,
          question: "What is Spring Framework?",
          answer: `**Spring Framework** is a Java framework used to build enterprise applications.

**Core benefits:**
- Dependency Injection
- Loose coupling
- Easier testing
- Integration with web, data, security, and messaging modules

It provides a container that manages object creation, wiring, and lifecycle.`
        },
        {
          id: 2,
          question: "What is Spring Boot and how is it different from Spring Framework?",
          answer: `**Spring Framework** provides the core features like IoC, AOP, MVC, and data access.

**Spring Boot** is built on top of Spring and reduces setup effort by providing:
- auto-configuration
- starter dependencies
- embedded servers
- production-ready features

\`\`\`
Spring Framework = core framework
Spring Boot = faster setup and opinionated defaults on top of Spring
\`\`\`

Use Spring Boot when you want to build and deploy Spring applications quickly.`
        },
        {
          id: 3,
          question: "What is Dependency Injection and how does Spring implement it?",
          answer: `**Dependency Injection (DI)** means an object receives its dependencies from outside instead of creating them internally.

**Preferred approach: constructor injection**
\`\`\`java
@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}
\`\`\`

**Why constructor injection is preferred:**
- required dependencies are explicit
- easier unit testing
- supports immutable fields
- fails fast if wiring is missing`
        },
        {
          id: 4,
          question: "What is Inversion of Control (IoC)?",
          answer: `**Inversion of Control** means control of object creation and dependency wiring is moved from application code to the framework container.

Without IoC, classes create their dependencies themselves.
With Spring IoC, the container creates objects, wires dependencies, and manages lifecycle.

This reduces coupling and improves testability.`
        },
        {
          id: 5,
          question: "What is a Spring Bean?",
          answer: `A **Spring Bean** is an object managed by the Spring container.

Beans are created, configured, and wired by Spring.

Common ways to define beans:
- stereotype annotations like \`@Component\`, \`@Service\`, \`@Repository\`
- Java configuration with \`@Bean\`

\`\`\`java
@Configuration
public class AppConfig {
    @Bean
    public Clock clock() {
        return Clock.systemUTC();
    }
}
\`\`\``
        },
        {
          id: 6,
          question: "What is the difference between @Component, @Service, @Repository, and @Controller?",
          answer: `All mark classes as Spring-managed beans, but they represent different application layers.

\`\`\`java
@Component
public class EmailValidator { }

@Service
public class UserService { }

@Repository
public class UserRepository { }

@Controller
public class UserController { }
\`\`\`

**Difference:**
- \`@Component\`: generic bean
- \`@Service\`: business layer
- \`@Repository\`: persistence layer, plus exception translation
- \`@Controller\`: MVC web layer

\`@RestController\` is used for REST APIs and is equivalent to \`@Controller + @ResponseBody\`.`
        },
        {
          id: 7,
          question: "What is the difference between @Controller and @RestController?",
          answer: `**@Controller** is mainly used for Spring MVC views.
**@RestController** is used for REST APIs.

\`\`\`java
@Controller
public class ViewController {
    @GetMapping("/home")
    public String home() {
        return "home";
    }
}

@RestController
public class ApiController {
    @GetMapping("/api/users")
    public List<User> users() {
        return List.of();
    }
}
\`\`\`

**Key difference:**
- \`@Controller\` usually returns a view name
- \`@RestController\` returns response body data directly as JSON/XML`
        },
        {
          id: 8,
          question: "What is the difference between @Autowired and constructor injection?",
          answer: `\`@Autowired\` is an annotation Spring uses for dependency resolution.

With modern Spring, constructor injection usually does not need explicit \`@Autowired\` if there is a single constructor.

\`\`\`java
@Service
public class OrderService {
    private final PaymentService paymentService;

    public OrderService(PaymentService paymentService) {
        this.paymentService = paymentService;
    }
}
\`\`\`

**Why constructor injection is better than field injection:**
- test-friendly
- dependencies are explicit
- supports \`final\` fields
- avoids hidden wiring`
        },
        {
          id: 9,
          question: "What is component scanning in Spring?",
          answer: `**Component scanning** is the process where Spring automatically finds classes annotated with stereotypes and registers them as beans.

\`\`\`java
@SpringBootApplication
public class Application { }
\`\`\`

\`@SpringBootApplication\` includes component scanning from its package downward.

If your components are outside that package tree, Spring will not find them unless you configure scanning explicitly.`
        },
        {
          id: 10,
          question: "What are bean scopes in Spring?",
          answer: `Spring supports multiple bean scopes.

**Common scopes:**
- \`singleton\`: one bean per container
- \`prototype\`: new bean each time requested
- \`request\`: one bean per HTTP request
- \`session\`: one bean per HTTP session

\`\`\`java
@Scope("prototype")
@Component
public class ReportBuilder { }
\`\`\`

**Most beans are singleton** by default.`
        },
        {
          id: 11,
          question: "What is the Spring bean lifecycle?",
          answer: `A bean typically goes through these phases:
1. instantiated
2. dependencies injected
3. initialization callbacks run
4. bean is ready to use
5. destruction callback runs on shutdown

\`\`\`java
@Component
public class CacheManager {
    @PostConstruct
    public void init() { }

    @PreDestroy
    public void cleanup() { }
}
\`\`\`

You can also use \`InitializingBean\`, \`DisposableBean\`, or custom init/destroy methods.`
        },
        {
          id: 12,
          question: "What is the difference between @Bean and @Component?",
          answer: `Both register beans, but they are used differently.

**@Component**
- put on the class itself
- discovered by component scanning

**@Bean**
- put on a method inside a \`@Configuration\` class
- useful when you create third-party or custom-configured objects

\`\`\`java
@Configuration
public class AppConfig {
    @Bean
    public ObjectMapper objectMapper() {
        return new ObjectMapper();
    }
}
\`\`\``
        },
        {
          id: 13,
          question: "What is @SpringBootApplication?",
          answer: `\`@SpringBootApplication\` is a convenience annotation that combines:
- \`@Configuration\`
- \`@EnableAutoConfiguration\`
- \`@ComponentScan\`

\`\`\`java
@SpringBootApplication
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}
\`\`\`

It is the standard entry point annotation for Spring Boot applications.`
        },
        {
          id: 14,
          question: "What are Spring Boot starters?",
          answer: `**Starters** are curated dependency bundles for common use cases.

Examples:
- \`spring-boot-starter-web\`
- \`spring-boot-starter-data-jpa\`
- \`spring-boot-starter-security\`
- \`spring-boot-starter-test\`

They reduce manual dependency selection and ensure compatible versions.`
        },
        {
          id: 15,
          question: "What is auto-configuration in Spring Boot?",
          answer: `**Auto-configuration** automatically configures beans based on:
- classpath dependencies
- existing beans
- application properties

Example: if database classes are on the classpath and relevant properties exist, Spring Boot can configure a \`DataSource\` automatically.

This removes a lot of boilerplate configuration.`
        },
        {
          id: 16,
          question: "How do you configure properties in Spring Boot?",
          answer: `Spring Boot commonly uses:
- \`application.properties\`
- \`application.yml\`

\`\`\`properties
server.port=8081
spring.datasource.url=jdbc:mysql://localhost:3306/app
\`\`\`

You can inject values using:
\`\`\`java
@Value("\${server.port}")
private int port;
\`\`\`

For grouped config, \`@ConfigurationProperties\` is preferred.`
        },
        {
          id: 17,
          question: "What is the difference between @Value and @ConfigurationProperties?",
          answer: `**@Value**
- good for a few individual properties

**@ConfigurationProperties**
- better for grouped, type-safe configuration

\`\`\`java
@ConfigurationProperties(prefix = "app.mail")
public class MailProperties {
    private String host;
    private int port;
}
\`\`\`

Use \`@ConfigurationProperties\` when config is larger or structured.`
        },
        {
          id: 18,
          question: "What is Spring MVC?",
          answer: `**Spring MVC** is Spring's web framework for handling HTTP requests using the Model-View-Controller pattern.

It provides:
- request mapping
- controllers
- validation
- data binding
- view resolution
- REST support

\`\`\`java
@GetMapping("/users/{id}")
public User getUser(@PathVariable Long id) {
    return service.findById(id);
}
\`\`\``
        },
        {
          id: 19,
          question: "What is DispatcherServlet in Spring MVC?",
          answer: `**DispatcherServlet** is the front controller in Spring MVC.

It receives incoming requests and coordinates:
- handler mapping
- controller invocation
- view resolution
- response generation

It is a core part of the MVC request flow.`
        },
        {
          id: 20,
          question: "What is the difference between @RequestParam and @PathVariable?",
          answer: `\`@RequestParam\` reads values from query parameters.
\`@PathVariable\` reads values from the URL path.

\`\`\`java
@GetMapping("/users")
public List<User> find(@RequestParam String role) { ... }

@GetMapping("/users/{id}")
public User get(@PathVariable Long id) { ... }
\`\`\`

Use path variables for resource identity and request params for filters, sorting, and optional criteria.`
        },
        {
          id: 21,
          question: "How do you handle exceptions in Spring Boot REST APIs?",
          answer: `A common approach is \`@ControllerAdvice\` with \`@ExceptionHandler\`.

\`\`\`java
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<String> handle(UserNotFoundException ex) {
        return ResponseEntity.status(404).body(ex.getMessage());
    }
}
\`\`\`

This centralizes error handling and keeps controllers cleaner.`
        },
        {
          id: 22,
          question: "What is Spring Data JPA?",
          answer: `**Spring Data JPA** simplifies persistence by reducing boilerplate around repositories and common CRUD operations.

\`\`\`java
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
\`\`\`

It provides:
- CRUD methods
- pagination and sorting
- query derivation from method names
- custom queries with \`@Query\``
        },
        {
          id: 23,
          question: "What is the difference between CrudRepository, PagingAndSortingRepository, and JpaRepository?",
          answer: `**CrudRepository**
- basic CRUD methods

**PagingAndSortingRepository**
- CRUD plus pagination and sorting

**JpaRepository**
- adds JPA-specific methods like batch operations and flush

In Spring Boot apps using JPA, \`JpaRepository\` is the most common choice.`
        },
        {
          id: 24,
          question: "What is the purpose of @Entity, @Table, @Id, and @GeneratedValue?",
          answer: `These are core JPA annotations.

\`\`\`java
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
}
\`\`\`

- \`@Entity\`: marks a class as a JPA entity
- \`@Table\`: maps it to a table
- \`@Id\`: marks primary key
- \`@GeneratedValue\`: defines how the ID is generated`
        },
        {
          id: 25,
          question: "What is the difference between findById() and getById() or getReferenceById() in JPA?",
          answer: `**findById()**
- hits the database
- returns \`Optional<T>\`

**getReferenceById()**
- returns a lazy reference proxy
- may hit the database only when accessed
- can throw an exception later if the entity does not exist

This is a common interview trap around lazy proxies and entity loading behavior.`
        },
        {
          id: 26,
          question: "What is @Transactional in Spring?",
          answer: `\`@Transactional\` defines a transactional boundary.

\`\`\`java
@Transactional
public void transfer(...) {
    debit(...);
    credit(...);
}
\`\`\`

If an exception occurs, Spring can roll the transaction back.

It is commonly used in service-layer methods that combine multiple database operations.`
        },
        {
          id: 27,
          question: "What is Actuator in Spring Boot?",
          answer: `**Spring Boot Actuator** provides production-ready endpoints for monitoring and management.

Common endpoints:
- \`/actuator/health\`
- \`/actuator/info\`
- \`/actuator/metrics\`
- \`/actuator/env\`

It helps with observability, health checks, and operations.`
        },
        {
          id: 28,
          question: "How do profiles work in Spring Boot?",
          answer: `**Profiles** let you load configuration conditionally for different environments such as dev, test, and prod.

\`\`\`properties
spring.profiles.active=dev
\`\`\`

\`\`\`java
@Profile("dev")
@Bean
public DataSource devDataSource() { ... }
\`\`\`

Profiles are commonly used for environment-specific beans and properties.`
        },
        {
          id: 29,
          question: "How do you validate request bodies in Spring Boot?",
          answer: `Spring Boot typically uses Bean Validation with \`@Valid\`.

\`\`\`java
public class UserRequest {
    @NotBlank
    private String name;

    @Email
    private String email;
}

@PostMapping("/users")
public ResponseEntity<Void> create(@Valid @RequestBody UserRequest request) {
    return ResponseEntity.ok().build();
}
\`\`\`

Validation errors can then be handled centrally with \`@ControllerAdvice\`.`
        },
        {
          id: 30,
          question: "What is the difference between @RequestBody and @ResponseBody?",
          answer: `\`@RequestBody\` binds the incoming HTTP request body to a Java object.
\`@ResponseBody\` tells Spring to write the return value directly to the response body.

\`\`\`java
@PostMapping("/users")
@ResponseBody
public User create(@RequestBody UserRequest request) {
    return service.create(request);
}
\`\`\`

In REST APIs, \`@RestController\` makes \`@ResponseBody\` implicit.`
        }
      ]
    },
    {
      title: "Spring Interview Questions for Experienced Levels",
      questions: [
        {
          id: 1,
          question: "Explain Spring Boot auto-configuration. How does it work?",
          answer: `**Auto-configuration** configures beans automatically based on classpath dependencies, existing beans, and properties.

It works using:
- \`@EnableAutoConfiguration\`
- conditional annotations like \`@ConditionalOnClass\`, \`@ConditionalOnMissingBean\`
- auto-configuration imports metadata

\`\`\`java
@AutoConfiguration
@ConditionalOnClass(DataSource.class)
public class DataSourceAutoConfiguration { }
\`\`\`

It reduces boilerplate, but senior candidates should also know how to inspect and override it.`
        },
        {
          id: 2,
          question: "What happens internally when a Spring Boot application starts?",
          answer: `At a high level:
1. \`SpringApplication.run()\` starts
2. environment and properties are prepared
3. application context is created
4. auto-configurations are evaluated
5. beans are instantiated and wired
6. embedded server starts if it is a web app
7. application becomes ready

Understanding this flow helps when debugging startup issues and bean creation failures.`
        },
        {
          id: 3,
          question: "What is the difference between BeanFactory and ApplicationContext?",
          answer: `**BeanFactory**
- basic IoC container
- lazy and minimal

**ApplicationContext**
- superset of BeanFactory
- adds events, internationalization, environment abstraction, and easier enterprise features

In real Spring Boot applications, \`ApplicationContext\` is what you commonly work with.`
        },
        {
          id: 4,
          question: "How does Spring AOP work?",
          answer: `**Spring AOP** allows cross-cutting concerns like logging, security, and transactions to be applied separately from business logic.

\`\`\`java
@Aspect
@Component
public class LoggingAspect {
    @Before("execution(* com.example.service.*.*(..))")
    public void log() {
        System.out.println("Before method");
    }
}
\`\`\`

Spring usually implements AOP using proxies around beans.`
        },
        {
          id: 5,
          question: "What is the difference between JDK dynamic proxies and CGLIB proxies in Spring?",
          answer: `Spring creates proxies for features like AOP and transactions.

**JDK dynamic proxies**
- work with interfaces
- proxy interface methods

**CGLIB**
- subclasses the target class
- works when no interface exists

This matters because proxying affects method interception behavior.`
        },
        {
          id: 6,
          question: "Why does @Transactional sometimes not work?",
          answer: `Common reasons:
- method is called from the same class (self-invocation)
- method is not public in proxy-based setups
- wrong exception type for rollback expectation
- bean is not managed by Spring
- transaction manager is misconfigured

**Classic trap:**
\`\`\`java
public void outer() {
    inner(); // self-invocation, proxy may be bypassed
}

@Transactional
public void inner() { }
\`\`\`

This is one of the most common experienced-level Spring interview questions.`
        },
        {
          id: 7,
          question: "What is transaction propagation in Spring?",
          answer: `**Propagation** defines how a transactional method should behave when another transaction already exists.

Common options:
- \`REQUIRED\`: join existing or create new
- \`REQUIRES_NEW\`: suspend existing and create new
- \`SUPPORTS\`: join if exists, otherwise run non-transactionally
- \`MANDATORY\`: must have existing transaction

Understanding \`REQUIRED\` vs \`REQUIRES_NEW\` is especially common in interviews.`
        },
        {
          id: 8,
          question: "What is transaction isolation and why does it matter?",
          answer: `Isolation controls how one transaction is visible to others.

Common isolation levels:
- READ_UNCOMMITTED
- READ_COMMITTED
- REPEATABLE_READ
- SERIALIZABLE

It matters because it affects anomalies such as:
- dirty reads
- non-repeatable reads
- phantom reads

Senior candidates are expected to connect Spring transactions with database behavior.`
        },
        {
          id: 9,
          question: "What is the difference between eager and lazy loading in JPA?",
          answer: `**Eager loading**
- related data is loaded immediately

**Lazy loading**
- related data is loaded only when accessed

\`\`\`java
@ManyToOne(fetch = FetchType.LAZY)
private Department department;
\`\`\`

Lazy loading is often preferred, but it can lead to issues like \`LazyInitializationException\` if used outside an active persistence context.`
        },
        {
          id: 10,
          question: "What is LazyInitializationException and how do you avoid it?",
          answer: `This exception happens when a lazy-loaded association is accessed after the session or persistence context is closed.

Ways to avoid it:
- fetch required data inside the transaction
- use fetch joins
- map to DTOs
- avoid exposing entities directly to the web layer

**Bad fix:** turning everything into eager loading.
That often creates performance problems instead of solving architecture issues.`
        },
        {
          id: 11,
          question: "What is the N+1 query problem in Hibernate or JPA?",
          answer: `The **N+1 problem** happens when one query loads a list of parent entities and then additional queries are fired for each child association.

Example:
1 query for orders
+ N queries for each order's customer/items

Typical fixes:
- fetch join
- entity graph
- DTO projection
- batch fetching

This is one of the most common Spring Data JPA performance interview topics.`
        },
        {
          id: 12,
          question: "How do you solve the N+1 query problem in Spring Data JPA?",
          answer: `Common approaches:

\`\`\`java
@Query("select o from Order o join fetch o.customer")
List<Order> findAllWithCustomer();
\`\`\`

Other options:
- \`@EntityGraph\`
- DTO projection queries
- batch fetching

The right solution depends on the use case. Blindly making everything eager is usually the wrong answer.`
        },
        {
          id: 13,
          question: "What is the difference between save() and saveAndFlush() in JPA repositories?",
          answer: `**save()**
- persists changes in the persistence context
- actual SQL may be deferred until flush/commit

**saveAndFlush()**
- saves and explicitly flushes immediately

Use \`saveAndFlush()\` only when you need DB synchronization right away. Overusing flushes can hurt performance.`
        },
        {
          id: 14,
          question: "What is the Open Session in View pattern and why is it controversial?",
          answer: `**Open Session in View (OSIV)** keeps the persistence session open during the web request so lazy relations can still load in the view layer.

Why people use it:
- convenient
- avoids \`LazyInitializationException\`

Why it is controversial:
- hides poor boundaries
- allows database access in the web layer
- can cause extra queries and unpredictable performance

In interviews, strong answers usually recognize both convenience and tradeoffs.`
        },
        {
          id: 15,
          question: "How do profiles and externalized configuration work in Spring Boot for real environments?",
          answer: `Spring Boot supports environment-specific configuration through:
- profiles
- environment variables
- command-line args
- property files
- config servers or secrets managers

\`\`\`properties
spring.profiles.active=prod
\`\`\`

Senior discussion usually includes how to keep secrets out of source control and how config changes are managed across environments.`
        },
        {
          id: 16,
          question: "How do you secure a Spring Boot application with Spring Security?",
          answer: `At a high level:
- define authentication
- define authorization rules
- configure password encoding
- secure endpoints

\`\`\`java
@Bean
SecurityFilterChain security(HttpSecurity http) throws Exception {
    return http
        .authorizeHttpRequests(auth -> auth
            .requestMatchers("/public/**").permitAll()
            .anyRequest().authenticated()
        )
        .build();
}
\`\`\`

Common interview areas:
- filter chain
- stateless JWT vs session auth
- CSRF
- method security`
        },
        {
          id: 17,
          question: "What is the role of the SecurityFilterChain in Spring Security?",
          answer: `The **SecurityFilterChain** defines how incoming requests are processed by Spring Security filters.

It controls things like:
- authentication
- authorization
- CSRF
- session management
- exception handling

In modern Spring Security, configuring a \`SecurityFilterChain\` bean is the standard approach instead of extending old adapter classes.`
        },
        {
          id: 18,
          question: "How do you implement JWT authentication in Spring Boot?",
          answer: `A common flow:
1. user authenticates with credentials
2. server issues JWT
3. client sends JWT in Authorization header
4. server validates token on each request

Key interview points:
- stateless auth
- token validation and expiry
- signing secret or key pair
- custom filter before username-password authentication processing

Senior candidates should also mention refresh tokens and revocation strategy tradeoffs.`
        },
        {
          id: 19,
          question: "How do you version REST APIs in Spring Boot?",
          answer: `Common API versioning approaches:
- URI versioning: \`/api/v1/users\`
- header versioning
- media type versioning

URI versioning is most common because it is simple and explicit.

Interviewers may also expect discussion about backward compatibility and deprecation strategy.`
        },
        {
          id: 20,
          question: "How do you design a proper exception handling strategy in Spring Boot?",
          answer: `A good strategy usually includes:
- domain-specific exceptions
- global exception handling with \`@RestControllerAdvice\`
- consistent error response format
- correct HTTP status codes
- logging without leaking sensitive internals

Strong answers separate business exceptions from infrastructure exceptions and avoid scattering try/catch across controllers.`
        },
        {
          id: 21,
          question: "How do you validate and sanitize inputs in Spring Boot?",
          answer: `Validation usually starts with Bean Validation:
- \`@NotNull\`
- \`@NotBlank\`
- \`@Email\`
- custom validators

Sanitization depends on context:
- reject invalid input
- encode output for HTML contexts
- validate file uploads and size limits
- avoid trusting client-side validation alone

Senior answers usually connect validation with security, not just annotations.`
        },
        {
          id: 22,
          question: "How do you handle logging and observability in Spring Boot applications?",
          answer: `A production-minded answer usually covers:
- structured logs
- correlation IDs
- log levels by environment
- metrics
- health endpoints
- tracing

Common tools:
- Actuator
- Micrometer
- Prometheus
- Grafana
- OpenTelemetry

The important point is making production issues diagnosable, not just printing logs.`
        },
        {
          id: 23,
          question: "How do you improve startup time and memory usage in Spring Boot?",
          answer: `Common strategies:
- remove unused starters
- avoid unnecessary bean creation
- lazy initialization selectively
- profile startup with actuator and JVM tools
- prefer focused auto-configuration
- optimize reflection-heavy areas when relevant

This is a good experienced question because it tests practical production awareness.`
        },
        {
          id: 24,
          question: "What is the difference between WebMvcConfigurer and filters or interceptors?",
          answer: `They solve different problems.

**Filter**
- servlet-level
- works before Spring MVC controller handling

**Interceptor**
- Spring MVC-level
- useful for request pre/post handling around controllers

**WebMvcConfigurer**
- customization hook for MVC configuration
- formatters, CORS, interceptors, message converters

A strong answer chooses the right layer for the concern.`
        },
        {
          id: 25,
          question: "What is the difference between filters and interceptors in Spring?",
          answer: `**Filters**
- part of servlet API
- can modify request/response at a lower level
- apply before DispatcherServlet handling

**Interceptors**
- part of Spring MVC
- act around controller execution

Use filters for generic web concerns like logging, compression, security-related pre-processing.
Use interceptors for controller-oriented concerns like auditing or locale handling.`
        },
        {
          id: 26,
          question: "How do you test Spring Boot applications effectively?",
          answer: `A practical strategy combines different levels:
- unit tests for business logic
- slice tests like \`@WebMvcTest\`, \`@DataJpaTest\`
- integration tests with \`@SpringBootTest\`
- testcontainers for real infrastructure where needed

Strong answers avoid loading the full application context for every test unnecessarily.`
        },
        {
          id: 27,
          question: "What is the difference between @Mock and @MockBean?",
          answer: `**@Mock**
- Mockito mock used in unit tests
- does not interact with Spring context

**@MockBean**
- creates and injects a mock into the Spring application context
- replaces an existing bean in Spring tests

This is a common test-related Spring interview question.`
        },
        {
          id: 28,
          question: "How do you handle asynchronous processing in Spring?",
          answer: `A common approach is \`@Async\`.

\`\`\`java
@Async
public CompletableFuture<Void> sendEmail() {
    return CompletableFuture.completedFuture(null);
}
\`\`\`

Senior discussion should include:
- executor configuration
- exception handling
- tracing context propagation
- when messaging is better than in-process async`
        },
        {
          id: 29,
          question: "How do you schedule jobs in Spring Boot?",
          answer: `Spring supports scheduling with \`@Scheduled\`.

\`\`\`java
@Scheduled(cron = "0 0 * * * *")
public void runHourly() { }
\`\`\`

Important experienced-level concerns:
- idempotency
- retries
- distributed locking in multi-instance deployments
- timezone handling
- monitoring failed jobs`
        },
        {
          id: 30,
          question: "What are the most common production issues you watch for in Spring Boot applications?",
          answer: `Common real-world issues include:
- connection pool exhaustion
- slow queries and N+1 problems
- memory leaks or oversized caches
- thread pool starvation
- missing timeouts on HTTP/database calls
- poor exception handling
- bad logging and missing correlation IDs
- misconfigured transactions

This is a strong senior question because it tests whether someone has operated Spring systems, not just coded in them.`
        }
      ]
    }
  ]
};
