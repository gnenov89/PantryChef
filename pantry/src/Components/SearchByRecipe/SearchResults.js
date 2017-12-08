import React,{ Component } from "react";
import {Row, Col} from "react-materialize"
import RecipeCard from "./RecipeCard.js";

class SearchResults extends Component {

    constructor() {
        super();
        console.log(this)
    }

    render () {
        return (
            <div>
				<Row>
                    <Col s={5} className="grid-example"> 
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