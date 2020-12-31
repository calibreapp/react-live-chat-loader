import React from 'react'

import { useChat } from '../../'
import STATES from '../../utils/states'

const styles = {
  container: {
    zIndex: '1',
    position: 'fixed',
    border: '0',
    width: '64px',
    height: '64px',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 8px 16px 0px',
    borderRadius: '50%',
    left: 'auto',
    right: 'calc(2% + 24px)',
    bottom: '20px'
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
    border: '0',
    borderRadius: '50%'
  },
  icon: {
    fontSize: '36px',
    color: 'rgb(255, 255, 255)'
  }
}

const Userlike = ({ color, backgroundColor }) => {
  const [state, loadChat] = useChat({ loadWhenIdle: true })

  if (state === STATES.COMPLETE) return null
  return (
    <div style={{ ...styles.container }}>
      <button
        onClick={() => loadChat({ open: true })}
        onMouseEnter={() => loadChat({ open: false })}
        style={{
          ...styles.button,
          color,
          backgroundColor
        }}
      >
        <svg width="1em" height="1em" viewBox="0 0 36 36" fill="none" style={{ ...styles.icon }}>
          <path fillRule="evenodd" clipRule="evenodd" d="M18 36c2.893 0 5.626-.682 8.047-1.895h5.11a2 2 0 002-2v-4.393A17.916 17.916 0 0036 18c0-9.941-8.059-18-18-18S0 8.059 0 18s8.059 18 18 18zM9.5 22a1.5 1.5 0 000 3h17a1.5 1.5 0 000-3h-17zm1.5-4a1.5 1.5 0 011.5-1.5h14a1.5 1.5 0 010 3h-14A1.5 1.5 0 0111 18zm-1.5-7a1.5 1.5 0 000 3h17a1.5 1.5 0 000-3h-17z" fill="currentColor" />
        </svg>
      </button>
    </div>
  )
}

Userlike.defaultProps = {
  color: 'white',
  backgroundColor: '#0d8cff'
}

export default Userlike
