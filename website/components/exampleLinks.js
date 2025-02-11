import React from 'react'
import Link from 'next/link'

const ExampleLinks = () => (
  <>
    <ul>
      <li>
        <Link href="/intercom">
          <a>Intercom</a>
        </Link>
      </li>
      <li>
        <Link href="/helpscout">
          <a>Help Scout</a>
        </Link>
      </li>
      <li>
        <Link href="/drift">
          <a>Drift</a>
        </Link>
      </li>
      <li>
        <Link href="/messenger">
          <a>Facebook Messenger</a>
        </Link>
      </li>
      <li>
        <Link href="/userlike">
          <a>Userlike</a>
        </Link>
      </li>
      <li>
        <Link href="/chatwoot">
          <a>Chatwoot</a>
        </Link>
      </li>
      <li>
        <Link href="/front">
          <a>Front</a>
        </Link>
      </li>
      <li>
        <Link href="/hubspot">
          <a>HubSpot</a>
        </Link>
      </li>
      <li>
        <Link href="/adobe-dynamic-chat">
          <a>Adobe Dynamic Chat</a>
        </Link>
      </li>
    </ul>
    <p>
      Some providers may require the addition of a valid API key to their{' '}
      <code>providerKey</code>
      {''} prop in order for the demo to function correctly.
    </p>
  </>
)

export default ExampleLinks
