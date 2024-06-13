let ladder = {
    numberOfStep: 0,
    up: function () {
        this.numberOfStep++;
        return this;
    },
    down: function () {
        this.numberOfStep--;
        return this;
    },
    showStep: function () {
        console.log(this.numberOfStep)
        return this;
    }
};

ladder.up().up().down().showStep();