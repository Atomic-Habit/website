import React, { createRef, useEffect, useState } from 'react'
import {Reveal} from 'react-awesome-reveal'
import { keyframes } from "@emotion/react";

const customAnimationUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const customAnimationDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;


const CustomFade = (props) => {
    const [isObserve, setIsObserve] = useState(true)
    const [direction, setDirection] = useState('up')

    const elm = createRef()

    const handleObserve = (e) => {
        setIsObserve(e)
    }

    useEffect(() => {

        if (elm.current.getBoundingClientRect().top + elm.current.getBoundingClientRect().height < window.screenY) {
            setDirection('down')
        } else {
            setDirection('up')
        }

        console.log(direction)
    }, [isObserve])
    
    return (
        <div ref={elm}>
            <Reveal keyframes={direction === 'up' ? customAnimationUp : customAnimationDown} onVisibilityChange={handleObserve} >
                    {props.children}
            </Reveal>
        </div>
    )
}

export default CustomFade