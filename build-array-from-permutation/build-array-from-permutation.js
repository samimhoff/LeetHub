/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let number = nums[nums[i]];
    res.push(number);
  }
  return res;
};

