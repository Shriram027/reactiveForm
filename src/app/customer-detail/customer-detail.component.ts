import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopService } from '../service/pop.service';
import { Customer } from './customer';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  data: any[] = [];
  selectedUser: any;
  constructor(private router: Router, public pops: PopService) { }

  ngOnInit(): void {
    this.add();
  }

  add() {
    this.data = JSON.parse(localStorage.getItem('table') || '[]');
  }

  remove(dt: number) {
    // let index = this.data.indexOf(dt);
    // console.log(index);
    window.confirm("Are you Sure ?");
    if (confirm() == true) {
      this.data.splice(dt, 1);
      localStorage.setItem('table', JSON.stringify(this.data));
    }
  }

  edit(dt: any) {
    this.pops.showpop = true;
    this.selectedUser = dt;

  }


  update(ev: any) {
    this.data = JSON.parse(localStorage.getItem('table') || '[]');
    for (let index = 0; index < this.data.length; index++) {
      if (this.data[index].locationId === ev.locationId) {
        this.data[index].locationName = ev?.locationName;;
        this.data[index].StreetName = ev?.StreetName;;
        this.data[index].CityName = ev?.CityName;;
        this.data[index].StateName = ev?.StateName;;
        this.data[index].CountryName = ev?.CountryName;;
        this.data[index].PostalCode = ev?.PostalCode;;
        this.data[index].locationTitle = ev?.locationTitle;;
        this.data[index].locationContact = ev?.locationContact;;
        this.data[index].country_code = ev?.country_code;;
        this.data[index].LocationNumber = ev?.LocationNumber;;
        this.data[index].locationEmail = ev?.locationEmail;;
        localStorage.setItem('table', JSON.stringify(this.data));
      }
      this.pops.showpop = false;
    }
    this.add();
    
  }
}

