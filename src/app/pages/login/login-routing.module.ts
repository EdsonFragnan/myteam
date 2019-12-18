import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { LoginForgotPasswordComponent } from './login-forgot-password/login-forgot-password.component';
import { LoginVerifyEmailComponent } from './login-verify-email/login-verify-email.component';


const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'registrar', component:  LoginRegisterComponent },
  { path: 'esqueci-senha', component:  LoginForgotPasswordComponent },
  { path: 'verifica-email', component:  LoginVerifyEmailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
