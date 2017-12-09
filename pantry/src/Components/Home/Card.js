import React, { Component } from "react";
import { Card, CardTitle, Row, Col } from "react-materialize";
import cardIcon from "./chef-icon-min.jpg";
import icon from "./chef-icon-min.jpg";

class card extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col s={12} m={3} l={3} className="center-align" />
                    <Col s={12} m={6} l={6} className="center-align">
                        <Card
                            header={<CardTitle image={icon} />}
                            title={
                                <p>
                                    Welcome to Pantry Chef! Here you can find
                                    your next homecooked meal by searching for
                                    the ingredients you have on hand.
                                </p>
                            }
                        />
                        <Col s={12} m={6} l={6} className="left-align" />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default card;
