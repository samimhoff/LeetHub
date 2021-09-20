/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let operationChart = {
        '++X': 1,
        'X++': 1,
        '--X': -1,
        'X--': -1
    }
    let x = 0;
    for (let i = 0; i < operations.length; i++) {
        x += operationChart[operations[i]];
    }
    return x;
};