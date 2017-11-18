import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { AddComponent } from './add.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../../shared/services/auth.service';
import { StorageService } from '../../shared/services/storage.service';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'ng2-toastr/src/toast.module';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { ToastOptions } from 'ng2-toastr/src/toast-options';
import { UsersService } from '../users.service';
import { APP_BASE_HREF } from '@angular/common';
import { UsersRoutingModule } from '../users-routing.module';
import { UsersModule } from '../users.module';
import { AppModule } from '../../app.module';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ToastModule,
        UsersModule,
        HttpClientModule
      ],
      declarations: [
      ],
      providers: [
        StorageService,
        ToastsManager,
        ToastOptions
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the AddComponent', () => {
    expect(component).toBeTruthy();
  });
  it('', inject([ UsersService], (usersService:UsersService) => {
    spyOn(usersService,'create');
    component.createForm.value.name = "any";
    component.createForm.value.job = "any";
    component.submit()
    expect(usersService.create).toHaveBeenCalled();

  })
  );
});
