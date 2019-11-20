const loadScript = () => {
  !(function() {
    var w = window
    var ic = w.Intercom
    if (typeof ic === 'function') {
      ic('reattach_activator')
      //eslint-disable-next-line no-undef
      ic('update', intercomSettings)
    } else {
      var d = document
      var i = function() {
        i.c(arguments)
      }
      i.q = []
      i.c = function(args) {
        i.q.push(args)
      }
      w.Intercom = i
      //eslint-disable-next-line no-inner-declarations
      function l() {
        var s = d.createElement('script')
        s.type = 'text/javascript'
        s.async = true
        s.src = 'https://widget.intercom.io/widget/3qmk5gyg'
        var x = d.getElementsByTagName('script')[0]
        x.parentNode.insertBefore(s, x)
      }
      l()
    }
  })()
}

const load = ({ providerKey }) => {
  loadScript()
  window.Intercom('boot', { app_id: providerKey })
}

const open = () => window.Intercom('show')

const close = () => window.Intercom('close')

export default {
  load,
  open,
  close
}
