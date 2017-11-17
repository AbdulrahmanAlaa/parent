/** Built-in Modules */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
//Rxjs
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/takeUntil';

/** Configurations */
import { DEFINES } from '../../config/defines';
import { config } from '../../config/pages-config';

/** Services */
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'parent-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<AuthService> = new Subject();
  
  loginForm: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  ngOnInit() {
  }
  submit() {
    if (this.loginForm.valid) {
      this.auth.authenticate(this.loginForm.value.email, this.loginForm.value.password, this.loginForm.value.rememberMe)
      .takeUntil(this.ngUnsubscribe)  
      .subscribe((token) => {
          this.router.navigate([config.users.name]);
        }, (error) => {
          return error;
        });

    }
  }
  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
