Rules: Best Practices
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> [ESLint](http://eslint.org/) rules for enforcing best practices.


## Installation

``` bash
$ npm install eslint-rules-best-practices
```


## Usage

``` javascript
var rules = require( 'eslint-rules-best-practices' );
```

#### rules

[ESLint](http://eslint.org/) rules for enforcing best practices.

``` javascript
console.dir( rules );
/*
	{
		'accessor-pairs': 2,
		'block-scope-var': 2,
		...
	}
*/
```


## Examples

``` javascript
var merge = require( 'utils-merge2' )(),
	rules = require( 'eslint-rules-best-practices' ),
	RULES = require( './existing_rules.json' );

// Merge the rules for best practices into an existing ESLint rule set...
RULES = merge( RULES, rules );

console.dir( RULES );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/eslint-rules-best-practices.svg
[npm-url]: https://npmjs.org/package/eslint-rules-best-practices

[travis-image]: http://img.shields.io/travis/kgryte/eslint-rules-best-practices/master.svg
[travis-url]: https://travis-ci.org/kgryte/eslint-rules-best-practices

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/eslint-rules-best-practices/master.svg
[codecov-url]: https://codecov.io/github/kgryte/eslint-rules-best-practices?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/eslint-rules-best-practices.svg
[dependencies-url]: https://david-dm.org/kgryte/eslint-rules-best-practices

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/eslint-rules-best-practices.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/eslint-rules-best-practices

[github-issues-image]: http://img.shields.io/github/issues/kgryte/eslint-rules-best-practices.svg
[github-issues-url]: https://github.com/kgryte/eslint-rules-best-practices/issues
