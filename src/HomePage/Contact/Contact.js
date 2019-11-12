import React from 'react';
import './Contact.css';


const Contact = props => {
	return(
		<div id="contact">
			<div style={{"textAlign":"center"}}>
				<h1 className="aboutUs">Contact</h1>
			</div>
			<div className="ContactSection">
				<form>
					<input className='formItem' type='text' placeholder='First Name'/>
					<input className='formItem' type='text' placeholder='Last Name'/>
					<input className='formItem' type='email' placeholder='Email'/>
					<textarea className='formItem' style={{"height":"150px", "marginTop":"10px"}}  placeholder='Message'/>
					<input type='submit' style={{"width":"30%", "margin":"0 auto"}} className='btn' value="Send"/>
				</form>
			</div>
		</div>
	)
}


export default Contact;