
import {useNavigate} from 'react-router-dom'
import {Button, Card} from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import '../App.css';
import "react-multi-carousel/lib/styles.css";


import { useState } from 'react';

let baseUrl = 'http://localhost:8000'

const PlacesContainer = (props) =>{
  console.log('username props ', props.username)
  // const [likes, setLikes] = useState(0)
  const [place, setPlace] = useState('')
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
  // const getOnePlaceById = (id) => {
  //   console.log(id)
  //   // fetch to the backend
  //   fetch(baseUrl + "/api/v1/places/" + id,{
  //     credentials: "include"
  //   })
  //   .then(res => {
  //     if(res.status === 200) {
  //       return res.json()
  //     } else {
  //       return []
  //     }
  //   }).then(data => {
  //     console.log(data.data)
  //     setPlace(data.data)
  //     console.log('log place', place)
  //     handleLikes(place)
  //   })
  // }
  
  const handleLikes = async (id, likes) => {
    console.log('handleLikes function data '+ id + ' '+ likes)
    likes = likes + 1
    console.log('likes ' + likes)
    // console.log('place likes', place.likes)
  
    // setLikes(place.likes+1)

    try{
        const places = {likes}
      const response = await fetch(baseUrl + '/api/v1/places/edit/'+ id, {
        method: 'PUT',
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
                        <button className='btn btn-outline-primary p-1'  onClick={()=>{
                            handleLikes(place.id, place.likes)
                          }}>
                            Like: 
                        </button> {place.likes} 
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