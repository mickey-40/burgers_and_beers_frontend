
import {useNavigate} from 'react-router-dom'
import {Button, Card} from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import '../App.css';
import "react-multi-carousel/lib/styles.css";

import '../App.css';
// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 3,
//     slidesToSlide: 3 // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 2,
//     slidesToSlide: 2 // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     slidesToSlide: 1 // optional, default to 1.
//   }
// };

const UserPlaces = (props) =>{
  console.log(props)
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


    const navigate = useNavigate()

    return (
      <>
        <h2> Places List </h2>
        <Button variant='primary' onClick={()=>{navigate('../places/add')}}>Add Place</Button>
        <Carousel responsive={responsive}>
        
            { props.myPlaces.map((place, i) => {
                return (
                  <div onClick={()=>{navigate(`/places/${place.id}`)}} className='cardContainer'>
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
                        {/* <Button variant="primary" onClick={()=>{navigate(`/places/${place.id}`)}}>Show Place</Button> */}
                        {/* <Button variant="primary" onClick={()=>{navigate(`edit/${place.id}`)}}>Update Place</Button> */}
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

export default UserPlaces