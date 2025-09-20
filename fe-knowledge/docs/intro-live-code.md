# Live Code Examples

This page demonstrates how to use live code snippets in the Frontend Knowledge Hub.

## Simple JavaScript Example

```jsx live
function SimpleExample() {
  const [count, setCount] = React.useState(0);
  
  return (
    <div>
      <h3>Counter Example</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}
```

## JavaScript Array Methods

```jsx live
function ArrayExample() {
  const numbers = [1, 2, 3, 4, 5];
  
  const doubled = numbers.map(n => n * 2);
  const evens = numbers.filter(n => n % 2 === 0);
  const sum = numbers.reduce((acc, n) => acc + n, 0);
  
  return (
    <div>
      <h3>Array Methods</h3>
      <p>Original: {numbers.join(", ")}</p>
      <p>Doubled: {doubled.join(", ")}</p>
      <p>Evens: {evens.join(", ")}</p>
      <p>Sum: {sum}</p>
    </div>
  );
}
```

## React Component Example

```jsx live
function ReactExample() {
  const [name, setName] = React.useState("World");
  const [isVisible, setIsVisible] = React.useState(true);
  
  return (
    <div>
      <h3>React Component</h3>
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"} Message
      </button>
      {isVisible && <p>Hello, {name}!</p>}
    </div>
  );
}
```

## How to Use

To create live code blocks in your markdown files, use:

````markdown
```jsx live
function MyComponent() {
  return <div>Hello World!</div>;
}
```
````

### Features:
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
