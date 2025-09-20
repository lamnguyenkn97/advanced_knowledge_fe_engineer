---
sidebar_position: 1
---

# Revised Type in JavaScript


### Primitives v.s Reference Types

1. Primitives Types
- Immutable
- Value Copy
- Stored in Stack
- Types: string, number, undefined, null, boolean

```javascript live
let a = 10;
let b = a;
b = 20;
console.log(b); // 20
console.log(a); // 10
```
#### Deep copy v.s Shallow copy


#### null v.s undefined

### == v.s ===


### Truthy v.s Falsy


### Type Coercion Rules


"5" + 1;   
"5" - 1;    
false == 0; 
[] == "";  
[] == 0;   
[1] == 1;  

### typeof v.s instanceof v.s Object.prototype.toString.call()
