import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Users } from '../interface/users';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-dettagli-autore',
  template: `
    <ng-container *ngIf="user !== undefined">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{{ user.autore }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ user.ruolo }}</h6>
          <p class="card-text">email: {{ user.email }}</p>
        </div>
      </div>
    </ng-container>
  `,
  styles: [],
})
export class DettagliAutoreComponent implements OnInit {
  user!: Users | undefined;
  sub!: Subscription;
  constructor(private router: ActivatedRoute, private userSrv: UsersService) {}

  ngOnInit(): void {
    this.sub = this.router.params.subscribe((params: Params) => {
      const id = +params['id'];
      this.user = this.userSrv.getUser(id);
    });
  }
}
