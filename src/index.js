const {parse} = require('dotenv')
const fs = require('fs')
const {resolve} = require('path')

const error = require('./error')

const DOT_ENV_PLUGIN = 'DotEnvPlugin'
const DOT_ENV = '.env'

module.exports = class DotEnvPlugin {
  constructor () {
    const filepath = resolve(process.env.CAVIAR_CWD, DOT_ENV)

    let content

    try {
      content = fs.readFileSync(filepath)
    } catch (err) {
      if (err.code === 'ENOENT') {
        return
      }

      throw error('ERR_READ_DOTENV', filepath, err.stack)
    }

    this._env = parse(content.toString())
  }

  apply (getHooks) {
    if (!this._env) {
      return
    }

    getHooks().beforeConfig.tap(DOT_ENV_PLUGIN, () => {
      Object.assign(process.env, this._env)
    })
  }
}
