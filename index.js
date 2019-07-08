"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ = require("./");

var _states = _interopRequireDefault(require("./utils/states"));

var _index = _interopRequireDefault(require("./index.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var HelpScout = function HelpScout() {
  var _useContext = (0, _react.useContext)(_.FakeBeaconContext),
      state = _useContext.state,
      open = _useContext.open,
      close = _useContext.close;

  var handleClick = function handleClick() {
    if (state === _states["default"].INITIAL) {
      open();
    }

    if (state === _states["default"].LOADED) close();
  };

  if (state === _states["default"].COMPLETE) return null;
  return _react["default"].createElement("div", {
    className: _index["default"].wrapper
  }, _react["default"].createElement("button", {
    className: _index["default"].wrapper,
    onClick: handleClick
  }, _react["default"].createElement("span", {
    styles: state === _states["default"].INITIAL ? _index["default"].initialIcon : _index["default"].icon
  }, _react["default"].createElement("svg", {
    width: 30,
    height: 30,
    xmlns: "http://www.w3.org/2000/svg"
  }, _react["default"].createElement("path", {
    d: "M26.244 21.523l-4.356-4.355a7.192 7.192 0 0 0 0-4.345l4.356-4.355a12.98 12.98 0 0 1 0 13.055zm-.4 3.215l-1.1 1.1a.557.557 0 0 1-.786 0l-4.884-4.884a7.27 7.27 0 0 0 1.885-1.886l4.885 4.885a.55.55 0 0 1 0 .785zM8.471 26.236l4.355-4.354a7.197 7.197 0 0 0 4.347 0l4.355 4.354a12.983 12.983 0 0 1-13.057 0zm-2.43-.398a.556.556 0 0 1-.786 0l-1.1-1.1a.556.556 0 0 1 0-.786l4.884-4.884a7.275 7.275 0 0 0 1.887 1.886L6.04 25.838zm-2.285-4.315a12.98 12.98 0 0 1 0-13.055l4.355 4.354a7.192 7.192 0 0 0 0 4.347l-4.355 4.354zm.399-16.27l1.1-1.1a.554.554 0 0 1 .785 0l4.886 4.884a7.27 7.27 0 0 0-1.887 1.885L4.155 6.039a.556.556 0 0 1 0-.786zm17.373-1.5l-4.355 4.355a7.229 7.229 0 0 0-4.347 0L8.471 3.754a12.99 12.99 0 0 1 13.057 0zm-1.305 11.242A5.228 5.228 0 0 1 15 20.217a5.228 5.228 0 0 1-5.224-5.222A5.228 5.228 0 0 1 15 9.773a5.23 5.23 0 0 1 5.223 5.222zm3.735-10.842a.556.556 0 0 1 .786 0l1.1 1.1a.553.553 0 0 1 0 .786l-4.884 4.883a7.302 7.302 0 0 0-1.886-1.885l4.884-4.884zm3.688 2.786c.23-.39.362-.83.362-1.293 0-.683-.266-1.325-.75-1.807l-1.098-1.1a2.555 2.555 0 0 0-3.101-.387 14.985 14.985 0 0 0-16.125.004c-.973-.548-2.284-.426-3.093.383l-1.101 1.1a2.533 2.533 0 0 0-.387 3.1 14.97 14.97 0 0 0 0 16.114 2.553 2.553 0 0 0 .387 3.099l1.1 1.1A2.549 2.549 0 0 0 5.649 28a2.55 2.55 0 0 0 1.293-.361A14.961 14.961 0 0 0 15 30.002a14.97 14.97 0 0 0 8.059-2.363c.398.234.844.36 1.292.36.655 0 1.31-.25 1.809-.747l1.099-1.1a2.531 2.531 0 0 0 .387-3.1 14.963 14.963 0 0 0 0-16.113z",
    fill: "#FFF",
    fillRule: "evenodd"
  }))), _react["default"].createElement("span", {
    styles: state === _states["default"].INITIAL ? _index["default"].initialClose : _index["default"].close
  }, _react["default"].createElement("svg", {
    width: 14,
    height: 14,
    xmlns: "http://www.w3.org/2000/svg"
  }, _react["default"].createElement("path", {
    d: "M13.707.293a.999.999 0 0 0-1.414 0L7 5.586 1.707.293A.999.999 0 1 0 .293 1.707L5.586 7 .293 12.293a.999.999 0 1 0 1.414 1.414L7 8.414l5.293 5.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L8.414 7l5.293-5.293a.999.999 0 0 0 0-1.414",
    fill: "#FFF",
    fillRule: "evenodd"
  }))), _react["default"].createElement("span", {
    className: _index["default"].text
  }, "Help")));
};

var _default = HelpScout;
exports["default"] = _default;
"use strict";

!function (e, t, n) {
  function a() {
    var e = t.getElementsByTagName('script')[0],
        n = t.createElement('script');
    n.async = !0, n.src = 'https://beacon-v2.helpscout.net', e.parentNode.insertBefore(n, e);
  }

  if (e.Beacon = n = function n(t, _n, a) {
    e.Beacon.readyQueue.push({
      method: t,
      options: _n,
      data: a
    });
  }, n.readyQueue = [], 'complete' === t.readyState) return a();
  e.attachEvent ? e.attachEvent('onload', a) : e.addEventListener('load', a, !1);
}(window, document, window.Beacon || function () {});
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "HelpScout", {
  enumerable: true,
  get: function get() {
    return _HelpScout["default"];
  }
});
exports.FakeBeaconProvider = exports.FakeBeaconContext = void 0;

