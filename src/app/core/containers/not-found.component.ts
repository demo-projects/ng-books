import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'not-found',
  template: `
    <p>
      Page Not Found!
    </p>
  `
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
