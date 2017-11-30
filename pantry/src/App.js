import React,{ Component} from 'react';
import Navbar from "./Components/Navbar.js";
import Card from "./Components/Card.js"

// 
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
    // eslint-disable-next-line
    const{recipes} = this.state;
    return (

 <div>

 <Navbar />
<Card />

</div>


       
    );

  }
}

export default App;
