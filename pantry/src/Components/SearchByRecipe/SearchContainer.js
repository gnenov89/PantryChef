import React, { Component } from "react";
import "./SearchByRecipe.css";
import SearchBar from "./SearchBar";
import API from "../../API/index";
import { Col, Row } from "react-materialize";
import SearchResults from "./SearchResults"

class SearchContainer extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      recipes: [],
      recipeSearch: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      recipeSearch: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
     recipeSearch: value
    });
    API.searchRecipes(this.state.recipeSearch)
      .then(res => this.setState({ recipes: res.data.matches }))
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.data);

    // const{recipes} = this.state;

    return (
      <div className="recipeDiv">
        <Row>
          <Col s={12} className="grid-example">
            <SearchBar 
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            />
          </Col>
        </Row>
        <Row>
          <Col s={12} className="grid-example">
            <SearchResults recipes={this.state.recipes} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default SearchContainer;
