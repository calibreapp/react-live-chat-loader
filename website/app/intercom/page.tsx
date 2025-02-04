'use client';
import React from 'react'
import { LiveChatLoaderProvider, Intercom } from 'react-live-chat-loader'
import ExampleLinks from '../../components/exampleLinks'

export default function IntercomPage() {
  return (
    <LiveChatLoaderProvider provider="intercom" providerKey="otpo7g1i">

      <div className="wrapper">
        <div className="inner">
          <h1>React Live Chat Loader: Intercom</h1>
          <p>
            This is an example implementation of the Intercom chat widget using{' '}
            <a href="https://github.com/calibreapp/react-live-chat-loader">
              react-live-chat-loader
            </a>
            .
          </p>
          <p>View other demos:</p>
          <ExampleLinks />
        </div>
      </div>
      <Intercom color="#333333" />

    </LiveChatLoaderProvider>
  )
}