
# Meal Tracker

#### _An application to log a meal plan, and track calories consumed, 10/21/2016_

#### By _**Timothy Herold**_

## Description

_This application is designed to track a user's meal plan. This application will allow the log the meals they eat, and display the calories consumed._

## Setup/Installation Requirements

* Clone project from [github](https://github.com/therold/meal-tracker-angular.git):
  * git clone https://github.com/therold/meal-tracker-angular.git
  * cd meal-tracker-angular
* Install dependencies via npm and bower:
  * npm install
  * bower install
* Build and run the project:
  * gulp build
  * gulp serve
* Open the site in your favorite web browser:
  * [http://localhost:3000](http://localhost:3000)

## Objectives

* _The website should work as expected._
* _The application structured in a logical way, including:_
  * _A model._
  * _Multiple components._
  * _TypeScript._
* _The application should allow a user to create and edit new instances of a model._
* _The application should allow the user to view a list of foods._
* _The application should allow the user to filter foods based on their calories._
* _Dependencies should be managed with npm and bower._
* _The website should include a gulp-based asset pipeline with a development server._
* _The project should demonstrate concepts covered this week._
* _The website should be in a presentable, portfolio-quality state._

## Minimum Specification
* The program should accept and store a the name, calories and details of a food.
  * **Example Input**: _"Fries", "365 calories", "I only ate half."_
  * **Example Output**: _"Fries", "365 calories", "I only ate half."_
* The program should view a list of all foods logged.
  * **Example Input**: _["Fries", "Burger", "Salad", ...]_
  * **Example Output**: _["Fries", "Burger", "Salad", ...]_
* The program should be able to filter foods based on the calories consumed.
  * **Example Input**: _Show foods over 300 calories_
  * **Example Output**: _["Fries", "Burger", ...]_
* The program should be able to edit previously stored foods.
  * **Example Input**: _Set Fries to 100 calories_
  * **Example Output**: _"Fries", "365 calories", "I only ate half."_

## Technologies Used

* _HTML/CSS_
* _Javascript_
* _Typescript_
* _Angular_
* _npm_
* _bower_


### License

*GPL*

Copyright (c) 2016 **_Timothy Herold_**
