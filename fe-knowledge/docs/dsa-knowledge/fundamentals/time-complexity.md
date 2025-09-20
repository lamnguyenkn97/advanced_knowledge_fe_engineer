# Time Complexity

Time complexity is a fundamental concept in computer science that describes how the runtime of an algorithm increases as the input size grows.

## Big O Notation

Big O notation is used to describe the worst-case scenario for how an algorithm performs.

### Common Time Complexities

- **O(1)**: Constant time - operations that take the same time regardless of input size
- **O(log n)**: Logarithmic time - binary search, balanced tree operations
- **O(n)**: Linear time - simple loops, linear search
- **O(n log n)**: Linearithmic time - efficient sorting algorithms
- **O(n²)**: Quadratic time - nested loops, bubble sort
- **O(2ⁿ)**: Exponential time - recursive fibonacci (naive implementation)

## Examples in JavaScript

```javascript
// O(1) - Constant time
function getFirstElement(arr) {
  return arr[0];
}

// O(n) - Linear time
function findElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// O(n²) - Quadratic time
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
```

## Why Time Complexity Matters for Frontend

Understanding time complexity helps you:

- Write efficient code that scales with data
- Choose the right data structures for your use case
- Optimize performance in React components
- Make informed decisions about algorithms
- Prepare for technical interviews

## Space Complexity

Space complexity describes how much memory an algorithm uses relative to input size.

```javascript
// O(1) space - constant space
function sum(arr) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total;
}

// O(n) space - linear space
function createArray(n) {
  return new Array(n).fill(0);
}
```

## Best Practices

1. **Choose the right algorithm** for your use case
2. **Consider both time and space complexity**
3. **Profile your code** to identify bottlenecks
4. **Use built-in methods** when they're optimized
5. **Think about scalability** from the start

