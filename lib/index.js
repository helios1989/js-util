"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortItem = exports.excludeItemInArray = void 0;
exports.excludeItemInArray = function (arrayValue, item, valueToExclude) {
    var index = arrayValue.map(function (data) { return data[item]; }).indexOf(valueToExclude);
    var removeValue = arrayValue[index];
    if (index > -1) {
        arrayValue.splice(index, 1);
    }
    return [arrayValue, removeValue];
};
// Arrange ascending order and position the other option to the last
exports.sortItem = function (arrayObject, item) {
    var _a = exports.excludeItemInArray(arrayObject, item, "Other"), newArrayObject = _a[0], removeValue = _a[1];
    newArrayObject = newArrayObject.sort(function (a, b) { return (a[item] > b[item]) ? 1 : -1; });
    if (removeValue) {
        newArrayObject.push(removeValue);
    }
    return newArrayObject;
};
