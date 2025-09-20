# Live Code Examples - DSA

This page demonstrates live code snippets for Data Structures and Algorithms concepts. You can edit and run the code directly in the browser!

## Array Algorithms

### Binary Search

```jsx live
function BinarySearch() {
  const [array, setArray] = React.useState([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]);
  const [target, setTarget] = React.useState(7);
  const [result, setResult] = React.useState(null);
  const [steps, setSteps] = React.useState([]);
  
  const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    const searchSteps = [];
    
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      searchSteps.push({ left, right, mid, value: arr[mid] });
      
      if (arr[mid] === target) {
        return { found: true, index: mid, steps: searchSteps };
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    
    return { found: false, index: -1, steps: searchSteps };
  };
  
  const handleSearch = () => {
    const searchResult = binarySearch(array, target);
    setResult(searchResult);
    setSteps(searchResult.steps);
  };
  
  return (
    <div>
      <h3>Binary Search Visualization</h3>
      <p>Array: [{array.join(", ")}]</p>
      <div>
        <input 
          type="number"
          value={target}
          onChange={(e) => setTarget(parseInt(e.target.value))}
          placeholder="Enter target value"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {result && (
        <div>
          <p>Result: {result.found ? `Found at index ${result.index}` : "Not found"}</p>
          <div>
            <h4>Search Steps:</h4>
            {steps.map((step, index) => (
              <div key={index} style={{ margin: "5px 0", padding: "5px", border: "1px solid #ccc" }}>
                Step {index + 1}: left={step.left}, right={step.right}, mid={step.mid}, value={step.value}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
```

### Sorting Algorithms

```jsx live
function SortingAlgorithms() {
  const [array, setArray] = React.useState([64, 34, 25, 12, 22, 11, 90]);
  const [sortingSteps, setSortingSteps] = React.useState([]);
  const [isSorting, setIsSorting] = React.useState(false);
  
  const bubbleSort = async (arr) => {
    const steps = [];
    const newArr = [...arr];
    
    for (let i = 0; i < newArr.length - 1; i++) {
      for (let j = 0; j < newArr.length - i - 1; j++) {
        steps.push({
          step: `Comparing ${newArr[j]} and ${newArr[j + 1]}`,
          array: [...newArr],
          comparing: [j, j + 1]
        });
        
        if (newArr[j] > newArr[j + 1]) {
          [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
          steps.push({
            step: `Swapped ${newArr[j + 1]} and ${newArr[j]}`,
            array: [...newArr],
            swapped: [j, j + 1]
          });
        }
      }
    }
    
    return { sortedArray: newArr, steps };
  };
  
  const handleSort = async () => {
    setIsSorting(true);
    const result = await bubbleSort(array);
    setSortingSteps(result.steps);
    setIsSorting(false);
  };
  
  const resetArray = () => {
    setArray([64, 34, 25, 12, 22, 11, 90]);
    setSortingSteps([]);
  };
  
  return (
    <div>
      <h3>Bubble Sort Visualization</h3>
      <p>Original Array: [{array.join(", ")}]</p>
      <div>
        <button onClick={handleSort} disabled={isSorting}>
          {isSorting ? "Sorting..." : "Start Bubble Sort"}
        </button>
        <button onClick={resetArray}>Reset</button>
      </div>
      {sortingSteps.length > 0 && (
        <div>
          <h4>Sorting Steps:</h4>
          <div style={{ maxHeight: "300px", overflowY: "auto" }}>
            {sortingSteps.map((step, index) => (
              <div key={index} style={{ margin: "5px 0", padding: "5px", border: "1px solid #ccc" }}>
                <p>{step.step}</p>
                <p>Array: [{step.array.join(", ")}]</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
```

## Data Structures

### Stack Implementation

```jsx live
function StackImplementation() {
  const [stack, setStack] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  
  const push = (value) => {
    if (value.trim()) {
      setStack([...stack, value]);
      setInputValue("");
    }
  };
  
  const pop = () => {
    if (stack.length > 0) {
      setStack(stack.slice(0, -1));
    }
  };
  
  const peek = () => {
    return stack.length > 0 ? stack[stack.length - 1] : "Stack is empty";
  };
  
  const isEmpty = () => {
    return stack.length === 0;
  };
  
  return (
    <div>
      <h3>Stack Implementation</h3>
      <div>
        <input 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter value to push"
        />
        <button onClick={() => push(inputValue)}>Push</button>
        <button onClick={pop}>Pop</button>
      </div>
      <div>
        <p>Stack: [{stack.join(", ")}]</p>
        <p>Top element: {peek()}</p>
        <p>Is empty: {isEmpty() ? "Yes" : "No"}</p>
        <p>Size: {stack.length}</p>
      </div>
      <div style={{ marginTop: "10px" }}>
        <h4>Stack Operations:</h4>
        <ul>
          <li><strong>Push:</strong> Add element to top</li>
          <li><strong>Pop:</strong> Remove element from top</li>
          <li><strong>Peek:</strong> View top element without removing</li>
          <li><strong>IsEmpty:</strong> Check if stack is empty</li>
        </ul>
      </div>
    </div>
  );
}
```

