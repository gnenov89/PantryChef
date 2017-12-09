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
                        className='grid-example'>
                        {/* <img 
                        src={this.props.ingredientImg} 
                        alt={this.props.ingredientImg}
                        />  */}
                        </Col>
                        
                        <Col s={1} className='grid-example'></Col>
                        <Col s={1} className='grid-example'></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default IngredientsAdded;