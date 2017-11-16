import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AddComponent } from './add/add.component';
import { UsersComponent } from './users.component';
import { ListComponent } from './list/list.component';
import { SingleComponent } from './single/single.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  declarations: [AddComponent, UsersComponent, ListComponent, SingleComponent, EditComponent, DeleteComponent]
})
export class UsersModule { }
