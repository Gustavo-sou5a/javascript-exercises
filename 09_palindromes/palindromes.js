const palindromes = function (str) {
    const original = str.toLowerCase()
                            .split("")
                            .filter(char => char >= 'a' && char <= 'z' || char >= '0' && char <= '9')
                            .join("");
    const reversed = original.split("").reverse().join('');
    return original === reversed;
};

// Do not edit below this line
module.exports = palindromes;
