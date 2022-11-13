
import {useNavigate} from 'react-router-dom'
import {Button, Card, Row, Col, CardGroup} from 'react-bootstrap'


const PlacesContainer = (props) =>{



    const navigate = useNavigate()

    return (
      <>
        <h2> Places List </h2>
        <Button variant='primary' onClick={()=>{navigate('add')}}>Add Place</Button>
        < CardGroup>
            { props.places.map((place, i) => {
                return (
                  
                  <Card key={place.id} style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={place.imageURL}/>
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
            </CardGroup>
      </>
    )
}

export default PlacesContainer