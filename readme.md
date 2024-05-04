# Working With CSS Modules is Even Easier

A lightweight TypeScript utility designed to simplify the usage of CSS module classes in your projects. It provides a convenient way to transform a space-separated string of class names into a string containing the corresponding CSS module classes.

## Changelog

v2.0.2

- Throws an error and logs the error stack to the console if no class names are provided or if `$_()` is invoked without class names. Additionally, an error is thrown for invalid CSS class names, such as `.123className`.

v2.0.1

- Minor changes and bug fixes.

v2.0.0

- The `useModuleClasses` is deprecated and will be removed in future updates due to conflicts with React Hooks naming conventions. Please switch to `utilizeModuleClasses` instead.
- Now, You can access global classes alongside module classes outside the CSS module without extra templates. Simply, prepend a '@' before global class, as demonstrated: `$_(".moduleClass .@globalClass)`
- Automatic removal of duplicate classes, extra spaces within class names, class name validation.

## Why Easy-CSS-Modules?

Assuming you have a CSS module with classes defined like so:

```css
/* styles.module.css */
.heading {
  font-size: 24px;
}
.paragraph {
  font-size: 16px;
}
```

Typically, we access and utilize module classes in the following manner:

```javascript
import styles from "./styles.module.css";

<div className={`${styles.heading} ${styles.paragraph}`}>***</div>;
```

**_It's acceptable, but templating classNames in this manner can become messy and tedious. However, with easy-css-modules, we can eliminate this hassle._**

### Key Features

- Simplified usage with CSS modules.
- Automatic removal of duplicate classes.
- Elimination of extra spaces within class names.
- Robust class name validation, triggering an error on encountering an invalid class name.
- Optimized for high performance.

## Getting Started

To install, run the following command in your project directory:

```bash
npm install easy-css-modules
or
yarn add easy-css-modules
or
pnpm install easy-css-modules
```

### Usage

1. Import the `utilizeModuleClasses` function from the package:

```javascript
import styles from "./styles.module.css";
import utilizeModuleClasses from "easy-css-modules";
```

2. Initialize the `utilizeModuleClasses` hook (not specific to React; it functions with any JavaScript framework) as follows: it returns a function that accepts a space-separated string of class names (e.g., ".heading .paragraph") as an argument. You can assign the hooked function to any variable or assign it to the const `$_` variable for stylistic and convenient usage.

```javascript
const $_ = utilizeModuleClasses(styles);
```

3. Then, utilize the returned function or the `$_` function to dynamically apply these classes.

> 1. Define module classes like this: `$_(".class .anotherClass")`.
> 2. To access global classes alongside module classes outside the CSS module, prepend a '@' before global class, as demonstrated: `$_(".moduleClass .@globalClass)`.

---

```javascript
// 1. Import styles from css module and utilizeModuleClasses from easy-css-modules.
import styles from "./styles.module.css";
import { utilizeModuleClasses } from "easy-css-modules";

// 2. Initialize the utilizeModuleClasses hook
const $_ = utilizeModuleClasses(styles);

// 3. Use the classes
<h1 className={$_(".heading .@globalClass")}>***</div>;
```

### ✳Note

> - You are free to utilize any class naming convention, extending beyond camelCase, as exemplified by `.class__using--bem`.
> - The `.` preceding the classes isn't obligatory for this utility package to function. You can denote classes with a leading dot, as in `$_(".first-class .second")`, or without it, like `$_("first-class second")`. However, employing the dot notation makes it easier to discern class references at a glance.

### Parameters

```javascript
const $_ = utilizeModuleClasses(styleObject);

$_(classNames);
```

- `styleObject:` The CSS module classes object.

- `classNames:` A space-separated string of class names (e.g., ".heading .paragraph").
  Returns
  A function that takes a string of class names and returns a string of corresponding CSS module classes.

## Additional Tips

##### You can add these custom snippets in your vs code snippets settings to make your dev experience much more easy and faster.

1. Navigate to `File > Preferences > Configure User Snippets`

2. Copy the JSON code provided below and paste it into both `JavascriptReact(.jsx)` and `TypescriptReact(.tsx)`.

3. Save the file and start using the snippets by typing the prefix associated with each snippet.

- And now you can type any html tag to get snippets suggestions with easy-css-module templates.

```json
"easy-css-module-template": {
	"prefix": [
		"div",
		"h1", "h2", "h3", "h4", "h5", "h6",
		"span",
		"p",
		"a",
		"ul", "ol", "li",
		"table", "tr", "td", "th",
		"form", "input", "button",
		"section", "article", "header", "footer",
		"nav", "aside", "main",
		"video", "audio",
	],
	"body": [
		"<${TM_CURRENT_WORD} className={\\$_(\"${1}\")}>${2}</${TM_CURRENT_WORD}>"
	],
	"description": "Commented Section divider"
},
"easy-css-module-template-sct": {
	"prefix": [
		"img",
		"br",
		"hr",
		"meta",
		"link",
		"input", // Can be self-closing for certain types (e.g., input type="hidden")
		// Add more self-closing tags here
	],
	"body": [
		"<${TM_CURRENT_WORD} className={\\$_(\"${1}\")} />${2}"
	],
	"description": "Commented Section divider"
},
"arrow-component-with-css-module": {
	"scope": "javascript, typescript, typescriptreact, javascriptreact",
	"prefix": [
		"afce"
	],
	"body": [
		"import styles from \"${1}\";",
		"import  { utilizeModuleClasses } from \"easy-css-modules\";",
		"",
		"const \\$_ = utilizeModuleClasses(styles);",
		"",
		"const ${2:$TM_FILENAME_BASE} = () => {",
		"  return (",
		"    <>",
		"      ${3}",
		"    </>",
		"  );",
		"}",
		"",
		"export default ${2:$TM_FILENAME_BASE};"
	],
	"description": "Commented Section divider"
}
```

## LICENSE [MIT](https://github.com/nazmus767921/easy-css-modules/blob/main/LISENSE)

The MIT License (MIT) | Copyright (c) 2024 Nazmus Sakib
