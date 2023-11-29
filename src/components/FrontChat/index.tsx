import React, { CSSProperties } from 'react'
import useChat from '../../hooks/useChat'
import { ClassNames, ProviderProps } from '../../types'

const styles: {
  button: CSSProperties
  wrapper: CSSProperties
  iconWrapper: CSSProperties
  icon: CSSProperties
} = {
  wrapper: {
    position: 'fixed',
    // z-index is 1 more than FrontChat's actual launcher as when the real widget loads
    // it might not initially reflect the fake icon's current state (open/closed)
    zIndex: 100000000,
    bottom: '20px',
    right: '20px',
    border: 'none',
    outline: 'none',
    width: '64px',
    height: '64px'
  },
  button: {
    maxWidth: '64px',
    width: '64px',
    maxHeight: '64px',
    height: '64px',
    borderRadius: '64px',
    cursor: 'pointer',
    border: 'none'
  },
  iconWrapper: {
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  icon: {
    position: 'absolute',
    top: '50%',
    marginTop: '-21px',
    left: '50%',
    marginLeft: '-22px'
  }
}

interface Props extends ProviderProps {
  color?: string
}

const FrontChat = ({
  color = '#333333',
  containerClass = ClassNames.container
}: Props) => {
  const [state, loadChat] = useChat({ loadWhenIdle: true })

  if (state === 'complete') {
    return null
  }

  return (
    <div style={{ ...styles.wrapper }} className={containerClass}>
      <button
        onClick={() => loadChat({ open: true })}
        onMouseEnter={() => loadChat({ open: false })}
        style={{
          ...styles.button,
          backgroundColor: color
        }}
      >
        <div style={{ ...styles.iconWrapper }}>
          <svg width="40" height="40" role="button" style={{ ...styles.icon }}>
            <title>Launch Front Chat</title>
            <defs>
              <filter
                id="chat-logo-a"
                data-testid="chat-logo-shadow"
                width="127.8%"
                height="127.8%"
                x="-13.9%"
                y="-11.1%"
                filterUnits="objectBoundingBox"
              >
                <feOffset
                  dy="1"
                  in="SourceAlpha"
                  result="shadowOffsetOuter1"
                ></feOffset>
                <feGaussianBlur
                  in="shadowOffsetOuter1"
                  result="shadowBlurOuter1"
                  stdDeviation="1.5"
                ></feGaussianBlur>
                <feColorMatrix
                  in="shadowBlurOuter1"
                  values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0"
                ></feColorMatrix>
              </filter>
            </defs>
            <g fill="none" transform="translate(-11 -12)">
              <use
                data-testid="chat-logo-svg-shadow"
                fill="#000"
                filter="url(#chat-logo-a)"
                href="#chat-logo-b"
              ></use>
              <path
                fill="#FFF"
                d="M32,18 C24.2680135,18 18,24.2680135 18,32 C18,39.7319865 24.2680135,46 32,46 L45.6,46 C45.8209139,46 46,45.8209139 46,45.6 L46,32 C46,24.2680135 39.7319865,18 32,18 Z M32,14 C41.9411255,14 50,22.0588745 50,32 L50,45.6 C50,48.0300529 48.0300529,50 45.6,50 L32,50 C22.0588745,50 14,41.9411255 14,32 C14,22.0588745 22.0588745,14 32,14 Z M25.9634146,31.5853659 L37.9634146,31.5853659 C39.0679841,31.5853659 39.9634146,30.6899354 39.9634146,29.5853659 C39.9634146,28.4807964 39.0679841,27.5853659 37.9634146,27.5853659 L25.9634146,27.5853659 C24.8588451,27.5853659 23.9634146,28.4807964 23.9634146,29.5853659 C23.9634146,30.6899354 24.8588451,31.5853659 25.9634146,31.5853659 Z M31.195122,38.8292683 L37.195122,38.8292683 C38.2996915,38.8292683 39.195122,37.9338378 39.195122,36.8292683 C39.195122,35.7246988 38.2996915,34.8292683 37.195122,34.8292683 L31.195122,34.8292683 C30.0905525,34.8292683 29.195122,35.7246988 29.195122,36.8292683 C29.195122,37.9338378 30.0905525,38.8292683 31.195122,38.8292683 Z"
              ></path>
            </g>
          </svg>
        </div>
      </button>
    </div>
  )
}

export default FrontChat
