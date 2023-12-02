
const fs = require('fs')
const chalk = require('chalk')

/// CHALLENGE 2:  define and use a function in a new file
//1. create a new file called notes.js
//2. create getNotes function that returns "Your notes.."
//3. export getNotes Function
//4. from app.js, load in and call the function printing message to console. 

const { Module } = require("module")

//step 2: function defined
// update to arrow function 
// const getNotes = function()
const getNotes = () => {
    return 'Your notes...'
}


// add note 
// add arrow function since not object 
// previous: const addNote = function(title, body) {
const addNote = (title, body) => {
//.. load existing notes
 const notes = loadNotes()

 //check if existing title already exists
// create variable to hold duplicates      

//  const duplicateNotes = notes.filter(function (note) {
//     return note.title === title

//  })

//  refactored....
//        variable        parameter function                     return statment
// const duplicateNotes = notes.filter((note) => note.title === title) // .filter returns array of matches
const duplicateNote = notes.find((note) => note.title === title) // .find method returns FIRST match it finds if any 

 if (!duplicateNote) { //if not duplicate note or (duplicateNote === undefined) 
 notes.push({
    title: title,
    body: body
 })

 saveNotes(notes)
 console.log(chalk.green.inverse('new note added!'))

} else {
    console.log(chalk.red.inverse('note title taken!'))
}
}

//test by terminal: node app.js add --title="List" --body="Sweater, Pants"
//output: note title taken!



// create remove function
//                              v--- needs title in function to delete 
// const removeNote = function (title) {
//     const notes = loadNotes()
//     const notesToKeep = notes.filter( function (note) {
  //return true when its NOT a match, if not a match- those are the
  //ones you want to keep 
        // return note.title !== title 

         //otherwise, it is FALSE if are a match, will be removed
    // })

 //   refactored :


 const removeNote = (title)  => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
 

// if note is removed change to green BG
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('note removed!'))
        saveNotes(notesToKeep)
    } else { //note not removed, change bg to RED

        console.log(chalk.red.inverse('no note found'))
    }

 }


 ///--------- challenge section4 #23

 const listNotes = () => {

    const notes = loadNotes()    


    console.log(chalk.inverse('Your notes'))

    notes.forEach((note => {
        console.log(note.title)
    }));
 }

 //---------------- challenge #24, module 4. 

 const readNote = (title) => {

    const notes = loadNotes()
    const note = notes.find((note) => note.title === title) // looking for a match with find(), then use => to return true, saying we found a match when when note.title equals title argument

    if (note) {
        console.log(chalk.inverse.blue(note.title))
        console.log(note.body)
    }

    else {
        console.log(chalk.inverse.red('note not found'))

    }


}


//-----------
// const saveNotes = function (notes) { <---- previous
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
// notes.json file gets updated: [{"title":"t","body":"b"}]
// update notes.json file by writing on terminal to add note string: 
//node app.js add --title="List" --body="Sweater, Pants"  
}

// const loadNotes = function () { <--- previous
const loadNotes = () => {

//    we set up our catch block and we define our error, which I'll just call (e).
//    and we set up our catch code block.
//    Now if any of the code inside of try throws an error, that code is immediately 
//    gonna stop, and it's going to run the catch block instead.
    try {

        //load and parse notes
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)

    } catch (e) {
        //if FAILS
       // So that means, we can take these three lines, cut them out, and move them in to TRY.
        // So if either of these three lines throws an error, the code will immediately stop,
        // and it'll run catch instead. If they all work, that's great, will get the parsed data back as expected.
        return[] //return empty arrray / empty file 

        // then run node app.js add --title="t" --body="b"
        //output ---> []
    }
}

//step 3: export getNotes function
// module.exports = getNotes

   //export 
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}

// step 4: go back to app.js... to load and call function 


////-------------------------------------

/// challenge module 4, #22 Refactor all functions

// 1. if function is a method, use ES6 method definition syntax
// 2. otherwise, use most concise arrow function possible 
// 3. test work 


////-------------------------------------

