import React, { CSSProperties } from 'react'

import useChat from '../../hooks/useChat'
import { ProviderProps, ClassNames } from '../../types'

const styles: {
  wrapper: CSSProperties
  launcher: CSSProperties
  icon: CSSProperties
  logo: CSSProperties
  close: CSSProperties
} = {
  wrapper: {
    fontFamily:
      'intercom-font, "Helvetica Neue", "Apple Color Emoji", Helvetica, Arial, sans-serif',
    color: 'white',
    fontSize: '16px',
    lineHeight: 1.5,
    WebkitTextSizeAdjust: '100%',
    WebkitFontSmoothing: 'antialiased'
  },
  launcher: {
    position: 'fixed',
    // z-index is 1 more than Intercom's actual launcher as when the real widget loads
    // it might not initially reflect the fake icon's current state (open/closed)
    zIndex: 2147483004,
    padding: '0 !important',
    margin: '0 !important',
    border: 'none',
    bottom: '20px',
    right: '20px',
    maxWidth: '48px',
    width: '48px',
    maxHeight: '48px',
    height: '48px',
    borderRadius: '50%',
    background: '#333333',
    cursor: 'pointer',
    boxShadow:
      '0 1px 6px 0 rgba(0, 0, 0, 0.06), 0 2px 32px 0 rgba(0, 0, 0, 0.16)',
    transition: 'transform 167ms cubic-bezier(0.33, 0.00, 0.00, 1.00)',
    boxSizing: 'content-box'
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
  logo: {
    transform: 'rotate(0deg) scale(1)'
  },
  close: {
    transform: 'rotate(-60deg) scale(0)'
  }
}

interface Props extends ProviderProps {
  color?: string
}

const Intercom = ({
  color = '#333333',
  containerClass = ClassNames.container
}: Props): JSX.Element | null => {
  const [state, loadChat] = useChat({ loadWhenIdle: true })

  if (state === 'complete') {
    return null
  }

  return (
    <div
      className={containerClass}
      style={{
        ...styles.wrapper,
        background: color
      }}
    >
      <div
        role="button"
        aria-label="Load Chat"
        aria-busy="true"
        aria-live="polite"
        onClick={() => loadChat({ open: true })}
        onMouseEnter={() => loadChat({ open: false })}
        style={styles.launcher}
      >
        <div
          style={{
            ...styles.icon,
            ...styles.logo,
            opacity: state === 'initial' ? 1 : 0
          }}
        >
          <svg
            height="24px"
            width="24px"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 28 32"
          >
            <path
              fill="white"
              d="M28 32s-4.714-1.855-8.527-3.34H3.437C1.54 28.66 0 27.026 0 25.013V3.644C0 1.633 1.54 0 3.437 0h21.125c1.898 0 3.437 1.632 3.437 3.645v18.404H28V32zm-4.139-11.982a.88.88 0 00-1.292-.105c-.03.026-3.015 2.681-8.57 2.681-5.486 0-8.517-2.636-8.571-2.684a.88.88 0 00-1.29.107 1.01 1.01 0 00-.219.708.992.992 0 00.318.664c.142.128 3.537 3.15 9.762 3.15 6.226 0 9.621-3.022 9.763-3.15a.992.992 0 00.317-.664 1.01 1.01 0 00-.218-.707z"
            ></path>
          </svg>
        </div>
        <div
          style={{
            ...styles.icon,
            ...styles.close,
            opacity: state === 'initial' ? 0 : 1,
            transform: state === 'initial' ? 'rotate(-30deg)' : 'rotate(0deg)'
          }}
        >
          <svg
            focusable="false"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.601 8.39897C18.269 8.06702 17.7309 8.06702 17.3989 8.39897L12 13.7979L6.60099 8.39897C6.26904 8.06702 5.73086 8.06702 5.39891 8.39897C5.06696 8.73091 5.06696 9.2691 5.39891 9.60105L11.3989 15.601C11.7309 15.933 12.269 15.933 12.601 15.601L18.601 9.60105C18.9329 9.2691 18.9329 8.73091 18.601 8.39897Z"
              fill="white"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Intercom
