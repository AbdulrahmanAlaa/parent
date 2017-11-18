import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { EditComponent } from './edit.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastModule, ToastsManager, ToastOptions } from 'ng2-toastr';
import { UsersModule } from '../users.module';
import { HttpClientModule } from '@angular/common/http';
import { StorageService } from '../../shared/services/storage.service';
import { UsersService } from '../users.service';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { User } from '../../shared/models/user.model';
import 'rxjs/add/observable/of';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
class Users {
  getUser(id): Observable<User> | void{

  }
  updateUser(user): Observable<User> | void{}
}
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ToastModule,
        UsersModule,
        HttpClientModule,
        // FormsModule,
        // ReactiveFormsModule
      ],
      declarations: [
        // EditComponent
      ],
      providers: [
      //   {
      //     provide: UsersService,
      //     useClass:Users
      //   },
        // UsersService,
        StorageService,
        ToastsManager,
        ToastOptions
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('shaould update the user ', inject([ UsersService], (usersService:UsersService) => {
    spyOn(usersService,'updateUser').and.returnValue(Observable.of({id:1,avatar:'',first_name:'Fname',last_name:'Lname',job:'job'} as  User));
    console.log(component)
    component.id = 1;
    component.editForm = new FormBuilder().group({
      name: ['any', Validators.required],
      job: ['any', Validators.required]
    });;
    component.submit()
    expect(usersService.updateUser).toHaveBeenCalled();

  }))
});
