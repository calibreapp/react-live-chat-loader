import React from 'react'
import { LiveChatLoaderProvider, Front } from 'react-live-chat-loader'
import type { NextPage } from 'next'

import Layout from '../layouts/main'
import ExampleLinks from '../components/exampleLinks'

const Page: NextPage = () => (
  <LiveChatLoaderProvider
    provider="front"
    providerKey="b2b8dcd0c63c934d363e6704cfa6af86"
  >
    <Layout title="React Live Chat Loader: Front">
      <div className="wrapper">
        <div className="inner">
          <h1>React Live Chat Loader: Front</h1>
          <p>
            This is an example implementation of the Front chat widget using{' '}
            <a href="https://github.com/calibreapp/react-live-chat-loader">
              react-live-chat-loader
            </a>
            .
          </p>
          <p>View other demos:</p>
          <ExampleLinks />
        </div>
      </div>
      <Front color="#333333" />
    </Layout>
  </LiveChatLoaderProvider>
)

export default Page
