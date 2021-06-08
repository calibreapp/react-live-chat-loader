import React from 'react'
import Layout from '../layouts/main'
import ExampleLinks from '../components/exampleLinks'
import { LiveChatLoaderProvider, Chatwoot } from 'react-live-chat-loader'

const Page = () => (
  <LiveChatLoaderProvider
    provider="chatwoot"
    providerKey="E33wn9ftxMDHZx18AaBkfPvY"
  >
    <Layout title="React Live Chat Loader: Chatwoot">
      <div className="wrapper">
        <div className="inner">
          <h1>React Live Chat Loader: Chatwoot</h1>
          <p>
            This is an example implementation of the Chatwoot widget using{' '}
            <a href="https://github.com/calibreapp/react-live-chat-loader">
              react-live-chat-loader
            </a>
            .
          </p>
          <p>
            View other demos: <ExampleLinks />
          </p>
        </div>
      </div>
      <Chatwoot />
    </Layout>
  </LiveChatLoaderProvider>
)

export default Page
