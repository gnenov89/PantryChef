import React,{ Component} from 'react';
import API from "../../API/index";
import {Col, Row,} from "react-materialize"

class ThreeIngredientBoxes extends Component {
  // eslint-disable-next-line
  constructor(...args){
    super(...args);
    this.state = {
      recipes :[],
      open: true,
      query: ""
    }
  }

  componentDidMount() {
    API.searchRecipes(this.state.query)
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
        </Row>
        <Row>
        </Row>
      </div>
    )
  }
}

export default ThreeIngredientBoxes;