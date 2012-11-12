Jandoc
======

>A wrapper for the pandoc document conversion tool with more options.

**CURRENTLY IN DEVELOPMENT**

[Pandoc](https://github.com/jgm/pandoc) is a universal markup converter written
in Haskell.  It's a great tool for converting one kind of document into another
but I thought it might be nice if there was a way to use it to convert multiple
documents at once and do a few other things.

Jandoc is written in Node.js and exposes Pandoc functionality in a couple of
different ways:

1. You can call it through the command line, just like you might expect.
2. You have an object-oriented API you can use from within a JS module.

**Note:** As of now, Jandoc does not support `xmlto` and `texexec` options.

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

Coming soon...

JavaScript API
--------------

Coming soon...
