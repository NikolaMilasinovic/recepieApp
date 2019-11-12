import React, {Component} from 'react';
import Logo from '../Images/LOGO.png';
import Insta from '../Images/INSTA.png';
import FB from '../Images/FB.png';
import './Footer.css';


class Footer extends Component{
  render(){
    return(
    	<div>
	      	<div className="footer">
	        	<div className="logo">
	        		<img style={{"width":"100%", "height":"100%"}} src={Logo} alt='Logo'/>
	        	</div>
	        	<div className="socialMedia">
	        		<img style={{"width":"38%", "height":"100%"}} src={FB} alt='Facebook'/>
	        		<img style={{"width":"38%", "height":"100%"}} src={Insta} alt='Instagram'/>
	        	</div>
	      	</div>
	      	<p style={{"textAlign":"center"}}>Copyright - Golux Technologies 2019 - Nikola Milasinoivc</p>
	    </div>
    )
  }
}


export default Footer;