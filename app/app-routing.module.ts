import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { FoodListComponent } from './food-list.component';
import { FoodNewComponent } from './food-new.component';
import { FoodEditComponent } from './food-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'foods/all', component: FoodListComponent },
  { path: 'foods/new', component: FoodNewComponent },
  { path: 'foods/edit/:id', component: FoodEditComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
