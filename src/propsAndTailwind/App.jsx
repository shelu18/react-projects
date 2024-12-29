import React from 'react';
import { useState } from 'react'
import './styles.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="chaiaurcode" btnText="click me" />
      <Card username="hitesh" />
    </>
  )
}

export default App

//some important points about tailwaind 
// in the config file we have to add the path of the files that we want to apply the tailwind css
// import the tailwind in the index.css file
// import the index.css file in the main.jsx file
// we can use the various classes of tailwind along with the component 