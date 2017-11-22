import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GarageComponentComponent } from './garage-component/garage-component.component';
import { CarsComponentComponent } from './cars-component/cars-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';


@NgModule({
  declarations: [
    AppComponent,
    GarageComponentComponent,
    CarsComponentComponent,
    LoginComponentComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
