import React,{ Component } from "react";
import {Navbar, NavItem, Icon, } from "react-materialize"



class navbar extends Component {
    render () {
        return (
    <div>
    

    <Navbar brand='PantryChef'right>
    
    
	<NavItem href='get-started.html'><Icon>search</Icon></NavItem>
	<NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
	<NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>

   </Navbar>
         
        
        
            
          
            
         
            
           
</div>
        )
    }
}

export default navbar;