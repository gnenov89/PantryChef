import React,{ Component } from "react";
import {Input, Row, Col} from "react-materialize"

class SearchBar extends Component {
    render () {
        return (
            <div>
								<Row>
                  <Input s={12} label="Search for Recipes" defaultValue='' />
                </Row>  
           </div>
        )
    }
} 

export default SearchBar;