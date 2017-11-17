import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule , FormsModule}from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import { AuthService } from './shared/services/auth.service';
import { StorageService } from './shared/services/storage.service';
import { AuthenticationGuard } from './shared/authentication.guard';
import {ToastModule} from 'ng2-toastr/ng2-toastr';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    StorageService,
    AuthService,
    AuthenticationGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
