'use client'

import { useEffect, useRef } from 'react'
import { throttle } from 'lodash-es'

const TextureBubble = () => {
  const ref = useRef<HTMLDivElement>()

  useEffect(() => {
    const onMove = throttle((event) => {
      if (!ref.current) return

      ref.current.style.setProperty('left', `${event.pageX - 150}px`)
      ref.current.style.setProperty(
        'background-position',
        `-${event.pageX}px -${event.pageY}px`
      )
      ref.current.style.setProperty('top', `${event.pageY - 150}px`)
    }, 100)
    document.documentElement.addEventListener('mousemove', onMove)

    return () => {
      document.documentElement.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <>
      <div className="texture" ref={ref} />
      <svg viewBox="0 0 300 300">
        <mask id="texture-mask">
          <circle
            cx="150"
            cy="150"
            r="150"
            fill="url(#texture-gradient)"
          ></circle>
        </mask>
        <defs>
          <radialGradient id="texture-gradient">
            <stop offset="0%" stopColor="black"></stop>
            <stop offset="100%" stopColor="white"></stop>
          </radialGradient>
        </defs>
      </svg>
      <style jsx>
        {`
          .texture {
            position: absolute;
            width: 300px;
            height: 300px;
            background-image: url('/textures/Texturelabs_InkPaint_322L.jpg');
            border-radius: 50%;
            z-index: -1;

            transition: top 0.1s linear, left 0.1s linear,
              background-position 0.1s linear;

            mask-image: url(#texture-mask);
            mask-mode: alpha;
            mask-size: cover;
          }

          svg {
          }
        `}
      </style>
    </>
  )
}

export default TextureBubble