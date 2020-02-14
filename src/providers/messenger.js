const domain = 'https://connect.facebook.net/zh_TW/sdk/xfbml.customerchat.js'

const loadScript = () => {
  if (window.FB) return

  ! (function loadFacebookSDK(d, s, id) {
    var fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    var js = d.createElement(s);
    js.id = id;
    js.src = domain;
    if (fjs) {
      fjs.parentNode.insertBefore(js, fjs);
    } else {
      d.body.appendChild(js);
    }
  })(window.document, 'script', 'facebook-jssdk');
}

const load = ({ providerKey }) => {
  loadScript();
  window.fbAsyncInit = function() {
    window.FB.init({
      appId: providerKey,
      cookie: true,
      xfbml: true,
      version: 'v3.2'
    });
    console.log("init")
    window.FB.CustomerChat.show(false);
  };
}

const open = () => {
  console.log("open")
  window.FB.CustomerChat.showDialog();
  
}
const close = () => {
  console.log("close")
  window.FB.CustomerChat.hideDialog();
}

export default {
  domain,
  load,
  open,
  close
}