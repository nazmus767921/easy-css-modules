var getModuleClasses = function (stylesObject, classNames) {
    var classContainer = "";
    classNames.split(" ").map(function (c) {
        classContainer += " ".concat(stylesObject[c.replace(/^\./, "")]);
    });
    return classContainer.trim();
};
export var useModuleClasses = function (styleObject) {
    return function (classNames) { return getModuleClasses(styleObject, classNames); };
};
