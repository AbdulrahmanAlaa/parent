import { TestBed, inject, tick, fakeAsync, async, flush } from '@angular/core/testing';

import {  AuthService } from './auth.service';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { Inject } from '@angular/core';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        StorageService,
        HttpClient
      ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
  it('should not show authenticated user', inject([AuthService], (service: AuthService) => {
    service.logout();
    expect(service.isAuthenticated()).toBeFalsy();
  }));
  it('should  authenticated the user',
    // async((done) => {
    inject([AuthService], (service: AuthService) => {
      service.authenticate("Example@yahoo.com", "password", true).subscribe(()=>{
        expect(service.isAuthenticated()).toBeTruthy();

      });
    })
    // })
  );
});
