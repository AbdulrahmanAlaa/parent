import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';
import { User } from '../../shared/models/user.model';
import { ToastsManager } from 'ng2-toastr';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { config } from '../../../config/pages-config';

@Component({
  selector: 'parent-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  editForm: FormGroup;
  private id;
  image:string;
  constructor(
    private router:Router,
    public toastr: ToastsManager,
    private vcr: ViewContainerRef,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService
  ) {
    this.toastr.setRootViewContainerRef(vcr);
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.editForm = fb.group({
        name: ['', Validators.required],
        job: ['', Validators.required]
      });
      this.usersService.getUser(this.id).subscribe((user: User) => {
        
        this.image = user.avatar;
        this.editForm = fb.group({
          name: [`${user.first_name} ${user.last_name}`, Validators.required],
          job: ['', Validators.required]
        });
      });
    });
  }

  ngOnInit() {
  }
  submit() {
    if (this.editForm.valid) {
      let user = {
        id: this.id,
        first_name: this.editForm.value.name,
        job: this.editForm.value.name
      } as User;

      this.usersService.updateUser(user).subscribe(user => {
        this.toastr.success(`${this.editForm.value.name} Updated Successfully`);
        setTimeout(() => {
          this.router.navigate([config.users.name]);
        }, 1000);
      })
    }
  }
}
