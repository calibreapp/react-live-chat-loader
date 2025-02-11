'use client';
import React from 'react'
import { LiveChatLoaderProvider, Drift } from 'react-live-chat-loader'
import ExampleLinks from '../../components/exampleLinks'

export default function ChatwootPage() {
  return (
    <LiveChatLoaderProvider provider="drift" providerKey="fv5fpb4nmax7">

      <div className="wrapper">
        <div className="inner">
          <h1>React Live Chat Loader: Drift</h1>
          <p>
            This is an example implementation of the Drift widget using{' '}
            <a href="https://github.com/calibreapp/react-live-chat-loader">
              react-live-chat-loader
            </a>
            .
          </p>
          <p>View other demos:</p>
          <ExampleLinks />
        </div>
      </div>
      <Drift icon="A" color="#0176ff" />

    </LiveChatLoaderProvider>
  )
}
