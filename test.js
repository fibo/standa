const assert = require('assert')

const majorVersion = require('./package.json').version.split('.')[0]
const desiredMajorVersion = require('./node_modules/eslint-config-standard/package.json').version.split('.')[0]

assert.equal(majorVersion, desiredMajorVersion)
