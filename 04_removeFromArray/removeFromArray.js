const removeFromArray = function(arr, ...remove) {
    for (const val of remove) {
        if (arr.indexOf(val) >= 0)
            arr.splice(arr.indexOf(val), 1);
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
