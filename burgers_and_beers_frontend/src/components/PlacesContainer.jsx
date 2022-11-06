import {useNavigate} from 'react-router-dom';

const PlacesContainer = (props) =>{

    const navigate = useNavigate()

    return (
      <>
        <h2> Places List </h2>
        <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Location</th>
            <th>comments</th>
          </tr>
            { props.places.map((place, i) => {
                return (
                  <tr key={place.id}>
                    <td style={{textDecoration: "underline", color: "blue"}} onClick={()=>{navigate(`${place.id}`)}}>
                    { place.name }
                    </td>
                    <td>
                     { place.location }
                    </td>
                    <td>
                     { place.comments }
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </>
    )
}

export default PlacesContainer