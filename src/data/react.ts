import { Category } from "./types";

export const reactCategory: Category = {
  id: "react",
  name: "React",
  subtitle: "Interview Questions",
  icon: "react",
  color: "#61dafb",
  sections: [
    {
      title: "React Interview Questions for Freshers and Intermediate Levels",
      questions: [
        {
          id: 1,
          question: "What is React and what are its main features?",
          answer: `**React** is a JavaScript library for building user interfaces, developed by Facebook.

**Main Features:**

**1. Virtual DOM**
- In-memory representation of real DOM
- Efficient diffing algorithm
- Batched updates for performance

**2. Component-Based Architecture**
\`\`\`jsx
function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}
\`\`\`

**3. JSX (JavaScript XML)**
\`\`\`jsx
const element = <h1 className="title">Hello World</h1>;
\`\`\`

**4. Unidirectional Data Flow**
\`\`\`
Parent → Props → Child
           ↑
      State changes
\`\`\`

**5. Declarative UI**
\`\`\`jsx
// Declare what you want
{isLoggedIn && <Dashboard />}
\`\`\`

**Benefits:**
- Reusable components
- Fast rendering with Virtual DOM
- Strong ecosystem
- Large community support
- React Native for mobile`
        },
        {
          id: 2,
          question: "What is the difference between functional and class components?",
          answer: `**Functional Components:**
- JavaScript functions that return JSX
- Simpler syntax
- Use Hooks for state and lifecycle

\`\`\`jsx
function Greeting({ name }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
\`\`\`

**Class Components:**
- ES6 classes extending React.Component
- Use \`this.state\` and lifecycle methods

\`\`\`jsx
class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidUpdate() {
    document.title = \`Count: \${this.state.count}\`;
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}!</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}
\`\`\`

**Comparison:**
| Feature | Functional | Class |
|---------|------------|-------|
| Syntax | Function | ES6 Class |
| State | useState Hook | this.state |
| Lifecycle | useEffect Hook | Lifecycle methods |
| \`this\` keyword | Not used | Required |
| Performance | Slightly better | Slightly more overhead |

**Modern React (16.8+) prefers functional components with Hooks.**`
        },
        {
          id: 3,
          question: "What is JSX and why is it used in React?",
          answer: `**JSX (JavaScript XML)** is a syntax extension that allows writing HTML-like code in JavaScript.

\`\`\`jsx
// JSX
const element = <h1 className="title">Hello, World!</h1>;

// Compiles to:
const element = React.createElement(
  'h1',
  { className: 'title' },
  'Hello, World!'
);
\`\`\`

**Why Use JSX:**

**1. Familiar Syntax**
\`\`\`jsx
// Looks like HTML
<div className="container">
  <Header />
  <Content />
</div>
\`\`\`

**2. JavaScript Expressions**
\`\`\`jsx
const name = "John";
const element = <h1>Hello, {name}!</h1>;

// Conditional rendering
{isLoggedIn && <UserDashboard />}
{error ? <Error message={error} /> : <Success />}
\`\`\`

**3. Type Safety**
Compile-time error checking for invalid HTML attributes.

**JSX Rules:**
\`\`\`jsx
// 1. Return single root element
return (
  <div>
    <h1>Title</h1>
    <p>Content</p>
  </div>
);

// 2. Use className instead of class
<div className="container" />

// 3. Use camelCase for attributes
<input onClick={handleClick} tabIndex={1} />

// 4. Close all tags
<img src="image.jpg" />
<br />

// 5. Comments in curly braces
{/* This is a comment */}
\`\`\``
        },
        {
          id: 4,
          question: "What are React Fragments and when should you use them?",
          answer: `**React Fragments** allow grouping multiple elements without adding extra DOM nodes.

**Problem Without Fragments:**
\`\`\`jsx
// This adds unnecessary <div> to DOM
function Table() {
  return (
    <div>  {/* Extra wrapper */}
      <td>Cell 1</td>
      <td>Cell 2</td>
    </div>
  );
}
// Invalid HTML: <div> inside <tr>
\`\`\`

**Solution With Fragments:**
\`\`\`jsx
// Long syntax
function Table() {
  return (
    <React.Fragment>
      <td>Cell 1</td>
      <td>Cell 2</td>
    </React.Fragment>
  );
}

// Short syntax (preferred)
function Table() {
  return (
    <>
      <td>Cell 1</td>
      <td>Cell 2</td>
    </>
  );
}
\`\`\`

**When to Use Fragments:**

**1. Returning Multiple Elements:**
\`\`\`jsx
function UserInfo({ user }) {
  return (
    <>
      <dt>Name</dt>
      <dd>{user.name}</dd>
      <dt>Email</dt>
      <dd>{user.email}</dd>
    </>
  );
}
\`\`\`

**2. With Keys (in lists):**
\`\`\`jsx
function Items({ items }) {
  return items.map(item => (
    <React.Fragment key={item.id}>
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </React.Fragment>
  ));
}
// Note: Short syntax <> doesn't support keys
\`\`\`

**3. Conditional Rendering:**
\`\`\`jsx
function Greeting({ isLoggedIn }) {
  return (
    <>
      <Header />
      {isLoggedIn ? (
        <>
          <WelcomeMessage />
          <Dashboard />
        </>
      ) : (
        <LoginForm />
      )}
      <Footer />
    </>
  );
}
\`\`\`

**Benefits:**
- No extra DOM nodes
- Cleaner HTML output
- Better performance
- Required for valid HTML structure (tables, lists)`
        },
        {
          id: 5,
          question: "What is the Virtual DOM and how does it work?",
          answer: `**Virtual DOM** is a lightweight JavaScript representation of the real DOM.

**How It Works:**

\`\`\`
State Change → New Virtual DOM → Diff with Previous → Update Real DOM
\`\`\`

**Step-by-Step Process:**

**1. Initial Render:**
\`\`\`jsx
// Component
function Counter() {
  const [count, setCount] = useState(0);
  return <div>Count: {count}</div>;
}

// Virtual DOM created
{ type: 'div', props: { children: 'Count: 0' } }
\`\`\`

**2. State Update:**
\`\`\`jsx
setCount(1);

// New Virtual DOM created
{ type: 'div', props: { children: 'Count: 1' } }
\`\`\`

**3. Diffing (Reconciliation):**
\`\`\`
Old: { type: 'div', props: { children: 'Count: 0' } }
New: { type: 'div', props: { children: 'Count: 1' } }

Diff: Only text content changed
\`\`\`

**4. Patch Real DOM:**
\`\`\`javascript
// Only the text node is updated
textNode.textContent = 'Count: 1';
\`\`\`

**Benefits:**

**1. Performance:**
- Batch multiple updates
- Minimize DOM manipulation
- Efficient diffing algorithm

**2. Abstraction:**
- Declarative programming
- Platform independence (React Native)

**Diffing Algorithm Rules:**
1. Different element types → Rebuild subtree
2. Same type → Update attributes
3. Keys help identify moved elements

\`\`\`jsx
// Keys help React identify which items changed
{items.map(item => (
  <li key={item.id}>{item.name}</li>
))}
\`\`\``
        },
        {
          id: 6,
          question: "What are props and state in React?",
          answer: `**Props (Properties):**
- Passed from parent to child
- Read-only (immutable)
- Used for component configuration

\`\`\`jsx
// Parent passing props
function App() {
  return <Greeting name="John" age={25} />;
}

// Child receiving props
function Greeting({ name, age }) {
  return <p>Hello, {name}! You are {age} years old.</p>;
}
\`\`\`

**State:**
- Managed within component
- Mutable (via setState/useState)
- Triggers re-render on change

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
\`\`\`

**Comparison:**
| Props | State |
|-------|-------|
| Passed from parent | Managed internally |
| Immutable | Mutable |
| Configure component | Dynamic data |
| Flow down | Local to component |

**Data Flow:**
\`\`\`jsx
function Parent() {
  const [user, setUser] = useState({ name: 'John' });

  // State passed down as props
  return <Child user={user} onUpdate={setUser} />;
}

function Child({ user, onUpdate }) {
  // Receives props, calls parent's function
  return (
    <button onClick={() => onUpdate({ name: 'Jane' })}>
      Change to Jane (Current: {user.name})
    </button>
  );
}
\`\`\``
        },
        {
          id: 7,
          question: "Explain the useState Hook.",
          answer: `**useState** is a Hook that lets you add state to functional components.

**Basic Syntax:**
\`\`\`jsx
const [state, setState] = useState(initialValue);
\`\`\`

**Simple Examples:**
\`\`\`jsx
// Number
const [count, setCount] = useState(0);

// String
const [name, setName] = useState('');

// Boolean
const [isVisible, setIsVisible] = useState(false);

// Array
const [items, setItems] = useState([]);

// Object
const [user, setUser] = useState({ name: '', email: '' });
\`\`\`

**Updating State:**
\`\`\`jsx
// Direct value
setCount(5);

// Based on previous state (use callback)
setCount(prevCount => prevCount + 1);

// Updating objects (spread operator)
setUser(prevUser => ({
  ...prevUser,
  name: 'John'
}));

// Updating arrays
setItems(prevItems => [...prevItems, newItem]);  // Add
setItems(prevItems => prevItems.filter(item => item.id !== id));  // Remove
setItems(prevItems => prevItems.map(item =>
  item.id === id ? { ...item, done: true } : item
));  // Update
\`\`\`

**Lazy Initialization:**
\`\`\`jsx
// For expensive computations
const [data, setData] = useState(() => {
  return computeExpensiveValue();
});
\`\`\`

**Multiple State Variables:**
\`\`\`jsx
function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);

  // Or use object state
  const [form, setForm] = useState({
    name: '',
    email: '',
    age: 0
  });
}
\`\`\`

**Important Notes:**
- State updates are asynchronous
- State updates trigger re-render
- Use functional updates when new state depends on previous`
        },
        {
          id: 8,
          question: "Explain the useEffect Hook.",
          answer: `**useEffect** handles side effects in functional components (data fetching, subscriptions, DOM manipulation).

**Basic Syntax:**
\`\`\`jsx
useEffect(() => {
  // Side effect code
  return () => {
    // Cleanup (optional)
  };
}, [dependencies]);
\`\`\`

**Dependency Array Patterns:**

**1. Run on every render:**
\`\`\`jsx
useEffect(() => {
  console.log('Runs on every render');
});
\`\`\`

**2. Run once on mount:**
\`\`\`jsx
useEffect(() => {
  console.log('Runs once on mount');
}, []);  // Empty array
\`\`\`

**3. Run when dependencies change:**
\`\`\`jsx
useEffect(() => {
  console.log(\`Count changed to: \${count}\`);
}, [count]);  // Runs when count changes
\`\`\`

**Practical Examples:**

**Data Fetching:**
\`\`\`jsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      const response = await fetch(\`/api/users/\${userId}\`);
      const data = await response.json();
      setUser(data);
      setLoading(false);
    }
    fetchUser();
  }, [userId]);  // Re-fetch when userId changes

  if (loading) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}
\`\`\`

**Event Listeners (with cleanup):**
\`\`\`jsx
useEffect(() => {
  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  window.addEventListener('resize', handleResize);

  // Cleanup function
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
\`\`\`

**Document Title:**
\`\`\`jsx
useEffect(() => {
  document.title = \`You clicked \${count} times\`;
}, [count]);
\`\`\``
        },
        {
          id: 9,
          question: "What is the useContext Hook?",
          answer: `**useContext** provides a way to pass data through the component tree without prop drilling.

**Creating Context:**
\`\`\`jsx
// ThemeContext.js
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
\`\`\`

**Using Context:**
\`\`\`jsx
// App.js
function App() {
  return (
    <ThemeProvider>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

// Any nested component
function Button() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{ background: theme === 'dark' ? '#333' : '#fff' }}
    >
      Toggle Theme (Current: {theme})
    </button>
  );
}
\`\`\`

**Without Context (Prop Drilling):**
\`\`\`jsx
// Pass props through every level
<App theme={theme}>
  <Header theme={theme}>
    <Nav theme={theme}>
      <Button theme={theme} />  {/* Finally used here */}
    </Nav>
  </Header>
</App>
\`\`\`

**Use Cases:**
- Theme (dark/light mode)
- User authentication
- Language/i18n
- Global UI state

**Best Practices:**
- Don't overuse for all state
- Split contexts by domain
- Memoize context values when needed`
        },
        {
          id: 10,
          question: "What is the useRef Hook?",
          answer: `**useRef** creates a mutable reference that persists across renders without causing re-renders.

**Two Main Use Cases:**

**1. DOM Element Reference:**
\`\`\`jsx
function TextInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}
\`\`\`

**2. Persisting Values (without re-render):**
\`\`\`jsx
function Timer() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    intervalRef.current = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}
\`\`\`

**Ref vs State:**
\`\`\`jsx
function Component() {
  const [stateValue, setStateValue] = useState(0);
  const refValue = useRef(0);

  const update = () => {
    // State update triggers re-render
    setStateValue(stateValue + 1);

    // Ref update does NOT trigger re-render
    refValue.current += 1;
  };
}
\`\`\`

**Previous Value Pattern:**
\`\`\`jsx
function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

// Usage
function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return <p>Current: {count}, Previous: {prevCount}</p>;
}
\`\`\`

**Key Points:**
- \`ref.current\` is mutable
- Changes don't trigger re-render
- Value persists across renders
- Can reference DOM elements`
        },
        {
          id: 11,
          question: "How does React handle events?",
          answer: `React uses **Synthetic Events** - cross-browser wrappers around native events.

**Event Handling:**
\`\`\`jsx
function Button() {
  // Event handler
  const handleClick = (event) => {
    event.preventDefault();
    console.log('Button clicked!');
  };

  return <button onClick={handleClick}>Click Me</button>;
}
\`\`\`

**Passing Arguments:**
\`\`\`jsx
function List({ items, onDelete }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.name}
          {/* Arrow function to pass argument */}
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
\`\`\`

**Common Events:**
\`\`\`jsx
// Click
<button onClick={handleClick}>

// Form
<input onChange={handleChange} onBlur={handleBlur} />
<form onSubmit={handleSubmit}>

// Keyboard
<input onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} />

// Mouse
<div onMouseEnter={handleEnter} onMouseLeave={handleLeave} />

// Focus
<input onFocus={handleFocus} onBlur={handleBlur} />
\`\`\`

**Event Object:**
\`\`\`jsx
function Form() {
  const handleChange = (e) => {
    console.log(e.target.name);   // Input name
    console.log(e.target.value);  // Input value
    console.log(e.type);          // Event type
  };

  return (
    <input
      name="username"
      onChange={handleChange}
      placeholder="Username"
    />
  );
}
\`\`\`

**Preventing Default & Stopping Propagation:**
\`\`\`jsx
const handleSubmit = (e) => {
  e.preventDefault();        // Prevent form submission
  e.stopPropagation();       // Stop event bubbling
};
\`\`\`

**Synthetic Events are pooled (React 16 and earlier):**
\`\`\`jsx
// Don't access event async without persist
const handleClick = (e) => {
  e.persist();  // Required in React 16 for async access
  setTimeout(() => {
    console.log(e.target);  // Works because of persist
  }, 100);
};
// Note: Not needed in React 17+
\`\`\``
        },
        {
          id: 12,
          question: "What are controlled and uncontrolled components?",
          answer: `**Controlled Components:**
- Form data controlled by React state
- Single source of truth
- Value updated via onChange

\`\`\`jsx
function ControlledForm() {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
\`\`\`

**Uncontrolled Components:**
- Form data controlled by DOM
- Access via ref
- Use defaultValue

\`\`\`jsx
function UncontrolledForm() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        defaultValue="initial value"
        ref={inputRef}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
\`\`\`

**Comparison:**
| Controlled | Uncontrolled |
|------------|--------------|
| State drives value | DOM holds value |
| onChange required | Uses ref |
| More React-like | More HTML-like |
| Instant validation | Submit validation |
| More code | Less code |

**When to Use Each:**
| Feature | Controlled | Uncontrolled |
|---------|------------|--------------|
| One-time submit | - | Yes |
| Instant validation | Yes | - |
| Conditional disable | Yes | - |
| Format input | Yes | - |
| Dynamic inputs | Yes | - |
| Integration with non-React | - | Yes |

**Best Practice:** Prefer controlled components for most cases.`
        },
        {
          id: 13,
          question: "What is prop drilling and how do you avoid it?",
          answer: `**Prop Drilling** is passing props through multiple component layers to reach a deeply nested component.

**Problem:**
\`\`\`jsx
function App() {
  const [user, setUser] = useState({ name: 'John' });

  return <Layout user={user} />;
}

function Layout({ user }) {
  return <Sidebar user={user} />;  // Just passing through
}

function Sidebar({ user }) {
  return <UserInfo user={user} />;  // Just passing through
}

function UserInfo({ user }) {
  return <p>Hello, {user.name}</p>;  // Finally used here
}
\`\`\`

**Solutions:**

**1. Context API:**
\`\`\`jsx
const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ name: 'John' });

  return (
    <UserContext.Provider value={user}>
      <Layout />
    </UserContext.Provider>
  );
}

function UserInfo() {
  const user = useContext(UserContext);
  return <p>Hello, {user.name}</p>;
}
\`\`\`

**2. Component Composition:**
\`\`\`jsx
function App() {
  const [user, setUser] = useState({ name: 'John' });

  return (
    <Layout>
      <Sidebar>
        <UserInfo user={user} />
      </Sidebar>
    </Layout>
  );
}

function Layout({ children }) {
  return <div className="layout">{children}</div>;
}

function Sidebar({ children }) {
  return <aside>{children}</aside>;
}
\`\`\`

**3. State Management (Redux, Zustand):**
\`\`\`jsx
// Zustand store
const useUserStore = create((set) => ({
  user: { name: 'John' },
  setUser: (user) => set({ user })
}));

function UserInfo() {
  const user = useUserStore((state) => state.user);
  return <p>Hello, {user.name}</p>;
}
\`\`\`

**4. Custom Hooks:**
\`\`\`jsx
function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
}

function UserInfo() {
  const { user } = useUser();
  return <p>Hello, {user.name}</p>;
}
\`\`\``
        },
        {
          id: 14,
          question: "What are keys in React and why are they important?",
          answer: `**Keys** are special attributes that help React identify which items have changed, been added, or removed in lists.

**Why Keys are Important:**
\`\`\`jsx
// Without keys (or with index as key)
// React re-renders all items on change

// With proper keys
// React only updates changed items
\`\`\`

**Correct Usage:**
\`\`\`jsx
// Good - unique, stable identifier
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
\`\`\`

**Common Mistakes:**

**1. Using index as key (problematic):**
\`\`\`jsx
// Bad - problems when list order changes
{items.map((item, index) => (
  <Item key={index} {...item} />
))}
\`\`\`

**2. Duplicate keys:**
\`\`\`jsx
// Error - keys must be unique among siblings
{items.map(item => (
  <Item key="same-key" {...item} />  // Wrong!
))}
\`\`\`

**3. Random keys:**
\`\`\`jsx
// Bad - creates new key every render
{items.map(item => (
  <Item key={Math.random()} {...item} />  // Wrong!
))}
\`\`\`

**When Index is Acceptable:**
\`\`\`jsx
// Static list, no reordering
const menuItems = ['Home', 'About', 'Contact'];
{menuItems.map((item, index) => (
  <MenuItem key={index}>{item}</MenuItem>
))}
\`\`\`

**Creating Unique Keys:**
\`\`\`jsx
// Use existing unique property
key={user.id}
key={product.sku}
key={post.slug}

// Generate unique ID when creating items
const newTodo = {
  id: crypto.randomUUID(),
  text: inputValue
};
\`\`\`

**Key Rules:**
1. Keys must be unique among siblings
2. Keys must be stable (not change between renders)
3. Keys are not passed as props to components
4. Use meaningful IDs, not array indexes (usually)`
        },
        {
          id: 15,
          question: "What is conditional rendering in React?",
          answer: `**Conditional Rendering** shows different UI based on conditions.

**Methods:**

**1. If/Else (outside JSX):**
\`\`\`jsx
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <UserDashboard />;
  }
  return <LoginForm />;
}
\`\`\`

**2. Ternary Operator:**
\`\`\`jsx
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <UserDashboard /> : <LoginForm />}
    </div>
  );
}
\`\`\`

**3. Logical AND (&&):**
\`\`\`jsx
function Notification({ messages }) {
  return (
    <div>
      {messages.length > 0 && (
        <Badge count={messages.length} />
      )}
    </div>
  );
}
\`\`\`

**4. Logical OR (||):**
\`\`\`jsx
function Welcome({ name }) {
  return <h1>Hello, {name || 'Guest'}!</h1>;
}
\`\`\`

**5. Nullish Coalescing (??):**
\`\`\`jsx
function Display({ value }) {
  return <span>{value ?? 'N/A'}</span>;
  // Shows 0 as 0, only replaces null/undefined
}
\`\`\`

**6. Switch/Case (via object mapping):**
\`\`\`jsx
function StatusBadge({ status }) {
  const badges = {
    pending: <YellowBadge />,
    approved: <GreenBadge />,
    rejected: <RedBadge />,
  };

  return badges[status] || <GrayBadge />;
}
\`\`\`

**7. Enum Pattern:**
\`\`\`jsx
const VIEWS = {
  loading: <Spinner />,
  error: <ErrorMessage />,
  success: <DataDisplay />,
};

function DataFetcher({ status }) {
  return VIEWS[status];
}
\`\`\`

**Watch Out for Falsy Values:**
\`\`\`jsx
// Bug: Shows "0" instead of nothing
{count && <Badge count={count} />}

// Fix: Explicit boolean
{count > 0 && <Badge count={count} />}
\`\`\``
        },
        {
          id: 16,
          question: "What are React lifecycle methods?",
          answer: `**Lifecycle Methods** are called at specific phases of a component's existence (class components).

**Three Phases:**
\`\`\`
Mounting → Updating → Unmounting
\`\`\`

**Class Component Lifecycle:**
\`\`\`jsx
class MyComponent extends React.Component {
  // Mounting
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    // After first render - fetch data, setup subscriptions
    this.fetchData();
  }

  // Updating
  shouldComponentUpdate(nextProps, nextState) {
    // Control if re-render should happen
    return nextState.count !== this.state.count;
  }

  componentDidUpdate(prevProps, prevState) {
    // After update - compare props/state
    if (prevProps.userId !== this.props.userId) {
      this.fetchData();
    }
  }

  // Unmounting
  componentWillUnmount() {
    // Cleanup - remove subscriptions, timers
    clearInterval(this.timer);
  }

  render() {
    return <div>{this.state.count}</div>;
  }
}
\`\`\`

**Functional Components with Hooks:**
\`\`\`jsx
function MyComponent({ userId }) {
  const [count, setCount] = useState(0);

  // componentDidMount
  useEffect(() => {
    fetchData();
  }, []);

  // componentDidUpdate (for userId)
  useEffect(() => {
    fetchData();
  }, [userId]);

  // componentWillUnmount
  useEffect(() => {
    const timer = setInterval(() => {}, 1000);
    return () => clearInterval(timer);  // Cleanup
  }, []);

  return <div>{count}</div>;
}
\`\`\`

**Lifecycle Mapping:**
| Class Method | Hook Equivalent |
|--------------|-----------------|
| constructor | useState |
| componentDidMount | useEffect(..., []) |
| componentDidUpdate | useEffect(..., [deps]) |
| componentWillUnmount | useEffect return function |
| shouldComponentUpdate | React.memo |`
        },
        {
          id: 17,
          question: "What is React.memo and when should you use it?",
          answer: `**React.memo** is a higher-order component that memoizes functional components to prevent unnecessary re-renders.

**Basic Usage:**
\`\`\`jsx
const ExpensiveComponent = React.memo(function ExpensiveComponent({ data }) {
  console.log('Rendering ExpensiveComponent');
  return <div>{data.map(item => <Item key={item.id} {...item} />)}</div>;
});

// Only re-renders when props change
\`\`\`

**How It Works:**
\`\`\`jsx
function Parent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('John');

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>

      {/* Without memo: re-renders on every count change */}
      <ChildWithoutMemo name={name} />

      {/* With memo: only re-renders when name changes */}
      <ChildWithMemo name={name} />
    </div>
  );
}

const ChildWithMemo = React.memo(function Child({ name }) {
  console.log('Child rendered');
  return <p>Hello, {name}</p>;
});
\`\`\`

**Custom Comparison:**
\`\`\`jsx
const MyComponent = React.memo(
  function MyComponent({ user, items }) {
    return <div>...</div>;
  },
  (prevProps, nextProps) => {
    // Return true if props are equal (skip re-render)
    return prevProps.user.id === nextProps.user.id;
  }
);
\`\`\`

**Common Pitfalls:**
\`\`\`jsx
function Parent() {
  // Bug: new object every render breaks memo
  return <Child style={{ color: 'red' }} />;

  // Fix: memoize objects
  const style = useMemo(() => ({ color: 'red' }), []);
  return <Child style={style} />;

  // Bug: new function every render
  return <Child onClick={() => console.log('click')} />;

  // Fix: memoize callbacks
  const handleClick = useCallback(() => console.log('click'), []);
  return <Child onClick={handleClick} />;
}
\`\`\`

**When to Use:**
- Expensive render calculations
- Components that render often with same props
- Pure presentational components
- Large lists with static items

**When NOT to Use:**
- Component already renders quickly
- Props change frequently
- Premature optimization`
        },
        {
          id: 18,
          question: "What is the difference between useCallback and useMemo?",
          answer: `Both are used for memoization, but for different purposes:

**useMemo - Memoizes computed values:**
\`\`\`jsx
const ExpensiveComponent = ({ items, filter }) => {
  // Only recalculates when items or filter changes
  const filteredItems = useMemo(() => {
    console.log('Filtering...');
    return items.filter(item => item.name.includes(filter));
  }, [items, filter]);

  return <List items={filteredItems} />;
};
\`\`\`

**useCallback - Memoizes functions:**
\`\`\`jsx
const Parent = () => {
  const [count, setCount] = useState(0);

  // Same function reference between renders
  const handleClick = useCallback(() => {
    console.log('Clicked!');
  }, []);

  return <MemoizedChild onClick={handleClick} />;
};

const MemoizedChild = React.memo(({ onClick }) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Click</button>;
});
\`\`\`

**Key Differences:**
| useMemo | useCallback |
|---------|-------------|
| Returns memoized value | Returns memoized function |
| For expensive calculations | For callback stability |
| \`useMemo(() => value, deps)\` | \`useCallback(fn, deps)\` |

**Equivalence:**
\`\`\`jsx
// These are equivalent:
useCallback(fn, deps)
useMemo(() => fn, deps)
\`\`\`

**When to Use:**

**useMemo:**
\`\`\`jsx
// Expensive calculation
const sortedList = useMemo(() => {
  return [...items].sort((a, b) => a.price - b.price);
}, [items]);

// Derived state
const total = useMemo(() => {
  return cart.reduce((sum, item) => sum + item.price, 0);
}, [cart]);
\`\`\`

**useCallback:**
\`\`\`jsx
// Passing to memoized children
const handleSubmit = useCallback((data) => {
  submitForm(data);
}, [submitForm]);

// Used in useEffect dependencies
const fetchData = useCallback(async () => {
  const response = await fetch('/api/data');
  setData(await response.json());
}, []);

useEffect(() => {
  fetchData();
}, [fetchData]);
\`\`\`

**Don't Overuse:**
\`\`\`jsx
// Unnecessary - simple value
const double = useMemo(() => count * 2, [count]);
// Just use: const double = count * 2;

// Unnecessary - not passed to memoized child
const handleClick = useCallback(() => {}, []);
// Just use: const handleClick = () => {};
\`\`\``
        },
        {
          id: 19,
          question: "What is the useReducer Hook?",
          answer: `**useReducer** manages complex state logic with actions and reducers (similar to Redux).

**Basic Syntax:**
\`\`\`jsx
const [state, dispatch] = useReducer(reducer, initialState);
\`\`\`

**Example - Counter:**
\`\`\`jsx
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    case 'set':
      return { count: action.payload };
    default:
      throw new Error('Unknown action: ' + action.type);
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'set', payload: 10 })}>
        Set to 10
      </button>
    </div>
  );
}
\`\`\`

**Complex State Example:**
\`\`\`jsx
const initialState = {
  items: [],
  loading: false,
  error: null
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, items: action.payload };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.payload] };
    case 'DELETE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
}

function ItemList() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchItems = async () => {
    dispatch({ type: 'FETCH_START' });
    try {
      const items = await api.getItems();
      dispatch({ type: 'FETCH_SUCCESS', payload: items });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
    }
  };
}
\`\`\`

**useState vs useReducer:**
| useState | useReducer |
|----------|------------|
| Simple state | Complex state |
| Independent values | Related values |
| Few updates | Many update types |
| Local logic | Shared logic |`
        },
        {
          id: 20,
          question: "What are custom Hooks and how do you create them?",
          answer: `**Custom Hooks** extract reusable stateful logic from components.

**Rules:**
- Name must start with \`use\`
- Can call other Hooks inside

**Example - useLocalStorage:**
\`\`\`jsx
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// Usage
function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle Theme: {theme}
    </button>
  );
}
\`\`\`

**Example - useFetch:**
\`\`\`jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url, { signal: controller.signal });
        const json = await response.json();
        setData(json);
        setError(null);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}

// Usage
function UserProfile({ userId }) {
  const { data: user, loading, error } = useFetch(\`/api/users/\${userId}\`);

  if (loading) return <Spinner />;
  if (error) return <Error message={error} />;
  return <Profile user={user} />;
}
\`\`\`

**Example - useDebounce:**
\`\`\`jsx
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

// Usage
function Search() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      search(debouncedQuery);
    }
  }, [debouncedQuery]);

  return <input value={query} onChange={e => setQuery(e.target.value)} />;
}
\`\`\``
        },
        {
          id: 21,
          question: "What is lifting state up in React?",
          answer: `**Lifting state up** means moving shared state to the closest common parent so multiple child components stay in sync.

**Why it is needed:**
- Two or more sibling components need the same data
- One child updates data and another child displays it
- You want a single source of truth

\`\`\`jsx
function TemperatureCalculator() {
  const [temperature, setTemperature] = useState("");

  return (
    <>
      <CelsiusInput value={temperature} onChange={setTemperature} />
      <FahrenheitPreview celsius={temperature} />
    </>
  );
}

function CelsiusInput({ value, onChange }) {
  return <input value={value} onChange={(e) => onChange(e.target.value)} />;
}

function FahrenheitPreview({ celsius }) {
  const fahrenheit = Number(celsius) * 9 / 5 + 32;
  return <p>{Number.isNaN(fahrenheit) ? "-" : fahrenheit} F</p>;
}
\`\`\`

**Benefits:**
- Avoids duplicated state
- Keeps data flow predictable
- Makes debugging easier

**Interview point:** lift state only as high as necessary. Lifting everything to the top can make components harder to maintain.`
        },
        {
          id: 22,
          question: "What is reconciliation in React?",
          answer: `**Reconciliation** is the process React uses to compare the previous element tree with the new one and update the real DOM efficiently.

**How it works:**
1. React creates a new virtual tree after state/props change
2. It compares it with the previous tree
3. It calculates the minimum DOM updates
4. It applies only the necessary changes

**Heuristics React uses:**
- Elements of different types produce different trees
- Keys help identify stable list items

\`\`\`jsx
// Same type -> update attributes/text
<button className="primary">Save</button>
<button className="secondary">Save</button>

// Different type -> replace subtree
<button>Save</button>
<a href="/save">Save</a>
\`\`\`

**Why keys matter:**
\`\`\`jsx
{items.map((item) => (
  <TodoItem key={item.id} item={item} />
))}
\`\`\`

Without stable keys, React may reuse the wrong component instance and cause UI bugs like incorrect input values or broken animations.`
        },
        {
          id: 23,
          question: "What is React StrictMode?",
          answer: `**StrictMode** is a development-only helper that highlights unsafe patterns and potential bugs.

\`\`\`jsx
import { StrictMode } from "react";

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
\`\`\`

**What it helps detect:**
- Unsafe side effects
- Deprecated APIs
- Missing effect cleanup
- Components that are not resilient to remounting

**Important behavior:**
In development, React may intentionally call render logic and effects more than once to expose bugs.

\`\`\`jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log("tick");
  }, 1000);

  return () => clearInterval(id);
}, []);
\`\`\`

If cleanup is missing, StrictMode makes the issue visible quickly.

**Interview point:** StrictMode does not affect production behavior directly, but code that is clean under StrictMode is usually safer in real apps.`
        },
        {
          id: 24,
          question: "What are portals in React?",
          answer: `**Portals** let you render a child into a different DOM node while keeping it inside the same React tree.

\`\`\`jsx
import { createPortal } from "react-dom";

function Modal({ children }) {
  const modalRoot = document.getElementById("modal-root");
  return createPortal(children, modalRoot);
}
\`\`\`

**Common use cases:**
- Modals
- Tooltips
- Dropdowns
- Toast notifications

**Why use portals:**
- Avoid z-index and overflow issues
- Render outside clipped containers
- Keep React context and event bubbling intact

\`\`\`jsx
function App() {
  return (
    <div onClick={() => console.log("parent clicked")}>
      <Modal>
        <button>Inside portal</button>
      </Modal>
    </div>
  );
}
\`\`\`

Even though the button renders elsewhere in the DOM, events still bubble through the React component tree.`
        },
        {
          id: 25,
          question: "What is lazy loading in React?",
          answer: `**Lazy loading** means loading code only when it is needed instead of shipping everything on the initial page load.

\`\`\`jsx
const AdminPage = React.lazy(() => import("./AdminPage"));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <AdminPage />
    </Suspense>
  );
}
\`\`\`

**Benefits:**
- Smaller initial bundle
- Faster first load
- Better performance on slower devices

**Common patterns:**
- Route-level code splitting
- Lazy loading heavy charts/editors
- Loading admin or rarely used screens on demand

**Interview point:** lazy loading improves initial load time, but if overused it can increase the number of network requests and loading states.`
        },
        {
          id: 26,
          question: "What are Synthetic Events in React?",
          answer: `**Synthetic Events** are React's cross-browser wrappers around native browser events.

\`\`\`jsx
function Form() {
  function handleChange(event) {
    console.log(event.target.value);
  }

  return <input onChange={handleChange} />;
}
\`\`\`

**Why React uses them:**
- Consistent behavior across browsers
- Same event API for all supported environments
- Integrates with React's event system

**Examples:**
- \`onClick\`
- \`onChange\`
- \`onSubmit\`
- \`onBlur\`

**Important note:**
React event handlers receive a synthetic event object, but you can still access the native event if needed:

\`\`\`jsx
function handleClick(event) {
  console.log(event.nativeEvent);
}
\`\`\`

In modern React, event pooling is no longer something developers usually need to worry about.`
        },
        {
          id: 27,
          question: "What is a Higher-Order Component (HOC)?",
          answer: `A **Higher-Order Component** is a function that takes a component and returns a new enhanced component.

\`\`\`jsx
function withAuth(WrappedComponent) {
  return function AuthenticatedComponent(props) {
    const isLoggedIn = useAuthStore((s) => s.isLoggedIn);

    if (!isLoggedIn) {
      return <LoginPage />;
    }

    return <WrappedComponent {...props} />;
  };
}

const ProtectedDashboard = withAuth(Dashboard);
\`\`\`

**Use cases:**
- Authentication
- Logging
- Feature flags
- Permission checks

**Caution:**
- Can create deeply wrapped component trees
- Makes debugging harder if overused
- Hooks and composition are often preferred in modern React

**Interview point:** HOCs are still important to understand because many older libraries and codebases use them.`
        },
        {
          id: 28,
          question: "What is the render props pattern in React?",
          answer: `The **render props** pattern shares logic by passing a function as a prop that decides what to render.

\`\`\`jsx
function MouseTracker({ render }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <div onMouseMove={(e) => setPosition({ x: e.clientX, y: e.clientY })}>
      {render(position)}
    </div>
  );
}

function App() {
  return (
    <MouseTracker
      render={({ x, y }) => <p>Mouse: {x}, {y}</p>}
    />
  );
}
\`\`\`

**Why it was used:**
- Reuse stateful logic
- Keep rendering flexible

**Today:**
Custom Hooks usually replace render props because they are simpler and avoid nested function-heavy JSX.`
        },
        {
          id: 29,
          question: "How do forms work in React?",
          answer: `React forms are usually built with **controlled components**, where form values are stored in state.

\`\`\`jsx
function SignupForm() {
  const [form, setForm] = useState({ name: "", email: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} />
      <input name="email" value={form.email} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
\`\`\`

**Controlled form:**
- React state is the source of truth
- Easier validation and conditional UI

**Uncontrolled form:**
- DOM keeps the current value
- Often uses refs

**Common interview topics:**
- Preventing default submit behavior
- Handling multiple fields
- Validation
- Managing performance in large forms`
        },
        {
          id: 30,
          question: "What is the difference between stateful and stateless components?",
          answer: `**Stateful components** manage state. **Stateless components** mainly receive props and render UI.

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

function Welcome({ name }) {
  return <h1>Hello, {name}</h1>;
}
\`\`\`

**Stateful component:**
- Uses \`useState\`, \`useReducer\`, or other stateful hooks
- Handles user interaction or data changes

**Stateless component:**
- Focuses on presentation
- Easier to test and reuse

**Interview point:** in modern React, even simple function components can be stateful because Hooks made state available outside class components.`
        }
      ]
    },
    {
      title: "React Interview Questions for Experienced Levels",
      questions: [
        {
          id: 1,
          question: "Explain the useCallback and useMemo hooks. When would you use each?",
          answer: `Both hooks are for **performance optimization** through memoization.

**useMemo - Memoizes a computed value:**
\`\`\`jsx
const ExpensiveComponent = ({ items, filter }) => {
  const filteredItems = useMemo(() => {
    console.log('Filtering items...');
    return items.filter(item => item.includes(filter));
  }, [items, filter]);

  return <List items={filteredItems} />;
};
\`\`\`

**useCallback - Memoizes a function reference:**
\`\`\`jsx
const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  return <ChildComponent onClick={handleClick} />;
};

const ChildComponent = React.memo(({ onClick }) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Click me</button>;
});
\`\`\`

**When to Use:**
- **useMemo**: Expensive calculations, derived data
- **useCallback**: Passing callbacks to optimized child components
- Both: When passing to components wrapped in \`React.memo\`

**Common Mistakes:**
\`\`\`jsx
// 1. Unnecessary memoization
const double = useMemo(() => count * 2, [count]);  // Overkill
const double = count * 2;  // Fine

// 2. Missing dependencies
const handler = useCallback(() => {
  doSomething(value);  // value should be in deps
}, []);  // Bug!

// 3. Object/array props without memoization
<Child config={{ threshold: 10 }} />  // New object every render
const config = useMemo(() => ({ threshold: 10 }), []);
<Child config={config} />  // Stable reference
\`\`\`

**Warning:** Don't overuse - memoization has overhead!`
        },
        {
          id: 2,
          question: "What is React Fiber and how does it improve performance?",
          answer: `**React Fiber** is React's reconciliation algorithm (React 16+) that enables incremental rendering.

**Old Reconciler (Stack):**
\`\`\`
Render Tree → Block Main Thread Until Complete → Update DOM
              ↑
        Can't interrupt
\`\`\`

**Fiber Reconciler:**
\`\`\`
Render Unit of Work → Pause → Resume → Commit
        ↑                       ↑
   Interruptible          Priority-based
\`\`\`

**Key Concepts:**

**1. Fiber Node:**
Each component becomes a "fiber" - a unit of work:
\`\`\`javascript
{
  type: Component,
  key: null,
  stateNode: instance,
  child: firstChildFiber,
  sibling: nextSiblingFiber,
  return: parentFiber,
  pendingProps: newProps,
  memoizedState: currentState,
  effectTag: PLACEMENT | UPDATE | DELETION,
  // ... priority info
}
\`\`\`

**2. Work Phases:**
\`\`\`
Render Phase (Interruptible)
├── Build work-in-progress tree
├── Calculate changes
└── Can be paused/resumed

Commit Phase (Synchronous)
├── Apply changes to DOM
└── Run effects
\`\`\`

**3. Priority Scheduling:**
\`\`\`javascript
// Priority levels (conceptual)
ImmediatePriority   // User input, errors
UserBlockingPriority // Clicks, typing
NormalPriority      // Network responses
LowPriority         // Data prefetching
IdlePriority        // Offscreen work
\`\`\`

**Features Enabled by Fiber:**

**Suspense:**
\`\`\`jsx
<Suspense fallback={<Spinner />}>
  <AsyncComponent />
</Suspense>
\`\`\`

**Concurrent Rendering:**
\`\`\`jsx
const [isPending, startTransition] = useTransition();

startTransition(() => {
  setSearchQuery(input);  // Low priority
});
\`\`\`

**Automatic Batching:**
\`\`\`jsx
// React 18: All updates batched
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // Single re-render
}, 100);
\`\`\`

**Benefits:**
- Smoother UI (no jank)
- Better responsiveness
- Interrupts low-priority work for urgent updates
- Enables concurrent features`
        },
        {
          id: 3,
          question: "How do you optimize React application performance?",
          answer: `**1. Prevent Unnecessary Re-renders:**
\`\`\`jsx
// React.memo for functional components
const Child = React.memo(({ data }) => {
  return <div>{data}</div>;
});

// useMemo for expensive calculations
const sortedItems = useMemo(() => {
  return items.sort((a, b) => a.price - b.price);
}, [items]);

// useCallback for stable function references
const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);
\`\`\`

**2. Code Splitting:**
\`\`\`jsx
// Dynamic imports with React.lazy
const Dashboard = React.lazy(() => import('./Dashboard'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Dashboard />
    </Suspense>
  );
}

// Route-based splitting
const routes = [
  {
    path: '/dashboard',
    component: lazy(() => import('./Dashboard'))
  }
];
\`\`\`

**3. Virtualization for Large Lists:**
\`\`\`jsx
import { FixedSizeList } from 'react-window';

function VirtualList({ items }) {
  return (
    <FixedSizeList
      height={400}
      itemCount={items.length}
      itemSize={35}
      width={300}
    >
      {({ index, style }) => (
        <div style={style}>{items[index]}</div>
      )}
    </FixedSizeList>
  );
}
\`\`\`

**4. Debounce/Throttle User Input:**
\`\`\`jsx
const debouncedSearch = useMemo(
  () => debounce((query) => fetchResults(query), 300),
  []
);
\`\`\`

**5. Use Transitions for Non-Urgent Updates:**
\`\`\`jsx
const [isPending, startTransition] = useTransition();

function handleChange(e) {
  setInput(e.target.value);  // Urgent

  startTransition(() => {
    setSearchResults(filter(data, e.target.value));  // Non-urgent
  });
}
\`\`\`

**6. Optimize Images:**
\`\`\`jsx
// Next.js Image
import Image from 'next/image';
<Image src="/hero.jpg" width={800} height={600} priority />

// Lazy loading
<img src="image.jpg" loading="lazy" />
\`\`\`

**7. Use Production Build:**
\`\`\`bash
NODE_ENV=production npm run build
\`\`\`

**8. Avoid Inline Objects/Functions in JSX:**
\`\`\`jsx
// Bad
<Component style={{ marginTop: 10 }} onClick={() => {}} />

// Good
const style = useMemo(() => ({ marginTop: 10 }), []);
const handleClick = useCallback(() => {}, []);
<Component style={style} onClick={handleClick} />
\`\`\``
        },
        {
          id: 4,
          question: "Explain Server-Side Rendering (SSR) vs Client-Side Rendering (CSR) vs Static Site Generation (SSG).",
          answer: `**Client-Side Rendering (CSR):**
\`\`\`
Browser → Download JS → Execute → Render
                              ↓
                         Fetch Data
                              ↓
                         Update UI
\`\`\`

**Pros:**
- Rich interactivity
- Fast subsequent navigations
- Lower server load

**Cons:**
- Slow initial load
- Poor SEO (initially)
- Blank page until JS loads

---

**Server-Side Rendering (SSR):**
\`\`\`
Request → Server Renders HTML → Send to Browser → Hydrate
                    ↓
               Fetch Data
\`\`\`

\`\`\`jsx
// Next.js SSR
export async function getServerSideProps(context) {
  const data = await fetch('https://api.example.com/data');
  return { props: { data } };
}

function Page({ data }) {
  return <div>{data.title}</div>;
}
\`\`\`

**Pros:**
- Fast initial render
- Better SEO
- Works without JS

**Cons:**
- Server load
- Slower TTFB
- Full page reloads

---

**Static Site Generation (SSG):**
\`\`\`
Build Time → Generate HTML → Deploy → Serve Static Files
     ↓
Fetch Data
\`\`\`

\`\`\`jsx
// Next.js SSG
export async function getStaticProps() {
  const data = await fetch('https://api.example.com/data');
  return { props: { data } };
}

// With dynamic routes
export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(post => ({ params: { id: post.id } })),
    fallback: false
  };
}
\`\`\`

**Pros:**
- Fastest performance
- CDN cacheable
- Best SEO

**Cons:**
- Build time for dynamic data
- Not for real-time data

---

**Incremental Static Regeneration (ISR):**
\`\`\`jsx
export async function getStaticProps() {
  const data = await fetch('https://api.example.com/data');
  return {
    props: { data },
    revalidate: 60  // Regenerate every 60 seconds
  };
}
\`\`\`

**Comparison:**
| Feature | CSR | SSR | SSG |
|---------|-----|-----|-----|
| Initial Load | Slow | Fast | Fastest |
| SEO | Poor | Good | Best |
| Server Load | Low | High | None |
| Dynamic Data | Yes | Yes | Limited |
| Build Time | Fast | N/A | Slow for large sites |`
        },
        {
          id: 5,
          question: "What is React Suspense and how does it work?",
          answer: `**Suspense** lets you declaratively handle loading states while waiting for async operations.

**Basic Usage:**
\`\`\`jsx
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <LazyComponent />
    </Suspense>
  );
}
\`\`\`

**Multiple Lazy Components:**
\`\`\`jsx
<Suspense fallback={<Loading />}>
  <Header />
  <Suspense fallback={<SidebarLoading />}>
    <Sidebar />
  </Suspense>
  <Suspense fallback={<ContentLoading />}>
    <Content />
  </Suspense>
</Suspense>
\`\`\`

**Data Fetching with Suspense (React 18+):**
\`\`\`jsx
// Using a Suspense-compatible library
import { useSuspenseQuery } from '@tanstack/react-query';

function UserProfile({ id }) {
  // Suspends component until data is ready
  const { data: user } = useSuspenseQuery({
    queryKey: ['user', id],
    queryFn: () => fetchUser(id)
  });

  return <div>{user.name}</div>;
}

function App() {
  return (
    <Suspense fallback={<ProfileSkeleton />}>
      <UserProfile id={1} />
    </Suspense>
  );
}
\`\`\`

**SuspenseList (Experimental):**
\`\`\`jsx
<SuspenseList revealOrder="forwards" tail="collapsed">
  <Suspense fallback={<Loading />}>
    <ProfileHeader />
  </Suspense>
  <Suspense fallback={<Loading />}>
    <ProfileBio />
  </Suspense>
  <Suspense fallback={<Loading />}>
    <ProfilePosts />
  </Suspense>
</SuspenseList>
\`\`\`

**Error Boundaries with Suspense:**
\`\`\`jsx
<ErrorBoundary fallback={<Error />}>
  <Suspense fallback={<Loading />}>
    <AsyncComponent />
  </Suspense>
</ErrorBoundary>
\`\`\`

**Server Components with Suspense:**
\`\`\`jsx
// Server Component (async)
async function Comments({ postId }) {
  const comments = await fetchComments(postId);
  return <CommentList comments={comments} />;
}

// Page
function PostPage({ postId }) {
  return (
    <article>
      <Post id={postId} />
      <Suspense fallback={<CommentsLoading />}>
        <Comments postId={postId} />
      </Suspense>
    </article>
  );
}
\`\`\`

**How It Works:**
1. Component "suspends" by throwing a Promise
2. Suspense catches the Promise
3. Shows fallback until Promise resolves
4. Re-renders component with data`
        },
        {
          id: 6,
          question: "Explain Error Boundaries in React.",
          answer: `**Error Boundaries** catch JavaScript errors in child components and display fallback UI.

**Class Component (Required):**
\`\`\`jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state to show fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to service
    logErrorToService(error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
\`\`\`

**Usage:**
\`\`\`jsx
function App() {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Header />
      <ErrorBoundary fallback={<SidebarError />}>
        <Sidebar />
      </ErrorBoundary>
      <ErrorBoundary fallback={<ContentError />}>
        <MainContent />
      </ErrorBoundary>
    </ErrorBoundary>
  );
}
\`\`\`

**With Reset Functionality:**
\`\`\`jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  resetError = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong</h2>
          <button onClick={this.resetError}>Try again</button>
        </div>
      );
    }
    return this.props.children;
  }
}
\`\`\`

**Using react-error-boundary Library:**
\`\`\`jsx
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div>
      <p>Error: {error.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, info) => logError(error, info)}
      onReset={() => {
        // Reset app state
      }}
    >
      <MyComponent />
    </ErrorBoundary>
  );
}
\`\`\`

**What Error Boundaries DON'T Catch:**
- Event handlers (use try/catch)
- Async code (promises, setTimeout)
- Server-side rendering
- Errors in error boundary itself`
        },
        {
          id: 7,
          question: "What is the useImperativeHandle Hook?",
          answer: `**useImperativeHandle** customizes the instance value exposed to parent components when using \`ref\`.

**Basic Usage:**
\`\`\`jsx
const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    // Custom methods exposed to parent
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = '';
    },
    getValue: () => {
      return inputRef.current.value;
    }
  }));

  return <input ref={inputRef} {...props} />;
});

// Parent usage
function Parent() {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();  // Calls custom focus
    console.log(inputRef.current.getValue());
  };

  return (
    <>
      <FancyInput ref={inputRef} />
      <button onClick={handleClick}>Focus</button>
    </>
  );
}
\`\`\`

**Complex Component:**
\`\`\`jsx
const VideoPlayer = forwardRef((props, ref) => {
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  useImperativeHandle(ref, () => ({
    play: () => {
      videoRef.current.play();
      setIsPlaying(true);
    },
    pause: () => {
      videoRef.current.pause();
      setIsPlaying(false);
    },
    seek: (time) => {
      videoRef.current.currentTime = time;
    },
    isPlaying: () => isPlaying
  }), [isPlaying]);  // Dependency array

  return <video ref={videoRef} src={props.src} />;
});

// Parent
function App() {
  const playerRef = useRef();

  return (
    <div>
      <VideoPlayer ref={playerRef} src="/video.mp4" />
      <button onClick={() => playerRef.current.play()}>Play</button>
      <button onClick={() => playerRef.current.pause()}>Pause</button>
      <button onClick={() => playerRef.current.seek(30)}>Skip to 30s</button>
    </div>
  );
}
\`\`\`

**Form Component:**
\`\`\`jsx
const Form = forwardRef((props, ref) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  useImperativeHandle(ref, () => ({
    submit: () => {
      if (validate()) {
        props.onSubmit(values);
      }
    },
    reset: () => {
      setValues({});
      setErrors({});
    },
    setFieldValue: (field, value) => {
      setValues(prev => ({ ...prev, [field]: value }));
    },
    getValues: () => values,
    getErrors: () => errors
  }));

  // ... form implementation
});
\`\`\`

**When to Use:**
- Exposing specific methods to parent
- Abstracting complex DOM operations
- Creating reusable controlled components
- Building form libraries

**Best Practices:**
- Keep exposed API minimal
- Use sparingly (prefer props/state)
- Document exposed methods`
        },
        {
          id: 8,
          question: "What are React Server Components?",
          answer: `**React Server Components (RSC)** render on the server and send HTML to the client with zero JavaScript.

**Server Component:**
\`\`\`jsx
// app/users/page.tsx (Server Component by default in Next.js 13+)
async function UsersPage() {
  // Direct database access - no API needed
  const users = await db.query('SELECT * FROM users');

  return (
    <div>
      <h1>Users</h1>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
\`\`\`

**Client Component:**
\`\`\`jsx
'use client';  // Required directive

import { useState } from 'react';

function LikeButton({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  return (
    <button onClick={() => setCount(c => c + 1)}>
      Likes: {count}
    </button>
  );
}
\`\`\`

**Mixing Server and Client:**
\`\`\`jsx
// Server Component
async function ProductPage({ id }) {
  const product = await getProduct(id);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      {/* Client Component for interactivity */}
      <AddToCartButton productId={id} />
    </div>
  );
}
\`\`\`

**Data Patterns:**
\`\`\`jsx
// Parallel data fetching
async function Dashboard() {
  // Start all fetches in parallel
  const userPromise = getUser();
  const postsPromise = getPosts();
  const statsPromise = getStats();

  const [user, posts, stats] = await Promise.all([
    userPromise, postsPromise, statsPromise
  ]);

  return (
    <div>
      <UserInfo user={user} />
      <PostList posts={posts} />
      <Stats stats={stats} />
    </div>
  );
}
\`\`\`

**Benefits:**
- Zero bundle size for server components
- Direct database/filesystem access
- Automatic code splitting
- Streaming with Suspense
- Better security (secrets stay on server)

**Comparison:**
| Feature | Server Component | Client Component |
|---------|------------------|------------------|
| useState/useEffect | No | Yes |
| Browser APIs | No | Yes |
| Event handlers | No | Yes |
| async/await | Yes | No (directly) |
| Database access | Yes | No |
| Bundle size | Zero | Adds to bundle |

**When to Use:**
- **Server:** Static content, data fetching, heavy dependencies
- **Client:** Interactivity, browser APIs, event handlers`
        },
        {
          id: 9,
          question: "What are the rules of Hooks and why do they exist?",
          answer: `**Rules of Hooks:**

**1. Only Call Hooks at the Top Level**
Don't call Hooks inside loops, conditions, or nested functions.

\`\`\`jsx
// Wrong
function Component() {
  if (condition) {
    const [value, setValue] = useState(0);  // Error!
  }

  for (let i = 0; i < 3; i++) {
    useEffect(() => {});  // Error!
  }
}

// Correct
function Component() {
  const [value, setValue] = useState(0);  // Always called

  useEffect(() => {
    if (condition) {
      // Logic inside effect
    }
  });
}
\`\`\`

**2. Only Call Hooks from React Functions**
\`\`\`jsx
// Wrong - regular function
function helper() {
  const [state, setState] = useState(0);  // Error!
}

// Correct - React component
function Component() {
  const [state, setState] = useState(0);  // OK
}

// Correct - custom Hook
function useCustomHook() {
  const [state, setState] = useState(0);  // OK
}
\`\`\`

**Why These Rules Exist:**

**Hook Call Order Must Be Stable:**
\`\`\`javascript
// React tracks hooks by call order
function Component() {
  // Call 1: useState for name
  const [name, setName] = useState('');
  // Call 2: useState for age
  const [age, setAge] = useState(0);
  // Call 3: useEffect
  useEffect(() => {});
}

// Internally React stores:
// [
//   { state: '', setter: setName },     // Index 0
//   { state: 0, setter: setAge },       // Index 1
//   { effect: fn }                       // Index 2
// ]
\`\`\`

**What Goes Wrong:**
\`\`\`jsx
function Component({ showName }) {
  // First render: showName = true
  if (showName) {
    useState('John');  // Index 0
  }
  useState(25);        // Index 1
  useEffect(() => {}); // Index 2

  // Second render: showName = false
  // React expects useState at index 0, but it's skipped!
  useState(25);        // Now at index 0 - MISMATCH!
  useEffect(() => {}); // Now at index 1 - MISMATCH!
}
\`\`\`

**ESLint Plugin:**
\`\`\`json
{
  "plugins": ["react-hooks"],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
\`\`\`

**Exhaustive Dependencies:**
\`\`\`jsx
// Warning: missing dependency
useEffect(() => {
  fetchData(userId);  // userId should be in deps
}, []);

// Correct
useEffect(() => {
  fetchData(userId);
}, [userId]);
\`\`\``
        },
        {
          id: 10,
          question: "How do you implement code splitting in React?",
          answer: `**Code Splitting** breaks your app into smaller bundles that load on demand.

**1. React.lazy and Suspense:**
\`\`\`jsx
import React, { Suspense, lazy } from 'react';

// Dynamic import
const Dashboard = lazy(() => import('./Dashboard'));
const Settings = lazy(() => import('./Settings'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Suspense>
  );
}
\`\`\`

**2. Named Exports:**
\`\`\`jsx
// For named exports, use intermediate module
// Dashboard.js
export const Dashboard = () => <div>Dashboard</div>;

// lazyLoad.js
const Dashboard = lazy(() =>
  import('./Dashboard').then(module => ({
    default: module.Dashboard
  }))
);
\`\`\`

**3. Route-Based Splitting:**
\`\`\`jsx
// Next.js - automatic with dynamic
import dynamic from 'next/dynamic';

const DynamicChart = dynamic(() => import('../components/Chart'), {
  loading: () => <p>Loading chart...</p>,
  ssr: false  // Only client-side
});

// Vite/CRA
const routes = [
  {
    path: '/admin',
    component: lazy(() => import('./pages/Admin')),
  },
  {
    path: '/profile',
    component: lazy(() => import('./pages/Profile')),
  },
];
\`\`\`

**4. Component-Level Splitting:**
\`\`\`jsx
const HeavyComponent = lazy(() => import('./HeavyComponent'));

function Dashboard() {
  const [showChart, setShowChart] = useState(false);

  return (
    <div>
      <button onClick={() => setShowChart(true)}>Show Chart</button>
      {showChart && (
        <Suspense fallback={<ChartSkeleton />}>
          <HeavyComponent />
        </Suspense>
      )}
    </div>
  );
}
\`\`\`

**5. Preloading:**
\`\`\`jsx
const Dashboard = lazy(() => import('./Dashboard'));

// Preload on hover
function NavLink() {
  const preloadDashboard = () => {
    import('./Dashboard');  // Starts loading
  };

  return (
    <Link
      to="/dashboard"
      onMouseEnter={preloadDashboard}
    >
      Dashboard
    </Link>
  );
}
\`\`\`

**6. Error Handling:**
\`\`\`jsx
<ErrorBoundary fallback={<LoadError />}>
  <Suspense fallback={<Loading />}>
    <LazyComponent />
  </Suspense>
</ErrorBoundary>
\`\`\`

**Bundle Analysis:**
\`\`\`bash
# CRA
npm run build -- --stats
npx webpack-bundle-analyzer build/bundle-stats.json

# Next.js
ANALYZE=true npm run build
\`\`\``
        },
        {
          id: 11,
          question: "What is the useTransition Hook and how does it work?",
          answer: `**useTransition** marks state updates as non-urgent, allowing urgent updates to interrupt them.

**Basic Usage:**
\`\`\`jsx
function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    // Urgent: Update input immediately
    setQuery(e.target.value);

    // Non-urgent: Can be interrupted
    startTransition(() => {
      setResults(filterResults(e.target.value));
    });
  };

  return (
    <div>
      <input value={query} onChange={handleChange} />
      {isPending ? (
        <Spinner />
      ) : (
        <ResultsList results={results} />
      )}
    </div>
  );
}
\`\`\`

**Tab Switching Example:**
\`\`\`jsx
function TabContainer() {
  const [tab, setTab] = useState('home');
  const [isPending, startTransition] = useTransition();

  const selectTab = (nextTab) => {
    startTransition(() => {
      setTab(nextTab);  // Low priority - doesn't block UI
    });
  };

  return (
    <div>
      <TabButtons
        selectedTab={tab}
        onSelect={selectTab}
      />
      <div style={{ opacity: isPending ? 0.7 : 1 }}>
        {tab === 'home' && <Home />}
        {tab === 'posts' && <Posts />}  {/* Slow component */}
        {tab === 'contact' && <Contact />}
      </div>
    </div>
  );
}
\`\`\`

**Comparison with useDeferredValue:**
\`\`\`jsx
// useTransition - you control when to defer
const [isPending, startTransition] = useTransition();
startTransition(() => setList(newList));

// useDeferredValue - defer a value
const deferredQuery = useDeferredValue(query);
// Returns stale value while update is pending

function SearchResults({ query }) {
  const deferredQuery = useDeferredValue(query);
  const isStale = query !== deferredQuery;

  return (
    <div style={{ opacity: isStale ? 0.5 : 1 }}>
      <SlowList query={deferredQuery} />
    </div>
  );
}
\`\`\`

**Form with Transition:**
\`\`\`jsx
function Form() {
  const [formData, setFormData] = useState({});
  const [preview, setPreview] = useState(null);
  const [isPending, startTransition] = useTransition();

  const handleChange = (field, value) => {
    // Immediate form update
    setFormData(prev => ({ ...prev, [field]: value }));

    // Deferred preview generation
    startTransition(() => {
      setPreview(generatePreview({ ...formData, [field]: value }));
    });
  };

  return (
    <div>
      <FormFields data={formData} onChange={handleChange} />
      <div className={isPending ? 'preview-updating' : ''}>
        <Preview data={preview} />
      </div>
    </div>
  );
}
\`\`\`

**Key Points:**
- Non-blocking UI updates
- \`isPending\` for loading states
- Works with Suspense
- React 18+ feature`
        },
        {
          id: 12,
          question: "How do you handle state management in large React applications?",
          answer: `**State Management Options:**

**1. React Context (Built-in):**
\`\`\`jsx
// Good for: Theme, Auth, Global UI state
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    const user = await api.login(credentials);
    setUser(user);
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
}
\`\`\`

**2. Zustand (Simple, Modern):**
\`\`\`jsx
import { create } from 'zustand';

const useStore = create((set, get) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({
    todos: [...state.todos, todo]
  })),
  removeTodo: (id) => set((state) => ({
    todos: state.todos.filter(t => t.id !== id)
  })),
  // Async actions
  fetchTodos: async () => {
    const todos = await api.getTodos();
    set({ todos });
  }
}));

// Component
function TodoList() {
  const { todos, addTodo, fetchTodos } = useStore();

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <ul>
      {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
    </ul>
  );
}
\`\`\`

**3. Redux Toolkit (Enterprise):**
\`\`\`jsx
import { createSlice, configureStore } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);  // Immer handles immutability
    },
    removeTodo: (state, action) => {
      return state.filter(t => t.id !== action.payload);
    }
  }
});

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer
  }
});

// RTK Query for data fetching
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => 'todos'
    })
  })
});
\`\`\`

**4. TanStack Query (Server State):**
\`\`\`jsx
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

function Todos() {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos
  });

  const mutation = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    }
  });

  return (/* ... */);
}
\`\`\`

**Recommendations:**
| State Type | Solution |
|------------|----------|
| UI State | useState, Zustand |
| Server State | TanStack Query |
| Forms | React Hook Form |
| Global App | Context, Zustand, Redux |
| Complex Flows | Redux Toolkit |

**Avoid:**
- Putting everything in global state
- Deeply nested context providers
- Overusing Redux for simple cases`
        },
        {
          id: 13,
          question: "How do you test React components?",
          answer: `**Testing Tools:**
- **Jest** - Test runner
- **React Testing Library** - DOM testing
- **MSW** - API mocking

**1. Unit Testing Components:**
\`\`\`jsx
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
  it('renders initial count', () => {
    render(<Counter initialCount={5} />);
    expect(screen.getByText('Count: 5')).toBeInTheDocument();
  });

  it('increments count on button click', () => {
    render(<Counter initialCount={0} />);

    fireEvent.click(screen.getByRole('button', { name: /increment/i }));

    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });
});
\`\`\`

**2. Testing with User Events:**
\`\`\`jsx
import userEvent from '@testing-library/user-event';

it('submits form with entered data', async () => {
  const handleSubmit = jest.fn();
  const user = userEvent.setup();

  render(<LoginForm onSubmit={handleSubmit} />);

  await user.type(screen.getByLabelText(/email/i), 'test@example.com');
  await user.type(screen.getByLabelText(/password/i), 'password123');
  await user.click(screen.getByRole('button', { name: /submit/i }));

  expect(handleSubmit).toHaveBeenCalledWith({
    email: 'test@example.com',
    password: 'password123'
  });
});
\`\`\`

**3. Testing Async Behavior:**
\`\`\`jsx
import { render, screen, waitFor } from '@testing-library/react';

it('loads and displays users', async () => {
  render(<UserList />);

  // Wait for loading to finish
  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});
\`\`\`

**4. Mocking API Calls:**
\`\`\`jsx
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('/api/users', (req, res, ctx) => {
    return res(ctx.json([{ id: 1, name: 'John' }]));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it('handles server error', async () => {
  server.use(
    rest.get('/api/users', (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<UserList />);

  await waitFor(() => {
    expect(screen.getByText(/error/i)).toBeInTheDocument();
  });
});
\`\`\`

**5. Testing Hooks:**
\`\`\`jsx
import { renderHook, act } from '@testing-library/react';
import useCounter from './useCounter';

it('increments counter', () => {
  const { result } = renderHook(() => useCounter(0));

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});
\`\`\`

**6. Testing Context:**
\`\`\`jsx
const wrapper = ({ children }) => (
  <ThemeProvider value="dark">{children}</ThemeProvider>
);

render(<ThemedButton />, { wrapper });
\`\`\`

**Best Practices:**
- Test behavior, not implementation
- Use \`getByRole\`, \`getByLabelText\` over \`getByTestId\`
- Avoid testing internal state
- Mock external dependencies`
        },
        {
          id: 14,
          question: "What is hydration in React and what are hydration errors?",
          answer: `**Hydration** is the process of attaching event handlers to server-rendered HTML, making it interactive.

**How Hydration Works:**
\`\`\`
Server → Generate HTML → Send to Browser
                              ↓
                    Browser displays HTML
                              ↓
                    Load JavaScript bundle
                              ↓
                    React "hydrates" - attaches
                    event handlers to existing DOM
\`\`\`

**Hydration in Code:**
\`\`\`jsx
// Server (simplified)
const html = ReactDOMServer.renderToString(<App />);
// Returns: <div>Hello World</div>

// Client
ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <App />
);
// Attaches to existing HTML, adds interactivity
\`\`\`

**Hydration Errors:**
Occur when server HTML doesn't match client-side render.

\`\`\`jsx
// Error: Server renders "Server Time", client renders "Client Time"
function Clock() {
  return <span>{new Date().toISOString()}</span>;  // Different on server/client
}

// Error: Server has no window
function Component() {
  return <span>{window.innerWidth}</span>;  // window undefined on server
}
\`\`\`

**Fixing Hydration Errors:**

**1. useEffect for Client-Only Code:**
\`\`\`jsx
function Clock() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(new Date().toISOString());
  }, []);

  if (!time) return <span>Loading...</span>;
  return <span>{time}</span>;
}
\`\`\`

**2. suppressHydrationWarning:**
\`\`\`jsx
<span suppressHydrationWarning>
  {new Date().toISOString()}
</span>
// Use sparingly - hides real issues
\`\`\`

**3. Dynamic Import with ssr: false:**
\`\`\`jsx
// Next.js
const MapComponent = dynamic(() => import('./Map'), {
  ssr: false  // Only renders on client
});
\`\`\`

**4. useId for Consistent IDs:**
\`\`\`jsx
function InputField() {
  const id = useId();  // Same on server and client

  return (
    <>
      <label htmlFor={id}>Name</label>
      <input id={id} />
    </>
  );
}
\`\`\`

**Common Causes:**
- Browser extensions modifying HTML
- Different data on server vs client
- Random values (Math.random, Date.now)
- Browser-only APIs (window, document)
- Invalid HTML nesting (\`<div>\` inside \`<p>\`)

**Debugging:**
\`\`\`jsx
// React 18+ shows detailed mismatch info in console
// Look for:
// "Warning: Text content did not match"
// "Warning: Expected server HTML to contain..."
\`\`\``
        },
        {
          id: 15,
          question: "How do you implement infinite scrolling in React?",
          answer: `**Intersection Observer Approach:**
\`\`\`jsx
function InfiniteList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          setPage(prev => prev + 1);
        }
      },
      { threshold: 0.1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [hasMore, loading]);

  // Fetch data when page changes
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const newItems = await api.getItems(page);

      if (newItems.length === 0) {
        setHasMore(false);
      } else {
        setItems(prev => [...prev, ...newItems]);
      }
      setLoading(false);
    };

    fetchData();
  }, [page]);

  return (
    <div>
      {items.map(item => (
        <ItemCard key={item.id} item={item} />
      ))}

      {/* Invisible loader element */}
      <div ref={loaderRef} style={{ height: 20 }}>
        {loading && <Spinner />}
      </div>

      {!hasMore && <p>No more items</p>}
    </div>
  );
}
\`\`\`

**Custom Hook:**
\`\`\`jsx
function useInfiniteScroll(callback) {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      if (scrollHeight - scrollTop <= clientHeight * 1.5) {
        setIsFetching(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    callback().then(() => setIsFetching(false));
  }, [isFetching, callback]);

  return [isFetching, setIsFetching];
}
\`\`\`

**With TanStack Query:**
\`\`\`jsx
import { useInfiniteQuery } from '@tanstack/react-query';

function InfiniteList() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useInfiniteQuery({
    queryKey: ['items'],
    queryFn: ({ pageParam = 1 }) => fetchItems(pageParam),
    getNextPageParam: (lastPage, pages) => {
      return lastPage.hasMore ? pages.length + 1 : undefined;
    }
  });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <div>
      {data?.pages.map((page, i) => (
        <React.Fragment key={i}>
          {page.items.map(item => (
            <Item key={item.id} item={item} />
          ))}
        </React.Fragment>
      ))}

      <div ref={ref}>
        {isFetchingNextPage && <Loading />}
      </div>
    </div>
  );
}
\`\`\`

**With Virtualization (Large Lists):**
\`\`\`jsx
import { useVirtualizer } from '@tanstack/react-virtual';

function VirtualInfiniteList({ items, loadMore, hasMore }) {
  const parentRef = useRef(null);

  const virtualizer = useVirtualizer({
    count: hasMore ? items.length + 1 : items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
    overscan: 5
  });

  useEffect(() => {
    const lastItem = virtualizer.getVirtualItems().at(-1);
    if (lastItem?.index >= items.length - 1 && hasMore) {
      loadMore();
    }
  }, [virtualizer.getVirtualItems(), hasMore, loadMore]);

  return (
    <div ref={parentRef} style={{ height: 400, overflow: 'auto' }}>
      <div style={{ height: virtualizer.getTotalSize() }}>
        {virtualizer.getVirtualItems().map(row => (
          <div
            key={row.key}
            style={{
              position: 'absolute',
              top: row.start,
              height: row.size
            }}
          >
            {items[row.index] ? (
              <ItemRow item={items[row.index]} />
            ) : (
              <Loading />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
\`\`\``
        },
        {
          id: 16,
          question: "What is the difference between useEffect and useLayoutEffect?",
          answer: `Both Hooks run after render, but they run at different times.

**useEffect:**
- Runs after the browser paints
- Best for data fetching, subscriptions, logging

**useLayoutEffect:**
- Runs synchronously after DOM updates but before paint
- Best for measuring DOM or preventing visual flicker

\`\`\`jsx
function Tooltip() {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    setHeight(ref.current.getBoundingClientRect().height);
  }, []);

  return <div ref={ref}>Tooltip height: {height}</div>;
}
\`\`\`

**Interview point:** prefer \`useEffect\` by default. Use \`useLayoutEffect\` only when timing matters, because it can block painting and hurt performance.`
        },
        {
          id: 17,
          question: "What are stale closures in React and how do you fix them?",
          answer: `A **stale closure** happens when a callback captures old state or props and keeps using outdated values.

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      console.log(count); // stale value if deps are wrong
    }, 1000);

    return () => clearInterval(id);
  }, []); // Bug
}
\`\`\`

**Ways to fix it:**

**1. Add correct dependencies**
\`\`\`jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log(count);
  }, 1000);

  return () => clearInterval(id);
}, [count]);
\`\`\`

**2. Use functional state updates**
\`\`\`jsx
setCount((prev) => prev + 1);
\`\`\`

**3. Use refs for mutable latest values**
\`\`\`jsx
const latestCount = useRef(count);
latestCount.current = count;
\`\`\`

This is a common senior-level bug source in timers, event listeners, async callbacks, and subscriptions.`
        },
        {
          id: 18,
          question: "Why does React StrictMode run effects twice in development?",
          answer: `In React development builds, **StrictMode** may mount, unmount, and remount components to expose unsafe side effects.

**Purpose:**
- Detect missing cleanup logic
- Reveal code that assumes effects run only once
- Prepare apps for concurrent rendering behavior

\`\`\`jsx
useEffect(() => {
  const socket = connect();

  return () => {
    socket.disconnect();
  };
}, []);
\`\`\`

If cleanup is correct, running the effect twice in development should not break the app.

**Interview point:** this is expected behavior in development, not a production bug. If double execution causes issues, the effect usually needs better cleanup or a different design.`
        },
        {
          id: 19,
          question: "What is automatic batching in React 18?",
          answer: `**Automatic batching** means React groups multiple state updates into a single render when possible.

\`\`\`jsx
function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  function handleClick() {
    setTimeout(() => {
      setCount((c) => c + 1);
      setFlag((f) => !f);
      // React 18 batches these into one render
    }, 100);
  }
}
\`\`\`

**Before React 18:**
- Batching mainly happened inside React event handlers

**React 18:**
- Batching also happens in timeouts, promises, and native event handlers

**Benefit:**
- Fewer renders
- Better performance

If you need an immediate DOM flush in a rare case, React provides \`flushSync\`, but it should be used carefully.`
        },
        {
          id: 20,
          question: "What is the difference between useTransition and useDeferredValue?",
          answer: `Both help keep the UI responsive, but they solve different problems.

**useTransition:**
- Marks a state update as non-urgent
- You control which update is deferred

\`\`\`jsx
const [isPending, startTransition] = useTransition();

function handleChange(e) {
  const value = e.target.value;
  setInput(value);

  startTransition(() => {
    setResults(filterLargeList(value));
  });
}
\`\`\`

**useDeferredValue:**
- Defers a derived value
- Useful when a child is expensive to render

\`\`\`jsx
const deferredQuery = useDeferredValue(query);
const results = useMemo(() => search(items, deferredQuery), [items, deferredQuery]);
\`\`\`

**Simple rule:**
- Use \`useTransition\` when deferring a state update
- Use \`useDeferredValue\` when deferring consumption of a value`
        },
        {
          id: 21,
          question: "What are Context API performance pitfalls and how do you avoid them?",
          answer: `A common issue with **Context** is that every consumer re-renders when the provider value changes.

\`\`\`jsx
<AppContext.Provider value={{ user, theme, setTheme }}>
  <Dashboard />
</AppContext.Provider>
\`\`\`

The object above is recreated every render, so consumers can re-render more often than expected.

**Ways to improve it:**
- Split contexts by concern
- Memoize provider values when appropriate
- Keep frequently changing state local when possible
- Use selector-based libraries for complex global state

\`\`\`jsx
const contextValue = useMemo(() => ({ theme, setTheme }), [theme]);

<ThemeContext.Provider value={contextValue}>
  {children}
</ThemeContext.Provider>
\`\`\`

**Interview point:** Context is fine for theme, auth, and locale. It can become inefficient if used as a catch-all global store for rapidly changing data.`
        },
        {
          id: 22,
          question: "How does ref forwarding work in React?",
          answer: `**Ref forwarding** lets a component pass a ref it receives down to a child DOM node or another component.

\`\`\`jsx
import { forwardRef } from "react";

const Input = forwardRef(function Input(props, ref) {
  return <input ref={ref} {...props} />;
});

function Form() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <Input ref={inputRef} />;
}
\`\`\`

**Why it matters:**
- Building reusable input/button libraries
- Managing focus
- Integrating with third-party DOM APIs

It is often paired with \`useImperativeHandle\` when you want to expose a controlled imperative API instead of the raw DOM node.`
        },
        {
          id: 23,
          question: "What is the compound components pattern in React?",
          answer: `The **compound components** pattern lets related components share state and behavior while keeping the API expressive.

\`\`\`jsx
function Tabs({ children }) {
  const [active, setActive] = useState("profile");

  return (
    <TabsContext.Provider value={{ active, setActive }}>
      {children}
    </TabsContext.Provider>
  );
}

Tabs.List = function TabsList({ children }) {
  return <div>{children}</div>;
};

Tabs.Trigger = function TabsTrigger({ id, children }) {
  const { active, setActive } = useContext(TabsContext);
  return (
    <button onClick={() => setActive(id)} aria-pressed={active === id}>
      {children}
    </button>
  );
};
\`\`\`

**Why teams use it:**
- Clean API
- Flexible composition
- Good fit for design systems

Examples: tabs, accordions, menus, dialogs.`
        },
        {
          id: 24,
          question: "How do you implement optimistic UI updates in React?",
          answer: `An **optimistic update** updates the UI before the server confirms success, then rolls back if the request fails.

\`\`\`jsx
async function handleLike(postId) {
  setPosts((prev) =>
    prev.map((post) =>
      post.id === postId ? { ...post, liked: true, likes: post.likes + 1 } : post
    )
  );

  try {
    await api.likePost(postId);
  } catch (error) {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId ? { ...post, liked: false, likes: post.likes - 1 } : post
      )
    );
  }
}
\`\`\`

**Benefits:**
- Faster-feeling UI
- Better perceived performance

**Requirements:**
- Ability to rollback on failure
- Idempotent server APIs where possible
- Good error messaging for the user`
        },
        {
          id: 25,
          question: "How do you prevent race conditions in React data fetching?",
          answer: `Race conditions happen when multiple async requests finish out of order and stale data overwrites newer data.

\`\`\`jsx
useEffect(() => {
  const controller = new AbortController();

  async function load() {
    const response = await fetch(\`/api/search?q=\${query}\`, {
      signal: controller.signal,
    });
    const data = await response.json();
    setResults(data);
  }

  load().catch((error) => {
    if (error.name !== "AbortError") {
      console.error(error);
    }
  });

  return () => controller.abort();
}, [query]);
\`\`\`

**Ways to avoid races:**
- Abort old requests
- Track request IDs
- Ignore stale results
- Use data-fetching libraries that manage caching and cancellation

This is especially important in search, autocomplete, and rapidly changing filters.`
        },
        {
          id: 26,
          question: "Why is fetching data directly in useEffect often not enough for large apps?",
          answer: `Fetching in \`useEffect\` works for simple cases, but larger apps usually need more than just loading data once.

**Problems you quickly hit:**
- Duplicate loading logic
- No shared cache
- Re-fetching on every mount
- Manual retries and error handling
- Hard-to-manage stale data

\`\`\`jsx
useEffect(() => {
  let ignore = false;

  fetch("/api/users")
    .then((res) => res.json())
    .then((data) => {
      if (!ignore) setUsers(data);
    });

  return () => {
    ignore = true;
  };
}, []);
\`\`\`

Libraries like TanStack Query or SWR solve caching, invalidation, retries, background refresh, and request deduplication much more cleanly.

**Interview point:** \`useEffect\` is a primitive. It is not a full data layer.`
        },
        {
          id: 27,
          question: "How do you debug unnecessary re-renders in React?",
          answer: `Common ways to debug re-renders:

**1. React DevTools Profiler**
- See which components rendered
- Measure render duration

**2. Add temporary logs**
\`\`\`jsx
function ProductList(props) {
  console.log("ProductList rendered");
  return <div>...</div>;
}
\`\`\`

**3. Check unstable props**
- Inline objects
- Inline arrays
- Inline callbacks

\`\`\`jsx
// Causes new reference every render
<Chart options={{ responsive: true }} />
\`\`\`

**4. Check parent renders**
A child can re-render because its parent rendered, even if the child props are logically the same.

**5. Use memoization only where it helps**
- \`React.memo\`
- \`useMemo\`
- \`useCallback\`

The goal is not zero re-renders. The goal is to remove expensive or wasteful ones that affect user experience.`
        },
        {
          id: 28,
          question: "What are common key-related bugs in React lists?",
          answer: `Using unstable keys can make React associate the wrong component instance with an item.

\`\`\`jsx
// Problematic if list order changes
{items.map((item, index) => (
  <TodoItem key={index} item={item} />
))}
\`\`\`

**What can go wrong:**
- Input values jump to the wrong row
- Checkbox state appears on the wrong item
- Animations break
- Focus moves unexpectedly

**Correct approach:**
\`\`\`jsx
{items.map((item) => (
  <TodoItem key={item.id} item={item} />
))}
\`\`\`

**Rule of thumb:**
- Use stable unique IDs from the data
- Use index only for truly static lists that never reorder, filter, or insert in the middle`
        },
        {
          id: 29,
          question: "How do you design scalable state management in React applications?",
          answer: `Scalable state management is mostly about putting state in the right place.

**Good approach:**
- Keep local UI state local
- Lift shared state only when necessary
- Use Context for low-frequency cross-cutting concerns
- Use dedicated state/data libraries for complex async or global workflows

**Typical split:**
- Local component state: modals, inputs, toggles
- Server state: fetched data, caching, retries
- Global client state: auth, theme, feature flags

**Common tool choices:**
- React state + Context for simple apps
- TanStack Query/SWR for server state
- Zustand/Redux Toolkit for complex shared client state

**Interview point:** a common mistake is pushing all state into one global store too early. That increases coupling and makes updates harder to reason about.`
        },
        {
          id: 30,
          question: "What are the main accessibility considerations when building React components?",
          answer: `React does not make a UI accessible automatically. You still need to build with semantic HTML and keyboard support.

**Key practices:**
- Use real buttons for actions and links for navigation
- Provide labels for inputs
- Manage focus in modals and dialogs
- Support keyboard interaction
- Use ARIA only when native HTML is not enough

\`\`\`jsx
function SearchBox() {
  return (
    <>
      <label htmlFor="search">Search</label>
      <input id="search" type="text" />
    </>
  );
}
\`\`\`

**Examples of interview-worthy issues:**
- Clickable \`div\` instead of \`button\`
- Missing \`alt\` text
- No focus trap in modal
- Poor heading structure

Accessibility is a strong senior signal because it affects real users and often gets missed in otherwise polished apps.`
        }
      ]
    }
  ]
};
