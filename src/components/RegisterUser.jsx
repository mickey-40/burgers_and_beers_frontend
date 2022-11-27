import {Form,Row,Col} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css'
 
 function RegisterUser(props) {
  return(
    <div className='userform'>
      <h1>Register</h1>
      <Form className="w-75 mx-auto" onSubmit={props.register}>
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
            
      </Form>
    </div>
    
  )
}
export default RegisterUser