import React,{ Component } from "react";
import {Card, CardTitle, Row, Col} from "react-materialize"
import API from "../../API/index";


class recipecard extends Component {

    constructor() {
        super();
        this.state = {
            recipe: { images: [{}] }
        }
    }

    componentDidMount() {
      API.getRecipe(this.props.recipe.id)
        .then(res => this.setState({ recipe: res.data }));
    }

    render () {
        return (
            <div>
				<Row>
                    <Col s={12} m={3} l={3} className="center-align"></Col>
                    <Col s={12} m={6} l={6} className="center-align">
                   
                    <Card className='small'
                          header={<CardTitle image={this.state.recipe.images[0].hostedLargeUrl}> {this.state.recipe.name} </CardTitle>}
                          actions={[<a href='#'>This is a Link</a>]}> {this.state.recipe.ingredients} </Card>
                       
                
                    </Col>
                    <Col s={12} m={3} l={3} className="center-align"></Col>
                  
                </Row>  
           </div>
        )
    }
} 

export default recipecard;