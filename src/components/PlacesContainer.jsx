import {Card} from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import '../App.css';
import "react-multi-carousel/lib/styles.css";


import { useState } from 'react';

let baseUrl = 'http://localhost:8000'

const PlacesContainer = (props) =>{
  console.log('username props ', props)
  const [place, setPlace] = useState({})
  const [likes, setLikes] = useState(0)
  
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
  
  
  const handleLikes = async (place) => {
    console.log('place ',place)
    setLikes(place.likes + 1)
    console.log(likes)
    
    try{
       
      const response = await fetch(baseUrl + '/api/v1/places/edit/'+ place.id, {
        method: 'PUT',
        credentials: "include",
        body: JSON.stringify({likes: + place.likes + 1}),
        headers: {
          'Content-Type': 'application/json'
        }
       
    })
      const results = await response.json()

      console.log('results ', results)
      setPlace(results)
      window.location.reload()

      // props.setPlaces(results)
      // window.location = "/places"
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
                        {props.user ? 

                          <button className='btn btn-outline-primary p-1'  onClick={()=>{
                            handleLikes(place)
                          }}>
                            Like: 
                        </button>  :'Likes: ' 
                        
                        }
                        {place.likes}
                        </Card.Text>
                        
                        
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