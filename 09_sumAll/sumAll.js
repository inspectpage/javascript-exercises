const sumAll = function(first, second) {
    
    if (!Number.isInteger(first) || !Number.isInteger(second) || first < 0 || second < 0){
        return "ERROR"
    }
    let range = [];
    if (first > second){
        [first, second] = [second, first]
    }

    for (let i = first; i <= second; i++){
        range.push(i);
    }

    let sum = range.reduce((total, currentItem) => {
        return total + currentItem;
    }, 0);
    return sum;
    
};

// Do not edit below this line
module.exports = sumAll;
