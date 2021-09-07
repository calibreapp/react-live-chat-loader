import React, { CSSProperties, useEffect, useState } from 'react'

import useChat from '../../hooks/useChat'
import useWindowWidth from '../../hooks/useWindowWidth'

const styles: {
  wrapper: CSSProperties
  region: CSSProperties
  launcher: CSSProperties
  logo: CSSProperties
  close: CSSProperties
} = {
  wrapper: {
    zIndex: 2147483004, // 1 more than the actual widget
    position: 'fixed',
    display: 'block',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    boxShadow:
      'rgba(0, 0, 0, 0.0588235) 0px 1px 6px 0px, rgba(0, 0, 0, 0.156863) 0px 2px 32px 0px'
  },
  region: {
    fontFamily:
      "intercom-font, 'Helvetica Neue', 'Apple Color Emoji', Helvetica, Arial, sans-serif",
    fontSize: '100%',
    fontStyle: 'normal',
    letterSpacing: 'normal',
    fontStretch: 'normal',
    fontVariantLigatures: 'normal',
    fontVariantCaps: 'normal',
    fontVariantEastAsian: 'normal',
    fontVariantPosition: 'normal',
    fontWeight: 'normal',
    textAlign: 'left',
    textDecorationLine: 'none',
    textDecorationStyle: 'initial',
    textDecorationColor: 'initial',
    textDecoration: 'none',
    textIndent: '0px',
    textShadow: 'none',
    textTransform: 'none',
    boxSizing: 'content-box',
    WebkitTextEmphasisStyle: 'none',
    WebkitTextEmphasisColor: 'initial',
    WebkitFontSmoothing: 'antialiased',
    lineHeight: 1
  },
  launcher: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    cursor: 'pointer',
    transformOrigin: 'center',
    overflowX: 'hidden',
    overflowY: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
    WebkitFontSmoothing: 'antialiased'
  },
  logo: {
    display: 'flex',
    WebkitBoxAlign: 'center',
    alignItems: 'center',
    WebkitBoxPack: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '0px',
    bottom: '0px',
    width: '100%',
    transform: 'rotate(0deg) scale(1)',
    transition: 'transform 0.16s linear 0s, opacity 0.08s linear 0s'
  },
  close: {
    display: 'flex',
    WebkitBoxAlign: 'center',
    alignItems: 'center',
    WebkitBoxPack: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '0px',
    bottom: '0px',
    width: '100%',
    transition: 'transform 0.16s linear 0s, opacity 0.08s linear 0s'
  }
}

interface Props {
  color?: string
  alignment?: 'left' | 'right'
  verticalPadding?: number
  horizontalPadding?: number
}

const DEFAULT_PADDING = 20
const DEFAULT_ALIGNMENT = 'right'
const INTERCOM_MOBILE_WIDTH = 900

const Intercom = ({
  color = '#333333',
  alignment = DEFAULT_ALIGNMENT,
  verticalPadding = DEFAULT_PADDING,
  horizontalPadding = DEFAULT_PADDING
}: Props): JSX.Element | null => {
  const [state, loadChat] = useChat({ loadWhenIdle: true })

  const [{ xPadding, yPadding }, setPaddingValues] = useState({
    yPadding: Math.max(DEFAULT_PADDING, verticalPadding),
    xPadding: Math.max(DEFAULT_PADDING, horizontalPadding)
  })
  const windowWidth = useWindowWidth()

  useEffect(() => {
    window.intercomSettings = {
      ...(window.intercomSettings ?? {}),
      alignment,
      background_color: color,
      vertical_padding: yPadding,
      horizontal_padding: xPadding
    }
  }, [])

  useEffect(() => {
    let padding = { yPadding: verticalPadding, xPadding: horizontalPadding }
    if (windowWidth <= INTERCOM_MOBILE_WIDTH) {
      padding = { yPadding: DEFAULT_PADDING, xPadding: DEFAULT_PADDING }
    }
    setPaddingValues(padding)
  }, [windowWidth])

  if (state === 'complete') {
    return null
  }

  return (
    <div
      style={{
        ...styles.wrapper,
        bottom: `${yPadding}px`,
        [alignment]: `${xPadding}px`,
        background: color
      }}
    >
      <div style={styles.region}>
        <div
          onClick={() => loadChat({ open: true })}
          onMouseEnter={() => loadChat({ open: false })}
          style={styles.launcher}
        >
          <div
            style={{
              ...styles.logo,
              opacity: state === 'initial' ? 1 : 0
            }}
          >
            <svg
              height="32px"
              width="28px"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 28 32"
            >
              <path
                fill="rgb(255, 255, 255)"
                d="M28,32 C28,32 23.2863266,30.1450667 19.4727818,28.6592 L3.43749107,28.6592 C1.53921989,28.6592 0,27.0272 0,25.0144 L0,3.6448 C0,1.632 1.53921989,0 3.43749107,0 L24.5615088,0 C26.45978,0 27.9989999,1.632 27.9989999,3.6448 L27.9989999,22.0490667 L28,22.0490667 L28,32 Z M23.8614088,20.0181333 C23.5309223,19.6105242 22.9540812,19.5633836 22.5692242,19.9125333 C22.5392199,19.9392 19.5537934,22.5941333 13.9989999,22.5941333 C8.51321617,22.5941333 5.48178311,19.9584 5.4277754,19.9104 C5.04295119,19.5629428 4.46760991,19.6105095 4.13759108,20.0170667 C3.97913051,20.2124916 3.9004494,20.4673395 3.91904357,20.7249415 C3.93763774,20.9825435 4.05196575,21.2215447 4.23660523,21.3888 C4.37862552,21.5168 7.77411059,24.5386667 13.9989999,24.5386667 C20.2248893,24.5386667 23.6203743,21.5168 23.7623946,21.3888 C23.9467342,21.2215726 24.0608642,20.9827905 24.0794539,20.7254507 C24.0980436,20.4681109 24.0195551,20.2135019 23.8614088,20.0181333 Z"
              />
            </svg>
          </div>
          <div
            style={{
              ...styles.close,
              opacity: state === 'initial' ? 0 : 1,
              transform: state === 'initial' ? 'rotate(-30deg)' : 'rotate(0deg)'
            }}
          >
            <svg
              focusable="false"
              viewBox="0 0 16 14"
              width="28"
              height="25"
              style={{ width: '16px' }}
            >
              <path
                fill="rgb(255, 255, 255)"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M.116 4.884l1.768-1.768L8 9.232l6.116-6.116 1.768 1.768L8 12.768.116 4.884z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

Intercom.defaultProps = {
  color: '#333333',
  alignment: DEFAULT_ALIGNMENT,
  verticalPadding: DEFAULT_PADDING,
  horizontalPadding: DEFAULT_PADDING
}

export default Intercom
