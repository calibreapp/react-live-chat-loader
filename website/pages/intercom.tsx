import React from 'react'
import { LiveChatLoaderProvider, Intercom } from 'react-live-chat-loader'
import type { NextPage } from 'next'

import Layout from '../layouts/main'
import ExampleLinks from '../components/exampleLinks'

const Page: NextPage = () => (
  <LiveChatLoaderProvider provider="intercom" providerKey="otpo7g1i">
    <Layout title="React Live Chat Loader: Intercom">
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
    </Layout>
  </LiveChatLoaderProvider>
)

export default Page
