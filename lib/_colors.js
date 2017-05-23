'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var _ref$primary = _ref.primary;
  var primary = _ref$primary === undefined ? '#337ab7' : _ref$primary;
  var _ref$success = _ref.success;
  var success = _ref$success === undefined ? '#5cb85c' : _ref$success;
  var _ref$info = _ref.info;
  var info = _ref$info === undefined ? '#5bc0de' : _ref$info;
  var _ref$warning = _ref.warning;
  var warning = _ref$warning === undefined ? '#f0ad4e' : _ref$warning;
  var _ref$danger = _ref.danger;
  var danger = _ref$danger === undefined ? '#d9534f' : _ref$danger;
  var _ref$white = _ref.white;
  var white = _ref$white === undefined ? '#fff' : _ref$white;
  var _ref$silver = _ref.silver;
  var silver = _ref$silver === undefined ? '#F4F4F4' : _ref$silver;
  var _ref$lightgrey = _ref.lightgrey;
  var lightgrey = _ref$lightgrey === undefined ? '#ececec' : _ref$lightgrey;
  var _ref$grey = _ref.grey;
  var grey = _ref$grey === undefined ? '#ccc' : _ref$grey;
  var _ref$midgrey = _ref.midgrey;
  var midgrey = _ref$midgrey === undefined ? '#777' : _ref$midgrey;
  var _ref$darkgrey = _ref.darkgrey;
  var darkgrey = _ref$darkgrey === undefined ? '#444' : _ref$darkgrey;
  var _ref$black = _ref.black;
  var black = _ref$black === undefined ? '#222' : _ref$black;
  var _ref$trueblack = _ref.trueblack;
  var trueblack = _ref$trueblack === undefined ? '#000' : _ref$trueblack;
  return {
    // ====================================================
    //  Text Colors
    // ====================================================

    colorPrimary: { color: primary },
    colorSuccess: { color: success },
    colorInfo: { color: info },
    colorWarning: { color: warning },
    colorDanger: { color: danger },

    colorWhite: { color: white },
    colorSilver: { color: silver },
    colorLightgrey: { color: lightgrey },
    colorGrey: { color: grey },
    colorMidgrey: { color: midgrey },
    colorDarkgrey: { color: darkgrey },
    colorBlack: { color: black },
    colorTrueblack: { color: trueblack },
    colorInherit: { color: 'inherit' },
    colorTransparent: { color: 'transparent' },

    c0: { color: '#000' },
    c1: { color: '#111' },
    c2: { color: '#222' },
    c3: { color: '#333' },
    c4: { color: '#444' },
    c5: { color: '#555' },
    c6: { color: '#666' },
    c7: { color: '#777' },
    c8: { color: '#888' },
    c9: { color: '#999' },
    ca: { color: '#aaa' },
    cb: { color: '#bbb' },
    cc: { color: '#ccc' },
    cd: { color: '#ddd' },
    ce: { color: '#eee' },
    cf: { color: '#fff' },

    // ====================================================
    //  Background Colors
    // ====================================================

    bgPrimary: { backgroundColor: primary },
    bgSuccess: { backgroundColor: success },
    bgInfo: { backgroundColor: info },
    bgWarning: { backgroundColor: warning },
    bgDanger: { backgroundColor: danger },

    bgWhite: { backgroundColor: white },
    bgSilver: { backgroundColor: silver },
    bgLightgrey: { backgroundColor: lightgrey },
    bgGrey: { backgroundColor: grey },
    bgMidgrey: { backgroundColor: midgrey },
    bgDarkgrey: { backgroundColor: darkgrey },
    bgBlack: { backgroundColor: black },
    bgTrueblack: { backgroundColor: trueblack },
    bgTransparent: { backgroundColor: 'transparent' },

    // ====================================================
    //  Border Colors
    // ====================================================

    borderPrimary: { borderColor: primary },
    borderSuccess: { borderColor: success },
    borderInfo: { borderColor: info },
    borderWarning: { borderColor: warning },
    borderDanger: { borderColor: danger },

    borderWhite: { borderColor: white },
    borderSilver: { borderColor: silver },
    borderLightgrey: { borderColor: lightgrey },
    borderGrey: { borderColor: grey },
    borderMidgrey: { borderColor: midgrey },
    borderDarkgrey: { borderColor: darkgrey },
    borderBlack: { borderColor: black },
    borderTrueblack: { borderColor: trueblack },
    borderTransparent: { borderColor: 'transparent' }
  };
};