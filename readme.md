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

Normally we have to access and use the module classes like this:

```javascript
import styles from "./styles.module.css";

<div className={`${styles.heading} ${styles.paragraph}`}>***</div>;
```

**_It is okay. But it gets very messy and tedious when templating the classNames like this. But with easy-css-modules we can get rid of this hastle._**

## Usage

1. Import the useModuleClasses function from the package:

```javascript
import styles from "./styles.module.css";
```

2. Intiate the hook like this. It returns a funtion that tekes a space-separated string of class names (e.g., ".heading .paragraph") as argument. You can assign the hooked function in any variable or can assign it to `const $_` varibale for stylist and convenient usage.

```javascript
const $_ = useModuleClasses(styles);
```

3. Then you can use the returned function or `$_` function to dynamically apply these classes.

```javascript
import styles from "./styles.module.css";
import { useModuleClasses } from "easy-css-modules";

const $_ = useModuleClasses(styles);

<div className={$_(".heading .paragraph")}>***</div>;

// className will be a string containing the corresponding class names from the styles object
```

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

- `styleObject:` The CSS module classes object.

- `classNames:` A space-separated string of class names (e.g., ".heading .paragraph").
  Returns
  A function that takes a string of class names and returns a string of corresponding CSS module classes.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have suggestions or find a bug.
