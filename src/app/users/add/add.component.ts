import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsersService } from '../users.service';
//3Rd party's
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Router } from '@angular/router';
import { config } from '../../../config/pages-config';
@Component({
  selector: 'parent-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  public createForm: FormGroup
  constructor(
    private router:Router,
    public toastr: ToastsManager,
    private vcr: ViewContainerRef,
    private fb: FormBuilder,
    private usersService: UsersService
  ) {
    this.toastr.setRootViewContainerRef(vcr);
    this.createForm = fb.group({
      name: ['', Validators.required],
      job: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  submit() {
    if (this.createForm.valid) {
      this.usersService.create(this.createForm.value).subscribe((user) => {
        this.toastr.success(`${this.createForm.value.name} Created Successfully`);
        setTimeout(() => {
          this.router.navigate([config.users.name]);
        }, 1000);
      });
    }
  }

}
