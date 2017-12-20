import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loader',
  template: `
    <div class="spinner"></div>
  `,
  styles: [`
    .spinner{
      pointer-events: none;
      width: 3em;
      height: 3em;
      border: 0.4em solid transparent;
      border-color: #eee;
      border-top-color: #9b4dca;
      border-radius: 50%;
      -webkit-animation: loadingspin 1s linear infinite;
      animation: loadingspin 1s linear infinite;
    }

    @-webkit-keyframes loadingspin {
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }

    @keyframes loadingspin {
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  `]
})
export class LoaderComponent  {}
