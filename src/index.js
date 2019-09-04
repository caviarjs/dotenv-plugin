const {parse} = require('dotenv')
const fs = require('fs')
const {resolve} = require('path')
const {isString} = require('core-util-is')

const error = require('./error')

const DOT_ENV_PLUGIN = 'DotEnvPlugin'

module.exports = class DotEnvPlugin {
  constructor (filepath) {
    if (!isString(filepath)) {
      throw error('INVALID_FILE_PATH', filepath)
    }

    filepath = resolve(process.env.CAVIAR_CWD, filepath)

    let content

    try {
      content = fs.readFileSync(filepath)
    } catch (err) {
      throw error('ERR_READ_DOTENV', filepath, err.stack)
    }

    this._envs = parse(content.toString())
  }

  apply (getHooks) {
    getHooks().beforeConfig.tap(DOT_ENV_PLUGIN, () => {
      Object.assign(process.env, this._envs)
    })
  }
}
