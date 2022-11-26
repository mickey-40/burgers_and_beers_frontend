import React from 'react';
import {useNavigate} from 'react-router-dom'
import '../App.css'



export default function NavBar(props) {
    const navigate = useNavigate()
    console.log('props ', props)
    console.log('props.user ', props.user)
   
    return(
        <div className='topnavbar'>
            <h1>Burgers and Beers</h1>
            <nav className='topnav'>
                
                    <button  className='topnav' type="button" onClick={()=>{navigate('/')}}>Home</button>
                    
                    <button className="split" type="button" onClick={()=>{navigate('/places')}}>SEE ALL PLACES</button>
                    
                    <button className={props.user ? "hidden": "split"} onClick={()=>{navigate('/login')}}type="button">LOGIN</button>

                    <button className={props.user ? "split":"hidden" } type="button" onClick={()=>{navigate('/places/private')}}>SEE MY PLACES</button>
                    
                    <button onClick={props.logoutUser} class={props.user ? "split":"hidden" } type="button">LOGOUT</button>
                    
            
            </nav>
        </div>
    )
}