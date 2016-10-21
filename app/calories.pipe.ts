import { Pipe, PipeTransform } from '@angular/core';
import { Food } from './models/food';

@Pipe({
  name: "calories",
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Food[], option) {
    var output: Food[] = [];

    if (option === "low") {
      for (var i = 0; i < input.length; i++) {
        if(input[i].calories <= 500) {
          output.push(input[i]);
        }
      }
    } else if (option === "high") {
      for (var i = 0; i < input.length; i++) {
        if(input[i].calories >= 500) {
          output.push(input[i]);
        }
      }
    } else {
      output = input;
    }

    return output;
  }

}
