const {Errors} = require('err-object')

const {error, E} = new Errors()

E('ERR_READ_DOTENV', 'fails to read .env file "%s", reason:\n%s')

module.exports = error
