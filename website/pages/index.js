import React from 'react'
import Layout from '../layouts/main'
import Link from 'next/link'
import ExampleLinks from '../components/exampleLinks'

const Page = () => (
  <Layout title="React Live Chat Loader">
    <div className="wrapper">
      <div className="inner">
        <h1>React Live Chat Loader</h1>
        <p>
          An npm module that allows you to mitigate the negative performance and
          user experience impact of chat tools. React-live-chat-loader shows a
          fake widget until the page has finished loading or users are ready to
          interact with chat.
        </p>
        <p>
          <a href="https://github.com/calibreapp/react-live-chat-loader">
            Check it out on GitHub <span>→</span>
          </a>
        </p>
        <p>
          <a href="https://calibreapp.com">
            Built by the team at Calibre <span>→</span>
          </a>
        </p>
        <p>
          View demos: <ExampleLinks />
        </p>
      </div>
    </div>
  </Layout>
)

export default Page
