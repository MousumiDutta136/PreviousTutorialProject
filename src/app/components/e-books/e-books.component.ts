import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BooksService } from 'src/app/services/books.service';
import { DataStoreService } from 'src/app/services/data-store.service';

@Component({
  selector: 'app-e-books',
  templateUrl: './e-books.component.html',
  styleUrls: ['./e-books.component.css']
})
export class EBooksComponent implements OnInit {
  books: any;
  subscription!: Subscription;
  constructor(private booksService: BooksService, private dataStore: DataStoreService) { }

  ngOnInit(): void {
    this.subscription = this.dataStore.books$.subscribe(books => {
      this.books = books;
    })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

