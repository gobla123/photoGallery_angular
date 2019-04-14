import { Component, OnInit, HostListener } from '@angular/core';

import { AppComponent } from '../app.component';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor(
    private appComponent: AppComponent) {}

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {

    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.next();
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.previous();
    }
    event.stopPropagation();
  }

  ngOnInit() {
  }

  next() {
    this.appComponent.next();
  }

  previous() {
    this.appComponent.previous();
  }
}
