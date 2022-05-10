import React from 'react'

import { storiesOf } from '@storybook/react'
import { text, select, withKnobs } from '@storybook/addon-knobs'

import {
  LiveChatLoaderProvider,
  HelpScout,
  Intercom,
  Messenger,
  Drift,
  useChat
} from '..'

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
  .addDecorator(withKnobs)
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
  .addDecorator(withKnobs)
  .add('Chat', () => (
    <LiveChatLoaderProvider provider="intercom" providerKey="otpo7g1i">
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

storiesOf('Messenger', module)
  .add('Chat', () => <div>Messenger will not load on localhost.</div>)
  .add('hook', () => <div>Messenger will not load on localhost.</div>)

storiesOf('Drift', module)
  .addDecorator(withKnobs)
  .add('Chat', () => (
    <LiveChatLoaderProvider provider="drift" providerKey="fv5fpb4nmax7">
      <Drift
        icon={select('icon', ['A', 'B', 'C', 'D'], 'A')}
        color={text('color', '#0176ff')}
      />
      <Button />
    </LiveChatLoaderProvider>
  ))
  .add('hook', () =>
    React.createElement(() => {
      return (
        <LiveChatLoaderProvider
          provider="drift"
          providerKey="fv5fpb4nmax7"
          idlePeriod={0}
        >
          <Button />
        </LiveChatLoaderProvider>
      )
    })
  )
