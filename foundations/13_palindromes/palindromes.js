const palindromes = function (str) {
    str = str.replace(/[^a-z0-9]/gi, "").toLowerCase()
    let palindrome = true
    let nLetters = str.length
    for (let i = 0; i <= nLetters - 1; i++){
        if(str[i] !== str[nLetters - i - 1]){
            palindrome = false
            break
        }
    }
    return palindrome
};

// Do not edit below this line
module.exports = palindromes;
