import React from 'react'
import Layout from '../layouts/main'
import { LiveChatLoaderProvider, Messenger } from 'react-live-chat-loader'

const Page = () => (
  <LiveChatLoaderProvider provider="messenger" providerKey="100594861551567">
    <Layout title="Messenger Example">
      <div className="wrapper">
        <div className="inner">
          <h1>React Live Chat Loader</h1>
          <p>Messenger example.</p>
          <p>
            <a href="https://github.com/calibreapp/react-live-chat-loader">
              Check it out on GitHub <span>→</span>
            </a>
          </p>
        </div>
      </div>
      <Messenger
        color="#13cf13"
        loggedInGreeting="What's up?"
        loggedOutGreeting="What's up?"
      />
    </Layout>
  </LiveChatLoaderProvider>
)

export default Page
