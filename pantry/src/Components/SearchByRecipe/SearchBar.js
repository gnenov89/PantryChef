import React,{ Component } from "react";
import {Input, Row, Col, Container, Button} from "react-materialize"
import API from "../../API/index";


class SearchBar extends Component {
       
          render() {
            return (
              <div>
                  <Container>
                      <form>
                          <Row>
                            <Col s={12} m={6} l={6} className="center-align">
                              <Input
                                type="text"
                                name="recipeSearch"
                                value={this.props.recipeSearch}
                                onChange={this.props.handleInputChange}
                                placeholder="Search For a Recipe"
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