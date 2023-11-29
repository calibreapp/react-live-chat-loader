import React from 'react'
import { LiveChatLoaderProvider, FrontChat } from 'react-live-chat-loader'
import type { NextPage } from 'next'

import Layout from '../layouts/main'
import ExampleLinks from '../components/exampleLinks'

const Page: NextPage = () => (
  <LiveChatLoaderProvider
    provider="frontChat"
    providerKey="68cdc08b45c2d546d827398bb8d0d857"
  >
    <Layout title="React Live Chat Loader: FrontChat">
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
      <FrontChat color="#333333" />
    </Layout>
  </LiveChatLoaderProvider>
)

export default Page
