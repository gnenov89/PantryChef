import React,{ Component } from "react";
import {Input, Row, Col, Button, Container} from "react-materialize";
import API from "../../API/index";


class SearchBar extends Component {
    constructor(...args){
        super(...args);
        this.state = {
            recipes: [],
            ingredientSearch: "",
            allowedIngredients: []
          };
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
            allowedIngredients: this.state.allowedIngredients.concat(this.state.ingredientSearch)
        })
        API.searchRecipes("", this.state.allowedIngredients.concat(this.state.ingredientSearch))
          .then(res => this.setState({ recipes: res.data }))
          .catch(err => console.log(err));

      };
    
      render() {

        return (
          <div>
              <Container>
                  <form>
                      <Row>
                        <Col size="xs-9 sm-10">
                          <Input
                            name="ingredientSearch"
                            value={this.state.ingredientSearch}
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