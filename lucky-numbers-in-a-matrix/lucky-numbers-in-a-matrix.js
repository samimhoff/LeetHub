/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    let res = [];
    for (let i = 0; i < matrix.length; i++) {
        let smallR = Infinity;
        let row = null;
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] < smallR) {
                row = j
                smallR = matrix[i][j];
            }    
        }
        let smallC = -Infinity;
        for (let j = 0; j < matrix.length; j++){
            if (matrix[j][row] > smallC) {
                smallC = matrix[j][row];
            }
            
        }
        if (smallC === smallR) {
            res.push(smallR);
        }
    }
    return res;
};