import React, {Component} from 'react';
import MealDescription from './MealDescription/index';
import MealRecomendation from './MealRecomendation';
import './index.css'


class SingleMeal extends Component {
	constructor(props) {
    super(props);
    this.state = {
      route: "",
      meal:{},
      ingredients:[],
      measures:[]
    }
  }

componentDidMount(){
	// if (this.state.route !== prevState.route){ 
	fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.id}`)
		.then(respose => respose.json())
		.then(meal => {
			const ingredients = [];
			Object.entries(meal.meals[0]).filter(
			    ([key, value]) => {if(key.includes('strIngredient')){
			    	if(value && value.length >=1){
			    		ingredients.push(value);
			    	}
			    }}
			);
			const measures = []
			Object.entries(meal.meals[0]).filter(
			    ([key, value]) => {if(key.includes('strMeasure')){
			    	if(value && value.length >=1){
			    		measures.push(value);
			    	}
			    }}
			);
			this.setState({meal:meal.meals[0],route:meal.meals[0].idMeal,ingredients,measures })
		})
		// }
		// console.log(prevState)
}

requestMeal = (id) => {
   this.setState({route:id})
   // this.forceUpdate()
}



  render(){
  	let {meal,ingredients,measures} = this.state;
	return(
		<div>
		 	<MealDescription Meal = {meal} Ingredients={ingredients} Measures ={measures}/>
		 	<MealRecomendation forceUpdate={this.requestMeal} Meal = {meal}/>
		 	<p onClick={this.requestMeal}>forceUpdate</p>
		</div>
	)
  }
}


export default SingleMeal;

