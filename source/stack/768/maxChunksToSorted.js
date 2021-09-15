var maxChunksToSorted = function (arr) {
  let stack = [];
  for (var i = 0; i < arr.length; i++) {
    let head;
    // 合并
    if (stack.length > 0 && stack[stack.length - 1] > arr[i]) {
      head = stack.pop();
      while (stack.length > 0 && stack[stack.length - 1] > arr[i]) {
        stack.pop();
      }
      stack.push(head);
    } else {
      // 新的块
      stack.push(arr[i]);
    }
  }
  return stack.length;
};

console.log(maxChunksToSorted([2, 1, 3, 4, 4]));
