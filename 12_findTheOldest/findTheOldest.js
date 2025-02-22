const findTheOldest = function(arr) {
    const todaysYear = (new Date()).getFullYear();
    let oldest = 0;
    return arr.reduce((obj, person) => {
        let age = todaysYear - person.yearOfBirth;;
        if (person.yearOfDeath)
            age = person.yearOfDeath - person.yearOfBirth;
        if (age > oldest) {
            obj = person;
            oldest = age;
        }
        return obj;
    }, {});
};

// Do not edit below this line
module.exports = findTheOldest;
