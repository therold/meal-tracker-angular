import { Injectable } from '@angular/core';

import { Food } from './models/food';

@Injectable()
export class FoodService {

  private foods: Food[] = [
    new Food(1, "Fries", "I only ate half of them.", 365),
    new Food(2, "Hamburger", "Didn't get a soda or cheese on my burger!", 354)
  ]

  all(): Promise<Food[]> {
    return Promise.resolve(this.foods);
  }

}
