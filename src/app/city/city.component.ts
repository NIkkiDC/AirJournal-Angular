import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PActivitiesComponent } from '../p-activities/p-activities.component';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
})
export class CityComponent implements OnInit {
  cityId: number = 1;
  activities!: any;


  constructor(
    private http: HttpClient) { }


ngOnInit(): void {

    this.http.get(`http://localhost:8080/api/activities/cityId`)
    .subscribe((response)=>{
      console.log(response)
      this.activities = response; // holding the data // needs to be binded to the HTML file
    });

}
}
