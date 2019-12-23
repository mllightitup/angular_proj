import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reincorn';
  items: Array<any> = []

  constructor() {
    this.items = [
      { name: 'assets/images/thumb3.png' },
      { name: 'assets/images/thumb1.png' },
      { name: 'assets/images/thumb2.png' }
    ]
  }
}
