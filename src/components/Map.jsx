import { useLoadScript } from '@react-google-maps/api'
import StaticMap from './StaticMap';

export default function Map(props){
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries:['places'],
  
  })
  if (!isLoaded)return <div>Loading...</div>;
  return < StaticMap latitude={props.latitude} longitude={props.longitude}/>


}

