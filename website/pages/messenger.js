import React from 'react'
import Layout from '../layouts/main'
import ExampleLinks from '../components/exampleLinks'
import { LiveChatLoaderProvider, Messenger } from '../components/src'

const Page = () => (
  <LiveChatLoaderProvider provider="messenger" providerKey="100594861551567">
    <Layout title="React Live Chat Loader: Facebook Messenger">
      <div className="wrapper">
        <div className="inner">
          <h1>React Live Chat Loader: Facebook Messenger</h1>
          <p>
            This is an example implementation of the Facebook Messenger chat
            widget using{' '}
            <a href="https://github.com/calibreapp/react-live-chat-loader">
              react-live-chat-loader
            </a>
            .
          </p>
          <ExampleLinks />
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
