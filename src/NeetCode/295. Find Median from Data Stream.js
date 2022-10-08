var MedianFinder = function () {
  this.small = new MaxPriorityQueue();
  this.large = new MinPriorityQueue();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  this.small.enqueue(num);
  // every num in small is <= every num in large
  if (
    this.small.isEmpty() === false &&
    this.large.isEmpty() === false &&
    this.small.front().element > this.large.front().element
  ) {
    // const val = ;
    this.large.enqueue(this.small.dequeue().element);
  }
  if (this.small.size() > this.large.size() + 1) {
    // const val = this.small.dequeue().element;
    this.large.enqueue(this.small.dequeue().element);
  } else if (this.large.size() > this.small.size() + 1) {
    // const val = this.large.dequeue().element;
    this.small.enqueue(this.large.dequeue().element);
  }
  //   console.log(`-----------`);
  // console.log(this.small.toArray());
  // console.log(this.large.toArray());
  // console.log(`-----------`);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  let median;
  if (this.small.size() > this.large.size()) {
    // console.log(`1st`)
    // console.log(`1st === ${JSON.stringify(this.small.toArray())}`)

    median = this.small.front().element;
    // return this.small.front();
  } else if (this.large.size() > this.small.size()) {
    // console.log(`2nd`)
    median = this.large.front().element;
    // return this.large.front();
  } else {
    // console.log(`3rd`)
    median = (this.small.front().element + this.large.front().element) / 2;
    // return (this.small.front() + this.large.front()) / 2;
  }
  // console.log(`this.small.size() === ${JSON.stringify(this.small.size())}`);
  // console.log(`this.large.size() === ${JSON.stringify(this.large.size())}`);
  // console.log(`this.large.front() === ${this.large.front()}`);
  // console.log(`median === ${median}`);
  return median;
};
