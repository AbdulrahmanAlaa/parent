import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from './../../config/routs-config';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }
  getUsers(page: number) {
    return this.http.get(API_URLS.USERS.LIST(page)).map((users) => {
      console.log(users);
    });
  }
  getUser(id: number) {
    return this.http.get(API_URLS.USERS.SINGLE(id)).map((user) => {
      console.log(user);
    })
  }
}
