// index.ts
type CSSModuleClasses = { [className: string]: string };

const getModuleClasses = (
  stylesObject: CSSModuleClasses,
  classNames: string
): string => {
  let classContainer: string = "";

  classNames.split(" ").map((c) => {
    classContainer += ` ${stylesObject[c.replace(/^\./, "")]}`;
  });
  return classContainer.trim();
};

export const useModuleClasses = (styleObject: CSSModuleClasses) => {
  return (classNames: string) => getModuleClasses(styleObject, classNames);
};
