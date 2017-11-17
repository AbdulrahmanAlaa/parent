import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'parent-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
pageNo : number = 1;
  constructor(private usersService:UsersService ) { }

  ngOnInit() {
    this.usersService.getUsers(this.pageNo).subscribe(users=>{
      console.log('inside subscription');
    });
  }

}
