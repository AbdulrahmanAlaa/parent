import { TestBed, inject } from '@angular/core/testing';

import { UsersService } from './users.service';
import { StorageService } from '../shared/services/storage.service';
import {HttpClientModule, HttpClient } from '@angular/common/http';

describe('UsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersService,
        StorageService,
        HttpClient
      ],
      imports:[
        HttpClientModule
      ]
    });
  });

  it('should be created', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));
});
