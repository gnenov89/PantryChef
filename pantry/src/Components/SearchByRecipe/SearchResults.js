import React, { Component } from "react";
import { Row, Col } from "react-materialize";
import RecipeCard from "./RecipeCard.js";

class SearchResults extends Component {
    constructor() {
        super();
        console.log(this);
    }

    render() {
        return (
            <div>
                <Col s={1} m={1} l={1} />
                <Col s={10} m={10} l={10} className="center-align">
                    {this.props.recipes.map(function(item, i) {
                        return <RecipeCard recipe={item} key={i} />;
                    })}
                </Col>
                <Col s={1} m={1} l={1} />
            </div>
        );
    }
}

export default SearchResults;
