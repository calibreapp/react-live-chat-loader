import React from 'react'

import { useChat } from '../../'
import useWindowHeight from '../../hooks/useWindowHeight'
import STATES from '../../utils/states'

const styles = {
  wrapper: {
    borderRadius: '55px',
    height: '60px',
    width: '60px',
    bottom: '40px',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 7px',
    position: 'fixed',
    right: '40px',
    top: 'auto',
    borderStyle: 'none',
    transition:
      'box-shadow 250ms ease 0s, opacity 0.4s ease 0s, transform 0.2s ease-in-out 0s'
  },
  button: {
    appearance: 'none',
    alignItems: 'center',
    bottom: '0px',
    display: 'block',
    justifyContent: 'center',
    position: 'relative',
    userSelect: 'none',
    zIndex: '999',
    color: 'white',
    cursor: 'pointer',
    minWidth: '60px',
    WebkitTapHighlightColor: 'transparent',
    height: '60px',
    lineHeight: '60px',
    borderRadius: '120px',
    margin: '0px',
    outline: 'none',
    padding: '0px',
    borderStyle: 'none',
    transition: 'background-color 200ms linear 0s, transform 200ms linear 0s'
  },
  icon: {
    alignItems: 'center',
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    height: '100%',
    WebkitBoxPack: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
    position: 'absolute',
    textIndent: '-99999px',
    top: '0px',
    width: '60px',
    willChange: 'opacity, transform',
    left: 'auto',
    right: '0px',
    opacity: '1 !important',
    transition: 'opacity 80ms linear 0s, transform 160ms linear 0s'
  },
  close: {
    WebkitBoxAlign: 'center',
    alignItems: 'center',
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    height: '100%',
    WebkitBoxPack: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
    position: 'absolute',
    textIndent: '-99999px',
    top: '0px',
    width: '60px',
    willChange: 'opacity, transform',
    left: 'auto',
    right: '0px',
    transition: 'opacity 80ms linear 0s, transform 160ms linear 0s'
  }
}

