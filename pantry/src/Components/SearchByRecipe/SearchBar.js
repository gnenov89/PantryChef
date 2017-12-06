import React,{ Component } from "react";
import {Input, Row, Col, Container, Button} from "react-materialize"
import API from "../../API/index";


class SearchBar extends Component {
    
        constructor(...args){
            super(...args);
            this.state = {
                recipes: [],
                receipeSearch: ""
              };
          }
        
        
          handleInputChange = event => {
            // Destructure the name and value properties off of event.target
            // Update the appropriate state
            const { name, value } = event.target;
            this.setState({
              [name]: value
            });
          };
        
          handleFormSubmit = event => {
            // When the form is submitted, prevent its default behavior, get recipes update the recipes state
            event.preventDefault();
            API.searchRecipes(this.state.recipeSearch)
              .then(res => this.setState({ recipes: res.data }))
              .catch(err => console.log(err));
              console.log("Ingredient Search:" + this.state.recipeSearch);
          };
        
          render() {
            return (
              <div>
                  <Container>
                      <form>
                          <Row>
                            <Col size="xs-9 sm-10">
                              <Input
                                name="recipeSearch"
                                value={this.state.recipeSearch}
                                onChange={this.handleInputChange}
                                placeholder="Search For a Recipe"
                              />
                            </Col>
                            <Col size="xs-3 sm-2">
                              <Button
                                onClick={this.handleFormSubmit}
                                type="success"
                                className="input-lg"
                              >
                                Search
                              </Button>
                            </Col>
                          </Row>
                      </form>
                </Container>
              </div>
            );
          }
    } 

export default SearchBar;