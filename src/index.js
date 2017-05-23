import _borders from './_borders'
import _colors from './_colors'
import _flex from './_flex'
import _typography from './_typography'
import _whitespace from './_whitespace'
import _utilities from './_utilities'

export default variables => Object.assign(
  {},
  _borders(variables),
  _colors(variables),
  _flex,
  _typography,
  _whitespace,
  _utilities,
)
