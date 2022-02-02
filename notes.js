const fs = require('fs')

const chalk = require('chalk')


const addNote = (title, body) => {

  const notes = loadNotes()

  const duplicateNotes = notes.find(item => item.title === title)

  if (!duplicateNotes) {

    notes.push({

      title: title,

      body: body

    })

    saveNotes(notes)

    console.log(chalk.green("New note added"));

  } else {

    console.log(chalk.red("Duplicate Title!!"));

  }

}

const removeNote = title => {

  const notes = loadNotes()

  const remainingNotes = notes.filter(item => item.title !== title)

  if (remainingNotes.length == notes.length) {

    console.log(chalk.red("Note Doesn't Exist!!"));

  } else {

    saveNotes(remainingNotes)

    console.log(chalk.blue("Note Removed"));

  }

}

const listNotes = () => {

  const notes = loadNotes()

  if (notes.length > 0) {

    notes.forEach(note => {

      console.log(chalk.greenBright(note.title));
      
    })

  } else {

    console.log(chalk.gray("No Notes Present!!"));

  }

}

const readNote = title => {

  const notes = loadNotes()

  const desiredNote = notes.find(item => item.title === title)

  if (desiredNote) {

    console.log(chalk.bold("Title: " + desiredNote.title));
    console.log(desiredNote.body);

  } else {

    console.log(chalk.red("Note Doesn't Exist!!"));

  }

}

const loadNotes = () => {

  try {

    const dataBuffer = fs.readFileSync('notes.json')

    const dataJson = JSON.parse(dataBuffer.toString())

    return dataJson

  } catch (e) {

    return []

  }

}

const saveNotes = (data) => {

  fs.writeFileSync('notes.json', JSON.stringify(data))

}


module.exports = {

  addNote: addNote,

  removeNote: removeNote,

  listNotes: listNotes,

  readNote: readNote,

}