# feettometers.js

JavaScript conversion of feet to meters.

[![Build Status](https://travis-ci.org/joshause/feettometers.svg?branch=master)](https://travis-ci.org/joshause/feettometers)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

## Usage

### Node.js

```js
var FeetToMeters = require("./feettometers");
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

```bash
$ jasmine
```

## License

MIT. By [Josh Ause](http://www.github.com/joshause).
