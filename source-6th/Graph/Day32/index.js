var judgeCircle = function (moves) {
    let x = 0,
        y = 0;
    for (let i = 0; i < moves.length; i++) {
        let s = moves[i];
        switch (s) {
            case "U":
                y++;
                break;
            case "D":
                y--;
                break;
            case "L":
                x--;
                break;
            default:
                x++;
        }
    }
    return x === 0 && y == 0;
};

console.log(judgeCircle("UD"))