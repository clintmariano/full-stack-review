import { Category } from "./types";

export const designPatternsCategory: Category = {
  id: "design-patterns",
  name: "Design Patterns",
  subtitle: "Interview Questions",
  icon: "patterns",
  color: "#9333ea",
  sections: [
    {
      title: "Design Patterns Questions for Freshers and Intermediate Levels",
      questions: [
        {
          id: 1,
          question: "What are Design Patterns and why are they important?",
          answer: `**Design Patterns** are reusable solutions to commonly occurring problems in software design.

**Categories:**
\`\`\`
Design Patterns
├── Creational (Object Creation)
│   ├── Singleton
│   ├── Factory Method
│   ├── Abstract Factory
│   ├── Builder
│   └── Prototype
├── Structural (Object Composition)
│   ├── Adapter
│   ├── Bridge
│   ├── Composite
│   ├── Decorator
│   ├── Facade
│   ├── Flyweight
│   └── Proxy
└── Behavioral (Object Communication)
    ├── Chain of Responsibility
    ├── Command
    ├── Iterator
    ├── Mediator
    ├── Memento
    ├── Observer
    ├── State
    ├── Strategy
    ├── Template Method
    └── Visitor
\`\`\`

**Benefits:**
- **Proven Solutions:** Tested by many developers
- **Common Vocabulary:** "Use Singleton" is understood universally
- **Best Practices:** Embody OOP principles
- **Maintainability:** Easier to understand and modify
- **Reusability:** Can be applied across projects`
        },
        {
          id: 2,
          question: "What is the Singleton Design Pattern and how do you implement it?",
          answer: `The **Singleton Pattern** ensures a class has only one instance and provides a global point of access to it.

**Thread-Safe Singleton Implementation:**

\`\`\`java
public class Singleton {
    private static volatile Singleton instance;

    private Singleton() {
        // Private constructor prevents instantiation
    }

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
\`\`\`

**Bill Pugh Singleton (Recommended):**
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
\`\`\`

**Enum Singleton (Most Robust):**
\`\`\`java
public enum Singleton {
    INSTANCE;

    public void doSomething() { }
}
\`\`\`

**Use Cases:**
- Database connection pool
- Configuration manager
- Logging service
- Cache manager`
        },
        {
          id: 3,
          question: "Explain the Factory Design Pattern with an example.",
          answer: `The **Factory Pattern** provides an interface for creating objects without specifying their concrete classes.

\`\`\`java
// Product interface
interface Notification {
    void send(String message);
}

// Concrete products
class EmailNotification implements Notification {
    public void send(String message) {
        System.out.println("Email: " + message);
    }
}

class SMSNotification implements Notification {
    public void send(String message) {
        System.out.println("SMS: " + message);
    }
}

class PushNotification implements Notification {
    public void send(String message) {
        System.out.println("Push: " + message);
    }
}

// Factory class
class NotificationFactory {
    public static Notification create(String type) {
        return switch (type.toUpperCase()) {
            case "EMAIL" -> new EmailNotification();
            case "SMS" -> new SMSNotification();
            case "PUSH" -> new PushNotification();
            default -> throw new IllegalArgumentException("Unknown type: " + type);
        };
    }
}

// Usage
Notification notification = NotificationFactory.create("EMAIL");
notification.send("Hello!");
\`\`\`

**Benefits:**
- **Loose coupling** - Client doesn't depend on concrete classes
- **Single Responsibility** - Object creation logic is centralized
- **Open/Closed Principle** - Easy to add new types

**Factory Method Pattern:**
\`\`\`java
abstract class NotificationCreator {
    abstract Notification createNotification();

    public void notify(String message) {
        Notification n = createNotification();
        n.send(message);
    }
}

class EmailNotificationCreator extends NotificationCreator {
    Notification createNotification() {
        return new EmailNotification();
    }
}
\`\`\``
        },
        {
          id: 4,
          question: "What is the Builder Pattern and when should you use it?",
          answer: `The **Builder Pattern** separates the construction of a complex object from its representation.

\`\`\`java
public class User {
    private final String firstName;    // Required
    private final String lastName;     // Required
    private final int age;             // Optional
    private final String email;        // Optional
    private final String phone;        // Optional

    private User(Builder builder) {
        this.firstName = builder.firstName;
        this.lastName = builder.lastName;
        this.age = builder.age;
        this.email = builder.email;
        this.phone = builder.phone;
    }

    public static class Builder {
        // Required parameters
        private final String firstName;
        private final String lastName;

        // Optional parameters with defaults
        private int age = 0;
        private String email = "";
        private String phone = "";

        public Builder(String firstName, String lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }

        public Builder age(int age) {
            this.age = age;
            return this;
        }

        public Builder email(String email) {
            this.email = email;
            return this;
        }

        public Builder phone(String phone) {
            this.phone = phone;
            return this;
        }

        public User build() {
            return new User(this);
        }
    }
}

// Usage - fluent API
User user = new User.Builder("John", "Doe")
    .age(30)
    .email("john@example.com")
    .phone("123-456-7890")
    .build();
\`\`\`

**When to Use:**
- Objects with many optional parameters
- Immutable objects
- Complex object construction
- Avoiding "telescoping constructor" anti-pattern

**Lombok @Builder:**
\`\`\`java
@Builder
public class User {
    private String firstName;
    private String lastName;
    private int age;
}

User user = User.builder()
    .firstName("John")
    .lastName("Doe")
    .build();
\`\`\``
        },
        {
          id: 5,
          question: "Explain the Observer Pattern with an example.",
          answer: `The **Observer Pattern** defines a one-to-many dependency where multiple observers are notified when the subject's state changes.

\`\`\`java
import java.util.*;

// Subject interface
interface Subject {
    void attach(Observer observer);
    void detach(Observer observer);
    void notifyObservers();
}

// Observer interface
interface Observer {
    void update(String event);
}

// Concrete Subject
class NewsAgency implements Subject {
    private List<Observer> observers = new ArrayList<>();
    private String news;

    public void setNews(String news) {
        this.news = news;
        notifyObservers();
    }

    public void attach(Observer observer) {
        observers.add(observer);
    }

    public void detach(Observer observer) {
        observers.remove(observer);
    }

    public void notifyObservers() {
        for (Observer observer : observers) {
            observer.update(news);
        }
    }
}

// Concrete Observers
class NewsChannel implements Observer {
    private String name;

    public NewsChannel(String name) {
        this.name = name;
    }

    public void update(String news) {
        System.out.println(name + " received: " + news);
    }
}

// Usage
NewsAgency agency = new NewsAgency();
agency.attach(new NewsChannel("CNN"));
agency.attach(new NewsChannel("BBC"));
agency.setNews("Breaking news!");
// Output:
// CNN received: Breaking news!
// BBC received: Breaking news!
\`\`\`

**Use Cases:**
- Event handling systems
- MVC architecture (View observes Model)
- Publish/Subscribe messaging
- Real-time notifications`
        },
        {
          id: 6,
          question: "What is the Strategy Pattern?",
          answer: `The **Strategy Pattern** defines a family of algorithms, encapsulates each one, and makes them interchangeable.

\`\`\`java
// Strategy interface
interface PaymentStrategy {
    void pay(double amount);
}

// Concrete strategies
class CreditCardPayment implements PaymentStrategy {
    private String cardNumber;

    public CreditCardPayment(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public void pay(double amount) {
        System.out.println("Paid $" + amount + " with credit card " + cardNumber);
    }
}

class PayPalPayment implements PaymentStrategy {
    private String email;

    public PayPalPayment(String email) {
        this.email = email;
    }

    public void pay(double amount) {
        System.out.println("Paid $" + amount + " with PayPal: " + email);
    }
}

class CryptoPayment implements PaymentStrategy {
    private String walletAddress;

    public CryptoPayment(String walletAddress) {
        this.walletAddress = walletAddress;
    }

    public void pay(double amount) {
        System.out.println("Paid $" + amount + " with crypto to " + walletAddress);
    }
}

// Context
class ShoppingCart {
    private PaymentStrategy paymentStrategy;

    public void setPaymentStrategy(PaymentStrategy strategy) {
        this.paymentStrategy = strategy;
    }

    public void checkout(double amount) {
        paymentStrategy.pay(amount);
    }
}

// Usage
ShoppingCart cart = new ShoppingCart();
cart.setPaymentStrategy(new CreditCardPayment("1234-5678"));
cart.checkout(100.00);

cart.setPaymentStrategy(new PayPalPayment("user@email.com"));
cart.checkout(50.00);
\`\`\`

**Benefits:**
- Algorithms can be switched at runtime
- Easy to add new strategies
- Avoids conditional statements
- Follows Open/Closed Principle`
        },
        {
          id: 7,
          question: "Explain the Decorator Pattern.",
          answer: `The **Decorator Pattern** attaches additional responsibilities to an object dynamically without modifying its structure.

\`\`\`java
// Component interface
interface Coffee {
    String getDescription();
    double getCost();
}

// Concrete component
class SimpleCoffee implements Coffee {
    public String getDescription() {
        return "Simple Coffee";
    }

    public double getCost() {
        return 2.00;
    }
}

// Base decorator
abstract class CoffeeDecorator implements Coffee {
    protected Coffee decoratedCoffee;

    public CoffeeDecorator(Coffee coffee) {
        this.decoratedCoffee = coffee;
    }

    public String getDescription() {
        return decoratedCoffee.getDescription();
    }

    public double getCost() {
        return decoratedCoffee.getCost();
    }
}

// Concrete decorators
class MilkDecorator extends CoffeeDecorator {
    public MilkDecorator(Coffee coffee) {
        super(coffee);
    }

    public String getDescription() {
        return decoratedCoffee.getDescription() + ", Milk";
    }

    public double getCost() {
        return decoratedCoffee.getCost() + 0.50;
    }
}

class SugarDecorator extends CoffeeDecorator {
    public SugarDecorator(Coffee coffee) {
        super(coffee);
    }

    public String getDescription() {
        return decoratedCoffee.getDescription() + ", Sugar";
    }

    public double getCost() {
        return decoratedCoffee.getCost() + 0.25;
    }
}

// Usage - decorators can be stacked
Coffee coffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);

System.out.println(coffee.getDescription()); // Simple Coffee, Milk, Sugar
System.out.println(coffee.getCost());        // 2.75
\`\`\`

**Real-World Examples:**
- Java I/O streams (\`BufferedInputStream\`, \`DataInputStream\`)
- UI components
- Middleware/interceptors`
        },
        {
          id: 8,
          question: "What is the Adapter Pattern?",
          answer: `The **Adapter Pattern** allows incompatible interfaces to work together by wrapping an object with a compatible interface.

\`\`\`java
// Target interface (what client expects)
interface MediaPlayer {
    void play(String filename);
}

// Adaptee (incompatible interface)
class VLCPlayer {
    public void playVLC(String filename) {
        System.out.println("Playing VLC file: " + filename);
    }
}

class MP4Player {
    public void playMP4(String filename) {
        System.out.println("Playing MP4 file: " + filename);
    }
}

// Adapter
class MediaAdapter implements MediaPlayer {
    private VLCPlayer vlcPlayer;
    private MP4Player mp4Player;

    public MediaAdapter(String audioType) {
        if (audioType.equalsIgnoreCase("vlc")) {
            vlcPlayer = new VLCPlayer();
        } else if (audioType.equalsIgnoreCase("mp4")) {
            mp4Player = new MP4Player();
        }
    }

    public void play(String filename) {
        if (vlcPlayer != null) {
            vlcPlayer.playVLC(filename);
        } else if (mp4Player != null) {
            mp4Player.playMP4(filename);
        }
    }
}

// Client
class AudioPlayer implements MediaPlayer {
    public void play(String filename) {
        String extension = getExtension(filename);

        if (extension.equals("mp3")) {
            System.out.println("Playing MP3: " + filename);
        } else if (extension.equals("vlc") || extension.equals("mp4")) {
            MediaAdapter adapter = new MediaAdapter(extension);
            adapter.play(filename);
        }
    }
}

// Usage
AudioPlayer player = new AudioPlayer();
player.play("song.mp3");   // Playing MP3: song.mp3
player.play("movie.mp4");  // Playing MP4 file: movie.mp4
player.play("video.vlc");  // Playing VLC file: video.vlc
\`\`\`

**Use Cases:**
- Integrating legacy code
- Third-party library integration
- API compatibility layers`
        },
        {
          id: 9,
          question: "Explain the Facade Pattern.",
          answer: `The **Facade Pattern** provides a simplified interface to a complex subsystem.

\`\`\`java
// Complex subsystem classes
class CPU {
    public void freeze() { System.out.println("CPU freezing"); }
    public void jump(long position) { System.out.println("CPU jumping to " + position); }
    public void execute() { System.out.println("CPU executing"); }
}

class Memory {
    public void load(long position, byte[] data) {
        System.out.println("Memory loading data at " + position);
    }
}

class HardDrive {
    public byte[] read(long lba, int size) {
        System.out.println("HardDrive reading sector " + lba);
        return new byte[size];
    }
}

// Facade
class ComputerFacade {
    private CPU cpu;
    private Memory memory;
    private HardDrive hardDrive;

    public ComputerFacade() {
        this.cpu = new CPU();
        this.memory = new Memory();
        this.hardDrive = new HardDrive();
    }

    public void start() {
        cpu.freeze();
        memory.load(0, hardDrive.read(0, 1024));
        cpu.jump(0);
        cpu.execute();
    }
}

// Client - simple interface
ComputerFacade computer = new ComputerFacade();
computer.start();  // Hides all the complexity
\`\`\`

**Real-World Examples:**
\`\`\`java
// JDBC Facade
class DatabaseFacade {
    public List<User> getUsers() {
        // Hides: Connection, Statement, ResultSet handling
        // Error handling, connection pooling, etc.
    }
}

// Email Facade
class EmailFacade {
    public void sendEmail(String to, String subject, String body) {
        // Hides: SMTP configuration, authentication,
        // MIME types, attachments handling, etc.
    }
}
\`\`\`

**Benefits:**
- Reduces complexity for clients
- Decouples clients from subsystem
- Provides single entry point
- Doesn't prevent direct subsystem access if needed`
        },
        {
          id: 10,
          question: "What is the Template Method Pattern?",
          answer: `The **Template Method Pattern** defines the skeleton of an algorithm in a method, deferring some steps to subclasses.

\`\`\`java
// Abstract class with template method
abstract class DataProcessor {

    // Template method - defines the algorithm structure
    public final void process() {
        readData();
        processData();
        writeData();
        if (shouldLog()) {
            log();
        }
    }

    // Abstract methods - must be implemented by subclasses
    protected abstract void readData();
    protected abstract void processData();
    protected abstract void writeData();

    // Hook method - optional override
    protected boolean shouldLog() {
        return true;
    }

    // Concrete method - common implementation
    protected void log() {
        System.out.println("Data processing completed");
    }
}

// Concrete implementations
class CSVDataProcessor extends DataProcessor {
    protected void readData() {
        System.out.println("Reading CSV file");
    }

    protected void processData() {
        System.out.println("Processing CSV data");
    }

    protected void writeData() {
        System.out.println("Writing to database");
    }
}

class XMLDataProcessor extends DataProcessor {
    protected void readData() {
        System.out.println("Reading XML file");
    }

    protected void processData() {
        System.out.println("Processing XML data");
    }

    protected void writeData() {
        System.out.println("Writing to JSON");
    }

    // Override hook
    protected boolean shouldLog() {
        return false;
    }
}

// Usage
DataProcessor csvProcessor = new CSVDataProcessor();
csvProcessor.process();

DataProcessor xmlProcessor = new XMLDataProcessor();
xmlProcessor.process();
\`\`\`

**Key Concepts:**
- **Template Method:** Defines algorithm structure (usually \`final\`)
- **Abstract Methods:** Steps subclasses must implement
- **Hook Methods:** Optional steps with default implementation
- **Concrete Methods:** Common code shared by all

**Real-World Examples:**
- Java \`AbstractList\` (iterator implementation)
- Spring \`JdbcTemplate\`
- Servlet \`doGet()\`, \`doPost()\``
        },
        {
          id: 11,
          question: "What is the Proxy Pattern?",
          answer: `The **Proxy Pattern** provides a surrogate or placeholder for another object to control access to it.

**Types of Proxies:**

**1. Virtual Proxy (Lazy Loading):**
\`\`\`java
interface Image {
    void display();
}

class RealImage implements Image {
    private String filename;

    public RealImage(String filename) {
        this.filename = filename;
        loadFromDisk();  // Expensive operation
    }

    private void loadFromDisk() {
        System.out.println("Loading " + filename);
    }

    public void display() {
        System.out.println("Displaying " + filename);
    }
}

class ProxyImage implements Image {
    private RealImage realImage;
    private String filename;

    public ProxyImage(String filename) {
        this.filename = filename;
        // RealImage not loaded yet
    }

    public void display() {
        if (realImage == null) {
            realImage = new RealImage(filename);  // Load on first use
        }
        realImage.display();
    }
}
\`\`\`

**2. Protection Proxy (Access Control):**
\`\`\`java
interface BankAccount {
    void withdraw(double amount);
    double getBalance();
}

class RealBankAccount implements BankAccount {
    private double balance = 1000;

    public void withdraw(double amount) {
        balance -= amount;
    }

    public double getBalance() {
        return balance;
    }
}

class SecureBankAccountProxy implements BankAccount {
    private RealBankAccount account;
    private String userRole;

    public SecureBankAccountProxy(String userRole) {
        this.account = new RealBankAccount();
        this.userRole = userRole;
    }

    public void withdraw(double amount) {
        if ("ADMIN".equals(userRole) || amount <= 500) {
            account.withdraw(amount);
        } else {
            throw new SecurityException("Unauthorized withdrawal");
        }
    }

    public double getBalance() {
        return account.getBalance();
    }
}
\`\`\`

**3. Logging/Caching Proxy:**
\`\`\`java
class CachingProxy implements DataService {
    private DataService realService;
    private Map<String, Object> cache = new HashMap<>();

    public Object getData(String key) {
        if (cache.containsKey(key)) {
            return cache.get(key);
        }
        Object data = realService.getData(key);
        cache.put(key, data);
        return data;
    }
}
\`\`\`

**Use Cases:**
- Lazy initialization
- Access control
- Logging/monitoring
- Caching
- Remote proxy (RMI)`
        },
        {
          id: 12,
          question: "Explain the Command Pattern.",
          answer: `The **Command Pattern** encapsulates a request as an object, allowing parameterization, queuing, logging, and undo operations.

\`\`\`java
// Command interface
interface Command {
    void execute();
    void undo();
}

// Receiver
class Light {
    private boolean isOn = false;

    public void turnOn() {
        isOn = true;
        System.out.println("Light is ON");
    }

    public void turnOff() {
        isOn = false;
        System.out.println("Light is OFF");
    }
}

// Concrete commands
class LightOnCommand implements Command {
    private Light light;

    public LightOnCommand(Light light) {
        this.light = light;
    }

    public void execute() {
        light.turnOn();
    }

    public void undo() {
        light.turnOff();
    }
}

class LightOffCommand implements Command {
    private Light light;

    public LightOffCommand(Light light) {
        this.light = light;
    }

    public void execute() {
        light.turnOff();
    }

    public void undo() {
        light.turnOn();
    }
}

// Invoker
class RemoteControl {
    private Command command;
    private Stack<Command> history = new Stack<>();

    public void setCommand(Command command) {
        this.command = command;
    }

    public void pressButton() {
        command.execute();
        history.push(command);
    }

    public void pressUndo() {
        if (!history.isEmpty()) {
            Command lastCommand = history.pop();
            lastCommand.undo();
        }
    }
}

// Usage
Light light = new Light();
RemoteControl remote = new RemoteControl();

remote.setCommand(new LightOnCommand(light));
remote.pressButton();  // Light is ON

remote.setCommand(new LightOffCommand(light));
remote.pressButton();  // Light is OFF

remote.pressUndo();    // Light is ON
\`\`\`

**Use Cases:**
- Undo/Redo functionality
- Transaction management
- Task queuing
- Macro recording
- GUI buttons and menus`
        },
        {
          id: 13,
          question: "What is the Composite Pattern?",
          answer: `The **Composite Pattern** composes objects into tree structures to represent part-whole hierarchies, allowing clients to treat individual objects and compositions uniformly.

\`\`\`java
// Component
interface FileSystemComponent {
    void showDetails();
    int getSize();
}

// Leaf
class File implements FileSystemComponent {
    private String name;
    private int size;

    public File(String name, int size) {
        this.name = name;
        this.size = size;
    }

    public void showDetails() {
        System.out.println("File: " + name + " (" + size + " bytes)");
    }

    public int getSize() {
        return size;
    }
}

// Composite
class Folder implements FileSystemComponent {
    private String name;
    private List<FileSystemComponent> children = new ArrayList<>();

    public Folder(String name) {
        this.name = name;
    }

    public void add(FileSystemComponent component) {
        children.add(component);
    }

    public void remove(FileSystemComponent component) {
        children.remove(component);
    }

    public void showDetails() {
        System.out.println("Folder: " + name);
        for (FileSystemComponent child : children) {
            child.showDetails();
        }
    }

    public int getSize() {
        int totalSize = 0;
        for (FileSystemComponent child : children) {
            totalSize += child.getSize();
        }
        return totalSize;
    }
}

// Usage
Folder root = new Folder("Root");
Folder documents = new Folder("Documents");
Folder images = new Folder("Images");

documents.add(new File("resume.pdf", 100));
documents.add(new File("report.docx", 200));

images.add(new File("photo.jpg", 500));

root.add(documents);
root.add(images);
root.add(new File("readme.txt", 50));

root.showDetails();
System.out.println("Total size: " + root.getSize() + " bytes");
\`\`\`

**Use Cases:**
- File systems
- UI component hierarchies
- Organization structures
- Menu systems
- Graphics editors (shapes)`
        },
        {
          id: 14,
          question: "Explain the State Pattern.",
          answer: `The **State Pattern** allows an object to alter its behavior when its internal state changes.

\`\`\`java
// State interface
interface OrderState {
    void next(Order order);
    void prev(Order order);
    void printStatus();
}

// Concrete states
class OrderedState implements OrderState {
    public void next(Order order) {
        order.setState(new ShippedState());
    }

    public void prev(Order order) {
        System.out.println("Cannot go back from Ordered");
    }

    public void printStatus() {
        System.out.println("Order placed, waiting for shipment");
    }
}

class ShippedState implements OrderState {
    public void next(Order order) {
        order.setState(new DeliveredState());
    }

    public void prev(Order order) {
        order.setState(new OrderedState());
    }

    public void printStatus() {
        System.out.println("Order shipped, in transit");
    }
}

class DeliveredState implements OrderState {
    public void next(Order order) {
        System.out.println("Order already delivered");
    }

    public void prev(Order order) {
        order.setState(new ShippedState());
    }

    public void printStatus() {
        System.out.println("Order delivered successfully");
    }
}

// Context
class Order {
    private OrderState state;

    public Order() {
        this.state = new OrderedState();
    }

    public void setState(OrderState state) {
        this.state = state;
    }

    public void nextState() {
        state.next(this);
    }

    public void prevState() {
        state.prev(this);
    }

    public void printStatus() {
        state.printStatus();
    }
}

// Usage
Order order = new Order();
order.printStatus();  // Order placed, waiting for shipment

order.nextState();
order.printStatus();  // Order shipped, in transit

order.nextState();
order.printStatus();  // Order delivered successfully
\`\`\`

**State vs Strategy:**
| State | Strategy |
|-------|----------|
| States can transition between each other | Strategies don't know about each other |
| State is usually set internally | Strategy is usually set by client |
| Object behavior changes based on state | Algorithm is selected by client |`
        },
        {
          id: 15,
          question: "What is Dependency Injection and its types?",
          answer: `**Dependency Injection (DI)** is a design pattern where an object receives its dependencies from external sources rather than creating them internally.

**Types of DI:**

**1. Constructor Injection (Recommended):**
\`\`\`java
class UserService {
    private final UserRepository repository;
    private final EmailService emailService;

    // Dependencies injected via constructor
    public UserService(UserRepository repository, EmailService emailService) {
        this.repository = repository;
        this.emailService = emailService;
    }
}
\`\`\`

**2. Setter Injection:**
\`\`\`java
class UserService {
    private UserRepository repository;

    public void setRepository(UserRepository repository) {
        this.repository = repository;
    }
}
\`\`\`

**3. Interface Injection:**
\`\`\`java
interface RepositoryInjector {
    void injectRepository(UserRepository repository);
}

class UserService implements RepositoryInjector {
    private UserRepository repository;

    public void injectRepository(UserRepository repository) {
        this.repository = repository;
    }
}
\`\`\`

**Without DI (Tight Coupling):**
\`\`\`java
class UserService {
    private UserRepository repository = new MySQLUserRepository(); // Hard-coded
}
\`\`\`

**With DI (Loose Coupling):**
\`\`\`java
class UserService {
    private final UserRepository repository;

    public UserService(UserRepository repository) {
        this.repository = repository;  // Injected - can be any implementation
    }
}

// Usage
UserService service = new UserService(new MySQLUserRepository());
// Or for testing
UserService testService = new UserService(new MockUserRepository());
\`\`\`

**Benefits:**
- Loose coupling
- Easier testing (mock dependencies)
- Better maintainability
- Follows SOLID principles

**DI Containers:**
- Spring Framework
- Google Guice
- Dagger (Android)`
        },
        {
          id: 16,
          question: "What is the difference between creational, structural, and behavioral design patterns?",
          answer: `The three main categories are:

- **Creational**: focus on object creation
- **Structural**: focus on composition of classes and objects
- **Behavioral**: focus on interaction and responsibility between objects

**Examples:**
- Creational: Singleton, Factory, Builder, Prototype
- Structural: Adapter, Decorator, Facade, Proxy, Composite
- Behavioral: Strategy, Observer, Command, State, Template Method

This is a common starter question because it checks whether you understand pattern classification, not just isolated examples.`
        },
        {
          id: 17,
          question: "What is the Abstract Factory pattern?",
          answer: `**Abstract Factory** provides an interface for creating families of related objects.

\`\`\`java
interface UIFactory {
    Button createButton();
    Checkbox createCheckbox();
}

class WindowsFactory implements UIFactory {
    public Button createButton() { return new WindowsButton(); }
    public Checkbox createCheckbox() { return new WindowsCheckbox(); }
}
\`\`\`

Use it when related products must be created together consistently, such as UI widgets for different platforms.`
        },
        {
          id: 18,
          question: "What is the Iterator pattern?",
          answer: `The **Iterator pattern** provides a way to traverse a collection without exposing its internal implementation.

\`\`\`java
Iterator<String> iterator = list.iterator();
while (iterator.hasNext()) {
    System.out.println(iterator.next());
}
\`\`\`

It separates traversal logic from collection structure.`
        },
        {
          id: 19,
          question: "What is the Bridge pattern?",
          answer: `The **Bridge pattern** separates abstraction from implementation so both can vary independently.

\`\`\`java
interface Device {
    void on();
    void off();
}

class Remote {
    protected Device device;

    Remote(Device device) {
        this.device = device;
    }
}
\`\`\`

It helps avoid subclass explosion when two dimensions of variation exist.`
        },
        {
          id: 20,
          question: "What is the Memento pattern?",
          answer: `The **Memento pattern** captures and restores an object's internal state without exposing its implementation details.

It is commonly used for:
- undo/redo
- checkpoints
- rollback to a previous state

Typical participants are Originator, Memento, and Caretaker.`
        },
        {
          id: 21,
          question: "What is the Interpreter pattern?",
          answer: `The **Interpreter pattern** defines a representation for a language grammar and an interpreter to evaluate expressions in that language.

It is useful for:
- simple rule engines
- query languages
- expression evaluation

It is less common in daily application code, but still a standard GoF pattern.`
        },
        {
          id: 22,
          question: "What is the difference between Strategy and State patterns?",
          answer: `Both encapsulate behavior in separate classes, but their intent differs.

**Strategy**
- behavior is selected externally
- focuses on interchangeable algorithms

**State**
- behavior changes based on internal state transitions

Simple interview shortcut:
- Strategy = choose behavior
- State = behavior changes itself based on state`
        },
        {
          id: 23,
          question: "What is the difference between Decorator and Proxy patterns?",
          answer: `Both wrap another object, but for different reasons.

**Decorator**
- adds responsibilities or behavior

**Proxy**
- controls access to the original object

Examples:
- Decorator: add caching or formatting behavior
- Proxy: lazy loading, remote access, access control`
        },
        {
          id: 24,
          question: "What is the difference between Adapter and Facade patterns?",
          answer: `**Adapter**
- converts one interface into another

**Facade**
- provides a simplified interface over a complex subsystem

Interview shortcut:
- Adapter changes compatibility
- Facade reduces complexity`
        },
        {
          id: 25,
          question: "Why do many design patterns prefer composition over inheritance?",
          answer: `Composition is often preferred because it:
- reduces tight coupling
- is more flexible at runtime
- avoids deep inheritance trees

Patterns like Strategy, Decorator, and Bridge are strong examples of composition over inheritance.`
        },
        {
          id: 26,
          question: "What problem does the Builder pattern solve compared to constructors?",
          answer: `Builder helps when constructors become hard to read or maintain because of many parameters.

It solves:
- telescoping constructors
- poor readability
- optional parameter overload
- cleaner construction of immutable objects`
        },
        {
          id: 27,
          question: "What is the Prototype pattern?",
          answer: `The **Prototype pattern** creates new objects by cloning an existing object instead of building from scratch.

It is useful when:
- object creation is expensive
- objects have complex setup
- many similar objects are needed`
        },
        {
          id: 28,
          question: "What is the difference between shallow copy and deep copy in Prototype?",
          answer: `**Shallow copy**
- copies field values directly
- nested object references are shared

**Deep copy**
- copies nested objects too
- original and clone are independent

This is a common follow-up when interviewers discuss Prototype.`
        },
        {
          id: 29,
          question: "When should you avoid using a design pattern?",
          answer: `Avoid forcing a pattern when the problem is simple.

Bad pattern usage leads to:
- unnecessary abstraction
- harder readability
- extra classes with little value
- overengineering

A strong answer shows judgment, not just knowledge of names.`
        },
        {
          id: 30,
          question: "How do SOLID principles relate to design patterns?",
          answer: `Design patterns often embody SOLID principles.

Examples:
- Strategy supports Open/Closed
- Dependency Injection supports Dependency Inversion
- Decorator supports Open/Closed
- Factory abstractions reduce coupling

Interviewers like this because it tests conceptual understanding, not memorization alone.`
        }
      ]
    },
    {
      title: "Design Patterns Questions for Experienced Levels",
      questions: [
        {
          id: 1,
          question: "Explain the Circuit Breaker Pattern and when to use it.",
          answer: `The **Circuit Breaker Pattern** prevents cascading failures in distributed systems by failing fast when a service is unavailable.

**States:**
\`\`\`
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  ┌──────────┐   Failure    ┌──────────┐   Timeout      │
│  │  CLOSED  │ ──────────── │   OPEN   │ ──────────┐    │
│  │ (Normal) │ Threshold    │(Failing) │            │    │
│  └────┬─────┘              └────┬─────┘            │    │
│       │                         │                  │    │
│       │ Success                 │ Timeout          │    │
│       │                         ▼                  │    │
│       │                   ┌──────────┐             │    │
│       └────────────────── │HALF-OPEN │ ────────────┘    │
│           Success         │ (Testing)│    Failure       │
│                           └──────────┘                  │
└─────────────────────────────────────────────────────────┘
\`\`\`

**Implementation:**
\`\`\`java
public class CircuitBreaker {
    private enum State { CLOSED, OPEN, HALF_OPEN }

    private State state = State.CLOSED;
    private int failureCount = 0;
    private int successCount = 0;
    private long lastFailureTime = 0;

    private final int failureThreshold = 5;
    private final int successThreshold = 3;
    private final long timeout = 30000; // 30 seconds

    public <T> T execute(Supplier<T> action, Supplier<T> fallback) {
        if (state == State.OPEN) {
            if (System.currentTimeMillis() - lastFailureTime > timeout) {
                state = State.HALF_OPEN;
            } else {
                return fallback.get();  // Fast fail
            }
        }

        try {
            T result = action.get();
            recordSuccess();
            return result;
        } catch (Exception e) {
            recordFailure();
            return fallback.get();
        }
    }

    private synchronized void recordSuccess() {
        if (state == State.HALF_OPEN) {
            successCount++;
            if (successCount >= successThreshold) {
                state = State.CLOSED;
                reset();
            }
        }
        failureCount = 0;
    }

    private synchronized void recordFailure() {
        failureCount++;
        lastFailureTime = System.currentTimeMillis();
        if (failureCount >= failureThreshold) {
            state = State.OPEN;
        }
    }

    private void reset() {
        failureCount = 0;
        successCount = 0;
    }
}

// Usage
CircuitBreaker breaker = new CircuitBreaker();

String result = breaker.execute(
    () -> externalService.call(),      // Primary action
    () -> "Fallback response"           // Fallback
);
\`\`\`

**Using Resilience4j:**
\`\`\`java
CircuitBreakerConfig config = CircuitBreakerConfig.custom()
    .failureRateThreshold(50)
    .waitDurationInOpenState(Duration.ofSeconds(30))
    .slidingWindowSize(10)
    .build();

CircuitBreaker circuitBreaker = CircuitBreaker.of("myService", config);

Supplier<String> decoratedSupplier = CircuitBreaker
    .decorateSupplier(circuitBreaker, () -> externalService.call());

Try<String> result = Try.ofSupplier(decoratedSupplier)
    .recover(throwable -> "Fallback");
\`\`\`

**When to Use:**
- Calling external services
- Database connections
- Third-party APIs
- Any operation prone to temporary failures`
        },
        {
          id: 2,
          question: "What is the difference between Abstract Factory and Factory Method patterns?",
          answer: `**Factory Method:**
- Creates ONE product
- Uses inheritance
- Client extends factory class

**Abstract Factory:**
- Creates FAMILIES of related products
- Uses composition
- Client uses factory interface

**Factory Method:**
\`\`\`java
// Creator with factory method
abstract class Dialog {
    // Factory method
    abstract Button createButton();

    public void render() {
        Button button = createButton();
        button.render();
    }
}

// Concrete creators
class WindowsDialog extends Dialog {
    Button createButton() {
        return new WindowsButton();
    }
}

class MacDialog extends Dialog {
    Button createButton() {
        return new MacButton();
    }
}

// Usage
Dialog dialog = new WindowsDialog();
dialog.render();
\`\`\`

**Abstract Factory:**
\`\`\`java
// Abstract factory
interface GUIFactory {
    Button createButton();
    Checkbox createCheckbox();
    TextField createTextField();
}

// Concrete factories
class WindowsFactory implements GUIFactory {
    public Button createButton() { return new WindowsButton(); }
    public Checkbox createCheckbox() { return new WindowsCheckbox(); }
    public TextField createTextField() { return new WindowsTextField(); }
}

class MacFactory implements GUIFactory {
    public Button createButton() { return new MacButton(); }
    public Checkbox createCheckbox() { return new MacCheckbox(); }
    public TextField createTextField() { return new MacTextField(); }
}

// Client uses factory
class Application {
    private Button button;
    private Checkbox checkbox;

    public Application(GUIFactory factory) {
        button = factory.createButton();
        checkbox = factory.createCheckbox();
    }
}

// Usage
GUIFactory factory = new WindowsFactory();
Application app = new Application(factory);
\`\`\`

**Comparison:**
| Aspect | Factory Method | Abstract Factory |
|--------|---------------|------------------|
| Products | One type | Family of related types |
| Extension | Subclass creator | New factory implementation |
| Complexity | Simpler | More complex |
| Use case | Single product variants | Multiple related products |`
        },
        {
          id: 3,
          question: "Explain the Chain of Responsibility Pattern.",
          answer: `The **Chain of Responsibility Pattern** passes a request along a chain of handlers until one handles it.

\`\`\`java
// Handler interface
abstract class SupportHandler {
    protected SupportHandler nextHandler;

    public void setNext(SupportHandler handler) {
        this.nextHandler = handler;
    }

    public abstract void handleRequest(SupportTicket ticket);
}

// Concrete handlers
class Level1Support extends SupportHandler {
    public void handleRequest(SupportTicket ticket) {
        if (ticket.getSeverity() == Severity.LOW) {
            System.out.println("Level 1 Support handling: " + ticket.getDescription());
        } else if (nextHandler != null) {
            nextHandler.handleRequest(ticket);
        }
    }
}

class Level2Support extends SupportHandler {
    public void handleRequest(SupportTicket ticket) {
        if (ticket.getSeverity() == Severity.MEDIUM) {
            System.out.println("Level 2 Support handling: " + ticket.getDescription());
        } else if (nextHandler != null) {
            nextHandler.handleRequest(ticket);
        }
    }
}

class Level3Support extends SupportHandler {
    public void handleRequest(SupportTicket ticket) {
        if (ticket.getSeverity() == Severity.HIGH) {
            System.out.println("Level 3 Support handling: " + ticket.getDescription());
        } else if (nextHandler != null) {
            nextHandler.handleRequest(ticket);
        } else {
            System.out.println("No handler available for: " + ticket.getDescription());
        }
    }
}

// Setup chain
SupportHandler level1 = new Level1Support();
SupportHandler level2 = new Level2Support();
SupportHandler level3 = new Level3Support();

level1.setNext(level2);
level2.setNext(level3);

// Usage
SupportTicket ticket = new SupportTicket("Server down", Severity.HIGH);
level1.handleRequest(ticket);  // Passed to Level 3
\`\`\`

**Modern Implementation (Functional):**
\`\`\`java
@FunctionalInterface
interface Handler<T> {
    Optional<T> handle(Request request);

    default Handler<T> andThen(Handler<T> next) {
        return request -> {
            Optional<T> result = this.handle(request);
            return result.isPresent() ? result : next.handle(request);
        };
    }
}

// Chain handlers
Handler<Response> chain = authHandler
    .andThen(validationHandler)
    .andThen(businessHandler);
\`\`\`

**Real-World Examples:**
- Servlet Filters
- Spring Security filter chain
- Logging frameworks
- Event handling (DOM events)`
        },
        {
          id: 4,
          question: "What is the Flyweight Pattern and when should you use it?",
          answer: `The **Flyweight Pattern** reduces memory usage by sharing common state between multiple objects.

**Key Concepts:**
- **Intrinsic State:** Shared, immutable data stored in flyweight
- **Extrinsic State:** Context-specific data passed to methods

\`\`\`java
// Flyweight interface
interface TreeType {
    void draw(int x, int y);  // Extrinsic state passed in
}

// Concrete flyweight (shared)
class ConcreteTreeType implements TreeType {
    // Intrinsic state (shared)
    private final String name;
    private final String color;
    private final byte[] texture;  // Large data

    public ConcreteTreeType(String name, String color, byte[] texture) {
        this.name = name;
        this.color = color;
        this.texture = texture;
    }

    public void draw(int x, int y) {  // x, y are extrinsic
        System.out.println("Drawing " + name + " tree at (" + x + ", " + y + ")");
    }
}

// Flyweight factory
class TreeFactory {
    private static Map<String, TreeType> treeTypes = new HashMap<>();

    public static TreeType getTreeType(String name, String color, byte[] texture) {
        String key = name + "_" + color;
        if (!treeTypes.containsKey(key)) {
            treeTypes.put(key, new ConcreteTreeType(name, color, texture));
            System.out.println("Creating new TreeType: " + key);
        }
        return treeTypes.get(key);
    }
}

// Client context
class Tree {
    private int x, y;  // Extrinsic state
    private TreeType type;  // Reference to shared flyweight

    public Tree(int x, int y, TreeType type) {
        this.x = x;
        this.y = y;
        this.type = type;
    }

    public void draw() {
        type.draw(x, y);
    }
}

// Forest with many trees
class Forest {
    private List<Tree> trees = new ArrayList<>();

    public void plantTree(int x, int y, String name, String color, byte[] texture) {
        TreeType type = TreeFactory.getTreeType(name, color, texture);
        Tree tree = new Tree(x, y, type);
        trees.add(tree);
    }
}

// Usage - 1 million trees, but only few TreeType objects
Forest forest = new Forest();
for (int i = 0; i < 1000000; i++) {
    forest.plantTree(random.nextInt(1000), random.nextInt(1000),
                     "Oak", "Green", oakTexture);
}
\`\`\`

**Memory Savings:**
\`\`\`
Without Flyweight: 1,000,000 trees × (texture + name + color + x + y)
With Flyweight:    1,000,000 trees × (x + y + reference) + few TreeTypes

Saving: Potentially hundreds of MB
\`\`\`

**Real-World Examples:**
- Java String pool
- Integer cache (-128 to 127)
- Font glyphs in text editors
- Game particle systems`
        },
        {
          id: 5,
          question: "Explain the Mediator Pattern.",
          answer: `The **Mediator Pattern** defines an object that encapsulates how a set of objects interact, promoting loose coupling.

\`\`\`java
// Mediator interface
interface ChatMediator {
    void sendMessage(String message, User sender);
    void addUser(User user);
}

// Concrete mediator
class ChatRoom implements ChatMediator {
    private List<User> users = new ArrayList<>();

    public void addUser(User user) {
        users.add(user);
    }

    public void sendMessage(String message, User sender) {
        for (User user : users) {
            // Don't send to sender
            if (user != sender) {
                user.receive(message, sender.getName());
            }
        }
    }
}

// Colleague
abstract class User {
    protected ChatMediator mediator;
    protected String name;

    public User(ChatMediator mediator, String name) {
        this.mediator = mediator;
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public abstract void send(String message);
    public abstract void receive(String message, String from);
}

// Concrete colleague
class ChatUser extends User {
    public ChatUser(ChatMediator mediator, String name) {
        super(mediator, name);
    }

    public void send(String message) {
        System.out.println(name + " sends: " + message);
        mediator.sendMessage(message, this);
    }

    public void receive(String message, String from) {
        System.out.println(name + " received from " + from + ": " + message);
    }
}

// Usage
ChatMediator chatRoom = new ChatRoom();

User alice = new ChatUser(chatRoom, "Alice");
User bob = new ChatUser(chatRoom, "Bob");
User charlie = new ChatUser(chatRoom, "Charlie");

chatRoom.addUser(alice);
chatRoom.addUser(bob);
chatRoom.addUser(charlie);

alice.send("Hello everyone!");
// Output:
// Alice sends: Hello everyone!
// Bob received from Alice: Hello everyone!
// Charlie received from Alice: Hello everyone!
\`\`\`

**Air Traffic Control Example:**
\`\`\`java
interface ATCMediator {
    void registerFlight(Flight flight);
    boolean requestLanding(Flight flight);
    void notifyDeparture(Flight flight);
}

class AirTrafficControl implements ATCMediator {
    private List<Flight> flights = new ArrayList<>();
    private boolean runwayClear = true;

    public boolean requestLanding(Flight flight) {
        if (runwayClear) {
            runwayClear = false;
            return true;
        }
        return false;
    }

    public void notifyDeparture(Flight flight) {
        runwayClear = true;
        // Notify waiting flights
    }
}
\`\`\`

**Benefits:**
- Reduces coupling between components
- Centralizes complex communication
- Easier to modify interaction logic
- Components are reusable

**Real-World Examples:**
- Chat applications
- Air traffic control
- GUI event handling
- Workflow engines`
        },
        {
          id: 6,
          question: "What is the Visitor Pattern and when should you use it?",
          answer: `The **Visitor Pattern** separates an algorithm from the object structure on which it operates.

\`\`\`java
// Element interface
interface Shape {
    void accept(ShapeVisitor visitor);
}

// Concrete elements
class Circle implements Shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    public double getRadius() {
        return radius;
    }

    public void accept(ShapeVisitor visitor) {
        visitor.visit(this);
    }
}

class Rectangle implements Shape {
    private double width, height;

    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    public double getWidth() { return width; }
    public double getHeight() { return height; }

    public void accept(ShapeVisitor visitor) {
        visitor.visit(this);
    }
}

// Visitor interface
interface ShapeVisitor {
    void visit(Circle circle);
    void visit(Rectangle rectangle);
}

// Concrete visitors
class AreaCalculator implements ShapeVisitor {
    private double totalArea = 0;

    public void visit(Circle circle) {
        totalArea += Math.PI * circle.getRadius() * circle.getRadius();
    }

    public void visit(Rectangle rectangle) {
        totalArea += rectangle.getWidth() * rectangle.getHeight();
    }

    public double getTotalArea() {
        return totalArea;
    }
}

class DrawingVisitor implements ShapeVisitor {
    public void visit(Circle circle) {
        System.out.println("Drawing circle with radius " + circle.getRadius());
    }

    public void visit(Rectangle rectangle) {
        System.out.println("Drawing rectangle " + rectangle.getWidth() + "x" + rectangle.getHeight());
    }
}

// Usage
List<Shape> shapes = Arrays.asList(
    new Circle(5),
    new Rectangle(4, 6),
    new Circle(3)
);

AreaCalculator calculator = new AreaCalculator();
for (Shape shape : shapes) {
    shape.accept(calculator);
}
System.out.println("Total area: " + calculator.getTotalArea());

DrawingVisitor drawer = new DrawingVisitor();
for (Shape shape : shapes) {
    shape.accept(drawer);
}
\`\`\`

**When to Use:**
- Operations on complex object structures (AST, DOM)
- Need to add new operations without changing classes
- Related operations should be kept together
- Classes are stable, operations change frequently

**Real-World Examples:**
- Compiler AST traversal
- Document export (PDF, HTML, XML)
- Tax calculation for different product types
- Report generation`
        },
        {
          id: 7,
          question: "Explain the difference between Bridge and Adapter patterns.",
          answer: `Both patterns involve abstraction from implementation, but serve different purposes:

**Adapter Pattern:**
- Converts existing interface to expected interface
- Works with existing classes
- Applied **after** design

\`\`\`java
// Existing interface
interface OldPrinter {
    void printOld(String text);
}

// Expected interface
interface NewPrinter {
    void print(String text);
}

// Adapter
class PrinterAdapter implements NewPrinter {
    private OldPrinter oldPrinter;

    public PrinterAdapter(OldPrinter oldPrinter) {
        this.oldPrinter = oldPrinter;
    }

    public void print(String text) {
        oldPrinter.printOld(text);  // Adapts call
    }
}
\`\`\`

**Bridge Pattern:**
- Separates abstraction from implementation
- Allows both to vary independently
- Applied **during** design

\`\`\`java
// Implementation hierarchy
interface DrawingAPI {
    void drawCircle(double x, double y, double radius);
}

class DrawingAPI1 implements DrawingAPI {
    public void drawCircle(double x, double y, double radius) {
        System.out.println("API1: Circle at " + x + "," + y);
    }
}

class DrawingAPI2 implements DrawingAPI {
    public void drawCircle(double x, double y, double radius) {
        System.out.println("API2: Circle at " + x + "," + y);
    }
}

// Abstraction hierarchy
abstract class Shape {
    protected DrawingAPI drawingAPI;  // Bridge to implementation

    protected Shape(DrawingAPI drawingAPI) {
        this.drawingAPI = drawingAPI;
    }

    abstract void draw();
}

class CircleShape extends Shape {
    private double x, y, radius;

    public CircleShape(double x, double y, double radius, DrawingAPI api) {
        super(api);
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    void draw() {
        drawingAPI.drawCircle(x, y, radius);
    }
}

// Usage - abstraction and implementation vary independently
Shape circle1 = new CircleShape(1, 2, 3, new DrawingAPI1());
Shape circle2 = new CircleShape(1, 2, 3, new DrawingAPI2());
circle1.draw();  // Uses API1
circle2.draw();  // Uses API2
\`\`\`

**Key Differences:**
| Aspect | Adapter | Bridge |
|--------|---------|--------|
| Purpose | Make incompatible interfaces work | Separate abstraction from implementation |
| Timing | After design (fix compatibility) | During design (enable flexibility) |
| Structure | Wraps one interface | Two hierarchies connected |
| Intent | Integration | Flexibility |`
        },
        {
          id: 8,
          question: "What are SOLID principles in design patterns?",
          answer: `**SOLID** is an acronym for five design principles that promote maintainable and flexible code:

**S - Single Responsibility Principle (SRP):**
A class should have only one reason to change.

\`\`\`java
// Bad - multiple responsibilities
class User {
    void saveToDatabase() { }
    void sendEmail() { }
    void generateReport() { }
}

// Good - single responsibility each
class User { }
class UserRepository { void save(User user) { } }
class EmailService { void sendEmail(User user) { } }
class ReportGenerator { void generateReport(User user) { } }
\`\`\`

**O - Open/Closed Principle (OCP):**
Open for extension, closed for modification.

\`\`\`java
// Bad - modify class to add shapes
class AreaCalculator {
    double calculate(Object shape) {
        if (shape instanceof Circle) { }
        else if (shape instanceof Rectangle) { }
        // Must modify to add new shapes
    }
}

// Good - extend without modification
interface Shape { double area(); }
class Circle implements Shape { double area() { return Math.PI * r * r; } }
class Rectangle implements Shape { double area() { return w * h; } }
// Add new shapes without changing existing code
\`\`\`

**L - Liskov Substitution Principle (LSP):**
Subtypes must be substitutable for their base types.

\`\`\`java
// Bad - Square breaks Rectangle behavior
class Rectangle {
    void setWidth(int w) { this.width = w; }
    void setHeight(int h) { this.height = h; }
}
class Square extends Rectangle {
    void setWidth(int w) { this.width = this.height = w; }
    void setHeight(int h) { this.width = this.height = h; }
}
// Client code expecting Rectangle behavior breaks

// Good - separate types
interface Shape { int area(); }
class Rectangle implements Shape { }
class Square implements Shape { }
\`\`\`

**I - Interface Segregation Principle (ISP):**
Clients shouldn't depend on interfaces they don't use.

\`\`\`java
// Bad - fat interface
interface Worker {
    void work();
    void eat();
    void sleep();
}
class Robot implements Worker {
    void eat() { } // Robot doesn't eat!
    void sleep() { } // Robot doesn't sleep!
}

// Good - segregated interfaces
interface Workable { void work(); }
interface Eatable { void eat(); }
interface Sleepable { void sleep(); }
class Robot implements Workable { void work() { } }
class Human implements Workable, Eatable, Sleepable { }
\`\`\`

**D - Dependency Inversion Principle (DIP):**
Depend on abstractions, not concretions.

\`\`\`java
// Bad - depends on concrete class
class UserService {
    private MySQLDatabase db = new MySQLDatabase();
}

// Good - depends on abstraction
class UserService {
    private Database db;
    UserService(Database db) { this.db = db; }
}
interface Database { }
class MySQLDatabase implements Database { }
class PostgresDatabase implements Database { }
\`\`\``
        },
        {
          id: 9,
          question: "How would you implement the Object Pool Pattern?",
          answer: `The **Object Pool Pattern** manages a pool of reusable objects to avoid expensive creation/destruction operations.

\`\`\`java
public class ObjectPool<T> {
    private final Queue<T> available = new ConcurrentLinkedQueue<>();
    private final Set<T> inUse = ConcurrentHashMap.newKeySet();
    private final Supplier<T> factory;
    private final Consumer<T> resetter;
    private final int maxSize;

    public ObjectPool(Supplier<T> factory, Consumer<T> resetter, int maxSize) {
        this.factory = factory;
        this.resetter = resetter;
        this.maxSize = maxSize;
    }

    public T acquire() {
        T obj = available.poll();
        if (obj == null) {
            if (inUse.size() < maxSize) {
                obj = factory.get();
            } else {
                throw new RuntimeException("Pool exhausted");
            }
        }
        inUse.add(obj);
        return obj;
    }

    public void release(T obj) {
        if (inUse.remove(obj)) {
            resetter.accept(obj);  // Reset to clean state
            available.offer(obj);
        }
    }

    public int availableCount() {
        return available.size();
    }

    public int inUseCount() {
        return inUse.size();
    }
}

// Usage with database connections
ObjectPool<Connection> connectionPool = new ObjectPool<>(
    () -> DriverManager.getConnection(url),  // Factory
    connection -> {                           // Resetter
        connection.setAutoCommit(true);
        // Reset connection state
    },
    10  // Max pool size
);

Connection conn = connectionPool.acquire();
try {
    // Use connection
} finally {
    connectionPool.release(conn);
}
\`\`\`

**Thread-Safe Pool with Blocking:**
\`\`\`java
public class BlockingObjectPool<T> {
    private final BlockingQueue<T> pool;
    private final Supplier<T> factory;

    public BlockingObjectPool(int size, Supplier<T> factory) {
        this.pool = new ArrayBlockingQueue<>(size);
        this.factory = factory;

        // Pre-populate pool
        for (int i = 0; i < size; i++) {
            pool.offer(factory.get());
        }
    }

    public T acquire() throws InterruptedException {
        return pool.take();  // Blocks if empty
    }

    public T acquire(long timeout, TimeUnit unit) throws InterruptedException {
        return pool.poll(timeout, unit);  // Returns null on timeout
    }

    public void release(T obj) {
        pool.offer(obj);
    }
}
\`\`\`

**Use Cases:**
- Database connection pools
- Thread pools
- Socket connections
- Expensive-to-create objects (parsers, regex patterns)

**Benefits:**
- Reduces GC pressure
- Improves performance
- Controls resource usage`
        },
        {
          id: 10,
          question: "Explain the Event Sourcing pattern.",
          answer: `**Event Sourcing** stores the state of an entity as a sequence of state-changing events, rather than the current state.

\`\`\`java
// Event base
abstract class Event {
    private final String aggregateId;
    private final LocalDateTime timestamp;
    private final int version;

    protected Event(String aggregateId, int version) {
        this.aggregateId = aggregateId;
        this.timestamp = LocalDateTime.now();
        this.version = version;
    }
}

// Domain events
class AccountCreatedEvent extends Event {
    private final String owner;
    private final BigDecimal initialBalance;
}

class MoneyDepositedEvent extends Event {
    private final BigDecimal amount;
}

class MoneyWithdrawnEvent extends Event {
    private final BigDecimal amount;
}

// Aggregate
class BankAccount {
    private String id;
    private String owner;
    private BigDecimal balance;
    private int version;
    private List<Event> changes = new ArrayList<>();

    // Reconstruct from events
    public static BankAccount fromEvents(List<Event> events) {
        BankAccount account = new BankAccount();
        for (Event event : events) {
            account.apply(event, false);
        }
        return account;
    }

    // Apply event to state
    private void apply(Event event, boolean isNew) {
        if (event instanceof AccountCreatedEvent e) {
            this.id = e.getAggregateId();
            this.owner = e.getOwner();
            this.balance = e.getInitialBalance();
        } else if (event instanceof MoneyDepositedEvent e) {
            this.balance = this.balance.add(e.getAmount());
        } else if (event instanceof MoneyWithdrawnEvent e) {
            this.balance = this.balance.subtract(e.getAmount());
        }

        this.version = event.getVersion();
        if (isNew) {
            changes.add(event);
        }
    }

    // Commands produce events
    public void deposit(BigDecimal amount) {
        if (amount.compareTo(BigDecimal.ZERO) <= 0) {
            throw new IllegalArgumentException("Amount must be positive");
        }
        apply(new MoneyDepositedEvent(id, version + 1, amount), true);
    }

    public void withdraw(BigDecimal amount) {
        if (amount.compareTo(balance) > 0) {
            throw new InsufficientFundsException();
        }
        apply(new MoneyWithdrawnEvent(id, version + 1, amount), true);
    }

    public List<Event> getUncommittedChanges() {
        return new ArrayList<>(changes);
    }
}

// Event Store
interface EventStore {
    void save(String aggregateId, List<Event> events, int expectedVersion);
    List<Event> load(String aggregateId);
}

// Repository
class BankAccountRepository {
    private final EventStore eventStore;

    public BankAccount findById(String id) {
        List<Event> events = eventStore.load(id);
        return BankAccount.fromEvents(events);
    }

    public void save(BankAccount account) {
        eventStore.save(
            account.getId(),
            account.getUncommittedChanges(),
            account.getVersion()
        );
    }
}
\`\`\`

**Benefits:**
- Complete audit trail
- Time-travel debugging
- Event replay for projections
- Easy undo/redo

**Considerations:**
- More complex than CRUD
- Event schema evolution
- Storage growth (use snapshots)
- Eventually consistent projections`
        },
        {
          id: 11,
          question: "What is the Repository Pattern and how does it differ from DAO?",
          answer: `**Repository Pattern:**
- Domain-centric abstraction
- Works with aggregate roots
- Encapsulates query logic
- Part of Domain-Driven Design

**DAO (Data Access Object):**
- Data-centric abstraction
- Works with database tables
- CRUD operations
- Traditional pattern

\`\`\`java
// DAO - table-centric
interface UserDAO {
    void insert(UserEntity user);
    void update(UserEntity user);
    void delete(int id);
    UserEntity findById(int id);
    List<UserEntity> findAll();
}

class UserDAOImpl implements UserDAO {
    public UserEntity findById(int id) {
        return jdbcTemplate.queryForObject(
            "SELECT * FROM users WHERE id = ?",
            new UserRowMapper(), id);
    }
}

// Repository - domain-centric
interface UserRepository {
    Optional<User> findById(UserId id);
    Optional<User> findByEmail(Email email);
    List<User> findActiveUsers();
    void save(User user);
    void delete(User user);
}

class JpaUserRepository implements UserRepository {
    private final EntityManager em;

    public Optional<User> findById(UserId id) {
        // Returns domain object, not entity
        UserEntity entity = em.find(UserEntity.class, id.getValue());
        return Optional.ofNullable(entity).map(this::toDomain);
    }

    public List<User> findActiveUsers() {
        // Encapsulates complex query logic
        return em.createQuery(
            "SELECT u FROM UserEntity u WHERE u.status = :status AND u.lastLogin > :date",
            UserEntity.class)
            .setParameter("status", "ACTIVE")
            .setParameter("date", thirtyDaysAgo())
            .getResultList()
            .stream()
            .map(this::toDomain)
            .collect(toList());
    }

    private User toDomain(UserEntity entity) {
        return new User(
            new UserId(entity.getId()),
            new Email(entity.getEmail()),
            entity.getName()
        );
    }
}
\`\`\`

**Key Differences:**
| Aspect | DAO | Repository |
|--------|-----|------------|
| Focus | Database operations | Domain model |
| Returns | Entities (DB structure) | Domain objects |
| Queries | Generic CRUD | Domain-specific |
| Abstraction | Data layer | Domain layer |
| Complexity | Lower | Higher |

**When to Use:**
- **DAO:** Simple CRUD apps, direct database mapping
- **Repository:** Domain-driven design, complex business logic, multiple data sources`
        },
        {
          id: 12,
          question: "Explain the Specification Pattern.",
          answer: `The **Specification Pattern** encapsulates business rules into reusable, combinable objects.

\`\`\`java
// Specification interface
interface Specification<T> {
    boolean isSatisfiedBy(T item);

    default Specification<T> and(Specification<T> other) {
        return item -> this.isSatisfiedBy(item) && other.isSatisfiedBy(item);
    }

    default Specification<T> or(Specification<T> other) {
        return item -> this.isSatisfiedBy(item) || other.isSatisfiedBy(item);
    }

    default Specification<T> not() {
        return item -> !this.isSatisfiedBy(item);
    }
}

// Domain model
class Product {
    private String name;
    private BigDecimal price;
    private String category;
    private int stock;
    // getters...
}

// Concrete specifications
class PriceSpecification implements Specification<Product> {
    private final BigDecimal minPrice;
    private final BigDecimal maxPrice;

    public PriceSpecification(BigDecimal min, BigDecimal max) {
        this.minPrice = min;
        this.maxPrice = max;
    }

    public boolean isSatisfiedBy(Product product) {
        return product.getPrice().compareTo(minPrice) >= 0
            && product.getPrice().compareTo(maxPrice) <= 0;
    }
}

class CategorySpecification implements Specification<Product> {
    private final String category;

    public CategorySpecification(String category) {
        this.category = category;
    }

    public boolean isSatisfiedBy(Product product) {
        return category.equals(product.getCategory());
    }
}

class InStockSpecification implements Specification<Product> {
    public boolean isSatisfiedBy(Product product) {
        return product.getStock() > 0;
    }
}

// Usage
Specification<Product> affordableElectronics =
    new PriceSpecification(BigDecimal.ZERO, new BigDecimal("500"))
        .and(new CategorySpecification("Electronics"))
        .and(new InStockSpecification());

List<Product> filtered = products.stream()
    .filter(affordableElectronics::isSatisfiedBy)
    .collect(toList());

// Dynamic query building
Specification<Product> spec = new InStockSpecification();
if (maxPrice != null) {
    spec = spec.and(new PriceSpecification(BigDecimal.ZERO, maxPrice));
}
if (category != null) {
    spec = spec.and(new CategorySpecification(category));
}
\`\`\`

**With JPA (Query Specification):**
\`\`\`java
// Spring Data JPA Specification
public class ProductSpecifications {

    public static Specification<Product> hasCategory(String category) {
        return (root, query, cb) ->
            cb.equal(root.get("category"), category);
    }

    public static Specification<Product> priceBetween(BigDecimal min, BigDecimal max) {
        return (root, query, cb) ->
            cb.between(root.get("price"), min, max);
    }

    public static Specification<Product> inStock() {
        return (root, query, cb) ->
            cb.greaterThan(root.get("stock"), 0);
    }
}

// Usage with repository
List<Product> products = productRepository.findAll(
    hasCategory("Electronics")
        .and(priceBetween(0, 500))
        .and(inStock())
);
\`\`\`

**Benefits:**
- Reusable business rules
- Combinable with AND/OR/NOT
- Testable in isolation
- Declarative query building`
        },
        {
          id: 13,
          question: "What is the Null Object Pattern?",
          answer: `The **Null Object Pattern** provides a default object instead of null references, eliminating null checks.

\`\`\`java
// Interface
interface Logger {
    void log(String message);
    void error(String message);
}

// Real implementation
class ConsoleLogger implements Logger {
    public void log(String message) {
        System.out.println("[LOG] " + message);
    }

    public void error(String message) {
        System.err.println("[ERROR] " + message);
    }
}

// Null object - does nothing
class NullLogger implements Logger {
    public void log(String message) {
        // Do nothing
    }

    public void error(String message) {
        // Do nothing
    }
}

// Usage - no null checks needed
class Application {
    private final Logger logger;

    public Application(Logger logger) {
        // Never null - use NullLogger if logging disabled
        this.logger = logger != null ? logger : new NullLogger();
    }

    public void process() {
        logger.log("Processing started");  // Safe - no null check
        // ...
        logger.log("Processing completed");
    }
}
\`\`\`

**Customer Example:**
\`\`\`java
interface Customer {
    String getName();
    boolean isVIP();
    void applyDiscount(Order order);
}

class RealCustomer implements Customer {
    private String name;
    private boolean vip;

    public String getName() { return name; }
    public boolean isVIP() { return vip; }
    public void applyDiscount(Order order) {
        if (vip) {
            order.applyDiscount(0.1);
        }
    }
}

// Null object for guest/anonymous
class NullCustomer implements Customer {
    public String getName() { return "Guest"; }
    public boolean isVIP() { return false; }
    public void applyDiscount(Order order) { /* No discount */ }
}

// Repository
class CustomerRepository {
    public Customer findById(Long id) {
        Customer customer = database.find(id);
        return customer != null ? customer : new NullCustomer();
    }
}

// Client code - no null checks
Customer customer = repository.findById(customerId);
System.out.println("Hello, " + customer.getName());  // Works for null case
customer.applyDiscount(order);  // Safe call
\`\`\`

**With Optional (Modern Java):**
\`\`\`java
Optional<Customer> customerOpt = repository.findByIdOptional(id);

// Provide default behavior
Customer customer = customerOpt.orElse(new NullCustomer());

// Or use Optional methods
String name = customerOpt
    .map(Customer::getName)
    .orElse("Guest");
\`\`\`

**Benefits:**
- Eliminates null checks
- Cleaner code
- Prevents NullPointerException
- Follows Tell, Don't Ask principle

**When to Use:**
- Default behavior is meaningful
- Null checks scattered throughout code
- Strategy/State patterns with optional behavior`
        },
        {
          id: 14,
          question: "Explain the Prototype Pattern with deep copy considerations.",
          answer: `The **Prototype Pattern** creates new objects by copying existing ones (prototypes).

\`\`\`java
// Prototype interface
interface Prototype<T> {
    T clone();
}

// Complex object
class Document implements Prototype<Document> {
    private String title;
    private List<Page> pages;
    private Map<String, String> metadata;
    private Author author;

    public Document() {
        this.pages = new ArrayList<>();
        this.metadata = new HashMap<>();
    }

    // Copy constructor for deep copy
    public Document(Document source) {
        this.title = source.title;  // String is immutable - safe to share

        // Deep copy list
        this.pages = new ArrayList<>();
        for (Page page : source.pages) {
            this.pages.add(new Page(page));  // Deep copy each page
        }

        // Deep copy map
        this.metadata = new HashMap<>(source.metadata);

        // Deep copy mutable object
        this.author = new Author(source.author);
    }

    @Override
    public Document clone() {
        return new Document(this);
    }
}

class Page implements Prototype<Page> {
    private String content;
    private List<Image> images;

    public Page(Page source) {
        this.content = source.content;
        this.images = source.images.stream()
            .map(Image::clone)
            .collect(Collectors.toList());
    }

    @Override
    public Page clone() {
        return new Page(this);
    }
}
\`\`\`

**Prototype Registry:**
\`\`\`java
class DocumentRegistry {
    private Map<String, Document> prototypes = new HashMap<>();

    public void register(String key, Document prototype) {
        prototypes.put(key, prototype);
    }

    public Document create(String key) {
        Document prototype = prototypes.get(key);
        if (prototype == null) {
            throw new IllegalArgumentException("Unknown prototype: " + key);
        }
        return prototype.clone();
    }
}

// Usage
DocumentRegistry registry = new DocumentRegistry();
registry.register("report", createReportTemplate());
registry.register("invoice", createInvoiceTemplate());

Document newReport = registry.create("report");
\`\`\`

**Deep Copy with Serialization:**
\`\`\`java
@SuppressWarnings("unchecked")
public static <T extends Serializable> T deepCopy(T object) {
    try {
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ObjectOutputStream oos = new ObjectOutputStream(baos);
        oos.writeObject(object);

        ByteArrayInputStream bais = new ByteArrayInputStream(baos.toByteArray());
        ObjectInputStream ois = new ObjectInputStream(bais);
        return (T) ois.readObject();
    } catch (Exception e) {
        throw new RuntimeException("Deep copy failed", e);
    }
}
\`\`\`

**Shallow vs Deep Copy:**
\`\`\`
Shallow Copy:
Original: [title, pages ─────────┐, author ─────────┐]
                                 │                  │
Clone:    [title, pages ─────────┘, author ─────────┘]
                                 ▲                  ▲
                            Same references

Deep Copy:
Original: [title, pages → [P1, P2], author → A1]
Clone:    [title, pages → [P1', P2'], author → A1']
                            ▲                  ▲
                      Independent copies
\`\`\`

**When to Use:**
- Object creation is expensive
- Complex object initialization
- Need many similar objects
- Runtime object configuration`
        },
        {
          id: 15,
          question: "How do design patterns apply to microservices architecture?",
          answer: `Design patterns adapted for distributed systems:

**1. API Gateway Pattern:**
\`\`\`
Client ──→ API Gateway ──→ Service A
              │ ──────────→ Service B
              │ ──────────→ Service C

- Single entry point
- Authentication/Authorization
- Rate limiting
- Request routing
\`\`\`

**2. Circuit Breaker (Resilience):**
\`\`\`java
@Service
public class PaymentService {
    @CircuitBreaker(name = "payment", fallbackMethod = "fallback")
    public PaymentResult process(Payment payment) {
        return externalPaymentGateway.charge(payment);
    }

    public PaymentResult fallback(Payment payment, Exception e) {
        return PaymentResult.pending("Service unavailable, queued for retry");
    }
}
\`\`\`

**3. Saga Pattern (Distributed Transactions):**
\`\`\`
Order Saga:
1. Create Order ──→ 2. Reserve Inventory ──→ 3. Process Payment ──→ 4. Ship Order
       │                    │                      │
       ↓                    ↓                      ↓
   Cancel Order ←── Release Inventory ←──── Refund Payment (Compensating)
\`\`\`

**4. Sidecar Pattern:**
\`\`\`
┌────────────────────────────┐
│          Pod               │
│  ┌──────────┐ ┌──────────┐ │
│  │ Service  │ │ Sidecar  │ │
│  │ (Main)   │ │ (Proxy)  │ │
│  └──────────┘ └──────────┘ │
└────────────────────────────┘
- Service mesh (Istio, Linkerd)
- Logging, monitoring
- Security
\`\`\`

**5. CQRS (Command Query Responsibility Segregation):**
\`\`\`
Commands ──→ Write Model ──→ Event Store
                                  │
                                  ↓
Queries  ←── Read Model  ←── Projections
\`\`\`

**6. Event-Driven Architecture:**
\`\`\`java
@Service
public class OrderService {
    @Transactional
    public void createOrder(Order order) {
        orderRepository.save(order);
        eventPublisher.publish(new OrderCreatedEvent(order));
    }
}

@Service
public class InventoryService {
    @EventListener
    public void handle(OrderCreatedEvent event) {
        inventoryRepository.reserve(event.getItems());
    }
}
\`\`\`

**7. Bulkhead Pattern (Isolation):**
\`\`\`java
@Bulkhead(name = "criticalService", maxConcurrentCalls = 10)
public Result criticalOperation() {
    return criticalService.call();
}

// Separate thread pools for different services
ExecutorService criticalPool = Executors.newFixedThreadPool(10);
ExecutorService normalPool = Executors.newFixedThreadPool(50);
\`\`\`

**8. Strangler Fig Pattern (Migration):**
\`\`\`
Phase 1: [Monolith] ←── all traffic

Phase 2: [Monolith] ←── some traffic
         [New Service] ←── migrated features

Phase 3: [New Services] ←── all traffic
         [Monolith retired]
\`\`\`

**Pattern Selection Guide:**
| Problem | Pattern |
|---------|---------|
| Single entry point | API Gateway |
| Cascading failures | Circuit Breaker |
| Distributed transactions | Saga |
| Cross-cutting concerns | Sidecar |
| Read/Write scaling | CQRS |
| Loose coupling | Event-Driven |
| Resource isolation | Bulkhead |
| Legacy migration | Strangler Fig |`
        },
        {
          id: 16,
          question: "What is the difference between Factory Method and Abstract Factory in practice?",
          answer: `**Factory Method**
- creates one product through overridden creation logic

**Abstract Factory**
- creates a family of related products

Practical shortcut:
- Factory Method = one product type
- Abstract Factory = multiple related product types`
        },
        {
          id: 17,
          question: "How do you decide between Strategy, State, and Template Method?",
          answer: `Use:
- **Strategy** when behavior should be selected from outside
- **State** when behavior changes with internal state transitions
- **Template Method** when the algorithm structure is fixed but some steps vary

This is a common experienced question because the patterns can look similar superficially.`
        },
        {
          id: 18,
          question: "Why is Singleton often considered an anti-pattern?",
          answer: `Singleton can become problematic because it:
- introduces global state
- hides dependencies
- makes testing harder
- increases coupling

It is not always wrong, but a senior answer should explain tradeoffs, not just implementation details.`
        },
        {
          id: 19,
          question: "What is the Dependency Inversion Principle and how do patterns support it?",
          answer: `**Dependency Inversion Principle** says high-level modules should depend on abstractions, not concrete implementations.

Patterns that support it include:
- Dependency Injection
- Factory
- Strategy
- Repository

This principle is central to maintainable object-oriented design.`
        },
        {
          id: 20,
          question: "How do you refactor toward patterns without overengineering?",
          answer: `A practical approach:
1. identify repeated pain points
2. introduce abstraction only where variation is real
3. refactor incrementally
4. verify the pattern reduces duplication or coupling

The mistake is applying patterns preemptively without a real problem.`
        },
        {
          id: 21,
          question: "What is the difference between Decorator and inheritance for extending behavior?",
          answer: `Inheritance extends behavior through subclassing.
Decorator extends behavior at runtime by wrapping objects.

Decorator is often better when:
- combinations of behavior vary
- runtime flexibility matters
- subclass explosion would be a problem`
        },
        {
          id: 22,
          question: "What is the Strangler Fig pattern and when would you use it?",
          answer: `The **Strangler Fig pattern** gradually replaces parts of a legacy system with new services or modules.

Use it when:
- a full rewrite is too risky
- migration must happen incrementally
- old and new systems need to coexist temporarily

It is a common modernization interview topic.`
        },
        {
          id: 23,
          question: "What is the CQRS pattern and what tradeoffs does it introduce?",
          answer: `**CQRS** separates command operations from query operations.

Benefits:
- read and write models can be optimized separately
- scaling can be specialized

Tradeoffs:
- more moving parts
- eventual consistency
- more operational complexity`
        },
        {
          id: 24,
          question: "What is the Event-Driven pattern and when does it become problematic?",
          answer: `Event-driven systems improve decoupling, but can become problematic when:
- event contracts are poorly governed
- ordering assumptions are implicit
- tracing is weak
- retries and duplicates are not handled well

A good answer includes both benefits and operational costs.`
        },
        {
          id: 25,
          question: "What is the Unit of Work pattern?",
          answer: `The **Unit of Work pattern** tracks changes to objects during a business transaction and coordinates writing them together.

It helps with:
- batching persistence changes
- transaction consistency
- change tracking

Many ORMs implement this pattern internally.`
        },
        {
          id: 26,
          question: "What is the difference between Repository and DAO?",
          answer: `**DAO**
- focuses on data access operations
- is closer to persistence details

**Repository**
- represents a collection of domain objects
- usually sits closer to the domain layer

Interviewers often use this to test architectural clarity.`
        },
        {
          id: 27,
          question: "What is the Specification pattern and when is it useful?",
          answer: `The **Specification pattern** encapsulates business rules or query criteria into reusable objects.

It is useful when:
- filtering logic becomes complex
- rules need composition
- the same criteria are reused in many places`
        },
        {
          id: 28,
          question: "How do patterns improve testability?",
          answer: `Patterns can improve testability by:
- reducing direct concrete dependencies
- isolating responsibilities
- making components easier to mock or stub
- separating cross-cutting concerns

Examples:
- Strategy isolates algorithms
- DI allows dependency replacement
- Factory centralizes object creation`
        },
        {
          id: 29,
          question: "How do design patterns show up in frameworks like Spring or React?",
          answer: `Examples:
- Spring uses Dependency Injection, Proxy, Template Method
- React patterns often include composition, observer-like updates, and container/presentational separation
- ORMs use Repository and Unit of Work concepts

This question checks whether you can connect textbook patterns to real systems.`
        },
        {
          id: 30,
          question: "How do you explain design patterns in an interview without sounding memorized?",
          answer: `A strong structure is:
1. explain the problem
2. describe the pattern intent
3. show the basic structure
4. give a practical example
5. mention tradeoffs

Experienced interviewers usually care more about when and why to use a pattern than textbook definitions alone.`
        }
      ]
    }
  ]
};
