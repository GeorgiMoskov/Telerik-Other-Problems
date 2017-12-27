let n = 3;
let matrix = Array.from({
    length: n
});

for (let i = 0; i < matrix.length; i += 1) {
    matrix[i] = Array.from({
        length: n
    });
}


let dirRow = [0, 1, 0, -1];
let dirCol = [1, 0, -1, 0];
let dir = 0;
let row = 0;
let col = 0;

for (let i = 1; i <= n * n; i += 1) {
    matrix[row][col] = i;
    let nextRow = row + dirRow[dir];
    let nextCol = col + dirCol[dir];

    if (nextRow >= n || nextRow < 0 || nextCol >= n || nextCol < 0 || matrix[nextRow][nextCol] != undefined) {
        dir+=1;
        dir = dir%4;

    }

    row += dirRow[dir];
    col += dirCol[dir];


}

for(row of matrix){
    console.log(row);
}
