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
  // cityId: number;
  // activities: any[];


  constructor(
    private route:ActivatedRoute,
    private http: HttpClient) { }
  

ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // this.cityId = parseInt(params.get('id') || '') ;
      this.loadActivities();
    });
  }

  loadActivities(): void {
    this.http.get<any[]>(`http://localhost:8080/api/cities/${this.cityId}/activities`);
        //   .subscribe(activities => { 
        // this.activities = activities;
        //       }, error => {
      //   console.error('Failed to load activities:', error);
      // });
  }
}
