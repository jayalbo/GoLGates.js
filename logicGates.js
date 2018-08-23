class LOGICGates extends GameOfLife {
    constructor() {
        super(165, 76);
    }
    andGate(first, second) {
        this.emptyArray();
        const FIRST_GUN = { x: 0, y: 9 }
        const SECOND_GUN = { x: 38, y: 6 }
        const REVERSE_GUN = { x: 122, y: 7 }

        this.addGun(FIRST_GUN.x, FIRST_GUN.y);
        this.addGun(SECOND_GUN.x, SECOND_GUN.y);
        this.addGunReverse(REVERSE_GUN.x, REVERSE_GUN.y);

        if (!first)
            newGame.addStopper(29, 20);
        if (!second)
            newGame.addStopper(70, 20);

        for (let i = 0; i < 190; i++) {
            this.gameRound();
        }
        return (this.mainGrid[65][55] != 0 ? 1 : 0);
    }
    notGate(first) {
        this.emptyArray();
        const FIRST_GUN = { x: 0, y: 9 }
        const REVERSE_GUN = { x: 78, y: 10 }

        this.addGun(FIRST_GUN.x, FIRST_GUN.y);
        this.addGunReverse(REVERSE_GUN.x, REVERSE_GUN.y);

        if (!first)
            newGame.addStopper(29, 20);


        for (let i = 0; i < 103; i++) {
           this.gameRound();
       }
        return (this.mainGrid[35][34] != 0 ? 1 : 0);

    }
    orGate(first, second){
        this.emptyArray();
        const FIRST_GUN = { x: 0, y: 9 }
        const SECOND_GUN = { x: 38, y: 6 }
        const THIRD_GUN = { x: 78, y: 6 }
        
        const REVERSE_GUN = { x: 162, y: 7 }

        this.addGun(FIRST_GUN.x, FIRST_GUN.y);
        this.addGun(SECOND_GUN.x, SECOND_GUN.y);
        this.addGun(THIRD_GUN.x, THIRD_GUN.y);
        this.addGunReverse(REVERSE_GUN.x, REVERSE_GUN.y);

        if (!first)
            newGame.addStopper(70, 20);
        if (!second)
            newGame.addStopper(110, 20);

        for (let i = 0; i < 265; i++) {
            this.gameRound();
        }
        return (this.mainGrid[82][75] != 0 ? 1 : 0);
    
    }
    xorGate(first, second){
      return (this.orGate(this.andGate(this.notGate(first), second), 
                  this.andGate(this.notGate(second), first)) ? 1 : 0);
    }
}