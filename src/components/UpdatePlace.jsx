import React, { useState, useEffect } from 'react';
import {Button, Form} from 'react-bootstrap';
import {useParams} from 'react-router-dom';

let baseUrl = 'http://localhost:8000'

function UpdatePlace(props) {
  let [place, setPlace] = useState({});
  let {id} = useParams()
  console.log(props.places)
  console.log(id)
  console.log(place)
  // console.log('props' , places[id].name)
  console.log('place name', place.name)
//   console.log('id ', id)
 
  const [name, setName] = useState(place.name)
  const [location, setLocation]= useState(place.location)
  const [rating, setRating]= useState(place.rating)
  const [likes, setLikes]= useState(place.likes)
  const [comments, setComments]= useState(place.comments)
  const [imageURL, setImageURL]= useState(place.imageURL)
  const [privateUse, setPrivateUse]= useState(place.privateUse)
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
  // //Edit  
const handleUpdate = async (event) => {
  event.preventDefault()
  console.log('handleUpdate', props)
  
  
  try{
    const places ={name, location, rating, likes, comments, imageURL, privateUse}
    const response = await fetch(baseUrl + '/api/v1/places/edit/'+ id, {
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

  

  useEffect(()=>{
    getOnePlaceById(id)
  },[])
 
  

  

  
  

  

  return (
    <>
      <h1>Update Place:</h1>
      
            <h1>Name: {place.name}</h1>
            
      <Form onSubmit={handleUpdate}>
          <Form.Group className="mb-3" controlId="formname">
            <Form.Label >Edit Name:{place.name}</Form.Label>
              <Form.Control 
                type="text"
                value={name}
                name="name"
                onChange={(e)=> setName(e.target.value)}
                />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formlocation">
              <Form.Label >Edit Location:{place.location}</Form.Label>
              <Form.Control 
                type="text"
                value={location}
                name="location"
                onChange={(e)=> setLocation(e.target.value)}
                /><br/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formrating">
              <Form.Label >Edit Rating:{place.rating}</Form.Label>
              <Form.Control 
                type="number"
                value={rating}
                name="rating"
                onChange={(e)=> setRating(e.target.value)}
                /><br/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formcomments">
              <Form.Label >Edit Comments :{place.comments}</Form.Label>
              <Form.Control 
                type="textarea"
                value={comments}
                name="comments"
                onChange={(e)=> setComments(e.target.value)}
                /><br/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formimageUrl">
                <Form.Label >Change image </Form.Label>
                <Form.Select 
                  id="disabledSelect" 
                  value={imageURL}
                  onChange={(e)=> setImageURL(e.target.value)}
                  >
                  <option >Pick Restaurant or Brewery</option>
                  <option value={'https://i.imgur.com/JMRxeyd.jpeg'}>Restaurant</option>
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
                </Form.Group>
                <Button type="submit">Update Place</Button>
               
                
        </Form>
    </>
  );
}

export default UpdatePlace