import React,{ Component } from "react";
import {Navbar} from "react-materialize"



class navbar extends Component {
    render () {
        return (
            <div>
            <Navbar brand='Pantry' right>
              <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
               <ul class="right hide-on-med-and-down">
                <li><a class="waves-effect waves-light btn">Log In<i class="material-icons right">arrow_right</i></a></li>
               </ul>
                <ul class="side-nav" id="mobile-demo">
                <li><a class="waves-effect waves-light btn">Log In<i class="material-icons right">arrow_right</i></a></li>
            </ul>
             
            </Navbar>

            
           
                    
           </div>
        )
    }
}

export default navbar;