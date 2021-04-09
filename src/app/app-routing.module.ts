import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValueDetailsComponent } from './value-details/value-details.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { DashboardComponent } from './dashboard/dashboard.component'

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'value', component: ValueDetailsComponent },
  { path: 'account', component: AccountDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
