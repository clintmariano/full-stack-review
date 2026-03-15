import { Category } from "./types";

export const sqlCategory: Category = {
  id: "sql",
  name: "SQL",
  subtitle: "Interview Questions",
  icon: "sql",
  color: "#336791",
  sections: [
    {
      title: "SQL Interview Questions for Freshers and Intermediate Levels",
      questions: [
        {
          id: 1,
          question: "What is SQL?",
          answer: `**SQL (Structured Query Language)** is used to manage and query relational databases.

Common uses:
- creating tables
- inserting and updating data
- querying data
- defining permissions
- managing transactions`
        },
        {
          id: 2,
          question: "What is the difference between DBMS and RDBMS?",
          answer: `**DBMS** stores data but may not enforce relationships.
**RDBMS** stores data in related tables and supports constraints and SQL.

Examples:
- DBMS: older file-based or non-relational systems
- RDBMS: MySQL, PostgreSQL, Oracle, SQL Server`
        },
        {
          id: 3,
          question: "What is a primary key?",
          answer: `A **primary key** uniquely identifies each row in a table.

Properties:
- unique
- not null
- one primary key per table

\`\`\`sql
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100)
);
\`\`\``
        },
        {
          id: 4,
          question: "What is a foreign key?",
          answer: `A **foreign key** creates a relationship between two tables by referencing the primary key of another table.

\`\`\`sql
CREATE TABLE orders (
    id INT PRIMARY KEY,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
\`\`\`

It helps maintain referential integrity.`
        },
        {
          id: 5,
          question: "What is the difference between WHERE and HAVING clauses?",
          answer: `**WHERE**
- filters rows before grouping
- cannot use aggregate functions directly

**HAVING**
- filters grouped results after \`GROUP BY\`
- can use aggregate functions

\`\`\`sql
SELECT department, COUNT(*)
FROM employees
WHERE salary > 50000
GROUP BY department
HAVING COUNT(*) > 5;
\`\`\``
        },
        {
          id: 6,
          question: "Explain different types of JOINs in SQL.",
          answer: `Common joins:
- **INNER JOIN**: only matching rows
- **LEFT JOIN**: all rows from left table + matches from right
- **RIGHT JOIN**: all rows from right table + matches from left
- **FULL OUTER JOIN**: all rows from both sides

\`\`\`sql
SELECT e.name, d.dept_name
FROM employees e
LEFT JOIN departments d ON e.dept_id = d.id;
\`\`\``
        },
        {
          id: 7,
          question: "What is the difference between DELETE, TRUNCATE, and DROP?",
          answer: `**DELETE**
- removes selected rows
- can use WHERE
- can be rolled back in transactions in many DBs

**TRUNCATE**
- removes all rows quickly
- usually no WHERE
- resets storage/identity behavior depending on DB

**DROP**
- removes the table itself`
        },
        {
          id: 8,
          question: "What is normalization?",
          answer: `**Normalization** organizes data to reduce redundancy and improve consistency.

Benefits:
- less duplication
- fewer update anomalies
- cleaner table design

Common normal forms: 1NF, 2NF, 3NF, BCNF.`
        },
        {
          id: 9,
          question: "What is denormalization?",
          answer: `**Denormalization** intentionally adds redundancy to improve read performance.

It is used when:
- joins are expensive
- reads are much more frequent than writes
- reporting queries need simplified access

Tradeoff: faster reads, but harder updates and more storage usage.`
        },
        {
          id: 10,
          question: "What is the difference between CHAR and VARCHAR?",
          answer: `**CHAR**
- fixed-length
- padded if shorter

**VARCHAR**
- variable-length
- stores only needed characters

Use \`CHAR\` for fixed-size values like country codes, and \`VARCHAR\` for variable text like names or emails.`
        },
        {
          id: 11,
          question: "What is a NULL value in SQL?",
          answer: `**NULL** means missing or unknown data. It is not zero, not an empty string, and not false.

\`\`\`sql
SELECT *
FROM employees
WHERE manager_id IS NULL;
\`\`\`

Use \`IS NULL\` and \`IS NOT NULL\`, not \`=\` or \`!=\`.`
        },
        {
          id: 12,
          question: "What is the difference between UNION and UNION ALL?",
          answer: `**UNION**
- combines results
- removes duplicates

**UNION ALL**
- combines results
- keeps duplicates
- usually faster

Use \`UNION ALL\` when you do not need duplicate elimination.`
        },
        {
          id: 13,
          question: "What is GROUP BY in SQL?",
          answer: `\`GROUP BY\` groups rows with the same values so aggregate functions can be applied.

\`\`\`sql
SELECT department, AVG(salary)
FROM employees
GROUP BY department;
\`\`\``
        },
        {
          id: 14,
          question: "What are aggregate functions in SQL?",
          answer: `Common aggregate functions:
- \`COUNT()\`
- \`SUM()\`
- \`AVG()\`
- \`MIN()\`
- \`MAX()\`

\`\`\`sql
SELECT COUNT(*), AVG(salary), MAX(salary)
FROM employees;
\`\`\``
        },
        {
          id: 15,
          question: "What is the difference between clustered and non-clustered indexes?",
          answer: `**Clustered index**
- affects physical order of data storage
- usually one per table

**Non-clustered index**
- separate structure with pointers to rows
- multiple allowed

Exact implementation varies by database engine, but this distinction is commonly asked in interviews.`
        },
        {
          id: 16,
          question: "What is an index and why is it used?",
          answer: `An **index** improves query performance by helping the database find rows faster.

Good for:
- filtering
- joins
- sorting

Tradeoff:
- faster reads
- slower writes and extra storage`
        },
        {
          id: 17,
          question: "What is a view in SQL?",
          answer: `A **view** is a virtual table based on a query.

\`\`\`sql
CREATE VIEW active_users AS
SELECT id, name
FROM users
WHERE status = 'ACTIVE';
\`\`\`

Views help simplify complex queries and can improve security by exposing only selected columns.`
        },
        {
          id: 18,
          question: "What is a subquery?",
          answer: `A **subquery** is a query nested inside another query.

\`\`\`sql
SELECT name
FROM employees
WHERE salary > (
    SELECT AVG(salary) FROM employees
);
\`\`\`

Subqueries can appear in \`SELECT\`, \`FROM\`, or \`WHERE\`.`
        },
        {
          id: 19,
          question: "What is the difference between IN and EXISTS?",
          answer: `**IN**
- compares a value against a list or subquery result

**EXISTS**
- checks whether a subquery returns any row

\`\`\`sql
SELECT *
FROM customers c
WHERE EXISTS (
    SELECT 1
    FROM orders o
    WHERE o.customer_id = c.id
);
\`\`\`

\`EXISTS\` is often better for correlated subqueries.`
        },
        {
          id: 20,
          question: "What is the difference between DDL, DML, DCL, and TCL?",
          answer: `**DDL**: schema definition
- \`CREATE\`, \`ALTER\`, \`DROP\`

**DML**: data manipulation
- \`INSERT\`, \`UPDATE\`, \`DELETE\`

**DCL**: access control
- \`GRANT\`, \`REVOKE\`

**TCL**: transaction control
- \`COMMIT\`, \`ROLLBACK\`, \`SAVEPOINT\``
        },
        {
          id: 21,
          question: "What is a transaction in SQL?",
          answer: `A **transaction** is a group of operations treated as one logical unit.

It should satisfy ACID properties:
- Atomicity
- Consistency
- Isolation
- Durability`
        },
        {
          id: 22,
          question: "What are ACID properties?",
          answer: `**Atomicity**: all or nothing
**Consistency**: data remains valid
**Isolation**: concurrent transactions do not interfere incorrectly
**Durability**: committed changes survive failures`
        },
        {
          id: 23,
          question: "What is a constraint in SQL?",
          answer: `Constraints enforce rules on table data.

Common constraints:
- PRIMARY KEY
- FOREIGN KEY
- UNIQUE
- NOT NULL
- CHECK
- DEFAULT`
        },
        {
          id: 24,
          question: "What is the difference between UNIQUE and PRIMARY KEY?",
          answer: `Both enforce uniqueness, but:
- a table has only one primary key
- primary key columns cannot be NULL
- a table can have multiple UNIQUE constraints

Depending on the DB, UNIQUE may allow NULL behavior differently.`
        },
        {
          id: 25,
          question: "What is a stored procedure?",
          answer: `A **stored procedure** is a reusable set of SQL statements stored in the database.

It can help with:
- encapsulating business logic
- reducing repeated SQL
- improving security in some cases

Exact syntax differs by database engine.`
        },
        {
          id: 26,
          question: "What is the difference between a stored procedure and a function?",
          answer: `In general:
- a **function** returns a value and is often used inside queries
- a **procedure** performs actions and may or may not return data

Exact behavior varies by database, but this is the standard interview distinction.`
        },
        {
          id: 27,
          question: "What is a trigger in SQL?",
          answer: `A **trigger** is code that runs automatically when specific events occur on a table.

Examples:
- BEFORE INSERT
- AFTER UPDATE
- AFTER DELETE

Triggers can be powerful but should be used carefully because they can hide logic.`
        },
        {
          id: 28,
          question: "What is the difference between SQL and NoSQL?",
          answer: `**SQL databases**
- relational
- structured schema
- strong joins and transactions

**NoSQL databases**
- flexible models
- often easier horizontal scaling
- different tradeoffs for consistency and querying

Use depends on workload and data model.`
        },
        {
          id: 29,
          question: "What is a self join?",
          answer: `A **self join** joins a table to itself.

\`\`\`sql
SELECT e.name AS employee, m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;
\`\`\`

It is commonly used for hierarchical relationships.`
        },
        {
          id: 30,
          question: "What is the difference between ORDER BY and GROUP BY?",
          answer: `**ORDER BY**
- sorts rows

**GROUP BY**
- groups rows for aggregation

\`\`\`sql
SELECT department, COUNT(*)
FROM employees
GROUP BY department
ORDER BY department;
\`\`\``
        }
      ]
    },
    {
      title: "SQL Interview Questions for Experienced Levels",
      questions: [
        {
          id: 1,
          question: "How do you optimize a slow SQL query?",
          answer: `Common steps:
- inspect execution plan with \`EXPLAIN\` or \`EXPLAIN ANALYZE\`
- add or improve indexes
- avoid \`SELECT *\`
- reduce unnecessary joins
- filter early
- check stats and cardinality
- confirm the real bottleneck before rewriting queries`
        },
        {
          id: 2,
          question: "How do you find the second highest salary in SQL?",
          answer: `This is one of the most common SQL interview questions.

\`\`\`sql
SELECT MAX(salary) AS second_highest_salary
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);
\`\`\`

If duplicates matter or ranking is required, window functions are often better.`
        },
        {
          id: 3,
          question: "How do you find the nth highest salary in SQL?",
          answer: `A common approach is using \`DENSE_RANK()\`.

\`\`\`sql
SELECT salary
FROM (
    SELECT salary,
           DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
    FROM employees
) t
WHERE rnk = 3;
\`\`\`

This is the generalized form of the classic second-highest-salary question.`
        },
        {
          id: 4,
          question: "How do you find duplicate rows in a table?",
          answer: `Use \`GROUP BY\` with \`HAVING\`.

\`\`\`sql
SELECT email, COUNT(*)
FROM users
GROUP BY email
HAVING COUNT(*) > 1;
\`\`\`

This is a very common interview query.`
        },
        {
          id: 5,
          question: "How do you delete duplicate rows while keeping one copy?",
          answer: `A common approach is using a CTE with \`ROW_NUMBER()\`.

\`\`\`sql
WITH ranked AS (
    SELECT id,
           ROW_NUMBER() OVER (PARTITION BY email ORDER BY id) AS rn
    FROM users
)
DELETE FROM users
WHERE id IN (
    SELECT id
    FROM ranked
    WHERE rn > 1
);
\`\`\`

The exact delete syntax can vary by database.`
        },
        {
          id: 6,
          question: "What is the difference between ROW_NUMBER(), RANK(), and DENSE_RANK()?",
          answer: `**ROW_NUMBER()**
- unique sequence, no ties

**RANK()**
- same rank for ties, leaves gaps

**DENSE_RANK()**
- same rank for ties, no gaps

These are common in interview problems involving top-N and duplicate ranking.`
        },
        {
          id: 7,
          question: "How do you get the top N records per group?",
          answer: `This is another classic interview question.

\`\`\`sql
SELECT *
FROM (
    SELECT e.*,
           ROW_NUMBER() OVER (
               PARTITION BY department_id
               ORDER BY salary DESC
           ) AS rn
    FROM employees e
) t
WHERE rn <= 3;
\`\`\``
        },
        {
          id: 8,
          question: "What are window functions in SQL?",
          answer: `Window functions perform calculations across a set of rows related to the current row without collapsing them like \`GROUP BY\`.

Common examples:
- \`ROW_NUMBER()\`
- \`RANK()\`
- \`DENSE_RANK()\`
- \`LAG()\`
- \`LEAD()\`
- running totals with \`SUM() OVER (...)\``
        },
        {
          id: 9,
          question: "What is the difference between correlated and non-correlated subqueries?",
          answer: `A **correlated subquery** depends on the outer query and runs logically per outer row.

\`\`\`sql
SELECT *
FROM employees e
WHERE salary > (
    SELECT AVG(salary)
    FROM employees
    WHERE department_id = e.department_id
);
\`\`\`

A non-correlated subquery can run independently.`
        },
        {
          id: 10,
          question: "What is transaction isolation in SQL?",
          answer: `**Transaction isolation** controls how concurrent transactions interact and what data they can see.

Common levels:
- READ UNCOMMITTED
- READ COMMITTED
- REPEATABLE READ
- SERIALIZABLE

It directly affects concurrency and data correctness.`
        },
        {
          id: 11,
          question: "What problems do transaction isolation levels solve?",
          answer: `Isolation levels help control anomalies such as:
- dirty reads
- non-repeatable reads
- phantom reads

Higher isolation reduces anomalies but may reduce concurrency.`
        },
        {
          id: 12,
          question: "What is the difference between READ COMMITTED, REPEATABLE READ, and SERIALIZABLE?",
          answer: `**READ COMMITTED**
- avoids dirty reads

**REPEATABLE READ**
- prevents non-repeatable reads in many DBs

**SERIALIZABLE**
- strongest isolation
- transactions behave as if executed one by one

Higher isolation usually means more locking or concurrency control overhead.`
        },
        {
          id: 13,
          question: "What is transaction propagation and is it an SQL concept?",
          answer: `**Propagation** is usually an application/framework transaction concept, not a core SQL language feature.

It defines how one transactional method behaves when another transaction already exists.

Examples appear in frameworks like Spring:
- REQUIRED
- REQUIRES_NEW
- SUPPORTS

Interview distinction:
- **Isolation** = database concurrency behavior
- **Propagation** = application transaction-boundary behavior`
        },
        {
          id: 14,
          question: "What is a deadlock in SQL and how do you handle it?",
          answer: `A **deadlock** happens when two or more transactions wait on each other in a cycle.

Ways to reduce deadlocks:
- keep transactions short
- access tables in consistent order
- index properly
- retry aborted transactions where appropriate`
        },
        {
          id: 15,
          question: "What is the difference between optimistic and pessimistic locking?",
          answer: `**Optimistic locking**
- assumes conflicts are rare
- checks version/timestamp before commit

**Pessimistic locking**
- locks rows earlier to prevent conflicts

Optimistic works well for high-read/low-conflict scenarios.`
        },
        {
          id: 16,
          question: "What is a composite index and how does column order matter?",
          answer: `A **composite index** covers multiple columns.

\`\`\`sql
CREATE INDEX idx_customer_date
ON orders(customer_id, order_date);
\`\`\`

Column order matters because the index is most effective when queries filter from the leftmost indexed columns.`
        },
        {
          id: 17,
          question: "What is a covering index?",
          answer: `A **covering index** contains all the columns needed by a query, so the database may avoid extra table lookups.

This can improve performance significantly for read-heavy workloads.`
        },
        {
          id: 18,
          question: "What is the difference between OLTP and OLAP workloads?",
          answer: `**OLTP**
- many small transactions
- insert/update/delete heavy
- low latency

**OLAP**
- analytical queries
- large scans and aggregations
- reporting and business intelligence

Schema and indexing strategies often differ between them.`
        },
        {
          id: 19,
          question: "How do you paginate query results efficiently?",
          answer: `**OFFSET/LIMIT** is simple but can get slow on large pages.

**Keyset pagination** is often better for large datasets:

\`\`\`sql
SELECT *
FROM orders
WHERE id > 1000
ORDER BY id
LIMIT 50;
\`\`\`

It avoids scanning and skipping many rows.`
        },
        {
          id: 20,
          question: "How do you write a running total query in SQL?",
          answer: `Window functions make this straightforward.

\`\`\`sql
SELECT order_date,
       amount,
       SUM(amount) OVER (ORDER BY order_date) AS running_total
FROM orders;
\`\`\``
        },
        {
          id: 21,
          question: "How do you compare current row with previous row in SQL?",
          answer: `Use \`LAG()\`.

\`\`\`sql
SELECT employee_id,
       salary,
       LAG(salary) OVER (PARTITION BY employee_id ORDER BY effective_date) AS prev_salary
FROM salary_history;
\`\`\`

This is common in trend and audit questions.`
        },
        {
          id: 22,
          question: "What is the difference between EXISTS, IN, and JOIN in performance terms?",
          answer: `There is no universal winner; it depends on data distribution, indexes, and the optimizer.

General guidance:
- \`EXISTS\` is often good for existence checks
- \`IN\` can be fine for small sets or optimizer-rewritten queries
- \`JOIN\` is useful when you actually need columns from both sides

Strong interview answers avoid absolute claims and mention execution plans.`
        },
        {
          id: 23,
          question: "What is a CTE and when would you use one?",
          answer: `A **CTE (Common Table Expression)** improves readability and can help structure complex queries.

\`\`\`sql
WITH high_earners AS (
    SELECT *
    FROM employees
    WHERE salary > 100000
)
SELECT *
FROM high_earners;
\`\`\`

Recursive CTEs are also used for hierarchies.`
        },
        {
          id: 24,
          question: "How do recursive CTEs work?",
          answer: `Recursive CTEs repeatedly build a result from a base query plus a recursive step.

\`\`\`sql
WITH RECURSIVE emp_tree AS (
    SELECT id, manager_id, name
    FROM employees
    WHERE manager_id IS NULL

    UNION ALL

    SELECT e.id, e.manager_id, e.name
    FROM employees e
    JOIN emp_tree t ON e.manager_id = t.id
)
SELECT * FROM emp_tree;
\`\`\`

They are commonly used for org charts and category trees.`
        },
        {
          id: 25,
          question: "What is database partitioning?",
          answer: `**Partitioning** splits large tables into smaller logical parts while keeping them queryable as one table.

Common types:
- range partitioning
- list partitioning
- hash partitioning

It helps with very large tables and maintenance, but adds design complexity.`
        },
        {
          id: 26,
          question: "What is sharding and how is it different from partitioning?",
          answer: `**Partitioning** is usually within one database system.
**Sharding** distributes data across multiple database instances or servers.

Sharding adds scale, but also increases operational complexity.`
        },
        {
          id: 27,
          question: "What are common causes of poor SQL performance besides missing indexes?",
          answer: `Other common causes:
- bad join order
- stale statistics
- too much data scanned
- functions on indexed columns
- implicit type conversions
- returning unnecessary columns
- poor schema design`
        },
        {
          id: 28,
          question: "How do you design indexes for interview queries without over-indexing?",
          answer: `A good answer balances:
- filter columns
- join columns
- sort columns
- write overhead
- storage cost

Indexes should match real query patterns, not be added blindly for every column.`
        },
        {
          id: 29,
          question: "What is the difference between COUNT(*), COUNT(1), and COUNT(column)?",
          answer: `**COUNT(*)**
- counts rows

**COUNT(1)**
- also counts rows in practice

**COUNT(column)**
- counts only non-NULL values in that column

Interview trap: \`COUNT(column)\` is not the same as total row count if NULLs exist.`
        },
        {
          id: 30,
          question: "How do you approach tricky SQL interview problems?",
          answer: `A good approach:
1. clarify expected output and duplicate handling
2. identify grouping, ranking, or filtering pattern
3. choose between aggregate functions, joins, subqueries, or window functions
4. validate edge cases like NULLs and ties

This is how candidates usually solve questions like second-highest salary, top N per group, duplicates, and gaps in sequences.`
        }
      ]
    }
  ]
};
