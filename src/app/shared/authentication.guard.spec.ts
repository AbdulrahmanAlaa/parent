import { TestBed, async, inject } from '@angular/core/testing';

import { AuthenticationGuard } from './authentication.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersModule } from '../users/users.module';
import { HttpClientModule } from '@angular/common/http';
import { StorageService } from './services/storage.service';
import { AuthService } from './services/auth.service';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
let next: ActivatedRouteSnapshot;
let state: RouterStateSnapshot;
describe('AuthenticationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StorageService,
        AuthService,
        AuthenticationGuard
      ],
      imports: [
        RouterTestingModule,
        UsersModule,
        HttpClientModule
      ],
    });
  });

  it('should initiate...', inject([AuthenticationGuard], (guard: AuthenticationGuard) => {
    expect(guard).toBeTruthy();
  }));
  it('should not pass', inject([AuthenticationGuard,AuthService], (guard: AuthenticationGuard,auth:AuthService) => {
    auth.logout();
    expect(guard.canActivate(null,null)).toBeFalsy();
  }));
});
