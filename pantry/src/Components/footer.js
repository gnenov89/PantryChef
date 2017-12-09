
import React,{ Component } from "react";
import {Footer, Icon} from "react-materialize"





class footer extends Component {
    render() {
        return (
            <div>


                <Footer copyrights="Copyright &copy; 2017 Pantry Chef" className="example">
                    <a className="grey-text text-lighten-4 right"
                        href="https://github.com/gnenov89/PantryChef/tree/master/pantry"
                    >
                        
                    </a>
                </Footer>

            </div>
        );
    }
}

export default footer;
