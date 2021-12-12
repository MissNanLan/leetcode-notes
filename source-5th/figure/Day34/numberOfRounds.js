/**
 * @param {string} startTime
 * @param {string} finishTime
 * @return {number}
 */

 var numberOfRounds = function(startTime, finishTime) {
    let start = startTime.split(":").map(Number);
    let finish = finishTime.split(":").map(Number);


    // 转化成分钟
    let startMin = start[0] * 60 + start[1];
    let finishMin = finish[0] * 60 + finish[1];


    if(finishMin < startMin) {
        finishMin += 24 * 60;
    }

    return  Math.floor(finishMin / 15) - Math.ceil(startMin / 15);
};

console.log(numberOfRounds("11:01","12:44"))