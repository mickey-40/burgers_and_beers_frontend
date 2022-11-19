import React, { useState } from "react"
import {Button, Form} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';


let baseURL = 'http://localhost:8000'

export default function AddPlace(props) {
  
  
  const [name, setName] = useState('')
  const [location, setLocation]= useState('')
  const [rating, setRating]= useState(0)
  const [likes, setLikes]= useState(0)
  const [comments, setComments]= useState('')
  const [imageURL, setImageURL]= useState('')
  



  
  const handleSubmit = async (event) => {
    console.log(props)
    event.preventDefault()
    
    try{
      const places ={name,location,rating,likes,comments,imageURL}
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
 
  
  return (
    <>
      <h1>Add A New Place:</h1>
      <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formname">
            <Form.Label >Name of Place</Form.Label>
              <Form.Control 
                type="text"
                
                name="name"
                onChange={(e)=> setName(e.target.value)}
                /><br/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formlocation">
              <Form.Label >Name of location</Form.Label>
              <Form.Control 
                type="text"
                
                name="location"
                onChange={(e)=> setLocation(e.target.value)}
                value={location}
                /><br/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formrating">
              <Form.Label >Rating 1-5</Form.Label>
              <Form.Control 
                type="number"
                
                name="rating"
                onChange={(e)=> setRating(e.target.value)}
                /><br/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formcomments">
              <Form.Label >Comments</Form.Label>
              <Form.Control 
                type="textarea"
                
                name="comments"
                onChange={(e)=> setComments(e.target.value)}
                /><br/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formimageUrl">
                <Form.Label >Restaurant or Brewery </Form.Label>
                <Form.Select 
                  defaultValue='Restaurant' 
                  value={imageURL} 
                  onChange={(e)=> setImageURL(e.target.value)} 
                  >
                  <option >Pick Restaurant or Brewery</option>
                  <option value={'https://i.imgur.com/JMRxeyd.jpeg'}>Restaurant</option>
                  <option value={'https://i.imgur.com/WmCiEbS.jpeg'}>Brewery</option>
                  
                </Form.Select><br/>
              </Form.Group>
                <Button type="submit">Add the Place</Button>
                
        </Form>
    </>
  );
  }


