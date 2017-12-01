import React,{ Component } from "react";
import {Navbar, NavItem, Icon, } from "react-materialize"
import {Link} from 'react-router-dom';


class navbar extends Component {
    render () {
        return (
    <div>
    

    <Navbar brand='PantryChef'right>
    
    
	  <NavItem href='get-started.html'><Icon><Link to="/search">search</Link></Icon></NavItem>
    

    
	  <NavItem href='get-started.html'><Icon><Link to="/">view_module</Link></Icon></NavItem>
    

   
	  <NavItem href='get-started.html'><Icon><Link to="/">refresh</Link></Icon></NavItem>
    

   </Navbar>
         
        
        
            
          
            
         
            
           
</div>
        )
    }
}

export default navbar;