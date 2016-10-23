import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DayInfo } from './dayInfo.model';
import { Food } from './food.model';
import { FoodService } from './food.service';
import { CaloriesPipe } from './calories.pipe'

@Component({
  moduleId: module.id,
  selector: 'food-list',
  templateUrl: 'views/food-list.html'
})

export class FoodListComponent implements OnInit {
  foods: Food[];
  today: Date = new Date();
  yesterday: Date = new Date();
  dayInfos: DayInfo[] = [];
  calorieOption: string = "all";


  constructor(
    private foodService: FoodService,
    private router: Router
  ) {
    this.today.setHours(0,0,0,0);
    this.yesterday.setDate(this.today.getDate() - 1);
  }

  ngOnInit(): void {
    this.getInfoFromDb();
  }

  getInfoFromDb(): void {
    this.foodService.all().then(
      foods => {
        if(foods.length === 0) {
          this.foods = [];
        } else {
          this.foods = foods;
          this.setDayInfo(foods);
        }
      }
    );
  }

  setDayInfo(foods: Food[]): void {
    var datetimes: number[] = this.getUniqueDays(foods);
    datetimes.sort((a, b) => b - a);
    for (var datetime of datetimes) {
      this.foodService.findByDatetime(datetime).then(foods => {
        var date = new Date(foods[0].date);
        this.dayInfos.push(new DayInfo(date, foods));
      });
    }
  }

  getUniqueDays(foods: Food[]): number[] {
    var dates: number[] = [];
    for(var food of foods) {
      if(!dates.includes(food.date.getTime())) {
        dates.push(food.date.getTime());
      }
    }
    return dates;
  }

  gotoEdit(id: number): void {
    this.router.navigate(['/foods/edit/', id]);
  }

  onCalorieChange(option: string): void {
    this.calorieOption = option;
  }

}
