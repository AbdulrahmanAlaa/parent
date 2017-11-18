import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleComponent } from './single.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastOptions } from 'ng2-toastr/src/toast-options';
import { ToastsManager } from 'ng2-toastr';
import { ToastModule } from 'ng2-toastr/src/toast.module';
import { UsersService } from '../users.service';
import { StorageService } from '../../shared/services/storage.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

describe('SingleComponent', () => {
  let component: SingleComponent;
  let fixture: ComponentFixture<SingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SingleComponent,
      ],
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        StorageService,
        ToastsManager,
        ToastOptions,
        UsersService,
        HttpClient
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
