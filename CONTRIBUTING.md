# Contributing

Thank you for your interest in contributing to React Live Chat Loader! 🙌🏻 Below, you will find everything you need to get started.

## 🖇️ Table of Contents

1. [Code of Conduct](CODE_OF_CONDUCT.md)
2. [Reporting Bugs](#reporting-bugs)
3. [Suggesting Features](#suggesting-features)
4. [Creating Pull Requests](#creating-pull-requests)
5. [Adding a Provider](#adding-a-provider)

## 📣 Code of Conduct
This project and everyone participating in it are governed by this [Code of Conduct](CODE_OF_CONDUCT.md). By participating, we expect you to act accordingly to this code. Please report unacceptable behaviour to hello@calibreapp.com. 

## 🐛 Reporting Bugs
Before creating a bug report, see if the problem [has already been reported](https://github.com/calibreapp/react-live-chat-loader/issues). If yes, and **the issue is still open**, add a comment to the existing issue instead of creating a new one.

When creating a bug report, please **provide as much information and context as possible** to help the maintainers quickly identify and resolve problems:

1. **Describe the bug.** Please provide a clear and concise description of what the bug is.
2. **Explain how to reproduce.** Outline the steps to reproduce the behaviour, including any relevant information such as operating system, browser type and version, etc.
3. **Outline the expected behaviour.** Describe what you expected to happen clearly and concisely.
4. **Add screenshots.** If applicable, add screenshots to help explain the problem.

You will be [guided to provide relevant information](.github/ISSUE_TEMPLATE/---bug-report.md) as you create the issue.

## 💡 Suggesting Features

Before suggesting a new feature, see if [has already been suggested](https://github.com/calibreapp/react-live-chat-loader/issues?q=is%3Aissue+is%3Aopen+Feature+request). If yes, and **the issue is still open**, add a comment to the existing issue instead of creating a new one.

When filing a feature request, please **provide as much information and context as possible** to help the maintainers triage issues:

1. **What problem would this feature solve?** A clear and concise description of what the problem is.
2. **Describe the solution you’d like to see.** A clear and concise description of what you would like to happen. Are you willing to work on implementing this solution?
3. **Describe alternatives you’ve considered.** A clear and concise description of any alternative solutions or features you’ve considered.

You will be [guided to provide relevant information](.github/ISSUE_TEMPLATE/---feature-request.md) as you create the feature request.

## 📝 Creating Pull Requests
We welcome contributions to React Live Chat Loader that:

* improve the quality, security and performance of the library
* resolve existing issues and feature requests
* add new live chat providers

Please follow these steps to have your contribution considered by the maintainers:

1. Follow instructions in the [pull request template](.github/pull_request_template.md).
2. Sign a CLA.
3. Verify that checks are passing.

You must meet the above requirements to have your pull request reviewed. The maintainer(s) may ask you to complete additional work, tests, or other changes before your pull request is accepted and merged.

## ➕ Adding a Provider

To contribute a new provider, follow these steps:

### 1. Create provider file

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

### 2. Create component

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

### 3. Update README

Add your new provider to this README under [Supported Providers](#supported-providers).

### 4. Add an example page

Add a new page to `website/pages/` which showcases the provider. If you don't want to include your `providerKey` leave this blank and the maintainers will set one up.

The new provider page can be tested locally by creating a distribution version of the package and referencing this from the `website`.

To create the distribution version and reference it, do the following:

- In the root of the project, run `npm run build`
- In the `website` directory run `npm install`
- In the `website` directory run the server with `npm run dev`
- Add a new page to `website/pages/` which includes the new component
- Add a link to the provider in `website/pages/index.js`
- Add a link to the provider in `website/components/exampleLinks.js`