var _react = _interopRequireWildcard(require("react"));

var _states = _interopRequireDefault(require("./utils/states"));

var _helpScout = require("./utils/helpScout");

var _HelpScout = _interopRequireDefault(require("./components/HelpScout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var FakeBeaconContext = (0, _react.createContext)();
exports.FakeBeaconContext = FakeBeaconContext;

var FakeBeaconProvider = function FakeBeaconProvider(_ref) {
  var _ref$key = _ref.key,
      key = _ref$key === void 0 ? '' : _ref$key,
      _ref$provider = _ref.provider,
      provider = _ref$provider === void 0 ? 'helpScout' : _ref$provider,
      children = _ref.children;

  var _useState = (0, _react.useState)(_states["default"].INITIAL),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var open =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.t0 = provider;
              _context.next = _context.t0 === 'provider' ? 3 : 4;
              break;

            case 3:
              return _context.abrupt("return", (0, _helpScout.openHelpScout)({
                key: key,
                state: state,
                setState: setState
              }));

            case 4:
              return _context.abrupt("return", console.error('Invalid provider given to FakeBeacon'));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function open() {
      return _ref2.apply(this, arguments);
    };
  }();

  var close = function close() {
    switch (provider) {
      case 'helpScout':
        return (0, _helpScout.closeHelpScout)();

      default:
        //eslint-disable-next-line no-console
        return console.error('Invalid provider given to FakeBeacon');
    }
  };

  var value = {
    state: state,
    setState: setState,
    open: open,
    close: close
  };
  return _react["default"].createElement(FakeBeaconContext.Provider, {
    value: value
  }, children);
};

exports.FakeBeaconProvider = FakeBeaconProvider;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeHelpScout = exports.openHelpScout = void 0;

var _states = _interopRequireDefault(require("./states"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var openHelpScout =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var key, state, setState;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            key = _ref.key, state = _ref.state, setState = _ref.setState;

            if (!(state === _states["default"].LOADING)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            if (state === _states["default"].INITIAL) {
              setState(_states["default"].LOADING);
              Promise.resolve().then(function () {
                return _interopRequireWildcard(require('./script'));
              }).then(function () {
                window.Beacon('init', key);
                window.Beacon('open');
                setState(_states["default"].LOADED);
                setTimeout(function () {
                  return setState(_states["default"].COMPLETE);
                }, 2000);
              });
            } else {
              window.Beacon('open');
            }

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function openHelpScout(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.openHelpScout = openHelpScout;

var closeHelpScout = function closeHelpScout() {
  return window.Beacon('close');
};

exports.closeHelpScout = closeHelpScout;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var STATES = {
  INITIAL: 'initial',
  LOADING: 'loading',
  LOADED: 'loaded',
  COMPLETE: 'complete'
};
var _default = STATES;
exports["default"] = _default;
