'use client';
import React from 'react'
import { LiveChatLoaderProvider, Messenger } from 'react-live-chat-loader'
import ExampleLinks from '../../components/exampleLinks'

export default function MessengerPage() {
  return (
    <LiveChatLoaderProvider provider="messenger" providerKey="100594861551567">

      <div className="wrapper">
        <div className="inner">
          <h1>React Live Chat Loader: Facebook Messenger</h1>
          <p>
            This is an example implementation of the Facebook Messenger widget using{' '}
            <a href="https://github.com/calibreapp/react-live-chat-loader">
              react-live-chat-loader
            </a>
            .
          </p>
          <p>View other demos:</p>
          <ExampleLinks />
        </div>
      </div>
      <Messenger
        color="#13cf13"
        loggedInGreeting="What's up?"
        loggedOutGreeting="What's up?"
      />

    </LiveChatLoaderProvider>
  )
}
