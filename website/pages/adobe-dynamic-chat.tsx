import React from 'react'
import {
  LiveChatLoaderProvider,
  AdobeDynamicChat
} from 'react-live-chat-loader'
import type { NextPage } from 'next'

import Layout from '../layouts/main'
import ExampleLinks from '../components/exampleLinks'

const Page: NextPage = () => (
  <LiveChatLoaderProvider
    provider="adobeDynamicChat"
    providerKey=""
    instanceId=""
    env=""
    geo=""
  >
    <Layout title="React Live Chat Loader: Adobe Dynamic Chat">
      <div className="wrapper">
        <div className="inner">
          <h1>React Live Chat Loader: Adobe Dynamic Chat</h1>
          <p>
            This is an example implementation of the Adobe Dynamic Chat chat
            widget using{' '}
            <a href="https://github.com/calibreapp/react-live-chat-loader">
              react-live-chat-loader
            </a>
            .
          </p>
          <p>View other demos:</p>
          <ExampleLinks />
        </div>
      </div>
      <AdobeDynamicChat />
    </Layout>
  </LiveChatLoaderProvider>
)

export default Page
