const sumAll = function(int1, int2) {
    if (int1 <= 0 || int2 <= 0)
        return "ERROR";
    if (typeof int1 !== "number" || typeof int2 !== "number")
        return "ERROR";
    if (!Number.isInteger(int1) || !Number.isInteger(int2))
        return "ERROR";

    let sum = 0;
    if (int1 > int2) {
        let temp = int1;
        int1 = int2;
        int2 = temp;
    }
    for (let i = int1; i <= int2; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
