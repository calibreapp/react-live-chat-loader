import React from 'react'
import styled, { keyframes } from 'styled-components'

import { useBeacon } from '../../'
import STATES from '../../utils/states'

const animation = keyframes`
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
`

const Wrapper = styled.div`
  z-index: 2147483001; //One more than real beacon
  position: fixed;
  bottom: 20px;
  display: block;
  right: 20px;
  width: 60px;
  height: 60px;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
  background-image: initial;
  background-position-x: initial;
  background-position-y: initial;
  background-size: initial;
  background-repeat-x: initial;
  background-repeat-y: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: rgb(0, 113, 178);
  animation-duration: 250ms;
  animation-timing-function: ease;
  animation-delay: initial;
  animation-iteration-count: initial;
  animation-direction: initial;
  animation-fill-mode: initial;
  animation-play-state: initial;
  animation-name: ${animation};
  transition-duration: 0.3s;
  transition-timing-function: initial;
  transition-delay: initial;
  transition-property: opacity;
  box-shadow: rgba(0, 0, 0, 0.0588235) 0px 1px 6px 0px,
    rgba(0, 0, 0, 0.156863) 0px 2px 32px 0px;
`

const Region = styled.div`
  font-family: intercom-font, 'Helvetica Neue', 'Apple Color Emoji', Helvetica,
    Arial, sans-serif;
  font-size: 100%;
  font-style: normal;
  letter-spacing: normal;
  font-stretch: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-variant-east-asian: normal;
  font-variant-position: normal;
  font-weight: normal;
  text-align: left;
  text-decoration-line: none;
  text-decoration-style: initial;
  text-decoration-color: initial;
  text-decoration: none;
  -webkit-text-emphasis-style: none;
  -webkit-text-emphasis-color: initial;
  text-indent: 0px;
  text-shadow: none;
  text-transform: none;
  box-sizing: content-box;
  -webkit-font-smoothing: antialiased;
  line-height: 1;
`

const Launcher = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 60px;
  height: 60px;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
  cursor: pointer;
  transform-origin-x: center;
  transform-origin-y: center;
  -webkit-backface-visibility: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
  -webkit-font-smoothing: antialiased;
`

const Logo = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  opacity: ${({ state }) => (state === STATES.INITIAL ? 1 : 0)};
  transform: rotate(0deg) scale(1);
  transition: transform 0.16s linear 0s, opacity 0.08s linear 0s;

  svg {
    height: 28px;
    width: 32px;

    path {
      fill: rgb(255, 255, 255);
    }
  }
`

const Close = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  opacity: ${({ state }) => (state === STATES.INITIAL ? 0 : 1)};
  transform: ${({ state }) =>
    state === STATES.INITIAL ? 'rotate(-30deg)' : 'rotate(0deg)'};
  transition: transform 0.16s linear 0s, opacity 0.08s linear 0s;

  svg {
    width: 14px;
    height: 14px;

    path {
      fill: rgb(255, 255, 255);
    }
  }
`

const Intercom = () => {
  const [state, loadBeacon] = useBeacon({ toggle: true })
  if (state === STATES.COMPLETE) return null
  return (
    <Wrapper>
      <Region>
        <Launcher onClick={loadBeacon}>
          <Logo state={state}>
            <svg focusable="false" aria-hidden="true" viewBox="0 0 28 32">
              <path d="M28,32 C28,32 23.2863266,30.1450667 19.4727818,28.6592 L3.43749107,28.6592 C1.53921989,28.6592 0,27.0272 0,25.0144 L0,3.6448 C0,1.632 1.53921989,0 3.43749107,0 L24.5615088,0 C26.45978,0 27.9989999,1.632 27.9989999,3.6448 L27.9989999,22.0490667 L28,22.0490667 L28,32 Z M23.8614088,20.0181333 C23.5309223,19.6105242 22.9540812,19.5633836 22.5692242,19.9125333 C22.5392199,19.9392 19.5537934,22.5941333 13.9989999,22.5941333 C8.51321617,22.5941333 5.48178311,19.9584 5.4277754,19.9104 C5.04295119,19.5629428 4.46760991,19.6105095 4.13759108,20.0170667 C3.97913051,20.2124916 3.9004494,20.4673395 3.91904357,20.7249415 C3.93763774,20.9825435 4.05196575,21.2215447 4.23660523,21.3888 C4.37862552,21.5168 7.77411059,24.5386667 13.9989999,24.5386667 C20.2248893,24.5386667 23.6203743,21.5168 23.7623946,21.3888 C23.9467342,21.2215726 24.0608642,20.9827905 24.0794539,20.7254507 C24.0980436,20.4681109 24.0195551,20.2135019 23.8614088,20.0181333 Z" />
            </svg>
          </Logo>
          <Close state={state}>
            <svg focusable="false" aria-hidden="true">
              <path
                d="M13.978 12.637l-1.341 1.341L6.989 8.33l-5.648 5.648L0 12.637l5.648-5.648L0 1.341 1.341 0l5.648 5.648L12.637 0l1.341 1.341L8.33 6.989l5.648 5.648z"
                fillRule="evenodd"
              />
            </svg>
          </Close>
        </Launcher>
      </Region>
    </Wrapper>
  )
}

export default Intercom
