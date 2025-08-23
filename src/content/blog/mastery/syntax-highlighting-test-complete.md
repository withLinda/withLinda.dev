---
title: "Complete Syntax Highlighting Test - All Elements"
description: "Comprehensive test file for all code elements requiring syntax highlighting"
pubDate: 2024-01-23
---

# Complete Syntax Highlighting Test

This document contains ALL code elements that require syntax highlighting, organized by category.

## 1. Comments

```javascript
// Line comment with single slashes
# Hash comment (common in Python, Ruby, Shell)

/* Block comment 
   spanning multiple lines */

/** 
 * Documentation comment (JSDoc)
 * @param {string} name - Parameter description
 * @returns {boolean} Return description
 */

/// Triple slash comment (TypeScript reference)

// TODO: This is a TODO annotation
// FIXME: This needs to be fixed
// NOTE: Important note here
// HACK: Temporary workaround
// BUG: Known bug here
// XXX: Marker for concern
```

```python
# Python single line comment
"""
Python multi-line docstring
with multiple lines
"""
# TODO: Python todo comment
# FIXME: Python fixme comment
```

## 2. Keywords

```javascript
// Control flow keywords
if (condition) {
  // if statement
} else if (other) {
  // else if
} else {
  // else
}

switch (value) {
  case 1:
    break;
  case 2:
    break;
  default:
    break;
}

for (let i = 0; i < 10; i++) {
  continue;
}

while (true) {
  break;
}

do {
  // do-while
} while (false);

// Flow control
function example() {
  return true;
  yield value;
}

async function asyncExample() {
  await promise;
}

// Import/Export keywords
import { something } from 'module';
export { something };
export default function() {}
const module = require('module');

// Exception handling
try {
  throw new Error('error');
} catch (error) {
  // catch block
} finally {
  // finally block
}

// Other language keywords
typeof variable;
instanceof Object;
new Constructor();
delete object.property;
void 0;
with (object) {}
debugger;
```

## 3. Operators

```javascript
// Arithmetic operators
const sum = 1 + 2;
const diff = 5 - 3;
const product = 4 * 3;
const quotient = 10 / 2;
const remainder = 10 % 3;
const power = 2 ** 3;

// Assignment operators
let x = 5;
x += 3;
x -= 2;
x *= 4;
x /= 2;
x %= 3;
x **= 2;

// Comparison operators
const equal = a == b;
const notEqual = a != b;
const strictEqual = a === b;
const strictNotEqual = a !== b;
const less = a < b;
const greater = a > b;
const lessOrEqual = a <= b;
const greaterOrEqual = a >= b;

// Logical operators
const and = a && b;
const or = a || b;
const not = !a;
const nullish = a ?? b;

// Bitwise operators
const bitwiseAnd = a & b;
const bitwiseOr = a | b;
const bitwiseXor = a ^ b;
const bitwiseNot = ~a;
const leftShift = a << b;
const rightShift = a >> b;
const unsignedRightShift = a >>> b;

// Ternary operator
const result = condition ? trueValue : falseValue;

// Other operators
const increment = x++;
const decrement = x--;
const preIncrement = ++x;
const preDecrement = --x;
```

## 4. Storage Types

```javascript
// Type declarations
const constantVar = 'constant';
let mutableVar = 'mutable';
var oldVar = 'old style';

function regularFunction() {}
class MyClass {}
interface MyInterface {}

// Access modifiers (TypeScript)
public publicMethod() {}
private privateMethod() {}
protected protectedMethod() {}
static staticMethod() {}

// Type modifiers
async function asyncFunc() {}
readonly property: string;
abstract class AbstractClass {}
final class FinalClass {}

// Arrow functions
const arrow = () => {};
const arrowWithParams = (a, b) => a + b;
```

```typescript
// TypeScript specific
type TypeAlias = string;
enum MyEnum {
  First,
  Second
}
namespace MyNamespace {}
declare module 'module';
```

## 5. Strings

