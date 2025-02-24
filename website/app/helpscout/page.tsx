'use client';
import React from 'react'
import { LiveChatLoaderProvider, HelpScout } from 'react-live-chat-loader'
import ExampleLinks from '../../components/exampleLinks'

export default function HelpScoutPage() {
  return (
    <LiveChatLoaderProvider provider="helpScout" providerKey="b9ae6939-6c02-41de-b270-7f492379dc50">
      <div className="wrapper">
        <div className="inner">
          <h1>React Live Chat Loader: Help Scout</h1>
          <p>
            This is an example implementation of the Help Scout beacon using{' '}
            <a href="https://github.com/calibreapp/react-live-chat-loader">
              react-live-chat-loader
            </a>
            .
          </p>
          <p>View other demos:</p>
          <ExampleLinks />
        </div>
      </div>
      <HelpScout />

    </LiveChatLoaderProvider>
  )
}
