import React,{ Component } from "react";
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

export default SearchBar;