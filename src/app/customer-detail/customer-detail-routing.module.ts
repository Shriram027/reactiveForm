import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailComponent } from './customer-detail.component';
import { PopupComponent } from './popup/popup.component';

const routes: Routes = [
{path:"",component:CustomerDetailComponent},
{path:"update",component:PopupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerDetailRoutingModule { }
