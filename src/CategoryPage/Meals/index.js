import React from 'react';
import Meal from './meal';
import './index.css'



const Meals = ({meals}) => {
	// console.log(meals);
	return(
		<div className="meallist">
		 	{
		        meals.map(meal => {
		          return (
		            <Meal
		              key={meal.idMeal}
		              id={meal.idMeal}
		              mealName={meal.strMeal}
		              mealImg={meal.strMealThumb}
		              />
		          );
		        })
		    }
		</div>
	)
}


export default Meals;