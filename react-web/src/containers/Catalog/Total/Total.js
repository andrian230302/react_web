import React, { useState} from 'react';

export default function Total({data}) {
  const [count,setCount] = useState(0);


  return (
    <div>
      <p>Загальна ціна всіх предметів {count}</p>
      <button onClick={() => setCount(total(data))}>
        Total price
      </button>
    </div>
  );
}

function total(data){
    let count = 0;
    for (const item of data){
      count += +item.priceInUaH;
    }
    return count
}
