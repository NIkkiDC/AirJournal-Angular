import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
})
export class CityComponent {


  constructor(private http: HttpClient) { }
  
  getAllCities(){
    return this.http
      .get(`http://localhost:8080/api/city`)
      .subscribe((response) => {
        console.log(response);
      });
  }

ngOnInit(): void {
    this.getAllCities();

  }



}
