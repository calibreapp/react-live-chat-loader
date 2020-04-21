import React from 'react'
import Layout from '../layouts/main'
import ExampleLinks from '../components/exampleLinks'
import { LiveChatLoaderProvider, Drift } from 'react-live-chat-loader'

const Page = () => (
  <LiveChatLoaderProvider provider="drift" providerKey="fv5fpb4nmax7">
    <Layout title="React Live Chat Loader: Drift">
      <div className="wrapper">
        <div className="inner">
          <h1>React Live Chat Loader: Drift</h1>
          <p>
            This is an example implementation of the Drift chat widget using{' '}
            <a href="https://github.com/calibreapp/react-live-chat-loader">
              react-live-chat-loader
            </a>
            .
          </p>
          <ExampleLinks />
        </div>
      </div>
      <Drift icon="A" color="#0176ff" />
    </Layout>
  </LiveChatLoaderProvider>
)

export default Page
