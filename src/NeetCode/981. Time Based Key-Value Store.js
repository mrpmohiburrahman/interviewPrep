var TimeMap = function () {
  this.store = {};
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.store[key]) this.store[key] = [];
  this.store[key].push([value, timestamp]);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  let res = "";
  let vaules = this.store[key];
  let left = 0;
  let right = vaules.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (vaules[middle][1] <= timestamp) {
      res = vaules[middle][0];
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return res;
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

timeMap = new TimeMap();
timeMap.set("foo", "bar", 1); // store the key "foo" and value "bar" along with timestamp = 1.
timeMap.get("foo", 1); // return "bar"
timeMap.get("foo", 3); // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
timeMap.set("foo", "bar2", 4); // store the key "foo" and value "bar2" along with timestamp = 4.
timeMap.get("foo", 4); // return "bar2"
timeMap.get("foo", 5); // return "bar2"

//  Constraints:

//      1 <= key.length, value.length <= 100
//      key and value consist of lowercase English letters and digits.
//      1 <= timestamp <= 107
//      All the timestamps timestamp of set are strictly increasing.
//      At most 2 * 105 calls will be made to set and get.
