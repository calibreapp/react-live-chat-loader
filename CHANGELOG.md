## 2.8.0 - 2022-10-18

### Changes

- Add optional `containerClass` prop to provider components [#184](https://github.com/calibreapp/react-live-chat-loader/pull/184)
- Realign `react-live-chat-loader` default styling with the current default styling of each provider’s chat beacon [#186](https://github.com/calibreapp/react-live-chat-loader/pull/186)
- Fix Typescript definitions [#182](https://github.com/calibreapp/react-live-chat-loader/pull/182)
- Improve example website: convert to Typescript, fix local environment, remove invalid markup, address Next CLI warnings [#177](https://github.com/calibreapp/react-live-chat-loader/pull/177), [#182](https://github.com/calibreapp/react-live-chat-loader/pull/182), [#183](https://github.com/calibreapp/react-live-chat-loader/pull/183)
- Remove Storybook [#181](https://github.com/calibreapp/react-live-chat-loader/pull/181)
- Update dependencies

### Credits

Thanks to @IngoVals, @Undistraction and @tien for raising issues, comments or pull requests that assisted with this release.

## 2.7.4 - 2022-09-13

- Updated package restriction to support react ^18 (@cbschuld)

## 2.7.3 - 2022-01-08

- No update. Release updated package-lock.json to version 2.

## 2.7.2 - 2021-10-05

- Update aria role on provider buttons to improve accessibility (@luisrudge)

## 2.7.0 - 2021-09-14

- Update `peerDependencies` to remove warning for React 17 (thanks @38ri581oq480)
- Add aria labels for accessibility attributes to provider buttons (thanks @lauGutierrezz)

## 2.6.0 - 2021-09-03

- Add `beforeInit` and `onReady` callbacks (thanks @myleslinder)

## 2.5.2 - 2021-06-25

- Bug fix for using `loadChat` to open a widget

## 2.5.1 - 2021-06-09

- Use relative paths for library imports to ensure types can be found

## 2.5.0 - 2021-06-08

- Add `Chatwoot` component (thanks @motiko)
- Update how we detect if a provider has loaded

## 2.4.0 - 2021-05-24

- Build additional module version of the package (thanks @jaska120)

## 2.3.3 - 2021-05-10

- Fix default params for `useChat` hook (thanks @elmoeleven)
- Bundle Type Definitions (thanks @elmoeleven)

## 2.3.0 - 2021-04-27

- Convert library to Typescript (thanks @elmoeleven)

## 2.2.0 - 2021-03-30

- Add `Userlike` component (thanks @gazpachu)

## 2.1.3 - 2020-07-21

- Update dependencies

## 2.1.2 - 2020-04-28

- Update appearance of messenger (thanks @FateXRebirth)

## 2.1.0 - 2020-04-21

- Add `Drift` component (thanks @mirshko)

## 2.0.5 - 2020-03-30

- Fix `Messenger` options missing [#25](https://github.com/calibreapp/react-live-chat-loader/pull/25)

## 2.0.3 - 2020-03-30

- Fix `Messenger` loading error [#22](https://github.com/calibreapp/react-live-chat-loader/issues//22)
- Fix `Messenger` not opening when clicked before load [#11 comment](https://github.com/calibreapp/react-live-chat-loader/pull/11#discussion_r390098110)

## 2.0.0 - 2020-03-23

- Add `Messenger` component (thanks @FateXRebirth)
- Fix SSR: ReferenceError: window is not defined in `useWindowHeight` hook
