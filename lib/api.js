/*
 * Module for wrapping the Pandoc API up in a JS-style package.
 */


/*
 * cmd() - takes a string and a function
 *
 * Executes the string on the command line and passes
 * the output to the function.
 *
 * The function takes 3 args: err, stdout, stderr
 */
var cmd = require('child_process').exec;


function argCheck(num) {
  if (arguments.length !== num) {
    console.error('Wrong number of arguments.');
    process.exit(1);
  }
}



/*
 * CONFIG OPTIONS:
 *   fragment:    boolean (null) (don't include -s)
 *   smartquotes: boolean (null) (-S)
 *   toc:         boolean (null) (--toc)
 *   css:         string  (null) (-c [FILENAME])
 *   footer:      string  (null) (-s -A [FILENAME])
 */
function pandocToHTML(inputFile, outputFile, config) {
  var command;
  argCheck(3);
  command = 'pandoc ' + inputFile;
  
  if (config.fragment !== true) {
    command += ' -s';
  }
  
  if (config.smartquotes === true) {
    command += ' -S';
  }
  
  if (config.toc === true) {
    command += ' --toc';
  }
  
  if (config.css && typeof config.css === 'string') {
    command += (' -c ' + config.css);
  }
  
  if (config.footer && typeof config.footer === 'string') {
    command += (' -A ' + config.footer);
  }
  
  command += (' -o ' + outputFile);
  
  return cmd(command, null);
}

/*
 * CONFIG OPTIONS:
 *   template:    string  (null) (-N --template=[STRING])
 *   vars:        hash    (null) (for each option, --variable [OPTION]=[VALUE])
 *                               (available options: mainfont, sansfont, monofont, fontsize, version)
 */
function pandocToPDF(inputFile, outputFile, config) {
  var command, i;
  argCheck(3);
  command = 'pandoc ' + inputFile;
  
  if (config.template && typeof config.template === 'string') {
    command += (' -N --template=' + config.template);
  }
  
  if (config.vars) {
    for (i in config.vars) {
      if (Object.prototype.hasOwnProperty.call(config.vars, i)) {
        command += (' --variable=' + i + ':' + config.vars[i]);
      }
    }
  }
  
  return cmd(command, null);
}



module.exports = {
  "topdf" : function (input, output, config) {
    if (!config) {
      config = {};
    }
    return pandocToPDF(input, output, config);
  },
  
  "tohtml" : function (input, output, config) {
    if (!config) {
      config = {};
    }
    return pandocToHTML(input, output, config);
  },
  
  "cmdLine" : cmd
};


