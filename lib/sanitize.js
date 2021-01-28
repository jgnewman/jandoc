function dieOnBadVal(val) {
  if (!val) {
    console.error('ERROR: You provided an invalid argument value.');
    process.exit(1);
  }
}

function saneBool(val) {
  dieOnBadVal(val === true || val === false);
}

function saneNum(val) {
  dieOnBadVal(typeof val === 'number');
}

function saneStr(options) {
  return function (val) { dieOnBadVal(options.includes(val)) };
}

function saneUsrStr(val) {
  dieOnBadVal(/^[A-z0-9_\-]+$/.test(val));
}

function sanePath(val) {
  dieOnBadVal(/^[A-z0-9_\-\s\.\:\/\\]+$/.test(val));
}

function sanePathArray(val) {
  val.forEach(function (item) {
    sanePath(val);
  });
}

var allowList = {
  input: sanePath,
  output: sanePath,
  read: sanePath,
  write: sanePath,
  dataDir: sanePath,
  strict: saneBool,
  parseRaw: saneBool,
  smart: saneBool,
  oldDashes: saneBool,
  baseHeaderLevel: saneNum,
  indentedCodeClasses: saneUsrStr,
  nomalize: saneBool,
  preserveTabs: saneBool,
  tabStop: saneNum,
  standalone: saneBool,
  template: sanePath,
  printDefaultTemplate: sanePath,
  noWrap: saneBool,
  columns: saneNum,
  toc: saneBool,
  noHighlight: saneBool,
  highlightStyle: saneUsrStr,
  includeInHeader: sanePath,
  includeBeforeBody: sanePath,
  includeAfterBody: sanePath,
  selfContained: saneBool,
  offline: saneBool,
  html5: saneBool,
  ascii: saneBool,
  referenceLinks: saneBool,
  atxHeaders: saneBool,
  chapters: saneBool,
  numberSections: saneBool,
  noTexLigatures: saneBool,
  listings: saneBool,
  incremental: saneBool,
  slideLevel: saneNum,
  sectionDivs: saneBool,
  emailObfuscation: saneStr(['none', 'javascript', 'references']),
  idPrefix: saneUsrStr,
  titlePrefix: saneUsrStr,
  referenceOdt: sanePath,
  referenceDocx: sanePath,
  epubStylesheet: sanePath,
  epubCoverImage: sanePath,
  epubMetadata: sanePath,
  epubEmbedFont: sanePathArray,
  latexEngine: saneUsrStr,
  bibliography: sanePath,
  csl: sanePath,
  citationAbbreviations: sanePath,
  natbib: saneBool,
  biblatex: saneBool,
  gladtex: saneBool,
  dumpArgs: saneBool,
  ignoreArgs: saneBool,
  version: saneBool,
  help: saneBool,
};

module.exports = function (key, val) {
  if (!Object.prototype.hasOwnProperty.call(allowList, key)) {
    dieOnBadVal(false);
  }

  allowList[key](val);
  return true;
}
