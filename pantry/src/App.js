import React, { Component } from 'react';
import Accordion from "react-bootstrap/lib/Accordion"
import Panel from  "react-bootstrap/lib/Panel"
import Button from "react-bootstrap/lib/Button"
import ButtonToolbar from "react-bootstrap/lib/ButtonToolbar"
import Modal from "react-bootstrap/lib/Modal"
import FormGroup from "react-bootstrap/lib/FormGroup"
import ControlLabel from "react-bootstrap/lib/ControlLabel"
import FormControl from "react-bootstrap/lib/FormControl"

import './App.css';

class App extends Component {
// eslint-disable-next-line
  state = {
    recipes :[
      // eslint-disable-next-line
      {recipeName: 'Chicken Parm1', Ingredients: ["Chicken breast", "Tomatoe sauce", "Bread Crumbs", "Parmigianno"]},
      // eslint-disable-next-line
      {recipeName: 'Chicken Parm2', Ingredients: ["Chicken breast", "Tomatoe sauce", "Bread Crumbs", "Parmigianno"]},
      {recipeName: 'Chicken Parm3', Ingredients: ["Chicken breast", "Tomatoe sauce", "Bread Crumbs", "Parmigianno"]}
    ]
  }
  // eslint-disable-next-line
  render() {
    const{recipes} = this.state;
    return (
      <div className="App container">
        <Accordion>
          {recipes.map((recipe, index)=>(

<Panel header={recipe.recipeName} eventKey = {index} key = {index}>
<ol>
{recipe.Ingredients.map((item)=>(
    <li key={item}>{item}</li>
  ))}
  </ol>
  <ButtonToolbar>
    <Button bsStyle="danger"> Delete Recipe</Button>
    <Button bsStyle="default">Edit Recipe</Button>
  </ButtonToolbar>
  

</Panel>





           ))}
        </Accordion>

  <Button bsStyle="primary">Add Recipe</Button>
      </div>
    );
  }
}

export default App;
