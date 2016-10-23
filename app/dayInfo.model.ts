import { Food } from './food.model';

export class DayInfo {

  constructor(public date: Date, public foods: Food[]) { }

  getTotalCalories(): number {
    var total: number = 0;
    for(var food of this.foods) {
      total += food.calories;
    }
    return total;
  }

  getAverageCalories(): number {
    return this.getTotalCalories() / this.foods.length || 0 ;
  }
}
