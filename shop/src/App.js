import {Navbar,Container, Nav, Row, Col} from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import data from './data.js';
import Detail from './routes/Detail.js'
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'


function App() {
  
  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">shoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={() => {navigate('/detail/0')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path="/" element={
          <div>
            <div className='main-bg'></div>
            <Container>
            <Row>
            {/* <Card shoes={shoes[0]} i={1}/>
            <Card shoes={shoes[1]} i={2}/>
            <Card shoes={shoes[2]} i={3}/> */}
            {
              shoes.map((a, i) => {
              return (
                  <Card shoes={shoes[i]} i={i+1}/>
              )
              })
            }
            </Row>
            </Container>
          </div>
        }/>

        <Route path="/detail/:id" element={<Detail shoes={shoes}/>}/>

        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버임</div>}/>
          <Route path="location" element={<div>위치정보임</div>}/>
        </Route>
        
      </Routes>

      
    </div>
  );
}

const About = () =>  {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}



const Card = (props) => {
  return (
    <Col>
      <img src={'https://codingapple1.github.io/shop/shoes'+ props.i +'.jpg'} width="80%"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </Col>
  )
}


export default App;
