import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { SeecityComponent } from './seecity/seecity.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HpImgComponent } from './hp-img/hp-img.component';
import { PActivitiesComponent } from './p-activities/p-activities.component';
import { ShowActiComponent } from './show-acti/show-acti.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FaqsComponent } from './faqs/faqs.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    SeecityComponent,
    HeaderComponent,
    HomeComponent,
    HpImgComponent,
    PActivitiesComponent,
    ShowActiComponent,
    FaqsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
