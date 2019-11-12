import React from 'react';
import { Link} from 'react-router-dom';




const Meal = ({mealName, mealImg,id}) => {
	// console.log(category);
	return(
		<div className="singleMeal">
			<Link to={`/meal/${id}`}>
			<img style={{"width":"100%", "height":"80%"}} src={mealImg} alt={mealName}/>
			
			<h1 style={{"margin":"0", "textAlign": "center", "fontSize":"15px"}}>{mealName}</h1>
			</Link>
		</div>
	)
}


export default Meal;