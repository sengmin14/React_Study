import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Data from './Data/Data.js';
import Card from './Component/Card.js';
import Detail from './Component/Detail.js';
import Cart from './Component/Cart.js';

function App() {
  const [shoes, setShoes] = useState(Data);
  const [buttonClickCount, setButtonClickCount] = useState(0);
  const [count, setCount] = useState(2);
  return (
    <div className='App'>
      <Navbar bg='dark' variant='dark'>
        <Container>
          <Link to='/' className='margin'>
            Navbar
          </Link>
          <Nav className='me-auto'>
            <Link to='/detail/0' className='margin'>
              상세페이지
            </Link>
            <Link to='/Cart' className='margin'>
              카트
            </Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path='/'
          element={
            <>
              <div className='main-bg'></div>
              <div className='container'>
                <div className='row'>
                  {shoes.map((a, i) => {
                    return <Card shoes={shoes} i={i} key={i}></Card>;
                  })}
                </div>
              </div>
              <button
                disabled={buttonClickCount >= 2}
                onClick={() => {
                  axios
                    .get(
                      'https://codingapple1.github.io/shop/data' +
                        count +
                        '.json'
                    )
                    .then((result) => {
                      let copy = [...shoes, ...result.data];
                      setShoes(copy);
                      setButtonClickCount(buttonClickCount + 1);
                      setCount(count + 1);
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                }}
              >
                더 보기
              </button>
            </>
          }
        />
        <Route path='/detail/:id' element={<Detail shoes={shoes}></Detail>} />
        <Route path='/cart' element={<Cart></Cart>} />
        <Route path='*' element={<div>없는 페이지 입니다.</div>} />
      </Routes>
    </div>
  );
}

export default App;
