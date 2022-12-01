import React, { useState, useEffect } from 'react';
import {Button, Form, Collapse, Row} from 'react-bootstrap';
import {useNavigate, useParams} from 'react-router-dom';
import '../App.css'

// let baseUrl = 'http://localhost:8000'
// require('dotenv').config()
let baseUrl = process.env.REACT_APP_BACKEND_URL

function UpdatePlace(props) {
  let [place, setPlace] = useState({});
  const [openName, setOpenName] = useState(false);
  const [openLocation, setOpenLocation]= useState(false)
  
  
  const [openComments, setOpenComments] = useState(false)
  let {id} = useParams()
  const navigate = useNavigate()
  console.log(props.places)
  console.log(id)
  console.log(place)
  // console.log('props' , places[id].name)
  console.log('place name', place.name)
//   console.log('id ', id)
 
  const [name, setName] = useState(place.name)
  const [location, setLocation]= useState(place.location)
  const [rating, setRating]= useState(place.rating)
  
  const [comments, setComments]= useState(place.comments)
  const [imageURL, setImageURL]= useState(place.imageURL)
  
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
  
  
  
  try{
    const places ={name, location, rating, comments, imageURL}
    const response = await fetch(baseUrl + '/api/v1/places/edit/'+ id, {
      method: 'PUT',
      credentials: "include",
      body: JSON.stringify(places),
      headers: {
        'Content-Type': 'application/json'
      }
  })
    console.log(response)
    window.location.reload(navigate("../places/"+id)) 
    
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
            
      <Form className="form" onSubmit={handleUpdate}>
          <Form.Group as={Row} className="mt-1 w-100 mx-auto square border-bottom border-dark g-2" controlId="formname">
            <Form.Label 
              
              onClick={() => setOpenName(!openName)}
              aria-controls="example-collapse-text"
              aria-expanded={openName}>
                Edit Name:{place.name}
            </Form.Label>
           
              <Collapse  in={openName}>
                <Form.Control 
                  type="text"
                  value={name}
                  name="name"
                  className="w-75 mx-auto"
                  onChange={(e)=> setName(e.target.value)}
                  />
              </Collapse>
           
          </Form.Group>
          <Form.Group as={Row} className="mt-1 w-100 mx-auto square border-bottom border-dark g-2" controlId="formlocation">
              <Form.Label 
                onClick={() => setOpenLocation(!openLocation)}
                aria-controls="example-collapse-text"
                aria-expanded={openLocation}>
                Edit Location:{place.location}
              </Form.Label>
              <Collapse  in={openLocation}>
                <Form.Control 
                  type="text"
                  value={location}
                  name="location"
                  className="w-25 mx-auto"
                  onChange={(e)=> setLocation(e.target.value)}
                  />
              </Collapse>
          </Form.Group>
          <Form.Group as={Row} className="mt-1 w-100 mx-auto square border-bottom border-dark g-2" controlId="formrating">
              <Form.Label className=''>
                  Edit Rating:{place.rating}
                </Form.Label>
              
              <Form.Select 
                
                value={rating}
                
                className="w-25 mx-auto text-center"
                onChange={(e)=> setRating(e.target.value)}
                >
               
                 
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  
             </Form.Select>
            </Form.Group>
            <Form.Group as={Row} className="mt-1 w-100 mx-auto square border-bottom border-dark g-2" controlId="formimageUrl">
                <Form.Label>
                  Change image from {place.imageURL === 'https://i.imgur.com/JMRxeyd.jpeg' && <span>Resturant</span>}
                  {place.imageURL === 'https://i.imgur.com/WmCiEbS.jpeg' && <span>Brewery</span>}
                </Form.Label>
                <Form.Select 
                  id="disabledSelect" 
                  value={imageURL}
                  onChange={(e)=> setImageURL(e.target.value)}
                  className="w-25 mx-auto"
                  >
                    <option >Pick Restaurant or Brewery</option>
                    <option value={'https://i.imgur.com/JMRxeyd.jpeg'}>Restaurant</option>
                    <option value={'https://i.imgur.com/WmCiEbS.jpeg'}>Brewery</option>
                  
                </Form.Select><br/>
              </Form.Group>
              <Form.Group as={Row} className="mt-1 p-2 w-100 mx-auto square border-bottom border-dark g-2" controlId="formcomments">
              <Form.Label onClick={() => setOpenComments(!openComments)}
                aria-controls="example-collapse-text"
                aria-expanded={openComments}>
                  Edit Comments :{place.comments}
              </Form.Label>
              <Collapse  in={openComments}>
              <Form.Control 
                as="textarea"
                value={comments}
                name="comments"
                className="w-75 mx-auto"
                onChange={(e)=> setComments(e.target.value)}
                />
              </Collapse>
            </Form.Group>
                <Button className="mt-3" type="submit">Update Place</Button>
               
                
        </Form>
    </>
  );
}

export default UpdatePlace