import React from 'react';
// import { Link} from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import './HomePageHeader.css';
import headerImg from '../../Images/HEADER IMAGE.png';


const HomePageHeader = props => {
	return(
		<div className='headerSection'>
			<div className="headerText">
				<div style={{"margin": "35% 0 10% 15%"}}>
				<h1>Food Recepies</h1>
				<p style={{"width": "50%"}}>Lorem Ipsum is that it has a more-or-less normal distribution of letters,
				 as opposed to using 'Content here, content here', making it look like readable English
				</p>
				<form style={{"marginTop": "20%"}}>
					<Link to='#category'><button style={{"width":"150px"}} className='btn'>Categories <i className='down'></i></button></Link>
				</form>
				</div>
			</div>
			<div className='headerImage'>
				<img style={{"width":"80%", "height":"100%", "padding":"30px 0"}} src={headerImg} alt="meal"/>
			</div>
		</div>
	)
}


export default HomePageHeader;