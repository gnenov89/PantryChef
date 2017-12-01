import React,{ Component} from 'react';
import Card from "./Card.js";
import Button from"./Buttons.js";
import "./Home.css"
import API from "../../API/index";
import {Col, Row} from "react-materialize"


//import './App.css';

class HomeContainer extends Component {
  // eslint-disable-next-line
  constructor(...args){
    super(...args);
    this.state = {
      recipes :[],
      open: true
    }
  }

  componentDidMount() {
    API.searchRecipes("bread pudding")
      .then(res => this.setState({ recipes: res.data.matches }));
  }
    // eslint-disable-next-line
  render() {
    console.log(this.state.recipes)
      // eslint-disable-next-line
    const{recipes} = this.state;
      
    return (
      <div>
        <Row>
          <Col s={12} className='grid-example'> 
            <Card /> 
          </Col>
        </Row>
        <Row>
          <Col s={12} className='grid-example'> 
            <Button /> 
          </Col>
        </Row>
      </div>
    )
  }
}

export default HomeContainer;