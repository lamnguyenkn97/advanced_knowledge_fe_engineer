# Live Code Examples - React

This page demonstrates live code snippets for React concepts. You can edit and run the code directly in the browser!

## Basic React Examples

### Simple Component

```jsx live
function SimpleComponent() {
  return (
    <div>
      <h2>Hello, React!</h2>
      <p>This is a simple React component.</p>
    </div>
  );
}
```

### Props and State

```jsx live
function PropsAndState() {
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("World");
  
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
      <br />
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
    </div>
  );
}
```

### Event Handling

```jsx live
function EventHandling() {
  const [message, setMessage] = React.useState("Click a button!");
  
  const handleClick = (buttonName) => {
    setMessage(`You clicked the ${buttonName} button!`);
  };
  
  const handleMouseOver = () => {
    setMessage("Mouse is over the div!");
  };
  
  const handleMouseLeave = () => {
    setMessage("Mouse left the div!");
  };
  
  return (
    <div>
      <h3>Event Handling Examples</h3>
      <p>{message}</p>
      <button onClick={() => handleClick("First")}>
        First Button
      </button>
      <button onClick={() => handleClick("Second")}>
        Second Button
      </button>
      <div 
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        style={{
          padding: "10px",
          border: "1px solid #ccc",
          margin: "10px 0",
          cursor: "pointer"
        }}
      >
        Hover over me!
      </div>
    </div>
  );
}
```

### Conditional Rendering

```jsx live
function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState("");
  
  const handleLogin = () => {
    if (user.trim()) {
      setIsLoggedIn(true);
    }
  };
  
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser("");
  };
  
  return (
    <div>
      <h3>Conditional Rendering</h3>
      {isLoggedIn ? (
        <div>
          <p>Welcome back, {user}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <input 
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Enter your name"
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}
```

### Lists and Keys

```jsx live
function ListsAndKeys() {
  const [items, setItems] = React.useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build projects" },
    { id: 3, text: "Get a job" }
  ]);
  const [newItem, setNewItem] = React.useState("");
  
  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, { 
        id: Date.now(), 
        text: newItem 
      }]);
      setNewItem("");
    }
  };
  
  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };
  
  return (
    <div>
      <h3>Lists and Keys</h3>
      <div>
        <input 
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add new item"
        />
        <button onClick={addItem}>Add</button>
      </div>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### Custom Hooks

```jsx live
function CustomHooks() {
  // Custom hook for counter
  function useCounter(initialValue = 0) {
    const [count, setCount] = React.useState(initialValue);
    
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(initialValue);
    
    return { count, increment, decrement, reset };
  }
  
  // Custom hook for local storage
  function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = React.useState(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        return initialValue;
      }
    });
    
    const setValue = (value) => {
      try {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(error);
      }
    };
    
    return [storedValue, setValue];
  }
  
  const counter = useCounter(0);
  const [name, setName] = useLocalStorage("name", "");
  
  return (
    <div>
      <h3>Custom Hooks</h3>
      <div>
        <h4>Counter Hook</h4>
        <p>Count: {counter.count}</p>
        <button onClick={counter.increment}>+</button>
        <button onClick={counter.decrement}>-</button>
        <button onClick={counter.reset}>Reset</button>
      </div>
      <div>
        <h4>Local Storage Hook</h4>
        <input 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name (saved to localStorage)"
        />
        <p>Stored name: {name}</p>
      </div>
    </div>
  );
}
```

### useEffect Hook

```jsx live
function UseEffectExample() {
  const [count, setCount] = React.useState(0);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  
  // Effect that runs on every render
  React.useEffect(() => {
    document.title = `Count: ${count}`;
  });
  
  // Effect that runs only on mount and unmount
  React.useEffect(() => {
    console.log("Component mounted");
    return () => console.log("Component unmounted");
  }, []);
  
  // Effect that runs when count changes
  React.useEffect(() => {
    console.log(`Count changed to: ${count}`);
  }, [count]);
  
  // Effect with cleanup
  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <div>
      <h3>useEffect Examples</h3>
      <p>Count: {count}</p>
      <p>Window width: {windowWidth}px</p>
      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>
      <p><small>Check the console and document title!</small></p>
    </div>
  );
}
```

### Context API

```jsx live
function ContextExample() {
  // Create context
  const ThemeContext = React.createContext();
  
  // Theme provider component
  function ThemeProvider({ children }) {
    const [theme, setTheme] = React.useState("light");
    
    const toggleTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
    };
    
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  }
  
  // Component that uses context
  function ThemedButton() {
    const { theme, toggleTheme } = React.useContext(ThemeContext);
    
    return (
      <button 
        onClick={toggleTheme}
        style={{
          backgroundColor: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#333" : "#fff",
          border: "1px solid #ccc",
          padding: "10px"
        }}
      >
        Toggle Theme (Current: {theme})
      </button>
    );
  }
  
  // Component that uses context
  function ThemedContent() {
    const { theme } = React.useContext(ThemeContext);
    
    return (
      <div style={{
        backgroundColor: theme === "light" ? "#f9f9f9" : "#222",
        color: theme === "light" ? "#333" : "#fff",
        padding: "20px",
        margin: "10px 0"
      }}>
        <h4>This content changes with theme!</h4>
        <p>Current theme: {theme}</p>
      </div>
    );
  }
  
  return (
    <ThemeProvider>
      <div>
        <h3>Context API Example</h3>
        <ThemedButton />
        <ThemedContent />
      </div>
    </ThemeProvider>
  );
}
```

## How to Use Live Code Blocks

To create live code blocks in your markdown files, use:

````markdown
```jsx live
function MyComponent() {
  return <div>Hello World!</div>;
}
```
````

### Key Features:
- **Live Editing**: Edit React components directly in the browser
- **Real-time Preview**: See changes instantly
- **Full React Support**: Hooks, context, state management
- **Interactive**: Users can modify and experiment with code
- **No Build Step**: Code runs directly in the browser

### Best Practices:
1. Keep components simple and focused
2. Use descriptive prop and state names
3. Add comments to explain complex logic
4. Test your examples before publishing
5. Use React hooks for state management
6. Show both simple and advanced examples

