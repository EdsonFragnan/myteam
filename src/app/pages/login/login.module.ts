import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';

import { LoginRegisterComponent } from './login-register/login-register.component';
import { LoginForgotPasswordComponent } from './login-forgot-password/login-forgot-password.component';
import { LoginVerifyEmailComponent } from './login-verify-email/login-verify-email.component';

@NgModule({
  declarations: [LoginFormComponent, LoginRegisterComponent, LoginForgotPasswordComponent, LoginVerifyEmailComponent],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
