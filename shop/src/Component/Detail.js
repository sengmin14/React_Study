import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Detail = (props) => {
  const { id } = useParams();
  const no = parseInt(id) + 1;
  const [Alert, setAlert] = useState(true);
  const [num, setNum] = useState('');
  const [tab, setTab] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      // 삭제 시 실행
      // clean up function에는 타이머제거, socket 연결요청제거, ajax요청 중단 이런 코드를 많이 작성합니다.
    };
  }, []);

  useEffect(() => {
    if (isNaN(num) === true) {
      alert('그러지마세요');
      setNum('');
    }
  }, [num]);

  return (
    <div className='container'>
      {Alert === true ? (
        <div className='alert alert-warning'>2초 이내 구매시 할인</div>
      ) : null}
      <div className='row'>
        <div className='col-md-6'>
          <img
            src={'https://codingapple1.github.io/shop/shoes' + no + '.jpg'}
            width='100%'
          />
        </div>
        <div className='col-md-6'>
          <input
            placeholder='수량 입력'
            onChange={(e) => {
              setNum(e.target.value);
            }}
            value={num}
          ></input>
          <h4 className='pt-1'>{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <button className='btn btn-danger'>주문하기</button>
        </div>
      </div>

      <Nav variant='tabs' defaultActiveKey='/home'>
        <Nav.Item>
          <Nav.Link
            eventKey='link0'
            onClick={() => {
              setTab(0);
            }}
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey='link1'
            onClick={() => {
              setTab(1);
            }}
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey='link2'
            onClick={() => {
              setTab(2);
            }}
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </div>
  );
};

const TabContent = ({ tab }) => {
  const [fade, setFade] = useState('');

  useEffect(() => {
    let a = setTimeout(() => {
      setFade('end');
    }, 100);
    return () => {
      setFade('');
      clearTimeout(a);
    };
  }, [tab]);

  if (tab === 0) {
    return <div className={`start ${fade}`}>내용1</div>;
  } else if (tab === 1) {
    return <div className={`start ${fade}`}>내용2</div>;
  } else if (tab === 2) {
    return <div className={`start ${fade}`}>내용3</div>;
  }
};

export default Detail;
