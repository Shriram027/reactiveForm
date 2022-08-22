import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PopService } from 'src/app/service/pop.service';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Input() element: any;
  @Output() updatedElement:EventEmitter<any> =new EventEmitter<any>(); 


  addressForm: FormGroup = new FormGroup({
    locationId: new FormControl(''),
    locationName: new FormControl(''),
    StreetName: new FormControl(),
    CityName: new FormControl(''),
    StateName: new FormControl(''),
    CountryName: new FormControl(''),
    PostalCode: new FormControl(''),
    locationTitle: new FormControl(''),
    locationContact: new FormControl(''),
    country_code: new FormControl(''),
    LocationNumber: new FormControl(''),
    locationEmail: new FormControl('')

  });

  submitted: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, public pops: PopService) {
  }

  ngOnInit(): void {
    this.addressForm = this.fb.group({
      locationId: [this.element.locationId ? this.element.locationId : '', Validators.required],
      locationName: [this.element.locationName ? this.element.locationName : '', Validators.required],
      StreetName: [this.element.StreetName ? this.element.StreetName : '', Validators.required],
      CityName: [this.element.CityName ? this.element.CityName : '', Validators.required],
      StateName: [this.element.StateName ? this.element.StateName : '', Validators.required],
      CountryName: [this.element.CountryName ? this.element.CountryName : '', Validators.required],
      PostalCode: [this.element.PostalCode ? this.element.PostalCode : '', Validators.required],
      locationTitle: [this.element.locationTitle ? this.element.locationTitle : '', Validators.required],
      locationContact: [this.element.locationContact ? this.element.locationContact : '', Validators.required],
      country_code: [this.element.country_code ? this.element.country_code : '', Validators.required],
      LocationNumber: [this.element.LocationNumber ? this.element.LocationNumber : '', Validators.required],
      locationEmail: [this.element.locationEmail ? this.element.locationEmail : '', Validators.required]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.addressForm.controls;
  }


  update() {
    this.submitted = true;
    if (this.addressForm.invalid) {
      return;
    }
    this.updatedElement.emit(this.addressForm.value);
  }


  // onUpdate() {
  //   this.submitted = true;
  //   if (this.addressForm.invalid) {
  //     return;
  //   }
  //   console.log(this.addressForm.value);
  //   this.element = JSON.parse(localStorage.getItem('table') || '[]');
  //   this.element.find(this.addressForm.value);
  //   localStorage.setItem("table", JSON.stringify(this.element));
  //   this.router.navigate(['/detail']);
  // }

  onReset(): void {
    this.pops.showpop = false;
  }

}
