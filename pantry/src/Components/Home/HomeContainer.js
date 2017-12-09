import React, { Component } from "react";
import Card from "./Card.js";
import Button from "./Buttons.js";
import "./Home.css";
import API from "../../API/index";
import { Col, Row } from "react-materialize";
import withAuth from "../HOC/withAuth";
// import PantryChefLogo from ("./PantryChef.JPG")

{/* <img src={imageName} /> */}

class HomeContainer extends Component {
  // eslint-disable-next-line
  constructor(...args) {
    super(...args);
    this.state = {
      recipes: [],
      open: true
    };
  }


  render() {
    const { recipes } = this.state;

    return (
      <div>
        <Row>
          <Col s={12} className="grid-example">
            <Card />
          </Col>
        </Row>
        <Row>
          <Col s={12} className="grid-example">
            <Button />
          </Col>
        </Row>
      </div>
    );
  }
}

export default withAuth(HomeContainer);
