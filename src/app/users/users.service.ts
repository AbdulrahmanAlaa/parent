import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from './../../config/routs-config';
import 'rxjs/add/operator/map';
import { User } from '../shared/models/user.model';
import { StorageService } from '../shared/services/storage.service';
import { IPage } from '../shared/models/page.interface';

@Injectable()
export class UsersService {

  constructor(
    private StorageService:StorageService,
    private http: HttpClient) { }
  /**
   * Get All users From Api  
   * @param page 
   */
  getUsers(page: number,per_page:number = 9) {
    return this.http.get(API_URLS.USERS.LIST(page,per_page)).map((page:IPage ) => {
      return page;
    });
  }
  /**
   * Get Single user by id From Api    
   * @param page Page number To lazy load data 
   */
  getUser(id: number) {
    return this.http.get(API_URLS.USERS.SINGLE(id)).map((response:any) => {
      return response.data;
    });
  }
  /**
   * Delete User from by knowing the user id
   * @param id user id number to be deleted
   */
  deleteUser(id: number) {
    return this.http.delete(API_URLS.USERS.DELETE(id)).map((user) => {
      console.log(user);
      return user;
    });
  }
  /**
   * Update user data 
   * @param user User Object 
   */
  updateUser(user:User){
   return this.http.put(API_URLS.USERS.EDIT(user.id),user);
  }
  /**
   * Create User 
   */
  create(user:User){
    return this.http.post(API_URLS.USERS.ADD,user);
  }
}
