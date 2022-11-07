import React, {useState, useEffect} from 'react';

import {useParams} from 'react-router-dom';


const PlaceView = (props) => {
    let [place, setPlace] = useState({});
    let {id} = useParams()
    
    let baseUrl = 'http://localhost:8000'

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
      })

    return(
        <>
            
            <h1>{place.name}</h1>
            
        </>
    )
}

export default PlaceView