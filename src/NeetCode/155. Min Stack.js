var MinStack = function () {
  this.elements = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.elements.push({
    val,
    min: this.elements.length === 0 ? val : Math.min(val, this.getMin()),
  });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.elements.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.elements[this.elements.length - 1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.elements[this.elements.length - 1].min;
};

// Input
// ["MinStack","push","push","push","getMin","pop","top","getMin"]
// [[],[-2],[0],[-3],[],[],[],[]]

// Output
// [null,null,null,null,-3,null,0,-2]

var obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-3);
// obj.pop();
console.log(`obj.getMin() === ${obj.getMin()}`);
obj.pop();
console.log(`obj.top() === ${obj.top()}`);
console.log(`obj.getMin() === ${obj.getMin()}`);
// var param_3 = obj.top();
// var param_4 = obj.getMin();
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
