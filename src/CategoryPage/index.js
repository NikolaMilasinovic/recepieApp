import React, {Component} from 'react';
import Recomendation from './Recomendation';
import Meals from './Meals';
import './index.css';


class Category extends Component{
	constructor(props) {
    super(props);
    this.state = {
      route: this.props.match.params.name,
      randomMeal: {},
      meals:[],
      searchfield: ''
    }
  }

	componentDidMount(){
		fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.state.route}` )
			.then(response=> response.json())
      		.then(meals => {
      			let randomMealIndex = Math.floor(Math.random()*meals.meals.length)
      			let randomMeal = meals.meals[randomMealIndex]
      			this.setState({meals:meals.meals, randomMeal});
      			// console.log(randomMeal);
      		})
      		.catch(err => console.log(err));
	}


   onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }


  render(){
  	let {randomMeal,route, meals,searchfield} = this.state;
    const filteredMeals = meals.filter(meal =>{
      return meal.strMeal.toLowerCase().includes(searchfield.toLowerCase());
    })

 	console.log(filteredMeals);
    return(
    	<div className="categoryContainer">
			<Recomendation randomMeal={randomMeal} category={route} onSearchChange={this.onSearchChange}/>
			<Meals meals={filteredMeals} category={route}/>
		</div>
    )
  }
}

export default Category;

