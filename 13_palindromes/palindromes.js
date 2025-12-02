const palindromes = function (string) {
    const stringTrim = string.replaceAll(" ", "");
    const stringLowerCase = stringTrim.toLowerCase();
    const removePunctuation = stringLowerCase.replace(/[.,!]/g, "")
    let result = removePunctuation.split("")
    let reverse = []

    for (let i = -1; i >= -result.length; i--){
        reverse.push(result.at(i))
    }
    result = result.join()
    reverse = reverse.join()

    if (result === reverse){
        return true
    } else{
        return false
    }
}

console.log(palindromes("Hello!"))

// Do not edit below this line
module.exports = palindromes;
