import React, { CSSProperties } from 'react'

import useChat from '../../hooks/useChat'

const styles: {
  container: CSSProperties
  button: CSSProperties
  icon: CSSProperties
} = {
  container: {
    zIndex: 2147483648, // one more than provider
    position: 'fixed',
    border: '0',
    width: '64px',
    height: '64px',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 8px 16px 0px',
    left: 'auto'
  },
  button: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '64px',
    minWidth: '64px',
    height: '64px',
    minHeight: '64px',
    padding: '0',
    cursor: 'pointer',
    border: '0'
  },
  icon: {
    fontSize: '36px'
  }
}

interface Props {
  color?: string
  backgroundColor?: string
  position?: string
  vOffset?: string
  hOffset?: string
  style?: string
}

const Userlike = ({
  color = 'white',
  backgroundColor = '#0d8cff',
  position = 'right',
  vOffset = '24px',
  hOffset = '24px',
  style = 'round'
}: Props): JSX.Element | null => {
  const [state, loadChat] = useChat({ loadWhenIdle: true })
  const positionStyles = {
    bottom: vOffset,
    right: position === 'left' ? 'auto' : hOffset,
    left: position === 'right' ? 'auto' : hOffset
  }
  const shapeStyle = {
    borderRadius: style === 'round' ? '50%' : '0'
  }

  if (state === 'complete') {
    return null
  }

  return (
    <div style={{ ...styles.container, ...positionStyles, ...shapeStyle }}>
      <button
        onClick={() => loadChat({ open: true })}
        onMouseEnter={() => loadChat({ open: false })}
        style={{
          ...styles.button,
          ...shapeStyle,
          backgroundColor
        }}
      >
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 36 36"
          fill="none"
          style={{ ...styles.icon, color }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 36c2.893 0 5.626-.682 8.047-1.895h5.11a2 2 0 002-2v-4.393A17.916 17.916 0 0036 18c0-9.941-8.059-18-18-18S0 8.059 0 18s8.059 18 18 18zM9.5 22a1.5 1.5 0 000 3h17a1.5 1.5 0 000-3h-17zm1.5-4a1.5 1.5 0 011.5-1.5h14a1.5 1.5 0 010 3h-14A1.5 1.5 0 0111 18zm-1.5-7a1.5 1.5 0 000 3h17a1.5 1.5 0 000-3h-17z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  )
}

export default Userlike