```javascript
// Single-quoted strings
const single = 'single quoted string';
const singleWithEscape = 'it\'s escaped';

// Double-quoted strings
const double = "double quoted string";
const doubleWithEscape = "She said \"Hello\"";

// Template literals
const template = `template literal`;
const templateWithInterpolation = `Hello ${name}!`;
const multilineTemplate = `
  Multiple
  lines
`;

// Regular expressions
const regex = /pattern/gi;
const regexWithEscape = /\d+\.\d+/;
const regexWithGroups = /(group1)(group2)/;

// String escape sequences
const escapes = "Line break\nTab\tCarriage return\rBackslash\\Quote\"";
const unicode = "\u0041\u0042\u0043";
const hex = "\x41\x42";
```

## 6. Numbers

```javascript
// Integers
const integer = 42;
const negative = -100;

// Floats/decimals
const float = 3.14159;
const decimal = 0.5;

// Scientific notation
const scientific = 1.23e10;
const smallScientific = 1.23e-10;

// Hexadecimal
const hex = 0xFF;
const hexLarge = 0xDEADBEEF;

// Binary
const binary = 0b1010;
const binaryLong = 0b11111111;

// Octal
const octal = 0o755;
const octalOld = 0755;

// BigInt
const bigInt = 123n;
const hugeBigInt = 9007199254740991n;

// Special numeric values
const infinity = Infinity;
const negInfinity = -Infinity;
const notANumber = NaN;
```

## 7. Constants

```javascript
// Language constants
const languageTrue = true;
const languageFalse = false;
const languageNull = null;
const languageUndefined = undefined;

// Built-in constants
const piConstant = Math.PI;
const eConstant = Math.E;
const maxValue = Number.MAX_VALUE;
const minValue = Number.MIN_VALUE;
const maxSafeInt = Number.MAX_SAFE_INTEGER;

// User-defined constants (convention)
const USER_CONSTANT = 'CONSTANT_VALUE';
const API_ENDPOINT = 'https://api.example.com';
const MAX_RETRIES = 3;
```

```python
# Python constants
None
True
False
NotImplemented
Ellipsis
__debug__
```

## 8. Functions/Methods

```javascript
// Function definitions
function namedFunction(param1, param2) {
  return param1 + param2;
}

// Function expressions
const funcExpression = function() {};
const namedExpression = function name() {};

// Method definitions
const object = {
  method() {
    return 'method';
  },
  propertyMethod: function() {
    return 'property method';
  }
};

// Function calls
namedFunction(1, 2);
object.method();
console.log('built-in function');
Math.max(1, 2, 3);

// Constructor functions
new Date();
new RegExp('pattern');
new Promise(resolve => resolve());

// Generator functions
function* generator() {
  yield 1;
  yield 2;
}

// Async functions
async function asyncFunc() {
  await somePromise();
}
```

## 9. Types/Classes

```javascript
// Class definitions
class BaseClass {
  constructor() {}
}

class DerivedClass extends BaseClass {
  constructor() {
    super();
  }
}

// Built-in classes
Object
Array
String
Number
Boolean
Date
RegExp
Error
Map
Set
WeakMap
WeakSet
Promise
```

```typescript
// TypeScript types
interface UserInterface {
  name: string;
  age: number;
}

type StringOrNumber = string | number;
type Tuple = [string, number];

enum Color {
  Red = 'RED',
  Green = 'GREEN',
  Blue = 'BLUE'
}

// Generic types
class GenericClass<T> {
  value: T;
}

function genericFunction<T, U>(a: T, b: U): void {}

// Primitive types
let str: string;
let num: number;
let bool: boolean;
let sym: symbol;
let big: bigint;
let obj: object;
let any: any;
let unknown: unknown;
let never: never;
let void: void;
```

## 10. Variables

