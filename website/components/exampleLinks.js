// cannot use 'next/link' here because it will do client-side navigation
// which will cause multiple provider icons to stack on top of each other
// real applications won't use more than one provider
export default function ExampleLinks() {
  return (
    <>
      <ul>
        <li>
          <a href="/intercom">Intercom</a>
        </li>
        <li>
          <a href="/helpscout">Help Scout</a>
        </li>
        <li>
          <a href="/drift">Drift</a>
        </li>
        <li>
          <a href="/messenger">Facebook Messenger</a>
        </li>
        <li>
          <a href="/userlike">Userlike</a>
        </li>
        <li>
          <a href="/chatwoot">Chatwoot</a>
        </li>
        <li>
          <a href="/front">Front</a>
        </li>
        <li>
          <a href="/hubspot">HubSpot</a>
        </li>
      </ul>
      <p>
        Some providers may require the addition of a valid API key to their{' '}
        <code>providerKey</code>
        {''} prop in order for the demo to function correctly.
      </p>
    </>
  )
}
