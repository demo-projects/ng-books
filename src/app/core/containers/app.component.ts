import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {AppState, selectLoading, selectHeader} from '../reducers/app.reducer';

@Component({
  selector: 'app-root',
  template: `
    <div>  
      <page-header *ngIf="showHeader | async" 
                   title="'NgBook Store'"></page-header>
      
      <navigation></navigation>
      
      <loader *ngIf="showLoader | async"></loader>
      
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `]
})

export class AppComponent {

  public showLoader: Observable<boolean>;
  public showHeader: Observable<boolean>;

  constructor(store: Store<AppState>) {
    this.showLoader = store.select(selectLoading);
    this.showHeader = store.select(selectHeader);
  }
}
