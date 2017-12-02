import React,{ Component } from "react";
import {Button, Navbar, NavItem, Icon, Modal, Input} from "react-materialize"
import {Link} from 'react-router-dom';


class navbar extends Component {
    render () {
        return (
    <div>
    

    <Navbar brand='PantryChef'right>
    
    
	  <NavItem href='get-started.html'><Icon><Link to="/search  ">search</Link></Icon></NavItem>

      <Modal
	   header='Sign In'
	   trigger={<NavItem href='get-started.html'><Icon><Link to="/">account_box</Link></Icon></NavItem>}>
       <Input s={6} label="First Name" validate><Icon>account_circle</Icon></Input>
       <Input type="password" label="password" s={6}><Icon>done</Icon></Input>

       </Modal>

   
	  <NavItem href=''><Icon><Link to="/">refresh</Link></Icon></NavItem>
    

   </Navbar>
         
        
        
            
          
            
         
            
           
</div>
        )
    }
}

export default navbar;