import React, { Component } from "react";
import { Footer, Icon } from "react-materialize";

class footer extends Component {
    render() {
        return (
            <Footer
                copyrights="&copy; 2017 Pantry Chef"
                moreLinks={
                    <a
                        className="grey-text text-lighten-4 right"
                        href="#https://github.com/gnenov89/PantryChef/tree/master/pantry"
                    >
                        GitHub
                    </a>
                }
                className="example"
            >
                
            </Footer>
        );
    }
}

export default footer;
