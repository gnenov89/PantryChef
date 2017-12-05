import React,{ Component } from "react";
import {Card, CardTitle, Row, Col} from "react-materialize";
import cardIcon from "./chef-icon-min.jpg";



class card extends Component {
    render () {
        return (
            <div>
				<Row>
                    <Col s={12} m={3} l={3} className="center-align"></Col>
                    <Col s={12} m={6} l={6} className="center-align">
                    <Card className='medium'
                    header={<CardTitle image={cardIcon}>Pantry Chef</CardTitle>}
                    actions={[<a href=''></a>]}>

                    </Card>
                    </Col>
                    <Col s={12} m={3} l={3} className="center-align"></Col>
                </Row>  
           </div>
        )
    }
} 

export default card;