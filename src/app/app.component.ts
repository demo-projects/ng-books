import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <img src="assets/ng-books.jpg"/>
      <h2>{{title}}</h2>
    </header>
  `,
  styles  : [`
    header {
      display: flex;
      align-items: center;
      flex-direction: column
    }
  `]
})
export class AppComponent {
  title = 'Ng Books Store';
}
