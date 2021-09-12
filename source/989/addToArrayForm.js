/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
//  注释的代码是我第一次看得部分，把加数数组num转化为一个整数，然后相加，再转成数组，呜呜
//  1 <= A.length <= 10000
//  0 <= A[i] <= 9
//  0 <= K <= 10000
//  如果 A.length > 1，那么 A[0] != 0

// 输入：A = [2,1,5], K = 806
// 输出：[1,0,2,1]
// 解释：215 + 806 = 1021

// var addToArrayForm = function (num, k) {
//   var n = 0;
//   var res = [];
//   //   if (!Array.isArray(num)) {
//   //     return "不是个数组";
//   //   }

//   //   if (num.length < 1 || num.length > 10000) {
//   //     return "数组的长度应大于1少于10000";
//   //   }

//   //   if (!num.every((item) => 0 <= item <= 9)) {
//   //     return "数组的每个元素保持在0-9";
//   //   }

//   //   if (num.length > 1 && num[0] === 0) {
//   //     return "首项不能为0";
//   //   }

//   for (var i = 0; i < num.length; i++) {
//     n = n + num[i] * Math.pow(10, num.length - i - 1);
//   }

//   n = n + k;
//   if (n === 0) res[0] = 0;
//   while (n > 0) {
//     res.push(n % 10);
//     n = Math.floor(n / 10);
//   }
//   return res.reverse();
// };

// console.log(addToArrayForm([0], 0));

// 输入：A = [2,1,5], K = 8
// 输出：[1,0,2,1]
// 解释：215 + 806 = 1021

// 逐位相加法
var addToArrayForm = function (n, k) {
  var res = [];
  for (var i = n.length - 1; i >= 0; --i) {
    var sum = n[i] + (k % 10);
    k = Math.floor(k / 10);
    if (sum >= 10) {
      k++;
      sum = sum % 10;
    }
    res.push(sum);
  }
  for (; k > 0; k = Math.floor(k / 10)) {
    res.push(k % 10);
  }
  return res.reverse();
};

console.log(addToArrayForm([2, 1], 806));
