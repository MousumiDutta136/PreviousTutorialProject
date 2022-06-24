import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookData } from '../models/book.interface';
import { BehaviorSubject, take } from 'rxjs';
import { DataStoreService } from './data-store.service';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient, private dataStore: DataStoreService) {
    this.getBooks();
   }

   getBooks() {
    this.http.get<BookData[]>('/assets/book-data.json').pipe(
      take(1)
    ).subscribe((res: BookData[]) => {
      this.dataStore.setFullBooksList(res);
      this.dataStore.setBooks(res);
    })
   };
}
