import React,{ Component } from "react";
import {Card, CardTitle, Row, Col} from "react-materialize";
import logo from "./logo.jpg";


class card extends Component {
    render () {
        return (
            <div>
				<Row>
                    <Col s={12} m={3} l={3} className="center-align"></Col>
                    <Col s={12} m={6} l={6} className="center-align">
                    <Card header={<CardTitle image={logo} width="25"/>}
                    title={<p>Welcome to Pantry Chef!<br/>
                        Here you can find your next homecooked meal by searching for the ingredients you have on hand.</p>}>
                    </Card> 
                    <Col s={12} m={6} l={6} className="left-align"></Col>
                     
                  
                    </Col>
                    
                </Row> 

                
           </div>
        )
    }
} 

export default card;