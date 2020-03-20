import React from 'react'
import App from 'next/app'

export default class extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Component {...pageProps} />
        <style global jsx>{`
          .wrapper {
            align-items: center;
            display: flex;
            height: 100vh;
          }
          .inner {
            margin: auto;
            max-width: 700px;
            padding: 15px;
          }
          h1 {
            font-size: 36px;
          }
          a {
            color: white;
            font-weight: bold;
            text-decoration: none;
          }
          a span {
            display: inline-block;
            transition: margin 0.1s ease-out;
          }
          a:hover span {
            margin-left: 5px;
          }
        `}</style>
      </>
    )
  }
}
