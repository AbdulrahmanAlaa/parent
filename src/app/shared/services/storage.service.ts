import { Injectable } from '@angular/core';
@Injectable()
export class StorageService {
  /** holds the current logged in user tokens */
  Token:string=null;
  constructor() {
    
  }
}
