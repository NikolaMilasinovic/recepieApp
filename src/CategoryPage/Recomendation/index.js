import React, {Component} from 'react';
import searchIcon from '../../Images/search-solid.svg';
import { Link} from 'react-router-dom';
import './index.css';



const Recomendation = ({randomMeal, category, onSearchChange}) => {


		return(
		<div>
			<div className="recomendationSection">
				<div className="ourRecomendation">
					<div>
						<h1>{category} </h1>
					</div>
					<Link to={`/meal/${randomMeal.idMeal}`}>
						<div><p>Our Recomendation</p></div>
						<div style={{"width":"200px", "height":"200px%"}}><img src={randomMeal.strMealThumb} alt='meal' style={{"height":"100%", "width":"100%"}}/></div>
						<div>{randomMeal.strMeal}</div>
					</Link>
				</div>
				<div className="search">
					<div className="searchBar" style={{"width":"100%"}}>
			        	<div   className="input">
			        	 <input onChange={onSearchChange} type="text" className="searchTerm" placeholder="Search recepies"/>
			        	</div>
			        	<div className="icon">
			        		<a className="searchButton">
					        	<img style={{"width":"100%", "height":"60%"}} src={searchIcon} alt='search icon'/>
					      	</a>
			        	</div>
					      
			        </div>
				</div>
			</div>
			<hr/>
		</div>
	)
	}

	



export default Recomendation;







