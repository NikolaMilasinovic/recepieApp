import React, {Component} from 'react';
import RandomMeal from './RandomMeal';
import './index.css';

class MealRecomendation extends Component {
	constructor(props) {
    super(props);
    this.state = {
      randomMeals:[]
      
    }
  }


componentDidMount(){
	for(var i = 0; i < 3; i++){
		fetch('https://www.themealdb.com/api/json/v1/1/random.php')
			.then(respose => respose.json())
			.then(meal => {
				let singleMeal = [...this.state.randomMeals, ...meal.meals];
				this.setState({randomMeals:singleMeal})
			})
	}
}




  render(){
  	let {randomMeals} = this.state;
 	// console.log(this.state.randomMeals)

	return(
		<div>
			<h2 style={{"marginTop": "100px"}}>Similar meals</h2>
			<div className="randomMeals">
					{
						randomMeals.map(meal => {
							return(
								<RandomMeal
									key={meal.idMeal}
									id={meal.idMeal}
									MealImg={meal.strMealThumb}
									MealCategory={meal.strCategory}
									MealCountry={meal.strArea}
									MealName={meal.strMeal}
									forceUpdate={this.props.forceUpdate}
								/>
							)
						})
					}
			</div>
		</div>
	)
  }
}



export default MealRecomendation;