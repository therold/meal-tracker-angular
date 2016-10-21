import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Food } from './food.model';

@Injectable()
export class FoodService {
  private url = 'app/foods';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  all(): Promise<Food[]> {
    return this.http.get(this.url)
     .toPromise()
     .then(response => response.json().data as Food[]);
  }

  find(id: number): Promise<Food> {
    return this.all()
      .then(foods => foods.find(food => food.id === id));
  }

  add(name: string, date: Date, calories: number, details: string): Promise<Food> {
    return this.http
      .post(this.url, JSON.stringify({name: name, date: date, calories: calories, details: details}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data);
  }

  update(food: Food): Promise<Food> {
    const updateUrl = `${this.url}/${food.id}`;
    return this.http
      .put(updateUrl, JSON.stringify(food), {headers: this.headers})
      .toPromise()
      .then(() => food);
  }

}
