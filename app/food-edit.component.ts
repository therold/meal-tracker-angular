import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Food } from './food.model';
import { FoodService } from './food.service';

@Component({
  moduleId: module.id,
  selector: 'food-edit',
  templateUrl: 'views/food-edit.html'
})

export class FoodEditComponent implements OnInit {
  @Input()
  food: Food;

  constructor(
    private foodService: FoodService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  updateFood(): void {
    this.foodService.update(this.food)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getFood();
  }

  getFood(): void {
    this.route.params.forEach((params: Params) => {
      let id = parseInt(params['id']);
      this.foodService.find(id)
        .then(food => this.food = food)
    })
  }



}
