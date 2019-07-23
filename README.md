# React Live Chat Loader

Implement live chat in your React app without taking a performance hit.

### Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Providers](#providers)
4. [Options](#options)
5. [Todo](#todo)

### Installation

To download react-live-chat-loader run:

```bash
npm install --save react-live-chat-loader
```

Or if you're using yarn, run:

```bash
yarn add react-live-chat-loader --dev
```

### Usage

To allow you to trigger a single live chat within your application, React Live
Chat Loader has a Context Provider which should be added at the root level of
your application.

You pass your `providerKey` and `provider` to the `LiveChatLoaderProvider`.

For example, to add a `LiveChatLoaderProvider` for HelpScout you would do the
following:

```jsx
import { LiveChatLoaderProvider } from 'react-live-chat-loader'

export default class App extends React.Component {
  /* ... */

  render() {
    return (
      <LiveChatLoaderProvider providerKey="asdjkasl123123" provider="helpScout">
        /* ... */
      </LiveChatLoaderProvider>
    )
  }
}
```

You can then include the relevant chat where you would like it to appear.

For example, for HelpScout you would import the `HelpScout` component and add it
to your application:

```jsx
import { HelpScout } from 'react-live-chat-loader'

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

And to load the chat from a custom button you can import the `useChat`
hook which has the current state of the chat and a function to load the
chat.

```jsx
import { useChat } from 'react-live-chat-loader'

export const LoadChatButton = () => {
  const [state, loadChat] = useChat()

  return <button onClick={loadChat}>Load Chat</button>
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

- Add customisation options for provider chat's
- Add tests
