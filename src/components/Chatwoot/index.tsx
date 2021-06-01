import useChat from 'hooks/useChat'
import React, { CSSProperties } from 'react'

const styles: {
  button: CSSProperties
  img: CSSProperties
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
    zIndex: 2147483001,
    userSelect: 'none'
  },
  img: {
    height: '24px',
    margin: '20px',
    width: '24px'
  }
}

interface Props {
  color?: string
}

const Provider = ({ color }: Props): JSX.Element | null => {
  const [state, loadChat] = useChat({ loadWhenIdle: true })

  if (state === 'complete') return null

  return (
    <div>
      <div
        onClick={() => loadChat({ open: true })}
        onMouseEnter={() => loadChat({ open: false })}
        style={{
          ...styles.button,
          backgroundColor: color
        }}
      >
        <img
          style={styles.img}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAUVBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////8IN+deAAAAGnRSTlMAAwgJEBk0TVheY2R5eo+ut8jb5OXs8fX2+cjRDTIAAADsSURBVHgBldZbkoMgFIThRgQv8SKKgGf/C51UnJqaRI30/9zfe+NQUQ3TvG7bOk9DVeCmshmj/CuOTYnrdBfkUOg0zlOtl9OWVuEk4+QyZ3DIevmSt/ioTvK1VH/s5bY3YdM9SBZ/mUUyWgx+U06ycgp7D8msxSvtc4HXL9BLdj2elSEfhBJAI0QNgJEBI1BEBsQClVBVGDgwYOLAhJkDM1YOrNg4sLFAsLJgZsHEgoEFFQt0JAFGFjQsKAMJ0LFAexKgZYFyJIDxJIBNJEDNAtSJBLCeBDCOBFAPzwFA94ED+zmhwDO9358r8ANtIsMXi7qVAwAAAABJRU5ErkJggg=="
          alt="bubble-icon"
        />
      </div>
    </div>
  )
}

Provider.defaultProps = {
  color: '#1f93ff'
}

export default Provider
