#!/usr/bin/env node
'use strict';

var cases = require('to-case').cases,
    concat = require('concat-stream'),
    helpVersion = require('help-version')(usage());


function usage() {
  var exampleInput = 'one, two, and Three';

  var lines = [
    'Usage:  caser <option>',
    '',
    'Caser reads from stdin and writes to stdout.',
    '',
    'Options (input=' + JSON.stringify(exampleInput) + '):'
  ].concat(Object.keys(cases).map(function (caseType) {
    return '  --' + caseType + '\t' + cases[caseType](exampleInput);
  }));

  return lines.join('\n');
}


var toCaseFunction = function (arg) {
  if (arg.slice(0, 2) != '--') {
    return null;
  }
  return cases[arg.slice(2)] || null;
};


(function main(argv) {
  var caseFunction = toCaseFunction(argv[0]);

  if (argv.length != 1 || !caseFunction) {
    return helpVersion.help(1);
  }

  process.stdin.pipe(concat({ encoding: 'string' }, function (input) {
    process.stdout.write(caseFunction(input));
  }));
}(process.argv.slice(2)));
