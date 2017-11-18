/** Built-in Modules */
import { Component, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
//Rxjs
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/takeUntil';
//3Rd party's
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

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
export class LoginComponent implements OnDestroy {
  private ngUnsubscribe: Subject<AuthService> = new Subject();

  loginForm: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    public toastr: ToastsManager,
    private vcr: ViewContainerRef
  ) {
    /** holds the needed html to show the toaster */
    this.toastr.setRootViewContainerRef(vcr);
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  /**
   * Authenticate the User Against the Api 
   */
  submit() {
    if (this.loginForm.valid) {
      this.auth.authenticate(this.loginForm.value.email, this.loginForm.value.password, this.loginForm.value.rememberMe)
        .takeUntil(this.ngUnsubscribe)
        .subscribe((token) => {
          this.toastr.success("logged in successfully");
          setTimeout(() => {
            this.router.navigate([config.users.name]);
          }, 1000)
        }, (error) => {
          this.toastr.error("Something went wrong! </br> Try agin later", "", { enableHTML: true });
          return error;
        });

    }
  }
  /**
   * Removing All the The Subscriptions When 
   * Destroying the Component
   */
  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
