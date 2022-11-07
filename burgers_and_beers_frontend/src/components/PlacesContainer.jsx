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
                    <Card.Img variant="top" src='https://pixabay.com/get/gf7f4d37e1b960f7943ef4f53bfb397deef4ff6bab57cca712a39797f06133b5b5f3fbc218cc5cd660ba624f7e336087439d399fb5727c008f820bd23f47a4f4e_1920.jpg'/>
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