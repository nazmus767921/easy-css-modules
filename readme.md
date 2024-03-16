# CSS Module Helper

A lightweight TypeScript utility designed to simplify the usage of CSS module classes in your projects. It provides a convenient way to transform a space-separated string of class names into a string containing the corresponding CSS module classes. Let me Explain.

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

## Usage

1. Import the useModuleClasses function from the package:

```javascript
import styles from "./styles.module.css";
import useModuleClasses from "easy-css-modules";
```

2. 
Initialize the `useModuleClasses` hook (not specific to React; it functions with any JavaScript framework) as follows: it returns a function that accepts a space-separated string of class names (e.g., ".heading .paragraph") as an argument. You can assign the hooked function to any variable or assign it to the const `$_` variable for stylistic and convenient usage.

```javascript
const $_ = useModuleClasses(styles);
```

3. Then, utilize the returned function or the `$_` function to dynamically apply these classes.

```javascript
// 1. Import styles from css module and useModuleClasses from easy-css-modules package
import styles from "./styles.module.css";
import { useModuleClasses } from "easy-css-modules";

// 2. Initialize the useModuleClasses hook
const $_ = useModuleClasses(styles);

// 3. Use the classes
<div className={$_(".heading .paragraph")}>***</div>;

// className will be a string containing the corresponding class names from the styles object
```

### Note

> - You are free to utilize any class naming convention, extending beyond camelCase, as exemplified by `.class__using--bem`.
> - The `.` preceding the classes isn't obligatory for this utility package to function. You can denote classes with a leading dot, as in `$_(".first-class .second")`, or without it, like `$_("first-class second")`. However, employing the dot notation makes it easier to discern class references at a glance.

## Installation

To install, run the following command in your project directory:

```bash
npm install easy-css-modules
or
yarn add easy-css-modules
or
pnpm install easy-css-modules
```

## Parameters

```javascript
const $_ = useModuleClasses(styleObject);

$_(classNames);
```

- `styleObject:` The CSS module classes object.

- `classNames:` A space-separated string of class names (e.g., ".heading .paragraph").
  Returns
  A function that takes a string of class names and returns a string of corresponding CSS module classes.


## GitHub

- [easy-css-modules](https://github.com/nazmus767921/easy-css-modules)

