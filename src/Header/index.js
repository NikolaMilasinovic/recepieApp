import React, {Component} from 'react';
// import { Link} from "react-router-dom";
import searchIcon from '../Images/search-solid.svg';
import user from '../Images/user-solid.svg';
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css';

class Header extends Component{
  render(){
    return(
      <div className="header">
        <div className="searchBar">
        	<div className="input">
        	 <input type="text" className="searchTerm" placeholder="Search recepies"/>
        	</div>
        	<div className="icon">
        		<p className="searchButton">
		        	<img style={{"width":"60%", "height":"60%"}} src={searchIcon} alt='search icon'/>
		      	</p>
        	</div>
		      
        </div>
        <div className="navigation">
        	<div className="login">
        		<img style={{"width":"100%", "height":"100%"}}  src={user} alt='user'/>
        	</div>
        	<div className="navigationLinks">
				<Link to="#info" ><li>About Us</li></Link>
				<Link to="#contact" ><li>Contact</li></Link>
			</div>
        	
        </div>
      </div>
    )
  }
}


export default Header;