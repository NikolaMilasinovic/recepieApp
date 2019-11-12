import React from 'react';
import { Link} from 'react-router-dom';

// import {

//   Link,
//   withRouter
// } from "react-router-dom";



const RandomMeal = ({MealImg, MealCategory,MealCountry,MealName,id,forceUpdate}) => {
	return(
		<div>
			<Link onClick={() => forceUpdate(id)}  to={`/meal/${id}`}>
			<img style={{"width":"100%" , "height":"60%"}} src={MealImg} alt={MealName}/>
			<p>{MealName}</p>
			</Link>
			<p>Category: {MealCategory}</p>
			<p>Country: {MealCountry}</p>
		
			
		
		</div>
	)
}


export default RandomMeal;