export class Customer {
    locationId?: string;
    locationName?: string;
    StreetName?: string;
    CityName?: string;
    StateName?: string;
    CountryName?: string;
    PostalCode?: string;
    locationTitle?: string;
    locationContact?: string;
    country_code?: string;
    LocationNumber?: string;
    locationEmail?: string;

    constructor(data?: any) {
        this.locationId = data.locationId;
        this.locationName = data.locationName;
        this.StreetName = data.StreetName;
        this.CityName = data.CityName;
        this.StateName = data.StateName;
        this.CountryName = data.CountryName;
        this.PostalCode = data.PostalCode;
        this.locationTitle = data.locationTitle;
        this.locationContact = data.locationContact;
        this.country_code = data.country_code;
        this.LocationNumber = data.LocationNumber;
        this.locationEmail = data.locationEmail;
    }
}





