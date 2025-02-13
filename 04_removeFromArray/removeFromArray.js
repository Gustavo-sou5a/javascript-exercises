const removeFromArray = function(arr, ...rest) {

    const elementsToRemove = rest;
    for (let i = 0; i < elementsToRemove.length; i++) {
        while (arr.indexOf(elementsToRemove[i]) !== -1) {
            let index = arr.indexOf(elementsToRemove[i]);
            arr.splice(index, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
