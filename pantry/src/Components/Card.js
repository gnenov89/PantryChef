import React,{ Component } from "react";
import {Card, CardTitle, Row, Col} from "react-materialize"



class card extends Component {
    render () {
        return (
            <div>
				<Row>
				<Col s={6} className="center">
                  <Card className='small'
	               header={<CardTitle image='../assets/chef-icon-min.jpg'>Card Title</CardTitle>}
	              actions={[<a href=''>This is a Link</a>]}>
	
                 </Card>
				 </Col>
                  </Row>  
           </div>
        )
    }
} 

export default card;