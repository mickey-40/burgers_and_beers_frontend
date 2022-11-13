import React, { Component } from "react"
// import {Button, Col, Form, Row} from 'react-bootstrap'

let baseURL = 'http://localhost:8000'

class AddPlace extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      location: '',
      rating: 0,
      
      comments:'',
      imageURL:'',
      private:false,
      
    }
  }


  // addPlace = (place) => {
  //   const copyPlaces = [...this.props.places]
  //   copyPlaces.unshift(place)
  //   this.setState({
  //     name: '',
  //     location: '',
  //     rating: 0,
  //     likes: 0,
  //     comments:'',
  //     imageURL:'',
  //     private:false
  //   })
  // }
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    })
  }

  handleLocationChange = (event) => {
    this.setState({
      location: event.target.value,
    })
  }

  handleRatingChange = (event) => {
    this.setState({
      rating: event.target.value,
    })
  }

  // handlelikesChange = (event) => {
  //   this.setState({
  //     likes: event.target.value,
  //   })
  // }

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value, 
    })
  }

  handleImageURLChange = (event) => {
    this.setState({
      imageURL: event.target.value,
    })
  }

  handlePrivateChange = (event) => {
    this.setState({
      private: event.target.value,  
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    fetch(baseURL + '/api/v1/places/', {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name, 
        location: this.state.location, 
        rating: this.state.rating,
        
        comments: this.state.comments,
        imageURL: this.state.imageURL,
        private: this.state.private
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then (res => res.json())
      .then (resJson => {
       console.log('AddPlace - resJson', resJson)
        this.props.addPlace(resJson)
        this.setState({
          name: '',
          location: '',
          rating: '',
          
          comments:'',
          imageURL:'',
          private:'',
          
        })
    }).catch (error => console.error({'Error': error}))
    
  }
  render(){
  return (
    <>
      <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name of Place</label>
            <input 
              type="text"
              id="name"
              name="name"
              onChange={this.handleNameChange}
              /><br/>

              <label htmlFor="location">Name of location</label>
              <input 
                type="text"
                id="location"
                name="location"
                onChange={this.handleLocationChange}
                value={this.state.location}
                /><br/>

              <label htmlFor="rating">Rating 1-5</label>
              <input 
                type="number"
                id="rating"
                name="rating"
                onChange={this.handleRatingChange}
                /><br/>

              <label htmlFor="comments">Comments</label>
              <input 
                type="textarea"
                id="comments"
                name="comments"
                onChange={this.handleCommentsChange}
                /><br/>

                <label htmlFor="imageURL">Restaurant or Brewery </label>
                <select 
                  value={this.state.imageURL} 
                  onChange={this.handleImageChange} 
                  >
                  <option value={'https://i.imgur.com/ehvIDCTl.jpg'}>Restaurant</option>
                  <option value={'https://i.imgur.com/WmCiEbS.jpeg'}>Brewery</option>
                  
                </select><br/>

                <label htmlFor="private">Set to Private: </label>
                <input value={this.state.private} type="checkbox" onChange={this.handlePrivateChange}/><br/>
                <input type="submit" id="submit"  value="Add the Place"/>
        </form>
    </>
  );
  }
}

export default AddPlace;