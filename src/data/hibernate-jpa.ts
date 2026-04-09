import { Category } from "./types";

export const hibernateJpaCategory: Category = {
  id: "hibernate-jpa",
  name: "Hibernate / JPA",
  subtitle: "Interview Questions",
  icon: "hibernate",
  color: "#59666c",
  sections: [
    {
      title: "Hibernate / JPA Interview Questions for Freshers and Intermediate Levels",
      questions: [
        {
          id: 1,
          question: "What is JPA?",
          answer: `**JPA (Java Persistence API)** is a Java specification for object-relational mapping and persistence.

It defines standard annotations, interfaces, and behavior for mapping Java objects to database tables.

**Important point:** JPA is only a specification, not an implementation.

Common JPA implementations include:
- Hibernate
- EclipseLink`
        },
        {
          id: 2,
          question: "What is Hibernate and how is it different from JPA?",
          answer: `**Hibernate** is an ORM framework and one of the most widely used implementations of JPA.

**Difference:**
- **JPA** defines the standard API and behavior
- **Hibernate** provides the actual implementation and also offers extra features beyond JPA

\`\`\`
JPA = specification
Hibernate = implementation of that specification
\`\`\`

In many applications, developers code against JPA interfaces while Hibernate runs underneath.`
        },
        {
          id: 3,
          question: "What is ORM in Hibernate or JPA?",
          answer: `**ORM (Object-Relational Mapping)** means mapping Java classes to database tables and object fields to table columns.

This allows you to work with objects in code while the ORM framework handles much of the SQL generation and persistence behavior.

**Benefits:**
- less boilerplate JDBC code
- easier entity modeling
- integration with transactions and caching

**Tradeoff:** You still need to understand SQL and database behavior because ORM does not remove query and schema design concerns.`
        },
        {
          id: 4,
          question: "What are @Entity, @Table, @Id, and @GeneratedValue?",
          answer: `These are core JPA annotations used to map a Java class to a database table.

\`\`\`java
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue
    private Long id;

    private String name;
}
\`\`\`

**Meaning:**
- \`@Entity\`: marks a persistent JPA entity
- \`@Table\`: maps the entity to a table name
- \`@Id\`: marks the primary key
- \`@GeneratedValue\`: tells JPA how the key is generated`
        },
        {
          id: 5,
          question: "What is the difference between save(), persist(), and merge()?",
          answer: `These methods are related but come from different APIs and entity states.

- \`persist()\` is the standard JPA method used to make a new entity managed
- \`merge()\` copies state from a detached entity into a managed entity
- \`save()\` is commonly seen in Spring Data repository APIs

**Practical view:**
- use \`persist()\` for new entities
- use \`merge()\` when reattaching detached state
- use repository \`save()\` in Spring Data applications for common CRUD flows

Understanding entity state matters more than memorizing only the method names.`
        },
        {
          id: 6,
          question: "What is the EntityManager in JPA?",
          answer: `The **EntityManager** is the main JPA interface used to manage persistence operations.

It is responsible for:
- persisting entities
- finding entities
- removing entities
- merging detached entities
- creating queries

\`\`\`java
User user = entityManager.find(User.class, 1L);
\`\`\`

It works within a persistence context and usually participates in a transaction.`
        },
        {
          id: 7,
          question: "What is the persistence context?",
          answer: `A **persistence context** is the set of entities currently managed by the EntityManager.

If an entity is managed:
- JPA tracks changes automatically
- repeated lookups can return the same managed instance
- updates may be synchronized to the database during flush or commit

This is why JPA can update rows even when you do not call an explicit update method.`
        },
        {
          id: 8,
          question: "What are the different entity states in JPA?",
          answer: `An entity usually moves through these states:

- **Transient**: created in memory, not yet managed
- **Managed/Persistent**: tracked by the persistence context
- **Detached**: was managed before, but no longer attached
- **Removed**: marked for deletion

\`\`\`
new object -> persist -> managed -> detach -> detached
managed -> remove -> removed
\`\`\`

This is one of the most important concepts in JPA because many behaviors depend on entity state.`
        },
        {
          id: 9,
          question: "What is lazy loading and eager loading in JPA?",
          answer: `These control when related data is loaded.

- **Eager loading** fetches related data immediately
- **Lazy loading** fetches related data only when accessed

\`\`\`java
@OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
private List<Order> orders;
\`\`\`

**Typical guidance:**
- prefer lazy loading by default
- fetch only what the use case actually needs

Eager loading can cause unnecessary queries and memory usage if used carelessly.`
        },
        {
          id: 10,
          question: "What is the N+1 query problem in Hibernate or JPA?",
          answer: `The **N+1 query problem** happens when one query loads parent records and then additional queries are triggered for each related child record.

For example:
- 1 query loads 100 users
- 100 more queries load each user's orders

This causes unnecessary database round trips and can seriously hurt performance.

Common solutions:
- fetch join
- entity graph
- batch fetching
- projection-based queries`
        },
        {
          id: 11,
          question: "What is JPQL?",
          answer: `**JPQL (Java Persistence Query Language)** is an object-oriented query language defined by JPA.

It queries entities and their fields, not raw table names directly.

\`\`\`java
List<User> users = entityManager
    .createQuery("select u from User u where u.active = true", User.class)
    .getResultList();
\`\`\`

**Difference from SQL:**
- JPQL works with entity names and mapped fields
- SQL works with tables and columns`
        },
        {
          id: 12,
          question: "What is the difference between get() and load() in Hibernate?",
          answer: `These are Hibernate-specific retrieval methods.

- \`get()\` hits the database immediately and returns the entity or \`null\`
- \`load()\` may return a proxy first and can fail later if the entity does not exist

This question appears often in Hibernate-focused interviews because it tests proxy and lazy-loading awareness.

In modern JPA-oriented applications, similar discussion often happens around \`find()\` and reference/proxy methods.`
        }
      ]
    },
    {
      title: "Hibernate / JPA Interview Questions for Experienced Levels",
      questions: [
        {
          id: 1,
          question: "How do transactions work in JPA or Hibernate?",
          answer: `A transaction groups multiple persistence operations into a single unit of work.

Within a transaction:
- entities become managed
- dirty checking can detect changes
- SQL is usually flushed before commit
- commit makes the changes durable

In Spring applications, transaction boundaries are commonly managed with \`@Transactional\`.

A key interview point is understanding that JPA behavior is strongly tied to transaction scope.`
        },
        {
          id: 2,
          question: "What is dirty checking in Hibernate?",
          answer: `**Dirty checking** means Hibernate detects changes made to managed entities and automatically generates the necessary SQL update statements.

\`\`\`java
User user = entityManager.find(User.class, 1L);
user.setName("Updated");
// Hibernate can issue update SQL during flush/commit
\`\`\`

This reduces boilerplate, but it also means accidental changes to managed entities can be persisted if transaction boundaries are not well understood.`
        },
        {
          id: 3,
          question: "What is flush() and how is it different from commit()?",
          answer: `**flush()** synchronizes pending entity changes with the database.
**commit()** finalizes the transaction.

**Difference:**
- \`flush()\` sends SQL to the database but does not make the transaction permanent by itself
- \`commit()\` ends the transaction and makes changes durable

You may see SQL executed before commit because Hibernate flushes automatically in certain situations.`
        },
        {
          id: 4,
          question: "What are first-level cache and second-level cache in Hibernate?",
          answer: `Hibernate supports multiple caching layers.

**First-level cache**
- tied to the persistence context
- enabled by default
- scoped to an EntityManager or Session

**Second-level cache**
- shared across sessions
- optional and provider-based
- useful for frequently read, rarely changed data

Caching can improve performance, but stale data and invalidation strategy must be considered carefully.`
        },
        {
          id: 5,
          question: "How do you solve LazyInitializationException?",
          answer: `A **LazyInitializationException** usually happens when lazy-loaded data is accessed after the persistence context is already closed.

Common solutions:
- load the needed associations inside the transaction
- use fetch joins or entity graphs
- return DTOs instead of exposing entities directly
- avoid relying on Open Session in View as a default fix

The correct fix is usually to design the query and transaction boundary around the use case, not to force everything eager.`
        },
        {
          id: 6,
          question: "What are cascading types in JPA?",
          answer: `Cascade settings define whether operations on one entity should propagate to related entities.

Common cascade types:
- \`PERSIST\`
- \`MERGE\`
- \`REMOVE\`
- \`REFRESH\`
- \`DETACH\`
- \`ALL\`

\`\`\`java
@OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
private List<OrderItem> items;
\`\`\`

Cascade choices should reflect aggregate ownership, not be applied blindly.`
        },
        {
          id: 7,
          question: "What is the difference between orphanRemoval and CascadeType.REMOVE?",
          answer: `These two concepts are related but not identical.

- \`CascadeType.REMOVE\` propagates delete when the parent itself is removed
- \`orphanRemoval = true\` removes a child when it is no longer referenced by the parent collection or relationship

This is a common experienced-level topic because incorrect use can lead to unexpected deletes.`
        },
        {
          id: 8,
          question: "When should you use DTO projections instead of returning entities?",
          answer: `Use **DTO projections** when you only need a subset of fields or when returning data outside the persistence boundary.

DTO projections help with:
- reducing over-fetching
- avoiding lazy-loading problems
- shaping API responses clearly
- reducing coupling between persistence and presentation layers

Returning entities directly from service or API boundaries often creates performance and maintenance problems in larger systems.`
        },
        {
          id: 9,
          question: "How do you approach JPA or Hibernate performance tuning in production?",
          answer: `Start with measurement, not guesswork.

Typical steps:
- inspect slow queries and execution plans
- watch query counts and round trips
- detect N+1 problems
- review fetch strategies
- check indexes
- evaluate batch size and pagination behavior
- use caching carefully where read patterns justify it

Good JPA tuning usually combines ORM-level fixes and database-level fixes.`
        },
        {
          id: 10,
          question: "What problems can occur with equals() and hashCode() in JPA entities?",
          answer: `Entity equality is tricky because identifiers may be assigned only after persistence and proxies may be involved.

Common problems:
- using mutable fields in \`equals()\` or \`hashCode()\`
- changing hash-based collection behavior after persistence
- comparing entities incorrectly across persistence contexts

This is a strong experienced question because mistakes here can create subtle bugs in sets, maps, and domain logic.`
        }
      ]
    }
  ]
};
