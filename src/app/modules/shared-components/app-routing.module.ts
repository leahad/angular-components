import { Routes } from '@angular/router';

const ROUTES: Routes = [
  { path: 'admin', loadChildren: () =>  import('../admin/admin.module').then(m  => m.AdminModule) },
  { path: 'account', loadChildren: () =>  import('../account/account.module').then(m  => m.AccountModule) },
];

export { ROUTES };
