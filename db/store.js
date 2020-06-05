const util = require('util');
const fs = require('fs');
const uuidv1 = require('uuidv1');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read(){
        return readFileAsync('db/db.json', 'utf8');
    }
    write(note){
        return writeFileAsync('db/db.json', JSON.stringify(note))
    }

    getNotes(){
        return this.read().then(notes => {
            let parsedNotes;
            try {
                parsedNotes = [].concat(JSON.parse(notes))
            } catch(err) {
                parsedNotes = []
            }
            return parsedNotes;
        })
    }

    addNotes(note){
        const { title, text } = note;
        if (!title || !text ) {
            throw new Error("Note 'title' and 'text' cannot be empty");
        }
    const newNote = { title, text, id: uuidv1() };

    return this.getNotes()
    .then(notes => [...notes, newNote])
    .then(filteredNote => this.write(filteredNotes))
    }
}

module.exports = new Store();