// index.ts
type CSSModuleClasses = { [className: string]: string };

// Deprecated function

export const useModuleClasses = (styleObject: CSSModuleClasses) => {
  console.warn(
    'The "useModuleClasses" is deprecated and will be removed in V1.1.0 due to conflicts with React Hooks naming conventions. Please switch to "utilizeModuleClasses" instead.'
  );
  return (classNames: string) => getModuleClasses(styleObject, classNames);
};

const validateCssClassName = (className: string) => {
  const pattern = /^[_a-zA-Z][_a-zA-Z0-9-]*$/;
  return pattern.test(className);
};

const getModuleClasses = (
  stylesObject: CSSModuleClasses,
  classNames: string
): string => {
  const validateAndThrowError = (purifiedClass: string) => {
    if (!validateCssClassName(purifiedClass)) {
      throw new Error("Invalid CSS class name detected: " + purifiedClass);
    }
  };

  const classContainer: string[] = classNames
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .reduce((accumulator: string[], c: string) => {
      let purifiedClass = c.replace(/^\./, "").trim();

      if (purifiedClass.startsWith("@")) {
        purifiedClass = purifiedClass.replace(/^\@/, "");
        validateAndThrowError(purifiedClass);
        accumulator.push(purifiedClass);
      } else {
        validateAndThrowError(purifiedClass);
        const className =
          stylesObject[purifiedClass]?.toString() || "undefined";
        accumulator.push(className);
      }
      return accumulator;
    }, []);

  return [...new Set(classContainer)].join(" ").trim();
};

export const utilizeModuleClasses = (styleObject: CSSModuleClasses) => {
  return (classNames: string) => getModuleClasses(styleObject, classNames);
};
