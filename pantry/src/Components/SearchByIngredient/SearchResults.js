import React,{ Component } from "react";

import {Row, Col} from "react-materialize"


import RecipeCard from "../SearchByRecipe/RecipeCard.js";

class SearchResults extends Component {

    constructor() {
        super();
        console.log(this)
    }

    render () {
        return (
            <div>
				<Row>
                    <Col s={12} m={6} l={6} className="center-align">
                     {
                        this.props.recipes.map(function(item, i){
                           return <RecipeCard recipe={item} key={i} />
                        })
                       
                     }
                    </Col> 
                   
                </Row>  
           </div>
        )
    }
} 

export default SearchResults;