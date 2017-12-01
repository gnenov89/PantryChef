import React,{ Component } from "react";
import {Input, Row, Col} from "react-materialize"

class SearchResults extends Component {

    constructor() {
        super();
        console.log(this)
    }

    render () {
        return (
            <div>
				<Row>
                {
                    this.props.recipes.map(function(item, i){
                         return <li key={i}>{item.recipeName}: {item.ingredients}</li>
                    })
                }
                </Row>  
           </div>
        )
    }
} 

export default SearchResults;