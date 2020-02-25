# React Live Chat Loader

An npm module that allows you to mitigate the negative performance and user
experience impact of chat tools. `react-live-chat-loader` shows a fake widget
until the page has become idle or users are ready to interact with chat. Currently works with [Intercom](#intercom), [Help Scout](#help-scout) and [Messenger](#messenger).

Made by the team at [♠ Calibre](https://calibreapp.com/), your performance companion.

### Table of Contents

1. [How it works](#how-it-works)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Supported Providers](#supported-providers)
5. [Adding a provider](#adding-a-provider)
6. [Examples](#examples)

---

## How it works

Chat widgets rely heavily on JavaScript which comes at a cost. Given the
significant impact that comes from the download, parse, compile and execution of
chat JavaScript, React Live Chat Loader implements a "fake", fast loading button
and waits for one of the following events before loading the actual widget:

- User hovers over the fake button
- User clicks the fake button
- The page has been idle for a significant amount of time

Under the hood React Live Chat Loader makes use of `requestIdleCallback` to
track how long the page has been idle for and checks if the user is on a slow
connection (using `navigator.connection.effectiveType`) or has data-saver enabled
(using `navigator.connection.saveData`) to prevent loading.

## Installation

To download react-live-chat-loader run:

```bash
npm install --save react-live-chat-loader
```

Or if you're using yarn, run:

```bash
yarn add react-live-chat-loader
```

## Usage

To allow you to trigger a single live chat within your application, React Live
Chat Loader has a `Context Provider` which should be added at the root level of
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

To display chat from a custom button you can import the `useChat`
hook which has the current state of the chat and a function to load the
chat.

```jsx
import { useChat } from 'react-live-chat-loader'

export const LoadChatButton = () => {
  const [state, loadChat] = useChat()

  return <button onClick={loadChat}>Load Chat</button>
}
```

### Options

You can pass the following props to the `LiveChatLoaderProvider` provider:

- `provider`: Choose from `helpScout` or `intercom` ([see below](#providers))
- `providerKey`: Provider API Key ([see below](#providers))
- `idlePeriod`: How long to wait in ms before loading the provider. Default is
  `2000`. Set to `0` to never load. This value is used in a `setTimeout` in
  browsers that don't support `requestIdleCallback`.

## Supported Providers

Currently there are two supported providers:

<details>
<summary>Help Scout</summary>

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

</details>

<details>
<summary>Intercom</summary>

To use Intercom import the `LiveChatLoaderProvider` and set the `provider` prop
as `intercom` and the `providerKey` prop as your Intercom App ID.

Then import the `Intercom` component.

```jsx
import { LiveChatLoaderProvider, Intercom } from 'react-live-chat-loader'

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

</details>

<details>
<summary>Messenger</summary>

To use Messenger, import the `LiveChatLoaderProvider` and then set the `provider` prop as `messenger`, the `providerKey` prop as your Facebook App ID, and the `pageID` prop as your Facebook Page ID.

In addition, you can set an optional `locale` prop, and the default value is `en_US`.

Then import the `Messenger` component.

```jsx
import { LiveChatLoaderProvider, Messenger } from 'react-live-chat-loader'

export default class App extends React.Component {
  render() {
    return (
      <LiveChatLoaderProvider provider="messenger" providerKey="1111222233334444" pageID="111222333444555">
        /* ... */
        <Messenger />
      </LiveChatLoaderProvider>
    )
  }
}
```

For list of locale option value, please refer to [Facebook Localization document](https://developers.facebook.com/docs/internationalization).

</details>

## Adding a provider

To contribute a new provider, follow these steps:

#### 1. Create provider file

Create a new provider file at `src/providers/providerName.js` using the
following as a template:

<details>
<summary>Provider Template</summary>

```js
const domain = 'https://provider.domain.com'

const loadScript = () => {
  // Detect the provider is already loaded and return early
  if (alreadyLoaded) return

  // Call provider script here
}

const load = ({ providerKey }) => {
  loadScript()
  // Initialise provider script
}

const open = () => // Open provider
const close = () => // Close provider

export default {
  domain,
  load,
  open,
  close
}
```

</details>

The provider must export the following:

- `domain`: A string of the domain where the provider script is loaded from
  that will be used in a `preconnect` link.
- `load`: Function which when called will load and initialize the provider
  script. It should accept props and use the `providerKey` as the `app_id` or
  `api_key`. For consistency, it should call a `loadScript` function.
- `open`: Function which when called will open the provider chat.
- `close`: Function which when called will close the provider chat.

Import the new file in `src/providers/index.js` and add it to `Providers`.

The name of this file will be the `providerKey` used in the
`LiveChatLoaderProvider`.

#### 2. Create component

Create a new component in `src/Components/ProviderName/index.js` which
replicates the chat widget, using the following as a template:

<details>
<summary>Component Template</summary>

```jsx
import React from 'react'

import { useChat } from '../../'
import STATES from '../../utils/states'

const styles = {
  // Add widget styles here
  button: {
    // Add button styles here
  }
}

const Provider = ({ color }) => {
  const [state, loadChat] = useChat({ loadWhenIdle: true })

  if (state === STATES.COMPLETE) return null

  return (
    <div>
      <button
        onClick={() => loadChat({ open: true })}
        onMouseEnter={() => loadChat({ open: false })}
        style={{
          ...styles.button,
          backgroundColor: color
        }}
      >
        Button
      </button>
    </div>
  )
}

Provider.defaultProps = {
  color: '#976ad4'
}

export default Provider
```

</details>

Do not worry about loading animations as the widget
will be shown instantly on page load. Increase the `z-index` by `1` so the fake
widget sits immediately above the chat widget that is being replaced.

Export the component from `src/index.js`

#### 3. Update README

Add your new provider to this README under [Supported Providers](#supported-providers).

## Examples

- [react-live-chat-loader-example-app](https://github.com/calibreapp/react-live-chat-loader-example-app): example [Next.js](https://nextjs.org) application

## Resources

- [How to avoid performance regressions when using live chat tools](https://calibreapp.com/blog/fast-live-chat)
- [Reducing the Intercom Messenger bundle size by 65%](https://www.intercom.com/blog/reducing-intercom-messenger-bundle-size/)