import { Component, OnInit, HostListener } from '@angular/core';

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
    // from here we are going to manipulate Redux Store
    console.log('next photo');
  }

  previous() {
    // from here we are going to manipulate Redux Store
    console.log('previous photo');
  }
}
