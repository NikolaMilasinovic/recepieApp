import React, {Component} from 'react';
import CategoryList from './Categories/CategoryList';
import HomePageHeader from './HomePageHeader/HomePageHeader';
import InfoSection from './Info/InfoSection';
import Contact from './Contact/Contact';


class HomePage extends Component{
	

	state
  	render(){
	    return(
	      <div>
	      	<HomePageHeader/>
	        <CategoryList/>
	        <InfoSection/>
	        <Contact/>
	      </div>
	    )
  	}
}

export default HomePage;