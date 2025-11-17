const repeatString = function(string, num) {
    let stringrepeat = '';
    if (num >= 0){
        for (let i = 0; i < num; i++){
            stringrepeat += string;
        }
        return stringrepeat;
    } else return 'ERROR'
};

// Do not edit below this line
module.exports = repeatString;
