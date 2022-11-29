import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';






let baseUrl = 'http://localhost:8000'
const PlaceView = (props) => {
    const navigate = useNavigate()
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
          <div className="container-fluid bg-info">
            
            <div className='row'>
              <div className='col'>
                <h1>Name: {place.name}</h1>
                <h2>Location: {place.location}</h2>
                <h2>Rating: {place.rating}</h2>
                <h2>Likes: {place.likes}</h2>
                <h2>Comments: {place.comments}</h2>
                <div>
                  <button className='m-3 btn btn-primary' onClick={()=>{props.deletePlace(place.id)}}><i className="fa-sharp fa-solid fa-trash"></i></button>
                  <button className='m-3 btn btn-primary' onClick={()=>{navigate('/places/edit/'+place.id)}}><i className="fa-sharp fa-solid fa-pen-to-square"></i></button>
                </div>
              </div>
              <div className='col'>
                <img src='https://i.imgur.com/KwMng4C.png' className='rounded mt-2' width={'60%'} hieght={'20%'} alt=""></img>
              </div>
            </div>
          </div>
            
        </>
    )
}

export default PlaceView