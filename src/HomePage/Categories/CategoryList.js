import React, {Component} from 'react';
import shuffle from 'shuffle-array';
import Category from './Category';
import "./CategoryList.css"


class CategoryList extends Component{
	constructor(props){
		super();
		this.state = {
			categoryList:[]
		}
	}
	componentDidMount(){
		fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
			.then(response=> response.json())
      		.then(category => {
      			let shuffleCategoryes = shuffle(category.categories);
      			let randomCategories = [];
      			for(var i =0 ; i <8; i++){
      				randomCategories.push(shuffleCategoryes[i]);
      			}
      			this.setState({ categoryList: randomCategories});
      		})
      		.catch(err => console.log(err));
	}
	
  	render(){
  		const {categoryList} = this.state;
  		console.log(categoryList);
	    return(
	      <div id="category" className="CategoryListSection">
	      	
	      	{
		        categoryList.map(category => {
		          return (
		            <Category
		              key={category.idCategory}
		              categoryName={category.strCategory}
		              categoryPicture={category.strCategoryThumb}
		              />
		          );
		        })
		    }
	         
	      </div>
	      
	    )
  	}
}

export default CategoryList;