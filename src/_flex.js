export default {
  // ====================================================
  //  Flex Componets
  // ====================================================

  column: { flexDirection: 'column' },
  row: { flexDirection: 'row' },
  wrap: { flexWrap: 'wrap' },
  nowrap: { flexWrap: 'nowrap' },

  // ====================================================
  // Positioning for Flex Items
  // ====================================================

  // Columns & Rows need reversed styles to create the same effect
  center: { alignItems: 'center', justifyContent: 'center' },
  topLeft: { alignItems: 'flex-start', justifyContent: 'flex-start' },
  bottomRight: { alignItems: 'flex-end', justifyContent: 'flex-end' },

  columnTopCenter: { alignItems: 'center', justifyContent: 'flex-start' },
  columnTopRight: { alignItems: 'flex-end', justifyContent: 'flex-start' },
  columnCenterLeft: { alignItems: 'flex-start', justifyContent: 'center' },
  columnCenterRight: { alignItems: 'flex-end', justifyContent: 'center' },
  columnBottomLeft: { alignItems: 'flex-start', justifyContent: 'flex-end' },
  columnBottomCenter: { alignItems: 'center', justifyContent: 'flex-end' },

  rowTopCenter: { alignItems: 'flex-start', justifyContent: 'center' },
  rowTopRight: { alignItems: 'flex-start', justifyContent: 'flex-end' },
  rowCenterLeft: { alignItems: 'center', justifyContent: 'flex-start' },
  rowCenterRight: { alignItems: 'center', justifyContent: 'flex-end' },
  rowBottomLeft: { alignItems: 'flex-end', justifyContent: 'flex-start' },
  rowBottomCenter: { alignItems: 'flex-end', justifyContent: 'center' },

  // ====================================================
  // Flex Item Alignment
  // ====================================================

  spaceAround: { justifyContent: 'space-around' },
  spaceBetween: { justifyContent: 'space-between' },

  rowSpaceAround: { alignContent: 'space-around' },
  rowSpaceBetween: { alignContent: 'space-between' },

  alignStart: { alignSelf: 'flex-start' },
  alignCenter: { alignSelf: 'center' },
  alignEnd: { alignSelf: 'flex-end' },
  alignStretch: { alignSelf: 'stretch' },
  alignBaseline: { alignSelf: 'baseline' },

  // ====================================================
  //  Flex Sizing
  // ====================================================

  flex1: { flex: 1 },
  flex2: { flex: 2 },
  flex3: { flex: 3 },
  flex4: { flex: 4 },
  flex5: { flex: 5 },
}
