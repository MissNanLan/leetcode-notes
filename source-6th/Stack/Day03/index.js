var CustomStack = function (maxSize) {
    this.arr = [];
    this.maxSize = maxSize;
  };
  
  
  CustomStack.prototype.push = function (x) {
    if (this.arr.length < this.maxSize) {
      return this.arr.push(x);
    }
  };
  
  
  CustomStack.prototype.pop = function () {
    if (this.arr.length > 0) {
      return this.arr.pop();
    }
    return -1;
  };
  
  
  
  CustomStack.prototype.increment = function (k, val) {
    for (var i = 0; i < k && i < this.arr.length; i++) {
      this.arr[i] += val;
    }
  };

// TODO: 测试