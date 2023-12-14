import { useState } from 'react'
import Canvas from './components/Canvas'
import Canvas2 from './components/CanvasSupport'
import CanvasComplex from './components/CanvasdComplex'
import CanvasBad from './components/CanvasBad'
import CanvasUpdate from './components/CanvasUpdate'

function App() {

  return (
    <>
      <h1>Canvas</h1>
      <CanvasUpdate/>
    </>
  )
}

export default App