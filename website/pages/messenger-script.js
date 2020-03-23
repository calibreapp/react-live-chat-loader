import React from 'react'
import Layout from '../layouts/main'

const Page = () => (
  <Layout title="Facebook Messenger">
    <div className="wrapper">
      <div className="inner">
        <h1>Facebook Messenger</h1>
        <p>
          This is an example implementation of the Facebook Messenger chat
          widget using the instructions from Facebook.
        </p>
      </div>
    </div>
    <div id="fb-root"></div>
    <script
      dangerouslySetInnerHTML={{
        __html: `window.fbAsyncInit = function() {
              FB.init({
                xfbml            : true,
                version          : 'v6.0'
              });
            };
            (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));`
      }}
    />
    <div
      className="fb-customerchat"
      page_id="100594861551567"
      theme_color="#13cf13"
      logged_in_greeting="What's up?"
      logged_out_greeting="What's up?"
      greeting_dialog_display="hide"
    ></div>
  </Layout>
)

export default Page
