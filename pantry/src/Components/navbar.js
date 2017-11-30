import React,{ Component } from "react";
import {Navbar, NavItem, Icon, Button, Col} from "react-materialize"



class navbar extends Component {
    render () {
        return (
    <div>
        <Col s={12} className="center"> <Navbar brand='Pantry'right>

            <Col s={3} className="left-align">
              <NavItem href='get-started.html'><Icon>mood</Icon></NavItem>
              <NavItem href='get-started.html'><Icon>people</Icon></NavItem>
            </Col>

               
            
            </Navbar>
           </Col>

            
           
                    
    </div>
        )
    }
}

export default navbar;