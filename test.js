const test = require('tape')
const fadeSteps = require('./')

test('fadeSteps', function (t) {
  t.plan(5)
  t.deepEqual(fadeSteps('000', 'fff', 2), ['000000', 'ffffff'], 'shorthand')
  t.deepEqual(fadeSteps('000000', 'ffffff', 2), ['000000', 'ffffff'], 'longhand')
  t.deepEqual(fadeSteps('000000', 'ff00ff', 3), ['000000', '800080', 'ff00ff'], 'multistep')
  t.throws(function () {
    fadeSteps()
  }, /Invalid Colour Hex/, 'throws on invalid colour')
  t.throws(function () {
    fadeSteps('22')
  }, /Invalid Colour Hex/, 'throws on invalid colour')
})

test('.hexToRgb', function (t) {
  t.plan(1)
  t.deepEqual(fadeSteps.hexToRgb('ff00ff'), [255, 0, 255])
})

test('.rgbToHex', function (t) {
  t.plan(1)
  t.deepEqual(fadeSteps.rgbToHex(255, 0, 255), 'ff00ff')
})
