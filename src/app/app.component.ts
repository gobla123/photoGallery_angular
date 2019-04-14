import { Component, OnInit } from '@angular/core';

import { NgRedux  } from '@angular-redux/store';
import { IAppState } from '../store';
import { ImageService } from './image.service';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Photo Gallery';

  ngOnInit() {
    this.imageService.fetchData()
    .pipe(map(data => data.hits)
    )
    .subscribe((data) => {
      this.ngRedux.dispatch({type: 'IMAGES_LOADED', images: data});
    });
  }

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private imageService: ImageService) {}

  next() {
    this.ngRedux.dispatch({type: 'NEXT'});
  }

  previous() {
    this.ngRedux.dispatch({type: 'PREVIOUS'});
  }
}
