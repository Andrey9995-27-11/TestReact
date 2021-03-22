import React from 'react'

import './styles.sass'

const Preloader = () => {
  return (
    <div className="preloader">
      <svg
        className="preloader-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        version="1"
        viewBox="0 0 128 128"
      >
        <rect width="100%" height="100%" fill="none"></rect>
        <path
          className="preloader-icon__fill"
          d="M64.4 16a49 49 0 00-50 48 51 51 0 0050 52.2 53 53 0 0054-52c-.7-48-45-55.7-45-55.7s45.3 3.8 49 55.6c.8 32-24.8 59.5-58 60.2-33 .8-61.4-25.7-62-60C1.3 29.8 28.8.6 64.3 0c0 0 8.5 0 8.7 8.4 0 8-8.6 7.6-8.6 7.6z"
        >
          <animateTransform
            attributeName="transform"
            dur="1800ms"
            from="0 64 64"
            repeatCount="indefinite"
            to="360 64 64"
            type="rotate"
          ></animateTransform>
        </path>
      </svg>
    </div>
  )
}

export default Preloader
