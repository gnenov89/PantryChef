
import React,{ Component } from "react";
import {Button, Row, Col, Icon} from "react-materialize"
import {Link} from 'react-router-dom';
import "./Home.css"


class buttons extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col s={12} className="center">
                        <Link to="/ingredientsearch">
                            <Button waves="light">Search By Ingredient </Button>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col s={12} className="center">
                        <Button waves="light" node="a" href="/SearchByRecipe">
                            {" "}
                            Search By Recipe{" "}
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col s={12} className="center">
                        <Button
                            className="center"
                            node="a"
                            href="/GroceryList"
                            waves="light"
                        >
                            list<Icon left>list</Icon>
                        </Button>
                    </Col>
                </Row>
            </div>
        );
            
    }
}

export default buttons;
