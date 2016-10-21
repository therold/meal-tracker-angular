import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { FoodListComponent } from './food-list.component';

import { FoodService } from './food.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    FoodListComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    FoodService,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})

export class AppModule { }
