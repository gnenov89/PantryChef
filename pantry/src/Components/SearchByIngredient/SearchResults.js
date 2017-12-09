import React,{ Component } from "react";
import {Input, Row, Col} from "react-materialize"


class SearchResults extends Component {

    render () {
        return (
            <div>
				<Row>
                {
                    this.props.recipes.map(function(item, i){
                         return <ul key={i}>{item.recipeName} <img src={item.smallImageUrls}/> </ul>
                    })
                }
                </Row>  
           </div>
        )
    }
} 

export default SearchResults;