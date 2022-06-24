import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheatsheetComponent } from './components/cheatsheet/cheatsheet.component';
import { EBooksComponent } from './components/e-books/e-books.component';
import { EventsComponent } from './components/events/events.component';
import { HomeComponent } from './components/home/home.component';
import { InterviewQAComponent } from './components/interview-qa/interview-qa.component';
import { LoginComponent } from './components/login/login.component';
import { NewsComponent } from './components/news/news.component';
import { QuizComponent } from './components/quiz/quiz.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cheatsheet', component: CheatsheetComponent },

  { path: 'ebooks', component: EBooksComponent },
  { path: 'interviewqa', component: InterviewQAComponent },
  { path: 'news', component: NewsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'quiz', component: QuizComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
