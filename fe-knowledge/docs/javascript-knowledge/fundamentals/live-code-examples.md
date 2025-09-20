# Live Code Examples - JavaScript

This page demonstrates live code snippets for JavaScript concepts. You can edit and run the code directly in the browser!

## Basic JavaScript Examples

### Variables and Scope

```jsx live
function VariableExample() {
  // var - function scoped
  var functionScoped = "I am function scoped";
  
  // let - block scoped
  let blockScoped = "I am block scoped";
  
  // const - block scoped, cannot be reassigned
  const constantValue = "I cannot be changed";
  
  return (
    <div>
      <h3>Variable Examples</h3>
      <p>Function scoped: {functionScoped}</p>
      <p>Block scoped: {blockScoped}</p>
      <p>Constant: {constantValue}</p>
    </div>
  );
}
```

### Functions and Arrow Functions

```jsx live
function FunctionExamples() {
  // Traditional function
  function traditionalFunction(name) {
    return `Hello, ${name}!`;
  }
  
  // Arrow function
  const arrowFunction = (name) => `Hello, ${name}!`;
  
  // Arrow function with implicit return
  const implicitReturn = name => `Hello, ${name}!`;
  
  const name = "Frontend Developer";
  
  return (
    <div>
      <h3>Function Examples</h3>
      <p>Traditional: {traditionalFunction(name)}</p>
      <p>Arrow: {arrowFunction(name)}</p>
      <p>Implicit: {implicitReturn(name)}</p>
    </div>
  );
}
```

### Array Methods

```jsx live
function ArrayMethods() {
  const numbers = [1, 2, 3, 4, 5];
  const names = ["Alice", "Bob", "Charlie"];
  
  // Map - transform each element
  const doubled = numbers.map(n => n * 2);
  
  // Filter - keep only elements that pass test
  const evens = numbers.filter(n => n % 2 === 0);
  
  // Reduce - accumulate values
  const sum = numbers.reduce((acc, n) => acc + n, 0);
  
  // Find - find first element that passes test
  const found = names.find(name => name.startsWith("B"));
  
  return (
    <div>
      <h3>Array Methods</h3>
      <p>Original: {numbers.join(", ")}</p>
      <p>Doubled: {doubled.join(", ")}</p>
      <p>Evens: {evens.join(", ")}</p>
      <p>Sum: {sum}</p>
      <p>Found: {found}</p>
    </div>
  );
}
```

### Destructuring

```jsx live
function DestructuringExample() {
  // Object destructuring
  const person = { name: "John", age: 30, city: "New York" };
  const { name, age, city } = person;
  
  // Array destructuring
  const colors = ["red", "green", "blue"];
  const [first, second, third] = colors;
  
  // Destructuring with default values
  const { country = "USA" } = person;
  
  return (
    <div>
      <h3>Destructuring Examples</h3>
      <p>Person: {name}, {age} years old, from {city}</p>
      <p>Colors: {first}, {second}, {third}</p>
      <p>Country: {country}</p>
    </div>
  );
}
```

### Async/Await

```jsx live
function AsyncExample() {
  const [data, setData] = React.useState("Loading...");
  const [loading, setLoading] = React.useState(true);
  
  // Simulate async operation
  const fetchData = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setData("Data fetched successfully!");
    setLoading(false);
  };
  
  React.useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div>
      <h3>Async/Await Example</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>{data}</p>
          <button onClick={fetchData}>Refresh Data</button>
        </div>
      )}
    </div>
  );
}
```

### Closures

```jsx live
function ClosureExample() {
  // Closure example
  function createCounter() {
    let count = 0;
    return function() {
      count++;
      return count;
    };
  }
  
  const counter = createCounter();
  const [count, setCount] = React.useState(0);
  
  const increment = () => {
    setCount(counter());
  };
  
  return (
    <div>
      <h3>Closure Example</h3>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <p><small>Each click increments the counter using a closure</small></p>
    </div>
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
- **Live Editing**: Edit code directly in the browser
- **Real-time Preview**: See changes instantly
- **React Support**: Full React component support
- **JavaScript Support**: Run JavaScript code snippets
- **Interactive**: Users can modify and experiment with code

### Best Practices:
1. Keep examples simple and focused
2. Use descriptive variable names
3. Add comments to explain complex concepts
4. Test your examples before publishing
5. Use React hooks for state management in examples

