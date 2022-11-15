import React from 'react';
import {NavLink, Link} from 'react-router-dom'

export default function NavBar() {

    
   
    return(
        <nav class="navbar navbar-dark bg-dark">
            
                <button class="btn btn-outline-success" type="button"><Link to="/">Burger and Beers</Link></button>
                {/* NavLink comes with a bool called 'isActive'. True when clicked, false when not clicked */}

                <button class="btn btn-sm btn-outline-success" type="button"><NavLink to="register">REGISTER</NavLink></button>
                
                <button class="btn btn-sm btn-outline-success" type="button"><NavLink to="login">LOGIN</NavLink></button>
              
                <button class="btn btn-sm btn-outline-success" type="button"><NavLink to="places">SEE ALL PLACES</NavLink></button>
                
                <button class="btn btn-sm btn-outline-success" type="button"><NavLink to="logout">LOGOUT</NavLink></button>
                
           
        </nav>
    )
}