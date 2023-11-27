import React, { useEffect, useState, useRef } from 'react'
const CanvasComplex = () => {
    const canvasRef = useRef(null)
    const inputRef = useRef(null)
    const [xPos, setXPos] = useState(100)
    const [yPos, setYPos] = useState(120)
    const [color, setColor] = useState('red')
    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        const input = inputRef.current
        const radio=50
        function draw() {
            ctx.beginPath()
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.arc(xPos, yPos, radio, 0, 2 * Math.PI)
            ctx.fillStyle = color
            ctx.closePath()
            ctx.fill()
        }
        function update(e) {
            switch (e.key) {
                case 'a':
                    setXPos(xPos => xPos - 1)
                    break
                case 'd':
                    setXPos(xPos => xPos + 1)
                    break
                case 'w':
                    setYPos(yPos => yPos - 1)
                    break
                case 's':
                    setYPos(yPos => yPos + 1)
            }
        }
        function loop(){
            draw()
            requestAnimationFrame(loop)
        }
        loop()
        window.addEventListener('keydown', update)
        return ()=>window.removeEventListener('keydown', update)
    }, [xPos, yPos,color])
    return (
        <>
            <canvas ref={canvasRef} width='600' height='500'></canvas>
            <input type="color"
                ref={inputRef}
                onChange={e=>setColor(e.target.value)}
            />
        </>
    )
}
export default CanvasComplex