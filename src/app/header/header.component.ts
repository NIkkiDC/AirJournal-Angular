import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CityComponent } from '../city/city.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  keyword: string = '';
  arrayOfActivities: any[] = [];
  // city = city;

}
