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
        allowedIngredients: [],
        ingredientImg: {
          alt: "",
          src: ""
        }
      };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRemoveIngredient = this.handleRemoveIngredient.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleaddIngredientImg = this.handleaddIngredientImg.bind(this);

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
    if(this.state.allowedIngredients.length > 2) {
      return <button>Search</button>;
  }

    if(this.state.allowedIngredients.indexOf(this.state.ingredientSearch) > -1) {
        return;
    }
    this.setState({
        allowedIngredients: this.state.allowedIngredients.concat(this.state.ingredientSearch),
        ingredientSearch: ""
    })
    API.searchRecipes("", this.state.allowedIngredients.concat(this.state.ingredientSearch))
      .then(res => this.setState({ recipes: res.data.matches }))
      .catch(err => console.log(err));
  }

  handleaddIngredientImg = event => {
         
    console.log("hey");  
     
    const alt = event.target.getAttribute("alt");
    const src = event.target.getAttribute("src");
    console.log(this.state);
    // this.setState({
    //   ingredientImg: [{
    //     alt: this.state.ingredientImg.alt,
    //     src: this.state.ingredientImg.src
    //   }]
    // })
  }

  handleClick = event => {
    event.preventDefault();    

    const alt = event.target.getAttribute("alt");


    if(this.state.allowedIngredients.length > 2) {
      return;
    }
    if(this.state.allowedIngredients.indexOf(this.state.ingredientSearch) > -1) {
        return;
    }
    this.setState({
      allowedIngredients: this.state.allowedIngredients.concat(title)
    }, () => {

      API.searchRecipes("", this.state.allowedIngredients.concat(alt))
      .then(res => this.setState({ recipes: res.data.matches }))

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
            handleaddIngredientImg={this.handleaddIngredientImg}
            />
          </Col>
        </Row>
        <Row>
          <Col s={5} className='grid-example'> 
            <Icons  
            handleClick={this.handleClick}
            />

          </Col>

          <Col s={2} className='grid-example'>
          <div className="vl"></div>

          </Col>
          <Col s={5} className='grid-example'> 
            <SearchResults recipes={this.state.recipes}

            />
          </Col>
        </Row>
      </div>
    )
  }
}

export default SearchByIngredientContainer;