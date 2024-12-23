import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AdminModule } from './modules/admin/admin.module';
import { ResetPasswordModule } from './modules/reset-password/reset-password.module';

export const routes: Routes = [
  {
    path: '', component: LandingPageComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup',
    loadChildren: () => import('./modules/signup/signup.module').then(m => m.SignupModule)
  },
  {
    path: 'student',
    loadChildren: () => import('./modules/student-page/student-page.module').then(m => m.StudentPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => AdminModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./modules/reset-password/reset-password.module').then(m => ResetPasswordModule)
  }
];
