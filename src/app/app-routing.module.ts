import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:"",
  loadChildren: () => import('./address-form/address-form.module').then(m => m.AddressFormModule)
},
{path:"detail",
loadChildren:()=> import('./customer-detail/customer-detail.module').then(m=> m.CustomerDetailModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
