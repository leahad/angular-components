import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthAdminGuard } from './core/auth.guard';
import { AuthLoginGuard } from './core/auth.guard';

const ROUTES: Routes = [
  { path: 'dashboard', component: UserProfileComponent, canActivate: [AuthLoginGuard]},
  { path: 'admin', component: UserProfileComponent, canActivate: [AuthAdminGuard] },
  { path: 'home', component: SignUpComponent },
];

export { ROUTES };
