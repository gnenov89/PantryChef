import React,{ Component} from 'react';
//import "./Search.css"
import SearchBar from "./SearchBar"
import SearchResults from "./SearchResults"
import API from "../../API/index";
import {Col, Row,} from "react-materialize"

class SearchContainer extends Component {
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
      }
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      
    }
    handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { name, value } = event.target;
        this.setState({
          ingredientSearch: value,
        });
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

  render() {
    console.log(this.state.recipes)
      // eslint-disable-next-line
    const{recipes} = this.state;
      
    return (
      <div>
        <Row>
          <Col s={12} className='grid-example'> 
            <SearchBar handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            />
          </Col>
        </Row>
        <Row>
          <Col s={12} className='grid-example'> 
            <SearchResults recipes={this.state.recipes} />
          </Col>
        </Row>
      </div>
    )
  }
}

export default SearchContainer;