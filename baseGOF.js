'use strict';

class GameOfLife {
    constructor(x, y) { //Class constructor 

        this.x = x;
        this.y = y;

        //Create empty arrays
        this.mainGrid = new Array(this.x);
        this.copyGrid = new Array(this.x);

        //Create grid arrays
        for (let cols = 0; cols < this.x; cols++) {
            this.mainGrid[cols] = new Array(this.y);

            //Create neighbors grid
            this.copyGrid[cols] = new Array(this.y);
            this.copyGrid[cols].fill(0);
        }
        //Fill arrays
        this.emptyArray();

    }
    gameRound() {
        //Add neighbors to copyGrid
        for (let cols = 0; cols < this.x; cols++) {
            for (let rows = 0; rows < this.y; rows++) {
                this.copyGrid[cols][rows] = this.getNeighbors(cols, rows);
            }
        }
        //Round for main grid
        for (let cols = 0; cols < this.x; cols++) {
            for (let rows = 0; rows < this.y; rows++) {
                if (this.mainGrid[cols][rows] == 1) {
                    switch (this.copyGrid[cols][rows]) {
                        case 0: case 1: // Dies
                            this.mainGrid[cols][rows] = 0;
                            break;

                        case 2: case 3: // Lives
                            this.mainGrid[cols][rows] = 1;
                            break;

                        default: // More than 3 neighbors - Dies
                            this.mainGrid[cols][rows] = 0;
                            break;
                    }
                } else {
                    // If dead cell has 3 neighbors lives
                    this.mainGrid[cols][rows] = (this.copyGrid[cols][rows] == 3) ? 1 : 0;
                }
            }
        }
    }
    getNeighbors(x, y) {
        //Return number of neighbors
        return (x > 0 && y > 0 ? this.mainGrid[x - 1][y - 1] : 0) +
            (x > 0 ? this.mainGrid[x - 1][y] : 0) +
            (x > 0 && y < this.y - 1 ? this.mainGrid[x - 1][y + 1] : 0) +
            (y > 0 ? this.mainGrid[x][y - 1] : 0) +
            (y < this.y - 1 ? this.mainGrid[x][y + 1] : 0) +
            (y > 0 && x < this.x - 1 ? this.mainGrid[x + 1][y - 1] : 0) +
            (x < this.x - 1 ? this.mainGrid[x + 1][y] : 0) +
            (x < this.x - 1 && y < this.y - 1 ? this.mainGrid[x + 1][y + 1] : 0);

    }
    addGun(drawX, drawY) {
        //Add Gun
        this.mainGrid[drawX][drawY] = 1;
        this.mainGrid[drawX][drawY + 1] = 1;
        this.mainGrid[drawX + 1][drawY] = 1;
        this.mainGrid[drawX + 1][drawY + 1] = 1;

        this.mainGrid[drawX + 10][drawY] = 1;
        this.mainGrid[drawX + 10][drawY + 1] = 1;
        this.mainGrid[drawX + 10][drawY + 2] = 1;

        this.mainGrid[drawX + 11][drawY - 1] = 1;
        this.mainGrid[drawX + 11][drawY + 3] = 1;

        this.mainGrid[drawX + 12][drawY - 2] = 1;
        this.mainGrid[drawX + 12][drawY + 4] = 1;
        this.mainGrid[drawX + 13][drawY - 2] = 1;
        this.mainGrid[drawX + 13][drawY + 4] = 1;

        this.mainGrid[drawX + 14][drawY + 1] = 1;

        this.mainGrid[drawX + 15][drawY - 1] = 1;
        this.mainGrid[drawX + 15][drawY + 3] = 1;

        this.mainGrid[drawX + 16][drawY] = 1;
        this.mainGrid[drawX + 16][drawY + 1] = 1;
        this.mainGrid[drawX + 16][drawY + 2] = 1;

        this.mainGrid[drawX + 17][drawY + 1] = 1;

        this.mainGrid[drawX + 20][drawY] = 1;
        this.mainGrid[drawX + 20][drawY - 1] = 1;
        this.mainGrid[drawX + 20][drawY - 2] = 1;
        this.mainGrid[drawX + 21][drawY] = 1;
        this.mainGrid[drawX + 21][drawY - 1] = 1;
        this.mainGrid[drawX + 21][drawY - 2] = 1;

        this.mainGrid[drawX + 22][drawY - 3] = 1;
        this.mainGrid[drawX + 22][drawY + 1] = 1;

        this.mainGrid[drawX + 24][drawY - 3] = 1;
        this.mainGrid[drawX + 24][drawY + 1] = 1;
        this.mainGrid[drawX + 24][drawY - 4] = 1;
        this.mainGrid[drawX + 24][drawY + 2] = 1;

        this.mainGrid[drawX + 34][drawY - 2] = 1;
        this.mainGrid[drawX + 34][drawY - 1] = 1;
        this.mainGrid[drawX + 35][drawY - 2] = 1;
        this.mainGrid[drawX + 35][drawY - 1] = 1;
    }
    addGunReverse(drawX, drawY) {
        this.mainGrid[drawX][drawY] = 1;
        this.mainGrid[drawX][drawY + 1] = 1;
        this.mainGrid[drawX - 1][drawY] = 1;
        this.mainGrid[drawX - 1][drawY + 1] = 1;

        this.mainGrid[drawX - 10][drawY] = 1;
        this.mainGrid[drawX - 10][drawY + 1] = 1;
        this.mainGrid[drawX - 10][drawY + 2] = 1;

        this.mainGrid[drawX - 11][drawY - 1] = 1;
        this.mainGrid[drawX - 11][drawY + 3] = 1;

        this.mainGrid[drawX - 12][drawY - 2] = 1;
        this.mainGrid[drawX - 12][drawY + 4] = 1;
        this.mainGrid[drawX - 13][drawY - 2] = 1;
        this.mainGrid[drawX - 13][drawY + 4] = 1;

        this.mainGrid[drawX - 14][drawY + 1] = 1;

        this.mainGrid[drawX - 15][drawY - 1] = 1;
        this.mainGrid[drawX - 15][drawY + 3] = 1;

        this.mainGrid[drawX - 16][drawY] = 1;
        this.mainGrid[drawX - 16][drawY + 1] = 1;
        this.mainGrid[drawX - 16][drawY + 2] = 1;

        this.mainGrid[drawX - 17][drawY + 1] = 1;

        this.mainGrid[drawX - 20][drawY] = 1;
        this.mainGrid[drawX - 20][drawY - 1] = 1;
        this.mainGrid[drawX - 20][drawY - 2] = 1;
        this.mainGrid[drawX - 21][drawY] = 1;
        this.mainGrid[drawX - 21][drawY - 1] = 1;
        this.mainGrid[drawX - 21][drawY - 2] = 1;

        this.mainGrid[drawX - 22][drawY - 3] = 1;
        this.mainGrid[drawX - 22][drawY + 1] = 1;

        this.mainGrid[drawX - 24][drawY - 3] = 1;
        this.mainGrid[drawX - 24][drawY + 1] = 1;
        this.mainGrid[drawX - 24][drawY - 4] = 1;
        this.mainGrid[drawX - 24][drawY + 2] = 1;

        this.mainGrid[drawX - 34][drawY - 2] = 1;
        this.mainGrid[drawX - 34][drawY - 1] = 1;
        this.mainGrid[drawX - 35][drawY - 2] = 1;
        this.mainGrid[drawX - 35][drawY - 1] = 1;
    }
    addStopper(drawX, drawY) {
        this.mainGrid[drawX][drawY] = 1;
        this.mainGrid[drawX + 1][drawY] = 1;
        this.mainGrid[drawX][drawY + 1] = 1;
        this.mainGrid[drawX + 2][drawY + 1] = 1;
        this.mainGrid[drawX + 2][drawY + 2] = 1;
        this.mainGrid[drawX + 2][drawY + 3] = 1;
        this.mainGrid[drawX + 3][drawY + 3] = 1;
    }
    addStopperReverse(drawX, drawY) {
        this.mainGrid[drawX][drawY] = 1;
        this.mainGrid[drawX - 1][drawY] = 1;
        this.mainGrid[drawX][drawY + 1] = 1;
        this.mainGrid[drawX - 2][drawY + 1] = 1;
        this.mainGrid[drawX - 2][drawY + 2] = 1;
        this.mainGrid[drawX - 2][drawY + 3] = 1;
        this.mainGrid[drawX - 3][drawY + 3] = 1;
    }    
    emptyArray() {
        for (let cols = 0; cols < this.x; cols++) {
            this.mainGrid[cols].fill(0);
        }
    }

}