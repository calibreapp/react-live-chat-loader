import React from 'react'

import { storiesOf } from '@storybook/react'

import {
  LiveChatLoaderProvider,
  HelpScout,
  Intercom,
  useChat
} from '../src'

const Button = () => {
  const [state, loadChat] = useChat()
  return (
    <>
      <button onClick={loadChat}>Load Chat</button>
      <br />
      Current state: {state}
    </>
  )
}

// You need to replace the providerKey prop with live keys to run these stories

storiesOf('HelpScout', module)
  .add('Chat', () => (
    <LiveChatLoaderProvider provider="helpScout" providerKey="1234">
      <HelpScout />
    </LiveChatLoaderProvider>
  ))
  .add('hook', () =>
    React.createElement(() => {
      return (
        <LiveChatLoaderProvider provider="helpScout" providerKey="1234">
          <Button />
        </LiveChatLoaderProvider>
      )
    })
  )

storiesOf('Intercom', module)
  .add('Chat', () => (
    <LiveChatLoaderProvider provider="intercom" providerKey="1234">
      <Intercom />
    </LiveChatLoaderProvider>
  ))
  .add('hook', () =>
    React.createElement(() => {
      return (
        <LiveChatLoaderProvider provider="intercom" providerKey="1234">
          <Button />
        </LiveChatLoaderProvider>
      )
    })
  )
