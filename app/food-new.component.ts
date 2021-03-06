import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Food } from './food.model';
import { FoodService } from './food.service';

@Component({
  moduleId: module.id,
  selector: 'food-new',
  templateUrl: 'views/food-new.html'
})

export class FoodNewComponent {
  today: Date = new Date();
  todayFormatted = this.today.toISOString().substr(0, 10);

  constructor(private foodService: FoodService, private router: Router) {
    this.today.setHours(0,0,0,0);
  }

  addFood(name: string, date: string, calories: string, details: string): void {
    var parsedDate: Date = new Date(date);
    parsedDate.setTime(parsedDate.getTime() + parsedDate.getTimezoneOffset()*60*1000);
    var parsedCalories: number = parseInt(calories);
    this.foodService.add(name, parsedDate, parsedCalories, details);
  }

}
