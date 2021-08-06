const INITIAL_TIME_MIN = 0;
const INITIAL_TIME_HOUR = 8;

class Clock {
  constructor() {
    this.event = null;
    this.time = {
      minute: INITIAL_TIME_MIN,
      hour: INITIAL_TIME_HOUR,
    };
    // this.map = map;
    // this.event = map.time.addEvent({
    //  delay: 1000,
    //  callback: (args) => {
    //    console.log('ARGS', args);
    //    console.log('THIS', this); // One second
    //    // console.log(`Countdown: ${formatTime(this.initialTime)}`);
    //  },
    //  callbackScope: this,
    //  loop: true,
    // });
  }

  reset() {
    this.time = {
      minute: INITIAL_TIME_MIN,
      hour: INITIAL_TIME_HOUR,
    };
  }

  set(minute, hour) {
    this.time = {
      minute,
      hour,
    };
  }

  continue(map) {
    this.event = map.time.addEvent({
      delay: 1000,
      callback: () => {
        this.add();
      },
      loop: true,
      callbackScope: this,
    });
  }

  show() {
    console.log(`${this.time.hour}:${this.time.minute}`);
  }

  add() {
    let { minute, hour } = this.time;

    minute += 1;
    if (minute >= 60) {
      minute = 0;
      hour += 1;
    }
    if (hour >= 24) {
      hour = 0;
    }

    this.time.minute = minute;
    this.time.hour = hour;
  }
}

export default Clock;

/*

SI al minimizar deja de pasar el tiempo

// In your scene.create() function
this.hiddenTimeStamp = 0;
this.game.events.on('hidden', () => {
    this.hiddenTimeStamp = performance.now();
    });

this.game.events.on('visible', () => {
    let elapsedTime = Math.floor((performance.now() - this.hiddenTimeStamp)/1000); //seconds
    this.initialTime -= elapsedTime;
    })
//...

*/
