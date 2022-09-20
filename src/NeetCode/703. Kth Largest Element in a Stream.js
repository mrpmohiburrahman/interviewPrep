const { MinPriorityQueue } = require("@datastructures-js/priority-queue");
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.minHeap = MinPriorityQueue.fromArray([4, 3, 2, 1]);
  this.k = k;
  while (this.minHeap.size() > this.k) {
    this.minHeap.pop();
  }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.minHeap.enqueue(val);
  if (this.minHeap.size() > this.k) {
    this.minHeap.dequeue();
  }
  return this.minHeap.pop();
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

// const minHeap = new MinPriorityQueue();
const minHeap = MinPriorityQueue.fromArray([4, 3, 2, 1]);
while (minHeap.size() > 2) {
  minHeap.pop();
}
minHeap.enqueue(0);
console.log(`=== ${minHeap.toArray()}`);
console.log(`[minHeap.top()] === ${minHeap.pop()}`);
