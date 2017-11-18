import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastModule, ToastsManager, ToastOptions } from 'ng2-toastr';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from '../users.module';
import { StorageService } from '../../shared/services/storage.service';
import { UsersService } from '../users.service';
import { User } from '../../shared/models/user.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        ToastModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        ListComponent
      ],
      providers: [
        //   {
        //     provide: UsersService,
        //     useClass:Users
        //   },
        UsersService,
        StorageService,
        ToastsManager,
        ToastOptions
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create List Component', () => {
    expect(component).toBeTruthy();
  });

  it('should delete User',
    inject([UsersService], (usersService: UsersService) => {
      // // spyOn(usersService, 'deleteUser');
      // const fixture = TestBed.createComponent(ListComponent);
      // const app = fixture.debugElement.componentInstance;
      
      spyOn(component, 'delete');
      let user: User = { id: 1, first_name: 'any', last_name: 'any', avatar: '', job: '' };
      // console.log(component.delete)
      component.delete(user);
      fixture.whenStable().then(()=>{
        expect(component.delete).toHaveBeenCalled();
      });
    })
  );

});
