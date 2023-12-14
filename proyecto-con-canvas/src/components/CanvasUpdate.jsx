import React, {useEffect, useRef, useState} from 'react'
const CanvasUpdate = () => {
    const canvasRef= useRef(null)
    const [xPos, setXPos]= useState(200)
    const [yPos, setYPos]= useState(200)
    useEffect(()=>{
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        function draw(){
            ctx.beginPath()
            ctx.clearRect(0,0,canvas.width, canvas.height);
            ctx.fillStyle='red'
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
    },[xPos, yPos])
    return (
        <>
            <canvas
                ref={canvasRef}
                width="400"
                height="500"
            >
            </canvas>
        </>
    )
}
export default CanvasUpdate