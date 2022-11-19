import {Button, Form} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'



import 'bootstrap/dist/css/bootstrap.min.css'
 
 function LoginUser(props) {
  const navigate = useNavigate()
  return(
    <Form onSubmit={props.loginUser}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username:</Form.Label>
            <Form.Control type="text" placeholder="Username" name="username"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password"/>
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <button class="btn btn-sm btn-outline-success" onClick={()=>navigate('/register')} type="button">New Here? Register</button>
    </Form>

    
  )
}

export default LoginUser