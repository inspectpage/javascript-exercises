const removeFromArray = function(arr, ...removelist) {
    
    for (const number of arr){
        for (const remove of removelist){
            let removeIndex = arr.indexOf(remove);
            if (removeIndex == -1){
                continue
            }
            arr.splice(removeIndex, 1);
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;

[1,2,3,4], 3