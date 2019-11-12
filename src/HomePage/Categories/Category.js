import React from 'react';
import { Link} from 'react-router-dom';
import './Category.css';


const Category = ({categoryName, categoryPicture}) => {

	return(
		<div className="content">
			<Link to={`/category/${categoryName}`}>
			<img style={{"width":"100%", "height":"80%"}} src={categoryPicture} alt={categoryName}/>
			
			<h1 style={{"margin":"0", "textAlign": "center"}}>{categoryName}</h1>
			</Link>
		</div>
	)
}


export default Category;