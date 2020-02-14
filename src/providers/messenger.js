const domain = 'https://connect.facebook.net'

const createCustomerchat = (pageID) => {
  if(!document.querySelector('.fb-customerchat')) {
    const chat = window.document.createElement('div');
    chat.className = "fb-customerchat";
    chat.setAttribute("page_id", pageID);
    window.document.body.appendChild(chat);
  }
}

const loadScript = (locale, pageID) => {
  if (window.FB) return

  !(function loadFacebookSDK(d, s, id) {
    // create customerchat
    createCustomerchat(pageID);
    // fetch customerchat.js
    var fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
      return;
    }
    var js = d.createElement(s);
    js.id = id;
    js.src = `${domain}/${locale}/sdk/xfbml.customerchat.js`;
    if (fjs) {
      fjs.parentNode.insertBefore(js, fjs);
    } else {
      d.body.appendChild(js);
    }
  })(window.document, 'script', 'facebook-jssdk');
}

const load = ({ providerKey, locale, pageID }) => {
  loadScript(locale, pageID);
  window.fbAsyncInit = function() {
    window.FB.init({
      appId: providerKey,
      cookie: true,
      xfbml: true,
      version: 'v3.2'
    });
  };
}

const open = () => {
  window.FB.CustomerChat.show(false);
}
const close = () => {
  window.FB.CustomerChat.hide();
}

export default {
  domain,
  load,
  open,
  close
}