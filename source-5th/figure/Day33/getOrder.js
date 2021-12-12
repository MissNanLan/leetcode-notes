/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
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
      throw new Error('Must be implement!');
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
  var getOrder = function(tasks) {
    // 为每个 task 添加一个索引属性并排序
    tasks.forEach((v, i) => v.push(i));
    tasks.sort((a, b) => b[0] - a[0]);
  
    // 初始化小根堆/优先队列
    const heap = new PriorityQueue(function(x, y) {
      // 第一优先级为执行时间，第二优先级为任务索引
      return this.A[x][1] !== this.A[y][1]
        ? this.A[x][1] < this.A[y][1]
        : this.A[x][2] < this.A[y][2]
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
        time += task[1];  // 任务执行完毕，递增 CPU 时间
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
  
