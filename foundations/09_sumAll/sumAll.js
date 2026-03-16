const sumAll = function(n1,n2) {
    let num = 0
    if(typeof n1 != 'number' || typeof n2 != 'number' || (n1 % 1 != 0) || (n2 % 1 != 0)){
        return 'ERROR'
    }
    else if(n1 < 0 || n2 < 0){
        return 'ERROR'
    }
    else if(n1 < n2)
    {
    for(let n = n1 ;n<=n2; ++n){
        num += n
    }
    }
    else{
        for(let n = n1 ;n>=n2; --n){
        num += n}
    }
    return num
};

// Do not edit below this line
module.exports = sumAll;
