/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let newArr = [];
    let k = 0;
    for (let i = 0; i < n; i++) {
        newArr[k] = nums[i]
        k+=2;
    }
    let j = 1;
    for (let i = n; i < nums.length; i++) {
        newArr[j] = nums[i];
        j+=2;
    }
    return newArr;
    
};