---
title: "Syntax Test"
description: "Testing Everforest colors"
pubDate: 2024-01-01
---

## JavaScript Test

```javascript
// This comment should be GREY
function testFunction(param) {  // function: AQUA, param: BLUE
  const message = "Hello World"; // const: ORANGE, string: GREEN
  const count = 42;              // number: PURPLE
  
  if (count > 0) {               // if: RED, operator: ORANGE
    return true;                 // return: RED, true: AQUA
  }
}

class TestClass {                // class: ORANGE, TestClass: YELLOW
  constructor() {
    this.value = null;           // this: BLUE, null: AQUA
  }
}
```

## TypeScript Test

```typescript
interface User {                 // interface: ORANGE, User: YELLOW
  id: number;                   // number: YELLOW
  name: string;                 // string: YELLOW  
  active: boolean;              // boolean: YELLOW
}

const users: User[] = [];       // const: ORANGE, User: YELLOW, []: BLUE

function processUser(user: User): void {  // function: AQUA, void: YELLOW
  console.log(`Processing ${user.name}`); // console: BLUE, template: GREEN
}
```

## CSS Test

```css
.container {                    /* class: YELLOW */
  background-color: #ff0000;    /* property: BLUE, color: GREEN */
  padding: 1rem;                /* value: PURPLE */
  border: 1px solid red;        /* keywords: RED */
}

@media (max-width: 768px) {     /* @media: ORANGE, value: PURPLE */
  .container {
    padding: 0.5rem;
  }
}
```