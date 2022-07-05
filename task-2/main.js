let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 1, 2, 3],
    [4, 5, 6, 7]
]
let r = 3;
let c = 2;
let mat2 = [];

for (let i = 0; i < r; i++) {
    mat2.push([])
    for (let j = 0; j < c; j++) {
       mat2[i].push(matrix[i][j])
       

    }
    
}
console.log(mat2);
