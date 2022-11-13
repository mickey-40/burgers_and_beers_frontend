


import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react'
 
 function LogoutUser(props) {
  console.log('props pass ', props)
  useEffect(()=>{
    props.setPlaces([])
  },[])
  return(
    <div>
      <h1>You are logout.</h1>
    </div>
    

    
  )
}

export default LogoutUser