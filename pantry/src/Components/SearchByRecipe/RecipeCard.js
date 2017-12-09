import React, { Component } from "react";
import { Card, CardTitle, Row, Col } from "react-materialize";
import API from "../../API/index";
import SearchBar from "./SearchBar.js";

class RecipeCard extends Component {
    constructor() {
        super();
        this.state = {
            recipe: null
        };
    }

    componentDidMount() {
        API.getRecipe(this.props.recipe.id).then(res =>
            this.setState({ recipe: res.data })
        );
    }

    render() {
        return (
            <div className="recipeCards">
                <Row>
                     <Col  className="center-align">
                        {this.state.recipe ? (
                            <Card
                                className="medium"
                                header={
                                    <CardTitle
                                        image={
                                            this.state.recipe.images[0]
                                                .hostedLargeUrl
                                        }
                                    >
                                        {" "}
                                        {this.state.recipe.name}{" "}
                                    </CardTitle>
                                }
                                actions={[
                                    <a href={this.state.recipe.attribution.url}>
                                        View on Yummly
                                    </a>
                                ]}
                            >
                                
                            </Card>
                        ) : null}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default RecipeCard;
