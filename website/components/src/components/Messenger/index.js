import React, { memo } from 'react'

import { useChat, useProvider } from '../../'
import STATES from '../../utils/states'

const styles = {
  button: {
    appearance: 'none',
    background: 'none',
    borderRadius: '50%',
    bottom: '18pt',
    display: 'inline',
    height: '45pt',
    padding: '0px',
    position: 'fixed',
    right: '18pt',
    top: 'auto',
    width: '45pt',
    zIndex: '2147483647',
    overflow: 'hidden',
    boxShadow: '0 3px 12px rgba(0, 0, 0, .15)',
    transition: 'box-shadow 150ms linear',
    cursor: 'pointer',
    outline: 'none',
    userSelect: 'none'
  }
}

const CustomerChat = memo(
  ({
    providerKey,
    color,
    loggedInGreeting,
    loggedOutGreeting,
    greetingDialogDisplay,
    greetingDialogDelay
  }) => (
    <div
      className="fb-customerchat"
      page_id={providerKey}
      theme_color={color}
      logged_in_greeting={loggedInGreeting}
      logged_out_greeting={loggedOutGreeting}
      greeting_dialog_display={greetingDialogDisplay}
      greeting_dialog_delay={greetingDialogDelay}
    ></div>
  )
)

const Widget = ({ color }) => {
  const [state, loadChat] = useChat({ loadWhenIdle: true })

  if (state === STATES.COMPLETE) return null

  return (
    <div
      style={styles.button}
      onClick={() => loadChat({ open: true })}
      onMouseEnter={() => loadChat({ open: false })}
    >
      <svg width="60px" height="60px" viewBox="0 0 60 60">
        <svg x="0" y="0" width="60px" height="60px">
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="linearGradient-1"
            >
              <stop stopColor="#00B2FF" offset="0%" />
              <stop stopColor="#006AFF" offset="100%" />
            </linearGradient>
          </defs>
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g>
              <circle fill={color ? color : '#FFFFFF'} cx="30" cy="30" r="30" />
              <svg x="10" y="10">
                <g>
                  <rect id="container" x="0" y="0" width="40" height="40" />
                  <g id="logo">
                    <path
                      d="M20,0 C8.7334,0 0,8.2528 0,19.4 C0,25.2307 2.3896,30.2691 6.2811,33.7492 C6.6078,34.0414 6.805,34.4513 6.8184,34.8894 L6.9273,38.4474 C6.9621,39.5819 8.1343,40.3205 9.1727,39.8621 L13.1424,38.1098 C13.4789,37.9612 13.856,37.9335 14.2106,38.0311 C16.0348,38.5327 17.9763,38.8 20,38.8 C31.2666,38.8 40,30.5472 40,19.4 C40,8.2528 31.2666,0 20,0"
                      id="bubble"
                      fill={color ? '#FFFFFF' : 'url(#linearGradient-1)'}
                    />
                    <path
                      d="M7.99009,25.07344 L13.86509,15.75264 C14.79959,14.26984 16.80079,13.90064 18.20299,14.95224 L22.87569,18.45674 C23.30439,18.77834 23.89429,18.77664 24.32119,18.45264 L30.63189,13.66324 C31.47419,13.02404 32.57369,14.03204 32.00999,14.92654 L26.13499,24.24744 C25.20039,25.73014 23.19919,26.09944 21.79709,25.04774 L17.12429,21.54314 C16.69559,21.22164 16.10569,21.22334 15.67879,21.54734 L9.36809,26.33674 C8.52579,26.97594 7.42629,25.96794 7.99009,25.07344"
                      id="bolt"
                      fill={color ? color : '#FFFFFF'}
                    />
                  </g>
                </g>
              </svg>
            </g>
          </g>
        </svg>
      </svg>
    </div>
  )
}

const Messenger = ({ color, ...props }) => {
  const { providerKey } = useProvider()

  return (
    <>
      <CustomerChat color={color} providerKey={providerKey} {...props} />
      <Widget color={color} />
    </>
  )
}

Messenger.defaultProps = {
  color: ''
}

export default Messenger
