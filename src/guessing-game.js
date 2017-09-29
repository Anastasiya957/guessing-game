class GuessingGame {
    constructor() {
    	var L = 0;
    	var R = 0;
    	var m = 0;
    }

    setRange(min, max) {
    	this.L=min;
    	this.R=max;
    }

    guess() {
    	this.m = Math.ceil( (this.L+this.R)/2 );
    	return this.m;
    }

    lower() {
    	this.R = this.m;
    }

    greater() {
    	this.L = this.m;
    }
}

module.exports = GuessingGame;
