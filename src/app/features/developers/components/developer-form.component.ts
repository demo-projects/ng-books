import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Developer} from '../models/developer';

@Component({
  selector: 'developer-form',
  template: `
    <div>
      <form (ngSubmit)="developerCreated.emit(developer)">
        <label>Developer name</label>
        <input type="text" [(ngModel)]="developer.name" name="name">
        
        <label>Technology</label>
        <input type="text" [(ngModel)]="developer.tech" name="tech">
        
        <button class="button button-outline">Update</button>
      </form>
    </div>
  `,
  styles: [`
    div {padding: 15px}
  `]
})
export class DeveloperFormComponent {

  @Output() developerCreated = new EventEmitter();

  developer:Developer = {name: '', tech: ''};
}
