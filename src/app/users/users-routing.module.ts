import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleComponent } from './single/single.component';
import { ListComponent } from './list/list.component';
import { DeleteComponent } from './delete/delete.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  
  {
    path:'',
    component:ListComponent
  },
  {
    path:'delete',
    component:DeleteComponent
  },
  {
    path:'add',
    component:AddComponent
  },
  {
    path:'edit/:id',
    component:EditComponent
  },
  {
    path: ':id',
    component:SingleComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
