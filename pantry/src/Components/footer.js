import React,{ Component } from "react";
import {Footer, Icon, Row, Col} from "react-materialize"



class footer extends Component {
    render () {
        return (
            <div>
            <Footer copyrights="&copy 2017 Pantry Chef"

	
	className='example'
>
		
		<a className="grey-text text-lighten-4 right" href="https://github.com/gnenov89/PantryChef/tree/master/pantry"><Icon>code</Icon></a>
</Footer>
            </div>

        )
    }
} 

export default footer;