const getIcon = icon => {
  switch (icon) {
    case 'message':
      return (
        <svg width="24" height="22" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.347 20.871l-.003-.05c0 .017.001.034.003.05zm-.243-4.278a2 2 0 0 1 .513-1.455c1.11-1.226 1.383-2.212 1.383-4.74C22 5.782 18.046 2 13.125 2h-2.25C5.954 2 2 5.78 2 10.399c0 4.675 4.01 8.626 8.875 8.626h2.25c.834 0 1.606-.207 3.212-.798a2 2 0 0 1 1.575.083l2.355 1.161-.163-2.878zM10.875 0h2.25C19.13 0 24 4.656 24 10.399c0 2.6-.25 4.257-1.9 6.08l.243 4.279c.072.845-.807 1.471-1.633 1.162l-3.682-1.816c-1.212.446-2.527.921-3.903.921h-2.25C4.869 21.025 0 16.142 0 10.4 0 4.656 4.869 0 10.875 0z"
            fill="#FFF"
          />
        </svg>
      )
    case 'antenna':
      return (
        <svg width="28" height="26" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.002 12a3.01 3.01 0 0 0-3.015 3c0 1.654 1.353 3 3.015 3a3.01 3.01 0 0 0 3.014-3c0-1.654-1.353-3-3.014-3m-1.005 7.9c-2.29-.465-4.019-2.485-4.019-4.9 0-2.757 2.254-5 5.024-5s5.023 2.243 5.023 5c0 2.415-1.729 4.435-4.019 4.9V25c0 .552-.45 1-1.004 1a1.003 1.003 0 0 1-1.005-1v-5.1zm9.36-7.345c-.393 0-.768-.232-.928-.617A8.019 8.019 0 0 0 14.001 7a8.018 8.018 0 0 0-7.426 4.936c-.213.51-.8.753-1.314.54a1 1 0 0 1-.543-1.307A10.024 10.024 0 0 1 14 5c4.078 0 7.722 2.422 9.284 6.17a.998.998 0 0 1-.927 1.385M1.005 10.637a1.005 1.005 0 0 1-.928-1.384C2.422 3.632 7.887 0 14.001 0c6.111 0 11.576 3.629 13.922 9.246a.998.998 0 0 1-.542 1.307 1.006 1.006 0 0 1-1.313-.54C24.033 5.146 19.298 2 14.001 2 8.703 2 3.965 5.148 1.933 10.02c-.16.385-.535.617-.928.617"
            fill="#FFF"
            fillRule="evenodd"
          />
        </svg>
      )
    case 'search':
      return (
        <svg width="23" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.79 15.46C17.184 13.982 18 12.07 18 10a8 8 0 1 0-8 8c1.676 0 3.24-.544 4.578-1.488l.659-.465.554-.588zm6.41 6.326a.999.999 0 0 1-.002 1.412.999.999 0 0 1-1.412.002l-5.095-5.094C14.064 19.256 12.142 19.997 10 20c-5.515.008-10.008-4.485-10-10C.008 4.485 4.485.008 10 0c5.515-.008 10.008 4.485 10 10-.004 2.652-1.105 5-2.794 6.791l4.994 4.995zM14 9c0-1.654-1.346-3-3-3a1 1 0 0 1 0-2c2.757 0 5 2.243 5 5a1 1 0 0 1-2 0z"
            fill="#FFF"
          />
        </svg>
      )
    case 'question':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52">
          <path
            id="a"
            d="M27.031 32h-2.488v-2.046c0-.635.077-1.21.232-1.72.154-.513.366-.972.639-1.381.272-.41.58-.779.923-1.109.345-.328.694-.652 1.049-.97l.995-.854a6.432 6.432 0 0 0 1.475-1.568c.39-.59.585-1.329.585-2.216 0-.635-.117-1.203-.355-1.703a3.7 3.7 0 0 0-.96-1.263 4.305 4.305 0 0 0-1.401-.783A5.324 5.324 0 0 0 26 16.114c-1.28 0-2.316.375-3.11 1.124-.795.75-1.286 1.705-1.475 2.865L19 19.693c.356-1.772 1.166-3.165 2.434-4.176C22.701 14.507 24.26 14 26.107 14c.947 0 1.842.131 2.682.392.84.262 1.57.648 2.185 1.16a5.652 5.652 0 0 1 1.475 1.892c.368.75.551 1.602.551 2.556 0 .728-.083 1.364-.248 1.909a5.315 5.315 0 0 1-.693 1.467 6.276 6.276 0 0 1-1.048 1.176c-.403.351-.83.71-1.28 1.073-.498.387-.918.738-1.26 1.057a4.698 4.698 0 0 0-.836 1.006 3.847 3.847 0 0 0-.462 1.176c-.095.432-.142.955-.142 1.568V32zM26 37a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
            fill="#FFF"
            fillRule="evenodd"
          />
        </svg>
      )
    case 'beacon':
      return (
        <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M26.244 21.523l-4.356-4.355a7.192 7.192 0 0 0 0-4.345l4.356-4.355a12.98 12.98 0 0 1 0 13.055zm-.4 3.215l-1.1 1.1a.557.557 0 0 1-.786 0l-4.884-4.884a7.27 7.27 0 0 0 1.885-1.886l4.885 4.885a.55.55 0 0 1 0 .785zM8.471 26.236l4.355-4.354a7.197 7.197 0 0 0 4.347 0l4.355 4.354a12.983 12.983 0 0 1-13.057 0zm-2.43-.398a.556.556 0 0 1-.786 0l-1.1-1.1a.556.556 0 0 1 0-.786l4.884-4.884a7.275 7.275 0 0 0 1.887 1.886L6.04 25.838zm-2.285-4.315a12.98 12.98 0 0 1 0-13.055l4.355 4.354a7.192 7.192 0 0 0 0 4.347l-4.355 4.354zm.399-16.27l1.1-1.1a.554.554 0 0 1 .785 0l4.886 4.884a7.27 7.27 0 0 0-1.887 1.885L4.155 6.039a.556.556 0 0 1 0-.786zm17.373-1.5l-4.355 4.355a7.229 7.229 0 0 0-4.347 0L8.471 3.754a12.99 12.99 0 0 1 13.057 0zm-1.305 11.242A5.228 5.228 0 0 1 15 20.217a5.228 5.228 0 0 1-5.224-5.222A5.228 5.228 0 0 1 15 9.773a5.23 5.23 0 0 1 5.223 5.222zm3.735-10.842a.556.556 0 0 1 .786 0l1.1 1.1a.553.553 0 0 1 0 .786l-4.884 4.883a7.302 7.302 0 0 0-1.886-1.885l4.884-4.884zm3.688 2.786c.23-.39.362-.83.362-1.293 0-.683-.266-1.325-.75-1.807l-1.098-1.1a2.555 2.555 0 0 0-3.101-.387 14.985 14.985 0 0 0-16.125.004c-.973-.548-2.284-.426-3.093.383l-1.101 1.1a2.533 2.533 0 0 0-.387 3.1 14.97 14.97 0 0 0 0 16.114 2.553 2.553 0 0 0 .387 3.099l1.1 1.1A2.549 2.549 0 0 0 5.649 28a2.55 2.55 0 0 0 1.293-.361A14.961 14.961 0 0 0 15 30.002a14.97 14.97 0 0 0 8.059-2.363c.398.234.844.36 1.292.36.655 0 1.31-.25 1.809-.747l1.099-1.1a2.531 2.531 0 0 0 .387-3.1 14.963 14.963 0 0 0 0-16.113z"
            fill="#FFF"
            fillRule="evenodd"
          />
        </svg>
      )
    case 'close':
    default:
      return (
        <svg width={14} height={14} xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.707.293a.999.999 0 0 0-1.414 0L7 5.586 1.707.293A.999.999 0 1 0 .293 1.707L5.586 7 .293 12.293a.999.999 0 1 0 1.414 1.414L7 8.414l5.293 5.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L8.414 7l5.293-5.293a.999.999 0 0 0 0-1.414"
            fill="#FFF"
            fillRule="evenodd"
          />
        </svg>
      )
  }
}

