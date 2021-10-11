/**
 * @param {string} moves
 * @return {boolean}
 */
 var judgeCircle = function(moves) {
     let x=0,y=0
    for(let i=0;i<moves.length;i++){
        let s = moves.charAt(i)
        switch(s){
            case 'U': y++; break
            case 'D': y--;break
            case 'L': x--;break
            default : x++
        }
        
    }
    return x===0 && y==0
};

// 时间复杂度：O(n)
// 空间复杂度：O(1)