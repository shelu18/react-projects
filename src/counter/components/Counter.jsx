import React from 'react'
import { useState } from 'react'
import '../style.css'

function Counter() {
  const [Count, setCount] = useState(0);
  return (
    <div>
        <p className='paraclass'>You have clicked {Count} times</p>
        <button id='btn' onClick={() => setCount(Count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;

