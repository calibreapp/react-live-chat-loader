'use client';
import React from 'react'
import { LiveChatLoaderProvider, Front } from 'react-live-chat-loader'
import ExampleLinks from '../../components/exampleLinks'

export default function FrontPage() {
  return (
    <LiveChatLoaderProvider provider="front" providerKey="b2b8dcd0c63c934d363e6704cfa6af86">

      <div className="wrapper">
        <div className="inner">
          <h1>React Live Chat Loader: Front</h1>
          <p>
            This is an example implementation of the Front widget using{' '}
            <a href="https://github.com/calibreapp/react-live-chat-loader">
              react-live-chat-loader
            </a>
            .
          </p>
          <p>View other demos:</p>
          <ExampleLinks />
        </div>
      </div>
      <Front />

    </LiveChatLoaderProvider>
  )
}
