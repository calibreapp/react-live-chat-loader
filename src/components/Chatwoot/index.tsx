import useChat from 'hooks/useChat'
import React, { useState, useEffect, CSSProperties } from 'react'

const styles: { button: CSSProperties } = {
  button: {
    borderRadius: '100px !important',
    bottom: '20px',
    boxShadow: '0 8px 24px rgb(0 0 0 / 16%) !important',
    cursor: 'pointer',
    height: '64px !important',
    position: 'fixed',
    width: '64px !important',
    zIndex: 2147483001,
    userSelect: 'none'
  }
}

interface Props {
  color?: string
}

const Provider = ({ color }: Props) => {
  const [state, loadChat] = useChat({ loadWhenIdle: true })

  if (state === 'complete') return null

  return (
    <div>
      <button
        onClick={() => loadChat({ open: true })}
        onMouseEnter={() => loadChat({ open: false })}
        style={{
          ...styles.button,
          backgroundColor: color
        }}
      >
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAUVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////8IN+deAAAAGnRSTlMAAwgJEBk0TVheY2R5eo+ut8jb5OXs8fX2+cjRDTIAAADsSURBVHgBldZbkoMgFIThRgQv8SKKgGf/C51UnJqaRI30/9zfe+NQUQ3TvG7bOk9DVeCmshmj/CuOTYnrdBfkUOg0zlOtl9OWVuEk4+QyZ3DIevmSt/ioTvK1VH/s5bY3YdM9SBZ/mUUyWgx+U06ycgp7D8msxSvtc4HXL9BLdj2elSEfhBJAI0QNgJEBI1BEBsQClVBVGDgwYOLAhJkDM1YOrNg4sLFAsLJgZsHEgoEFFQt0JAFGFjQsKAMJ0LFAexKgZYFyJIDxJIBNJEDNAtSJBLCeBDCOBFAPzwFA94ED+zmhwDO9358r8ANtIsMXi7qVAwAAAABJRU5ErkJggg=="
          alt="bubble-icon"
        />
      </button>
    </div>
  )
}

Provider.defaultProps = {
  color: '#1f93ff'
}

export default Provider
