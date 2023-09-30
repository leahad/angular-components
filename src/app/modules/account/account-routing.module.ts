import { NgModule } from '@angular/core';
import { RouterModule, Routes,ParamMap } from '@angular/router';
import { AccountComponent } from './components/feature/account.component';

const routes: Routes = [{ path: 'home/:id', component: AccountComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
