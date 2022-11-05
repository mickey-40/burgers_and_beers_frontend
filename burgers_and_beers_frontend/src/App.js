import './App.css';
import React, { useState, useEffect } from 'react'
import {Route, Routes, useNavigate} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import LoginUser from './components/LoginUser'
import RegisterUser from './components/RegisterUser'
import PlacesContainer from './components/PlacesContainer'

let baseUrl = 'http://localhost:8000'


export default function App() {
  const [places, setPlaces] = useState([])
  
  const navigate = useNavigate()
  

  const getPlaces = () => {
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
      username: e.target.username.value,
      password: e.target.password.value,
      email: e.target.email.value
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

      console.log(response)
      console.log("BODY: ",response.body)

      if (response.status === 200) {
        getPlaces()
        navigate("places")
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
          password: e.target.password.value,
          email: e.target.email.value
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(response)
      if (response.status === 201) {
        console.log("worked register")
        getPlaces()
        navigate("login")
      }
    }
    catch (err) {
      console.log('Error => ', err);
    }
  }


  useEffect(()=>{
    getPlaces()
  },[])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="register" element={<RegisterUser register={register} />}/>
        <Route path="login" element={<LoginUser loginUser={loginUser} />}/>
        <Route path="places" element={<PlacesContainer places={places} />}/>
        {/* not mandatory to put a "/" at the beginning of a route */}
        
      </Routes>     
    </div>
  );
}