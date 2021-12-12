/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (n, k) {
    var res = [];
    for (var i = n.length - 1; i >= 0; --i) {
        var sum = n[i] + (k % 10);
        k = Math.floor(k / 10);
        // 如果相加大于10，则进位，把进位的1加入到下一位计算中
        if (sum >= 10) {
            k++;
            sum = sum % 10;
        }
        res.push(sum);
    }
    // 如果n>num的长度
    for (; k > 0; k = Math.floor(k / 10)) {
        res.push(k % 10);
    }

    return res.reverse();
};

var addToArrayForm = function (num, k) {
    const res = [];
    const n = num.length;
    for (let i = n - 1; i >= 0 || k > 0; --i, k = Math.floor(k / 10)) {
        if (i >= 0) {
            k += num[i];
        }
        res.push(k % 10);
    }
    res.reverse();
    return res;
};


console.log(addToArrayForm([1, 2, 0, 0], 34))