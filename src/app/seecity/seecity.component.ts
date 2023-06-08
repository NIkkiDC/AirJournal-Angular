import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-city',
  templateUrl: './seecity.component.html',
  styleUrls: ['./seecity.component.css'],
})
export class SeecityComponent implements OnInit {
  city: any;
  description!: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(`http://localhost:8080/api/city`)
      .subscribe((response) => {
        console.log(response);
        this.city = response; // holding the data // needs to be binded to the HTML file
      });
  }
}