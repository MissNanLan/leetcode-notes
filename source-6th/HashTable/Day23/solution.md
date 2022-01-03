## 题目地址(30. 串联所有单词的子串)

https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/

## 题目描述

```
给定一个字符串 s 和一些 长度相同 的单词 words 。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。

注意子串要与 words 中的单词完全匹配，中间不能有其他字符 ，但不需要考虑 words 中单词串联的顺序。

 

示例 1：

输入：s = "barfoothefoobarman", words = ["foo","bar"]
输出：[0,9]
解释：
从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
输出的顺序不重要, [9,0] 也是有效答案。


示例 2：

输入：s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
输出：[]


示例 3：

输入：s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
输出：[6,9,12]


 

提示：

1 <= s.length <= 104
s 由小写英文字母组成
1 <= words.length <= 5000
1 <= words[i].length <= 30
words[i] 由小写英文字母组成
```

## 前置知识

- 

## 公司

- 暂无

## 思路

## 关键点

- 在于如何判断 s 的子串 Y 是否可以由 words 数组的构成
- 由于 words 中单词长度固定，我们可以将 Y 拆分成对应 words[0]长度的一个个子串 parts
-  只需要判断 words 和 parts 中的单词是否一一匹配即可，这里用两个哈希表表比对出现次数即可

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript

var findSubstring = function (s, words) {
    const len = words[0].length
    const res = []
    for (let i = 0; i <= s.length - words.length * len; i++) {
      const wordsCopy = [...words]
      dfs(wordsCopy, s.substring(i), i)
    }
    return res
    function dfs(arr, s, start) {
      if (arr.length === 0) return res.push(start)
      const str = s.substr(0, len)
      const index = arr.findIndex((item) => item === str)
      if (index > -1) {
        arr.splice(index, 1)
        console.log(arr.splice(index, 1))
        dfs(arr, s.substring(len), start)
      }
    }
}

```

