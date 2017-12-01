import React,{ Component } from "react";
import {Card, CardTitle, Row, Col} from "react-materialize"



class card extends Component {
    render () {
        return (
            <div>
				<Row>
                    <Col s={12} m={3} l={3} className="center-align"></Col>
                    <Col s={12} m={6} l={6} className="center-align">
                    <Card className='medium'
                    header={<CardTitle image='../assets/chef-icon-min.jpg'>Card Title</CardTitle>}
                    actions={[<a href=''>This is a Link</a>]}>

                    </Card>
                    </Col>
                    <Col s={12} m={3} l={3} className="center-align"></Col>
                </Row>  
           </div>
        )
    }
} 

export default card;