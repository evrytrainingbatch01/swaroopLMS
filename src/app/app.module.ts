import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookInformationsComponent } from './book-informations/book-informations.component';
import { FooterComponent } from './footer/footer.component';
//import { ServiceComponent } from './service/service.component';
import {BookListService} from './book-list.service';
import {BookInfoService} from './book-info.service';
import { BackgroundHighlighterDirective } from './background-highlighter.directive';
import { HighlightheaderDirective } from './highlightheader.directive';
import { MouseOverDirective } from './mouse-over.directive';

@NgModule({
  declarations: [
    AppComponent,
    BookDetailsComponent,
    BookInformationsComponent,
    FooterComponent,
    //ServiceComponent,
    BackgroundHighlighterDirective,
    HighlightheaderDirective,
    MouseOverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BookListService,BookInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
