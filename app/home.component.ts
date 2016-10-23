import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DayInfo } from './dayInfo.model';
import { Food } from './food.model';
import { FoodService } from './food.service';
import { CaloriesPipe } from './calories.pipe'

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'views/home.html'
})

export class HomeComponent implements OnInit {
  loaded: boolean = false;
  today: Date = new Date();
  dayInfo: DayInfo;
  calorieOption: string = "all";


  constructor(
    private foodService: FoodService,
    private router: Router
  ) {
    this.today.setHours(0,0,0,0);
  }

  ngOnInit(): void {
    this.getInfoFromDb();
  }

  getInfoFromDb(): void {
    this.foodService.findByDatetime(this.today.getTime()).then(
      foods => {
        if(foods.length >= 0) {
          this.dayInfo = new DayInfo(this.today, foods);
        }
        this.loaded = true;
      }
    );
  }

  onCalorieChange(option: string): void {
    this.calorieOption = option;
  }

}
