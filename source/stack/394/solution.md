## 题目地址(394. 字符串解码)

https://leetcode-cn.com/problems/decode-string/

## 题目描述

```
给定一个经过编码的字符串，返回它解码后的字符串。

编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

 

示例 1：

输入：s = "3[a]2[bc]"
输出："aaabcbc"


示例 2：

输入：s = "3[a2[c]]"
输出："accaccacc"


示例 3：

输入：s = "2[abc]3[cd]ef"
输出："abcabccdcdcdef"


示例 4：

输入：s = "abc3[cd]xyz"
输出："abccdcdcdxyz"

```

## 前置知识

- 栈
- 括号匹配

## 公司

- 暂无

## 思路

1、 遍历 s 字符串，假设当前字符为 c
2、 如果是字母的话，拼接字符 curStr = curStr + c
3、 如果是数字的话，放入到一个临时变量 curNum
4、 如果碰到"["，则将 curStr、curNum 入栈 stack，入栈之后 curStr、curNum 设为初始值
5、 如果碰到"]", 则依次出栈，分别记作 prevStr、prevNum
6、出栈的时候，拼接字符串 curStr = prevStr + curStr.repeat(prevNum);

思考： stack 里面相邻的一定是字母数字隔开的吗，有没有可能出现连续的字母或数字

## 关键点

- 栈

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript
/**
 * @param {string} s
 * @return {string}
 */
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
```

**复杂度分析**

令 n 为数组长度。

- 时间复杂度：O(n), 一层循环，n 是 s 字符串的长度
- 空间复杂度： 这里不会分析
