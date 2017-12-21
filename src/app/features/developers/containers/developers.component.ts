import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {CreateDeveloper, DeleteDeveloper} from '../actions/developers.actions';
import {Developer} from '../models/developer';
import {selectAll, State} from "../reducers/developer.reducer";

@Component({
  selector: 'developers',
  template: `
    <section>
      <developer-form (developerCreated)="createDeveloper($event)"></developer-form>
      <developer-table [developers]="developers | async"
                       (onTrash)="deleteDeveloper($event)"></developer-table>
    </section>
  `,
  styles  : [`
    section {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  `]
})
export class DevelopersComponent {

  public developers;

  constructor(private store: Store<State>) {
    this.developers = store.select(selectAll);
  }

  createDeveloper(developer: Developer) {
    this.store.dispatch(new CreateDeveloper(developer));
  }

  deleteDeveloper(id: string){
    this.store.dispatch(new DeleteDeveloper(id));
  }

}