```javascript
// Variable declarations
let variable = 'value';
const constant = 'constant';
var oldStyle = 'old';

// Variable references
variable = 'new value';
console.log(variable);

// Parameters
function withParams(param1, param2, ...rest) {
  return param1 + param2;
}

// Destructuring parameters
function destruct({ prop1, prop2 }) {}
function arrayDestruct([first, second]) {}

// Properties
const obj = {
  property: 'value',
  nested: {
    deep: 'deep value'
  }
};

// this keyword
class ThisExample {
  constructor() {
    this.property = 'value';
  }
  
  method() {
    return this.property;
  }
}

// super keyword
class SuperExample extends BaseClass {
  constructor() {
    super();
    super.method();
  }
}

// Special variables
arguments;
globalThis;
window;
global;
self;
```

## 11. Punctuation

```javascript
// Brackets
{ /* curly braces */ }
[ /* square brackets */ ]
( /* parentheses */ )

// Separators
const list = [1, 2, 3]; // comma
statement1; statement2; // semicolon
const obj = { key: value }; // colon
label: statement; // label colon

// Accessors
object.property; // dot accessor
object?.optional; // optional chaining
array[0]; // bracket accessor
object::boundMethod; // bind operator (proposal)

// Spread/rest
const spread = [...array];
const rest = (...args) => {};
const objectSpread = { ...object };
```

## 12. Markup/Tags (HTML/JSX/XML)

```jsx
// HTML/JSX elements
<div className="container">
  <h1 id="title">Title</h1>
  <input type="text" value={value} onChange={handler} />
  <img src="image.jpg" alt="description" />
  <br />
  <CustomComponent prop={value} {...props} />
</div>

// XML
<?xml version="1.0" encoding="UTF-8"?>
<root>
  <element attribute="value">
    <child>Content</child>
  </element>
  <self-closing />
</root>
```

```html
<!-- HTML -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <div class="container" id="main" data-value="test">
    <p>Paragraph with <strong>bold</strong> and <em>italic</em></p>
    <a href="https://example.com" target="_blank">Link</a>
  </div>
</body>
</html>
```

## 13. Decorators/Annotations

```typescript
// TypeScript decorators
@Component({
  selector: 'app-root',
  template: '<div>Content</div>'
})
class MyComponent {
  @Input() inputProp: string;
  @Output() outputEvent = new EventEmitter();
  
  @HostListener('click', ['$event'])
  onClick(event: Event) {}
  
  @ViewChild('ref') viewChild: ElementRef;
}

// Method decorators
class Example {
  @deprecated
  @memoize
  @log
  method() {}
}

// Parameter decorators
class Service {
  constructor(@Inject(TOKEN) private service: Service) {}
}
```

```python
# Python decorators
@property
def prop(self):
    return self._prop

@staticmethod
def static_method():
    pass

@classmethod
def class_method(cls):
    pass

@functools.cache
@functools.wraps(original)
def wrapper():
    pass
```

## 14. Module/Namespace

```javascript
// ES6 modules
import defaultExport from 'module';
import { named } from 'module';
import * as namespace from 'module';
import { named as renamed } from 'module';

export default function() {}
export { named };
export { internal as external };
export * from 'module';
```

```typescript
// TypeScript namespaces
namespace MyNamespace {
  export interface Interface {}
  export class Class {}
  export function func() {}
}

// Module declarations
declare module 'external-module' {
  export function method(): void;
}

// Triple-slash directives
/// <reference path="types.d.ts" />
/// <reference types="node" />
```

```python
# Python modules
import module
from module import function
from module import Class as RenamedClass
from . import relative
from ..parent import something
import package.subpackage.module
```

## 15. Special Elements

```javascript
// Regular expression components
const regex = /^start(group)+end$/gim;
const lookAhead = /foo(?=bar)/;
const lookBehind = /(?<=foo)bar/;
const nonCapturing = /(?:group)/;
const namedGroup = /(?<name>pattern)/;
const backreference = /(group)\1/;

// Character classes in regex
const charClass = /[a-zA-Z0-9]/;
const negatedClass = /[^abc]/;
const specialChars = /\d\w\s\D\W\S/;
const boundaries = /\b\B/;
const anchors = /^start|end$/;

// Escape characters
const stringEscapes = "quotes\" \' newline\n tab\t backslash\\";
const regexEscapes = /\.\*\+\?\[\]\{\}\(\)\|\/\^\$/;
const unicodeEscapes = "\u0041 \u{1F600}";

// Invalid/illegal code (should be highlighted as errors)
const unclosedString = "missing quote;
const invalidNumber = 0xGGG;
const syntaxError = function(;
const unexpectedToken = };

// Deprecated elements (varies by language)
// Old JavaScript
with (object) {} // deprecated
arguments.callee; // deprecated
escape(string); // deprecated
```

