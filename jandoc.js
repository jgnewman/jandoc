/*
 * Expose the Jandoc API to JavaScript
 */

var procedure = require('./lib/procedure'),
    argParse  = require('./lib/argparser').parse;


function trim(str) {
  return str.replace(/^\s+/, '').replace(/\s+$/, '');
}


module.exports = {
  "cmd" : function (str) {
    var cleanArgs = trim(str).split(/\s+/g),
        args      = argParse(cleanArgs, [
          ['-v', '--version'],
          ['-h', '--help'],
          ['-d', '--input-data'],
          ['-o', '--output-location']
        ]);
    procedure.init(cleanArgs, args);
  }
};

