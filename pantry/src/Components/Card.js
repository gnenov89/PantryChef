import React,{ Component } from "react";
import CardTitle from "react-materialize"

class Card extends Component {
    render () {
        return (
            <Card className='small'
            header={<CardTitle image='../assets/chef-min-icon.jpg'>Card Title</CardTitle>}
            actions={[<a href="https://github.com/gnenov89/PantryChef/tree/mock-up-front-end/Mock-Up%20Front%20End">This is a Link</a>]}>
            I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
            </Card>
        )
    }
}

export default Card;