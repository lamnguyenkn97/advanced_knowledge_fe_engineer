# JavaScript Live Code Test

Testing the new `@richardaum/docusaurus-plugin-code-preview` plugin for plain JavaScript live execution.

## Test 1: Plain JavaScript Live

```javascript live
let a = 10;
let b = a;
b = 20;
console.log('b:', b); // 20
console.log('a:', a); // 10
```

## Test 2: JavaScript with Functions

```javascript live
function greet(name) {
  return `Hello, ${name}!`;
}

const message = greet('Frontend Developer');
console.log(message);
```

## Test 3: JavaScript with Arrays

```javascript live
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);

console.log('Original:', numbers);
console.log('Doubled:', doubled);
console.log('Evens:', evens);
console.log('Sum:', sum);
```

## Test 4: JavaScript with Objects

```javascript live
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

// Destructuring
const { name, age, city } = person;

console.log('Person:', person);
console.log('Name:', name);
console.log('Age:', age);
console.log('City:', city);
```

## Test 5: JavaScript with Classes

```javascript live
class Calculator {
  constructor() {
    this.result = 0;
  }
  
  add(num) {
    this.result += num;
    return this;
  }
  
  multiply(num) {
    this.result *= num;
    return this;
  }
  
  getResult() {
    return this.result;
  }
}

const calc = new Calculator();
const result = calc.add(5).multiply(3).getResult();
console.log('Calculator result:', result);
```

## Test 6: JavaScript with Async/Await

```javascript live
async function fetchData() {
  try {
    // Simulate API call
    const response = await new Promise(resolve => {
      setTimeout(() => resolve({ data: 'Hello from API!' }), 1000);
    });
    
    console.log('API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
```

## Test 7: JavaScript with DOM Manipulation

```javascript live
// Create a simple DOM element
const div = document.createElement('div');
div.innerHTML = '<h3>JavaScript DOM Example</h3><p>This was created with JavaScript!</p>';
div.style.border = '1px solid #ccc';
div.style.padding = '10px';
div.style.margin = '10px 0';

// Append to body
document.body.appendChild(div);

console.log('DOM element created and appended!');
```

## How to Use

The `@richardaum/docusaurus-plugin-code-preview` plugin supports:

- **Plain JavaScript** execution
- **Real-time code editing**
- **Console output display**
- **Multiple programming languages**
- **Interactive code playgrounds**

## Syntax

Use the `live` keyword with any supported language:

````markdown
```javascript live
// Your JavaScript code here
console.log('Hello World!');
```
````

## Supported Languages

- `javascript live`
- `js live`
- `typescript live`
- `python live`
- `html live`
- `css live`
- And more!

This gives you the flexibility to create interactive examples for any programming language!
