import React,{ Component} from 'react';
import API from "../../API/index";
import {Col, Row, Container, Section, Button} from "react-materialize"

class IconContainer extends Component {
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
        <Section>
            <Row className='center'>
                <Button floating large className='red' waves='light' image='http://icons.iconarchive.com/icons/custom-icon-design/pretty-office-10/512/Apple-icon.png' />
            </Row>
        </Section>
      </div>
    )
  }
}

export default IconContainer;