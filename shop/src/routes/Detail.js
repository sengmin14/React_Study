import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";




const Detail = (props) => {
  let {id} = useParams();
  let nextId = parseInt(id)+1;
  let[alarm, setAlert] = useState(true);
  let[num, setNum] = useState('');
  useEffect(() => {
    setTimeout(() => {setAlert(false)}, 2000);
  }, [])
  useEffect(()=>{
    if (isNaN(num) == true){
      alert('그러지마세요')
    }
  }, [num])
    return (
    <div>
    <div className="container">
      {
        alarm === true ? 
        <div className="alert alert-warning">
          2초 이내 구매시 할인
        </div>
        : null
      }
        
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes" + nextId + ".jpg"} width="100%" />
        </div>
        <div className="col-md-6">
        <input onChange={ (e) => { setNum(e.target.value) } } />
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
  </div>

    )
  
}

export default Detail;