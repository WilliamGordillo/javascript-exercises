const fibonacci = function(member) {
    if(member < 0){
        return "OOPS"
    }
    member = parseInt(member)
    let num = 0
    let previous_num = 0
    let prevprevious_num = 0
    for(let i = 0; i <= member - 1; i++){
        if(i == 0){
           previous_num = 1
           num = 1
        }
        else if(i ==1){
            prevprevious_num = 1
        }
        else{
            num = previous_num + prevprevious_num
            prevprevious_num = previous_num
            previous_num = num
        }
    }
    return num
};

// Do not edit below this line
module.exports = fibonacci;
