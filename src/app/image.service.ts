import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ImageService {
  constructor(private http: HttpClient) { }

  fetchData(): Observable<any> {
   // return this.http.get("https://jsonplaceholder.typicode.com/photos?albumId=3");
    const hostApiUrl = 'https://pixabay.com/api/?key=12191328-3ad34634af4de3007f9825b97&image_type=photo&category=nature&per_page=50&pretty=true';
    return this.http.get(hostApiUrl);
  }
}

