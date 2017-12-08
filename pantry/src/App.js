// BrowserRouter is the router implementation for HTML5 browsers (vs Native).
// Link is your replacement for anchor tags.
// Route is the conditionally shown component based on matching a path to a URL.
// Switch returns only the first matching route rather than all matching routes.
import {
  BrowserRouter as Router,
  // Link,
  Route,
  // Switch,
} from 'react-router-dom';
import React from 'react';
import Navbar from './Components/navbar'
import HomeContainer from "./Components/Home/HomeContainer"
import SearchByIngredientContainer from "./Components/SearchByIngredient/SearchByIngredientContainer"
import SearchContainer from "./Components/SearchByRecipe/SearchContainer"
import "./App.css"
import Auth from "./Components/Auth"

const Home = () => <h1>Home</h1>;


// We give each route either a target `component`, or we can send functions in `render` or `children` 
// that return valid nodes. `children` always returns the given node whether there is a match or not.
const App = () => (
  <Router>
    <Auth>
    <div>
      <Navbar />
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/ingredientsearch" component={SearchByIngredientContainer} />
      <Route exact path="/SearchByRecipe" component={SearchContainer} />
    </div>
    </Auth>
  
  </Router>

 

);



export default App;