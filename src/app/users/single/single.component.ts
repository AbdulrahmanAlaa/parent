import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';
import { UsersService } from '../users.service';

@Component({
  selector: 'parent-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {
  id: number;
  user;
  constructor(
    private router: Router,
    public toastr: ToastsManager,
    private vcr: ViewContainerRef,
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.usersService.getUser(this.id).subscribe(user => {
        this.user = user;
      });
    });
  }

  ngOnInit() {
  }

}
