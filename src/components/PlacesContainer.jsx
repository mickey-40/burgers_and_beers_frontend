
import {useNavigate} from 'react-router-dom'
import {Button, Card} from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import '../App.css';
import "react-multi-carousel/lib/styles.css";

import '../App.css';
import { useState } from 'react';

let baseURL = 'http://localhost:8000'

const PlacesContainer = (props) =>{
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const [likes,setLikes]=useState(0)
  const navigate = useNavigate()
  const handleLikes = async (place) => {
    
    console.log(place)
    console.log(place.id)
    
    
    try{
      
      const response = await fetch(baseURL + '/api/v1/places/edit/'+ place.id, {
        method: 'PUT',
        credentials: 'include',
        body: JSON.stringify(setLikes(likes+1)),
        headers: {
          'Content-Type': 'application/json'
        }
    })
      console.log(response)
      
    } catch (err){
      console.log('Error', err)
    }
    
  }

    return (
      <>
        <h2> Places List </h2>
        
        <Carousel responsive={responsive}>
        
            { props.places.map((place, i) => {
                return (
                  <div className='cardContainer'>
                    <Card className='cardDiv' key={place.id} style={{ width: '18rem'}}>
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
                        <Card.Text>
                          Likes: {likes} 
                        </Card.Text>
                        <Button variant="primary" onClick={()=>{navigate(`${place.id}`)}}>Show Place</Button>
                        <Button variant='success' onClick={()=>handleLikes(place)}>Like</Button>
                      </Card.Body>
                    </Card>
                  </div>
                  
                )
              })
            }
          
        </Carousel>
      </>
    )
}

export default PlacesContainer