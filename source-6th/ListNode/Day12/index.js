// // int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
// // void put(int key, int value) 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。

// // /**
// //  * @param {number} capacity
// //  */
// // var LRUCache = function (capacity) {
// //   this.capacity = capacity;
// //   this.map = new Map();
// // };

// // /**
// //  * @param {number} key
// //  * @return {number}
// //  */
// // LRUCache.prototype.get = function (key) {
// //   const { map } = this;
// //   if (this.map.has(key)) {
// //     const target = map.get(key);
// //     map.delete(key);    // 为啥要删除
// //     map.set(key, target); // 为啥要再设置
// //     return target;
// //   }
// //   return -1;
// // };

// // /**
// //  * @param {number} key
// //  * @param {number} value
// //  * @return {void}
// //  */
// // LRUCache.prototype.put = function (key, value) {
// //   const { map, capacity } = this;
// //   if (map.has(key)) map.delete(key);  // 为啥要删除，而不是直接set

// //   map.set(key, value);

// //   if (map.size > capacity) {
// //     // 获得插入顺序的第一个 key
// //     const firstKey = map.keys().next().value;
// //     map.delete(firstKey);
// //   }
// // };

// /**
//  * Your LRUCache object will be instantiated and called as such:
//  * var obj = new LRUCache(capacity)
//  * var param_1 = obj.get(key)
//  * obj.put(key,value)
//  */

// // 实现一个类似于java的Linkedhashmap
// // 创建一个双链表的类
// // 实现一个类似于java的Linkedhashmap
// // 创建一个双链表的类
// class DoubleLinkedListNode {
//     constructor(key, value) {
//          this.key = key
//          this.value = value
//          this.prev = null
//          this.next = null
//      }
//  }
 
//  class LRUCache {
//       constructor(capacity) {
//          this.capacity = capacity
//          this.usedSpace = 0
//          // Mappings of key->node.
//          this.hashmap = {}
//          this.dummyHead = new DoubleLinkedListNode(null, null)
//          this.dummyTail = new DoubleLinkedListNode(null, null)
//          this.dummyHead.next = this.dummyTail
//          this.dummyTail.prev = this.dummyHead
//      }
//      _isFull() {
//          return this.useSpace === this.capacity;
//      }
 
//      // 双向链表的删除节点，太晕了
//     _removeNode(node) {
//          node.prev.next = node.next
//          node.next.prev = node.prev
//          node.prev = null
//          node.next = null
//          return node
//      }
 
//      // 哭晕
//      _addToHead(node) {
//          const head = this.dummyHead.next
//          node.next = head
//          head.prev = node
//          node.prev = this.dummyHead
//          this.dummyHead.next = node
//      }
 
//      get(key) {
//          if (key in this.hashmap) {
//              const node = this.hashmap[key]
//              this._addToHead(this._removeNode(node))
//              return node.value
//          }
//          else {
//              return -1
//          }
//      }
 
//      put(key, value) {
//          if (key in this.hashmap) {  // update
//              const node = this.hashmap[key]
//              node.value = value
//              this._addToHead(this._removeNode(node))
//          }
//          else {   // add
//              if (this._isFull()) {
//                  const node = this.dummyTail.prev
//                  delete this.hashmap[node.key]
//                  this._removeNode(node)
//                  this.usedSpace--
//              }
//              // 创建一个双链表
//              const node = new DoubleLinkedListNode(key, value)
//              this.hashmap[key] = node
//              this._addToHead(node)
//              this.usedSpace++
//          }
//      }
//  }
 

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