import { Injectable } from '@angular/core';
// import { Post } from '../interface/post';
import { Users } from '../interface/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: Users[] = [
    {
      id: 1,
      email: 'Mauro@epic.it',
      ruolo: 'admin',
      autore: 'Mauro',
    },
    {
      id: 2,
      email: 'Kevin@epic.it',
      ruolo: 'user',
      autore: 'Kevin',
    },
    {
      id: 3,
      email: 'Alfredo@epic.it',
      ruolo: 'user',
      autore: 'Alfredo',
    },
    {
      id: 4,
      email: 'Giovanni@epic.it',
      ruolo: 'user',
      autore: 'Giovanni',
    },
  ];
  constructor() {}

  // metodo get users per recuperare tutti gli users
  getUsers() {
    return this.users;
  }
  // metodo per recuperare un singolo user per id
  getUser(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
