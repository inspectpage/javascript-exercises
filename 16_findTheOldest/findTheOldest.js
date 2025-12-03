const findTheOldest = function(peopleArray) {
    let ordered = peopleArray.sort(function(a, b){
        if (b.yearOfDeath === undefined) {
            b.yearOfDeath = 2025
        }
        return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth)
    })
    console.log(ordered)
    return ordered.at(0)
};

// Do not edit below this line
module.exports = findTheOldest;
