# Test Live Code Syntax

Testing different syntaxes to see what works with the current setup.

## Test 1: JSX Live (Should Work)

```jsx live
function TestJSX() {
  return <div>JSX Live works!</div>;
}
```

## Test 2: JavaScript Live (Might Not Work)

```javascript live
let a = 10;
let b = a;
b = 20;
console.log('b:', b);
console.log('a:', a);
```

## Test 3: JS Live (Might Not Work)

```js live
let a = 10;
let b = a;
b = 20;
console.log('b:', b);
console.log('a:', a);
```

## Test 4: JSX Live with JavaScript Execution

```jsx live
function TestJavaScript() {
  React.useEffect(() => {
    let a = 10;
    let b = a;
    b = 20;
    console.log('b:', b);
    console.log('a:', a);
  }, []);
  
  return <div>Check console for JavaScript output</div>;
}
```

## Test 5: Regular Code Block (Always Works)

```javascript
let a = 10;
let b = a;
b = 20;
console.log('b:', b); // 20
console.log('a:', a); // 10
```

## Test 6: JSX Live with Display

```jsx live
function DisplayJavaScript() {
  let a = 10;
  let b = a;
  b = 20;
  
  return (
    <div>
      <h3>JavaScript Variable Assignment</h3>
      <p>a = {a}</p>
      <p>b = {b}</p>
      <p>Explanation: b gets a copy of a's value</p>
    </div>
  );
}
```

## Results

Based on the current setup with `@docusaurus/theme-live-codeblock@3.5.2`:

- ✅ **JSX Live**: Works for React components
- ❌ **JavaScript Live**: Not supported
- ❌ **JS Live**: Not supported  
- ✅ **Regular Code Blocks**: Always work
- ✅ **JSX Live with JavaScript**: Works when wrapped in React components
