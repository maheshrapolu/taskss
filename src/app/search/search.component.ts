import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText;
  heroes = [
    { id: 1, name: 'Mr. sai', country: 'India' },
    { id: 2, name: 'mahesh' , country: 'USA'},
    { id: 3, name: 'akram' , country: 'UK'},
    { id: 4, name: 'aditya' , country: 'Canada' },
    { id: 5, name: 'nagaraju' , country: 'Russia'},
    { id: 6, name: 'panideneer' , country: 'China'},
    { id: 7, name: 'swathi' , country: 'Germany'},
    { id: 8, name: 'sirisha' , country: 'Hong Kong'},
    { id: 9, name: 'Magma' , country: 'South Africa'},
    { id: 10, name: 'Tornado' , country: 'Sri Lanka'},
    { id: 11, name: 'Mr. Nice', country: 'India' },
    { id: 12, name: 'Narco' , country: 'USA'},
    { id: 13, name: 'Bombasto' , country: 'UK'},
    { id: 14, name: 'Celeritas' , country: 'Canada' },
    { id: 15, name: 'Magneta' , country: 'Russia'},
    { id: 16, name: 'RubberMan' , country: 'China'},
    { id: 17, name: 'Dynama' , country: 'Germany'},
    { id: 18, name: 'Dr IQ' , country: 'Hong Kong'},
    { id: 19, name: 'Magma' , country: 'South Africa'},
    { id: 20, name: 'Tornado' , country: 'Sri Lanka'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
