# React Native 样式工具箱
一个用于快速构建界面的样式工具库

## 安装
```shell
npm i react-native-stylekit --save
```

## 使用
```shell
import React from 'react'
import { View } from 'react-native'
import SK from 'react-native-stylekit'

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

下面的对象默认都有 `borderStyle` 和 `borderColor` 的样式
- b0, bh, b1 borderWidth 分别为 0, 1px, 2px, 3px，
- bt0, bth, bt1 上边框 borderWidth 分别为 0, 0.5, 1
- br0, brh, br1 右边框 borderWidth 分别为 0, 0.5, 1
- bb0, bbh, bb1 下边框 borderWidth 分别为 0, 0.5, 1
- bl0, blh, bl1 左边框 borderWidth 分别为 0, 0.5, 1

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

文字颜色、背景颜色、边框颜色，分别使用 `colorXxx`、`bgXxx`、`borderXxx`（eg. colorSuccess、bgWhite、borderBlack）

> 提供 `textXxx` 作为 `colorXxx` 的别名

额外提供如下颜色对象
```js
...
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
...
```

### flex 栅格布局
#### Flex 容器
```js
...
column: { flexDirection: 'column', flexWrap: 'nowrap' },
row: { flexDirection: 'row', flexWrap: 'wrap' },
...
```

#### Flex 定位
```js
...
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
...
```

#### Flex 对齐
```js
...
spaceAround: { justifyContent: 'space-around' },
spaceBetween: { justifyContent: 'space-between' },

alignStart: { alignSelf: 'flex-start' },
alignCenter: { alignSelf: 'center' },
alignEnd: { alignSelf: 'flex-end' },
alignStretch: { alignSelf: 'stretch' },
...
```

#### Flex Size
```js
...
flex1: { flex: 1 },
flex2: { flex: 2 },
flex3: { flex: 3 },
flex4: { flex: 4 },
flex5: { flex: 5 },
...
```

### typography 排版相关
#### 文本对齐
```js
...
textCenter: { textAlign: 'center' },
textLeft: { textAlign: 'left' },
textRight: { textAlign: 'right' },
...
```
> `tc`、`tl`、`tr` 分别作为 `textCenter`、`textLeft`、`textRight` 的别名

#### 字体大小
```js
...
fs12: { fontSize: 12 },
fs13: { fontSize: 13 },
fs14: { fontSize: 14 },
fs15: { fontSize: 15 },
fs16: { fontSize: 16 },
fs17: { fontSize: 17 },
fs18: { fontSize: 18 },
fs19: { fontSize: 19 },
fs20: { fontSize: 20 },
fs21: { fontSize: 21 },
fs22: { fontSize: 22 },
fs23: { fontSize: 23 },
fs24: { fontSize: 24 },
fs25: { fontSize: 25 },
fs26: { fontSize: 26 },
fs27: { fontSize: 27 },
fs28: { fontSize: 28 },
fs29: { fontSize: 29 },
fs30: { fontSize: 30 },
fs31: { fontSize: 31 },
fs32: { fontSize: 32 },
fs33: { fontSize: 33 },
fs34: { fontSize: 34 },
fs35: { fontSize: 35 },
fs36: { fontSize: 36 },
...
```

#### 行高
```js
...
lh12: { lineHeight: 12 },
lh13: { lineHeight: 13 },
lh14: { lineHeight: 14 },
lh15: { lineHeight: 15 },
lh16: { lineHeight: 16 },
lh17: { lineHeight: 17 },
lh18: { lineHeight: 18 },
lh19: { lineHeight: 19 },
lh20: { lineHeight: 20 },
lh21: { lineHeight: 21 },
lh22: { lineHeight: 22 },
lh23: { lineHeight: 23 },
lh24: { lineHeight: 24 },
lh25: { lineHeight: 25 },
lh26: { lineHeight: 26 },
lh27: { lineHeight: 27 },
lh28: { lineHeight: 28 },
lh29: { lineHeight: 29 },
lh30: { lineHeight: 30 },
lh31: { lineHeight: 31 },
lh32: { lineHeight: 32 },
lh33: { lineHeight: 33 },
lh34: { lineHeight: 34 },
lh35: { lineHeight: 35 },
lh36: { lineHeight: 36 },
lh37: { lineHeight: 37 },
lh38: { lineHeight: 38 },
lh39: { lineHeight: 39 },
lh40: { lineHeight: 40 },
lh41: { lineHeight: 41 },
lh42: { lineHeight: 42 },
lh43: { lineHeight: 43 },
lh44: { lineHeight: 44 },
lh45: { lineHeight: 45 },
lh46: { lineHeight: 46 },
lh47: { lineHeight: 47 },
lh48: { lineHeight: 48 },
lh49: { lineHeight: 49 },
lh50: { lineHeight: 50 },
lh51: { lineHeight: 51 },
lh52: { lineHeight: 52 },
lh53: { lineHeight: 53 },
lh54: { lineHeight: 54 },
lh55: { lineHeight: 55 },
lh56: { lineHeight: 56 },
lh57: { lineHeight: 57 },
lh58: { lineHeight: 58 },
lh59: { lineHeight: 59 },
lh60: { lineHeight: 60 },
lh61: { lineHeight: 61 },
lh62: { lineHeight: 62 },
lh63: { lineHeight: 63 },
lh64: { lineHeight: 64 },
lh65: { lineHeight: 65 },
lh66: { lineHeight: 66 },
lh67: { lineHeight: 67 },
lh68: { lineHeight: 68 },
lh69: { lineHeight: 69 },
lh70: { lineHeight: 70 },
lh71: { lineHeight: 71 },
lh72: { lineHeight: 72 },
...
```

#### 其他字体样式
```js
...
italic: { fontStyle: 'italic' },
tracked: { letterSpacing: 4 },
noTextDecoration: { textDecorationLine: 'none' },
underline: { textDecorationLine: 'underline' },
lineThrough: { textDecorationLine: 'line-through' },

thin: { fontWeight: 200 },
regular: { fontWeight: 400 },
bold: { fontWeight: 700 },
...
```

### utilities 其他工具
#### overflow
```js
...
overflowHidden: { overflow: 'hidden' },
overflowVisible: { overflow: 'visible' },
...
```

> ofh，ofv 作为 overflowHidden，overflowVisible 的别名

#### position
```js
...
relative: { position: 'relative' },
absolute: { position: 'absolute' },

top: { top: 0 },
right: { right: 0 },
bottom: { bottom: 0 },
left: { left: 0 },
...
```

#### image
```js
...
imgCover: { resizeMode: 'cover' },
imgContain: { resizeMode: 'contain' },
imgStretch: { resizeMode: 'stretch' },
...
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
ptb0 { paddingTop: 0, padding-bottom: 0 },
ptb5 { paddingTop: 5, padding-bottom: 5 },
ptb10 { paddingTop: 10, padding-bottom: 10 },
...
ptb5 { paddingTop: 50, padding-bottom: 50 },
```

#### 外补
**外补同补风格一致，对象前缀为 `m`**
