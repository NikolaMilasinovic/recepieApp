import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import SingleMeal from './SingleMeal';
import Category from './CategoryPage';
import Footer from './Footer';
import	'./App.css';

const App = () =>{

    return(
		<Router>	
	      <div className='container'>
	        <Header/>
	        <Switch>
	        	<Route path="/" exact component={HomePage}/>
	        	<Route path="/category/:name" exact component={Category}/>
	        	<Route path="/meal/:id" exact component={SingleMeal}/>
	        </Switch>
	        <Footer/>
	      </div>
	    </Router>
    )
}

export default App;

