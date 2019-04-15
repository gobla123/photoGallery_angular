import { Component, OnDestroy, AfterContentInit, Output, EventEmitter, Input } from '@angular/core';
import { select } from '@angular-redux/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements AfterContentInit, OnDestroy {

  private subscription: Subscription;
  private image: object;
  isClass1Visible: boolean;
  isClass2Visible: boolean;

  @select() selectedImage;
  @Output() zoomed: EventEmitter<boolean> =   new EventEmitter();

  constructor() {
    this.isClass1Visible = true;
    this.isClass2Visible = false;
   }

  ngAfterContentInit() {
    this.subscription = this.selectedImage.subscribe(
      (selectedImage: any) => {
        this.image = selectedImage;
      });
  }

  zoomInOutImage() {
    this.isClass1Visible = !this.isClass1Visible;
    this.isClass2Visible = !this.isClass2Visible;
    this.zoomed.emit(this.isClass2Visible);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}



