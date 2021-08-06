/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var results = [];
    for (let i = 0; i < nums.length; i++) {
        let index = i;
        let subSum = 1;
        for (let j = 0; j < nums.length; j++) {
            if (j !== index) {
                subSum *= nums[j];
            }
        }
        results.push(subSum);
    }
    return results;
};