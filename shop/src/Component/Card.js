import { useNavigate } from 'react-router-dom';

const Card = (props) => {
  let num = props.i + 1;
  const navigate = useNavigate();
  const handler = () => {
    navigate(`/detail/${props.i}`);
  };

  return (
    <div className='col-md-4'>
      <img
        src={'https://codingapple1.github.io/shop/shoes' + num + '.jpg'}
        width='80%'
      />
      <h4>{props.shoes[props.i].title}</h4>
      <p>{props.shoes[props.i].content}</p>
      <button
        onClick={() => {
          handler();
        }}
      >
        자세히보기
      </button>
    </div>
  );
};

export default Card;
