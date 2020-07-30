export const excludeItemInArray = (arrayValue: any, item: any, valueToExclude: any) => {
    const index = arrayValue.map((data: any) => data[item]).indexOf(valueToExclude);
    const removeValue = arrayValue[index];
    if (index > -1) {
        arrayValue.splice(index, 1);
    }
    return [arrayValue, removeValue];
}
// Arrange ascending order and position the other option to the last
export const sortItem = (arrayObject: Array<Object>, item: any) => {

    let [newArrayObject,removeValue] = excludeItemInArray(arrayObject, item, "Other");
    newArrayObject = newArrayObject.sort((a: any, b: any) => (a[item] > b[item]) ? 1 : -1);
    if (removeValue) {
        newArrayObject.push(removeValue);
    }
    return newArrayObject;
}