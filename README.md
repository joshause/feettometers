# feettometers.js

JavaScript conversion of feet to meters.

[![Build Status](https://travis-ci.org/joshause/feettometers.svg?branch=master)](https://travis-ci.org/joshause/feettometers)
[![Codacy](https://api.codacy.com/project/badge/grade/c79759de0f7b4520b772d3291748893c)](https://www.codacy.com/app/joshua-ause/feettometers)
[![npm](https://img.shields.io/npm/v/feet-to-meters.svg)](https://www.npmjs.com/package/feet-to-meters)
[![npm](https://img.shields.io/npm/dm/feet-to-meters.svg)](https://www.npmjs.com/package/feet-to-meters)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

## Install

```
$ npm install feet-to-meters
```

## Usage

### Node.js

```js
var FeetToMeters = require("feet-to-meters");
var ftm = new FeetToMeters();
ftm.get(1);
// => 0.3048
```

### Browser

(Add necessary `<script>` tag reference to `feettometers.js`)

```js
// FeetToMeters is autoloaded to window.FeetToMeters
var ftm = new FeetToMeters();
ftm.get(1);
// => 0.3048
```

## Tests

Jasmine

```bash
$ npm test
```

## License

MIT. By [Josh Ause](http://www.github.com/joshause).
