import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }
  getUsers(page: number) {
    return this.http.get()
 
  }
}
