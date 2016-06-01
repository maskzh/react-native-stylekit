import { merge } from 'lodash'
import _borders from './_borders'
import _colors from './_colors'
import _flex from './_flex'
import _typography from './_typography'
import _whitespace from './_whitespace'
import _utilities from './_utilities'

export default merge({}, _borders, _colors, _flex, _typography, _whitespace, _utilities)
