# React Live Chat Loader

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-12-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](CODE_OF_CONDUCT.md)

An npm module that allows you to mitigate the negative performance and user
experience impact of chat tools. `react-live-chat-loader` shows a fake widget
until the page has become idle or users are ready to interact with chat. Currently works with [Intercom](#intercom), [Help Scout](#help-scout), [Drift](#drift), [Messenger](#messenger), [Userlike](#userlike) and [Chatwoot](#chatwoot).

Made by the team at [♠ Calibre](https://calibreapp.com/), your performance companion.

## 🖇️ Table of Contents

1. [How it Works](#-how-it-works)
2. [Installation](#-installation)
3. [Usage](#-usage)
4. [Supported Providers](#-supported-providers)
5. [Adding a Provider](#-adding-a-provider)
6. [Contributing](#-contributing)
7. [Examples](#-examples)

## 💡 How it Works

Chat widgets rely heavily on JavaScript which comes at a cost. Given the
significant impact that comes from the download, parse, compile and execution of
chat JavaScript, React Live Chat Loader implements a "fake", fast loading button
and waits for one of the following events before loading the actual widget:

- Person hovers over the fake button
- Person clicks the fake button
- The page has been idle for a significant amount of time

Under the hood React Live Chat Loader makes use of `requestIdleCallback` to
track how long the page has been idle for and checks if the person is on a slow
connection (using `navigator.connection.effectiveType`) or has data-saver enabled
(using `navigator.connection.saveData`) to prevent loading.

> ⚠️ **Please note**: Some chat widget providers open automatically based on the people’s interaction from their last session.

## 📥 Installation

To download react-live-chat-loader run:

```bash
npm install --save react-live-chat-loader
```

Or if you're using yarn, run:

```bash
yarn add react-live-chat-loader
```

## 🛠 Usage

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

  return <button onClick={() => loadChat({ open: true })}>Load Chat</button>
}
```

### Options

You can pass the following props to the `LiveChatLoaderProvider` provider:

- `provider`: Choose from `helpScout`, `intercom`, `drift` or `messenger` ([see below](#-supported-providers))
- `providerKey`: Provider API Key ([see below](#-supported-providers))
- `idlePeriod`: How long to wait in ms before loading the provider. Default is
  `2000`. Set to `0` to never load. This value is used in a `setTimeout` in
  browsers that don't support `requestIdleCallback`.
- `beforeInit`: A function to be called after the script has loaded, but before the chat provider has been initialized (optional)
- `onReady`: A function to be called once the script has been loaded, the chat provider has been initialized and is ready for use (optional)

## 💬 Supported Providers

Currently there are six supported providers:

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

User or Company context data can be set using `window.intercomSettings`. See the [official Intercom documentation](https://developers.intercom.com/installing-intercom/docs/javascript-api-attributes-objects#section-data-attributes) for more details.

</details>

<details>
<summary>Messenger</summary>

To use Messenger, import the `LiveChatLoaderProvider` and then set the `provider` prop as `messenger` and the `providerKey` prop as your Facebook Page ID.

If you are using other Facebook features like share, you should set the `appID` prop as your Facebook App ID as the Customer Chat SDK includes all the features that Facebook provide.

You can optionally set the `locale` prop, the default value is `en_US`.

Then import the `Messenger` component.

```jsx
import { LiveChatLoaderProvider, Messenger } from 'react-live-chat-loader'

export default class App extends React.Component {
  render() {
    return (
      <LiveChatLoaderProvider
        provider="messenger"
        providerKey="111222333444555"
        appID="111222333444555"
        locale="en_US"
      >
        /* ... */
        <Messenger />
      </LiveChatLoaderProvider>
    )
  }
}
```

For a list of locale option values, refer to [Facebook Localization documentation](https://developers.facebook.com/docs/internationalization).

You can customise the Messenger widget by passing the following props to the
`Messenger` component:

- `color`: The theme color of the widget
- `loggedInGreeting`: The greeting text that will be displayed if the person is currently logged in to Facebook.
- `loggedOutGreeting`: The greeting text that will be displayed if the person is
  currently not logged in to Facebook.
- `greetingDialogDisplay`: Sets how the greeting dialog will be displayed.
- `greetingDialogDelay`: Sets the number of seconds of delay before the greeting dialog is shown after the plugin is loaded.

For a list of options, refer to [Facebook Customer Chat Plugin documentation](https://developers.facebook.com/docs/messenger-platform/discovery/customer-chat-plugin#customization).

> ⚠️ **Please note**: Facebook Messenger will not load on localhost and you will need to configure your domain through the setup wizard in Facebook for it to load correctly.

</details>

<details>
<summary>Drift</summary>

To use Drift import the `LiveChatLoaderProvider` and set the `provider` prop
as `drift` and the `providerKey` prop as your Drift App ID.

Then import the `Drift` component.

```jsx
import { LiveChatLoaderProvider, Drift } from 'react-live-chat-loader'

export default () => (
  <LiveChatLoaderProvider providerKey="asdhjg127s1s" provider="drift">
    /* ... */
    <Drift />
  </LiveChatLoaderProvider>
)
```

You can customise the Drift Messenger by passing the following props to the
`Drift` component:

- `color`: The background color of the messenger
- `icon`: Choose from `A`, `B`, `C`, `D`; you're presented with these preset icons when signing up for Drift, or in the "Drift Widget > Design > Widget icon" entry under the "App Settings" header on the Drift settings page.

</details>

<details>
<summary>Userlike</summary>

To use Userlike import the `LiveChatLoaderProvider` and set the `provider` prop
as `userlike` and the `providerKey` prop as your Userlike Widget secret.

Then import the `Userlike` component.

```jsx
import { LiveChatLoaderProvider, Userlike } from 'react-live-chat-loader'

export default () => (
  <LiveChatLoaderProvider
    providerKey="x014e93c288445c0bf6f8a378a0b1af8e6e1125t71634124a88fe63e38hme701"
    provider="userlike"
  >
    /* ... */
    <Userlike />
  </LiveChatLoaderProvider>
)
```

You can customise the Userlike Widget by passing the following props to the
`Userlike` component:

- `color`: The contrasting color, can be `black` or `white`.
- `backgroundColor`: The main color
- `position`: The button position, can be `right` or `left`.
- `vOffset`: The amount of vertical margin.
- `hOffset`: The amount of horizontal margin.
- `style`: The shape style, can be `round` or `square`.

</details>

<details>
<summary> Chatwoot </summary>

To use Chatwoot import the `LiveChatLoaderProvider` and set the `provider` prop
as `chatwoot` and the `providerKey` prop as your Chatwoot secret.

You can optionally set the `locale` and `baseUrl` props.

Then import the `Chatwoot` component.

```jsx
import { LiveChatLoaderProvider, Chatwoot } from 'react-live-chat-loader'

export default () => (
  <LiveChatLoaderProvider
    providerKey="E33wn9ftxMDHZx18AaBkfPvY"
    provider="chatwoot"
  >
    /* ... */
    <Chatwoot />
  </LiveChatLoaderProvider>
)
```

You can customise the Chatwoot Widget by passing the following props to the
`Chatwoot` component:

- `color`: The background color, set to same color value you choose in Chatwoot dashboard.
- `launcherTitle`: The text used for the [Expanded Bubble](https://www.chatwoot.com/docs/product/channels/live-chat/sdk/setup#widget-designs) design. Setting to any non-empty string will enable expanded bubble design automatically. Default value: `null`.

</details>

## ➕ Adding a Provider

To add a new live chat provider, follow the steps in [Contributing: Adding a Provider](CONTRIBUTING.md#-adding-a-provider).

## 🙌 Contributing

Happy to hear you’re interested in contributing to React Live Chat Loader! Please find our contribution guidelines [here](CONTRIBUTING.md).

## 🖥️ Examples

- [react-live-chat-loader-example-app](https://github.com/calibreapp/react-live-chat-loader/tree/master/website): example [Next.js](https://nextjs.org) application

## 📚 Resources

- [How to avoid performance regressions when using live chat tools](https://calibreapp.com/blog/fast-live-chat)
- [Reducing the Intercom Messenger bundle size by 65%](https://www.intercom.com/blog/reducing-intercom-messenger-bundle-size/)

## ✨ Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/FateXRebirth"><img src="https://avatars3.githubusercontent.com/u/11188616?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kevin Peng</b></sub></a><br /><a href="https://github.com/calibreapp/react-live-chat-loader/commits?author=FateXRebirth" title="Code">💻</a></td>
    <td align="center"><a href="http://ash.ms"><img src="https://avatars3.githubusercontent.com/u/49600?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ash Kyd</b></sub></a><br /><a href="https://github.com/calibreapp/react-live-chat-loader/commits?author=AshKyd" title="Documentation">📖</a></td>
    <td align="center"><a href="https://reiner.design"><img src="https://avatars3.githubusercontent.com/u/8116716?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jeff Reiner</b></sub></a><br /><a href="https://github.com/calibreapp/react-live-chat-loader/commits?author=mirshko" title="Documentation">📖</a> <a href="https://github.com/calibreapp/react-live-chat-loader/commits?author=mirshko" title="Code">💻</a></td>
    <td align="center"><a href="http://joanmira.com"><img src="https://avatars.githubusercontent.com/u/1721288?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Joan Mira</b></sub></a><br /><a href="https://github.com/calibreapp/react-live-chat-loader/commits?author=gazpachu" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/elmoeleven"><img src="https://avatars.githubusercontent.com/u/1560770?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nathan Collman</b></sub></a><br /><a href="https://github.com/calibreapp/react-live-chat-loader/commits?author=elmoeleven" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/jaska120"><img src="https://avatars.githubusercontent.com/u/23189620?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jaakko Mustalahti</b></sub></a><br /><a href="https://github.com/calibreapp/react-live-chat-loader/commits?author=jaska120" title="Code">💻</a></td>
    <td align="center"><a href="https://motiko.me"><img src="https://avatars.githubusercontent.com/u/875618?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Moti Korets</b></sub></a><br /><a href="https://github.com/calibreapp/react-live-chat-loader/commits?author=motiko" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/stramel"><img src="https://avatars.githubusercontent.com/u/855184?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Michael Stramel</b></sub></a><br /><a href="https://github.com/calibreapp/react-live-chat-loader/commits?author=stramel" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/myleslinder"><img src="https://avatars.githubusercontent.com/u/4735451?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Myles Linder</b></sub></a><br /><a href="https://github.com/calibreapp/react-live-chat-loader/commits?author=myleslinder" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/lauGutierrezz"><img src="https://avatars.githubusercontent.com/u/52488696?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Laura Gutiérrez López de la Franca</b></sub></a><br /><a href="https://github.com/calibreapp/react-live-chat-loader/commits?author=lauGutierrezz" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/38ri581oq480"><img src="https://avatars.githubusercontent.com/u/64654807?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kirill Vakalov</b></sub></a><br /><a href="https://github.com/calibreapp/react-live-chat-loader/commits?author=38ri581oq480" title="Code">💻</a></td>
    <td align="center"><a href="http://luisrudge.net"><img src="https://avatars.githubusercontent.com/u/941075?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Luís Rudge</b></sub></a><br /><a href="https://github.com/calibreapp/react-live-chat-loader/commits?author=luisrudge" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
