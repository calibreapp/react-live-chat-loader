import React from 'react'
import { LiveChatLoaderProvider, Userlike } from 'react-live-chat-loader'
import type { NextPage } from 'next'

import Layout from '../layouts/main'
import ExampleLinks from '../components/exampleLinks'

const Page: NextPage = () => (
  <LiveChatLoaderProvider
    provider="userlike"
    providerKey="bf05626502af40b6b1035d7e3c73d22cc8cc0e9c2dd94b73aac33b62e93efcfc"
  >
    <Layout title="React Live Chat Loader: Userlike">
      <div className="wrapper">
        <div className="inner">
          <h1>React Live Chat Loader: Userlike</h1>
          <p>
            This is an example implementation of the Userlike chat widget using{' '}
            <a href="https://github.com/calibreapp/react-live-chat-loader">
              react-live-chat-loader
            </a>
            .
          </p>
          <p>View other demos:</p>
          <ExampleLinks />
        </div>
      </div>
      <Userlike vOffset="47px" hOffset="49px" />
    </Layout>
  </LiveChatLoaderProvider>
)

export default Page
