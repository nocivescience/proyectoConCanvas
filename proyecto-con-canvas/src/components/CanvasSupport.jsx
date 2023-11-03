import React, { useEffect, useRef, useState } from 'react'
const CanvasSupport = () => {
    const canvasRef = useRef(null)
    const colorRef = useRef(null)
    const [xPos, setXPos] = useState(200)
    const [yPos, setYPos] = useState(200)
    const [color, setColor] = useState('red')
    useEffect(()=>{
        const canvas=canvasRef.current
        const colorI= colorRef.current
        const ctx=canvas.getContext('2d')
        function draw(){
            ctx.beginPath()
            ctx.clearRect(0,0,canvas.width, canvas.height);
            ctx.fillStyle=colorI.value
            ctx.fillRect(xPos,yPos, 150,100)
            ctx.closePath()
            ctx.fill()
        }
        function update(e){
            switch(e.key){
                case 'a':
                    setXPos(xPos=> xPos-1)
                    break
                case 'd':
                    setXPos(xPos=> xPos+1)
                    break
                case 'w':
                    setYPos(yPos => yPos-1)
                    break
                case 's':
                    setYPos(yPos=> yPos+1)
                    break
            }
        }
        function loop(){
            draw()
            requestAnimationFrame(loop)
        }
        loop()
        window.addEventListener('keydown', update)
        return ()=> window.removeEventListener('keydown', update)
    }, [xPos, yPos, color])
    return (
        <>
            <canvas
                ref={canvasRef}
                width="400"
                height="500"
            >
            </canvas>
            <input type="color" ref={colorRef} onChange={e=>setColor(e.target.value)}/>
        </>
    )
}
export default CanvasSupport