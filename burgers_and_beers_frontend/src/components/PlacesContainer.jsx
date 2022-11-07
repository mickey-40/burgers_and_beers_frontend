import {useNavigate} from 'react-router-dom'
import {Button, Card} from 'react-bootstrap'

const PlacesContainer = (props) =>{

    const navigate = useNavigate()

    return (
      <>
        <h2> Places List </h2>
        
            { props.places.map((place, i) => {
                return (
                  <Card key={place.id} style={{ width: '18rem'}}>
                    <Card.Img variant="top" src="place.image" />
                    <Card.Body>
                      <Card.Title>{ place.name }</Card.Title>
                      <Card.Text>
                        {place.location}
                      </Card.Text>
                      <Card.Text>
                      { place.comments }
                      </Card.Text>
                      <Button variant="primary" onClick={()=>{navigate(`${place.id}`)}}>Show Place</Button>
                    </Card.Body>
                  </Card>
                )
              })
            }
          
      </>
    )
}

export default PlacesContainer