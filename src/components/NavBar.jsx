import React from 'react';
import {NavLink, Link} from 'react-router-dom'
import '../App.css'



export default function NavBar(props) {

    console.log(props)
   
    return(
        <>
            <h1 className='text-center bg-light'>Burgers and Beers</h1>
            <nav class="navbar navbar-dark bg-light">
                
                    <button class="btn btn-outline-success" type="button"><Link to="/">Burger and Beers</Link></button>
                    
                    <button class="btn btn-sm btn-outline-success" type="button"><NavLink to="places">SEE ALL PLACES</NavLink></button>

                    {/* <button class={props.isLoggedIn ? "hidden":"btn btn-sm btn-outline-success"} type="button"><NavLink to="register">REGISTER</NavLink></button> */}
                    
                    <button class="btn btn-sm btn-outline-success" type="button"><NavLink to="login">LOGIN</NavLink></button>

                    <button class="btn btn-sm btn-outline-success" type="button"><NavLink to="places/private">SEE MY PLACES</NavLink></button>
                    
                    <button onClick={props.logoutUser} class="btn btn-sm btn-outline-success"  type="button">LOGOUT</button>
                    
            
            </nav>
        </>
    )
}