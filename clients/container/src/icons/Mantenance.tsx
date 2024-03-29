import React from 'react'
interface Props{
    w?:string,
    h?:string,
    color?:string,
    className?:string
}
const Mantenance:React.FC<Props> = ({w='30px',h='30px',color='#333',className=''}) => {
  return (
    <>
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width={w} height={h} viewBox="0 0 512.000000 512.000000"
        className={`${className}`}
        preserveAspectRatio="xMidYMid meet">

        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill={color} stroke="none">
        <path d="M3333 4745 c-477 -86 -855 -469 -938 -949 -28 -165 -12 -420 35 -540
        l11 -30 -974 -975 c-1081 -1083 -1018 -1012 -1054 -1186 -65 -320 208 -626
        537 -601 80 6 169 32 229 67 20 12 473 459 1008 993 l972 970 93 -22 c356 -86
        716 -12 998 203 81 62 208 199 264 285 129 196 188 395 189 635 0 243 -34 345
        -115 345 -27 0 -66 -34 -312 -278 -256 -254 -288 -282 -356 -315 -105 -51
        -193 -64 -295 -44 -103 21 -176 59 -246 127 -100 98 -145 220 -137 371 3 68
        11 98 38 159 32 70 51 92 311 355 153 154 282 292 288 308 12 31 3 64 -25 89
        -48 43 -358 63 -521 33z m-1710 -3167 l-358 -358 -52 52 -53 53 357 357 358
        358 52 -52 53 -53 -357 -357z m-625 -475 c15 -11 38 -35 50 -54 20 -28 23 -44
        20 -92 -3 -36 -12 -67 -24 -85 -24 -32 -98 -72 -134 -72 -40 0 -113 42 -137
        79 -27 40 -31 117 -9 159 18 34 53 68 86 81 37 16 117 7 148 -16z"/>
        <path d="M606 4271 c-130 -130 -147 -151 -138 -168 20 -37 334 -528 346 -540
        7 -7 61 -14 141 -19 l130 -6 345 -344 345 -344 125 125 125 125 -344 344 -344
        344 -6 131 c-4 72 -11 135 -16 140 -6 5 -125 82 -265 171 -140 90 -264 169
        -275 176 -19 13 -31 3 -169 -135z"/>
        <path d="M3460 2089 c-19 -11 -77 -62 -128 -112 l-92 -92 -98 98 -97 97 -125
        -125 -125 -125 98 -98 97 -97 -71 -70 c-39 -39 -89 -92 -110 -118 -34 -43 -39
        -55 -39 -100 l0 -51 443 -444 c499 -500 492 -494 632 -500 64 -3 92 1 140 19
        54 20 80 41 268 228 249 247 272 282 272 416 -1 146 5 139 -488 634 -244 245
        -446 439 -464 447 -44 19 -72 18 -113 -7z m242 -810 l301 -301 -54 -54 -54
        -54 -302 302 -303 303 52 52 c29 29 54 53 56 53 2 0 139 -135 304 -301z"/>
        </g>
    </svg>
    </>
  )
}

export default Mantenance