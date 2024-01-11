import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import bgImage from './images/copacity.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useState , useEffect} from 'react';


const bgStyle = {
  backgroundImage: `url(${bgImage})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  height: '100vh'
}

const btnStyle = {
  width: '100px',
  fontSize: '2rem'
}
const formStyle = {
  padding: '1em', 
}


const App = () => {
  const [count, setCount] = useState(0)
  const [mail, setMail] = useState('')
  const [pass, setPass] = useState('')



  useEffect(() => {
    console.log( `mail: ',${mail}`)
    console.log(mail.toUpperCase())
    // return () => {
    //  console.log('temizlendi')
    // };
  }, [mail]);
  const changeMail = (e) => {
    setMail(e.target.value)
  }

  const changePass = (e) => {
    setPass(e.target.value)
  }
  return (
    <>
      <Container fluid>
        <Row className='justify-content-center'>
          <Col className='d-flex align-items-center justify-content-center' style={bgStyle}>
            <Button onClick={() => { setCount(count - 1) }} size="lg" variant='dark' className='m-3' style={btnStyle}>-</Button>
            <Button size="lg" variant='dark' className='m-3' style={btnStyle}>{count}</Button>
            <Button onClick={() => { setCount(count + 1) }} size="lg" variant='dark' className='m-3' style={btnStyle}>+</Button>
          </Col>
          <Col style={{margin: 'auto'}}>
            <Form style={formStyle}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control value={mail} onChange={changeMail} type="email" placeholder="Enter email" />
                {mail!=='sashapoulain5@gmail.com' ? (<p></p>) : (<p>doğru</p>)} 
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                  <p>{mail}</p>
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control value={pass} onChange={changePass} type="password" placeholder="Password" />
                {pass === '1234' ? (<p>hoşgeldiniz</p>): null}
                <p>{pass}</p>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>

        </Row>
      </Container>
    </>
  );
}

export default App;

