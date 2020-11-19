import React from "react"

const Turbulence = () => {
  return (
    <svg>
      <filter>
          <feTurbulence baseFrequency="0.02 0.03" result="GO" numOctaves="1" id="turbulence"></feTurbulence>
      </filter>
    </svg>
  )
}

export default Turbulence;