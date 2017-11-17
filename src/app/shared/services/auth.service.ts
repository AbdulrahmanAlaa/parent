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
  isAuthenticated() {
    sessionStorage.getItem(DEFINES.TOKEN);
    return (this.storageService.Token || sessionStorage.getItem(DEFINES.TOKEN)|| localStorage.getItem(DEFINES.TOKEN)) ? true : false;
  }
  logout(){
    this.storageService.Token = null;
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate[config.login.name]
  }
  authenticate(email: string, password: string, rememberMe: boolean) {
    return this.http.post(API_URLS.LOGIN, { email, password }).map((response: { token: string }) => {
      console.log('token:', response.token);
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
