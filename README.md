[![Build Status](https://travis-ci.org/caviarjs/dotenv-plugin.svg?branch=master)](https://travis-ci.org/caviarjs/dotenv-plugin)
[![Coverage](https://codecov.io/gh/caviarjs/dotenv-plugin/branch/master/graph/badge.svg)](https://codecov.io/gh/caviarjs/dotenv-plugin)
<!-- optional appveyor tst
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/caviarjs/dotenv-plugin?branch=master&svg=true)](https://ci.appveyor.com/project/caviarjs/dotenv-plugin)
-->
<!-- optional npm version
[![NPM version](https://badge.fury.io/js/@caviar/dotenv-plugin.svg)](http://badge.fury.io/js/@caviar/dotenv-plugin)
-->
<!-- optional npm downloads
[![npm module downloads per month](http://img.shields.io/npm/dm/@caviar/dotenv-plugin.svg)](https://www.npmjs.org/package/@caviar/dotenv-plugin)
-->
<!-- optional dependency status
[![Dependency Status](https://david-dm.org/caviarjs/dotenv-plugin.svg)](https://david-dm.org/caviarjs/dotenv-plugin)
-->

# @caviar/dotenv-plugin

caviar plugin to support `.env` file.

This plugin is a **sandbox** plugin which only works when caviar sandbox is enabled.

## Install

```sh
$ npm i @caviar/dotenv-plugin -D
```

## Usage

.env

```sh
SITE_HOST=https://google.com

SITE_PORT=8888
```

config.js

```js
const DotEnvPlugin = require('@caviar/dotenv-plugin')

module.exports = {
  caviar: {
    plugins: [
      new DotEnvPlugin()
    ],
    ...
  },
  ...
}
```

## License

[MIT](LICENSE)
