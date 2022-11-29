import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {Button, Card, Row, Col} from 'react-bootstrap'

import '../App.css';





const UserPlaces = (props) =>{
  
  const [capFirstName, setCapFirstName]= useState('')
    const capitalFirstLetterName =()=>{
      if(props.user !== false){
            setCapFirstName(props.user.username.charAt(0).toUpperCase()+ props.user.username.slice(1))
        
    }
  }
    useEffect(()=>{
        capitalFirstLetterName() 
    })
    const navigate = useNavigate()

    return (
      <>
        <h2> {capFirstName}'s Places</h2>
        <Button variant='primary' onClick={()=>{navigate('../places/add')}}><i className="fa-solid fa-plus"></i></Button>
        <div id="scroll">
          <Row xs={2} lg={3} className="mx-auto">
            { props.myPlaces.map((place, i) => {
                return (
                  <div onClick={()=>{navigate(`/places/${place.id}`)}} className='cardContainer'>
                    <Card as={Col} className='cardDiv' key={place.id} style={{ width: '18rem'}}>
                      <Card.Img variant="top" src={place.imageURL} style={{ height: '160px'}}/>
                      <Card.Body>
                        <Card.Title>{ place.name }</Card.Title>
                        <Card.Text>
                          Location: 
                        </Card.Text>
                        <Card.Text>
                          {place.location}
                        </Card.Text>
                        <Card.Text>
                        Comments: { place.comments }
                        </Card.Text>
                        {/* <Button variant="primary" onClick={()=>{navigate(`/places/${place.id}`)}}>Show Place</Button> */}
                        {/* <Button variant="primary" onClick={()=>{navigate(`edit/${place.id}`)}}>Update Place</Button> */}
                      </Card.Body>
                    </Card>
                  </div>
                  
                )
              })
            }
          </Row>
        </div>
      </>
    )
}

export default UserPlaces