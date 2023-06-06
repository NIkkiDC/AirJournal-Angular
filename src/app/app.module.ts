import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { SeecityComponent } from './seecity/seecity.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HpImgComponent } from './hp-img/hp-img.component';
import { HpInfoComponent } from './hp-info/hp-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    SeecityComponent,
    HeaderComponent,
    HomeComponent,
    HpImgComponent,
    HpInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
