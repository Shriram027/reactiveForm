import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerDetailRoutingModule } from './customer-detail-routing.module';
import { CustomerDetailComponent } from './customer-detail.component';
import { PopupComponent } from './popup/popup.component';


@NgModule({
  declarations: [
    CustomerDetailComponent,
    PopupComponent
  ],
  imports: [
    CommonModule,
    CustomerDetailRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomerDetailModule { }
