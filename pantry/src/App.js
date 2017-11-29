import React,{ Component} from 'react';
import Navbar from "./Components/navbar"

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
    const{recipes} = this.state;
    return (

 <div>
<Navbar />
My app


</div>


       
    );

  }
}

export default App;
