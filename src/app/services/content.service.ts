import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContentData } from '../models/content.interface';
import { DataStoreService } from './data-store.service';
import {  take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient, private dataStore: DataStoreService) {
    this.getContents();
  }
  getContents() {
    this.http.get<ContentData[]>('/assets/docs-data.json').pipe(
      take(1)
    ).subscribe((res: ContentData[]) => {
      this.dataStore.setContents(res);
    })
   };

}
