import React,{ Component} from 'react';
import "./Search.css"
import SearchBar from "./SearchBar"
import SearchResults from "./SearchResults"
import API from "../../API/index";
import {Col, Row,} from "react-materialize"

class SearchContainer extends Component {
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
          <Col s={12} className='grid-example'> 
            <SearchBar />
          </Col>
        </Row>
        <Row>
          <Col s={12} className='grid-example'> 
            <SearchResults recipes={this.state.recipes} />
          </Col>
        </Row>
      </div>
    )
  }
}

export default SearchContainer;