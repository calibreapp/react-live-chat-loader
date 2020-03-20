import React from 'react'
import Layout from '../layouts/main'
import { LiveChatLoaderProvider, Intercom } from 'react-live-chat-loader'

const Page = () => (
  <LiveChatLoaderProvider provider="intercom" providerKey="otpo7g1i">
    <Layout title="Intercom Example">
      <div className="wrapper">
        <div className="inner">
          <h1>React Live Chat Loader</h1>
          <p>Intercom example.</p>
          <p>
            <a href="https://github.com/calibreapp/react-live-chat-loader">
              Check it out on GitHub <span>→</span>
            </a>
          </p>
        </div>
      </div>
      <Intercom color="#333333" />
    </Layout>
  </LiveChatLoaderProvider>
)

export default Page
