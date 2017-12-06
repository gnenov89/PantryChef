import React,{ Component } from "react";
<<<<<<< HEAD
import {Input, Row, Col, Button, Container} from "react-materialize"
import API from "../../API/index";

class SearchBar extends Component {
    constructor(props) {
      super(props);
      this.state = { value: ""};

      this.hangeChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      API.searchRecipes(this.state.recipeSearch)
      .then(res => this.setState({recipe: res.data}))
      .catch(err => console.log(err));
      event.preventDefault();
    }

    render () {
        return (
            <div>
              <Container>
                <form onSubmit={this.handleSubmit}>
								  <Row>
                    <Col s={12} m={8} l={10} className="center-align">
                    <Input 
                      type="text"
                      name="recipeSearch" 
                      label="Search for Recipes" 
                      value={this.state.value}
                      onChange={this.handleChange}
                      />
                    <Button
                      onClick={this.handleSubmit}
                      type="success"
                      className="input-lg">
                      Search
                      </Button>
                  </Col>
                </Row>
                </form> 
                </Container> 
            </div>
        )
    }
} 
=======
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
>>>>>>> da0a3ee74525e0f2dccfe1b922143a5a09817b3f

export default SearchBar;