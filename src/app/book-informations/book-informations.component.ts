import { Component, OnInit,Input,Output,EventEmitter,AfterViewInit } from '@angular/core';
import {BookInfoService} from '../book-info.service';

@Component({
  selector: 'app-book-informations',
  templateUrl: './book-informations.component.html',
  styleUrls: ['./book-informations.component.css']
})
export class BookInformationsComponent implements OnInit, AfterViewInit {

  valueofbook;
  counter=0;
  @Input('selectedBook') selectedBook:String;
  @Input('selectedBookinfo') selectedBookinfo:Object;

  constructor(private bookinfoservice : BookInfoService) { }

  ngOnInit() {
  }

  //child to parent data passing--------
ngAfterViewInit(){
  this.valueofbook=this.selectedBookinfo;
  }
  // child to parent function call------
  @Output() bookadded=new EventEmitter();
  @Output() countbook=new EventEmitter();
  addBook(){
      this.bookadded.emit(this.valueofbook);
  }

}
