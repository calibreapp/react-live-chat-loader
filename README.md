# React Chat Beacon Loader

Implement a chat beacon in your React app without taking a performance hit.

### Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Providers](#providers)
4. [Options](#options)
5. [Todo](#todo)

### Installation

To download react-chat-beacon-loader run:

```bash
npm install --save react-chat-beacon-loader
```

Or if you're using yarn, run:

```bash
yarn add react-chat-beacon-loader --dev
```

### Usage

To allow you to trigger a single beacon within your application, React Chat
Beacon Loader has a Context Provider which should be added at the root level of
your application.

You pass your `providerKey` and `provider` to the `ChatBeaconLoaderProvider`.

For example, to add a `ChatBeaconLoaderProvider` for HelpScout you would do the
following:

```jsx
import { ChatBeaconLoaderProvider } from 'react-chat-beacon-loader'

export default class App extends React.Component {
  /* ... */

  render() {
    return (
      <ChatBeaconLoaderProvider
        providerKey="asdjkasl123123"
        provider="helpScout"
      >
        /* ... */
      </ChatBeaconLoaderProvider>
    )
  }
}
```

You can then include the relevant chat beacon where you would like it to appear.

For example, for HelpScout you would import the `HelpScout` component and add it
to your application:

```jsx
import { HelpScout } from 'react-chat-beacon-loader'

export default class Index extends React.Component {
  /* ... */

  render() {
    return (
      <>
        /* ... */
        <HelpScout />
      </>
    )
  }
}
```

And to load the beacon from a custom button you can import the `useBeacon`
hook which has the current state of the beacon and a function to load the
beacon.

```jsx
import { useBeacon } from 'react-chat-beacon-loader'

export const LoadBeaconButton = () => {
  const [state, loadBeacon] = useBeacon()

  return <button onClick={loadBeacon}>Load Chat Beacon</button>
}
```

### Providers

Currently supported providers are:

#### HelpScout

To use HelpScout set the `provider` prop as `helpScout` and set the
`providerKey` prop as your Beacon API Key.

#### Intercom

To use Intercom set the `provider` as `intercom` and set the `providerKey` props
as your Intercom App ID.

- HelpScout: `helpScout`
- Intercom: `intercom`

### Options

There are currently no customisation options.

### Todo

- Add customisation options for provider beacon's
- Add tests
