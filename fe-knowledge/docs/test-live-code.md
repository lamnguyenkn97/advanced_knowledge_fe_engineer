# Test Live Code

This is a simple test to verify live code blocks are working.

## Basic Test

```jsx live
function TestComponent() {
  return (
    <div>
      <h2>Hello from Live Code!</h2>
      <p>If you can see this, live code is working!</p>
    </div>
  );
}
```

## Interactive Test

```jsx live
function InteractiveTest() {
  const [count, setCount] = React.useState(0);
  
  return (
    <div>
      <h3>Interactive Counter</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me!
      </button>
    </div>
  );
}
```

If you can see the interactive components above, live code is working correctly!

