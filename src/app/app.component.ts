import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `      
    <div class="container">
      <h1>{{title}}</h1>
    </div>
  `,
})
export class AppComponent {
  title = 'Ng Books Starter';
}
