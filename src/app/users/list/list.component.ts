import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { UsersService } from '../users.service';
import { User } from '../../shared/models/user.model';
import { IPage } from '../../shared/models/page.interface';
//3Rd party's
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Router } from '@angular/router';
import { config } from '../../../config/pages-config';

@Component({
  selector: 'parent-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  pageNo: number = 1;
  users: Array<User> = [];
  constructor(
    private router: Router,
    private usersService: UsersService,
    public toastr: ToastsManager,
    private vcr: ViewContainerRef
  ) {
    /** holds the needed html to show the toaster */
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.usersService.getUsers(this.pageNo).subscribe((page: IPage) => {
      this.users = page.data;
      this.toastr.success('Loaded users successfully...');
    }, (error) => {
      this.toastr.error("Something went wrong! </br> Try agin later", "", { enableHTML: true });
    });
  }

  /**
   * Determine the scroll of page to load more items 
   */
  onScroll() {
    if (Math.ceil(window.innerHeight + window.scrollY) == Math.ceil(document.body.offsetHeight)) {
      this.loadTenItems();
    }
  }

  /**
 * Loading 9 videos from server each time user scrolls
 */
  loadTenItems() {
    this.usersService.getUsers(++this.pageNo).subscribe((page: IPage) => {
      this.users.push(...page.data);
      if (page.data.length > 0) {
        this.toastr.success('Loaded users successfully...');

      } else {
        this.toastr.warning('All data loaded!');

      }
    }, (error) => {
      this.toastr.error("Something went wrong! </br> Try agin later", "", { enableHTML: true });
    });
  }

  /**
   *  Delete selected user from api 
   * @param user User Object
   */
  delete(user: User) {
    let index = this.users.indexOf(user);
    this.usersService.deleteUser(user.id).subscribe((res) => {
      this.toastr.success(`${user.first_name} ${user.last_name} deleted Successfully`);
      this.users.splice(index, 1);
    });
  }

  /**
   * Modifies the user data 
   * @param user User Object
   */
  edit(user: User) {
    this.router.navigate([config.users.route + `/edit/${user.id}`]);
  }

  /**
   * 
   * @param user Show Detailed Info for specific User
   */
  view(user: User) {
    this.router.navigate([config.users.name + `/${user.id}`])
  }

}
