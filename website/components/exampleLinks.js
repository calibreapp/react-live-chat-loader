import React from 'react'
import Link from 'next/link'

const ExampleLinks = () => (
  <>
    <p>
      <Link href="/intercom">
        <a>
          Intercom example <span>→</span>
        </a>
      </Link>
    </p>
    <p>
      <Link href="/helpscout">
        <a>
          Help Scout example <span>→</span>
        </a>
      </Link>
    </p>
    <p>
      <Link href="/messenger">
        <a>
          Facebook Messenger example <span>→</span>
        </a>
      </Link>
    </p>
  </>
)

export default ExampleLinks
