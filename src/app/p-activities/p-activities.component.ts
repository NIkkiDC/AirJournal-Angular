import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-p-activities',
  templateUrl: './p-activities.component.html',
  styleUrls: ['./p-activities.component.css'],
})
export class PActivitiesComponent implements OnInit {
  
  
  count: any = 5;
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
  

