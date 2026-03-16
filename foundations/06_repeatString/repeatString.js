const repeatString = function(str, n) {
    let strconcat = str
    if (n > 0){
    for(let i = 0; i < n - 1; i++){
        strconcat = str +strconcat
    }
    return strconcat}
    else if(n < 0){
        return 'ERROR'
    }
    else{
        return ''
    }
};

// Do not edit below this line
module.exports = repeatString;
