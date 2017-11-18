import { async, ComponentFixture, TestBed, inject, tick, fakeAsync } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../app.component';
import { AuthService } from '../shared/services/auth.service';
import { StorageService } from '../shared/services/storage.service';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'ng2-toastr/src/toast.module';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { ToastOptions } from 'ng2-toastr/src/toast-options';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        ToastModule
      ],
      declarations: [
        AppComponent,
        LoginComponent
      ],
      providers: [
        ToastsManager,
        ToastOptions,
        AuthService,
        StorageService,
        {
          provide: Router,
          useClass: class { navigate = jasmine.createSpy('navigate'); }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create loginComponent', () => {
    expect(component).toBeTruthy();
  });
  it('should log the user in', inject([StorageService],(storageService:StorageService)=>{
    fakeAsync(()=>{
      component.loginForm.value.email = "example@yahoo.com";
      component.loginForm.value.password = "321654";
      component.submit();  
      tick(1000);
      expect(storageService.Token).not.toBeNull();
    });
  }));
});
