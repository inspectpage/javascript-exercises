const fibonacci = function(num) {
    let array = [1, 1]
    let first = 1;
    let second = 1;
    let result = 2;
    num = Number(num);
    if (num == 0){
        array = [0];
    }else if (num < 0){
        return "OOPS"
    }
    for (let i = 3; i <= num; i++){
        result = first + second
        array.push(result)
        first = second
        second = result
    }
    return array.at(-1)

};


// Do not edit below this line
module.exports = fibonacci;