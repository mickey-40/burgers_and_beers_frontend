import React, { useState } from 'react';
import {Button, Form, Modal} from 'react-bootstrap';

let baseURL = 'http://localhost:8000'

function UpdatePlace(props) {
  // console.log('Update props', props.place.name)
  // const [name, setName] = useState(props.place.name)
  // const [location, setLocation]= useState('')
  // const [rating, setRating]= useState(0)
  // const [likes, setLikes]= useState('0')
  // const [comments, setComments]= useState('')
  // const [imageURL, setImageURL]= useState('')
  // const [privateUse, setPrivateUse]= useState(false)
  
 
  //Edit  
  // const handleUpdate = async (id) => {
  //   console.log("handleUpdate call", id)
    
    
  //   try{
  //     const places ={name}
  //     const response = await fetch(baseURL + '/api/v1/places/' + id, {
  //       method: 'PUT',
  //       credentials: "include",
  //       body: JSON.stringify(places),
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //   })
  //     console.log(response)
  //     window.location = "/places/"+id
  //   } catch (err){
  //     console.log('Error', err)
  //   }
    
  // }

  

  return (
    <>
      <h1>Update Place:</h1>
      <Form >
          <Form.Group className="mb-3" controlId="formname">
            <Form.Label >Name of Place</Form.Label>
              <Form.Control 
                type="text"
                
                name="name"
               
                /><br/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formlocation">
              <Form.Label >Name of location</Form.Label>
              <Form.Control 
                type="text"
                
                name="location"
                
                /><br/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formrating">
              <Form.Label >Rating 1-5</Form.Label>
              <Form.Control 
                type="number"
                
                name="rating"
                
                /><br/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formcomments">
              <Form.Label >Comments</Form.Label>
              <Form.Control 
                type="textarea"
                
                name="comments"
                
                /><br/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formimageUrl">
                <Form.Label >Restaurant or Brewery </Form.Label>
                <Form.Select 
                  id="disabledSelect" 
                  
                  >
                  <option value={'https://i.imgur.com/ehvIDCTl.jpg'}>Restaurant</option>
                  <option value={'https://i.imgur.com/WmCiEbS.jpeg'}>Brewery</option>
                  
                </Form.Select><br/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check 
                  label='Private'
                  type="checkbox" 
                 /><br/>
                </Form.Group>
                <Button type="submit">Add the Place</Button>
                
        </Form>
    </>
  );
}

export default UpdatePlace