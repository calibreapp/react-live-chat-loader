import React, { useState, useEffect, CSSProperties, ReactElement } from 'react'

import useChat from '../../hooks/useChat'
import useWindowWidth from '../../hooks/useWindowWidth'
import { ProviderProps, ClassNames } from '../../types'

const styles: {
  container: CSSProperties
  button: CSSProperties
  icon: CSSProperties
  iconWrapper: CSSProperties
} = {
  container: {
    WebkitFontSmoothing: 'antialiased',
    fontSize: 16,
    display: 'flex',
    alignItems: 'flex-end',
    padding: '12px',
    flexDirection: 'column'
  },
  button: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fill: '#fff',
    cursor: 'pointer',
    height: '56px',
    width: '56px',
    borderRadius: '.3125rem',
    boxShadow: '0 2px 6px 0 rgba(0,0,0,.4)',
    overflow: 'hidden',
    outline: 'none',
    border: 'none'
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '48px',
    height: '48px',
    transition: 'transform 100ms linear, opacity 80ms linear'
  },
  iconWrapper: {
    fill: 'inherit',
    stroke: 'inherit',
    width: '100%',
    padding: 0,
    lineHeight: 0
  }
}

interface Props extends ProviderProps {
  color?: string
  icon?: ReactElement
}

const AdobeDynamicChat = ({
  color = '#0265dc',
  icon: Icon,
  containerClass = ClassNames.container
}: Props): JSX.Element | null => {
  const [state, loadChat] = useChat({ loadWhenIdle: true })
  const windowWidth = useWindowWidth()
  const [positionStyles, setPositionStyles] = useState<CSSProperties>({
    zIndex: 100,
    position: 'fixed',
    display: 'block'
  })

  useEffect(() => {
    setPositionStyles(state => ({
      ...state,
      bottom: windowWidth < 768 ? 0 : '48px',
      right: windowWidth < 768 ? 0 : '48px'
    }))
  }, [windowWidth])

  if (state === 'complete') {
    return null
  }

  return (
    <div className={containerClass} style={positionStyles}>
      <div style={styles.container}>
        <div
          role="button"
          aria-label="Load Chat"
          aria-busy="true"
          aria-live="polite"
          onClick={() => loadChat({ open: true })}
          onMouseEnter={() => loadChat({ open: false })}
          style={{
            backgroundColor: color,
            ...styles.icon,
            ...styles.button
          }}
        >
          {Icon || (
            <svg
              focusable="false"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              aria-hidden="true"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  fill="#ffffff"
                  d="M32.667 14h-1.334A1.335 1.335 0 0030 15.337v-1.8a5.508 5.508 0 00-5.508-5.508h-4.283L20.222 8l-1.59-5.477a.643.643 0 00-1.264 0L15.778 8l.01.031h-4.28A5.508 5.508 0 006 13.539v1.8A1.335 1.335 0 004.667 14H3.333A1.335 1.335 0 002 15.337v7.325A1.336 1.336 0 003.333 24h1.334A1.336 1.336 0 006 22.662v1.83A5.508 5.508 0 0011.508 30h12.984A5.508 5.508 0 0030 24.492v-1.83A1.336 1.336 0 0031.333 24h1.334A1.336 1.336 0 0034 22.662v-7.325A1.335 1.335 0 0032.667 14zM10 17a3 3 0 113 3 3 3 0 01-3-3zm12 8.49a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5h7a.5.5 0 01.5.5zM23 20a3 3 0 113-3 3 3 0 01-3 3z"
                ></path>
                <circle fill="#ffffff" cx="13" cy="17" r="1.5"></circle>
                <circle fill="#ffffff" cx="23" cy="17" r="1.5"></circle>
              </g>
            </svg>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdobeDynamicChat
