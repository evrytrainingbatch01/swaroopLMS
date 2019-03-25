import { Component } from '@angular/core';
import {BookListService} from './book-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LibraryManagementService';
}

   title = 'Library Management ';
   firstname="Indrajit";
   lastname="Maharana";
   booksList;
   date=new Date();
   time=new Date().toLocaleTimeString();
   constructor(private bookService:BookListService){ }

   ngOnInit(){
     this.booksList=this.bookService.showBookList();
   }
  
