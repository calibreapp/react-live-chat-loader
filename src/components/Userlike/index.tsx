import React, { CSSProperties } from 'react'

import useChat from '../../hooks/useChat'
import { ProviderProps, ClassNames } from '../../types'

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
    fontSize: '40px'
  }
}

interface Props extends ProviderProps {
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
  vOffset = 'calc(0% + 20px)',
  hOffset = 'calc(0% + 24px)',
  style = 'round',
  containerClass = ClassNames.container
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
    <div
      className={containerClass}
      style={{ ...styles.container, ...positionStyles, ...shapeStyle }}
    >
      <button
        role="button"
        aria-label="Load Chat"
        aria-busy="true"
        aria-live="polite"
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
          viewBox="0 0 40 40"
          fill="none"
          style={{ ...styles.icon, color }}
        >
          <path
            d="M37.4 30.7c-.1-.5 0-.9.2-1.4 1.5-2.8 2.3-6 2.3-9.4C40 9 31 0 20 0 9 0 0 9 0 20s9 20 20 20c3.3 0 6.5-.9 9.4-2.3.4-.2.9-.3 1.4-.2l6.8 1.3c.7.1 1.3-.5 1.2-1.2l-1.4-6.9zM21 29h-8c-1.1 0-2-.9-2-2s.9-2 2-2h8c1.1 0 2 .9 2 2s-.9 2-2 2zm6-7H13c-1.1 0-2-.9-2-2s.9-2 2-2h14c1.1 0 2 .9 2 2s-.9 2-2 2zm0-7H13c-1.1 0-2-.9-2-2s.9-2 2-2h14c1.1 0 2 .9 2 2s-.9 2-2 2z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
    </div>
  )
}

export default Userlike
