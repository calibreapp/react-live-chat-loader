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
    zIndex: '2147483647', // 1 more than the actual widget
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
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g>
              <circle fill={color ? color : '#0084FF'} cx="30" cy="30" r="30" />
              <svg x="10" y="10">
                <g transform="translate(0.000000, -10.000000)" fill="#FFFFFF">
                  <g id="logo" transform="translate(0.000000, 10.000000)">
                    <path d="M20,0 C31.2666,0 40,8.2528 40,19.4 C40,30.5472 31.2666,38.8 20,38.8 C17.9763,38.8 16.0348,38.5327 14.2106,38.0311 C13.856,37.9335 13.4789,37.9612 13.1424,38.1098 L9.1727,39.8621 C8.1343,40.3205 6.9621,39.5819 6.9273,38.4474 L6.8184,34.8894 C6.805,34.4513 6.6078,34.0414 6.2811,33.7492 C2.3896,30.2691 0,25.2307 0,19.4 C0,8.2528 8.7334,0 20,0 Z M7.99009,25.07344 C7.42629,25.96794 8.52579,26.97594 9.36809,26.33674 L15.67879,21.54734 C16.10569,21.22334 16.69559,21.22164 17.12429,21.54314 L21.79709,25.04774 C23.19919,26.09944 25.20039,25.73014 26.13499,24.24744 L32.00999,14.92654 C32.57369,14.03204 31.47419,13.02404 30.63189,13.66324 L24.32119,18.45264 C23.89429,18.77664 23.30439,18.77834 22.87569,18.45674 L18.20299,14.95224 C16.80079,13.90064 14.79959,14.26984 13.86509,15.75264 L7.99009,25.07344 Z" />
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
