
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

- 

## 公司

- 暂无

## 思路

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

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$, n 是s的长度
- 空间复杂度：$O(n)$,, n 是s的长度


