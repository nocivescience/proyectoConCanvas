import React, {useRef, useEffect, useState} from "react";
const CanvasElement = () => {
    const canvasRef = useRef(null);
    const inputRef = useRef(null);
    const divRef = useRef(null);
    const [xPos, setXPos] = useState(0);
    const [yPos, setYPos] = useState(0);
    const [color, setColor] = useState('black');
    const [lectura, setLectura] = useState('');
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const input = inputRef.current;
        const div = divRef.current;
        function draw(){
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = color;
            ctx.fillRect(xPos, yPos, 150, 100);
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
    }, [xPos, yPos, color, lectura]);
    return (
        <div>
            <canvas ref={canvasRef} width="400" height="400"/>
            <input ref={inputRef} type="color" onChange={e => setColor(e.target.value)}/>
            <div ref={divRef} style={{
                width: '100px',
                height: '100px',
                border: '1px solid black',
            }}></div>
        </div>
    )
}