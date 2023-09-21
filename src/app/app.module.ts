import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZipcodeMapComponent } from './zipcode-map/zipcode-map.component';
import { MapGeoComponent } from './map-geo/map-geo.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    UserFormComponent,
    ZipcodeMapComponent,
    MapGeoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule ,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
