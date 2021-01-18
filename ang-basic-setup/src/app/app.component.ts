import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Time:';

  constructor() {
    setInterval( () => {
      const cDate = new Date();
      const time = [
        cDate.getHours(),
        cDate.getMinutes(),
        cDate.getSeconds(),
      ].map( part => part < 10 ? `0${part}` : part );
      this.title = `Time: ${time.join(':')}`;
    }, 1000);
  }
}
