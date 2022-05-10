import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interface/users';
import { UsersService } from 'src/app/service/users.service';

@Component({
  template: `
    <ul class="list-group">
      <li
        class="list-group-item"
        *ngFor="let user of users"
        [routerLink]="['/autori', user.id]"
      >
        {{ user.autore | titlecase }}
      </li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AutoriPage implements OnInit {
  users!: Users[];
  constructor(private userSrv: UsersService) {
    this.users = this.userSrv.getUsers();
  }

  ngOnInit(): void {}
}
