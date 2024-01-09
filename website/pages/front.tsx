import React from 'react'
import { LiveChatLoaderProvider, Front } from 'react-live-chat-loader'
import type { NextPage } from 'next'

import Layout from '../layouts/main'
import ExampleLinks from '../components/exampleLinks'

const Page: NextPage = () => (
  <LiveChatLoaderProvider
    provider="front"
    providerKey="68cdc08b45c2d546d827398bb8d0d857"
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
      <Front color="#6366f1" />
    </Layout>
  </LiveChatLoaderProvider>
)

export default Page
