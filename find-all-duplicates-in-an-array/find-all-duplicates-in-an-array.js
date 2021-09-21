/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let duplicates = [];
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;
        if (nums[index] > 0) {
           nums[index] = nums[index] * (-1);
        } else {
            duplicates.push(Math.abs(nums[i]));
        }
    }
    return duplicates;
    
    
    
    
};