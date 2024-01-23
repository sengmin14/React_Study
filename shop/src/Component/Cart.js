import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../Storage/Store';
import { changeAge } from '../Storage/Store';
import { changeCount } from '../Storage/Store';

const Cart = () => {
  let item = useSelector((state) => {
    return state.item;
  });
  let user = useSelector((state) => {
    return state.user;
  });
  let dispatch = useDispatch();

  // console.log(item[0].name);

  return (
    <div>
      <h6>
        {user.name} {user.age}
      </h6>
      <button
        onClick={() => {
          dispatch(changeAge());
        }}
      >
        버튼
      </button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {item.map((a, i) => {
            return (
              <tr key={i}>
                <td>1</td>
                <td>{item[i].name}</td>
                <td>{item[i].count}</td>
                <td>
                  <button
                    onClick={() => {
                      {
                        dispatch(changeCount(i));
                      }
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
