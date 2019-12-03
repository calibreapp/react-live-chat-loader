import React from 'react'
import PropTypes from "prop-types";

import { useChat } from '../../'
import STATES from '../../utils/states'

const styles = {
  widgetContainer: {
    zIndex: 2147483647,
    position: 'fixed',
    display: 'block',
    bottom: '24px',
    right: '24px',
    height: '76px !important',
    width: '76px !important',
  },
  container: {
    WebkitFontSmoothing: 'antialiased',
    fontSize: 16,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: '.75rem',
    flexDirection: 'column'
  },
  button: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fill: '#fff',
    cursor: 'pointer',
    height: 52,
    width: 52,
    borderRadius: '.3125rem',
    boxShadow: '0 2px 6px 0 rgba(0,0,0,.4)',
    overflow: 'hidden',
    outline: 'none',
    border: 'none'
  },
  iconWrapper: {
    fill: 'inherit',
    stroke: 'inherit',
    width: '100%',
    padding: 0,
    lineHeight: 0
  }
}

const Drift = ({ color, icon }) => {
  const [state, loadChat] = useChat({ loadWhenIdle: true })

  if (state === STATES.COMPLETE) return null
  return (
    <div style={styles.widgetContainer}>
      <div style={styles.container}>
        <div
          onClick={() => loadChat({ open: true })}
          onMouseEnter={() => loadChat({ open: false })}
          style={{
            backgroundColor: color,
            ...styles.button
          }}
        >
          <i 
            style={{
              ...styles.iconWrapper,
              opacity: state === STATES.INITIAL ? 1 : 0.75
            }}
          >
            {icon === "A" ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                focusable="false"
                aria-hidden="true"
                style={{
                  display: state === STATES.INITIAL ? "initial" : "none"
                }}
              >
                <path
                  d="M4.583 14.894l-3.256 3.78c-.7.813-1.26.598-1.25-.46a10689.413 10689.413 0 0 1 .035-4.775V4.816a3.89 3.89 0 0 1 3.88-3.89h12.064a3.885 3.885 0 0 1 3.882 3.89v6.185a3.89 3.89 0 0 1-3.882 3.89H4.583z"
                  fill="rgb(255, 255, 255)"
                  fill-rule="evenodd"
                />
              </svg>
            ) : icon === "B" ? (
              <svg
                width="25"
                height="23"
                viewBox="0 0 25 23"
                focusable="false"
                aria-hidden="true"
                style={{
                  display: state === STATES.INITIAL ? "initial" : "none"
                }}
              >
                <path
                  d="M24.516 9.953C24.516 4.453 19.04 0 12.258 0 5.476 0 0 4.452 0 9.953c0 3.318 1.986 6.24 5.05 8.053-.34 2.552-1.815 4.055-1.844 4.084-.14.14-.17.368-.113.567a.524.524 0 0 0 .482.312c2.95 0 5.335-1.93 6.612-3.206.652.086 1.362.142 2.07.142 6.783 0 12.26-4.452 12.26-9.953z"
                  fill="rgb(255, 255, 255)"
                  fill-rule="evenodd"
                />
              </svg>
            ) : icon === "C" ? (
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                focusable="false"
                aria-hidden="true"
                style={{
                  display: state === STATES.INITIAL ? "initial" : "none"
                }}
              >
                <path
                  d="M22.814 12.25h-1.362v3.063a1.02 1.02 0 0 1-1.744.72L15.92 12.25H11.92c-.94 0-1.703-.785-1.703-1.75V1.75c0-.965.764-1.75 1.703-1.75h10.896c.938 0 1.702.785 1.702 1.75v8.75c0 .965-.764 1.75-1.702 1.75zm-.34-10.208H12.257v8.166h4.086a1.032 1.032 0 0 1 .723.3l2.342 2.34v-1.62c0-.562.456-1.02 1.02-1.02h2.043V2.042zM8.17 10.208h-6.13v8.167h2.044c.564 0 1.022.457 1.022 1.02v1.62l2.34-2.34a1.022 1.022 0 0 1 .724-.3h4.086V14.29a1.02 1.02 0 0 1 2.043 0v4.377c0 .965-.763 1.75-1.702 1.75H8.595L4.808 24.2a1.022 1.022 0 0 1-1.743-.72v-3.063H1.702c-.938 0-1.702-.785-1.702-1.75v-8.75c0-.965.764-1.75 1.702-1.75h6.47a1.022 1.022 0 0 1 0 2.04z" 
                  fill="rgb(255, 255, 255)"
                  fill-rule="evenodd"
                />
              </svg>
            ) : icon === "D" ? (
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                focusable="false"
                aria-hidden="true"
                style={{
                  display: state === STATES.INITIAL ? "initial" : "none"
                }}
              >
                <path
                  d="M23.295 24.412a.987.987 0 0 1-1.123-.43L19.9 20.358H9.527c-1.392 0-2.523-1.153-2.523-2.57V16.3c0-.563.448-1.02 1-1.02.553 0 1 .457 1 1.02v1.485c0 .295.235.533.523.533h10.92c.036 0 .067.018.103.022a.96.96 0 0 1 .527.224.984.984 0 0 1 .14.15c.023.026.054.043.073.075l.725 1.154V9.7a.528.528 0 0 0-.523-.532h-1.48c-.55 0-1-.457-1-1.02 0-.56.45-1.018 1-1.018h1.48c1.392 0 2.524 1.152 2.524 2.57V23.433c0 .452-.293.85-.72.978zM14.49 13.226H4.116L1.844 16.85a.997.997 0 0 1-1.124.43 1.017 1.017 0 0 1-.72-.978V2.57C0 1.152 1.132 0 2.523 0H14.49c1.39 0 2.52 1.152 2.52 2.57v8.085c0 1.418-1.13 2.57-2.52 2.57zm.52-10.656a.528.528 0 0 0-.52-.532H2.522c-.288 0-.522.24-.522.532v10.242l.726-1.153c.02-.032.05-.05.07-.076a.897.897 0 0 1 .296-.256.92.92 0 0 1 .372-.118c.037-.004.068-.022.104-.022h10.92c.288 0 .522-.238.522-.533V2.57z"
                  fill="rgb(255, 255, 255)"
                  fill-rule="evenodd"
                />
              </svg>
            ) : null}

            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              focusable="false"
              aria-hidden="true"
              style={{
                display: state === STATES.INITIAL ? 'none' : 'initial' 
              }}
            >
              <path
                d="M16.726 15.402c.365.366.365.96 0 1.324-.178.178-.416.274-.663.274-.246 0-.484-.096-.663-.274L8.323 9.648h.353L1.6 16.726c-.177.178-.416.274-.663.274-.246 0-.484-.096-.663-.274-.365-.365-.365-.958 0-1.324L7.35 8.324v.35L.275 1.6C-.09 1.233-.09.64.274.274c.367-.365.96-.365 1.326 0l7.076 7.078h-.353L15.4.274c.366-.365.96-.365 1.326 0 .365.366.365.958 0 1.324L9.65 8.675v-.35l7.076 7.077z"
                fill="rgb(255, 255, 255)"
                fill-rule="evenodd"
              />
            </svg>
          </i>
        </div>
      </div>
    </div>
  )
}

Drift.propTypes = {
  /**
   * Change the style of the Drift messenger icon, one of the four default types available when setting up your Drift messenger or in the Drift Widget "Widget icon" settings. 
   */
  icon: PropTypes.oneOf(['A', 'B', 'C', 'D']).isRequired
}

Drift.defaultProps = {
  color: '#0176ff',
  icon: 'A'
}

export default Drift
