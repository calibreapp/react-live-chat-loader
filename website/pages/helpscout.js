import React from 'react'
import Layout from '../layouts/main'
import { LiveChatLoaderProvider, HelpScout } from 'react-live-chat-loader'

const Page = () => (
  <LiveChatLoaderProvider
    provider="helpScout"
    providerKey="c99965b1-dd68-4fff-9f20-522402d0abe5"
  >
    <Layout title="Help Scout Example">
      <div className="wrapper">
        <div className="inner">
          <h1>React Live Chat Loader</h1>
          <p>Help Scout example.</p>
          <p>
            <a href="https://github.com/calibreapp/react-live-chat-loader">
              Check it out on GitHub <span>→</span>
            </a>
          </p>
        </div>
      </div>
      <HelpScout color="#976ad4" />
    </Layout>
  </LiveChatLoaderProvider>
)

export default Page
