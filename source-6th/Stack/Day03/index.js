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

  var customStack = new CustomStack(3); // 栈是空的 []
  customStack.push(1);                          // 栈变为 [1]
  console.log(customStack)
  customStack.push(2);                          // 栈变为 [1, 2]
  customStack.pop();                            // 返回 2 --> 返回栈顶值 2，栈变为 [1]
  customStack.push(2);                          // 栈变为 [1, 2]
  customStack.push(3);                          // 栈变为 [1, 2, 3]
  customStack.push(4);                          // 栈仍然是 [1, 2, 3]，不能添加其他元素使栈大小变为 4
  customStack.increment(5, 100);                // 栈变为 [101, 102, 103]
  customStack.increment(2, 100);                // 栈变为 [201, 202, 103]
  customStack.pop();                            // 返回 103 --> 返回栈顶值 103，栈变为 [201, 202]
  customStack.pop();                            // 返回 202 --> 返回栈顶值 202，栈变为 [201]
  customStack.pop();                            // 返回 201 --> 返回栈顶值 201，栈变为 []
  customStack.pop();  
  

  


//   ["CustomStack","push","push","pop","push","push","push","increment","increment","pop","pop","pop","pop"][[3],[1],[2],[],[2],[3],[4],[5,100],[2,100],[],[],[],[]]
// TODO: 测试