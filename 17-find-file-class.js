'use strict'

// dependencies

const EventEmitter = require('events').EventEmitter;
const path = require('path');

// definition

class FindFiles extends EventEmitter {

  constructor(extension) {
    super()
    this.extension = extension
    this.files = []
  }

  addFiles(file) {
    this.files.push(file);
    return this;
  }

  // check for matches

  findFiles() {
    process.nextTick(() => {
      this.files.forEach(file => {
        if(path.extname(file) === this.extension) {
          this.emit('match', file);
        }
      })
    })
    return this;
  }
}

// instantiation of observable object
const FindFileSearcher = new FindFiles('.js');

// ImplementationFindFilesSearcher
FindFilesSearcher
  .addFile('file1.js')
  .addFile('file2.md')
  .addFile('file3.js')
  .findFiles()
  .on('match', console.log)
  .on('error', err => {
    return console.error(err)
  })