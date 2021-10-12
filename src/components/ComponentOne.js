import React, { useContext } from 'react';

import MyContext from '../context/store';
import { increase, decrease } from "../context/actions";

export default function ComponentOne() {

  const { state, dispatch } = useContext(MyContext);

  return (
    <div>
      <h1>React Counter With Context Api</h1>
      <h2>First Component : {state.counter}</h2>
      <button onClick={() => dispatch(increase())}>Increase Counter</button>
      <button onClick={() => dispatch(decrease())}>Decrease Counter</button>
    </div>
  )
}
