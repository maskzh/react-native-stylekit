# React Native 样式工具箱 [![Build Status](https://travis-ci.org/maskzh/react-native-stylekit.svg?branch=master)](https://travis-ci.org/maskzh/react-native-stylekit) [![npm version](https://img.shields.io/npm/v/react-native-stylekit.svg)](https://www.npmjs.org/package/react-native-stylekit)
一个用于快速构建界面的样式工具库

## 安装
```shell
npm i react-native-stylekit --save
```

## 使用
```shell
import React from 'react'
import { View } from 'react-native'
import stylekit from 'react-native-stylekit'

const SK = stylekit({ borderColor: '#eee' })

export default () =>
  <View style={[SK.p1, SK.m1]}></View>
```

## 文档
  - [borders](#borders-边框相关)
  - [colors](#colors-文字色背景色边框色)
  - [flex](#flex-栅格布局)
  - [typography](#typography-排版相关)
  - [utilities](#utilities-其他工具)
  - [whitespace](#whitespace-内补外补)

### borders 边框相关
默认的 borderStyle 为 `solid`，默认的 borderColor 为 `#D9D9D9`，默认的 borderRadius 为 `5px`

#### 边框类型
下面的对象默认都有 `borderStyle` 和 `borderColor` 的样式
```js
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
```
#### 边框其他样式
- .rounded     { borderRadius: $borderRadius }
- .not-rounded { borderRadius: 0 }


### colors 文字色背景色边框色
提供文字颜色、边框颜色支持的颜色
```js
const $primary = '#337ab7'
const $success = '#5cb85c'
const $info = '#5bc0de'
const $warning = '#f0ad4e'
const $danger = '#d9534f'

const $white = '#fff'
const $silver = '#F4F4F4'
const $lightgrey = '#ececec'
const $grey = '#ccc'
const $midgrey = '#777'
const $darkgrey = '#444'
const $black = '#222'
const $trueblack = '#000'
```

**文字颜色、背景颜色、边框颜色，分别使用 `colorXxx`、`bgXxx`、`borderXxx`（eg. colorSuccess、bgWhite、borderBlack）**

> 提供 `textXxx` 作为 `colorXxx` 的别名

额外提供如下颜色对象
```js
c0: { color: #000 },
c1: { color: #111 },
c2: { color: #222 },
c3: { color: #333 },
c4: { color: #444 },
c5: { color: #555 },
c6: { color: #666 },
c7: { color: #777 },
c8: { color: #888 },
c9: { color: #999 },
ca: { color: #aaa },
cb: { color: #bbb },
cc: { color: #ccc },
cd: { color: #ddd },
ce: { color: #eee },
cf: { color: #fff },
```

### flex 栅格布局
#### Flex 容器
```js
column: { flexDirection: 'column', flexWrap: 'nowrap' },
row: { flexDirection: 'row', flexWrap: 'wrap' },
```

#### Flex 定位
```js
center: { alignItems: 'center', justifyContent: 'center' },
topLeft: { alignItems: 'flex-start', justifyContent: 'flex-start' },
bottomRight: { alignItems: 'flex-end', justifyContent: 'flex-end' },

// row 和 column 定位不同，所以要分开写
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
```

#### Flex 对齐
```js
spaceAround: { justifyContent: 'space-around' },
spaceBetween: { justifyContent: 'space-between' },

alignStart: { alignSelf: 'flex-start' },
alignCenter: { alignSelf: 'center' },
alignEnd: { alignSelf: 'flex-end' },
alignStretch: { alignSelf: 'stretch' },
```

#### Flex Size
```js
flex1: { flex: 1 },
flex2: { flex: 2 },
flex3: { flex: 3 },
flex4: { flex: 4 },
flex5: { flex: 5 },
```

### typography 排版相关
#### 文本对齐
```js
textCenter: { textAlign: 'center' },
textLeft: { textAlign: 'left' },
textRight: { textAlign: 'right' },
```
> `tc`、`tl`、`tr` 分别作为 `textCenter`、`textLeft`、`textRight` 的别名

#### 字体大小
```js
fs12: { fontSize: 12 },
fs13: { fontSize: 13 },
fs14: { fontSize: 14 },
fs15: { fontSize: 15 },
fs16: { fontSize: 16 },
...
fs35: { fontSize: 35 },
fs36: { fontSize: 36 },
```

#### 行高
```js
lh12: { lineHeight: 12 },
lh13: { lineHeight: 13 },
lh14: { lineHeight: 14 },
lh15: { lineHeight: 15 },
lh16: { lineHeight: 16 },
...
lh71: { lineHeight: 71 },
lh72: { lineHeight: 72 },
```

#### 其他字体样式
```js
italic: { fontStyle: 'italic' },
tracked: { letterSpacing: 4 },
noTextDecoration: { textDecorationLine: 'none' },
underline: { textDecorationLine: 'underline' },
lineThrough: { textDecorationLine: 'line-through' },

thin: { fontWeight: 200 },
regular: { fontWeight: 400 },
bold: { fontWeight: 700 },
```

### utilities 其他工具
#### overflow
```js
overflowHidden: { overflow: 'hidden' },
overflowVisible: { overflow: 'visible' },
```

> ofh，ofv 作为 overflowHidden，overflowVisible 的别名

#### position
```js
relative: { position: 'relative' },
absolute: { position: 'absolute' },

top: { top: 0 },
right: { right: 0 },
bottom: { bottom: 0 },
left: { left: 0 },
```

#### image
```js
imgCover: { resizeMode: 'cover' },
imgContain: { resizeMode: 'contain' },
imgStretch: { resizeMode: 'stretch' },
```

### whitespace 内补外补
提供内补和外补，以 `10` 为粒度

#### 内补
```js
p0 { padding: 0 },
p5 { padding: 5 },
p10 { padding: 10 },
...
p50 { padding: 50 },

/*
pt => paddingTop
pr => paddingRight
pb => paddingBottom
pl => paddingLeft
*/
pt0 { paddingTop: 0 },
pt5 { paddingTop: 5 },
pt10 { paddingTop: 10 },
...
pt50 { paddingTop: 50 },

/*
ptb => paddingTop & paddingBottom
plr => paddingRight & paddingLeft
*/
ptb0 { paddingTop: 0, paddingBottom: 0 },
ptb5 { paddingTop: 5, paddingBottom: 5 },
ptb10 { paddingTop: 10, paddingBottom: 10 },
...
ptb5 { paddingTop: 50, paddingBottom: 50 },
```

#### 外补
**外补同补风格一致，对象前缀为 `m`**
