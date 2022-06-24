import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CheatsheetComponent } from './components/cheatsheet/cheatsheet.component';
import { EBooksComponent } from './components/e-books/e-books.component';
import { InterviewQAComponent } from './components/interview-qa/interview-qa.component';
import { NewsComponent } from './components/news/news.component';
import { EventsComponent } from './components/events/events.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ItemComponent } from './components/item/item.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { DocContentComponent } from './components/doc-content/doc-content.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CheatsheetComponent,
    EBooksComponent,
    InterviewQAComponent,
    NewsComponent,
    EventsComponent,
    QuizComponent,
    NavBarComponent,
    ItemComponent,
    DocContentComponent,
    SidePanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
