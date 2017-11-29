import React, { Component } from 'react';
import Accordion from "react-bootstrap/lib/Accordion"
import Panel from  "react-bootstrap/lib/Panel"
import Image from  "react-bootstrap/lib/Image"
import Col from  "react-bootstrap/lib/Col"
import Button from "react-bootstrap/lib/Button"
import ButtonToolbar from "react-bootstrap/lib/ButtonToolbar"
import Modal from "react-bootstrap/lib/Modal"
import FormGroup from "react-bootstrap/lib/FormGroup"
import ControlLabel from "react-bootstrap/lib/ControlLabel"
import FormControl from "react-bootstrap/lib/FormControl"
import API from "./API";

//import './App.css';

class App extends Component {
// eslint-disable-next-line
  constructor(...args){
    super(...args);
    this.state = {
    recipes :[],
    open: true
  };
}
  componentDidMount() {
    API.searchRecipes("bread pudding")
      .then(res => this.setState({ recipes: res.data.matches }));
  }
  // eslint-disable-next-line
  render() {
    console.log(this.state.recipes)
    const{recipes} = this.state;
    return (
      <div className="App container">
        <Accordion>
          {recipes.map((recipe, index)=>(
        <Col xs={6} md={4}>
          <Panel header={recipe.recipeName} eventKey={index} key={index}>
            <Image src={recipe.smallImageUrls} responsive/>
          </Panel>
        </Col>





           ))}
        </Accordion>

  <Button bsStyle="primary">Add Recipe</Button>
      </div>
    );
  }
}

export default App;
