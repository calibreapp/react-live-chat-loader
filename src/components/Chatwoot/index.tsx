import React, { CSSProperties } from 'react'

import useChat from '../../hooks/useChat'

const styles: {
  button: CSSProperties
  img: CSSProperties
  expandedButton: CSSProperties
  expandedImg: CSSProperties
  launcherTitle: CSSProperties
  close: CSSProperties
} = {
  button: {
    borderRadius: '100px',
    bottom: '20px',
    right: '20px',
    boxShadow: '0 8px 24px rgb(0 0 0 / 16%)',
    cursor: 'pointer',
    height: '64px',
    position: 'fixed',
    width: '64px',
    zIndex: 2147483001, // 1 more than the actual widget
    userSelect: 'none'
  },
  img: {
    height: '24px',
    margin: '20px',
    width: '24px'
  },
  expandedButton: {
    display: 'flex',
    bottom: '24px',
    height: '48px',
    width: 'auto'
  },
  expandedImg: {
    height: '20px',
    margin: '14px 8px 14px 16px',
    width: '20px'
  },
  launcherTitle: {
    display: 'flex',
    color: '#fff',
    alignItems: 'center',
    paddingRight: '20px',
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, Arial, sans-serif',
    fontSize: '16px',
    fontWeight: 500
  },
  close: {
    backgroundColor: '#fff',
    height: '24px',
    left: '32px',
    position: 'absolute',
    top: '20px',
    width: '2px'
  }
}

interface Props {
  color?: string
  launcherTitle?: string
}

const Provider = ({ color, launcherTitle }: Props): JSX.Element | null => {
  const [state, loadChat] = useChat({ loadWhenIdle: true })

  if (state === 'complete') return null

  return (
    <div>
      <div
        role="button"
        aria-label="Load Chat"
        aria-busy="true"
        aria-live="polite"
        onClick={() => loadChat({ open: true })}
        onMouseEnter={() => loadChat({ open: false })}
        style={{
          ...styles.button,
          ...(launcherTitle && styles.expandedButton),
          backgroundColor: color
        }}
      >
        {state === 'initial' ? (
          <>
            <img
              style={{
                ...styles.img,
                ...(launcherTitle && styles.expandedImg)
              }}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAUVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////8IN+deAAAAGnRSTlMAAwgJEBk0TVheY2R5eo+ut8jb5OXs8fX2+cjRDTIAAADsSURBVHgBldZbkoMgFIThRgQv8SKKgGf/C51UnJqaRI30/9zfe+NQUQ3TvG7bOk9DVeCmshmj/CuOTYnrdBfkUOg0zlOtl9OWVuEk4+QyZ3DIevmSt/ioTvK1VH/s5bY3YdM9SBZ/mUUyWgx+U06ycgp7D8msxSvtc4HXL9BLdj2elSEfhBJAI0QNgJEBI1BEBsQClVBVGDgwYOLAhJkDM1YOrNg4sLFAsLJgZsHEgoEFFQt0JAFGFjQsKAMJ0LFAexKgZYFyJIDxJIBNJEDNAtSJBLCeBDCOBFAPzwFA94ED+zmhwDO9358r8ANtIsMXi7qVAwAAAABJRU5ErkJggg=="
              alt="bubble-icon"
            />
            {launcherTitle ? (
              <div style={styles.launcherTitle}>{launcherTitle}</div>
            ) : null}
          </>
        ) : (
          <>
            <div style={{ ...styles.close, transform: 'rotate(45deg)' }} />
            <div style={{ ...styles.close, transform: 'rotate(-45deg)' }} />
          </>
        )}
      </div>
    </div>
  )
}

Provider.defaultProps = {
  color: '#1f93ff'
}

export default Provider
