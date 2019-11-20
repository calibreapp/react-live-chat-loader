# React Live Chat Loader

An npm module that allows you to mitigate the negative performance and user
experience impact of chat tools. React-live-chat-loader shows a fake widget
until the page has finished loading or users are ready to interact with chat.

Currently works with [Intercom](#intercom) and [Help Scout](#help-scout).

### Contents

1. [How it works](#how-it-works)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Providers](#providers)
5. [Examples](#examples)

### How it works

Chat widgets rely heavily on JavaScript which comes at a cost. Given the
significant impact comes from the download, parse, compile and execution of the
chat JavaScript, React Live Chat Loader implements a "fake", fast loading button
and then wait for one of the following events before loading the actual widget:

- User hovers over the fake button
- User clicks the fake button
- The page has been idle for a significant amount of time

Under the hood React Live Chat Loader makes use of `requestIdleCallback`, but
there is no timeout option because if the main thread is not quiet for a
significant amount of time the should not be blocked with a third party script.

In addition to waiting for the page to become idle, React Live Chat Loader
checks if the user isn't on a slow connection (using
`navigator.connection.effectiveType`) or has data-saver enabled (using
`navigator.connection.saveData`) to prevent loading the widget when the page
has been idle.

### Installation

To download react-live-chat-loader run:

```bash
npm install --save react-live-chat-loader
```

Or if you're using yarn, run:

```bash
yarn add react-live-chat-loader
```

### Usage

To allow you to trigger a single live chat within your application, React Live
Chat Loader has a Context Provider which should be added at the root level of
your application.

You pass your `providerKey` and `provider` to the `LiveChatLoaderProvider`.

For example, to add a `LiveChatLoaderProvider` for Help Scout you would do the
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

For example, for Help Scout you would import the `HelpScout` component and add it
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

#### Options

You can pass the following props to the `LiveChatLoaderProvider` provider:

- `provider`: Choose from `helpScout` or `intercom` ([see below](#providers))
- `providerKey`: Provider API Key ([see below](#providers))
- `idlePeriod`: How long to wait in ms before loading the provider. Default is
  `2000`. Set to `0` to never load.

### Providers

Currently there are two supported providers:

#### Help Scout

To use Help Scout import the `LiveChatLoaderProvider` and set the `provider` prop
as `helpScout` and the `providerKey` prop as your Beacon API Key.

Then import the `HelpScout` component.

```jsx
import { LiveChatLoaderProvider, HelpScout } from 'react-live-chat-loader'

export default class App extends React.Component {
  render() {
    return (
      <LiveChatLoaderProvider providerKey="asdjkasl123123" provider="helpScout">
        /* ... */
        <HelpScout />
      </LiveChatLoaderProvider>
    )
  }
}
```

You can customise the Help Scout beacon by passing the following props to the
`HelpScout` component:

- `color`: The background color of the beacon
- `icon`: Choose from `message`, `antenna`, `search`, `question`, `beacon`
- `zIndex`: Changes the CSS index value of how the Beacon relates to other objects
- `horizontalPosition`: Choose from `left` or `right`

Currently the Help Scout component only supports the icon button style.

#### Intercom

To use Intercom import the `Intercom` component and set the `provider` prop as
`intercom` and the `providerKey` prop as your Intercom App ID.

To use Intercom import the `LiveChatLoaderProvider` and set the `provider` prop
as `intercom` and the `providerKey` prop as your Intercom App ID.

Then import the `Intercom` component.

```jsx
import { LiveChatLoaderProvider, HelpScout } from 'react-live-chat-loader'

export default class App extends React.Component {
  render() {
    return (
      <LiveChatLoaderProvider providerKey="asd239" provider="intercom">
        /* ... */
        <Intercom />
      </LiveChatLoaderProvider>
    )
  }
}
```

You can customise the color of the Intercom widget by passing a `color` prop to
the `Intercom` component.

### Examples

- [react-live-chat-loader-example-app](https://github.com/calibreapp/react-live-chat-loader-example-app): Example [Next.js](https://nextjs.org) app
