import React from 'react'
import Layout from '../layouts/main'
import Link from 'next/link'

const Page = () => (
  <Layout title="React Live Chat Loader">
    <div className="wrapper">
      <div className="inner">
        <h1>React Live Chat Loader</h1>
        <p>
          An npm module that allows you to mitigate the negative performance and
          user experience impact of chat tools. React-live-chat-loader shows a
          fake widget until the page has finished loading or users are ready to
          interact with chat. Currently works with{' '}
          <Link href="/intercom">
            <a>Intercom</a>
          </Link>
          ,{' '}
          <Link href="/helpscout">
            <a>Help Scout</a>
          </Link>{' '}
          <Link href="/drift">
            <a>Drift</a>
          </Link>
          , and{' '}
          <Link href="/messenger">
            <a>Facebook Messenger</a>
          </Link>
          .
        </p>
        <p>
          <a href="https://github.com/calibreapp/react-live-chat-loader">
            Check it out on GitHub <span>→</span>
          </a>
        </p>
        <p>
          <a href="https://calibreapp.com">
            Need web performance monitoring? <span>→</span>
          </a>
        </p>
      </div>
    </div>
  </Layout>
)

export default Page
