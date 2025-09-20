# Components and JSX

Components are the building blocks of React applications. They let you split the UI into independent, reusable pieces.

## What are Components?

Components are JavaScript functions that return JSX (JavaScript XML). They can be:

- **Functional Components**: Modern React components using functions
- **Class Components**: Traditional React components using ES6 classes

## Functional Components

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Arrow function syntax
const Welcome = (props) => {
  return <h1>Hello, {props.name}!</h1>;
};

// Implicit return
const Welcome = (props) => <h1>Hello, {props.name}!</h1>;
```

## JSX Syntax

JSX is a syntax extension for JavaScript that looks like HTML but is actually JavaScript.

### Basic JSX

```javascript
const element = <h1>Hello, world!</h1>;
```

### JSX with Expressions

```javascript
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
```

### JSX with Attributes

```javascript
const element = <div tabIndex="0"></div>;
const element2 = <img src={user.avatarUrl}></img>;
```

### JSX with Children

```javascript
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

## Component Composition

Components can be composed together to build complex UIs.

```javascript
function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return <header>My App</header>;
}

function Main() {
  return (
    <main>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </main>
  );
}

function Footer() {
  return <footer>© 2024 My App</footer>;
}
```

## Props

Props (properties) are how you pass data from parent to child components.

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
```

### Destructuring Props

```javascript
function Welcome({ name, age }) {
  return (
    <h1>
      Hello, {name}! You are {age} years old.
    </h1>
  );
}
```

### Default Props

```javascript
function Welcome({ name = 'Guest' }) {
  return <h1>Hello, {name}!</h1>;
}
```

## Conditional Rendering

```javascript
function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Welcome back!</h1>;
  }
  return <h1>Please sign up.</h1>;
}

// Using ternary operator
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>}
    </div>
  );
}

// Using logical AND operator
function Mailbox({ unreadMessages }) {
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  );
}
```

## Lists and Keys

```javascript
function NumberList({ numbers }) {
  const listItems = numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));
  return <ul>{listItems}</ul>;
}

// Inline JSX
function NumberList({ numbers }) {
  return (
    <ul>
      {numbers.map((number) => (
        <li key={number.toString()}>{number}</li>
      ))}
    </ul>
  );
}
```

## Best Practices

1. **Use functional components** - they're simpler and more performant
2. **Keep components small** - single responsibility principle
3. **Use meaningful names** for components and props
4. **Extract complex logic** into custom hooks
5. **Use TypeScript** for better type safety
6. **Always use keys** when rendering lists
7. **Avoid inline functions** in JSX when possible

