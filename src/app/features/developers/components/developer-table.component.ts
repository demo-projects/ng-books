import {Component, Output, Input, EventEmitter} from '@angular/core';
import {Developer} from '../models/developer';

@Component({
  selector: 'developer-table',
  template: `
    <div>
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Joined</th>
          <th>Tech</th>
          <th></th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let developer of developers">
          <th>{{developer.name}}</th>
          <th>{{developer.joined | date}}</th>
          <th>{{developer.tech}}</th>
          <th><span (click)="onTrash.emit(developer.id)" class="fa fa-trash"></span></th>
          <th><span (click)="onEdit.emit()" class="fa fa-pencil"></span></th>
        </tr>
        </tbody>
      </table>
    </div>
  `,
  styles  : [`
    div {
      padding: 0 15px
    }
  `]
})
export class DeveloperTableComponent {

  @Input() developers: Developer[];

  @Output() onTrash = new EventEmitter();
  @Output() onEdit  = new EventEmitter();
}
