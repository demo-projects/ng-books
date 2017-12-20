import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation',
  template: `
    <nav>  
      <a href="#" class="button button-clear">Browse</a>
      <a href="#" class="button button-clear">Collect</a>
    </nav>
  `,
  styles: [`
    nav {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  `]
})
export class NavigationComponent {}
