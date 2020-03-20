import Head from 'next/head'

export default ({ title, children }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/static/favicon.ico" />
      <link color="#3b97d3" href="/static/spade.svg" rel="mask-icon" />
      <link
        rel="apple-touch-icon"
        type="image/png"
        href="/static/apple-touch-icon-76-76.png"
        sizes="76x76"
      />
      <link
        rel="apple-touch-icon"
        type="image/png"
        href="/static/apple-touch-icon-120-120.png"
        sizes="120x120"
      />
      <link
        rel="apple-touch-icon"
        type="image/png"
        href="/static/apple-touch-icon-152-152.png"
        sizes="152x152"
      />
      <link
        rel="apple-touch-icon"
        type="image/png"
        href="/static/apple-touch-icon-167-167.png"
        sizes="167x167"
      />
      <link
        rel="apple-touch-icon"
        type="image/png"
        href="/static/apple-touch-icon-180-180.png"
        sizes="180x180"
      />
    </Head>
    <style global jsx>{`
      body {
        background-color: #041452;
        color: white;
        font-size: 16px;
        line-height: 1.5;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
          Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
          'Segoe UI Symbol';
        height: 100vh;
        margin: 0;
        padding: 0;
        width: 100%;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
      }
    `}</style>
    {children}
  </>
)
