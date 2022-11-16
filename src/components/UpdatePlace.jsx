import React, { useState } from 'react';
import {Button, Form, Modal} from 'react-bootstrap';

let baseURL = 'http://localhost:8000'

function UpdatePlace(place) {
  console.log('Update props', place)
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [places, setPlaces] = useState(place.place)
  console.log('places ', places)
  const [name, setName] = useState(places.name)
  const [location, setLocation]= useState('')
  const [rating, setRating]= useState('')
  const [likes, setLikes]= useState('')
  const [comments, setComments]= useState()
  const [imageURL, setImageURL]= useState('')
  const [privateUse, setPrivateUse]= useState('')

  const handleSubmit = async (event) => {
    console.log(place)
    event.preventDefault()
    
    try{
      const places ={name,location,rating,likes,comments,imageURL,privateUse}
      const response = await fetch(baseURL + '/api/v1/places/edit/'+ place.place.id, {
        method: 'PUT',
        credentials: "include",
        body: JSON.stringify(places),
        headers: {
          'Content-Type': 'application/json'
        }
    })
      console.log(response)
     window.location = "/"+places.id
    } catch (err){
      console.log('Error', err)
    }
    
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Update Place
      </Button>

      <Modal show={show} onHide={handleClose} id={`id${place.place.id}`}>
        <Modal.Header closeButton>
          <Modal.Title>Update Place</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form >
          <Form.Group className="mb-3" controlId="name">
            <Form.Label >Name of Place</Form.Label>
              <Form.Control 
                type="text"
                
                value={name}
                name="name"
                onChange={(e)=> setName(e.target.value)}
                /><br/>
          </Form.Group>
          <Form.Group className="mb-3" >
              <Form.Label htmlFor='location'>Name of location</Form.Label>
              <Form.Control 
                type="text"
                name="location"
                onChange={(e)=> setLocation(e.target.value)}
                value={place.place.location}
                /><br/>
          </Form.Group>
          <Form.Group className="mb-3" >
              <Form.Label htmlFor='rating'>Rating 1-5</Form.Label>
              <Form.Control 
                type="number"
                value={place.place.rating}
                name="rating"
                onChange={(e)=> setRating(e.target.value)}
                /><br/>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label htmlFor='likes'>Likes</Form.Label>
              <Form.Control 
                type="number"
                value={place.place.likes}
                name="likes"
                onChange={(e)=> setLikes(e.target.value)}
                /><br/>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label htmlFor='name'>Comments</Form.Label>
              <Form.Control 
                type="textarea"
                value={place.place.comments}
                name="comments"
                onChange={(e)=> setComments(e.target.value)}
                /><br/>
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label htmlFor='imageURL'>Restaurant or Brewery </Form.Label>
                <Form.Select 
                  id="disabledSelect" 
                  value={place.place.imageURL} 
                  onChange={(e)=> setImageURL(e.target.value)} 
                  >
                  <option value={'https://i.imgur.com/ehvIDCTl.jpg'}>Restaurant</option>
                  <option value={'https://i.imgur.com/WmCiEbS.jpeg'}>Brewery</option>
                  
                </Form.Select><br/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check 
                  value={place.place.privateUse} 
                  label='Private'
                  type="checkbox" 
                  onChange={(e)=> setPrivateUse(e.target.value)}/><br/>
                </Form.Group>
                
                
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdatePlace