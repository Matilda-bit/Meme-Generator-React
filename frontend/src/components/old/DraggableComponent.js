import React, { useRef, useEffect } from 'react';
import Mydata from '../../util/MemesLineLink';

import classes from './DraggableComponent.module.css';

const DraggableComponent = ({unique, line, imgId, boxCount, info}) => {
    console.log(" DraggableComponent");
    const dragElement = useRef(null);
    const color = line.color;
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if(dragElement.current){
        const memeBox = document.getElementById('meme-box');    

        console.log(`dragElement.current.style.top: ${dragElement.current.style.top}`); 
        console.log(info); 
    }

    useEffect(() => {
        if(unique === 0){
            dragElement.current.style.top =  "0px"; 
        }else if(unique > 1){
            dragElement.current.style.top = `calc(50% + ${unique*5}px)`; 
            dragElement.current.style.left =`calc(50% + ${unique*5}px)`;
        }
    }, []);

    
    useEffect(() => {
        if(info){
                const { width: memeWidth, height: memeHeight } = info;
                const maxTop = memeHeight - dragElement.current.clientHeight - 15;
                const maxLeft = memeWidth - dragElement.current.clientWidth - 15;
                let newTop = dragElement.current.offsetTop - pos2;
                let newLeft = dragElement.current.offsetLeft - pos1;
                newTop = Math.min(Math.max(newTop, 1), maxTop);
                newLeft = Math.min(Math.max(newLeft, 1), maxLeft);
                dragElement.current.style.top = newTop + "px"; 
                console.log(`dragElement.current.style.top: ${dragElement.current}`);
                dragElement.current.style.left = newLeft + "px";
                if(unique === 1){
                    dragElement.current.style.top =  `${(memeHeight - 50)}px`; 
                }
        }
    }, [info,line]);

 
    const lineStyle = (unique >= boxCount || !Mydata[imgId]) ? 
    (classes['line-default'] + " " + classes.line) : 
    (Mydata[imgId].lines && Mydata[imgId].lines[unique]) ? 
    Mydata[imgId].lines[unique] + " " + classes.line : " " + classes.line + " ";

    const dragMouseDown = (e) => {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    };

    const elementDrag = (e) => {
        e.preventDefault();

        //const dragRect = dragElement.current.getBoundingClientRect();
         
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
       
       
        const {width: memeWidth, height: memeHeight } = info;
        const maxTop = memeHeight - dragElement.current.clientHeight - 5;
        const maxLeft = memeWidth - dragElement.current.clientWidth - 5;
        let newTop = dragElement.current.offsetTop - pos2;
        let newLeft = dragElement.current.offsetLeft - pos1;
        newTop = Math.min(Math.max(newTop, 1), maxTop);
        newLeft = Math.min(Math.max(newLeft, 1), maxLeft);

        dragElement.current.style.top = newTop + "px";
        dragElement.current.style.left = newLeft + "px";
    };

    const closeDragElement = () => {
        document.onmouseup = null;
        document.onmousemove = null;
    };

    const test = `${classes[color]} ${classes[line.textAlign]} ${classes[`font-size-${line.fontSize}`]}`;
console.log("TEST");
console.log(test);
console.log(line);
console.log(color);
console.log(lineStyle);
//lineStyle
//test
    return (
        <div ref={dragElement} 
            id="meme-text" 
            className={classes['meme-text'] + " " + lineStyle} 
            onMouseDown={dragMouseDown}
            >
                <div 
                    id={`line-${unique}`}
                    unique={unique} 
                    className={`${classes[color]} ${classes[line.textAlign]} ${classes[`font-size-${line.fontSize}`]}`}

                    style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word', cursor: 'move' }}
                    >
                        {line.text}
                </div>
        </div>
    );
};

export default DraggableComponent;
