import React from 'react'
import Layout from '../layouts/main'

const Page = () => (
  <Layout title="Intercom">
    <div className="wrapper">
      <div className="inner">
        <h1>Intercom</h1>
        <p>
          This is an example implementation of the Intercom widget using the
          instructions from Intercom.
        </p>
      </div>
    </div>
    <script
      dangerouslySetInnerHTML={{
        __html: `window.intercomSettings = { app_id: "otpo7g1i" };`
      }}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/otpo7g1i';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
`
      }}
    />
  </Layout>
)

export default Page
