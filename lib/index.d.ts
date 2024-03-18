type CSSModuleClasses = {
    [className: string]: string;
};
export declare const useModuleClasses: (styleObject: CSSModuleClasses) => (classNames: string) => string;
export declare const utilizeModuleClasses: (styleObject: CSSModuleClasses) => (classNames: string) => string;
export {};
