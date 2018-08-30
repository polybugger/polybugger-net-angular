import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent }
  , { path: 'sign-in', component: SignInComponent }
  , { path: 'register', component: RegisterComponent }
  , { path: '', redirectTo: '/welcome', pathMatch: 'full' }
  , { path: '**', redirectTo: '/welcome' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
