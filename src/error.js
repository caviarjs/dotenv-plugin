const {Errors} = require('err-object')

const {error, E, TE} = new Errors()

TE('INVALID_FILE_PATH', 'filepath must be a string')

E('ERR_READ_DOTENV', 'fails to read .env file "%s", reason:\n%s')

module.exports = error
