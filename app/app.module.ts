import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { FoodListComponent } from './food-list.component';
import { FoodNewComponent } from './food-new.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './in-memory-data.service';
import { FoodService } from './food.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    FoodListComponent,
    FoodNewComponent
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
