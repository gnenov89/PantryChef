import React,{ Component } from "react";
import {Input, Row, Col, Button} from "react-materialize"

class SearchBar extends Component {
    render () {
        return (
            <div>
				<Row>
                <Input className="inputbar"
                name="ingredientSearch"
                value={this.props.ingredientSearch}
                onChange={this.props.handleInputChange}
                placeholder="Add Ingredient"
              />                </Row>  
                <Row>
                <Button
                onClick={this.props.handleFormSubmit}
                type="success"
                className="input-lg"
              >
                Add 3 Ingredients To Search Recipes
              </Button>                </Row>  
           </div>
        )
    }
} 

export default SearchBar;