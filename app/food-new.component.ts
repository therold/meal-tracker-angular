import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Food } from './models/food';
import { FoodService } from './food.service';

@Component({
  moduleId: module.id,
  selector: 'food-new',
  templateUrl: 'views/food-new.html'
})

export class FoodNewComponent {

  constructor(
    private foodService: FoodService,
    private router: Router
  ) { }

  addFood(name: string, details: string, calories: number): void {
    this.foodService.add(name, calories, details);
  }

}
