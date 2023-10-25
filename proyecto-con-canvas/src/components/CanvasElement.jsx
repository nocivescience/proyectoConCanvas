import React, {useRef, useEffect, useState} from "react";
const CanvasElement = () => {
    const canvasRef = useRef(null);
    const inputRef = useRef(null);
    const divRef = useRef(null);
    const divRef2 = useRef(null);
    const [xPos, setXPos] = useState(0);
    const [yPos, setYPos] = useState(0);
    const [xPos2, setXPos2] = useState(200);
    const [yPos2, setYPos2] = useState(100);
    const [xPos3, setXPos3] = useState(300);
    const [yPos3, setYPos3] = useState(400);
    const [color, setColor] = useState('black');
    const [lectura, setLectura] = useState('');
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const input = inputRef.current;
        const div = divRef.current;
        function draw(){
            ctx.beginPath();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = color;
            ctx.fillRect(xPos, yPos, 150, 100);
            ctx.closePath();
            ctx.beginPath();
            ctx.arc(xPos2, yPos2, 50, 0, 2 * Math.PI);
            ctx.fillStyle = 'red';
            ctx.fill();
            ctx.closePath();
            ctx.beginPath();
            ctx.arc(xPos3, yPos3, 40, 0, 2 * Math.PI);
            ctx.fillStyle = 'green';
            ctx.fill();
        }
        function update(e){
            switch(e.key){
                case 'ArrowUp':
                    setYPos(yPos => yPos - 1);
                    break;
                case 'ArrowDown':
                    setYPos(yPos => yPos + 1);
                    break;
                case 'ArrowLeft':
                    setXPos(xPos => xPos - 1);
                    break;
                case 'ArrowRight':
                    setXPos(xPos => xPos + 1);
                    break;
                case 'w':
                    setYPos2(yPos2 => yPos2 - 10);
                    break;
                case 's':
                    setYPos2(yPos2 => yPos2 + 10);
                    break;
                case 'a':
                    setXPos2(xPos2 => xPos2 - 10);
                    break;
                case 'd':
                    setXPos2(xPos2 => xPos2 + 10);
                    break;
                case 'i':
                    setYPos3(yPos3 => yPos3 - 10);
                    break;
                case 'k':
                    setYPos3(yPos3 => yPos3 + 10);
                    break;
                case 'j':
                    setXPos3(xPos3 => xPos3 - 10);
                    break;
                case 'l':
                    setXPos3(xPos3 => xPos3 + 10);
                    break;
            }
        }
        function updateRead(){
            setLectura(xPos + ', ' + yPos+ ', ' + color);
            div.style.color = input.value;
            div.innerHTML = lectura;
        }
        function loop(){
            draw();
            updateRead();
            requestAnimationFrame(loop);
        }
        loop();
        window.addEventListener('keydown', update);
        return () => window.removeEventListener('keydown', update);
    }, [xPos, yPos, xPos2, yPos2, xPos3, yPos3, color, lectura]);
    return (
        <div>
            <canvas ref={canvasRef} width="400" height="400"/>
            <input ref={inputRef} type="color" onChange={e => setColor(e.target.value)}/>
            <div ref={divRef} style={{
                width: '100px',
                height: '100px',
                border: '1px solid black',
            }}></div>
            <div
                ref={divRef2}
                style={{
                    width: '100px',
                    height: '100px',
                    border: '1px solid black',
                    position: 'absolute',
                    left: xPos2,
                    top: yPos2,
                }}></div>
        </div>
    )
}
export default CanvasElement;