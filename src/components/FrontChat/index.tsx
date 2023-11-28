import React, { CSSProperties } from 'react'

import useChat from '../../hooks/useChat'

const styles: {
  button: CSSProperties
} = {
  // Add widget styles here
  button: {
    // Add button styles here
    position: 'fixed',
    zIndex: 999,
    bottom: '20px',
    right: '20px',
    maxWidth: '48px',
    width: '48px',
    maxHeight: '48px',
    height: '48px',
    borderRadius: '50px',
    cursor: 'pointer'
  }
}

const FrontChat = ({ color }: { color: string }) => {
  const [state, loadChat] = useChat({ loadWhenIdle: true })

  if (state === 'complete') {
    return null
  }

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
        Button
      </button>
    </div>
  )
}

FrontChat.defaultProps = {
  color: 'red'
}

export default FrontChat
