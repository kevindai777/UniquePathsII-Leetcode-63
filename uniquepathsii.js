//Objective is the same as 'Unique Paths' except with obstacles denoted by a '1'

let obstacleGrid = 
[[0,0,0],
 [0,1,0],
 [0,0,0]]


//O(n * m) solution where n and m are the length and width of the grid respectively
//Dynamic programming solution that fills the matrix from Bottom/Up

if (obstacleGrid[0][0] == 1) {
    return 0
}

obstacleGrid[0][0] = 1

for (let i = 1; i < obstacleGrid.length; i++) {
    //If the tile is open and the previous tile had a valid path 
    obstacleGrid[i][0] = (obstacleGrid[i][0] == 0 && obstacleGrid[i - 1][0] == 1) ? 1 : 0
}

for (let i = 1; i < obstacleGrid[0].length; i++) {
    obstacleGrid[0][i] = (obstacleGrid[0][i] == 0 && obstacleGrid[0][i - 1] == 1) ? 1 : 0
}

for (let i = 1; i < obstacleGrid.length; i++) {
    for (let j = 1; j < obstacleGrid[0].length; j++) {

        //We pass an obstacle
        if (obstacleGrid[i][j] == 1) {
            obstacleGrid[i][j] = 0

        //The number of paths is the number of paths from the left and top
        } else {
            obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1]    
        }
    }
}

return obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1]