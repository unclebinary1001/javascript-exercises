const sumAll = function(...range) {
    let sum = 0
    if (!(range[0]>=0 && range[1]>=0))
        return "ERROR"
    if (!(typeof range[0] == "number" && typeof range[1] == "number"))
        return "ERROR";   
    if (range[0] > range[1]) {
        let small = range[0];
        range[0] = range[1];
        range[1] = small;
    }
    for (let i = range[0]; i<= range[1]; i++)
        sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
