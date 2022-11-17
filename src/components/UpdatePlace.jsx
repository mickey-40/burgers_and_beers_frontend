import React, { useState, useEffect } from 'react';
import {Button, Form} from 'react-bootstrap';
import {useParams} from 'react-router-dom';

let baseURL = 'http://localhost:8000'

function UpdatePlace(props) {
  
  let {id} = useParams()
  console.log(props)
  console.log(id)
  // console.log('props' , places[id].name)
  // console.log('place name', place.name)
//   console.log('id ', id)
  
  const [name, setName] = useState(props.places[id].name)
//   const [location, setLocation]= useState(props.places[id].location)
//   const [rating, setRating]= useState(props.places[id].rating)
//   const [likes, setLikes]= useState(props.places[id].likes)
//   const [comments, setComments]= useState(props.places[id].comments)
//   const [imageURL, setImageURL]= useState(props.places[id].imageURL)
//   const [privateUse, setPrivateUse]= useState(props.places[id].privateUse)

 
  
// //Edit  
const handleUpdate = async (event) => {
  event.preventDefault()
  console.log('handleUpdate', props)
  
  
  try{
    const places ={name}
    const response = await fetch(baseURL + '/api/v1/places/edit/'+ id, {
      method: 'PUT',
      credentials: "include",
      body: JSON.stringify(places),
      headers: {
        'Content-Type': 'application/json'
      }
  })
    console.log(response)
    window.location = "/places/" + id
  } catch (err){
    console.log('Error', err)
  }
  
}
  

  
  

  

  return (
    <>
      <h1>Update Place:</h1>
      
            <h1>Name: {name}</h1>
            
      <Form onSubmit={handleUpdate}>
          <Form.Group className="mb-3" controlId="formname">
            <Form.Label >Name of Place</Form.Label>
              <Form.Control 
                type="text"
                value={name}
                name="name"
                onChange={(e)=> setName(e.target.value)}
                />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formlocation">
              <Form.Label >Name of location</Form.Label>
              <Form.Control 
                type="text"
                value={location}
                name="location"
                onChange={(e)=> setLocation(e.target.value)}
                /><br/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formrating">
              <Form.Label >Rating 1-5</Form.Label>
              <Form.Control 
                type="number"
                value={rating}
                name="rating"
                onChange={(e)=> setRating(e.target.value)}
                /><br/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formcomments">
              <Form.Label >Comments</Form.Label>
              <Form.Control 
                type="textarea"
                value={comments}
                name="comments"
                onChange={(e)=> setComments(e.target.value)}
                /><br/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formimageUrl">
                <Form.Label >Restaurant or Brewery </Form.Label>
                <Form.Select 
                  id="disabledSelect" 
                  value={imageURL}
                  onChange={(e)=> setImageURL(e.target.value)}
                  >
                  <option value={'https://i.imgur.com/ehvIDCTl.jpeg'}>Restaurant</option>
                  <option value={'https://i.imgur.com/WmCiEbS.jpeg'}>Brewery</option>
                  
                </Form.Select><br/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check 
                  label='Private'
                  type="checkbox" 
                  value={privateUse}
                  onChange={(e)=> setPrivateUse(e.target.value)}
                 /><br/>
                </Form.Group> */}
                <Button type="submit">Update Place</Button>
               
                
        </Form>
    </>
  );
}

export default UpdatePlace