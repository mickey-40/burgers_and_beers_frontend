import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'

import {useParams} from 'react-router-dom';

let baseUrl = 'http://localhost:8000'
const PlaceView = (props) => {
    let [place, setPlace] = useState({});
    let {id} = useParams()
    let navigate = useNavigate()
    

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
      
      const deletePlace = async(id) => {
        console.log(id)
       
        try {
          const deletePlace = await fetch(baseUrl + '/api/v1/places/' + id,{
            method: "Delete",
            credentials: "include"
            
          })
            console.log(deletePlace)
            // window.location = '/places'
           
          } catch (err){
          console.log('Error ', err)
        }
        // navigate('/places')
        
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
            <button onClick={()=>{deletePlace(place.id)}}>Delete Place</button>
        </>
    )
}

export default PlaceView