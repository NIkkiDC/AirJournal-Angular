import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PActivitiesComponent } from './p-activities/p-activities.component';
import { FaqsComponent } from './faqs/faqs.component';
import { CityComponent } from './city/city.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'p-activities', component: PActivitiesComponent },
  { path: 'faqs', component: FaqsComponent },
  {path: 'city', component: CityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
