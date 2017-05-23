// ====================================================
//  Text Colors
// ====================================================

export default ({
  borderColor = '#D9D9D9',
  borderStyle = 'solid',
  borderRadius = 5,
}) => ({
  b0: { borderWidth: 0 },
  bh: { borderWidth: 0.5, borderColor, borderStyle },
  b1: { borderWidth: 1, borderColor, borderStyle },

  bt0: { borderTopWidth: 0 },
  bth: { borderTopWidth: 0.5, borderColor, borderStyle },
  bt1: { borderTopWidth: 1, borderColor, borderStyle },

  br0: { borderRightWidth: 0 },
  brh: { borderRightWidth: 0.5, borderColor, borderStyle },
  br1: { borderRightWidth: 1, borderColor, borderStyle },

  bb0: { borderBottomWidth: 0 },
  bbh: { borderBottomWidth: 0.5, borderColor, borderStyle },
  bb1: { borderBottomWidth: 1, borderColor, borderStyle },

  bl0: { borderLeftWidth: 0 },
  blh: { borderLeftWidth: 0.5, borderColor, borderStyle },
  bl1: { borderLeftWidth: 1, borderColor, borderStyle },

  rounded: { borderRadius },
  notRounded: { borderRadius: 0 },
})
