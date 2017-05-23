'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// ====================================================
//  Text Colors
// ====================================================

exports.default = function (_ref) {
  var _ref$borderColor = _ref.borderColor;
  var borderColor = _ref$borderColor === undefined ? '#D9D9D9' : _ref$borderColor;
  var _ref$borderStyle = _ref.borderStyle;
  var borderStyle = _ref$borderStyle === undefined ? 'solid' : _ref$borderStyle;
  var _ref$borderRadius = _ref.borderRadius;
  var borderRadius = _ref$borderRadius === undefined ? 5 : _ref$borderRadius;
  return {
    b0: { borderWidth: 0 },
    bh: { borderWidth: 0.5, borderColor: borderColor, borderStyle: borderStyle },
    b1: { borderWidth: 1, borderColor: borderColor, borderStyle: borderStyle },

    bt0: { borderTopWidth: 0 },
    bth: { borderTopWidth: 0.5, borderColor: borderColor, borderStyle: borderStyle },
    bt1: { borderTopWidth: 1, borderColor: borderColor, borderStyle: borderStyle },

    br0: { borderRightWidth: 0 },
    brh: { borderRightWidth: 0.5, borderColor: borderColor, borderStyle: borderStyle },
    br1: { borderRightWidth: 1, borderColor: borderColor, borderStyle: borderStyle },

    bb0: { borderBottomWidth: 0 },
    bbh: { borderBottomWidth: 0.5, borderColor: borderColor, borderStyle: borderStyle },
    bb1: { borderBottomWidth: 1, borderColor: borderColor, borderStyle: borderStyle },

    bl0: { borderLeftWidth: 0 },
    blh: { borderLeftWidth: 0.5, borderColor: borderColor, borderStyle: borderStyle },
    bl1: { borderLeftWidth: 1, borderColor: borderColor, borderStyle: borderStyle },

    rounded: { borderRadius: borderRadius },
    notRounded: { borderRadius: 0 }
  };
};