import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../../shared/models/user.model';
import { IPage } from '../../shared/models/page.interface';

@Component({
  selector: 'parent-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  pageNo: number = 1;
  users: Array<User> = [];
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers(this.pageNo).subscribe((page:IPage) => {
      this.users = page.data;
    });
  }

}
