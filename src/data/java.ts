import { Category } from "./types";

export const javaCategory: Category = {
  id: "java",
  name: "Java",
  subtitle: "Interview Questions",
  icon: "java",
  color: "#f89820",
  sections: [
    {
      title: "Java Interview Questions for Freshers and Intermediate Levels",
      questions: [
        {
          id: 1,
          question: "What is the difference between JDK, JRE, and JVM?",
          answer: `**JVM (Java Virtual Machine):** The JVM is an abstract machine that provides a runtime environment in which Java bytecode can be executed. It is platform-dependent.

**JRE (Java Runtime Environment):** The JRE provides the libraries, Java Virtual Machine, and other components to run applications written in Java. It does not contain development tools.

**JDK (Java Development Kit):** The JDK is a full-featured software development kit that includes JRE, compilers, and tools like JavaDoc and Java Debugger.

\`\`\`
JDK = JRE + Development Tools
JRE = JVM + Library Classes
\`\`\`

**Key Points:**
- **JVM** is for running bytecode
- **JRE** is for running Java applications
- **JDK** is for developing Java applications`
        },
        {
          id: 2,
          question: "Explain the concept of Object-Oriented Programming in Java.",
          answer: `Java is an object-oriented programming language that follows four main principles:

**1. Encapsulation**
Wrapping data (variables) and code (methods) together as a single unit.

\`\`\`java
public class BankAccount {
    private double balance;

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
}
\`\`\`

**2. Inheritance**
One class can inherit properties and methods from another class.

**3. Polymorphism**
The ability of an object to take many forms - method overloading and overriding.

**4. Abstraction**
Hiding implementation details and showing only functionality to the user.`
        },
        {
          id: 3,
          question: "What is the difference between == and equals() in Java?",
          answer: `**== Operator:**
- Compares **references** (memory addresses) for objects
- Compares **values** for primitive types

**equals() Method:**
- Compares the **content/values** of objects
- Can be overridden to define custom equality logic

\`\`\`java
String s1 = new String("Hello");
String s2 = new String("Hello");
String s3 = "Hello";
String s4 = "Hello";

// Reference comparison
System.out.println(s1 == s2);      // false (different objects)
System.out.println(s3 == s4);      // true (string pool)

// Content comparison
System.out.println(s1.equals(s2)); // true (same content)
System.out.println(s1.equals(s3)); // true (same content)
\`\`\`

**Important:** Always use \`equals()\` for object comparison and override it along with \`hashCode()\` when defining custom classes.`
        },
        {
          id: 4,
          question: "What are the different types of memory areas allocated by JVM?",
          answer: `JVM allocates memory in the following areas:

**1. Heap Memory**
- Stores all objects and their instance variables
- Shared among all threads
- Garbage collected

**2. Stack Memory**
- Stores local variables and method calls
- Each thread has its own stack
- LIFO (Last In First Out) structure

**3. Method Area (Metaspace in Java 8+)**
- Stores class-level data: class structures, methods, constructors
- Shared among all threads

**4. PC (Program Counter) Register**
- Stores address of current executing instruction
- Each thread has its own PC register

**5. Native Method Stack**
- Stores native method information

\`\`\`
┌─────────────────────────────────────┐
│             JVM Memory              │
├─────────────┬───────────────────────┤
│   Heap      │  Objects, Arrays      │
├─────────────┼───────────────────────┤
│   Stack     │  Local vars, Methods  │
├─────────────┼───────────────────────┤
│  Metaspace  │  Class metadata       │
└─────────────┴───────────────────────┘
\`\`\``
        },
        {
          id: 5,
          question: "What is the difference between String, StringBuilder, and StringBuffer?",
          answer: `| Feature | String | StringBuilder | StringBuffer |
|---------|--------|---------------|--------------|
| Mutability | Immutable | Mutable | Mutable |
| Thread Safety | Yes (immutable) | No | Yes (synchronized) |
| Performance | Slow for concatenation | Fast | Slower than StringBuilder |
| Storage | String Pool | Heap | Heap |

\`\`\`java
// String - creates new object each time
String str = "Hello";
str = str + " World"; // New object created

// StringBuilder - modifies same object (not thread-safe)
StringBuilder sb = new StringBuilder("Hello");
sb.append(" World"); // Same object modified

// StringBuffer - modifies same object (thread-safe)
StringBuffer sbf = new StringBuffer("Hello");
sbf.append(" World"); // Same object modified, synchronized
\`\`\`

**When to use:**
- **String**: When the value won't change
- **StringBuilder**: Single-threaded string manipulation
- **StringBuffer**: Multi-threaded string manipulation`
        },
        {
          id: 6,
          question: "What is the difference between Abstract Class and Interface?",
          answer: `| Feature | Abstract Class | Interface |
|---------|----------------|-----------|
| Methods | Abstract and concrete | Abstract, default, static (Java 8+) |
| Variables | Any type | public static final only |
| Inheritance | Single | Multiple |
| Constructor | Can have | Cannot have |
| Access Modifiers | Any | public only (methods) |

\`\`\`java
// Abstract Class
abstract class Animal {
    protected String name;

    public Animal(String name) {
        this.name = name;
    }

    abstract void makeSound();

    public void sleep() {
        System.out.println("Sleeping...");
    }
}

// Interface
interface Flyable {
    void fly();

    default void glide() {
        System.out.println("Gliding...");
    }
}

// Usage
class Bird extends Animal implements Flyable {
    public Bird(String name) { super(name); }
    void makeSound() { System.out.println("Chirp!"); }
    public void fly() { System.out.println("Flying!"); }
}
\`\`\`

**Use Abstract Class when:** Classes share common state/behavior
**Use Interface when:** Defining a contract for unrelated classes`
        },
        {
          id: 7,
          question: "What is method overloading and method overriding?",
          answer: `**Method Overloading (Compile-time Polymorphism)**
- Same method name, different parameters
- Happens within the same class
- Return type can be different

\`\`\`java
class Calculator {
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
    int add(int a, int b, int c) { return a + b + c; }
}
\`\`\`

**Method Overriding (Runtime Polymorphism)**
- Same method signature in parent and child class
- Requires inheritance
- Return type must be same or covariant

\`\`\`java
class Animal {
    void speak() { System.out.println("Animal speaks"); }
}

class Dog extends Animal {
    @Override
    void speak() { System.out.println("Dog barks"); }
}

Animal a = new Dog();
a.speak(); // Output: Dog barks
\`\`\`

**Key Differences:**
| Overloading | Overriding |
|-------------|------------|
| Same class | Different classes |
| Different parameters | Same parameters |
| Compile-time | Runtime |`
        },
        {
          id: 8,
          question: "What are access modifiers in Java?",
          answer: `Java has four access modifiers:

| Modifier | Class | Package | Subclass | World |
|----------|-------|---------|----------|-------|
| public | Yes | Yes | Yes | Yes |
| protected | Yes | Yes | Yes | No |
| default (no modifier) | Yes | Yes | No | No |
| private | Yes | No | No | No |

\`\`\`java
public class Example {
    public int publicVar;       // Accessible everywhere
    protected int protectedVar; // Package + subclasses
    int defaultVar;             // Package only
    private int privateVar;     // Class only

    public void publicMethod() {}
    protected void protectedMethod() {}
    void defaultMethod() {}
    private void privateMethod() {}
}
\`\`\`

**Best Practices:**
- Use \`private\` for internal state
- Use \`public\` for API methods
- Use \`protected\` sparingly for inheritance
- Prefer package-private (default) for internal implementation`
        },
        {
          id: 9,
          question: "What is the final keyword in Java?",
          answer: `The \`final\` keyword can be applied to:

**1. Final Variable**
- Value cannot be changed after initialization
- Must be initialized at declaration or in constructor

\`\`\`java
final int MAX_SIZE = 100;
MAX_SIZE = 200; // Compilation error!

final List<String> list = new ArrayList<>();
list.add("item"); // OK - object is mutable
list = new ArrayList<>(); // Error - reference is final
\`\`\`

**2. Final Method**
- Cannot be overridden by subclasses

\`\`\`java
class Parent {
    final void display() {
        System.out.println("Cannot override this");
    }
}
\`\`\`

**3. Final Class**
- Cannot be extended/inherited

\`\`\`java
final class ImmutableClass {
    // No subclass can extend this
}
\`\`\`

**Common final classes:** String, Integer, Boolean, etc.`
        },
        {
          id: 10,
          question: "What is the static keyword in Java?",
          answer: `The \`static\` keyword is used for class-level members:

**1. Static Variable**
- Shared among all instances of the class
- Initialized when class is loaded

\`\`\`java
class Counter {
    static int count = 0;

    Counter() {
        count++;
    }
}

new Counter();
new Counter();
System.out.println(Counter.count); // 2
\`\`\`

**2. Static Method**
- Can be called without creating an instance
- Cannot access instance variables directly

\`\`\`java
class MathUtils {
    static int add(int a, int b) {
        return a + b;
    }
}

int sum = MathUtils.add(5, 3);
\`\`\`

**3. Static Block**
- Executed once when class is loaded

\`\`\`java
class Config {
    static Map<String, String> settings;

    static {
        settings = new HashMap<>();
        settings.put("env", "production");
    }
}
\`\`\`

**4. Static Nested Class**
- Does not require instance of outer class`
        },
        {
          id: 11,
          question: "What is Exception Handling in Java?",
          answer: `Exception handling manages runtime errors to maintain normal program flow.

**Exception Hierarchy:**
\`\`\`
Throwable
├── Error (Unrecoverable: OutOfMemoryError)
└── Exception
    ├── Checked Exceptions (IOException, SQLException)
    └── Unchecked/Runtime (NullPointerException, ArrayIndexOutOfBoundsException)
\`\`\`

**Keywords:**
\`\`\`java
try {
    // Code that may throw exception
    int result = 10 / 0;
} catch (ArithmeticException e) {
    // Handle specific exception
    System.out.println("Cannot divide by zero");
} catch (Exception e) {
    // Handle general exception
    System.out.println("Error: " + e.getMessage());
} finally {
    // Always executed (cleanup code)
    System.out.println("Cleanup done");
}
\`\`\`

**throw vs throws:**
\`\`\`java
// throw - explicitly throw an exception
public void validate(int age) {
    if (age < 0) {
        throw new IllegalArgumentException("Age cannot be negative");
    }
}

// throws - declare exception in method signature
public void readFile() throws IOException {
    // Method may throw IOException
}
\`\`\``
        },
        {
          id: 12,
          question: "What is the difference between Checked and Unchecked Exceptions?",
          answer: `**Checked Exceptions:**
- Checked at compile-time
- Must be handled using try-catch or declared with throws
- Extend \`Exception\` class (not \`RuntimeException\`)
- Examples: IOException, SQLException, ClassNotFoundException

\`\`\`java
// Must handle or declare
public void readFile() throws IOException {
    FileReader file = new FileReader("file.txt");
}
\`\`\`

**Unchecked Exceptions:**
- Checked at runtime
- Not required to handle or declare
- Extend \`RuntimeException\` class
- Examples: NullPointerException, ArrayIndexOutOfBoundsException

\`\`\`java
// No need to declare
public void process(String str) {
    System.out.println(str.length()); // May throw NullPointerException
}
\`\`\`

| Checked | Unchecked |
|---------|-----------|
| Compile-time | Runtime |
| Must handle | Optional |
| Recoverable scenarios | Programming errors |
| IOException, SQLException | NullPointerException, IndexOutOfBoundsException |`
        },
        {
          id: 13,
          question: "What is the Java Collections Framework?",
          answer: `The Collections Framework provides data structures and algorithms for storing and manipulating groups of objects.

**Hierarchy:**
\`\`\`
Collection
├── List (ordered, duplicates allowed)
│   ├── ArrayList
│   ├── LinkedList
│   └── Vector
├── Set (no duplicates)
│   ├── HashSet
│   ├── LinkedHashSet
│   └── TreeSet
└── Queue
    ├── PriorityQueue
    └── Deque
        └── ArrayDeque

Map (key-value pairs)
├── HashMap
├── LinkedHashMap
├── TreeMap
└── Hashtable
\`\`\`

**Common Operations:**
\`\`\`java
// List
List<String> list = new ArrayList<>();
list.add("A");
list.get(0);

// Set
Set<Integer> set = new HashSet<>();
set.add(1);
set.contains(1);

// Map
Map<String, Integer> map = new HashMap<>();
map.put("key", 1);
map.get("key");
\`\`\``
        },
        {
          id: 14,
          question: "What is the difference between ArrayList and LinkedList?",
          answer: `| Feature | ArrayList | LinkedList |
|---------|-----------|------------|
| Internal Structure | Dynamic Array | Doubly Linked List |
| Access Time | O(1) - Random access | O(n) - Sequential access |
| Insert/Delete | O(n) - Shifting required | O(1) - Just change pointers |
| Memory | Less overhead | More (stores pointers) |
| Use Case | Frequent reads | Frequent insertions/deletions |

\`\`\`java
// ArrayList - better for random access
ArrayList<String> arrayList = new ArrayList<>();
arrayList.add("A");
arrayList.get(0); // O(1)

// LinkedList - better for insertions/deletions
LinkedList<String> linkedList = new LinkedList<>();
linkedList.addFirst("A"); // O(1)
linkedList.addLast("B");  // O(1)
linkedList.get(0);        // O(n)
\`\`\`

**Choose ArrayList when:**
- Frequent access by index
- Mostly read operations

**Choose LinkedList when:**
- Frequent add/remove at beginning/end
- Implementing Queue or Deque`
        },
        {
          id: 15,
          question: "What is the difference between HashSet and TreeSet?",
          answer: `| Feature | HashSet | TreeSet |
|---------|---------|---------|
| Ordering | No order | Sorted (natural or Comparator) |
| Null Values | Allows one null | No nulls allowed |
| Performance | O(1) for add, remove, contains | O(log n) |
| Implementation | Hash table | Red-Black tree |
| Interface | Set | NavigableSet |

\`\`\`java
// HashSet - no ordering
Set<String> hashSet = new HashSet<>();
hashSet.add("Banana");
hashSet.add("Apple");
hashSet.add("Cherry");
// Output order: unpredictable

// TreeSet - sorted
Set<String> treeSet = new TreeSet<>();
treeSet.add("Banana");
treeSet.add("Apple");
treeSet.add("Cherry");
// Output: Apple, Banana, Cherry

// TreeSet with custom comparator
Set<String> descSet = new TreeSet<>(Comparator.reverseOrder());
\`\`\`

**Choose HashSet when:** Order doesn't matter, need fastest performance
**Choose TreeSet when:** Need sorted order, range operations`
        },
        {
          id: 16,
          question: "What is Generics in Java?",
          answer: `Generics enable type-safe collections and methods by parameterizing types.

**Benefits:**
- Compile-time type checking
- No need for explicit casting
- Code reusability

\`\`\`java
// Without generics (unsafe)
List list = new ArrayList();
list.add("Hello");
String s = (String) list.get(0); // Requires casting

// With generics (type-safe)
List<String> list = new ArrayList<>();
list.add("Hello");
String s = list.get(0); // No casting needed
\`\`\`

**Generic Class:**
\`\`\`java
public class Box<T> {
    private T content;

    public void set(T content) { this.content = content; }
    public T get() { return content; }
}

Box<String> stringBox = new Box<>();
Box<Integer> intBox = new Box<>();
\`\`\`

**Bounded Type Parameters:**
\`\`\`java
// Upper bound - accepts Number and its subclasses
public <T extends Number> double sum(List<T> numbers) {
    return numbers.stream().mapToDouble(Number::doubleValue).sum();
}

// Wildcards
List<?> anyList;           // Unknown type
List<? extends Number> nums; // Number or subclass
List<? super Integer> ints;  // Integer or superclass
\`\`\``
        },
        {
          id: 17,
          question: "What are Lambda Expressions in Java?",
          answer: `Lambda expressions (Java 8+) provide a concise way to represent functional interfaces.

**Syntax:**
\`\`\`java
(parameters) -> expression
(parameters) -> { statements; }
\`\`\`

**Examples:**
\`\`\`java
// Without lambda
Runnable r1 = new Runnable() {
    @Override
    public void run() {
        System.out.println("Hello");
    }
};

// With lambda
Runnable r2 = () -> System.out.println("Hello");

// Multiple parameters
Comparator<String> comp = (s1, s2) -> s1.compareTo(s2);

// With method reference
Comparator<String> comp2 = String::compareTo;
\`\`\`

**Functional Interfaces:**
\`\`\`java
@FunctionalInterface
interface Calculator {
    int calculate(int a, int b);
}

Calculator add = (a, b) -> a + b;
Calculator multiply = (a, b) -> a * b;

System.out.println(add.calculate(5, 3));      // 8
System.out.println(multiply.calculate(5, 3)); // 15
\`\`\`

**Common Functional Interfaces:**
- \`Predicate<T>\` - boolean test(T)
- \`Function<T, R>\` - R apply(T)
- \`Consumer<T>\` - void accept(T)
- \`Supplier<T>\` - T get()`
        },
        {
          id: 18,
          question: "What is the Stream API in Java?",
          answer: `Streams (Java 8+) provide a functional approach to process collections.

**Creating Streams:**
\`\`\`java
List<String> list = Arrays.asList("a", "b", "c");
Stream<String> stream = list.stream();
Stream<String> parallelStream = list.parallelStream();
Stream<Integer> rangeStream = IntStream.range(1, 10).boxed();
\`\`\`

**Common Operations:**
\`\`\`java
List<String> names = Arrays.asList("John", "Jane", "Bob", "Alice");

// Filter and collect
List<String> filtered = names.stream()
    .filter(n -> n.startsWith("J"))
    .collect(Collectors.toList());

// Map transformation
List<Integer> lengths = names.stream()
    .map(String::length)
    .collect(Collectors.toList());

// Reduce
int totalLength = names.stream()
    .mapToInt(String::length)
    .sum();

// Sorting
List<String> sorted = names.stream()
    .sorted()
    .collect(Collectors.toList());

// Grouping
Map<Integer, List<String>> byLength = names.stream()
    .collect(Collectors.groupingBy(String::length));
\`\`\`

**Intermediate vs Terminal Operations:**
- **Intermediate:** filter, map, sorted (return Stream, lazy)
- **Terminal:** collect, forEach, reduce (trigger processing)`
        },
        {
          id: 19,
          question: "What is the Optional class in Java?",
          answer: `Optional (Java 8+) is a container that may or may not contain a non-null value. It helps avoid NullPointerException.

\`\`\`java
// Creating Optional
Optional<String> empty = Optional.empty();
Optional<String> present = Optional.of("Hello");
Optional<String> nullable = Optional.ofNullable(getValue()); // Can be null

// Checking value presence
if (present.isPresent()) {
    System.out.println(present.get());
}

// Better: functional approach
present.ifPresent(System.out::println);

// Default values
String result = nullable.orElse("default");
String result2 = nullable.orElseGet(() -> expensiveDefault());
String result3 = nullable.orElseThrow(() -> new RuntimeException("Not found"));

// Transformation
Optional<Integer> length = present.map(String::length);

// Chaining
Optional<String> result = getUser()
    .flatMap(User::getAddress)
    .map(Address::getCity);
\`\`\`

**Best Practices:**
- Use Optional as return type, not parameter
- Don't use \`get()\` without \`isPresent()\`
- Prefer \`orElse\` or \`ifPresent\` over \`isPresent\` + \`get\`
- Don't use Optional for collections (return empty collection instead)`
        },
        {
          id: 20,
          question: "What is multithreading in Java?",
          answer: `Multithreading allows concurrent execution of two or more threads for maximum CPU utilization.

**Creating Threads:**
\`\`\`java
// Method 1: Extend Thread class
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread running");
    }
}

// Method 2: Implement Runnable (Preferred)
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Runnable running");
    }
}

// Starting threads
MyThread t1 = new MyThread();
t1.start();

Thread t2 = new Thread(new MyRunnable());
t2.start();

// Lambda (Java 8+)
Thread t3 = new Thread(() -> System.out.println("Lambda thread"));
t3.start();
\`\`\`

**Thread States:**
\`\`\`
NEW → RUNNABLE → RUNNING → (BLOCKED/WAITING) → TERMINATED
\`\`\`

**Important Methods:**
- \`start()\` - Start thread execution
- \`run()\` - Contains thread logic
- \`sleep(ms)\` - Pause thread
- \`join()\` - Wait for thread to complete
- \`interrupt()\` - Interrupt a thread`
        },
        {
          id: 21,
          question: "What is synchronization in Java?",
          answer: `Synchronization prevents multiple threads from accessing shared resources simultaneously.

**Synchronized Method:**
\`\`\`java
class Counter {
    private int count = 0;

    public synchronized void increment() {
        count++;
    }

    public synchronized int getCount() {
        return count;
    }
}
\`\`\`

**Synchronized Block:**
\`\`\`java
class Counter {
    private int count = 0;
    private final Object lock = new Object();

    public void increment() {
        synchronized(lock) {
            count++;
        }
    }
}
\`\`\`

**Problems Without Synchronization:**
- **Race Condition:** Multiple threads modify data simultaneously
- **Data Inconsistency:** Reading partially updated data
- **Lost Updates:** Updates overwritten by other threads

**Alternatives to synchronized:**
\`\`\`java
// ReentrantLock
Lock lock = new ReentrantLock();
lock.lock();
try {
    // critical section
} finally {
    lock.unlock();
}

// Atomic classes
AtomicInteger atomicCount = new AtomicInteger(0);
atomicCount.incrementAndGet();
\`\`\``
        },
        {
          id: 22,
          question: "What is the volatile keyword?",
          answer: `The \`volatile\` keyword ensures that a variable's value is always read from main memory, not from thread's local cache.

**Without volatile:**
\`\`\`java
class Flag {
    private boolean running = true;

    public void stop() {
        running = false; // May not be visible to other threads
    }

    public void run() {
        while (running) {
            // May run forever due to caching
        }
    }
}
\`\`\`

**With volatile:**
\`\`\`java
class Flag {
    private volatile boolean running = true;

    public void stop() {
        running = false; // Immediately visible to all threads
    }

    public void run() {
        while (running) {
            // Will see the update
        }
    }
}
\`\`\`

**volatile vs synchronized:**
| volatile | synchronized |
|----------|--------------|
| Variable visibility | Mutual exclusion + visibility |
| No blocking | Blocking |
| For simple flags | For complex operations |
| Cannot ensure atomicity | Ensures atomicity |

**Use volatile when:**
- Single writer, multiple readers
- Simple flag variables
- No compound operations (like i++)`
        },
        {
          id: 23,
          question: "What is the difference between wait() and sleep()?",
          answer: `| wait() | sleep() |
|--------|---------|
| Object class method | Thread class method |
| Releases lock | Does not release lock |
| Must be in synchronized block | Can be called anywhere |
| Woken by notify()/notifyAll() | Wakes after specified time |
| Used for inter-thread communication | Used for pausing execution |

\`\`\`java
// sleep() - pauses current thread
public void pauseExecution() {
    try {
        Thread.sleep(1000); // Sleep for 1 second
    } catch (InterruptedException e) {
        Thread.currentThread().interrupt();
    }
}

// wait() - releases lock and waits
class SharedResource {
    private boolean ready = false;

    public synchronized void waitForReady() throws InterruptedException {
        while (!ready) {
            wait(); // Releases lock, waits for notify
        }
        // Process when ready
    }

    public synchronized void setReady() {
        ready = true;
        notifyAll(); // Wake up all waiting threads
    }
}
\`\`\`

**Key Points:**
- Always call wait() in a loop checking condition
- Use notifyAll() instead of notify() to avoid missed signals
- Both throw InterruptedException`
        },
        {
          id: 24,
          question: "What is the ExecutorService in Java?",
          answer: `ExecutorService is a framework for managing thread pools and asynchronous task execution.

\`\`\`java
// Creating ExecutorService
ExecutorService executor = Executors.newFixedThreadPool(4);
ExecutorService singleThread = Executors.newSingleThreadExecutor();
ExecutorService cached = Executors.newCachedThreadPool();
ScheduledExecutorService scheduled = Executors.newScheduledThreadPool(2);

// Submitting tasks
executor.execute(() -> System.out.println("Runnable task"));

Future<String> future = executor.submit(() -> {
    Thread.sleep(1000);
    return "Callable result";
});

// Getting result
String result = future.get(); // Blocks until complete
String result2 = future.get(5, TimeUnit.SECONDS); // With timeout

// Shutting down
executor.shutdown(); // Graceful shutdown
executor.shutdownNow(); // Immediate shutdown
executor.awaitTermination(60, TimeUnit.SECONDS);
\`\`\`

**Thread Pool Types:**
- **FixedThreadPool:** Fixed number of threads
- **CachedThreadPool:** Creates threads as needed, reuses idle ones
- **SingleThreadExecutor:** Single worker thread
- **ScheduledThreadPool:** For delayed/periodic tasks

**Best Practice - Custom ThreadPoolExecutor:**
\`\`\`java
ThreadPoolExecutor executor = new ThreadPoolExecutor(
    5,                      // core pool size
    10,                     // max pool size
    60L, TimeUnit.SECONDS,  // keep-alive time
    new LinkedBlockingQueue<>(100), // work queue
    new ThreadPoolExecutor.CallerRunsPolicy() // rejection policy
);
\`\`\``
        },
        {
          id: 25,
          question: "What are Java annotations?",
          answer: `Annotations provide metadata about code that can be processed at compile-time or runtime.

**Built-in Annotations:**
\`\`\`java
@Override        // Method overrides superclass method
@Deprecated      // Element is deprecated
@SuppressWarnings("unchecked") // Suppress compiler warnings
@FunctionalInterface // Interface is functional
\`\`\`

**Custom Annotation:**
\`\`\`java
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface LogExecutionTime {
    String value() default "";
}

// Usage
public class Service {
    @LogExecutionTime("Processing request")
    public void process() {
        // ...
    }
}
\`\`\`

**Retention Policies:**
- \`SOURCE\` - Discarded after compilation
- \`CLASS\` - Recorded in class file, not available at runtime
- \`RUNTIME\` - Available at runtime via reflection

**Target Types:**
- \`TYPE\` - Class, interface, enum
- \`FIELD\` - Field declaration
- \`METHOD\` - Method declaration
- \`PARAMETER\` - Method parameter
- \`CONSTRUCTOR\` - Constructor

**Processing Annotations:**
\`\`\`java
Method method = obj.getClass().getMethod("process");
if (method.isAnnotationPresent(LogExecutionTime.class)) {
    LogExecutionTime annotation = method.getAnnotation(LogExecutionTime.class);
    System.out.println(annotation.value());
}
\`\`\``
        },
        {
          id: 26,
          question: "What is the difference between Comparable and Comparator?",
          answer: `Both are used for sorting objects but differ in usage:

**Comparable:**
- Defines natural ordering
- Implemented by the class itself
- Single sorting sequence
- \`compareTo()\` method

\`\`\`java
class Employee implements Comparable<Employee> {
    private String name;
    private int salary;

    @Override
    public int compareTo(Employee other) {
        return this.salary - other.salary; // Natural ordering by salary
    }
}

List<Employee> employees = ...;
Collections.sort(employees); // Uses compareTo
\`\`\`

**Comparator:**
- Defines custom ordering
- External to the class
- Multiple sorting sequences
- \`compare()\` method

\`\`\`java
// Sort by name
Comparator<Employee> byName = (e1, e2) -> e1.getName().compareTo(e2.getName());

// Sort by salary descending
Comparator<Employee> bySalaryDesc = (e1, e2) -> e2.getSalary() - e1.getSalary();

// Using Comparator
Collections.sort(employees, byName);
employees.sort(Comparator.comparing(Employee::getName)
                         .thenComparing(Employee::getSalary));
\`\`\`

| Comparable | Comparator |
|------------|------------|
| java.lang | java.util |
| compareTo(o) | compare(o1, o2) |
| Natural ordering | Custom ordering |
| Modifies original class | External class |`
        },
        {
          id: 27,
          question: "What is reflection in Java?",
          answer: `Reflection allows inspection and modification of classes, methods, and fields at runtime.

\`\`\`java
// Getting Class object
Class<?> clazz = MyClass.class;
Class<?> clazz2 = obj.getClass();
Class<?> clazz3 = Class.forName("com.example.MyClass");

// Creating instance
Object obj = clazz.getDeclaredConstructor().newInstance();

// Accessing fields
Field field = clazz.getDeclaredField("privateField");
field.setAccessible(true); // Access private fields
Object value = field.get(obj);
field.set(obj, newValue);

// Invoking methods
Method method = clazz.getDeclaredMethod("privateMethod", String.class);
method.setAccessible(true);
Object result = method.invoke(obj, "argument");

// Getting all methods
Method[] methods = clazz.getDeclaredMethods();
for (Method m : methods) {
    System.out.println(m.getName());
}
\`\`\`

**Use Cases:**
- Frameworks (Spring, Hibernate)
- Testing frameworks (JUnit)
- Serialization/Deserialization
- Dependency Injection

**Drawbacks:**
- Performance overhead
- Security restrictions
- Breaks encapsulation
- Compile-time safety lost`
        },
        {
          id: 28,
          question: "What is serialization in Java?",
          answer: `Serialization converts an object into a byte stream for storage or transmission.

\`\`\`java
// Implementing Serializable
public class User implements Serializable {
    private static final long serialVersionUID = 1L;

    private String name;
    private transient String password; // Not serialized
    private int age;
}

// Serializing
try (ObjectOutputStream oos = new ObjectOutputStream(
        new FileOutputStream("user.ser"))) {
    oos.writeObject(user);
}

// Deserializing
try (ObjectInputStream ois = new ObjectInputStream(
        new FileInputStream("user.ser"))) {
    User user = (User) ois.readObject();
}
\`\`\`

**Key Points:**
- \`serialVersionUID\` ensures version compatibility
- \`transient\` fields are not serialized
- Static fields are not serialized
- All referenced objects must also be Serializable

**Custom Serialization:**
\`\`\`java
private void writeObject(ObjectOutputStream oos) throws IOException {
    oos.defaultWriteObject();
    oos.writeObject(encrypt(password));
}

private void readObject(ObjectInputStream ois) throws IOException, ClassNotFoundException {
    ois.defaultReadObject();
    password = decrypt((String) ois.readObject());
}
\`\`\`

**Alternatives:**
- JSON (Jackson, Gson)
- XML (JAXB)
- Protocol Buffers
- Avro`
        },
        {
          id: 29,
          question: "What are wrapper classes in Java?",
          answer: `Wrapper classes convert primitive types into objects.

| Primitive | Wrapper |
|-----------|---------|
| byte | Byte |
| short | Short |
| int | Integer |
| long | Long |
| float | Float |
| double | Double |
| char | Character |
| boolean | Boolean |

**Autoboxing and Unboxing:**
\`\`\`java
// Autoboxing: primitive to wrapper
Integer num = 10; // int to Integer

// Unboxing: wrapper to primitive
int n = num; // Integer to int

// In collections
List<Integer> numbers = new ArrayList<>();
numbers.add(5); // Autoboxing
int first = numbers.get(0); // Unboxing
\`\`\`

**Useful Methods:**
\`\`\`java
// Parsing
int i = Integer.parseInt("123");
double d = Double.parseDouble("3.14");

// Converting
String s = Integer.toString(123);
String binary = Integer.toBinaryString(10); // "1010"

// Comparing
Integer.compare(5, 10); // -1
Integer.max(5, 10); // 10

// Constants
Integer.MAX_VALUE; // 2147483647
Integer.MIN_VALUE; // -2147483648
\`\`\`

**Caching (-128 to 127):**
\`\`\`java
Integer a = 127;
Integer b = 127;
System.out.println(a == b); // true (cached)

Integer c = 128;
Integer d = 128;
System.out.println(c == d); // false (new objects)
\`\`\``
        },
        {
          id: 30,
          question: "What is the try-with-resources statement?",
          answer: `Try-with-resources (Java 7+) automatically closes resources that implement \`AutoCloseable\`.

\`\`\`java
// Traditional way (verbose, error-prone)
BufferedReader reader = null;
try {
    reader = new BufferedReader(new FileReader("file.txt"));
    String line = reader.readLine();
} catch (IOException e) {
    e.printStackTrace();
} finally {
    if (reader != null) {
        try {
            reader.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

// Try-with-resources (clean, safe)
try (BufferedReader reader = new BufferedReader(new FileReader("file.txt"))) {
    String line = reader.readLine();
} catch (IOException e) {
    e.printStackTrace();
}
// reader is automatically closed
\`\`\`

**Multiple Resources:**
\`\`\`java
try (FileInputStream fis = new FileInputStream("input.txt");
     FileOutputStream fos = new FileOutputStream("output.txt")) {
    // Use both streams
} // Both closed in reverse order
\`\`\`

**Custom AutoCloseable:**
\`\`\`java
public class MyResource implements AutoCloseable {
    public void doWork() { /* ... */ }

    @Override
    public void close() {
        System.out.println("Resource closed");
    }
}

try (MyResource resource = new MyResource()) {
    resource.doWork();
}
\`\`\``
        }
      ]
    },
    {
      title: "Java Interview Questions for Experienced Levels",
      questions: [
        {
          id: 1,
          question: "How do you design an immutable class in Java?",
          answer: `An immutable class cannot be modified after creation. Here's how to design one:

**Rules for Immutable Class:**
1. Declare the class as \`final\`
2. Make all fields \`private\` and \`final\`
3. No setter methods
4. Initialize all fields via constructor
5. Return copies of mutable objects

\`\`\`java
public final class ImmutablePerson {
    private final String name;
    private final int age;
    private final List<String> hobbies;
    private final Address address;

    public ImmutablePerson(String name, int age, List<String> hobbies, Address address) {
        this.name = name;
        this.age = age;
        // Defensive copy for mutable collections
        this.hobbies = new ArrayList<>(hobbies);
        // Deep copy for mutable objects
        this.address = new Address(address.getStreet(), address.getCity());
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    // Return copy to prevent modification
    public List<String> getHobbies() {
        return new ArrayList<>(hobbies);
        // Or: return Collections.unmodifiableList(hobbies);
    }

    // Return copy of mutable object
    public Address getAddress() {
        return new Address(address.getStreet(), address.getCity());
    }
}
\`\`\`

**Benefits of Immutability:**
- Thread-safe without synchronization
- Can be cached and reused safely
- Good HashMap keys (hashCode doesn't change)
- Prevents side effects

**Java Immutable Classes:**
String, Integer, BigDecimal, LocalDate, etc.`
        },
        {
          id: 2,
          question: "What is the difference between HashMap and ConcurrentHashMap?",
          answer: `**HashMap:**
- Not thread-safe
- Allows one null key and multiple null values
- Better performance in single-threaded environments
- Fails fast with ConcurrentModificationException

**ConcurrentHashMap:**
- Thread-safe without synchronizing the whole map
- Does not allow null keys or values
- Uses segment-based locking (Java 7) or CAS operations (Java 8+)
- Better performance in multi-threaded environments

\`\`\`java
// HashMap - not thread safe
Map<String, Integer> hashMap = new HashMap<>();

// ConcurrentHashMap - thread safe
Map<String, Integer> concurrentMap = new ConcurrentHashMap<>();

// Thread-safe operations
concurrentMap.putIfAbsent("key", 1);
concurrentMap.computeIfAbsent("key", k -> expensiveOperation(k));
concurrentMap.merge("key", 1, Integer::sum);

// Atomic compound operations
concurrentMap.compute("counter", (k, v) -> v == null ? 1 : v + 1);
\`\`\`

**Internal Structure (Java 8+):**
\`\`\`
ConcurrentHashMap
├── Node[] table (array of buckets)
├── Each bucket: linked list → tree (if > 8 nodes)
└── Lock only affected bucket during write
\`\`\`

**Key Differences:**
| Feature | HashMap | ConcurrentHashMap |
|---------|---------|-------------------|
| Thread Safety | No | Yes |
| Null Keys/Values | Allowed | Not Allowed |
| Performance (single) | Faster | Slightly slower |
| Performance (multi) | Unsafe | Better |
| Iterator | Fail-fast | Weakly consistent |`
        },
        {
          id: 3,
          question: "Explain the Java Memory Model and happens-before relationship.",
          answer: `The Java Memory Model (JMM) defines how threads interact through memory and what behaviors are allowed.

**Key Concepts:**

**1. Visibility**
Changes made by one thread may not be visible to others without proper synchronization.

**2. Reordering**
Compiler and CPU may reorder instructions for optimization.

**3. Happens-Before Relationship**
Guarantees that memory writes by one action are visible to another.

\`\`\`java
// Happens-before rules:

// 1. Program Order Rule
int a = 1;  // happens-before
int b = 2;  // this line

// 2. Monitor Lock Rule
synchronized(lock) {
    // all actions here
}
// happen-before actions after unlock

// 3. Volatile Variable Rule
volatile boolean flag = false;
// write to volatile happens-before read

// 4. Thread Start Rule
thread.start();
// happens-before any action in started thread

// 5. Thread Join Rule
thread.join();
// all actions in thread happen-before join returns
\`\`\`

**Double-Checked Locking (DCL):**
\`\`\`java
public class Singleton {
    private static volatile Singleton instance;

    public static Singleton getInstance() {
        if (instance == null) {                    // First check
            synchronized (Singleton.class) {
                if (instance == null) {            // Second check
                    instance = new Singleton();    // Safe with volatile
                }
            }
        }
        return instance;
    }
}
\`\`\`

**Without volatile, DCL is broken:**
- Object publication can be reordered
- Other threads may see partially constructed object`
        },
        {
          id: 4,
          question: "What is the difference between fail-fast and fail-safe iterators?",
          answer: `**Fail-Fast Iterators:**
- Throw \`ConcurrentModificationException\` if collection is modified during iteration
- Work on original collection
- Used by: ArrayList, HashMap, HashSet

\`\`\`java
List<String> list = new ArrayList<>(Arrays.asList("A", "B", "C"));
Iterator<String> iterator = list.iterator();

while (iterator.hasNext()) {
    String element = iterator.next();
    if (element.equals("B")) {
        list.remove(element); // Throws ConcurrentModificationException
    }
}

// Safe removal using iterator
while (iterator.hasNext()) {
    String element = iterator.next();
    if (element.equals("B")) {
        iterator.remove(); // Safe
    }
}
\`\`\`

**Fail-Safe Iterators:**
- Work on a clone/snapshot of the collection
- Don't throw exception on modification
- Used by: CopyOnWriteArrayList, ConcurrentHashMap

\`\`\`java
CopyOnWriteArrayList<String> list = new CopyOnWriteArrayList<>();
list.add("A");
list.add("B");

for (String s : list) {
    list.add("C"); // No exception, but "C" won't be in this iteration
}

ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    map.put("newKey", 1); // No exception
}
\`\`\`

| Fail-Fast | Fail-Safe |
|-----------|-----------|
| Throws exception | No exception |
| Original collection | Clone/snapshot |
| Less memory | More memory |
| Real-time data | May be stale |`
        },
        {
          id: 5,
          question: "What is a deadlock and how do you prevent it?",
          answer: `**Deadlock** occurs when two or more threads are blocked forever, each waiting for the other to release a lock.

**Deadlock Example:**
\`\`\`java
Object lockA = new Object();
Object lockB = new Object();

// Thread 1
new Thread(() -> {
    synchronized (lockA) {
        System.out.println("Thread 1: Holding lockA");
        try { Thread.sleep(100); } catch (InterruptedException e) {}
        synchronized (lockB) {
            System.out.println("Thread 1: Holding lockA & lockB");
        }
    }
}).start();

// Thread 2
new Thread(() -> {
    synchronized (lockB) {
        System.out.println("Thread 2: Holding lockB");
        try { Thread.sleep(100); } catch (InterruptedException e) {}
        synchronized (lockA) {
            System.out.println("Thread 2: Holding lockB & lockA");
        }
    }
}).start();
// DEADLOCK! Thread 1 waits for lockB, Thread 2 waits for lockA
\`\`\`

**Four Conditions for Deadlock:**
1. Mutual Exclusion
2. Hold and Wait
3. No Preemption
4. Circular Wait

**Prevention Strategies:**

**1. Lock Ordering (Break Circular Wait):**
\`\`\`java
// Always acquire locks in same order
synchronized (lockA) {
    synchronized (lockB) {
        // Safe - consistent ordering
    }
}
\`\`\`

**2. Try-Lock with Timeout:**
\`\`\`java
ReentrantLock lock1 = new ReentrantLock();
ReentrantLock lock2 = new ReentrantLock();

if (lock1.tryLock(1, TimeUnit.SECONDS)) {
    try {
        if (lock2.tryLock(1, TimeUnit.SECONDS)) {
            try {
                // Work with both locks
            } finally {
                lock2.unlock();
            }
        }
    } finally {
        lock1.unlock();
    }
}
\`\`\`

**3. Use Higher-Level Concurrency Utilities:**
\`\`\`java
// Use ConcurrentHashMap instead of synchronized HashMap
// Use Atomic classes instead of synchronized counters
\`\`\``
        },
        {
          id: 6,
          question: "What is the CompletableFuture and how does it work?",
          answer: `\`CompletableFuture\` (Java 8+) provides a powerful way to write asynchronous, non-blocking code.

**Creating CompletableFuture:**
\`\`\`java
// Run async task
CompletableFuture<Void> future1 = CompletableFuture.runAsync(() -> {
    System.out.println("Running in: " + Thread.currentThread().getName());
});

// Supply async result
CompletableFuture<String> future2 = CompletableFuture.supplyAsync(() -> {
    return "Hello";
});

// With custom executor
ExecutorService executor = Executors.newFixedThreadPool(4);
CompletableFuture<String> future3 = CompletableFuture.supplyAsync(() -> "Result", executor);
\`\`\`

**Chaining Operations:**
\`\`\`java
CompletableFuture.supplyAsync(() -> "Hello")
    .thenApply(s -> s + " World")        // Transform result
    .thenApply(String::toUpperCase)      // Chain transformations
    .thenAccept(System.out::println)     // Consume result
    .thenRun(() -> System.out.println("Done")); // Run after completion

// Async versions (run on different thread)
.thenApplyAsync(s -> s + " World")
.thenAcceptAsync(System.out::println)
\`\`\`

**Combining Futures:**
\`\`\`java
CompletableFuture<String> future1 = CompletableFuture.supplyAsync(() -> "Hello");
CompletableFuture<String> future2 = CompletableFuture.supplyAsync(() -> "World");

// Combine two futures
future1.thenCombine(future2, (s1, s2) -> s1 + " " + s2)
       .thenAccept(System.out::println); // "Hello World"

// Wait for all
CompletableFuture.allOf(future1, future2).join();

// Wait for any
CompletableFuture.anyOf(future1, future2).thenAccept(System.out::println);
\`\`\`

**Error Handling:**
\`\`\`java
CompletableFuture.supplyAsync(() -> {
    if (true) throw new RuntimeException("Error!");
    return "Success";
})
.exceptionally(ex -> "Recovered: " + ex.getMessage())
.handle((result, ex) -> {
    if (ex != null) return "Error: " + ex.getMessage();
    return result;
});
\`\`\``
        },
        {
          id: 7,
          question: "Explain Garbage Collection in Java and different GC algorithms.",
          answer: `**Garbage Collection (GC)** automatically frees memory by removing unreachable objects.

**Heap Generations:**
\`\`\`
┌─────────────────────────────────────────────┐
│                    Heap                      │
├─────────────────────────────────────────────┤
│  Young Generation          │  Old Generation │
│  ┌───────┬────────────────┐│                │
│  │ Eden  │ Survivor (S0,S1)││                │
│  └───────┴────────────────┘│                │
└─────────────────────────────────────────────┘
\`\`\`

**GC Types:**
- **Minor GC:** Cleans Young Generation (fast, frequent)
- **Major GC:** Cleans Old Generation (slower)
- **Full GC:** Cleans entire heap (slowest)

**GC Algorithms:**

**1. Serial GC** (-XX:+UseSerialGC)
- Single-threaded
- Stop-the-world
- Best for small applications

**2. Parallel GC** (-XX:+UseParallelGC)
- Multi-threaded
- Stop-the-world
- Good for throughput

**3. G1 GC** (-XX:+UseG1GC) - Default in Java 9+
- Divides heap into regions
- Concurrent marking
- Predictable pause times
- Best for large heaps

**4. ZGC** (-XX:+UseZGC) - Java 11+
- Sub-millisecond pauses
- Scalable to TB heaps
- Concurrent

**5. Shenandoah** (-XX:+UseShenandoahGC)
- Low pause times
- Concurrent compaction

**GC Tuning:**
\`\`\`bash
java -Xms512m -Xmx2g          # Initial and max heap
     -XX:+UseG1GC              # Use G1
     -XX:MaxGCPauseMillis=200  # Target pause time
     -XX:+PrintGCDetails       # GC logging
     -jar app.jar
\`\`\`

**Best Practices:**
- Minimize object creation
- Use object pooling for expensive objects
- Avoid finalizers
- Monitor GC with tools (VisualVM, GC logs)`
        },
        {
          id: 8,
          question: "What is the difference between ReentrantLock and synchronized?",
          answer: `Both provide mutual exclusion but \`ReentrantLock\` offers more features.

**Synchronized:**
\`\`\`java
synchronized (lock) {
    // Critical section
}

public synchronized void method() {
    // Method-level lock
}
\`\`\`

**ReentrantLock:**
\`\`\`java
ReentrantLock lock = new ReentrantLock();

lock.lock();
try {
    // Critical section
} finally {
    lock.unlock(); // Must unlock in finally
}
\`\`\`

**Feature Comparison:**
| Feature | synchronized | ReentrantLock |
|---------|--------------|---------------|
| Automatic unlock | Yes | No (must use finally) |
| Try-lock | No | Yes |
| Timeout | No | Yes |
| Interruptible | No | Yes |
| Fairness | No | Optional |
| Multiple conditions | No | Yes |

**Advanced ReentrantLock Features:**
\`\`\`java
ReentrantLock lock = new ReentrantLock(true); // Fair lock

// Try lock without blocking
if (lock.tryLock()) {
    try {
        // Got the lock
    } finally {
        lock.unlock();
    }
}

// Try lock with timeout
if (lock.tryLock(1, TimeUnit.SECONDS)) {
    // ...
}

// Interruptible lock
try {
    lock.lockInterruptibly();
} catch (InterruptedException e) {
    // Handle interruption
}

// Multiple conditions
Condition notFull = lock.newCondition();
Condition notEmpty = lock.newCondition();

notEmpty.await();  // Wait
notFull.signal();  // Wake up one
\`\`\`

**When to Use:**
- **synchronized:** Simple use cases, less error-prone
- **ReentrantLock:** Need timeout, try-lock, fairness, or multiple conditions`
        },
        {
          id: 9,
          question: "Explain the Fork/Join Framework.",
          answer: `Fork/Join (Java 7+) is designed for parallel divide-and-conquer algorithms.

**Key Concepts:**
- **Fork:** Split task into smaller subtasks
- **Join:** Wait for subtasks to complete and combine results
- **Work-Stealing:** Idle threads steal tasks from busy threads

\`\`\`java
public class SumTask extends RecursiveTask<Long> {
    private static final int THRESHOLD = 10000;
    private final long[] array;
    private final int start, end;

    public SumTask(long[] array, int start, int end) {
        this.array = array;
        this.start = start;
        this.end = end;
    }

    @Override
    protected Long compute() {
        int length = end - start;

        // Base case: compute directly
        if (length <= THRESHOLD) {
            long sum = 0;
            for (int i = start; i < end; i++) {
                sum += array[i];
            }
            return sum;
        }

        // Recursive case: split and fork
        int mid = start + length / 2;
        SumTask leftTask = new SumTask(array, start, mid);
        SumTask rightTask = new SumTask(array, mid, end);

        leftTask.fork();  // Execute left async
        Long rightResult = rightTask.compute();  // Compute right in current thread
        Long leftResult = leftTask.join();  // Wait for left

        return leftResult + rightResult;
    }
}

// Usage
ForkJoinPool pool = ForkJoinPool.commonPool();
long[] array = new long[100000000];
Long sum = pool.invoke(new SumTask(array, 0, array.length));
\`\`\`

**RecursiveTask vs RecursiveAction:**
- **RecursiveTask<V>:** Returns a result
- **RecursiveAction:** No return value (void)

**Best Practices:**
- Set appropriate threshold (not too small)
- Avoid I/O operations in tasks
- Use \`fork()\` for left, \`compute()\` for right
- Let ForkJoinPool manage thread count`
        },
        {
          id: 10,
          question: "What are the different types of class loaders in Java?",
          answer: `Class loaders load Java classes into the JVM dynamically.

**Class Loader Hierarchy:**
\`\`\`
Bootstrap ClassLoader (Native)
        ↓
Extension/Platform ClassLoader
        ↓
Application/System ClassLoader
        ↓
Custom ClassLoaders
\`\`\`

**1. Bootstrap ClassLoader:**
- Loads core Java classes (rt.jar)
- Written in native code
- Parent of all class loaders

**2. Extension/Platform ClassLoader:**
- Loads extension classes (jre/lib/ext)
- Java 9+: Platform ClassLoader

**3. Application ClassLoader:**
- Loads classes from classpath
- Default for application classes

**Delegation Model:**
\`\`\`java
// When loading a class:
1. Check if already loaded
2. Delegate to parent classloader
3. If parent can't load, try itself
4. If not found, throw ClassNotFoundException
\`\`\`

**Custom ClassLoader:**
\`\`\`java
public class CustomClassLoader extends ClassLoader {
    @Override
    protected Class<?> findClass(String name) throws ClassNotFoundException {
        byte[] classData = loadClassData(name);
        if (classData == null) {
            throw new ClassNotFoundException(name);
        }
        return defineClass(name, classData, 0, classData.length);
    }

    private byte[] loadClassData(String name) {
        // Load class bytes from custom source
        // (database, network, encrypted file, etc.)
        return Files.readAllBytes(Paths.get(name.replace('.', '/') + ".class"));
    }
}

// Usage
CustomClassLoader loader = new CustomClassLoader();
Class<?> clazz = loader.loadClass("com.example.MyClass");
Object instance = clazz.getDeclaredConstructor().newInstance();
\`\`\`

**Use Cases:**
- Hot deployment in app servers
- Loading classes from network
- Bytecode manipulation
- Plugin systems`
        },
        {
          id: 11,
          question: "What is the difference between shallow copy and deep copy?",
          answer: `**Shallow Copy:**
- Copies object reference (not the object itself)
- Original and copy share nested objects
- Changes to nested objects affect both

**Deep Copy:**
- Creates completely independent copy
- Copies all nested objects recursively
- Changes don't affect original

\`\`\`java
class Address {
    String city;
    Address(String city) { this.city = city; }
}

class Person implements Cloneable {
    String name;
    Address address;

    // Shallow copy (default clone)
    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone(); // address is shared!
    }

    // Deep copy
    protected Person deepClone() throws CloneNotSupportedException {
        Person cloned = (Person) super.clone();
        cloned.address = new Address(this.address.city); // Copy nested object
        return cloned;
    }
}

// Testing
Person p1 = new Person();
p1.name = "John";
p1.address = new Address("NYC");

Person p2 = (Person) p1.clone(); // Shallow
p2.address.city = "LA";
System.out.println(p1.address.city); // "LA" - affected!

Person p3 = p1.deepClone(); // Deep
p3.address.city = "Chicago";
System.out.println(p1.address.city); // "LA" - not affected
\`\`\`

**Deep Copy Methods:**
1. Manual copy (copy constructors)
2. Serialization/Deserialization
3. Libraries (Apache Commons, Gson)

\`\`\`java
// Using serialization
public static <T extends Serializable> T deepCopy(T object) {
    ByteArrayOutputStream baos = new ByteArrayOutputStream();
    ObjectOutputStream oos = new ObjectOutputStream(baos);
    oos.writeObject(object);

    ByteArrayInputStream bais = new ByteArrayInputStream(baos.toByteArray());
    ObjectInputStream ois = new ObjectInputStream(bais);
    return (T) ois.readObject();
}
\`\`\``
        },
        {
          id: 12,
          question: "What are the new features in Java 17 and Java 21 (LTS versions)?",
          answer: `**Java 17 (LTS) Features:**

**1. Sealed Classes:**
\`\`\`java
public sealed class Shape permits Circle, Rectangle, Square {
}

public final class Circle extends Shape { }
public non-sealed class Rectangle extends Shape { }
public sealed class Square extends Shape permits ColoredSquare { }
\`\`\`

**2. Pattern Matching for instanceof:**
\`\`\`java
// Old way
if (obj instanceof String) {
    String s = (String) obj;
    System.out.println(s.length());
}

// New way
if (obj instanceof String s) {
    System.out.println(s.length());
}
\`\`\`

**3. Records:**
\`\`\`java
public record Person(String name, int age) { }
// Auto-generates constructor, getters, equals, hashCode, toString
\`\`\`

**4. Text Blocks:**
\`\`\`java
String json = """
    {
        "name": "John",
        "age": 30
    }
    """;
\`\`\`

**Java 21 (LTS) Features:**

**1. Virtual Threads (Project Loom):**
\`\`\`java
// Lightweight threads
Thread.startVirtualThread(() -> {
    System.out.println("Running in virtual thread");
});

// With executor
try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
    executor.submit(() -> { /* task */ });
}
\`\`\`

**2. Pattern Matching for Switch:**
\`\`\`java
String result = switch (obj) {
    case Integer i -> "Integer: " + i;
    case String s -> "String: " + s;
    case null -> "Null value";
    default -> "Unknown";
};
\`\`\`

**3. Record Patterns:**
\`\`\`java
record Point(int x, int y) { }

if (obj instanceof Point(int x, int y)) {
    System.out.println("x=" + x + ", y=" + y);
}
\`\`\`

**4. Sequenced Collections:**
\`\`\`java
SequencedCollection<String> list = new ArrayList<>();
list.addFirst("first");
list.addLast("last");
list.getFirst();
list.reversed();
\`\`\``
        },
        {
          id: 13,
          question: "Explain the Proxy Pattern and how Java implements dynamic proxies.",
          answer: `**Proxy Pattern** provides a surrogate or placeholder for another object to control access to it.

**Use Cases:**
- Lazy initialization
- Access control
- Logging/Monitoring
- Remote method invocation

**Java Dynamic Proxy:**
\`\`\`java
// Interface
public interface UserService {
    User findById(Long id);
    void save(User user);
}

// Real implementation
public class UserServiceImpl implements UserService {
    public User findById(Long id) {
        return database.query(id);
    }
    public void save(User user) {
        database.save(user);
    }
}

// InvocationHandler
public class LoggingHandler implements InvocationHandler {
    private final Object target;

    public LoggingHandler(Object target) {
        this.target = target;
    }

    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        System.out.println("Calling: " + method.getName());
        long start = System.currentTimeMillis();

        try {
            Object result = method.invoke(target, args);
            return result;
        } finally {
            long elapsed = System.currentTimeMillis() - start;
            System.out.println("Method " + method.getName() + " took " + elapsed + "ms");
        }
    }
}

// Creating proxy
UserService realService = new UserServiceImpl();
UserService proxy = (UserService) Proxy.newProxyInstance(
    UserService.class.getClassLoader(),
    new Class<?>[] { UserService.class },
    new LoggingHandler(realService)
);

proxy.findById(1L); // Logs method call and execution time
\`\`\`

**CGLIB Proxy (for classes without interface):**
\`\`\`java
Enhancer enhancer = new Enhancer();
enhancer.setSuperclass(UserServiceImpl.class);
enhancer.setCallback(new MethodInterceptor() {
    public Object intercept(Object obj, Method method, Object[] args,
                           MethodProxy proxy) throws Throwable {
        System.out.println("Before: " + method.getName());
        Object result = proxy.invokeSuper(obj, args);
        System.out.println("After: " + method.getName());
        return result;
    }
});
UserServiceImpl proxy = (UserServiceImpl) enhancer.create();
\`\`\`

**JDK Proxy vs CGLIB:**
| JDK Proxy | CGLIB |
|-----------|-------|
| Requires interface | Works with classes |
| Creates interface impl | Creates subclass |
| Faster creation | Faster invocation |`
        },
        {
          id: 14,
          question: "What is method reference in Java and what are its types?",
          answer: `Method references are shorthand notation for lambda expressions that call existing methods.

**Types of Method References:**

**1. Reference to Static Method**
\`\`\`java
// Lambda
Function<String, Integer> parser = s -> Integer.parseInt(s);

// Method reference
Function<String, Integer> parser = Integer::parseInt;

// Usage
List<String> strings = Arrays.asList("1", "2", "3");
List<Integer> numbers = strings.stream()
    .map(Integer::parseInt)
    .collect(Collectors.toList());
\`\`\`

**2. Reference to Instance Method of Particular Object**
\`\`\`java
String prefix = "Hello, ";

// Lambda
Function<String, String> greeter = s -> prefix.concat(s);

// Method reference
Function<String, String> greeter = prefix::concat;
\`\`\`

**3. Reference to Instance Method of Arbitrary Object**
\`\`\`java
// Lambda
Function<String, Integer> length = s -> s.length();

// Method reference
Function<String, Integer> length = String::length;

// The object is the first parameter
List<String> names = Arrays.asList("John", "Jane");
names.sort(String::compareToIgnoreCase);
\`\`\`

**4. Reference to Constructor**
\`\`\`java
// Lambda
Supplier<ArrayList<String>> supplier = () -> new ArrayList<>();

// Method reference
Supplier<ArrayList<String>> supplier = ArrayList::new;

// With parameters
Function<String, User> userFactory = User::new;
User user = userFactory.apply("John");
\`\`\`

**Summary:**
| Type | Syntax | Example |
|------|--------|---------|
| Static method | Class::staticMethod | Integer::parseInt |
| Instance (specific) | object::method | str::length |
| Instance (arbitrary) | Class::method | String::length |
| Constructor | Class::new | ArrayList::new |`
        },
        {
          id: 15,
          question: "What are phantom references, weak references, and soft references?",
          answer: `Java provides different reference types for memory-sensitive caching and cleanup.

**Reference Strength (Strongest to Weakest):**
\`\`\`
Strong > Soft > Weak > Phantom
\`\`\`

**1. Strong Reference (Default):**
\`\`\`java
Object obj = new Object(); // Strong reference
obj = null; // Now eligible for GC
\`\`\`

**2. Soft Reference:**
- Collected only when memory is low
- Good for memory-sensitive caches

\`\`\`java
SoftReference<byte[]> cache = new SoftReference<>(new byte[10_000_000]);

byte[] data = cache.get();
if (data == null) {
    // Was collected due to memory pressure
    data = loadData();
    cache = new SoftReference<>(data);
}
\`\`\`

**3. Weak Reference:**
- Collected at next GC regardless of memory
- Good for canonicalizing mappings

\`\`\`java
WeakReference<Object> weakRef = new WeakReference<>(new Object());
Object obj = weakRef.get(); // May return null

// WeakHashMap - entries removed when keys are GC'd
WeakHashMap<Object, String> map = new WeakHashMap<>();
Object key = new Object();
map.put(key, "value");
key = null; // Entry will be removed after GC
\`\`\`

**4. Phantom Reference:**
- \`get()\` always returns null
- Used for cleanup actions before finalization
- Must be used with ReferenceQueue

\`\`\`java
ReferenceQueue<Object> queue = new ReferenceQueue<>();
PhantomReference<Object> phantomRef = new PhantomReference<>(new Object(), queue);

// Cleanup thread
new Thread(() -> {
    while (true) {
        Reference<?> ref = queue.remove(); // Blocks until reference is enqueued
        // Object is about to be collected, perform cleanup
        performCleanup(ref);
    }
}).start();
\`\`\`

**Use Cases:**
| Reference Type | Use Case |
|----------------|----------|
| Soft | Memory-sensitive caches |
| Weak | Canonicalizing mappings, listener lists |
| Phantom | Pre-finalization cleanup, resource tracking |`
        },
        {
          id: 16,
          question: "Explain the happens-before guarantee with volatile and how it prevents instruction reordering.",
          answer: `**Volatile Guarantees:**

1. **Visibility:** Writes to volatile are immediately visible to all threads
2. **Ordering:** Prevents reordering around volatile access

**Memory Barrier Effect:**
\`\`\`java
class Example {
    int a = 0;
    int b = 0;
    volatile boolean flag = false;

    // Thread 1
    void writer() {
        a = 1;        // (1)
        b = 2;        // (2)
        flag = true;  // (3) Volatile write - memory barrier
    }

    // Thread 2
    void reader() {
        if (flag) {   // (4) Volatile read - memory barrier
            // If we see flag=true, we're guaranteed to see a=1, b=2
            System.out.println(a + ", " + b); // Always "1, 2"
        }
    }
}
\`\`\`

**Without Volatile (Dangerous):**
\`\`\`java
// Instructions can be reordered!
// Thread 1 might execute: flag=true, then a=1, b=2
// Thread 2 might see: flag=true, a=0, b=0
\`\`\`

**Happens-Before with Volatile:**
\`\`\`
All writes before volatile write ──happens-before──> volatile write
                                                            │
                                                            ▼
                                    volatile read ──happens-before──> all reads after
\`\`\`

**Double-Checked Locking Explained:**
\`\`\`java
class Singleton {
    private static volatile Singleton instance;

    public static Singleton getInstance() {
        if (instance == null) {              // First check (no locking)
            synchronized (Singleton.class) {
                if (instance == null) {      // Second check (with lock)
                    instance = new Singleton();
                    // Without volatile, this could be reordered:
                    // 1. Allocate memory
                    // 2. Assign reference to instance  ← Other thread sees non-null
                    // 3. Call constructor              ← But object not initialized!

                    // With volatile, proper ordering is guaranteed
                }
            }
        }
        return instance;
    }
}
\`\`\`

**Performance Note:**
- Volatile reads/writes are more expensive than normal
- Use only when necessary for visibility guarantees`
        },
        {
          id: 17,
          question: "What is the ThreadLocal class and when should you use it?",
          answer: `\`ThreadLocal\` provides thread-confined variables where each thread has its own copy.

\`\`\`java
public class UserContext {
    private static final ThreadLocal<User> currentUser = new ThreadLocal<>();

    public static void setUser(User user) {
        currentUser.set(user);
    }

    public static User getUser() {
        return currentUser.get();
    }

    public static void clear() {
        currentUser.remove(); // Important to prevent memory leaks!
    }
}

// Usage in web filter
public class AuthFilter implements Filter {
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) {
        try {
            User user = authenticate(req);
            UserContext.setUser(user);
            chain.doFilter(req, res);
        } finally {
            UserContext.clear(); // Always clean up!
        }
    }
}

// Anywhere in the same thread
User user = UserContext.getUser();
\`\`\`

**ThreadLocal with Initial Value:**
\`\`\`java
ThreadLocal<SimpleDateFormat> dateFormat = ThreadLocal.withInitial(
    () -> new SimpleDateFormat("yyyy-MM-dd")
);

// Each thread gets its own SimpleDateFormat instance
String formatted = dateFormat.get().format(new Date());
\`\`\`

**InheritableThreadLocal:**
\`\`\`java
// Child threads inherit parent's value
InheritableThreadLocal<String> context = new InheritableThreadLocal<>();
context.set("parent-value");

new Thread(() -> {
    System.out.println(context.get()); // "parent-value"
}).start();
\`\`\`

**Memory Leak Prevention:**
\`\`\`java
// Always use try-finally or use with ThreadPoolExecutor
executor.execute(() -> {
    try {
        threadLocal.set(value);
        // do work
    } finally {
        threadLocal.remove(); // Prevent memory leak in thread pools
    }
});
\`\`\`

**Use Cases:**
- User session context in web apps
- Database connection per thread
- Transaction context
- SimpleDateFormat (not thread-safe)

**Warning:** With thread pools, always call \`remove()\` to prevent memory leaks and data leakage between requests.`
        },
        {
          id: 18,
          question: "What are the different ways to create a thread-safe singleton in Java?",
          answer: `**1. Eager Initialization:**
\`\`\`java
public class Singleton {
    private static final Singleton INSTANCE = new Singleton();

    private Singleton() {}

    public static Singleton getInstance() {
        return INSTANCE;
    }
}
// Pros: Simple, thread-safe
// Cons: Created even if not used
\`\`\`

**2. Synchronized Method:**
\`\`\`java
public class Singleton {
    private static Singleton instance;

    private Singleton() {}

    public static synchronized Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
// Pros: Lazy, thread-safe
// Cons: Performance overhead (locks every call)
\`\`\`

**3. Double-Checked Locking:**
\`\`\`java
public class Singleton {
    private static volatile Singleton instance;

    private Singleton() {}

    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}
// Pros: Lazy, thread-safe, performant
// Cons: Complex, requires volatile
\`\`\`

**4. Bill Pugh (Static Inner Class) - Recommended:**
\`\`\`java
public class Singleton {
    private Singleton() {}

    private static class Holder {
        private static final Singleton INSTANCE = new Singleton();
    }

    public static Singleton getInstance() {
        return Holder.INSTANCE;
    }
}
// Pros: Lazy, thread-safe, no synchronization needed
// Cons: None
\`\`\`

**5. Enum Singleton - Most Recommended:**
\`\`\`java
public enum Singleton {
    INSTANCE;

    public void doSomething() {
        // ...
    }
}
// Pros: Thread-safe, serialization-safe, reflection-safe
// Cons: Cannot extend classes
\`\`\`

**Comparison:**
| Method | Lazy | Thread-Safe | Serialization-Safe | Reflection-Safe |
|--------|------|-------------|--------------------| ----------------|
| Eager | No | Yes | No | No |
| Synchronized | Yes | Yes | No | No |
| DCL | Yes | Yes | No | No |
| Bill Pugh | Yes | Yes | No | No |
| Enum | Yes | Yes | Yes | Yes |`
        },
        {
          id: 19,
          question: "Explain covariant return types in Java.",
          answer: `**Covariant Return Type** (Java 5+) allows an overriding method to return a more specific type than the overridden method.

\`\`\`java
class Animal {
    Animal reproduce() {
        return new Animal();
    }
}

class Dog extends Animal {
    @Override
    Dog reproduce() {  // Returns Dog instead of Animal - covariant!
        return new Dog();
    }
}

class Labrador extends Dog {
    @Override
    Labrador reproduce() {  // Can be even more specific
        return new Labrador();
    }
}
\`\`\`

**Benefits:**
\`\`\`java
// Without covariant return type (before Java 5)
Animal animal = new Dog();
Animal baby = animal.reproduce();
Dog dogBaby = (Dog) baby;  // Need explicit cast

// With covariant return type
Dog dog = new Dog();
Dog puppy = dog.reproduce();  // No cast needed!
\`\`\`

**Rules:**
1. Return type must be a subtype of the original return type
2. Only applies to reference types (not primitives)
3. Method signature must be identical (except return type)

**Common Use Cases:**
\`\`\`java
// Builder pattern
abstract class Builder<T extends Builder<T>> {
    protected String name;

    @SuppressWarnings("unchecked")
    public T withName(String name) {
        this.name = name;
        return (T) this;
    }
}

class PersonBuilder extends Builder<PersonBuilder> {
    private int age;

    public PersonBuilder withAge(int age) {
        this.age = age;
        return this;  // Returns PersonBuilder, not Builder
    }
}

// Fluent API
PersonBuilder builder = new PersonBuilder()
    .withName("John")  // Returns PersonBuilder
    .withAge(30);      // Can call PersonBuilder methods
\`\`\`

**Clone method example:**
\`\`\`java
class MyClass implements Cloneable {
    @Override
    public MyClass clone() {  // Covariant: returns MyClass not Object
        try {
            return (MyClass) super.clone();
        } catch (CloneNotSupportedException e) {
            throw new AssertionError();
        }
    }
}
\`\`\``
        },
        {
          id: 20,
          question: "What is the CyclicBarrier and CountDownLatch? How do they differ?",
          answer: `Both are synchronization aids for coordinating multiple threads.

**CountDownLatch:**
- One-time use (cannot be reset)
- Threads wait until count reaches zero
- Main thread waits for worker threads

\`\`\`java
CountDownLatch latch = new CountDownLatch(3);

// Worker threads
for (int i = 0; i < 3; i++) {
    int id = i;
    new Thread(() -> {
        System.out.println("Task " + id + " started");
        doWork();
        latch.countDown();  // Decrement count
        System.out.println("Task " + id + " finished");
    }).start();
}

// Main thread waits
System.out.println("Waiting for tasks...");
latch.await();  // Blocks until count is 0
System.out.println("All tasks completed!");

// Can also use timeout
latch.await(10, TimeUnit.SECONDS);
\`\`\`

**CyclicBarrier:**
- Reusable (resets after all threads arrive)
- All threads wait for each other
- Can specify barrier action

\`\`\`java
CyclicBarrier barrier = new CyclicBarrier(3, () -> {
    System.out.println("All parties arrived - barrier action executed");
});

for (int i = 0; i < 3; i++) {
    int id = i;
    new Thread(() -> {
        for (int round = 0; round < 3; round++) {
            System.out.println("Thread " + id + " at barrier, round " + round);
            try {
                barrier.await();  // Wait for all parties
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }).start();
}
\`\`\`

**Key Differences:**
| Feature | CountDownLatch | CyclicBarrier |
|---------|----------------|---------------|
| Reusable | No | Yes |
| Waiting pattern | One waits for many | Many wait for each other |
| Count change | Decremented | All must arrive |
| Reset | No | Yes (automatic or manual) |
| Barrier action | No | Optional callback |

**Use Cases:**
- **CountDownLatch:** Application startup, waiting for services
- **CyclicBarrier:** Multi-phase algorithms, parallel iterations

**Phaser (Java 7+):** More flexible, supports dynamic party count
\`\`\`java
Phaser phaser = new Phaser(3);
phaser.arriveAndAwaitAdvance(); // Wait for all
phaser.register();               // Add party
phaser.arriveAndDeregister();    // Remove party
\`\`\``
        },
        {
          id: 21,
          question: "What is the difference between Callable and Runnable?",
          answer: `| Feature | Runnable | Callable<V> |
|---------|----------|-------------|
| Return value | void | V (generic) |
| Exceptions | Cannot throw checked | Can throw Exception |
| Method | run() | call() |
| Future | No | Yes |

**Runnable:**
\`\`\`java
Runnable runnable = () -> {
    System.out.println("Running task");
    // Cannot return value
    // Cannot throw checked exceptions
};

Thread thread = new Thread(runnable);
thread.start();
\`\`\`

**Callable:**
\`\`\`java
Callable<Integer> callable = () -> {
    System.out.println("Computing...");
    if (someCondition) {
        throw new IOException("Error");  // Can throw checked exception
    }
    return 42;  // Returns value
};

ExecutorService executor = Executors.newSingleThreadExecutor();
Future<Integer> future = executor.submit(callable);

try {
    Integer result = future.get();  // Blocks until complete
    System.out.println("Result: " + result);
} catch (ExecutionException e) {
    Throwable cause = e.getCause();  // Get the actual exception
    System.out.println("Task failed: " + cause.getMessage());
}
\`\`\`

**Converting Runnable to Callable:**
\`\`\`java
Runnable runnable = () -> System.out.println("Hello");

// Using Executors utility
Callable<Object> callable = Executors.callable(runnable);
Callable<String> callableWithResult = Executors.callable(runnable, "Done");

// Using lambda
Callable<Void> callable2 = () -> {
    runnable.run();
    return null;
};
\`\`\`

**Future Methods:**
\`\`\`java
Future<Integer> future = executor.submit(callable);

future.get();                    // Block until result
future.get(5, TimeUnit.SECONDS); // Block with timeout
future.isDone();                 // Check if completed
future.isCancelled();            // Check if cancelled
future.cancel(true);             // Cancel (mayInterruptIfRunning)
\`\`\``
        },
        {
          id: 22,
          question: "Explain the difference between submit() and execute() methods in ExecutorService.",
          answer: `**execute(Runnable):**
- Defined in \`Executor\` interface
- Returns void
- Cannot track task completion
- Exceptions propagate to UncaughtExceptionHandler

**submit(Runnable/Callable):**
- Defined in \`ExecutorService\` interface
- Returns \`Future\`
- Can track completion, cancel, get result
- Exceptions wrapped in ExecutionException

\`\`\`java
ExecutorService executor = Executors.newFixedThreadPool(4);

// execute() - fire and forget
executor.execute(() -> {
    System.out.println("Task running");
    if (true) throw new RuntimeException("Oops!");
    // Exception goes to UncaughtExceptionHandler
});

// submit() with Runnable - returns Future<?>
Future<?> future1 = executor.submit(() -> {
    System.out.println("Task running");
});
future1.get(); // Returns null on completion

// submit() with Callable - returns Future<T>
Future<Integer> future2 = executor.submit(() -> {
    return 42;
});
Integer result = future2.get(); // Returns 42

// submit() with Runnable and result
Future<String> future3 = executor.submit(() -> {
    System.out.println("Working...");
}, "Done");
String result2 = future3.get(); // Returns "Done"
\`\`\`

**Exception Handling:**
\`\`\`java
// With execute() - need custom handler
executor.execute(() -> {
    throw new RuntimeException("Error");
});
// Exception logged by default handler

// With submit() - exception in Future
Future<?> future = executor.submit(() -> {
    throw new RuntimeException("Error");
});

try {
    future.get(); // Exception thrown here
} catch (ExecutionException e) {
    System.out.println("Task failed: " + e.getCause());
}
\`\`\`

**When to Use:**
| Use Case | Method |
|----------|--------|
| Fire-and-forget tasks | execute() |
| Need result | submit() with Callable |
| Need to cancel/track | submit() |
| Need exception handling | submit() |`
        },
        {
          id: 23,
          question: "What is a ReadWriteLock and when should you use it?",
          answer: `\`ReadWriteLock\` allows multiple concurrent readers but only one writer.

**Rules:**
- Multiple threads can read simultaneously (no writer)
- Only one thread can write (no readers or other writers)
- Writers have priority over waiting readers

\`\`\`java
class CachedData {
    private final ReadWriteLock lock = new ReentrantReadWriteLock();
    private final Lock readLock = lock.readLock();
    private final Lock writeLock = lock.writeLock();
    private Object data;
    private boolean cacheValid = false;

    public Object read() {
        readLock.lock();
        try {
            if (cacheValid) {
                return data;
            }
        } finally {
            readLock.unlock();
        }

        // Cache miss - need to reload
        writeLock.lock();
        try {
            // Double-check after acquiring write lock
            if (!cacheValid) {
                data = loadFromDatabase();
                cacheValid = true;
            }
            return data;
        } finally {
            writeLock.unlock();
        }
    }

    public void update(Object newData) {
        writeLock.lock();
        try {
            data = newData;
            cacheValid = true;
            saveToDatabase(data);
        } finally {
            writeLock.unlock();
        }
    }
}
\`\`\`

**Performance Comparison:**
\`\`\`java
// Scenario: 90% reads, 10% writes
ReentrantLock singleLock = new ReentrantLock();
ReadWriteLock rwLock = new ReentrantReadWriteLock();

// With ReentrantLock - all operations serialized
// With ReadWriteLock - reads can be concurrent
\`\`\`

**Lock Downgrading (allowed):**
\`\`\`java
writeLock.lock();
try {
    // Modify data
    updateData();

    // Downgrade: acquire read lock before releasing write lock
    readLock.lock();
} finally {
    writeLock.unlock();
}
// Can continue reading with read lock
try {
    return data;
} finally {
    readLock.unlock();
}
\`\`\`

**Lock Upgrading (NOT allowed):**
\`\`\`java
readLock.lock();
try {
    if (needsUpdate) {
        writeLock.lock();  // DEADLOCK! Cannot upgrade
    }
} finally {
    readLock.unlock();
}
\`\`\`

**StampedLock (Java 8+):** Optimistic reading
\`\`\`java
StampedLock stampedLock = new StampedLock();
long stamp = stampedLock.tryOptimisticRead();
// Read without locking
if (!stampedLock.validate(stamp)) {
    // Fall back to read lock
    stamp = stampedLock.readLock();
}
\`\`\``
        },
        {
          id: 24,
          question: "Explain String interning and the String pool.",
          answer: `**String Pool (String Intern Pool):**
A special memory area in heap that stores unique String literals.

\`\`\`java
// String literals go to pool
String s1 = "Hello";
String s2 = "Hello";
System.out.println(s1 == s2);  // true - same reference from pool

// new String() creates object in heap (not pool)
String s3 = new String("Hello");
System.out.println(s1 == s3);  // false - different memory locations
System.out.println(s1.equals(s3));  // true - same content

// intern() returns pooled reference
String s4 = s3.intern();
System.out.println(s1 == s4);  // true - s4 points to pooled string
\`\`\`

**Memory Visualization:**
\`\`\`
┌──────────────────────────────────┐
│              HEAP                │
├──────────────────────────────────┤
│  String Pool                     │
│  ┌─────────────────────────┐     │
│  │  "Hello" ─────┬─────────│─────┼──→ s1, s2, s4
│  │  "World"      │         │     │
│  └───────────────┼─────────┘     │
│                  │               │
│  Regular Heap    │               │
│  ┌─────────────────────────┐     │
│  │  String("Hello") ───────│─────┼──→ s3
│  └─────────────────────────┘     │
└──────────────────────────────────┘
\`\`\`

**String Concatenation:**
\`\`\`java
String a = "Hello";
String b = "World";

// Compile-time constant - goes to pool
String c = "Hello" + "World";
String d = "HelloWorld";
System.out.println(c == d);  // true

// Runtime concatenation - not interned
String e = a + b;
System.out.println(d == e);  // false

// Interning runtime result
String f = (a + b).intern();
System.out.println(d == f);  // true
\`\`\`

**When to Use intern():**
\`\`\`java
// Useful for repeated comparisons of same strings
Set<String> seen = new HashSet<>();
while (reading) {
    String value = reader.readLine().intern();  // Reuse pooled strings
    if (seen.contains(value)) {
        // Comparison is faster with interned strings
    }
    seen.add(value);
}
\`\`\`

**Caution:**
- Don't intern unbounded user input (memory issues)
- Pool is garbage collected (Java 7+)
- Pool stored in heap, not PermGen (Java 7+)`
        },
        {
          id: 25,
          question: "What is the difference between Semaphore and Mutex?",
          answer: `**Mutex (Mutual Exclusion):**
- Binary: Only 0 or 1
- Ownership: Only acquiring thread can release
- Used for exclusive access to a resource

**Semaphore:**
- Counting: Can be > 1
- No ownership: Any thread can release
- Used for limiting concurrent access

\`\`\`java
// Mutex-like behavior with ReentrantLock
ReentrantLock mutex = new ReentrantLock();
mutex.lock();
try {
    // Only one thread can execute this
} finally {
    mutex.unlock(); // Only acquiring thread can unlock
}

// Semaphore - allows N concurrent accesses
Semaphore semaphore = new Semaphore(3); // 3 permits

semaphore.acquire(); // Blocks if no permits available
try {
    // Up to 3 threads can be here simultaneously
} finally {
    semaphore.release(); // Any thread can release
}
\`\`\`

**Connection Pool Example:**
\`\`\`java
class ConnectionPool {
    private final Semaphore semaphore;
    private final Queue<Connection> pool;

    public ConnectionPool(int size) {
        this.semaphore = new Semaphore(size);
        this.pool = new ConcurrentLinkedQueue<>();
        for (int i = 0; i < size; i++) {
            pool.add(createConnection());
        }
    }

    public Connection acquire() throws InterruptedException {
        semaphore.acquire(); // Wait for available connection
        return pool.poll();
    }

    public void release(Connection conn) {
        pool.offer(conn);
        semaphore.release(); // Signal availability
    }
}
\`\`\`

**Semaphore Methods:**
\`\`\`java
Semaphore sem = new Semaphore(10);

sem.acquire();           // Acquire 1 permit
sem.acquire(3);          // Acquire 3 permits
sem.tryAcquire();        // Non-blocking acquire
sem.tryAcquire(5, TimeUnit.SECONDS); // With timeout

sem.release();           // Release 1 permit
sem.release(3);          // Release 3 permits

sem.availablePermits();  // Check available
sem.drainPermits();      // Acquire all available
\`\`\`

| Feature | Mutex/Lock | Semaphore |
|---------|------------|-----------|
| Count | 1 | N |
| Ownership | Yes | No |
| Reentrant | Optional | No |
| Use Case | Exclusive access | Resource pooling |`
        },
        {
          id: 26,
          question: "How does HashMap work internally in Java?",
          answer: `**HashMap Internal Structure:**

\`\`\`
HashMap<K, V>
├── Node<K,V>[] table  (bucket array)
├── size               (number of entries)
├── threshold          (capacity * loadFactor)
└── loadFactor         (default 0.75)

Each bucket contains:
- Linked List (≤ 8 entries)
- Red-Black Tree (> 8 entries, Java 8+)
\`\`\`

**Put Operation:**
\`\`\`java
// 1. Calculate hash
int hash = hash(key.hashCode());

// 2. Calculate bucket index
int index = hash & (table.length - 1);  // Equivalent to hash % length

// 3. If bucket empty, insert directly
// 4. If bucket has entries, traverse and:
//    - If key exists, replace value
//    - If key doesn't exist, append to end
// 5. If threshold exceeded, resize (double capacity)
\`\`\`

**Hash Function:**
\`\`\`java
static final int hash(Object key) {
    int h;
    // Spread higher bits to lower bits (XOR)
    return (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
}
\`\`\`

**Collision Resolution:**
\`\`\`
Bucket 5:
┌─────────────────────────────────────────────┐
│ [Entry1] → [Entry2] → [Entry3] → null       │  Linked List
└─────────────────────────────────────────────┘

If entries > 8:
┌─────────────────────────────────────────────┐
│        ┌───[Entry2]───┐                     │
│        │              │                     │
│    [Entry1]       [Entry3]                  │  Red-Black Tree
│        │              │                     │
│    [Entry4]       [Entry5]                  │
└─────────────────────────────────────────────┘
\`\`\`

**Resize Operation:**
\`\`\`java
// When size > threshold (capacity * 0.75)
// 1. Create new array with double capacity
// 2. Rehash all entries to new positions
// 3. Replace old array
\`\`\`

**Why Power of 2 Capacity:**
\`\`\`java
// hash & (length - 1) is equivalent to hash % length
// But bitwise AND is much faster than modulo
// Only works when length is power of 2
\`\`\`

**Time Complexity:**
| Operation | Average | Worst (many collisions) |
|-----------|---------|-------------------------|
| get() | O(1) | O(log n) with tree |
| put() | O(1) | O(log n) with tree |
| remove() | O(1) | O(log n) with tree |

**Important Contract:**
If two objects are equal (\`equals()\` returns true), they must have same \`hashCode()\`.`
        },
        {
          id: 27,
          question: "Explain the concept of blocking queues and their implementations.",
          answer: `**BlockingQueue** is a thread-safe queue that blocks when:
- Retrieving from empty queue
- Adding to full queue

**Core Methods:**
| Operation | Throws Exception | Returns Special Value | Blocks | Times Out |
|-----------|------------------|----------------------|--------|-----------|
| Insert | add(e) | offer(e) | put(e) | offer(e, time, unit) |
| Remove | remove() | poll() | take() | poll(time, unit) |
| Examine | element() | peek() | N/A | N/A |

**Implementations:**

**1. ArrayBlockingQueue:**
\`\`\`java
// Bounded, backed by array
BlockingQueue<String> queue = new ArrayBlockingQueue<>(100);

// Producer
queue.put("item");  // Blocks if full

// Consumer
String item = queue.take();  // Blocks if empty
\`\`\`

**2. LinkedBlockingQueue:**
\`\`\`java
// Optionally bounded, linked nodes
BlockingQueue<String> queue = new LinkedBlockingQueue<>(1000);
BlockingQueue<String> unbounded = new LinkedBlockingQueue<>();
\`\`\`

**3. PriorityBlockingQueue:**
\`\`\`java
// Unbounded, priority ordering
BlockingQueue<Task> queue = new PriorityBlockingQueue<>(10,
    Comparator.comparing(Task::getPriority));
\`\`\`

**4. SynchronousQueue:**
\`\`\`java
// Zero capacity, direct handoff
BlockingQueue<String> queue = new SynchronousQueue<>();
// put() blocks until take() is called
\`\`\`

**5. DelayQueue:**
\`\`\`java
class DelayedTask implements Delayed {
    private final long executeTime;

    public long getDelay(TimeUnit unit) {
        return unit.convert(executeTime - System.currentTimeMillis(),
                           TimeUnit.MILLISECONDS);
    }
}

DelayQueue<DelayedTask> queue = new DelayQueue<>();
\`\`\`

**Producer-Consumer Pattern:**
\`\`\`java
BlockingQueue<Task> queue = new ArrayBlockingQueue<>(100);

// Producer
class Producer implements Runnable {
    public void run() {
        while (true) {
            Task task = generateTask();
            queue.put(task);  // Blocks if queue full
        }
    }
}

// Consumer
class Consumer implements Runnable {
    public void run() {
        while (true) {
            Task task = queue.take();  // Blocks if queue empty
            process(task);
        }
    }
}
\`\`\`

**Use Cases:**
- Thread pools (ThreadPoolExecutor uses BlockingQueue)
- Producer-consumer scenarios
- Task scheduling
- Event processing pipelines`
        },
        {
          id: 28,
          question: "What is type erasure in Java generics?",
          answer: `**Type Erasure** is how Java implements generics - type parameters are removed at compile time and replaced with their bounds or Object.

**Before Compilation:**
\`\`\`java
List<String> strings = new ArrayList<>();
strings.add("Hello");
String s = strings.get(0);

public <T> T identity(T value) {
    return value;
}
\`\`\`

**After Type Erasure:**
\`\`\`java
List strings = new ArrayList();  // Raw type
strings.add("Hello");
String s = (String) strings.get(0);  // Compiler inserts cast

public Object identity(Object value) {
    return value;
}
\`\`\`

**With Bounds:**
\`\`\`java
// Before
public <T extends Number> double sum(List<T> numbers) {
    double sum = 0;
    for (T num : numbers) {
        sum += num.doubleValue();
    }
    return sum;
}

// After erasure
public double sum(List numbers) {
    double sum = 0;
    for (Number num : numbers) {  // Erased to bound
        sum += num.doubleValue();
    }
    return sum;
}
\`\`\`

**Implications:**

**1. Cannot use instanceof with type parameters:**
\`\`\`java
// Compile error - type erased at runtime
if (obj instanceof T) { }
if (list instanceof List<String>) { }

// OK
if (list instanceof List<?>) { }
\`\`\`

**2. Cannot create generic arrays:**
\`\`\`java
T[] array = new T[10];  // Compile error
List<String>[] lists = new List<String>[10];  // Compile error

// Workaround
T[] array = (T[]) new Object[10];
\`\`\`

**3. Cannot catch or throw parameterized types:**
\`\`\`java
// Compile error
catch (MyException<String> e) { }

// OK
catch (MyException e) { }
\`\`\`

**Bridge Methods:**
\`\`\`java
class StringBox implements Box<String> {
    public void set(String value) { }

    // Compiler generates bridge method:
    public void set(Object value) {
        set((String) value);
    }
}
\`\`\`

**Getting Type at Runtime (Workarounds):**
\`\`\`java
// Pass Class token
public <T> T create(Class<T> type) {
    return type.getDeclaredConstructor().newInstance();
}

// Type tokens with anonymous class
TypeReference<List<String>> type = new TypeReference<List<String>>() {};
Type genericType = type.getType();  // List<String>
\`\`\``
        },
        {
          id: 29,
          question: "What are the best practices for exception handling in Java?",
          answer: `**1. Use Specific Exceptions:**
\`\`\`java
// Bad
catch (Exception e) { }

// Good
catch (FileNotFoundException e) {
    // Handle file not found
} catch (IOException e) {
    // Handle other I/O errors
}
\`\`\`

**2. Don't Swallow Exceptions:**
\`\`\`java
// Bad - lost exception
try {
    process();
} catch (Exception e) {
    // Do nothing
}

// Good - log or rethrow
try {
    process();
} catch (Exception e) {
    logger.error("Processing failed", e);
    throw new ServiceException("Processing failed", e);
}
\`\`\`

**3. Use try-with-resources:**
\`\`\`java
// Always use for AutoCloseable resources
try (BufferedReader reader = new BufferedReader(new FileReader(file))) {
    return reader.readLine();
}
\`\`\`

**4. Create Custom Exceptions When Appropriate:**
\`\`\`java
public class UserNotFoundException extends RuntimeException {
    private final Long userId;

    public UserNotFoundException(Long userId) {
        super("User not found: " + userId);
        this.userId = userId;
    }

    public Long getUserId() { return userId; }
}
\`\`\`

**5. Don't Use Exceptions for Flow Control:**
\`\`\`java
// Bad - expensive
try {
    int value = Integer.parseInt(str);
} catch (NumberFormatException e) {
    value = defaultValue;
}

// Good - check first
if (isNumeric(str)) {
    value = Integer.parseInt(str);
} else {
    value = defaultValue;
}
\`\`\`

**6. Log at the Right Level:**
\`\`\`java
try {
    process();
} catch (BusinessException e) {
    logger.warn("Business rule violation: {}", e.getMessage());
    // Handle gracefully
} catch (SystemException e) {
    logger.error("System error", e);  // Include stack trace
    throw e;
}
\`\`\`

**7. Preserve Original Exception:**
\`\`\`java
// Always pass cause
throw new ServiceException("Failed to process", originalException);
\`\`\`

**8. Clean Up Resources in Finally:**
\`\`\`java
Lock lock = new ReentrantLock();
lock.lock();
try {
    // Critical section
} finally {
    lock.unlock();  // Always release lock
}
\`\`\`

**9. Document Exceptions:**
\`\`\`java
/**
 * @throws UserNotFoundException if user doesn't exist
 * @throws ValidationException if data is invalid
 */
public User updateUser(Long id, UserDTO dto) {
    // ...
}
\`\`\``
        },
        {
          id: 30,
          question: "Explain the diamond problem and how Java handles it with interfaces.",
          answer: `**Diamond Problem:**
Occurs when a class inherits from two classes that have a common ancestor with conflicting methods.

\`\`\`
       A
      / \\
     B   C
      \\ /
       D

If B and C override A's method differently,
which version does D inherit?
\`\`\`

**Java's Solution - No Multiple Class Inheritance:**
\`\`\`java
class A { void display() { } }
class B extends A { void display() { } }
class C extends A { void display() { } }

// Compile error - Java doesn't allow this
class D extends B, C { }
\`\`\`

**But Interfaces Allow Multiple Inheritance:**
\`\`\`java
interface A {
    default void display() {
        System.out.println("A");
    }
}

interface B extends A {
    default void display() {
        System.out.println("B");
    }
}

interface C extends A {
    default void display() {
        System.out.println("C");
    }
}

// Diamond with interfaces - must resolve conflict
class D implements B, C {
    @Override
    public void display() {
        // Must explicitly resolve
        B.super.display();  // Call B's version
        // OR
        C.super.display();  // Call C's version
        // OR
        System.out.println("D");  // Own implementation
    }
}
\`\`\`

**Resolution Rules:**

**Rule 1: Class wins over interface**
\`\`\`java
class Parent {
    void show() { System.out.println("Parent"); }
}

interface MyInterface {
    default void show() { System.out.println("Interface"); }
}

class Child extends Parent implements MyInterface {
    // Inherits Parent.show() - class wins
}

new Child().show();  // "Parent"
\`\`\`

**Rule 2: More specific interface wins**
\`\`\`java
interface A {
    default void show() { System.out.println("A"); }
}

interface B extends A {
    default void show() { System.out.println("B"); }
}

class C implements A, B {
    // B is more specific, inherits B.show()
}

new C().show();  // "B"
\`\`\`

**Rule 3: If conflict remains, class must override**
\`\`\`java
interface X {
    default void method() { System.out.println("X"); }
}

interface Y {
    default void method() { System.out.println("Y"); }
}

class Z implements X, Y {
    // MUST override - neither is more specific
    @Override
    public void method() {
        X.super.method();  // Explicitly choose
    }
}
\`\`\``
        }
      ]
    }
  ]
};
