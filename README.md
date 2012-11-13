Jandoc
======

>A wrapper for the Pandoc document conversion tool with more options.

[Pandoc](https://github.com/jgm/pandoc) is a universal markup converter written
in Haskell.  It's a great tool for converting one kind of document into another
but I thought it might be nice if there was a way to use it to convert multiple
documents at once and expose its API through JavaScript.

Jandoc is written in Node.js and does just that.  The API is exposed in
two different ways:

1. You can call it through the command line, just like you might expect.
2. You have an object-oriented API you can use from within a JS module.

Dependencies
------------

1. Pandoc
2. Node.js
3. Npm (package manager for Node)

Pandoc is written in Haskell but there are multiple installation options. Of
course you'll have to install the Haskell platform.  Then, depending on your
preferred method of installation, you may or may not want to grab the
Haskell package manager Cabal.

Installation
------------

Jandoc is an Npm package.  So, once you have the dependencies listed above
installed, just do one of these: `~$ npm install jandoc`.

Command Line API
----------------

Calling Jandoc with your Unix command line is very similar to calling Pandoc with
the Unix command line although there are a couple of differences.

First, Jandoc requires your input filename argument to follow a flag.  So, whereas
Pandoc would only require this...

```bash
~$ pandoc inputFile.md -o outputFile.docx
```

...Jandoc requires this:

```bash
~$ jandoc -d inputFile.md -o outputFile.docx
```

That said, Jandoc allows you to pass in directory paths for both the `-d` (a.k.a, `--input-data`)
and `-o` (a.k.a, `--output-location`) arguments.

```bash
~$ jandoc -d inputDir -o outputDir -t docx
```

The above example converts all files in `inputDir` into files with corresponding names inside
`outputDir`.  Since both arguments are directory paths, we use the `-t` argument to specify
output file type.  If `outputDir` doesn't exist yet, it will be created.

Apart from these small differences, the command line API is synonymous with the Pandoc
command line API.  Simply pass in other Pandoc arguments and they will be handed over to Pandoc.

JavaScript API
--------------

For now the JavaScript API is dirt simple but there are plans in place to awesomize it
in the near future.  Currently it installs as a Node.js module so to pull it in, simply
require it:

```javascript
var jandoc = require('jandoc');
```

Then, to use it, all you have to do is pass a Unix command to `jandoc.cmd` like so:

```javascript
jandoc.cmd('-d inputDir -o outputDir -t docx');
```

This will pass your Jandoc command through Node into the Unix interface.
