import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import '../App.css'



export default function NavBar(props) {
    const navigate = useNavigate()
    
    const [capName, setCapName]= useState('')
    const capitalName =()=>{
        if(props.user !== false){
            setCapName(props.user.username.toUpperCase())
        }
        
    }
    useEffect(()=>{
        capitalName() 
    })
   
    return(
        <div className='topnavbar'>
            <h1 id='frontLogo'>Burgers and Beers</h1>
            <nav className='topnav'>
                
                    <button  className='topnav' type="button" onClick={()=>{navigate('/')}}>Home</button>
                    
                    <button className="split" type="button" onClick={()=>{navigate('/places')}}>ALL PLACES</button>
                    
                    <button className={props.user ? "hidden": "split"} onClick={()=>{navigate('/login')}}type="button">LOGIN</button>

                    <button className={props.user ? "split":"hidden" } type="button" onClick={()=>{navigate('/places/private')}}>{capName}'S PLACES</button>
                    
                    <button onClick={props.logoutUser} className={props.user ? "split":"hidden" } type="button">LOGOUT</button>
                    
            
            </nav>
        </div>
    )
}