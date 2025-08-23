---
title: "Complete Guide to Modifying Shiki Syntax Highlighting Colors"
description: "Complete Guide to Modifying Shiki Syntax Highlighting Colors"
pubDate: 2024-01-23
---

# Complete Guide to Modifying Shiki Syntax Highlighting Colors

## Table of Contents
1. [Understanding Shiki's Color System](#understanding-shikis-color-system)
2. [File Locations](#file-locations)
3. [All 15 Syntax Categories](#all-15-syntax-categories)
4. [Step-by-Step Modification Guide](#step-by-step-modification-guide)
5. [Color Selection Tips](#color-selection-tips)
6. [Testing Your Changes](#testing-your-changes)
7. [Troubleshooting](#troubleshooting)

## Understanding Shiki's Color System

Shiki uses TextMate grammar themes (similar to VS Code) to colorize code. Each syntax element is matched by "scopes" and assigned colors through theme JSON files.

### How It Works:
1. **Scopes**: Identifiers like `keyword.control`, `string.quoted`, etc.
2. **Token Colors**: Rules that map scopes to colors
3. **Dual Themes**: Separate theme files for light and dark modes
4. **Inline Styles**: Shiki generates HTML with inline styles based on your theme

## File Locations

Your Shiki theme files are located at:
```
/Users/linda/WebstormProjects/withLinda.dev/
├── src/styles/themes/
│   ├── everforest-shiki.json       # Dark theme
│   └── everforest-light-shiki.json # Light theme
```

## All 15 Syntax Categories

Here's a complete breakdown of all syntax categories you can customize:

### 1. Comments
**What it colors**: `// single line`, `/* multi-line */`, `# hash comments`
```json
{
  "name": "Comments",
  "scope": [
    "comment",
    "punctuation.definition.comment",
    "comment.line",
    "comment.block",
    "comment.block.documentation"
  ],
  "settings": {
    "foreground": "#859289",  // Your color here
    "fontStyle": "italic"      // Optional: italic, bold, or normal
  }
}
```

### 2. Keywords
**What it colors**: `if`, `else`, `for`, `while`, `return`, `break`, `continue`, `switch`, `case`, `try`, `catch`, `throw`
```json
{
  "name": "Keywords",
  "scope": [
    "keyword",
    "keyword.control",
    "keyword.control.conditional",
    "keyword.control.loop",
    "keyword.control.flow",
    "keyword.control.return",
    "keyword.control.import",
    "keyword.control.export",
    "keyword.control.from",
    "keyword.control.as",
    "keyword.other",
    "keyword.control.try",
    "keyword.control.catch",
    "keyword.control.finally",
    "keyword.control.throw"
  ],
  "settings": {
    "foreground": "#E67E80"  // Your color here
  }
}
```

### 3. Storage Types & Modifiers
**What it colors**: `const`, `let`, `var`, `function`, `class`, `async`, `static`, `public`, `private`, `=>` (arrow functions)
```json
{
  "name": "Storage and Operators",
  "scope": [
    "keyword.operator",
    "storage",
    "storage.type",
    "storage.modifier",
    "storage.type.class",
    "storage.type.function",
    "storage.type.arrow",
    "keyword.operator.new",
    "keyword.operator.expression",
    "keyword.operator.delete",
    "keyword.operator.instanceof",
    "keyword.operator.typeof"
  ],
  "settings": {
    "foreground": "#E69875"  // Your color here
  }
}
```

### 4. Strings
**What it colors**: `"double quotes"`, `'single quotes'`, `` `template literals` ``
```json
{
  "name": "Strings",
  "scope": [
    "string",
    "string.quoted",
    "string.quoted.single",
    "string.quoted.double",
    "string.template",
    "punctuation.definition.string.begin",
    "punctuation.definition.string.end"
  ],
  "settings": {
    "foreground": "#A7C080"  // Your color here
  }
}
```

### 5. String Escapes & Regex
**What it colors**: `\n`, `\t`, `/regex/`, escape sequences
```json
{
  "name": "String Escapes and Regex",
  "scope": [
    "constant.character.escape",
    "string.regexp",
    "constant.other.character-class",
    "constant.character.set"
  ],
  "settings": {
    "foreground": "#83C092"  // Your color here
  }
}
```

### 6. Numbers
**What it colors**: `42`, `3.14`, `0xFF`, `0b1010`, `1.23e10`
```json
{
  "name": "Numbers",
  "scope": [
    "constant.numeric",
    "constant.numeric.integer",
    "constant.numeric.float",
    "constant.numeric.hex",
    "constant.numeric.binary",
    "constant.numeric.octal",
    "constant.numeric.decimal"
  ],
  "settings": {
    "foreground": "#D699B6"  // Your color here
  }
}
```

### 7. Language Constants
**What it colors**: `true`, `false`, `null`, `undefined`, `NaN`, `Infinity`, `this`, `super`
```json
{
  "name": "Language Constants",
  "scope": [
    "constant.language",
    "constant.language.boolean",
    "constant.language.null",
    "constant.language.undefined",
    "constant.language.nan",
    "constant.language.infinity",
    "support.constant",
    "variable.language.this",
    "variable.language.super"
  ],
  "settings": {
    "foreground": "#83C092"  // Your color here
  }
}
```

### 8. Functions & Methods
**What it colors**: `functionName()`, `object.method()`, function calls
```json
{
  "name": "Functions and Methods",
  "scope": [
    "entity.name.function",
    "meta.function-call",
    "support.function",
    "support.function.builtin",
    "variable.function",
    "entity.name.method",
    "meta.method-call"
  ],
  "settings": {
    "foreground": "#83C092"  // Your color here
  }
}
```

### 9. Built-in Objects
**What it colors**: `Math`, `Number`, `Object`, `Array`, `console`, `Promise`
```json
{
  "name": "Built-in Objects",
  "scope": [
    "support.class",
    "support.type",
    "support.type.object",
    "support.type.builtin",
    "support.type.primitive"
  ],
  "settings": {
    "foreground": "#7FBBB3"  // Your color here
  }
}
```

### 10. Types & Classes
**What it colors**: `MyClass`, `interface MyInterface`, type definitions
```json
{
  "name": "Types and Classes",
  "scope": [
    "entity.name.type",
    "entity.name.class",
    "entity.name.interface",
    "entity.name.enum",
    "entity.other.inherited-class",
    "meta.type.annotation",
    "support.type.primitive"
  ],
  "settings": {
    "foreground": "#DBBC7F"  // Your color here
  }
}
```

### 11. Variables & Properties
**What it colors**: variable names, object properties, parameters
```json
{
  "name": "Variables and Properties",
  "scope": [
    "variable",
    "variable.other",
    "variable.other.readwrite",
    "variable.parameter",
    "variable.other.property",
    "meta.property-name",
    "support.type.property-name",
    "entity.other.attribute-name",
    "meta.object-literal.key"
  ],
  "settings": {
    "foreground": "#D3C6AA"  // Your color here
  }
}
```

### 12. Punctuation
**What it colors**: `{}`, `[]`, `()`, `;`, `,`, `.`, `:`
```json
{
  "name": "Punctuation",
  "scope": [
    "punctuation",
    "punctuation.separator",
    "punctuation.terminator",
    "punctuation.accessor",
    "meta.brace",
    "punctuation.section",
    "punctuation.definition.block",
    "punctuation.definition.parameters"
  ],
  "settings": {
    "foreground": "#859289"  // Your color here
  }
}
```

### 13. HTML/JSX Tags
**What it colors**: `<div>`, `</div>`, HTML tag names
```json
{
  "name": "HTML/JSX Tags",
  "scope": [
    "entity.name.tag",
    "meta.tag.sgml",
    "markup.deleted.git_gutter"
  ],
  "settings": {
    "foreground": "#E67E80"  // Your color here
  }
}
```

### 14. HTML/JSX Attributes
**What it colors**: `className=`, `href=`, attribute names in HTML/JSX
```json
{
  "name": "HTML/JSX Attributes",
  "scope": [
    "entity.other.attribute-name.html",
    "entity.other.attribute-name.jsx",
    "entity.other.attribute-name.tsx"
  ],
  "settings": {
    "foreground": "#DBBC7F"  // Your color here
  }
}
```

### 15. Decorators & Annotations
**What it colors**: `@decorator`, `@Component`, TypeScript decorators
```json
{
  "name": "Decorators",
  "scope": [
    "meta.decorator",
    "meta.annotation",
    "punctuation.decorator",
    "entity.name.decorator"
  ],
  "settings": {
    "foreground": "#D699B6"  // Your color here
  }
}
```

## Step-by-Step Modification Guide

### Step 1: Choose Your Colors
First, decide on your color palette. You'll need colors for each category above.

**Tips for choosing colors:**
- Use a color palette generator like [coolors.co](https://coolors.co)
- Ensure sufficient contrast for readability
- Test colors on both light and dark backgrounds
- Keep related elements (like all keywords) in similar hues

### Step 2: Edit Dark Theme
Open `/src/styles/themes/everforest-shiki.json`:

1. Find the `tokenColors` array
2. Locate the category you want to modify
3. Change the `foreground` value to your chosen hex color
4. Save the file

Example modification:
```json
{
  "name": "Keywords",
  "scope": [...],
  "settings": {
    "foreground": "#FF6B6B"  // Changed from #E67E80 to a different red
  }
}
```

### Step 3: Edit Light Theme
Open `/src/styles/themes/everforest-light-shiki.json`:

1. Repeat the same process as dark theme
2. Use lighter/more vibrant colors suitable for light backgrounds
3. Ensure good contrast against `#FDF6E3` (light background)

### Step 4: Clear Cache and Rebuild
After making changes:
```bash
# Clear caches
rm -rf .astro node_modules/.vite

# Sync content
npm run astro sync

# Restart dev server
npm run dev
```

## Color Selection Tips

### For Dark Themes:
- **Background**: Usually `#1e1e1e` to `#2d2d2d`
- **Comments**: Muted colors like `#6a737d` or `#859289`
- **Keywords**: Vibrant colors like `#f97583` or `#e67e80`
- **Strings**: Green tones like `#79b8ff` or `#a7c080`
- **Functions**: Blue/cyan tones like `#79b8ff` or `#83c092`

### For Light Themes:
- **Background**: Usually `#ffffff` to `#fdf6e3`
- **Comments**: Darker muted colors like `#6a737d`
- **Keywords**: Strong colors like `#d73a49` or `#f85552`
- **Strings**: Darker greens like `#22863a` or `#8da101`
- **Functions**: Darker blues like `#005cc5` or `#35a77c`

### Contrast Guidelines:
- **WCAG AA**: Minimum contrast ratio of 4.5:1 for normal text
- **WCAG AAA**: Contrast ratio of 7:1 for enhanced readability
- Use tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

## Testing Your Changes

### Create a Test File
Create a comprehensive test file to see all your colors:

```javascript
// This is a comment - Category 1
/* Multi-line comment
   continues here */

// Keywords - Category 2
if (condition) {
  for (let i = 0; i < 10; i++) {
    while (true) {
      break;
    }
  }
}

// Storage - Category 3
const myConst = "value";
let myLet = "value";
var myVar = "value";
function myFunction() {}
class MyClass {}
async function asyncFunc() {}

// Strings - Category 4
const string1 = "double quotes";
const string2 = 'single quotes';
const string3 = `template literal ${variable}`;

// Numbers - Category 6
const integer = 42;
const float = 3.14;
const hex = 0xFF;
const binary = 0b1010;
const scientific = 1.23e10;

// Constants - Category 7
const bool1 = true;
const bool2 = false;
const nothing = null;
const notDefined = undefined;

// Functions - Category 8
myFunction();
object.method();
Math.random();

// Built-ins - Category 9
Math.PI;
Number.isNaN();
Object.keys();
Array.from();
console.log();

// Types/Classes - Category 10
class MyClass extends BaseClass {
  constructor() {
    super();
  }
}

// Variables - Category 11
let myVariable = "value";
const obj = {
  property: "value"
};

// HTML/JSX - Categories 13 & 14
const jsx = <div className="container">Content</div>;

// Decorators - Category 15
@decorator
class DecoratedClass {}
```

### Visual Testing:
1. Open your site in the browser
2. Navigate to a page with code blocks
3. Toggle between light and dark modes
4. Check that all syntax elements are colored correctly
5. Verify no elements appear in default grey

## Troubleshooting

### Problem: Colors not updating
**Solution:**
1. Clear all caches: `rm -rf .astro node_modules/.vite dist`
2. Check JSON syntax is valid (no trailing commas, proper quotes)
3. Restart dev server completely

### Problem: Some elements not colored
**Solution:**
1. Check if the scope is correctly defined
2. Add more specific scopes if needed
3. Use VS Code's "Developer: Inspect Editor Tokens and Scopes" to find exact scopes

### Problem: Colors look different than expected
**Solution:**
1. Check if CSS overrides exist in `shiki-overrides.css`
2. Ensure no `!important` rules are interfering
3. Verify the hex color values are correct

### Problem: Light/Dark mode not switching
**Solution:**
1. Ensure both theme files are loaded in `astro.config.mjs`
2. Check that `themes` (plural) is used, not `theme` (singular)
3. Verify theme toggle functionality works on the site

## Advanced Customization

### Adding Font Styles:
```json
"settings": {
  "foreground": "#E67E80",
  "fontStyle": "bold italic underline"
}
```

Options: `bold`, `italic`, `underline`, or combinations

### Creating Custom Scopes:
You can add very specific scopes for fine-grained control:
```json
{
  "name": "JavaScript Console",
  "scope": ["support.class.console.javascript"],
  "settings": {
    "foreground": "#00CED1",
    "fontStyle": "bold"
  }
}
```

### Language-Specific Colors:
Target specific languages:
```json
{
  "name": "Python Functions",
  "scope": ["entity.name.function.python"],
  "settings": {
    "foreground": "#4169E1"
  }
}
```

## Quick Reference Color Codes

### Popular Color Palettes:

**Monokai:**
- Keywords: `#F92672`
- Strings: `#E6DB74`
- Functions: `#66D9EF`
- Comments: `#75715E`

**Dracula:**
- Keywords: `#FF79C6`
- Strings: `#F1FA8C`
- Functions: `#50FA7B`
- Comments: `#6272A4`

**Solarized:**
- Keywords: `#859900`
- Strings: `#2AA198`
- Functions: `#268BD2`
- Comments: `#93A1A1`

**Nord:**
- Keywords: `#81A1C1`
- Strings: `#A3BE8C`
- Functions: `#88C0D0`
- Comments: `#616E88`

## Final Notes

- Always backup your theme files before making major changes
- Test on different screen types and brightness settings
- Consider accessibility - ensure colors work for colorblind users
- Document your color choices for future reference
- Remember that less is often more - too many colors can be distracting

Happy theming! 🎨
