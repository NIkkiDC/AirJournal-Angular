import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PActivitiesComponent } from './p-activities/p-activities.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'p-activities', component: PActivitiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
