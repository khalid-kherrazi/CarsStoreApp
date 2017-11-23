import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { GarageComponentComponent } from './garage-component/garage-component.component';
import { CarsComponentComponent } from './cars-component/cars-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import {RestApiService} from "./rest-api.service";
import {AuthenticationServiceService} from "./authentication-service.service";


@NgModule({
  declarations: [
    AppComponent,
    GarageComponentComponent,
    CarsComponentComponent,
    LoginComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    RestApiService,
    HttpClient,
    AuthenticationServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