### Queue Implementation

```jsx live
function QueueImplementation() {
  const [queue, setQueue] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");
  
  const enqueue = (value) => {
    if (value.trim()) {
      setQueue([...queue, value]);
      setInputValue("");
    }
  };
  
  const dequeue = () => {
    if (queue.length > 0) {
      setQueue(queue.slice(1));
    }
  };
  
  const front = () => {
    return queue.length > 0 ? queue[0] : "Queue is empty";
  };
  
  const isEmpty = () => {
    return queue.length === 0;
  };
  
  return (
    <div>
      <h3>Queue Implementation</h3>
      <div>
        <input 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter value to enqueue"
        />
        <button onClick={() => enqueue(inputValue)}>Enqueue</button>
        <button onClick={dequeue}>Dequeue</button>
      </div>
      <div>
        <p>Queue: [{queue.join(", ")}]</p>
        <p>Front element: {front()}</p>
        <p>Is empty: {isEmpty() ? "Yes" : "No"}</p>
        <p>Size: {queue.length}</p>
      </div>
      <div style={{ marginTop: "10px" }}>
        <h4>Queue Operations:</h4>
        <ul>
          <li><strong>Enqueue:</strong> Add element to rear</li>
          <li><strong>Dequeue:</strong> Remove element from front</li>
          <li><strong>Front:</strong> View front element without removing</li>
          <li><strong>IsEmpty:</strong> Check if queue is empty</li>
        </ul>
      </div>
    </div>
  );
}
```

### Linked List Visualization

```jsx live
function LinkedListVisualization() {
  const [list, setList] = React.useState([
    { value: 1, next: 1 },
    { value: 2, next: 2 },
    { value: 3, next: 3 },
    { value: 4, next: null }
  ]);
  const [inputValue, setInputValue] = React.useState("");
  const [inputIndex, setInputIndex] = React.useState("");
  
  const addNode = (value, index) => {
    if (value.trim()) {
      const newList = [...list];
      const newNode = { value: parseInt(value), next: null };
      
      if (index === "" || index >= newList.length) {
        // Add to end
        newList.push(newNode);
        if (newList.length > 1) {
          newList[newList.length - 2].next = newList.length - 1;
        }
      } else {
        // Insert at specific index
        newList.splice(index, 0, newNode);
        // Update next pointers
        for (let i = 0; i < newList.length; i++) {
          newList[i].next = i + 1 < newList.length ? i + 1 : null;
        }
      }
      
      setList(newList);
      setInputValue("");
      setInputIndex("");
    }
  };
  
  const removeNode = (index) => {
    if (index >= 0 && index < list.length) {
      const newList = list.filter((_, i) => i !== index);
      // Update next pointers
      for (let i = 0; i < newList.length; i++) {
        newList[i].next = i + 1 < newList.length ? i + 1 : null;
      }
      setList(newList);
    }
  };
  
  return (
    <div>
      <h3>Linked List Visualization</h3>
      <div>
        <input 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter value"
        />
        <input 
          type="number"
          value={inputIndex}
          onChange={(e) => setInputIndex(e.target.value)}
          placeholder="Index (optional)"
        />
        <button onClick={() => addNode(inputValue, inputIndex)}>Add Node</button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h4>Linked List:</h4>
        <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
          {list.map((node, index) => (
            <div key={index} style={{ display: "flex", alignItems: "center", margin: "5px" }}>
              <div style={{ 
                border: "2px solid #333", 
                padding: "10px", 
                margin: "5px",
                backgroundColor: "#f0f0f0"
              }}>
                <div>Value: {node.value}</div>
                <div>Next: {node.next}</div>
              </div>
              {index < list.length - 1 && <span>→</span>}
              <button 
                onClick={() => removeNode(index)}
                style={{ marginLeft: "5px", fontSize: "12px" }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

## How to Use Live Code Blocks

To create live code blocks in your markdown files, use:

````markdown
```jsx live
function MyAlgorithm() {
  // Your algorithm code here
  return <div>Result</div>;
}
```
````

### Key Features:
- **Interactive Learning**: Edit and run algorithms in real-time
- **Visualization**: See how algorithms work step by step
- **No Setup Required**: Code runs directly in the browser
- **Educational**: Perfect for learning DSA concepts

### Best Practices:
1. Keep algorithms simple and well-commented
2. Add visualizations where possible
3. Show step-by-step execution
4. Include time and space complexity information
5. Test your examples before publishing
