import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom"
import Geocode from "react-geocode";
import Map from './Map'


import 'bootstrap/dist/css/bootstrap.min.css';




// require('dotenv').config()
let baseUrl = process.env.REACT_APP_BACKEND_URL
// let baseUrl = 'http://localhost:8000'
const PlaceView = (props) => {
  

    const navigate = useNavigate()
    let [place, setPlace] = useState({});
    let {id} = useParams()
    // console.log('place', place)
    let [latitude, setLatitude] = useState()
    let [longitude, setLongitude] = useState()
    let [mapPlace, setMapPlace] = useState('')
    // console.log('mapPlace', mapPlace)
    // console.log('latitude', latitude)
    // console.log('longitude', longitude)
    // const navigate = useNavigate()
    // console.log('place - ', place)
    // console.log('id = ', id)

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
          // console.log('data',data.data.location)
          setPlace(data.data)
          setMapPlace(data.data.location)
          
        })
      }
    const MapLocation = (location) => {
      // console.log('MapLocation prop', location)
      Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);
      Geocode.setLocationType("ROOFTOP");
      Geocode.enableDebug();

      Geocode.fromAddress(location).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          // console.log('lat,lng', lat, lng);
          setLatitude(Number(lat))
          setLongitude(Number(lng))
          
        },
        (error) => {
          console.error(error);
        }
      );
    }
    
     MapLocation(mapPlace) 

      useEffect(()=>{
        getOnePlaceById(id)
        MapLocation(mapPlace)
      },[id,mapPlace])
      // useEffect(()=>{
      //   MapLocation(mapPlace)
      // },[])

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
                  <button className='m-3 btn btn-primary' onClick={()=>{props.deletePlace(place.id)}}><i className="fa-sharp fa-solid fa-trash"></i> Delete</button>
                  <button className='m-3 btn btn-primary' onClick={()=>{navigate('/places/edit/'+place.id)}}><i className="fa-sharp fa-solid fa-pen-to-square"></i> Edit</button>
                </div>
              </div>
              <div className='col .mapContainer'>
                < Map latitude={latitude} longitude={longitude}/>
                {/* <img src='https://i.imgur.com/3inQwHg.jpeg' className='rounded mt-2' width={'60%'} hieght={'20%'} alt=""></img> */}
              </div>
            </div>
          </div>
            
        </>
    )
}

export default PlaceView