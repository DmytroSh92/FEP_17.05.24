class Timer {
    #intervalId = null;
    #element = document.getElementById('timer');
    constructor(timerValue) {
        this.timerValue = timerValue;
    }

    start(){
        if(this.intervalId == null) {
            this.intervalId = setInterval(() => this.#update(), 1000);
        }
    }

    #update() {
        if(!this.#isEnd()) {
            let m = Math.floor(this.timerValue / 60).toString().padStart(2, '0');
            let s = (this.timerValue % 60).toString().padStart(2, '0');
            this.#element.textContent = `${m}:${s}`;
            this.timerValue--;
        } else {
            clearInterval(this.intervalId);
        }
    }

    #isEnd() {
        return this.timerValue < 0;
    }
}

const timer = new Timer(87);
timer.start();