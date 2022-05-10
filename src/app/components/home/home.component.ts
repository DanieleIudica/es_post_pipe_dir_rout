import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `
    <h1><span appMark>Benvenuti</span> sulla Home Page</h1>
    <div class="mt-5 d-flex justify-content-around">
      <button class="btn btn-primary" (click)="postAttivi()">
        Vai ai Post Attivi
      </button>
      <button class="btn btn-primary" (click)="postInattivi()">
        Vai ai Post Inattivi
      </button>
    </div>
  `,
  styles: [],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  postAttivi() {
    this.router.navigate(['/post-attivi']); //function al click, che mi permette di navigare in 'post-attivi'
  }
  postInattivi() {
    this.router.navigate(['/post-inattivi']); //function al click, che mi permette di navigare in 'post-inattivi'
  }
}
