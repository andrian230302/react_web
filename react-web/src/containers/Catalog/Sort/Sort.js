import React, { useState, useEffect } from 'react';
import Shop from "../../Shop/Shop"

export default function Sort({data}) {
  let [setCount] = [];

  return (
    <div>
      <p>Загальна ціна всіх предметів {data}</p>
      <button onClick={() => setCount(sorting(data))}>
        Sort
      </button>
    </div>
  );
}

function sorting({data}){
    data.sort((a, b) => {
        return a.pcice - b.price;
    })
}
