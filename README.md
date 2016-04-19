# cls-bluebird2.js

# Patch Bluebird promise library to support continuation-local-storage

## Current status

[![NPM version](https://img.shields.io/npm/v/cls-bluebird2.svg)](https://www.npmjs.com/package/cls-bluebird2)
[![Build Status](https://img.shields.io/travis/overlookmotel/cls-bluebird2/master.svg)](http://travis-ci.org/overlookmotel/cls-bluebird2)
[![Dependency Status](https://img.shields.io/david/overlookmotel/cls-bluebird2.svg)](https://david-dm.org/overlookmotel/cls-bluebird2)
[![Dev dependency Status](https://img.shields.io/david/dev/overlookmotel/cls-bluebird2.svg)](https://david-dm.org/overlookmotel/cls-bluebird2)
[![Coverage Status](https://img.shields.io/coveralls/overlookmotel/cls-bluebird2/master.svg)](https://coveralls.io/r/overlookmotel/cls-bluebird2)

## Usage

This very much a work in progress and not ready for use yet.

Patches [bluebird](https://www.npmjs.com/package/bluebird) to work with [continuation-local-storage](https://www.npmjs.com/package/continuation-local-storage).

Only works with bluebird v3.x at present. And not tested, so may not work at all!

Based on original code by [@arthurschreiber](https://github.com/arthurschreiber).

## Tests

Use `npm test` to run the tests. Use `npm run cover` to check coverage.

## Changelog

See [changelog.md](https://github.com/overlookmotel/cls-bluebird2/blob/master/changelog.md)

## Issues

If you discover a bug, please raise an issue on Github. https://github.com/overlookmotel/cls-bluebird2/issues

## Contribution

Pull requests are very welcome. Please:

* ensure all tests pass before submitting PR
* add an entry to changelog
* add tests for new features
* document new functionality/API additions in README
