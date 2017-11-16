import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as pages from './../config/pages-config';
import { config } from './../config/pages-config';
import { AuthenticationGuard } from './shared/authentication.guard';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {
    path: '',
    redirectTo:pages.config.users.name,
    pathMatch: 'full'
  },
  {
    path: config.users.name,
    loadChildren: config.users.loadChildren,
    canActivate: [AuthenticationGuard]
  },
  {
    path:config.login.name,
    component:LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
