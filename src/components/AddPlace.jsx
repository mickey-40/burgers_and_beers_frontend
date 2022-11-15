import React, { useState } from "react"
// import {Button, Col, Form, Row} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

let baseURL = 'http://localhost:8000'

export default function AddPlace(props) {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [location, setLocation]= useState('')
  const [rating, setRating]= useState(0)
  const [likes, setLikes]= useState('0')
  const [comments, setComments]= useState('')
  const [imageURL, setImageURL]= useState('')
  const [privateUse, setPrivateUse]= useState(false)



  
  const handleSubmit = async (event) => {
    console.log(props)
    event.preventDefault()
    
    try{
      const places ={name,location,rating,likes,comments,imageURL,privateUse}
      const response = await fetch(baseURL + '/api/v1/places/', {
        method: 'POST',
        credentials: "include",
        body: JSON.stringify(places),
        headers: {
          'Content-Type': 'application/json'
        }
    })
      console.log(response)
      window.location = "/places"
    } catch (err){
      console.log('Error', err)
    }
    
  }
  //   .then (res => res.json())
  //     .then (resJson => {
  //      console.log('AddPlace - resJson', resJson)
       
        
        
        
        
  //   }).catch (error => console.error({'Error': error}))
    
  //   navigate('/places')
   
  // }
  
  return (
    <>
      <h1>Add A New Place:</h1>
      <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name of Place</label>
            <input 
              type="text"
              id="name"
              name="name"
              onChange={(e)=> setName(e.target.value)}
              /><br/>

              <label htmlFor="location">Name of location</label>
              <input 
                type="text"
                id="location"
                name="location"
                onChange={(e)=> setLocation(e.target.value)}
                value={location}
                /><br/>

              <label htmlFor="rating">Rating 1-5</label>
              <input 
                type="number"
                id="rating"
                name="rating"
                onChange={(e)=> setRating(e.target.value)}
                /><br/>

              <label htmlFor="comments">Comments</label>
              <input 
                type="textarea"
                id="comments"
                name="comments"
                onChange={(e)=> setComments(e.target.value)}
                /><br/>

                <label htmlFor="imageURL">Restaurant or Brewery </label>
                <select 
                  value={imageURL} 
                  onChange={(e)=> setImageURL(e.target.value)} 
                  >
                  <option value={'https://i.imgur.com/ehvIDCTl.jpg'}>Restaurant</option>
                  <option value={'https://i.imgur.com/WmCiEbS.jpeg'}>Brewery</option>
                  
                </select><br/>

                <label htmlFor="private">Set to Private: </label>
                <input 
                value={privateUse} type="checkbox" 
                onChange={(e)=> setPrivateUse(e.target.value)}/><br/>
                <input type="submit" id="submit"  value="Add the Place"/>
        </form>
    </>
  );
  }


