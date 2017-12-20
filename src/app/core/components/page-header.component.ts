import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'page-header',
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
    }`]
})
export class PageHeaderComponent  {
  @Input() title: string;
}
