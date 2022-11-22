import React from 'react';
import {NavLink, Link} from 'react-router-dom'
import '../App.css'



export default function NavBar(props) {

    console.log('props ', props)
    console.log('props.user ', props.user)
   
    return(
        <>
            <h1 className='text-center bg-light'>Burgers and Beers</h1>
            <nav class="navbar navbar-dark bg-light">
                
                    <button class="btn btn-outline-success" type="button"><Link to="/">Burger and Beers</Link></button>
                    
                    <button class="btn btn-outline-success" type="button"><NavLink to="places">SEE ALL PLACES</NavLink></button>
                    
                    <button class={props.user ? "hidden": "btn btn-outline-success"} type="button"><NavLink to="login">LOGIN</NavLink></button>

                    <button class={props.user ? "btn btn-outline-success":"hidden" } type="button"><NavLink to="places/private">SEE MY PLACES</NavLink></button>
                    
                    <button onClick={props.logoutUser} class={props.user ? "btn btn-outline-success":"hidden" } type="button">LOGOUT</button>
                    
            
            </nav>
        </>
    )
}