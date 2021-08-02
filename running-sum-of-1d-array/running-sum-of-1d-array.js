/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
  let tot = 0;
  let results = [];
  for (let i = 0; i < nums.length; i++) {
    tot += nums[i];
    results.push(tot);
  }
  return results;
};

