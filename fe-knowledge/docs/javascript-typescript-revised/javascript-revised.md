---
sidebar_position: 1
---

# Closures

Closures are a fundamental concept in JavaScript where a function "remembers" the scope in which it was created, even after that scope has finished execution. In simple terms, a closure allows a function to access variables from its outer scope even after the outer function has returned.

```js title="docusaurus.config.js"
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Outer Variable: ${outerVariable}`);
        console.log(`Inner Variable: ${innerVariable}`);
    };
}

const newFunction = outerFunction('outer');
newFunction('inner');
```

### Application in React
#### 1.Handling Event Listeners in Functional Component

React components often use closures to capture variables or states that are needed in event handlers.
Here's an example of how closures allow access to the component’s state even in an asynchronous event handler:

```js
function Counter() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setTimeout(() => {
      // This callback "remembers" the `count` value due to closure
      console.log('Current count:', count);
    }, 1000);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Log Count</button>
    </div>
  );
}
```

## 2. useCallback and Closure

Memoizing functions: When you use useCallback, the callback function closes over state or props. The closure allows the callback to access the variables it needs, but the function will only be recreated if the dependencies change.
Prevents unnecessary re-renders: Memoized functions using useCallback help avoid passing new function references to child components unless necessary, which improves performance.


```js
function MyComponent() {
    const [count, setCount] = React.useState(0);

    const handleClick = React.useCallback(() => {
        console.log(count); // Closure over `count`
    }, [count]); // Dependency on `count`

    return <button onClick={handleClick}>Click me</button>;
}
```

## 3. useEffect and Closure
Whenever you define an effect inside a React component, the function you pass to useEffect closes over the component’s state and props at the time the effect was created. This means that the effect function can access the variables in the outer scope (the component’s state, props, and any other variables).

However, if the state or props change between renders, the effect function could be working with outdated values from the previous render due to closures.

Here’s a simple example to illustrate:

```js
function MyComponent() {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        console.log(count); // Closure over `count`
    }, []); // No dependencies

    return <button onClick={() => setCount(count + 1)}>Increment</button>;
}
```

In this example, the effect function closes over the count variable. The effect will log the current count value when the component mounts, but it will always log the initial count value of 0 because the effect has no dependencies.

To fix this issue, you can add count as a dependency to the useEffect hook:

```js
function MyComponent() {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        console.log(count); // Closure over `count`
    }, [count]); // Dependency on `count`

    return <button onClick={() => setCount(count + 1)}>Increment</button>;
}
```


