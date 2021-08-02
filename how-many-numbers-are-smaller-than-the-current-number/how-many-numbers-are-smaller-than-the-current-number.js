/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    //initialize results array
    //iterate through every element in the array
        //initialize a counting variable
        //iteratate again through every element in the array
            //if the element in the outer loop is bigger than the element in the inner loop, increase the counting variable by one
        //push the counting variable to the results array
    //return the results array
    
    let results = [];
    for (let i = 0; i < nums.length; i++) {
        let smallerCount = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] > nums[j]){
                smallerCount++;
            }
        }
        results.push(smallerCount);
    }
    return results;    
};