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
                    <Card header={<CardTitle reveal image={cardIcon} waves='light'/>}
                    title="Press gently for instructions!"
                    reveal={<p>Hi comrade! Welcome to Pantry Chef! Here you can find recipes by ingredients and by names of recipes. You can make a list of recipes and pick favorites! Have fun with Pantry Chef!</p>}>
                    
                    </Card> 
                    <Col s={12} m={6} l={6} className="left-align"></Col>
                     
                 
                    </Col>
                    
                </Row> 

                
           </div>
        )
    }
} 

export default card;