import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss']
})
export class WatchComponent implements OnInit {

  time: string = '';
  analogueTime: {hours: number, minutes: number, seconds: number} = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  secondsStyle = {
    transform: `rotate(0deg)`,
  };

  constructor() {
    setInterval( () => {
      const cDate = new Date();
      this.analogueTime = {
        hours: cDate.getHours(),
        minutes: cDate.getMinutes(),
        seconds: cDate.getSeconds(),
      };
      this.updateAnalogueWatch();

      const time = [
        cDate.getHours(),
        cDate.getMinutes(),
        cDate.getSeconds(),
      ].map( part => part < 10 ? `0${part}` : part );
      this.time = `Time: ${time.join(':')}`;
    }, 1000);
  }

  ngOnInit(): void {
  }

  updateAnalogueWatch(): void {
    const deg: number = 6 * this.analogueTime.seconds;
    this.secondsStyle = {
      transform: `rotate(${deg}deg)`,
    };
  }

}
