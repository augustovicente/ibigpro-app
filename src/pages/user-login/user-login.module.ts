import { NgModule } from '@angular/core';
import { IonicPageModule  } from 'ionic-angular';
import { LoginPage } from './user-login';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule .forChild(LoginPage),
  ],
  exports: [
    LoginPage
  ]
})
export class UserLoginModule {
}
