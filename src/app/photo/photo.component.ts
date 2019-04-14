import { Component, OnInit } from '@angular/core';
import { select  } from '@angular-redux/store';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  @select() selectedImage;
  constructor() { }

  ngOnInit() {
  }

}
