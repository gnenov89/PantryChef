import React,{ Component } from "react";
import {Input, Row, Col, Button, Container} from "react-materialize";
import API from "../../API/index";



class SearchBar extends Component { 
      render() {

        return (
          <div>
              <Container>
                  <form>
                      <Row>
                        <Col size="xs-9 sm-10">
                          <Input
                            name="ingredientSearch"
                            value={this.props.ingredientSearch}
                            onChange={this.props.handleInputChange}
                            placeholder="Add an Ingredient"
                          />
                        </Col>
                        <Col size="xs-3 sm-2">
                          <Button
                            onClick={this.props.handleFormSubmit}
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