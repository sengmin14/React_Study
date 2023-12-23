/*eslint-disable*/
import './App.css';
import { useState } from 'react';

function App() {
    let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
    let [따봉, 따봉변경] = useState([0, 0, 0]);
    let [modal, setModal] = useState(false);
    let [title, setTitle] = useState(0);

    return (
        <div className="App">
            <div className="black-nav">
                <h4>ReactBlog</h4>
            </div>
            {
                글제목.map((a, i) => {
                    return (
                    <div className="list" key={i}>
                        <h4 onClick={() => {
                        modal === true ? setModal(false) : setModal(true);
                        setTitle(i)}}>{글제목[i]}
                            <span onClick={() => {
                                let copy = [...따봉];
                                copy[i]++;
                                따봉변경(copy);
                            }}>👍
                            </span>{따봉[i]}
                        </h4>
                        <p>2월 17일 발행</p>
                    </div>
                    )   
                })
            }
            

            {
                modal === true ? <Modal color={'skyBlue'} 글제목={글제목} 글제목변경 = {글제목변경} title={title}/> : null
            }
            
        </div>
    );
}

const Modal = (props) => {
    return (
        <div className="modal" style={{background:props.color}}>
            <h4>{props.글제목[props.title]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button>글수정</button>
        </div>
    );
};

export default App;
