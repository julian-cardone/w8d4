class Clock{
    constructor(){
        const time = new Date()
        this.hours = time.getHours();
        this.minutes = time.getMinutes();
        this.seconds = time.getSeconds();
        this.printTime();
        //setInterval(this._tick.bind(this), 1000);

        setInterval(() => {
            debugger
            this._tick.bind(this)
        }, 1000);
    }

    printTime(){
        console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    }

    _tick(){
        this.seconds++;
        this.printTime();
    }
}

const clock = new Clock();