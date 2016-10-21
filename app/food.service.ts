import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Food } from './models/food';

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

  add(name: string, calories: number, details: string): Promise<Food> {
    return this.http
      .post(this.url, JSON.stringify({name: name, calories: calories, details: details}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data);
  }




}
