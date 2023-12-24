/*eslint-disable*/
import './App.css';
import { useState } from 'react';

function App() {
    let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
    let [따봉, 따봉변경] = useState([0, 0, 0]);
    let [modal, setModal] = useState(false);
    let [title, setTitle] = useState(0);
    let [입력값, 입력값변경] = useState('');
    let [날짜, 날짜변경] = useState(['2023년 12월 1일', '2023년 12월 1일', '2023년 12월 1일'])

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
                            <span onClick={(e) => { e.stopPropagation()
                                let copy = [...따봉];
                                copy[i]++;
                                따봉변경(copy);
                            }}>👍
                            </span>{따봉[i]}
                        </h4>
                        <p>{날짜[i]}</p>
                        <button onClick={(e) => {
                                e.stopPropagation()
                                let copy = [...글제목];
                                copy.splice(i, 1);
                                글제목변경(copy);

                                let goodCopy = [...따봉];
                                goodCopy.splice(i, 1);
                                따봉변경(goodCopy);

                                let dateCopy = [...날짜];
                                dateCopy.splice(i, 1);
                                날짜변경(dateCopy);
                        }}>삭제</button>
                    </div>
                    )   
                })
            }
            

            <input onChange={(e) => {
                입력값변경(e.target.value)
                // console.log(입력값)
            }}/>
            <button onClick={() => {
                if(입력값.trim() !== '') {
                    let copy = [...글제목]
                    copy.unshift(입력값)
                    글제목변경(copy);

                    let goodCopy = [...따봉]
                    goodCopy.unshift(0)
                    따봉변경(goodCopy);

                    let today = new Date();
                    let formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`
                    let dateCopy = [...날짜];
                    dateCopy.unshift(formattedDate);
                    날짜변경(dateCopy);
                }
                
            }}>글발행</button>
            

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
