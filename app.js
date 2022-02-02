const fs = require('fs')

const validator = require('validator')

const chalk = require('chalk')

const yargs = require('yargs')

const notes = require('./notes')

yargs.version('1.1.0')

// Add a new note
yargs.command({

  command: 'add',

  describe: 'Add a new note',

  builder: {

    title: {

      describe: 'Note Title',

      demandOption: true,

      type: 'string'

    },

    body: {

      describe: 'Note Body',

      demandOption: true,

      type: 'string'

    },

  },

  handler: argv => {

    console.log("Adding a new note...");

    notes.addNote(argv.title, argv.body)

  }

})

// Remove a note
yargs.command({

  command: 'remove',

  describe: 'Remove a new note',

  builder: {

    title: {

      describe: 'Note Title',

      type: 'string',

      demandOption: true

    }

  },

  handler: argv => {

    console.log("Removing a new note...");

    notes.removeNote(argv.title)

  }

})

// List Notes
yargs.command({

  command: 'list',

  describe: 'List all note',

  handler: () => {

    console.log("Listing all notes: \n");

    notes.listNotes()

  }

})

// Read a note
yargs.command({

  command: 'read',

  describe: 'Read a new note',

  builder: {

    title: {

      describe: 'Note Title',

      type: 'string',

      demandOption: true

    }

  },

  handler: argv => {

    notes.readNote(argv.title)

  }

})


yargs.parse()