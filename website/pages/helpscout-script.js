import React from 'react'
import Layout from '../layouts/main'

const Page = () => (
  <Layout title="Help Scout">
    <div className="wrapper">
      <div className="inner">
        <h1>Help Scout</h1>
        <p>
          This is an example implementation of the Help Scout beacon using the
          instructions from Help Scout.
        </p>
      </div>
    </div>
    <script
      dangerouslySetInnerHTML={{
        __html: `!function(e,t,n){function a(){var e=t.getElementsByTagName("script")[0],n=t.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://beacon-v2.helpscout.net",e.parentNode.insertBefore(n,e)}if(e.Beacon=n=function(t,n,a){e.Beacon.readyQueue.push({method:t,options:n,data:a})},n.readyQueue=[],"complete"===t.readyState)return a();e.attachEvent?e.attachEvent("onload",a):e.addEventListener("load",a,!1)}(window,document,window.Beacon||function(){});`
      }}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `window.Beacon('init', 'd2e33afd-95c7-41d5-aa48-f1cca534c946')`
      }}
    />
  </Layout>
)

export default Page
