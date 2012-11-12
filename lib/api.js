/*
 * Module for wrapping the Pandoc API up in a JS-style package.
 */

var util = require('util'),

    /*
     * cmd() - takes a string and a function
     *
     * Executes the string on the command line and passes
     * the output to the function.
     *
     * The function takes 3 args: err, stdout, stderr
     */
    cmd = require('child_process').exec;


function puts(error, stdout, stderr) {
  util.puts(stdout);
}

cmd("ls -la", puts);


/*
HTML:
  standalone:  boolean (null) (-s)
  smartquotes: boolean (null) (-S)
  toc:         boolean (null) (--toc)
  css:         string  (null) (-s -c [FILENAME])
  output:      string  (err)  (-o [FILENAME])
  footer:      string  (null) (-s -A [FILENAME])

GENERAL:
  restructure: boolean (null) (-w rst)
  beamer:      boolean (null) (-t beamer)
  docbook:     boolean (null) (-s -S -w docbook)
  manpage:     boolean (null) (-s -w man)
  context:     boolean (null) (-s -w context)
  template:    string  (null) (-N --template=[STRING])
  vars:        hash    (null) (for each option, --variable [OPTION]=[VALUE])
                              (available options: mainfont, sansfont, monofont, fontsize, version)
*/

pandoc -N --template=mytemplate.tex --variable mainfont=Georgia --variable sansfont=Arial --variable monofont="Bitstream Vera Sans Mono" --variable fontsize=12pt --variable version=1.9 README --latex-engine=xelatex --toc -o example14.pdf

function pandocConfig(inputFile, outputFile, config) {
  
}