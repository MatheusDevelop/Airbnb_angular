import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor() {}

  AllAdressesOfResponse: any = [
    { country: 'Brazil', city: 'São paulo' },
    { city: 'City xyz' },
  ];

  Checkin: String;
  Checkout: String;

  AdressCityForSearch: String = '';
  AdressCitySearchedView: String = '';

  ngOnInit(): void {}

  searchingAdress(value: String) {
    this.AdressCitySearchedView = '';
    this.AdressCityForSearch = value;

    if (value.length > 1) {
      let index = this.AllAdressesOfResponse.findIndex(
        (e: { city: string }) =>
          this.especialCharMask(e.city.substring(0, value.length)) ==
          this.especialCharMask(value)
      );
      this.AdressCitySearchedView = `${this.AllAdressesOfResponse[index].city}, ${this.AllAdressesOfResponse[index].country}`;
    } else {
      this.AdressCitySearchedView = '';
    }
  }


  handleReservationRequest() {
    console.log(this.Checkin);
    console.log(this.Checkout);
  }
  especialCharMask(s) {
    var map = {
      â: 'a',
      Â: 'A',
      à: 'a',
      À: 'A',
      á: 'a',
      Á: 'A',
      ã: 'a',
      Ã: 'A',
      ê: 'e',
      Ê: 'E',
      è: 'e',
      È: 'E',
      é: 'e',
      É: 'E',
      î: 'i',
      Î: 'I',
      ì: 'i',
      Ì: 'I',
      í: 'i',
      Í: 'I',
      õ: 'o',
      Õ: 'O',
      ô: 'o',
      Ô: 'O',
      ò: 'o',
      Ò: 'O',
      ó: 'o',
      Ó: 'O',
      ü: 'u',
      Ü: 'U',
      û: 'u',
      Û: 'U',
      ú: 'u',
      Ú: 'U',
      ù: 'u',
      Ù: 'U',
      ç: 'c',
      Ç: 'C',
    };

    return s
      .replace(/[\W\[\] ]/g, function (a) {
        return map[a] || a;
      })
      .toLowerCase();
  }
}
