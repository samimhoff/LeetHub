/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    //initialize object that counts each number's occurences
    //initialize result number variable 
    //initialize top number counter at 0
    //loop through nums array
            //if the object does not yet have a key with the current element, add a key with that element and set the value to 1
            //if the key does exist, add 1 to it
        //if the current number count is higher than top number counter, set top number counter to the current number count and se tthe result number to the current number (the key)
    //return the result number
    let numberMatrix = {};
    let result = null;
    let topNumberCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (!numberMatrix[nums[i]]) {
            numberMatrix[nums[i]] = 1;
            if (1 > topNumberCount) {
                topNumberCount = 0; 
                result = nums[i];
            }
        } else {
            let newCount = numberMatrix[nums[i]] + 1;
            numberMatrix[nums[i]] = newCount;
            if (newCount > topNumberCount) {
                topNumberCount = newCount; 
                result = nums[i];
            }
        }
    }
    return result;
};