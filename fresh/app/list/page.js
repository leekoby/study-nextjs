'use client';

import { useState } from "react";

export default function List() {
  let 상품목록 = [
    { name: 'tomato', price: 40, count: 0 },
    { name: 'pasta', price: 40, count: 0 },
    { name: 'coconut', price: 40, count: 0 }
  ];

  const [상품목록상태, set상품목록상태] = useState(상품목록);

  const handleIncrement = (index) => {
    const updatedList = [...상품목록상태];
    updatedList[index].count++;
    set상품목록상태(updatedList);
  };

  const handleDecrement = (index) => {
    const updatedList = [...상품목록상태];
    updatedList[index].count--;
    set상품목록상태(updatedList);
  };

  return (
    <div>
      <h4 className='title'>상품목록</h4>
      {상품목록상태.map((상품, i) =>
        <div className="food" key={i}>
          <img src={`food${i}.png`} className='food-img' />
          <h4>{상품.name} ${상품.price}</h4>
          <span> {상품.count} </span>
          <button onClick={() => { handleIncrement(i); }}>+</button>
          <button onClick={() => { handleDecrement(i); }}>-</button>
        </div>
      )}
    </div>
  );
}