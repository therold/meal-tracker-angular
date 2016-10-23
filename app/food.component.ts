import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { DayInfo } from './dayInfo.model';
import { Food } from './food.model';
import { FoodService } from './food.service';
import { CaloriesPipe } from './calories.pipe'

@Component({
  moduleId: module.id,
  selector: 'food-view',
  templateUrl: 'views/food.html'
})

export class FoodComponent {
  @Input() food: Food;

  constructor(private router: Router) { }

  gotoEdit(id: number): void {
    this.router.navigate(['/foods/edit/', id]);
  }

}
