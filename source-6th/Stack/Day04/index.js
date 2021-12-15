/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
 
  var stack = [];

  for (var i = 0; i < s.length; i++) {
    // 出栈

    if (s[i] === "]") {
      var repeatStr = "";
      var repeatCount = "";

      // 出栈是字母的话
      while (stack[stack.length - 1] != "[") {
        repeatStr = stack.pop() + repeatStr;
      }

      // pop 掉 [
      stack.pop();

      // 出栈是数字的话, 注意数字是多位的情况
      while (stack[stack.length - 1] >= "0" && stack[stack.length - 1] <= "9") {
          repeatCount = stack.pop() +repeatCount;
      }
      stack.push(repeatStr.repeat(Number(repeatCount)));
    } else {
      // 入栈
      stack.push(s[i]);
    }
  }
  return stack.join("");
};

console.log(decodeString("100[leetcode]"));
