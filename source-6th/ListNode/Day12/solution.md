
## 题目地址(146. LRU 缓存机制)m

https://leetcode-cn.com/problems/lru-cache/

## 题目描述

```
运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制 。

实现 LRUCache 类：

LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
void put(int key, int value) 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。

 

进阶：你是否可以在 O(1) 时间复杂度内完成这两种操作？

 

示例：

输入
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
输出
[null, null, null, 1, null, -1, null, -1, 3, 4]

解释
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4


 

提示：

1 <= capacity <= 3000
0 <= key <= 10000
0 <= value <= 105
最多调用 2 * 105 次 get 和 put
```

## 前置知识

- 

## 公司

- 暂无

## 思路

### 使用内置数据结构


- 语言支持：JavaScript

JavaScript Code:

```javascript
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const { map } = this;
  if (this.map.has(key)) {
    const target = map.get(key);
    map.delete(key);    // 为啥要删除
    map.set(key, target); // 为啥要再设置
    return target;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const { map, capacity } = this;
  if (map.has(key)) map.delete(key);  // 为啥要删除，而不是直接set

  map.set(key, value);

  if (map.size > capacity) {
    // 获得插入顺序的第一个 key
    const firstKey = map.keys().next().value;
    map.delete(firstKey);
  }
};
```

### 哈希表+双链表

- 题目要求时间复杂度是O(1)。
- get  如果关键字存在缓存的中，则返回关键字的值，否则返回-1
- put 如果关键字已经存在，则变更其数据值；否则则插入，当缓存容量达到上限的时候，在写入之前删除最久未使用的的数据值

如何删除最久未使用的的数据值
为啥用双链表
参照官方题解，没完全弄懂


## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript
class DoubleLinkedListNode {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.prev = null
        this.next = null
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.usedSpace = 0
        // Mappings of key->node.
        this.hashmap = {}
        this.dummyHead = new DoubleLinkedListNode(null, null)
        this.dummyTail = new DoubleLinkedListNode(null, null)
        this.dummyHead.next = this.dummyTail
        this.dummyTail.prev = this.dummyHead
    }

    _isFull() {
        return this.usedSpace === this.capacity
    }

    _removeNode(node) {
        node.prev.next = node.next
        node.next.prev = node.prev
        node.prev = null
        node.next = null
        return node
    }

    _addToHead(node) {
        const head = this.dummyHead.next
        node.next = head
        head.prev = node
        node.prev = this.dummyHead
        this.dummyHead.next = node
    }

    get(key) {
        if (key in this.hashmap) {
            const node = this.hashmap[key]
            this._addToHead(this._removeNode(node))
            return node.value
        }
        else {
            return -1
        }
    }

    put(key, value) {
        if (key in this.hashmap) {
            // If key exists, update the corresponding node and move it to the head.
            const node = this.hashmap[key]
            node.value = value
            this._addToHead(this._removeNode(node))
        }
        else {
        // If it's a new key.
            if (this._isFull()) {
                // If the cache is full, remove the tail node.
                const node = this.dummyTail.prev
                delete this.hashmap[node.key]
                this._removeNode(node)
                this.usedSpace--
            }
            // Create a new node and add it to the head.
            const node = new DoubleLinkedListNode(key, value)
            this.hashmap[key] = node
            this._addToHead(node)
            this.usedSpace++
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

```


**复杂度分析**

令 n 为数组长度。

- 时间复杂度：对于 put 和 get 都是 O(1)。

- 空间复杂度：O(capacity)，因为哈希表和双向链表最多存储  capacity+1 个元素。


