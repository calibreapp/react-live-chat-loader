## 2.11.0 (2025-02-25)

### 🛠 Core

- Add support for React 19 ([#487](https://github.com/calibreapp/react-live-chat-loader/pull/487)) by @kai11

### 🆕 New providers

- Adds `Adobe Dynamic Chat` as a provider ([#488](https://github.com/calibreapp/react-live-chat-loader/pull/488)) by @enjoyjeremy-bc

### 📦 Dependencies

- Updated dependencies

## 2.10.0 (2025-01-03)

### 🛠 Core

- Added ability to set custom icon element for Intercom provider ([#467](https://github.com/calibreapp/react-live-chat-loader/pull/467)) by @leviceccato

### 📦 Dependencies

- Updated dependencies

## 2.9.2 (2024-07-18)

### 🛠 Core

- Remove unneeded `preconnect` link ([#426](https://github.com/calibreapp/react-live-chat-loader/pull/426))

### 📦 Dependencies

- Update numerous dependencies

## 2.9.1 (2024-01-10)

### 🛠 Core

- No updates. Reinstates build files missing from previous release.

## 2.9.0 (2024-01-09)

### 🆕 New providers

- Adds `HubSpot` as a provider ([#281](https://github.com/calibreapp/react-live-chat-loader/pull/281))
- Adds `Front` as a provider ([#345](https://github.com/calibreapp/react-live-chat-loader/pull/345))

### 📦 Dependencies

- Updates dependencies
- Removes unnecessary dependencies ([#341](https://github.com/calibreapp/react-live-chat-loader/pull/341))

### 🐛 Bugs

- Updates `module` targets in `.babelrc` to ensure all builds are transpiled to ES5 ([#341](https://github.com/calibreapp/react-live-chat-loader/pull/341))

### 💞 Credits

Thanks to [altaywtf](https://github.com/altaywtf) for module targets bugfix and dependency cleanup; [jucallej](https://github.com/jucallej) and [drwlrsn](https://github.com/drwlrsn) for their work on adding `HubSpot` as a provider; and [IlirEdis](https://github.com/IlirEdis) for the addition of `Front` as a provider.

## 2.8.2 (2023-10-17)

### 📦 Dependencies

- Updates dependencies.

### 🐛 Bugs

- Adjusts `targets` value in `.babelrc` to ensure build is transpiled to ES5 ([#228](https://github.com/calibreapp/react-live-chat-loader/issues/228)).

### 💞 Credits

Thanks to [nzjames](https://github.com/nzjames) for reporting, debugging and offering up a solution to the dropped ES5 compatibility bug.

## 2.8.1 (2022-12-22)

### 📦 Dependencies

- Updates dependencies.

### 🐛 Bugs

- Realign `react-live-chat-loader` placeholder styling with Intercom's new default styling ([#215](https://github.com/calibreapp/react-live-chat-loader/pull/215)).

## 2.8.0 (2022-10-19)

### 🛠 Core

- Adds optional `containerClass` prop to provider components ([#184](https://github.com/calibreapp/react-live-chat-loader/pull/184)).
- Realigns `react-live-chat-loader` default styling with the current default styling of each provider’s chat beacon ([#186](https://github.com/calibreapp/react-live-chat-loader/pull/186)).
- Improves the example website ([#177](https://github.com/calibreapp/react-live-chat-loader/pull/177), [#182](https://github.com/calibreapp/react-live-chat-loader/pull/182), [#183](https://github.com/calibreapp/react-live-chat-loader/pull/183)):
  - converts to Typescript
  - fixes the local environment
  - removes invalid markup
  - addresses Next CLI warnings
- Removes Storybook ([#181](https://github.com/calibreapp/react-live-chat-loader/pull/181)).

### 📦 Dependencies

- Updates dependencies.

### 🐛 Bugs

- Fixes Typescript definitions ([#182](https://github.com/calibreapp/react-live-chat-loader/pull/182)).

### 💞 Credits

Thanks to [@IngoVals](https://github.com/IngoVals), [@Undistraction](https://github.com/Undistraction) and [@tien](https://github.com/tien) for raising issues, comments and pull requests that assisted with this release!

## 2.7.4 (2022-09-13)

### 🛠 Core

- Updates package restriction to support React ^18 (thanks to [@cbschuld](https://github.com/cbschuld)).

## 2.7.3 (2022-01-08)

### 🛠 Core

- No update. Release updated `package-lock.json` to version 2.

## 2.7.2 (2021-10-05)

### ♿️ Accessibility

- Updates `aria role` on provider buttons to improve accessibility (thanks to [@luisrudge](https://github.com/luisrudge)).

## 2.7.0 (2021-09-14)

### 📦 Dependencies

- Updates `peerDependencies` to remove warning for React 17 (thanks to [@38ri581oq480](https://github.com/38ri581oq480)).

### ♿️ Accessibility

- Adds `aria` labels for accessibility attributes to provider buttons (thanks to [@lauGutierrezz](https://github.com/lauGutierrezz)).

## 2.6.0 (2021-09-03)

### 🛠 Core

- Adds `beforeInit` and `onReady` callbacks (thanks to [@myleslinder](https://github.com/myleslinder)).

## 2.5.2 (2021-06-25)

### 🐛 Bugs

- Fixes using `loadChat` to open a widget.

## 2.5.1 (2021-06-09)

### 🛠 Core

- Uses relative paths for library imports to ensure types can be found.

## 2.5.0 (2021-06-08)

### 🆕 New provider

- Adds `Chatwoot` component (thanks to [@motiko](https://github.com/motiko))

### 🛠 Core

- Updates how we detect if a provider has loaded.

## 2.4.0 (2021-05-24)

### 🛠 Core

- Builds additional module version of the package (thanks to [@jaska120](https://github.com/jaska120)).

## 2.3.3 (2021-05-10)

### 🛠 Core

- Bundles Type Definitions (thanks to [@elmoeleven](https://github.com/elmoeleven)).

### 🐛 Bugs

- Fixes default params for `useChat` hook (thanks to [@elmoeleven](https://github.com/elmoeleven)).

## 2.3.0 (2021-04-27)

### 🛠 Core

- Converts library to Typescript (thanks to [@elmoeleven](https://github.com/elmoeleven)).

## 2.2.0 (2021-03-30)

### 🆕 New provider

- Adds `Userlike` component (thanks to [@gazpachu](https://github.com/gazpachu)).

## 2.1.3 (2020-07-21)

### 📦 Dependencies

- Updates dependencies.

## 2.1.2 (2020-04-28)

### 🛠 Core

- Updates appearance of messenger (thanks to [@FateXRebirth](https://github.com/FateXRebirth)).

## 2.1.0 (2020-04-21)

### 🆕 New provider

- Adds `Drift` component (thanks to [@mirshko](https://github.com/mirshko)).

## 2.0.5 (2020-03-30)

### 🐛 Bugs

- Fixes `Messenger` options missing ([#25](https://github.com/calibreapp/react-live-chat-loader/pull/25)).

## 2.0.3 (2020-03-30)

### 🐛 Bugs

- Fixes `Messenger` loading error ([#22](https://github.com/calibreapp/react-live-chat-loader/issues//22)).
- Fixes `Messenger` not opening when clicked before load ([#11 comment](https://github.com/calibreapp/react-live-chat-loader/pull/11#discussion_r390098110)).

## 2.0.0 (2020-03-23)

### 🆕 New provider

- Adds `Messenger` component (thanks to [@FateXRebirth](https://github.com/FateXRebirth)).

### 🐛 Bugs

- Fixes SSR: ReferenceError: window is not defined in `useWindowHeight` hook.
