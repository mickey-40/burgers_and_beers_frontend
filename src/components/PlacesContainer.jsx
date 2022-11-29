import {Card,Col, Row} from 'react-bootstrap'

import '../App.css';
import "react-multi-carousel/lib/styles.css";



import { useState } from 'react';

// let baseUrl = 'http://localhost:8000'
let baseUrl = process.env.REACT_APP_BACKEND_URL
const PlacesContainer = (props) =>{
  
  const [place, setPlace] = useState({})
  const [likes, setLikes] = useState(0)

  
  
  const handleLikes = async (place) => {
    
    setLikes(place.likes + 1)
    
    
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
        <h2 className='containerHeadline'> All Places </h2>
          <div id="scroll">
            <Row xs={2} lg={3} className="mx-auto">
            { props.places.map((place, i) => {
                return (
                  <div className='cardContainer'>
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
                        <Card.Text>
                        {props.user ? 
                          
                          <button className=''  onClick={()=>{
                            handleLikes(place)
                          }}><i className="fa-solid fa-thumbs-up"></i></button>  :'Likes: ' 
                        
                        }
                        &nbsp;&nbsp;{place.likes}
                        </Card.Text>
                        
                        
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

export default PlacesContainer