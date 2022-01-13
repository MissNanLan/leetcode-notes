## 题目地址(1834. 单线程 CPU)

https://leetcode-cn.com/problems/single-threaded-cpu/

## 题目描述

```
给你一个二维数组 tasks ，用于表示 n​​​​​​ 项从 0 到 n - 1 编号的任务。其中 tasks[i] = [enqueueTimei, processingTimei] 意味着第 i​​​​​​​​​​ 项任务将会于 enqueueTimei 时进入任务队列，需要 processingTimei 的时长完成执行。

现有一个单线程 CPU ，同一时间只能执行 最多一项 任务，该 CPU 将会按照下述方式运行：

如果 CPU 空闲，且任务队列中没有需要执行的任务，则 CPU 保持空闲状态。
如果 CPU 空闲，但任务队列中有需要执行的任务，则 CPU 将会选择 执行时间最短 的任务开始执行。如果多个任务具有同样的最短执行时间，则选择下标最小的任务开始执行。
一旦某项任务开始执行，CPU 在 执行完整个任务 前都不会停止。
CPU 可以在完成一项任务后，立即开始执行一项新任务。

返回 CPU 处理任务的顺序。

 

示例 1：

输入：tasks = [[1,2],[2,4],[3,2],[4,1]]
输出：[0,2,3,1]
解释：事件按下述流程运行：
- time = 1 ，任务 0 进入任务队列，可执行任务项 = {0}
- 同样在 time = 1 ，空闲状态的 CPU 开始执行任务 0 ，可执行任务项 = {}
- time = 2 ，任务 1 进入任务队列，可执行任务项 = {1}
- time = 3 ，任务 2 进入任务队列，可执行任务项 = {1, 2}
- 同样在 time = 3 ，CPU 完成任务 0 并开始执行队列中用时最短的任务 2 ，可执行任务项 = {1}
- time = 4 ，任务 3 进入任务队列，可执行任务项 = {1, 3}
- time = 5 ，CPU 完成任务 2 并开始执行队列中用时最短的任务 3 ，可执行任务项 = {1}
- time = 6 ，CPU 完成任务 3 并开始执行任务 1 ，可执行任务项 = {}
- time = 10 ，CPU 完成任务 1 并进入空闲状态


示例 2：

输入：tasks = [[7,10],[7,12],[7,5],[7,4],[7,2]]
输出：[4,3,2,0,1]
解释：事件按下述流程运行：
- time = 7 ，所有任务同时进入任务队列，可执行任务项  = {0,1,2,3,4}
- 同样在 time = 7 ，空闲状态的 CPU 开始执行任务 4 ，可执行任务项 = {0,1,2,3}
- time = 9 ，CPU 完成任务 4 并开始执行任务 3 ，可执行任务项 = {0,1,2}
- time = 13 ，CPU 完成任务 3 并开始执行任务 2 ，可执行任务项 = {0,1}
- time = 18 ，CPU 完成任务 2 并开始执行任务 0 ，可执行任务项 = {1}
- time = 28 ，CPU 完成任务 0 并开始执行任务 1 ，可执行任务项 = {}
- time = 40 ，CPU 完成任务 1 并进入空闲状态

 

提示：

tasks.length == n
1 <= n <= 105
1 <= enqueueTimei, processingTimei <= 109
```

## 前置知识

-

## 公司

- 暂无

## 思路

## 关键点

-

## 代码

- 语言支持：JavaScript

JavaScript Code:

```javascript
class Heap {
  constructor(compare) {
    this.A = [];
    this.compare = compare;
  }
  size() {
    return this.A.length;
  }
  left(i) {
    return 2 * i + 1;
  }
  right(i) {
    return 2 * i + 2;
  }
  parent(i) {
    return i > 0 ? (i - 1) >>> 1 : -1;
  }
  isEmpty() {
    return this.size() === 0;
  }
  peek() {
    return this.A[0];
  }
  heapifyDown(i) {
    let p = i;
    const l = this.left(i),
      r = this.right(i),
      size = this.size();
    if (l < size && this.compare(l, p)) p = l;
    if (r < size && this.compare(r, p)) p = r;
    if (p !== i) {
      this.exchange(i, p);
      this.heapifyDown(p);
    }
  }
  heapifyUp(i) {
    const p = this.parent(i);
    if (p >= 0 && this.compare(i, p)) {
      this.exchange(i, p);
      this.heapifyUp(p);
    }
  }
  exchange(x, y) {
    const temp = this.A[x];
    this.A[x] = this.A[y];
    this.A[y] = temp;
  }
  compare() {
    throw new Error("Must be implement!");
  }
}

class PriorityQueue extends Heap {
  constructor(compare) {
    super(compare);
  }
  enqueue(node) {
    this.A.push(node);
    this.heapifyUp(this.size() - 1);
  }
  dequeue() {
    const first = this.A[0];
    const last = this.A.pop();
    if (first !== last) {
      this.A[0] = last;
      this.heapifyDown(0);
    }
    return first;
  }
}

/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function (tasks) {
  // 为每个 task 添加一个索引属性并排序
  tasks.forEach((v, i) => v.push(i));
  tasks.sort((a, b) => b[0] - a[0]);

  // 初始化小根堆/优先队列
  const heap = new PriorityQueue(function (x, y) {
    // 第一优先级为执行时间，第二优先级为任务索引
    return this.A[x][1] !== this.A[y][1]
      ? this.A[x][1] < this.A[y][1]
      : this.A[x][2] < this.A[y][2];
  });
  const ans = [];
  // CPU 时间：初始化为首个任务的开始时间
  let time = tasks[tasks.length - 1][0];

  // 保证执行完所有任务
  while (heap.size() || tasks.length) {
    // 取出任务队列中优先级最高的任务
    if (!heap.isEmpty()) {
      const task = heap.dequeue();
      ans.push(task[2]); // 记录结果
      time += task[1]; // 任务执行完毕，递增 CPU 时间
    }

    // 添加任务到任务队列
    addTask(heap, tasks, time);

    // 边界：任务队列为空（剩余任务的入队时间跨度太大，导致上一步未能添加任务）
    if (heap.isEmpty() && tasks.length) {
      // 将 CPU 时间快进到下一个任务，并添加任务到任务队列
      time = tasks[tasks.length - 1][0];
      addTask(heap, tasks, time);
    }
  }

  return ans;
};

function addTask(heap, tasks, time) {
  // 将 tasks 中入队时间不快于当前 CPU 时间的任务入队
  while (tasks.length && tasks[tasks.length - 1][0] <= time) {
    heap.enqueue(tasks.pop());
  }
}
```

**复杂度分析**

令 n 为数组长度。

- 时间复杂度：$O(n)$
- 空间复杂度：$O(n)$
