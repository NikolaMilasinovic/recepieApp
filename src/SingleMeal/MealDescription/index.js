import React from 'react';
import Ingredient from './Ingredient'
import './MealDescription.css';




const MealDescription = ({Meal,Ingredients,Measures}) => {
	return(
		<div>
			<div className="description">
				<div className="image">
					<div><h3>{Meal.strMeal}</h3></div>
					<div><img  style={{"width":"100%", "height":"60%" }} src={Meal.strMealThumb} alt={Meal.strMeal}/></div>
				</div>
				<div className="instruction">
					<div>
						<h3>#{Meal.strArea} #{Meal.strCategory}</h3>
						<h3>Category: {Meal.strCategory}</h3>
						<h3>Video: <a href={Meal.strYoutube}>{Meal.strYoutube}</a></h3>
						<p style={{"marginTop":"40px" }}>{Meal.strInstructions}</p>
					</div>
				</div>
			</div>
			<div className='ingredients'>
				<div className='ingredient'>
		 			<p style={{"fontWeight": "bold"}}>Ingredient</p>

					{
						Ingredients.map((ingredient, i) => {
							return(
								<Ingredient 
									key={i}
									Ingredient={ingredient}
								/>
							)
						})
					}
				</div>
				<div className='measure'>
		 			<p style={{"fontWeight": "bold"}}>Measure</p>

					{
						Measures.map((measure, i) => {
							return(
								<Ingredient 
									key={i}
									Ingredient={measure}
								/>
							)
						})
					}
				</div>
			</div>
		</div>
	)
}


export default MealDescription;