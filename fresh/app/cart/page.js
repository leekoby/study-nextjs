import { age } from "./data";
import Homework from "./homework";
export default function Cart() {
  let 장바구니 = ['tomato', 'pasta',];
  let 결제사 = ['현대', '삼성', '국민'];
  return (
    <div>
      <Homework />
      <h4 className="title">Cart</h4>
      <p>{age}</p>
      {장바구니.map(items => <CartItem item={items} />
      )}
      {결제사.map(card => <Banner content={card} />)}

    </div>
  );
}

function CartItem({ item }) {
  return (
    <div className="cart-item">
      <p>상품명 {item}</p>
      <p>$40</p>
      <p>1개</p>
    </div>
  );
}

function Banner(props) {
  return <h5>{props.content} 결제 행사중</h5>;
}

function Btn(props) {
  return <button style={{ background: `${pros.color}` }}>버튼임</button>;
}