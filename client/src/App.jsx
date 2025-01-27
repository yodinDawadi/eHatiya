import React from 'react'
import { useState } from 'react'
import Products from './components/shared/Products';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Products/>
    </>
  )
}

export default App
