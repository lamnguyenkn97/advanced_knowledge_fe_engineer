# Variables and Scope in JavaScript

Understanding variables and scope is fundamental to writing effective JavaScript code.

## Variable Declarations

### var
- Function-scoped or globally-scoped
- Can be redeclared and reassigned
- Hoisted with undefined value

```javascript
function example() {
  console.log(x); // undefined (hoisted)
  var x = 5;
  console.log(x); // 5
}
```

### let
- Block-scoped
- Cannot be redeclared in same scope
- Hoisted but not initialized (temporal dead zone)

```javascript
function example() {
  console.log(x); // ReferenceError
  let x = 5;
  console.log(x); // 5
}
```

### const
- Block-scoped
- Cannot be redeclared or reassigned
- Must be initialized at declaration
- Hoisted but not initialized (temporal dead zone)

```javascript
const PI = 3.14159;
// PI = 3.14; // TypeError: Assignment to constant variable
```

## Scope Types

### Global Scope
Variables declared outside any function or block.

```javascript
var globalVar = 'I am global';
let globalLet = 'I am also global';
const globalConst = 'I am global too';
```

### Function Scope
Variables declared inside a function are accessible only within that function.

```javascript
function myFunction() {
  var functionScoped = 'I am function scoped';
  // Accessible only within this function
}
```

### Block Scope
Variables declared with `let` and `const` are block-scoped.

```javascript
if (true) {
  let blockScoped = 'I am block scoped';
  const alsoBlockScoped = 'Me too';
  // These are only accessible within this block
}
```

## Hoisting

JavaScript hoists variable declarations to the top of their scope.

```javascript
console.log(hoistedVar); // undefined
console.log(hoistedLet); // ReferenceError

var hoistedVar = 'I am hoisted';
let hoistedLet = 'I am not hoisted';
```

## Closures and Scope

Closures allow functions to access variables from their outer scope.

```javascript
function outerFunction(x) {
  // Outer function's scope
  return function innerFunction(y) {
    // Inner function's scope
    return x + y; // x is accessible due to closure
  };
}

const addFive = outerFunction(5);
console.log(addFive(3)); // 8
```

## Best Practices

1. **Use `const` by default** - only use `let` when you need to reassign
2. **Avoid `var`** - use `let` and `const` instead
3. **Declare variables at the top** of their scope
4. **Use meaningful names** for variables
5. **Minimize global variables** - use modules instead
