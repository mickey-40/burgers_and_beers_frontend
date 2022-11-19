import './App.css';
import React, { useState, useEffect } from 'react'
// import { PlacesProvider } from './contexts/PlacesContexts';
import {Route, Routes, useNavigate} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import LoginUser from './components/LoginUser'
import RegisterUser from './components/RegisterUser'
import PlacesContainer from './components/PlacesContainer'
import PlaceView from './components/PlaceView'
import AddPlace from './components/AddPlace'
import UpdatePlace from './components/UpdatePlace'
import UserPlaces from './components/UserPlaces';
import 'bootstrap/dist/css/bootstrap.min.css';
let baseUrl = 'http://localhost:8000'


export default function App(props) {
  const [myPlaces, setMyPlaces] = useState([])
  const [places, setPlaces] = useState([])
  console.log(places)
  
  
  const navigate = useNavigate()
  

  const getMyPlaces = () => {
    // fetch to the backend
    fetch(baseUrl + "/api/v1/places/private",{
      credentials: "include"
    })
    .then(res => {
      if(res.status === 200) {
        return res.json()
      } else {
        return []
      }
    }).then(data => {
      console.log(data.data)
      setMyPlaces(data.data)
    })
  }
  
  const getAllPlaces =()=>{
    // fetch to the backend
    fetch(baseUrl + "/api/v1/places/",{
      credentials: "include"
    })
    .then(res => {
      if(res.status === 200) {
        return res.json()
      } else {
        return []
      }
    }).then(data => {
      console.log(data.data)
      setPlaces(data.data)
    })
  }

  


  const loginUser = async (e) => {
    console.log('loginUser')
    console.log(e.target.email.value)
    e.preventDefault()
    const url = baseUrl + '/api/v1/user/login'
    const loginBody = {
      
      email: e.target.email.value,
      password: e.target.password.value
      
    }
    try {

      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(loginBody),
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: "include"
      })

      console.log(response)//Delete later
      console.log("BODY: ",response.body)//Delete later

      if (response.status === 200) {
        
        getMyPlaces()
        
        navigate("/")
      }
    }
    catch (err) {
      console.log('Error => ', err);

    }
  }

  const register = async (e) => {
    e.preventDefault()
    console.log(e.target)
    const url = baseUrl + '/api/v1/user/register'
    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          username: e.target.username.value,
          email: e.target.email.value,
          password: e.target.password.value
          
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(response)
      if (response.status === 201) {
        console.log("worked register")
        window.location = '/login'
        
      }
    }
    catch (err) {
      console.log('Error => ', err);
    }
  }
 
  const logoutUser=async(e)=>{
    console.log('logout user')
    e.preventDefault();
    
    
    fetch(baseUrl +'/api/v1/user/logout', {
        method:'GET',
        headers:{}
      })
      .then(res => {
        if(res.status === 200) {
          return res.json()
        } else {
          return []
        }
      }).then(data => {
        setMyPlaces([])
        
        navigate("places")
        
      })
    }
 

  //delete place function
    const deletePlace = async(id) => {
      console.log(id)
      
      try {
        const deletePlace = await fetch(baseUrl + '/api/v1/places/' + id,{
          method: "Delete",
          credentials: "include"
          
        })
          console.log(deletePlace)
          // window.location = '/places'
         
        } catch (err){
        console.log('Error ', err)
      }
      window.location = '/places'
      
  }
  
    
  


  
  useEffect(()=>{
    getMyPlaces()
  },[])
  useEffect(()=>{
    getAllPlaces()
  },[])

  return (
    
      <div className="App">
        <NavBar logoutUser={logoutUser}/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="register" element={<RegisterUser register={register} />}/>
          <Route path="login" element={<LoginUser loginUser={loginUser} />}/>
          {/* <Route path="logout" element={<LogoutUser setPlaces={setPlaces} logoutUser={logoutUser} />}/> */}
          <Route path="places" element={<PlacesContainer places={places} />}/>
          <Route path="places/private" element={<UserPlaces myPlaces={myPlaces} />}/>
          <Route path="places/:id" element={<PlaceView  loginUser={loginUser} places={places} deletePlace={deletePlace}  />}/>
          <Route path="places/add" element={<AddPlace loginUser={loginUser} places={places}/>}/>
          <Route path='places/edit/:id' element={<UpdatePlace loginUser={loginUser}  />}/>
          
          {/* not mandatory to put a "/" at the beginning of a route */}
          
        </Routes>  
        
      </div>
    
  );
}