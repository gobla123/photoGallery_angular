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
  isClass1Visible: boolean;
  isClass2Visible: boolean;

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
    private imageService: ImageService) {
      this.isClass1Visible = true;
      this.isClass2Visible = false;
    }

  next() {
    this.ngRedux.dispatch({type: 'NEXT'});
  }

  previous() {
    this.ngRedux.dispatch({type: 'PREVIOUS'});
  }

  zoomChangedHandler(zoomed: boolean) {
    this.isClass1Visible = !zoomed;
    this.isClass2Visible = zoomed;
  }
}
