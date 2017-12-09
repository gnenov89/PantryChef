import React,{ Component} from 'react';
import "./SearchByIngredient.css"
import SearchBar from "./SearchBar"
import Icons from "./Icons"
import API from "../../API/index";
import {Col, Row,} from "react-materialize"
import IngredientsAdded from "./IngredientsAdded"
import SearchResults from "./SearchResults.js"

class SearchByIngredientContainer extends Component {
  // eslint-disable-next-line
  constructor(...args){
    super(...args);
    this.state = {
        recipes: [],
        ingredientSearch: "",
        allowedIngredients: []
      };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRemoveIngredient = this.handleRemoveIngredient.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleIngredientAdded = this.handleIngredientAdded.bind(this);
  }

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      ingredientSearch: value,
    });
  }

  handleRemoveIngredient = event => {
      // Find the ingredent they clicked
      // remove it from the allowedIngredients list
  }

  handleIngredientAdded = event => {
    const imgUrl = event.target.getAttribute("src");
    console.log(imgUrl);

  }

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    if(this.state.allowedIngredients.length > 2) {
        return;
    }
    if(this.state.allowedIngredients.indexOf(this.state.ingredientSearch) > -1) {
        return;
    }
    this.setState({
        allowedIngredients: this.state.allowedIngredients.concat(this.state.ingredientSearch),
        ingredientSearch: ""
    })
    API.searchRecipes("", this.state.allowedIngredients.concat(this.state.ingredientSearch))
      .then(res => this.setState({ recipes: res.data }))
      .catch(err => console.log(err));
  }

  handleClick = event => {
    event.preventDefault();    
    const title = event.target.getAttribute("title");
    if(this.state.allowedIngredients.length > 2) {
      return;
    }
    if(this.state.allowedIngredients.indexOf(this.state.ingredientSearch) > -1) {
        return;
    }
    this.setState({
      allowedIngredients: this.state.allowedIngredients.concat(title)
    }, () => {
      API.searchRecipes("", this.state.allowedIngredients.concat(title))
      .then(res => this.setState({ recipes: res.data }))
      .catch(err => console.log(err));
    });
  };

    // eslint-disable-next-line
  render() {
   
    return (
      <div>
        <Row>
          <Col s={6} className='grid-example'> 
          <SearchBar 
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          ingredientSearch={this.state.ingredientSearch}
          />
          </Col>
          <Col s={6} className='grid-example'> 
            <IngredientsAdded 
            
            />
          </Col>
        </Row>
        <Row>
          <Col s={6} className='grid-example'> 
            <Icons  
            handleClick={this.handleClick}
            />
          </Col>
          <Col s={6} className='grid-example'> 
            <SearchResults  
            recipes={this.state.recipes}
            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default SearchByIngredientContainer;