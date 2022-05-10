import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PostAttiviComponent } from './components/post-attivi/post-attivi.component';
import { PostInattiviComponent } from './components/post-inattivi/post-inattivi.component';
import { MarkDirective } from './module/mark.directive';
import { DettagliPage } from './components/dettagli.page';
import { AutoriPage } from './components/autori/autori.page';
import { DettagliAutoreComponent } from './components/dettagli-autore.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'post-attivi',
    component: PostAttiviComponent,
  },
  {
    path: 'post-inattivi',
    component: PostInattiviComponent,
  },
  {
    path: 'autori',
    component: AutoriPage,
    children: [
      {
        path: ':id',
        component: DettagliAutoreComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PostAttiviComponent,
    PostInattiviComponent,
    MarkDirective,
    DettagliPage,
    AutoriPage,
    DettagliAutoreComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
