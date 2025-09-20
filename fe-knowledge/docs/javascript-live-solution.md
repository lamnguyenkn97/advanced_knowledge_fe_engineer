# JavaScript Live Code Solution

Since `@docusaurus/theme-live-codeblock` only supports JSX/React, here's the best solution for JavaScript live code.

## Solution: JSX Live with JavaScript Executor

Instead of `javascript live`, we use `jsx live` with a custom JavaScript executor component.

### Example 1: Simple JavaScript Execution

```jsx live
function JavaScriptExecutor() {
  const [code, setCode] = React.useState(`let a = 10;
let b = a;
b = 20;
console.log('b:', b); // 20
console.log('a:', a); // 10`);
  
  const [output, setOutput] = React.useState('');
  const [consoleOutput, setConsoleOutput] = React.useState([]);
  
  const executeCode = () => {
    try {
      // Clear previous output
      setOutput('');
      setConsoleOutput([]);
      
      // Override console.log to capture output
      const originalLog = console.log;
      const logs = [];
      console.log = (...args) => {
        logs.push(args.join(' '));
        originalLog(...args);
      };
      
      // Execute the code
      eval(code);
      
      // Restore console.log
      console.log = originalLog;
      
      // Update output
      setConsoleOutput(logs);
      setOutput('Code executed successfully!');
    } catch (error) {
      setOutput(`Error: ${error.message}`);
      setConsoleOutput([]);
    }
  };
  
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>JavaScript Live Executor</h3>
      <textarea 
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows={8}
        cols={60}
        style={{ 
          width: '100%', 
          fontFamily: 'monospace',
          padding: '10px',
          border: '1px solid #ddd',
          borderRadius: '4px',
          fontSize: '14px'
        }}
      />
      <br />
      <button 
        onClick={executeCode}
        style={{
          marginTop: '10px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Run JavaScript Code
      </button>
      
      {output && (
        <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
          <strong>Status:</strong> {output}
        </div>
      )}
      
      {consoleOutput.length > 0 && (
        <div style={{ marginTop: '10px' }}>
          <strong>Console Output:</strong>
          <div style={{ 
            backgroundColor: '#000', 
            color: '#0f0', 
            padding: '10px', 
            borderRadius: '4px',
            fontFamily: 'monospace',
            fontSize: '14px',
            marginTop: '5px'
          }}>
            {consoleOutput.map((log, index) => (
              <div key={index}>{log}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
```

### Example 2: Pre-built JavaScript Examples

```jsx live
function JavaScriptExamples() {
  const examples = [
    {
      title: "Variable Assignment",
      code: `let a = 10;
let b = a;
b = 20;
console.log('a:', a);
console.log('b:', b);`
    },
    {
      title: "Array Methods",
      code: `const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);

console.log('Original:', numbers);
console.log('Doubled:', doubled);
console.log('Evens:', evens);
console.log('Sum:', sum);`
    },
    {
      title: "Object Destructuring",
      code: `const person = { name: 'John', age: 30, city: 'New York' };
const { name, age, city } = person;

console.log('Person:', person);
console.log('Name:', name);
console.log('Age:', age);
console.log('City:', city);`
    }
  ];
  
  const [selectedExample, setSelectedExample] = React.useState(0);
  const [code, setCode] = React.useState(examples[0].code);
  const [output, setOutput] = React.useState('');
  const [consoleOutput, setConsoleOutput] = React.useState([]);
  
  const executeCode = () => {
    try {
      setOutput('');
      setConsoleOutput([]);
      
      const originalLog = console.log;
      const logs = [];
      console.log = (...args) => {
        logs.push(args.join(' '));
        originalLog(...args);
      };
      
      eval(code);
      
      console.log = originalLog;
      setConsoleOutput(logs);
      setOutput('Code executed successfully!');
    } catch (error) {
      setOutput(`Error: ${error.message}`);
      setConsoleOutput([]);
    }
  };
  
  const loadExample = (index) => {
    setSelectedExample(index);
    setCode(examples[index].code);
    setOutput('');
    setConsoleOutput([]);
  };
  
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>JavaScript Examples</h3>
      
      <div style={{ marginBottom: '15px' }}>
        <strong>Select Example:</strong>
        <div style={{ marginTop: '5px' }}>
          {examples.map((example, index) => (
            <button
              key={index}
              onClick={() => loadExample(index)}
              style={{
                margin: '2px',
                padding: '5px 10px',
                backgroundColor: selectedExample === index ? '#007bff' : '#f8f9fa',
                color: selectedExample === index ? 'white' : 'black',
                border: '1px solid #ddd',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              {example.title}
            </button>
          ))}
        </div>
      </div>
      
      <textarea 
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows={8}
        cols={60}
        style={{ 
          width: '100%', 
          fontFamily: 'monospace',
          padding: '10px',
          border: '1px solid #ddd',
          borderRadius: '4px',
          fontSize: '14px'
        }}
      />
      <br />
      <button 
        onClick={executeCode}
        style={{
          marginTop: '10px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Run Code
      </button>
      
      {output && (
        <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
          <strong>Status:</strong> {output}
        </div>
      )}
      
      {consoleOutput.length > 0 && (
        <div style={{ marginTop: '10px' }}>
          <strong>Console Output:</strong>
          <div style={{ 
            backgroundColor: '#000', 
            color: '#0f0', 
            padding: '10px', 
            borderRadius: '4px',
            fontFamily: 'monospace',
            fontSize: '14px',
            marginTop: '5px'
          }}>
            {consoleOutput.map((log, index) => (
              <div key={index}>{log}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
```

## How to Use This Solution

1. **Copy the JavaScript Executor component** above
2. **Use it in your markdown files** with `jsx live`
3. **Users can edit and run JavaScript code** directly in the browser
4. **Console output is captured and displayed**

## Benefits

- ✅ **Works with current setup** - No additional plugins needed
- ✅ **Interactive JavaScript execution** - Users can edit and run code
- ✅ **Console output capture** - Shows results of console.log
- ✅ **Error handling** - Displays syntax errors and runtime errors
- ✅ **Customizable** - Easy to modify and extend

## Alternative: Regular Code Blocks

For simple code display without execution:

````markdown
```javascript
let a = 10;
let b = a;
b = 20;
console.log('b:', b); // 20
console.log('a:', a); // 10
```
````

This solution gives you the best of both worlds: interactive JavaScript execution within the constraints of the current Docusaurus setup!
