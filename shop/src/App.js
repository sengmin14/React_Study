import { useState } from 'react';
import './App.css';

function App() {
  const[person, changePerson] = useState([{
    name : '진성민',
    age : 21,
  }])

  const[personName, changePersonName] = useState('');
  const[personAge, changePersonAge] = useState('');

  return (
    <div className="App">
      <div>{person[0].name}</div>
      <div>
      <input type='text' placeholder='name' onChange={(e) => {
        changePersonName(e.target.value);
      }}></input>
      <input type='text' placeholder='age' onChange={(e) => {
        changePersonAge(e.target.value);
      }}></input>

      <button onClick={() => {
        let copy = {...person};
      }}>버튼</button>
      </div>
    </div>
  );
}

export default App;
