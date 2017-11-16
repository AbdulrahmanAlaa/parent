import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationGuard } from './authentication.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[AuthenticationGuard],
  declarations: []
})
export class SharedModule { }
