import React,{ Component } from "react";
import {Button, Row, Col, Icon} from "react-materialize"
import {Link} from 'react-router-dom';


class buttons extends Component {
    render () {
        return (
            <div>

            <Row>
            <Col s={12} className='center'>
            <Button waves='light' node='a' href='https://www.yummly.com/'> Search By Ingredient </Button>
            </Col>
            </Row>
            <Row>

            <Col s={12} className='center'>
                  <Button waves='light' node='a' href='https://www.yummly.com/'>Search By recipe </Button>
            </Col>
            
            </Row>
            <Row>
            <Col s={3}></Col>
            <Col s={3} >
		    <Button className='right' waves='light'>button<Icon left>cloud</Icon></Button>
            </Col>
          
            <Col s={3}>
              <Link to={{pathname: '/about'}}>
                <Button className='left' waves='light'>button<Icon left>cloud</Icon></Button>
              </Link>
            </Col>
            <Col s={3}></Col>

            </Row>
           </div>
        )
    }
} 

export default buttons;