import React, {useState, useEffect} from 'react';
import {useNavigate, Link} from "react-router-dom"
import UpdatePlace from './UpdatePlace';



import {useParams} from 'react-router-dom';

let baseUrl = 'http://localhost:8000'
const PlaceView = (props) => {
    let [place, setPlace] = useState({});
    let {id} = useParams()
    // const navigate = useNavigate()
    console.log('place - ', place)
    console.log('id = ', id)

    const getOnePlaceById = (id) => {
        // fetch to the backend
        fetch(baseUrl + "/api/v1/places/" + id,{
          credentials: "include"
        })
        .then(res => {
          if(res.status === 200) {
            return res.json()
          } else {
            return []
          }
        }).then(data => {
          console.log(data.data)
          setPlace(data.data)
        })
      }
      
    
      

      useEffect(()=>{
        getOnePlaceById(id)
      },[])

    return(
        <>
            <img src={place.imageURL} alt=''></img>
            <h1>Name: {place.name}</h1>
            <h2>Location: {place.location}</h2>
            <h2>Rating: {place.rating}</h2>
            <h2>Likes: {place.likes}</h2>
            <h2>Comments: {place.comments}</h2>
            
            <h2>Private: {place.private}</h2>
            <button onClick={()=>{props.deletePlace(place.id)}}>Delete Place</button>
            <button><Link to={`/places/edit/${place.id}`}>Update</Link></button>
            
            
        </>
    )
}

export default PlaceView