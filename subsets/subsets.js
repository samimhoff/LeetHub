/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = [];
    
    function recurse(temp, remainder) {
        result.push(temp);
        for (let i = 0; i < remainder.length; i++) {
            recurse(temp.concat(remainder[i]), remainder.slice(i + 1))
        }
        
    }
    recurse([], nums);
    return result;
};