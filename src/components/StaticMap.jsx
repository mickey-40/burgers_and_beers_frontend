import { GoogleMap } from "@react-google-maps/api"
import { useMemo } from "react"

import '../App.css';

export default function StaticMap(props){
  

  let center = useMemo(() => ({ lat: props.latitude, lng: props.longitude }), [props.latitude, props.longitude])
  

  return(
    <div>
      
      <GoogleMap zoom={10} center={center} mapContainerClassName="mapContainer"></GoogleMap>
    </div>
   
  )
}