import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const ROUTES: Routes = [
  { path: 'user', component: UserProfileComponent },
  { path: '', component: UserProfileComponent },
  { path: 'signup', component: SignUpComponent },
];

export { ROUTES };
