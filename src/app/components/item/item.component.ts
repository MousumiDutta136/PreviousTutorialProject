import { Component, Input, OnInit } from '@angular/core';
import { BookData } from 'src/app/models/book.interface';
import { DataStoreService } from 'src/app/services/data-store.service';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
@Input() book!: BookData;
  constructor(private dataStore: DataStoreService) { }

  ngOnInit(): void {
  }

}