const HelpScout = ({ color, icon, zIndex, horizontalPosition }) => {
  const [state, loadChat] = useChat({ loadWhenIdle: true })
  const windowHeight = useWindowHeight()

  if (state === STATES.COMPLETE) return null

  return (
    <div
      style={{
        ...styles.wrapper,
        bottom: windowHeight < 740 ? '10px' : '40px',
        right:
          horizontalPosition === 'left'
            ? 'auto'
            : windowHeight < 740
            ? '20px'
            : '40px',
        left:
          horizontalPosition === 'right'
            ? 'auto'
            : windowHeight < 740
            ? '20px'
            : '40px',
        zIndex
      }}
    >
      <button
        onClick={() => loadChat({ open: true })}
        onMouseEnter={() => loadChat({ open: false })}
        style={{
          ...styles.button,
          backgroundColor: color
        }}
      >
        <span
          style={{
            ...styles.icon,
            transform:
              state === STATES.INITIAL
                ? 'rotate(0deg) scale(1)'
                : 'rotate(30deg) scale(0)'
          }}
        >
          {getIcon(icon)}
        </span>
        <span
          style={{
            ...styles.close,
            opacity: state === STATES.INITIAL ? 0 : 1,
            transform:
              state === STATES.INITIAL
                ? 'rotate(30deg) scale(0)'
                : 'rotate(0deg) scale(1)'
          }}
        >
          {getIcon('close')}
        </span>
      </button>
    </div>
  )
}

HelpScout.defaultProps = {
  color: '#976ad4',
  icon: 'beacon',
  zIndex: '1050',
  horizontalPosition: 'left'
}

export default HelpScout
