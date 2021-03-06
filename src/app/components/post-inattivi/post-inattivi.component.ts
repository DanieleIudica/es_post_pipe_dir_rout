import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interface/post';
import { recuperaPost, unioneElem } from 'src/app/service/post.service';
import { CategorieService } from 'src/app/service/categorie.service';

@Component({
  selector: 'app-post-inattivi',
  template: ` <div class="container mt-5">
    <div *ngFor="let post of posts">
      <div
        *ngIf="!post.attivo"
        class="card mb-4"
        [ngClass]="catSrv.coloreCategoria(post)"
      >
        <h5 class="card-header"><span appMark>Post</span> Inattivo</h5>
        <div class="card-body">
          <h5 class="card-title">
            <!-- inserisco pipe per uppercase -->
            Post Numero {{ post.id }} - {{ post.titolo | uppercase }}
          </h5>
          <p class="card-text">{{ post.body }}</p>
          <button class="btn btn-secondary m-3" (click)="catSrv.status(post)">
            Attiva
          </button>
          <button class="btn btn-secondary">Dettagli</button>
        </div>
      </div>
    </div>
  </div>`,
  styles: [],
})
export class PostInattiviComponent implements OnInit {
  posts!: Post[]; //dichiariamo l'array che conterrĂ  il nostro JSON con i post
  constructor(public catSrv: CategorieService) {
    /*  recuperaPost().then((posts) => {
      this.posts = posts;
    }); */

    unioneElem().then((post) => {
      this.posts = post;
    });
  }

  ngOnInit(): void {}
}
