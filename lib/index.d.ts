type CSSModuleClasses = {
    [className: string]: string;
};
export declare const useModuleClasses: (styleObject: CSSModuleClasses) => (classNames: string) => string;
export {};
