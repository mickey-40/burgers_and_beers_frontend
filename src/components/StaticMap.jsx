import { GoogleMap } from "@react-google-maps/api"
import { useMemo } from "react"
import '../App.css';

export default function StaticMap(props){
  const center = useMemo(()=> ({lat:29.7604, lng: -95.3698}),[])
  return(
    <div>
      
      <GoogleMap zoom={10} center={center} mapContainerClassName="mapContainer"></GoogleMap>
    </div>
   
  )
}