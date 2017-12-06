import React,{ Component } from "react";
import {Row, Col, Card, CardTitle} from "react-materialize"

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
                             return <Card className='small'
                             header={<CardTitle image={item.smallImageUrls} key={i}> {item.recipeName} </CardTitle>}
                             actions={[<a href='#'>This is a Link</a>]}> {item.ingredients} </Card>
                        })
                    }
                   </Col> 
                   
                </Row>  
           </div>
        )
    }
} 

export default SearchResults;