import { Injectable } from '@angular/core';
import { BookData } from '../models/book.interface';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { ContentData } from '../models/content.interface';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  private _books: BehaviorSubject<BookData[] | any>  = new BehaviorSubject(null);
  books$: Observable<BookData[]> = this._books.asObservable();
  private fullBookList!: BookData[];

  private _contents: BehaviorSubject<ContentData[] | any>  = new BehaviorSubject(null);
  contents$: Observable<ContentData[]> = this._contents.asObservable();

  constructor() { }
  setBooks(books: BookData[]) {
    this._books.next(books);
  }

  setContents(contents: ContentData[]) {
    this._contents.next(contents);
  }

  filterBooks(text: string) {
    this._books.pipe(
      take(1)
    ).subscribe(books => {
      if (text === "") {
        this._books.next(this.fullBookList)
      } else {
        const filteredBooks = books.filter((book: BookData) => {
          const lowerCaseText = text.toLowerCase();
          const bookName = book.name.toLowerCase();
          return bookName.includes(lowerCaseText)
        })

        this._books.next(filteredBooks);
      }
    })
  }

  setFullBooksList(books: BookData[]) {
    this.fullBookList = books;
  }
}
