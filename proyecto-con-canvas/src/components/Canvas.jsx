import React, {useEffect, useState, useRef, useTransition} from "react";
const Canvas=()=>{
    const canvasRef=useRef(null);
    const inputRef= useRef(null);
    const [xPos, setXPos]= useState(100);
    const [yPos, setYPos]= useState(100);
    const [color, setColor]= useState(null)
    useEffect(()=>{
        const canvas= canvasRef.current;
        const ctx= canvas.getContext('2d');
        const input= inputRef.current;
        function draw(){
            ctx.beginPath();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.arc(xPos, yPos, 50, 0, 2*Math.PI)
            ctx.fillStyle=color;
            ctx.closePath();
            ctx.fill();
        }
        function update(e){
            switch(e.key){
                case 'a':
                    setXPos(xPos=>xPos-1);
                    break;
                case 'd':
                    setXPos(xPos=>xPos+1);
                    break;
                case 'w':
                    setYPos(yPos=>yPos-1);
                    break;
                case 's':
                    setYPos(yPos=>yPos+1);
                    break;
            }
        }
        function loop(){
            draw()
            requestAnimationFrame(loop)
        }
        loop();
        window.addEventListener('keydown', update);
        return ()=> window.removeEventListener('keydown', update);
    }, [xPos, yPos, color])
    return (
        <>
            <canvas ref={canvasRef} width="500" height="500"
            ></canvas>
            <input
                ref={inputRef}
                type= "color"
                onChange= {e=>setColor(e.target.value)}
            ></input>
        </>
    )
}
export default Canvas