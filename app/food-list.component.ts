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

  constructor(
    private foodService: FoodService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getFoods();
  }

  getFoods(): void {
    this.foodService.all().then(foods => this.foods = foods);
  }

  gotoEdit(id: number): void {
    this.router.navigate(['/foods/edit/', id]);
  }

  onCalorieChange(option: string): void {
    this.calorieOption = option;
  }

}
