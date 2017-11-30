import React,{ Component } from "react";
import {Button, Row, Col, Icon} from "react-materialize"



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
            <Col s={6} className='left'>
		    <Button waves='light'>button<Icon left>cloud</Icon></Button>
            </Col>
          
            <Col s={6} className='right'>
		    <Button waves='light'>button<Icon right>cloud</Icon></Button>
            </Col>

            </Row>
           </div>
        )
    }
} 

export default buttons;