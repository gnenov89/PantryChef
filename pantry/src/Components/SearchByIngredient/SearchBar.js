import React,{ Component } from "react";
import {Input, Row, Col, Button, Container} from "react-materialize";
import API from "../../API/index";
import "./SearchByIngredient.css"



class SearchBar extends Component { 
      render() {

        return (
          <div>
              <Container>
                  <form>
                      <Row>
                        <Col size="md-10 sm-10">
                          <Input className="inputbar"
                            name="ingredientSearch"
                            value={this.props.ingredientSearch}
                            onChange={this.props.handleInputChange}
                            placeholder="Add Ingredient"
                          />
                        </Col>
                        <Col size="md-2 sm-2">
                          <Button
                            onClick={this.props.handleFormSubmit}
                            type="success"
                            className="input-lg"
                          >
                            Add Up To 3 Ingredients To Search
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