import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from '../../../config/routs-config';
import 'rxjs/add/operator/map';
import { DEFINES } from '../../../config/defines';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';
import {config} from './../../../config/pages-config'
@Injectable()
export class AuthService {

  constructor(
    private router:Router,
    private storageService: StorageService, private http: HttpClient) { }
  
    /**
     * Check If The User Logged in Or Not
     */
    isAuthenticated() {
    sessionStorage.getItem(DEFINES.TOKEN);
    return (this.storageService.Token || sessionStorage.getItem(DEFINES.TOKEN)|| localStorage.getItem(DEFINES.TOKEN)) ? true : false;
  }

  /**
   * Clear User Sessions and LogOut 
   */
  logout(){
    this.storageService.Token = null;
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate[config.login.name]
  }

  /**
   * Check the user validity against the api to authenticate the User 
   * @param email string 
   * @param password string
   * @param rememberMe boolean indicates to save the user after browser closes
   */
  authenticate(email: string, password: string, rememberMe: boolean) {
    return this.http.post(API_URLS.LOGIN, { email, password }).map((response: { token: string }) => {
      if (response) {
        if (rememberMe) {
          localStorage.setItem(DEFINES.TOKEN,response.token);
        }
        sessionStorage.setItem(DEFINES.TOKEN, response.token);
        this.storageService.Token = response.token;
      }
      return response;
    });
  }
}
