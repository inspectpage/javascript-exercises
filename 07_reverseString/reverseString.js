const reverseString = function(string) {
    let i = string.length - 1;
    let OppositeString = '';

    for (; i >= 0; i--){
        OppositeString += string[i]
    }
    return OppositeString

};


// Do not edit below this line
module.exports = reverseString;
