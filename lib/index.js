"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utilizeModuleClasses = exports.useModuleClasses = void 0;
// Deprecated function
const useModuleClasses = (styleObject) => {
    console.warn('The "useModuleClasses" is deprecated and will be removed in future updates due to conflicts with React Hooks naming conventions. Please switch to "utilizeModuleClasses" instead.');
    return (classNames) => getModuleClasses(styleObject, classNames);
};
exports.useModuleClasses = useModuleClasses;
const validateCssClassName = (className) => {
    const pattern = /^[_a-zA-Z][_a-zA-Z0-9-]*$/;
    return pattern.test(className);
};
const getModuleClasses = (stylesObject, classNames) => {
    const validateAndThrowError = (purifiedClass) => {
        if (!purifiedClass) {
            const error = new Error("CSS class name cannot be empty.");
            console.error(error.stack); // Log the stack trace
            throw error;
        }
        if (!validateCssClassName(purifiedClass)) {
            const error = new Error("Invalid CSS class name detected: " + purifiedClass);
            console.error(error.stack); // Log the stack trace
            throw error;
        }
    };
    const classContainer = classNames
        .replace(/\s+/g, " ")
        .trim()
        .split(" ")
        .reduce((accumulator, c) => {
        var _a;
        let purifiedClass = c.replace(/^\./, "").trim();
        if (purifiedClass.startsWith("@")) {
            purifiedClass = purifiedClass.replace(/^\@/, "");
            validateAndThrowError(purifiedClass);
            accumulator.push(purifiedClass);
        }
        else {
            validateAndThrowError(purifiedClass);
            const className = ((_a = stylesObject[purifiedClass]) === null || _a === void 0 ? void 0 : _a.toString()) || "undefined";
            accumulator.push(className);
        }
        return accumulator;
    }, []);
    return [...new Set(classContainer)].join(" ").trim();
};
const utilizeModuleClasses = (styleObject) => {
    return (classNames) => getModuleClasses(styleObject, classNames);
};
exports.utilizeModuleClasses = utilizeModuleClasses;
