import { useState } from 'react'
import CanvasElement from './components/CanvasElement'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Canvas</h1>
      <CanvasElement />
    </>
  )
}

export default App