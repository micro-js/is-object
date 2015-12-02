/**
 * Expose isObject
 */

module.exports = isObject['default'] = isObject

/**
 * Check for plain object.
 *
 * @param {Mixed} val
 * @return {Boolean}
 * @api private
 */

function isObject (val) {
  return !!val && val.constructor === Object
}