```typescript
// TypeScript-specific invalid code
const wrongType: string = 123; // Type error
const missingProperty = { a: 1 }.b.c; // Property doesn't exist
const invalidGeneric = new Array<>; // Missing generic type
```

## Language-Specific Elements

### Shell/Bash
```bash
#!/bin/bash
# Shell variables
NAME="value"
echo $NAME
echo ${NAME}
echo "${NAME:-default}"

# Command substitution
result=$(command)
result=`command`

# Conditionals
if [ -f "$file" ]; then
  echo "File exists"
elif [ -d "$dir" ]; then
  echo "Directory exists"
else
  echo "Not found"
fi

# Loops
for i in {1..5}; do
  echo $i
done

while read line; do
  echo $line
done < file.txt

# Functions
function my_function() {
  local var="local"
  return 0
}

# Special variables
$0 $1 $2 $@ $* $# $? $$ $!
```

### Python
```python
# Python-specific syntax
# List comprehension
squares = [x**2 for x in range(10)]

# Dict comprehension
dict_comp = {k: v for k, v in items}

# Set comprehension
set_comp = {x for x in items}

# Generator expression
gen = (x for x in range(10))

# Lambda functions
lambda x: x * 2

# Walrus operator
if (n := len(items)) > 10:
    print(f"List is too long ({n} elements)")

# F-strings
name = "World"
f"Hello {name}!"
f"{value:.2f}"
f"{expr=}"

# Type hints
def func(x: int, y: str) -> bool:
    return True

variable: list[str] = []
```

### CSS/SCSS
```scss
/* CSS/SCSS syntax */
.selector {
  property: value;
  color: #FF5733;
  background: rgb(255, 87, 51);
  background: rgba(255, 87, 51, 0.5);
  background: hsl(120, 100%, 50%);
  
  /* SCSS nesting */
  &:hover {
    color: darken(#FF5733, 10%);
  }
  
  .nested {
    @include mixin();
    @extend .base;
  }
}

// SCSS variables
$primary-color: #333;
$spacing: 1rem;

// SCSS mixins
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// SCSS functions
@function calculate-rem($pixels) {
  @return $pixels / 16 * 1rem;
}
```

### SQL
```sql
-- SQL syntax
SELECT column1, column2, COUNT(*) as count
FROM table_name
WHERE condition = 'value'
  AND other_column IN (1, 2, 3)
  OR column LIKE '%pattern%'
GROUP BY column1
HAVING COUNT(*) > 5
ORDER BY column2 DESC
LIMIT 10;

-- Joins
SELECT t1.*, t2.column
FROM table1 t1
INNER JOIN table2 t2 ON t1.id = t2.table1_id
LEFT JOIN table3 t3 ON t2.id = t3.table2_id;

-- DDL
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Transactions
BEGIN TRANSACTION;
INSERT INTO table VALUES (1, 'value');
UPDATE table SET column = 'new' WHERE id = 1;
DELETE FROM table WHERE condition = true;
COMMIT;
```

## Testing Notes

This file should be used to verify that:
1. Each category of syntax elements has distinct, appropriate coloring
2. Colors are consistent across similar elements in different languages
3. Light and dark themes both provide good readability
4. No elements are left unstyled (appearing in default text color)
5. Special elements like errors and deprecations stand out appropriately
6. Comments are visually distinct but not distracting
7. String interpolations and escape sequences are visible
8. Nested elements (like JSX) maintain proper highlighting