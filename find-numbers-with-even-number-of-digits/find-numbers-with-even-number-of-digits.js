/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    //initialize result counter variable
    
    //define digit counter function
        //input is a number, num
        //stringify the input number
        //return the length of the stringified number
        
    //loop through nums array
        //for each element call digit counter and save to variable
        //if variable is divisible with no remainder by 2, add 1 to the result counter variable
    //return the result counter
    
    let result = 0;
    const digitCounter = (num) => {
       return num.toString().length;
    }
    for (let i = 0; i < nums.length; i++) {
      let digitCount = digitCounter(nums[i]);
      if(digitCount % 2 === 0) result++; 
    }
    return result;
    
};