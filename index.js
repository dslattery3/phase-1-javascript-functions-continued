function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(s = '*'){
    //calls function
    return function(a = 'a dedicated programmer'){
        //function creates string
        return `You are ${s}${a}${s}!`;
    }
}