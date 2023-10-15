import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-initials';
  test = 'hello world';
  test2 = 5;
  test3 = 5;

  test4() {
    console.log('test4');
  }
}
