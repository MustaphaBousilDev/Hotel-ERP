import React from 'react'
interface Props{
    w?:string,
    h?:string,
    color?:string,
    className?:string
}
const SPA:React.FC<Props> = ({className='',w='30px',h='30px',color='#333'}) => {
    return (
       <>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
          width={w} height={h} viewBox="0 0 225.000000 225.000000"
          className={`${className}`}
          preserveAspectRatio="xMidYMid meet">
  
          <g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
          fill={color} stroke="none">
          <path d="M1088 2240 c-106 -32 -159 -159 -109 -258 23 -46 46 -67 94 -87 46
          -19 88 -19 135 0 75 32 115 90 115 170 0 124 -116 211 -235 175z"/>
          <path d="M830 1807 c-48 -15 -113 -83 -128 -133 -8 -29 -12 -145 -12 -398 l0
          -357 25 -24 c32 -33 93 -34 123 -2 20 21 21 36 29 377 5 225 12 355 18 355 7
          0 12 -268 15 -775 4 -604 8 -780 18 -797 15 -26 61 -53 92 -53 12 0 35 7 51
          16 58 29 59 40 59 519 0 431 0 436 20 433 20 -3 20 -12 23 -448 2 -481 2 -476
          57 -505 37 -19 63 -19 101 1 60 31 59 11 59 843 0 733 2 792 28 766 4 -4 9
          -82 10 -173 4 -197 -4 -180 143 -272 87 -55 99 -65 99 -90 0 -22 5 -29 23 -32
          21 -3 22 -7 25 -119 l3 -116 -32 -7 c-61 -12 -59 1 -59 -360 0 -245 3 -335 12
          -344 7 -7 27 -12 45 -12 32 0 33 -2 33 -39 0 -76 60 -81 70 -5 l5 39 78 3 77
          3 0 -39 c0 -77 60 -82 70 -6 5 35 8 39 37 42 62 6 63 12 63 357 0 346 -1 349
          -66 361 l-35 6 3 117 c3 108 4 116 23 116 17 0 20 7 20 45 l0 45 -122 3 c-103
          2 -121 5 -116 17 13 36 -19 73 -123 140 l-104 67 0 141 c0 116 -4 149 -19 182
          -23 51 -79 101 -128 114 -52 15 -567 13 -613 -2z m1110 -867 l0 -120 -80 0
          -80 0 0 113 c0 63 3 117 7 120 3 4 39 7 80 7 l73 0 0 -120z"/>
          <path d="M315 575 c-21 -20 -25 -34 -25 -80 l0 -55 -59 0 c-89 0 -91 -5 -91
          -222 0 -165 2 -180 20 -198 19 -19 33 -20 284 -20 262 0 265 0 280 22 13 18
          16 56 16 204 0 213 0 214 -93 214 l-57 0 0 55 c0 46 -4 60 -25 80 -22 23 -31
          25 -125 25 -94 0 -103 -2 -125 -25z m195 -95 l0 -40 -70 0 -70 0 0 40 0 40 70
          0 70 0 0 -40z"/>
          </g>
      </svg>
       </>
  )
  }
  
  export default SPA