const domain = 'https://connect.facebook.net'

const createCustomerchat = ({ 
  pageID,
  themeColor = '',
  loggedInGreeting = '',
  loggedOutGreeting = '',
  greetingDialogDisplay = '',
  greetingDialogDelay = '',
}) => {

  if (!pageID) {
    //eslint-disable-next-line no-console
    console.error('No page id given to messenger provider')
    return
  }

  if(!document.querySelector('.fb-customerchat')) {
    const chat = window.document.createElement('div');
    chat.className = "fb-customerchat";
    chat.setAttribute("page_id", pageID);
    if(themeColor) chat.setAttribute('theme_color', themeColor);
    if(loggedInGreeting) chat.setAttribute('logged_in_greeting', loggedInGreeting);
    if(loggedOutGreeting) chat.setAttribute('logged_out_greeting', loggedOutGreeting);
    if(greetingDialogDisplay) chat.setAttribute('greeting_dialog_display', greetingDialogDisplay);
    if(greetingDialogDelay) chat.setAttribute('greeting_dialog_delay', greetingDialogDelay);
    window.document.body.appendChild(chat);
  }
}

const loadScript = ({ locale = 'en_US', ...options }) => {
  if (window.FB) return

  !(function loadFacebookSDK(d, s, id) {
    // create customerchat
    createCustomerchat(options);
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

const load = ({ providerKey, ...options }) => {
  loadScript(options);
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