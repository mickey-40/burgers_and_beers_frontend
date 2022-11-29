import React, { useState } from "react"
import {Button, Form, Col, Row} from 'react-bootstrap'
import '../App.css'

import 'bootstrap/dist/css/bootstrap.min.css';


let baseUrl = 'http://localhost:8000'
// let baseUrl = process.env.REACT_APP_BACKEND_URL
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
      const response = await fetch(baseUrl + '/api/v1/places/', {
        method: 'POST',
        credentials: "include",
        body: JSON.stringify(places),
        headers: {
          'Content-Type': 'application/json'
        }
    })
      console.log(response)
      window.location = "/places/private"
    } catch (err){
      console.log('Error', err)
    }
    
  }
 
  
  return (
    <>
      <h1>Add A New Place:</h1>
      <Form  className="form" onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mt-1 w-100 mx-auto square border-bottom border-dark g-2" controlId="formname">
            <Form.Label as={Col} className="p-3">Name of Place</Form.Label>
            <Col>
              <Form.Control 
                type="text"
                className=""
                name="name"
                onChange={(e)=> setName(e.target.value)}
                /><br/>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mt-1 w-100 mx-auto square border-bottom border-dark g-2" controlId="formlocation">
              <Form.Label as={Col} className="p-3">Name of location</Form.Label>
              <Col>
                <Form.Control 
                  type="text"
                  
                  name="location"
                  onChange={(e)=> setLocation(e.target.value)}
                  value={location}
                  /><br/>
              </Col>  
          </Form.Group>
          <Form.Group as={Row} className="mt-1 w-100 mx-auto square border-bottom border-dark g-2" controlId="formrating">
              <Form.Label as={Col} className="p-3">Rating 1-5</Form.Label>
              <Col>
                <Form.Select 
                  className="w-25 mx-auto text-center"
                  onChange={(e)=> setRating(e.target.value)}
                  >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mt-1 pb-2 w-100 mx-auto square border-bottom border-dark g-2" controlId="formcomments">
              <Form.Label >Comments</Form.Label>
              <Form.Control 
                as="textarea"
                className="w-75 mx-auto"
                name="comments"
                onChange={(e)=> setComments(e.target.value)}
                /><br/>
            </Form.Group>
            <Form.Group as={Row} className="mt-1 w-100 mx-auto square border-bottom border-dark g-2" controlId="formimageUrl">
                <Form.Label as={Col}>Restaurant or Brewery </Form.Label>
                <Col>
                  <Form.Select 
                    
                    className="w-75"
                    defaultValue='Restaurant' 
                    value={imageURL} 
                    onChange={(e)=> setImageURL(e.target.value)} >
                    <option >Pick Restaurant or Brewery</option>
                    <option value={'https://i.imgur.com/JMRxeyd.jpeg'}>Restaurant</option>
                    <option value={'https://i.imgur.com/WmCiEbS.jpeg'}>Brewery</option>
                    
                  </Form.Select><br/>
                </Col>
              </Form.Group>
                <Button className=""type="submit">Add the Place</Button>
                
        </Form>
    </>
  );
  }


