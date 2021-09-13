var decodeString = function (s) {
  var curStr = "",
    curNum = 0,
    stack = [];

  for (var i = 0; i < s.length; i++) {
    var c = s.charAt(i);
    if (c >= "0" && c <= "9") {
      curNum = curNum * 10 + Number(c);
    } else if (c === "[") {
      stack.push(curNum);
      stack.push(curStr);
      curStr = "";
      curNum = 0;
    } else if (c === "]") {
      let prevStr = stack.pop();
      let prevNum = stack.pop();
      curStr = prevStr + curStr.repeat(prevNum);
    } else {
      curStr += c;
    }
  }
  return curStr;
};

// console.log(decodeString("3[a]"));
console.log(decodeString("3[a]2[bc]"));
