import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AddressFormModule } from './address-form/address-form.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerDetailModule } from './customer-detail/customer-detail.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AddressFormModule,
    CustomerDetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
