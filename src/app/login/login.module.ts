import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { loginRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    SharedModule,
    loginRoutingModule
  ],
  declarations: [
    LoginComponent, 
    RegisterComponent
  ]
})
export class LoginModule { }
