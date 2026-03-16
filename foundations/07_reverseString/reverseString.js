const reverseString = function(str) {
    let len = str.length
    let rev = ''
    for(let i = len -1;i >=0;--i){
        let letter = str.charAt(i)
        rev += letter
    }
    return rev
};

// Do not edit below this line
module.exports = reverseString;
