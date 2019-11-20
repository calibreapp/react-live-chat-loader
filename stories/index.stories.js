import React from 'react'

import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import { LiveChatLoaderProvider, HelpScout, Intercom, useChat } from '../src'

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
    <LiveChatLoaderProvider
      provider="helpScout"
      providerKey="c99965b1-dd68-4fff-9f20-522402d0abe5"
      idlePeriod={0}
    >
      <HelpScout
        color={text('color', '#976ad4')}
        icon={text('icon', 'message')}
        zIndex={text('zIndex', '1050')}
        horizontalPosition={text('horizontalPosition', 'left')}
      />
    </LiveChatLoaderProvider>
  ))
  .add('hook', () =>
    React.createElement(() => {
      return (
        <LiveChatLoaderProvider
          provider="helpScout"
          providerKey="c99965b1-dd68-4fff-9f20-522402d0abe5"
          idlePeriod={0}
        >
          <Button />
        </LiveChatLoaderProvider>
      )
    })
  )

storiesOf('Intercom', module)
  .add('Chat', () => (
    <LiveChatLoaderProvider
      provider="intercom"
      providerKey="otpo7g1i"
      idlePeriod={100}
    >
      <Intercom color={text('color', '#333333')} />
      <Button />
    </LiveChatLoaderProvider>
  ))
  .add('hook', () =>
    React.createElement(() => {
      return (
        <LiveChatLoaderProvider
          provider="intercom"
          providerKey="otpo7g1i"
          idlePeriod={0}
        >
          <Button />
        </LiveChatLoaderProvider>
      )
    })
  )
