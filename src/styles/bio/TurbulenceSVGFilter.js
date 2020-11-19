import React, {useRef,useEffect} from "react"
import gsap from 'gsap';

const Turbulence = (props) => {
  const turbulence = useRef(null);
  useEffect( () => {
    gsap.set(turbulence.current, {attr: {baseFrequency: '0.15 0.22'}})
  }, [props.activeImage])
  useEffect( () => {
    console.log(turbulence.current)
    const tl = gsap.timeline();
    tl.to(turbulence.current, {attr: {baseFrequency: '0 0'}, duration: 1.2} )
  },[props.activeImage])
  return (
    <svg>
      <filter id="go">
          <feTurbulence baseFrequency="0.02 0.07" result="GO" numOctaves="1" ref={turbulence}></feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="GO" scale="40"></feDisplacementMap>
      </filter>
    </svg>
  )
}

export default Turbulence;