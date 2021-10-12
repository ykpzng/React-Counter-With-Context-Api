import React, { useContext } from 'react';

import MyContext from '../context/store';

export default function ComponentTwo() {

  const { state } = useContext(MyContext);

  return (
    <div>
      <h2>Second Component :{state.counter}</h2>
    </div>
  )
}
