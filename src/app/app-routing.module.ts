import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PActivitiesComponent } from './p-activities/p-activities.component';

const routes: Routes = [
  { path: 'p-activities', component: PActivitiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
