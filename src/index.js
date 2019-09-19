const {parse} = require('dotenv')
const fs = require('fs')
const {resolve} = require('path')

const error = require('./error')

const DOT_ENV_PLUGIN = 'DotEnvPlugin'
const DOT_ENV = '.env'

module.exports = class DotEnvPlugin {
  get sandbox () {
    return true
  }

  _readEnv () {
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

    return parse(content.toString())
  }

  apply (getHooks) {
    if (process.env.CAVIAR_SANDBOX !== 'outer') {
      return
    }
    // Only outside the sandbox

    getHooks().sandboxEnvironment.tapPromise(
      DOT_ENV_PLUGIN,
      async sandbox => {
        const env = this._readEnv()

        if (!env) {
          return
        }

        for (const [key, value] of Object.entries(env)) {
          sandbox.setEnv(key, value)
        }
      }
    )
  }
}
