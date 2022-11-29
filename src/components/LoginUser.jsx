import { Form,Col, Row} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'



import 'bootstrap/dist/css/bootstrap.min.css'
 
 function LoginUser(props) {
  const navigate = useNavigate()
  return(
    <div className='userform'>
      <h1>Login</h1>
      <Form className="w-75 mx-auto" onSubmit={props.loginUser}>
        <Col>
        
            <Form.Group as={Row} className="mb-3" controlId="formBasicUsername">
              
                <Form.Label as={Col}>Username:</Form.Label>
              <Col>
                <Form.Control className="text-center " type="text" placeholder="Username" name="username"/>
              </Col>
            </Form.Group>
        
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label as={Col}>Email address</Form.Label>
              <Col>
                <Form.Control className="text-center " type="email" placeholder="Enter email" name="email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
              <Form.Label as={Col}>Password</Form.Label>
              <Col>
                <Form.Control className="text-center" type="password" placeholder="Password" name="password"/>
              </Col>
            </Form.Group>
        </Col> 
            <button  type="submit">
              Submit
            </button>
            <button className="primary" onClick={()=>navigate('/register')} type="button">New Here? Register</button>
      </Form>
    </div>
    
  )
}

export default LoginUser