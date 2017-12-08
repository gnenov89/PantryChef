import React,{ Component} from 'react';
import {Container, Row, Col} from "react-materialize"

class IngredientsAdded extends Component {
    render(){
        return(
            <div className="addedIcons">
                <Container>
                    <Row>
                        <Col 
                        s={1} 
                        className='grid-example'
                        
                        >1
                        </Col>
                        <img src={this.props.imgUrl} />
                        <Col s={1} className='grid-example'>2</Col>
                        <Col s={1} className='grid-example'>3</Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default IngredientsAdded;