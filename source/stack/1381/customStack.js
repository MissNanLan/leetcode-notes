/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
  this.arr = [];
  this.maxSize = maxSize;
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
  if (this.arr.length < this.maxSize) {
    return this.arr.push(x);
  }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  if (this.arr.length > 0) {
    return this.arr.pop();
  }
  return -1;
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
  for (var i = 0; i < k && i < this.arr.length; i++) {
    this.arr[i] += val;
  }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */

var obj = new CustomStack(3);
obj.push(2);
obj.pop();
obj.increment(2, 100);

console.log(obj);
