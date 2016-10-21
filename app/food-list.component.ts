import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  calorieOption: string = "all";
  totalCalories: number;
  averageCalories: number;

  constructor(
    private foodService: FoodService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getFoods();

  }

  getFoods(): void {
    this.foodService.all().then(foods => {
      if(foods.length > 0) {
        this.foods = foods;
        this.totalCalories = this.getTotalCalories(foods);
        this.averageCalories = this.getAverageCalories(foods);
      } else {
        this.foods = [];
      }
    });
  }

  getTotalCalories(foods: Food[]): number {
    var total: number = 0;
    for(var food of foods) {
      total += food.calories;
    }
    return total;
  }

  getAverageCalories(foods: Food[]): number {
    return this.getTotalCalories(foods) / foods.length || 0 ;
  }

  gotoEdit(id: number): void {
    this.router.navigate(['/foods/edit/', id]);
  }

  onCalorieChange(option: string): void {
    this.calorieOption = option;
  }

}
