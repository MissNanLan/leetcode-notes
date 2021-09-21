var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();
};

LRUCache.prototype.get = function (key) {
  const { map } = this;
  if (this.map.has(key)) {
    const target = map.get(key);
    map.delete(key);
    map.set(key, target);

    return target;
  } else return -1;
};

LRUCache.prototype.put = function (key, value) {
  const { map, capacity } = this;
  if (map.has(key)) map.delete(key);

  map.set(key, value);

  if (map.size > capacity) {
    // 获得插入顺序的第一个 key
    const firstKey = map.keys().next().value;
    map.delete(firstKey);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
