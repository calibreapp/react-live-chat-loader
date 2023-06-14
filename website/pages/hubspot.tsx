import React from 'react'
import { LiveChatLoaderProvider, HubSpot } from 'react-live-chat-loader'
import type { NextPage } from 'next'

import Layout from '../layouts/main'
import ExampleLinks from '../components/exampleLinks'

const Page: NextPage = () => (
  <LiveChatLoaderProvider
    provider="hubSpot"
    providerKey=""
  >
    <Layout title="React Live Chat Loader: Hubspot">
      <div className="wrapper">
        <div className="inner">
          <h1>React Live Chat Loader: Hubspot</h1>
          <p>
            This is an example implementation of the Hubspot widget using{' '}
            <a href="https://github.com/calibreapp/react-live-chat-loader">
              react-live-chat-loader
            </a>
            .
          </p>
          <p>View other demos:</p>
          <ExampleLinks />
        </div>
      </div>
      <HubSpot backgroundColor='#017848'/>
    </Layout>
  </LiveChatLoaderProvider>
)

export default Page
