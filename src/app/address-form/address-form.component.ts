import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {

  data: any[] = [];

  addressForm: FormGroup = new FormGroup({
    locationId: new FormControl(''),
    locationName: new FormControl(''),
    StreetName: new FormControl(''),
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

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.addressForm = this.fb.group({
      locationId: ['', Validators.required],
      locationName: ['', Validators.required],
      StreetName: ['', Validators.required],
      CityName: ['', Validators.required],
      StateName: ['', Validators.required],
      CountryName: ['', Validators.required],
      PostalCode: ['', Validators.required],
      locationTitle: ['', Validators.required],
      locationContact: ['', Validators.required],
      country_code: ['', Validators.required],
      LocationNumber: ['', Validators.required],
      locationEmail: ['', Validators.required]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.addressForm.controls;
  }


  onSubmit() {
    this.submitted = true;
    if (this.addressForm.invalid) {
      return;
    }
    console.log(this.addressForm.value);
    this.data = JSON.parse(localStorage.getItem('table') || '[]');
    this.data.push(this.addressForm.value);
    localStorage.setItem("table", JSON.stringify(this.data));
    this.router.navigate(['/detail']);
  }

  onReset(): void {
    this.submitted = false;
    this.addressForm.reset();
  }


}