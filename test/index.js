/**
 * Imports
 */

var isObject = require('..')
var test = require('tape')

/**
 * Tests
 */

test('object is object', function (t) {
  t.equal(isObject({}), true)
  t.end()
})

test('instance is not object', function (t) {
  t.equal(isObject(new Cls()), false)
  t.end()

  function Cls () {}
})

test('empty is not object', function (t) {
  t.equal(isObject(), false)
  t.end()
})

test('array is not object', function (t) {
  t.equal(isObject([]), false)
  t.end()
})
