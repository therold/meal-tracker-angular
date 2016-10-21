import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Food } from './models/food';
import { FoodService } from './food.service';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'views/home.html'
})

export class HomeComponent implements OnInit {

  constructor(
    private foodService: FoodService,
    private router: Router
  ) { }

  foods: Food[];

  getFoods(): void {
    this.foodService.all().then(foods => this.foods = foods);
  }

  ngOnInit(): void {
    this.getFoods();
  }

}
