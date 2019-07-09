import React from 'react'

import { storiesOf } from '@storybook/react'

import {
  ChatBeaconLoaderProvider,
  HelpScout,
  Intercom,
  useBeacon
} from '../src'

const Button = () => {
  const [state, loadBeacon] = useBeacon()
  return (
    <>
      <button onClick={loadBeacon}>Load Beacon</button>
      <br />
      Current state: {state}
    </>
  )
}

// You need to replace the providerKey prop with live keys to run these stories

storiesOf('HelpScout', module)
  .add('Beacon', () => (
    <ChatBeaconLoaderProvider provider="helpScout" providerKey="1234">
      <HelpScout />
    </ChatBeaconLoaderProvider>
  ))
  .add('hook', () =>
    React.createElement(() => {
      return (
        <ChatBeaconLoaderProvider provider="helpScout" providerKey="1234">
          <Button />
        </ChatBeaconLoaderProvider>
      )
    })
  )

storiesOf('Intercom', module)
  .add('Beacon', () => (
    <ChatBeaconLoaderProvider provider="intercom" providerKey="1234">
      <Intercom />
    </ChatBeaconLoaderProvider>
  ))
  .add('hook', () =>
    React.createElement(() => {
      return (
        <ChatBeaconLoaderProvider provider="intercom" providerKey="1234">
          <Button />
        </ChatBeaconLoaderProvider>
      )
    })
  )
